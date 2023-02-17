import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import fvttActorBlank from './data/fvtt-actor-npc-character.json';
import axios from 'axios';

const apiKey = '8f18277184598e1f4c7ab4b517a04943';

function App() {
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append('document', image);
      const config = {
        method: 'post',
        url: 'https://api.mindee.net/v1/products/zachselsewhere/symb_stat_blocks/v1.6/predict',
        headers: { 
          'Content-Type': 'multipart/form-data', 
          'Accept': 'application/json', 
          'Authorization': apiKey, 
        },
        data : data
      };

      const response = await axios(config);
      setResponse(response.data);
      updateJSON(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateJSON = async (response) => {
    let newFvttActorBlank = JSON.parse(JSON.stringify(fvttActorBlank));
    // Obtain Name Values
    let nameValue = response.document.inference.prediction.type.values.map((val) => val.content).join(' ');
    newFvttActorBlank.name = nameValue;
    // Obtain Accurate Value
    newFvttActorBlank.data.attributes.accurate.value = response.document.inference.prediction.symb_acc.values[0].content;

    try {
      const actor = await game.actors.create(newFvttActorBlank, { renderSheet: true, displaySheet: true });
      ui.notifications.notify(`New actor created: ${actor.name}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>JSON File Update Tool</h1>
      <div className="input-container">
        <label htmlFor="image-upload">Select an Image</label>
        <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {response && (
        <div className="response-container">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
