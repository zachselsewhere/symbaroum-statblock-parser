# Symbaroum Statblock Parser

This is a module for the Foundry Virtual Tabletop (VTT) that allows users to parse Symbaroum Stat blocks and create new actors in their game world. The module integrates with a ReactJS app that takes an image of a Symbaroum Stat block as input and uses the Mindee API to extract relevant JSON data, which is then used to populate a Foundry VTT actor.

## Installation

To install this module, follow these steps:

1. Download the latest release of the module from the [Releases](https://github.com/zachselsewhere/symbaroum-statblock-parser/releases) page.

2. Extract the downloaded zip file into the `Data/modules` folder of your Foundry VTT installation.

3. Enable the "Symbaroum Statblock Parser" module in the "Manage Modules" dialog of your Foundry VTT game world.

## Usage

To use this module, follow these steps:

1. Open your Foundry VTT game world and navigate to the Actors directory.

2. Click on the "Stat Block Parser" button in the header to open the ReactJS app.

3. Select an image of a Symbaroum Stat block and click on the "Submit" button to parse the data.

4. If the parsing is successful, the parsed JSON data will be displayed in the app. Click on the "Create Actor" button to create a new actor in your game world using the parsed data.

5. The new actor will be added to your game world and can be edited or used in your game sessions as needed.

## Credits

This module was developed by ZachsElsewhere (https://github.com/zachselsewhere) and uses the following third-party libraries:

- [Axios](https://github.com/axios/axios) for making HTTP requests.
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/) for saving files from the browser.
- [React](https://reactjs.org/) and [React DOM](https://reactjs.org/docs/react-dom.html) for building the user interface.

## License

This module is released under the MIT License. See the [LICENSE](LICENSE) file for more details.
