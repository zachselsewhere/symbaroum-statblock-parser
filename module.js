Hooks.on('init', () => {
  console.log('Symbaroum Statblock Parser module is initialized');
});

Hooks.on('ready', () => {
  console.log('Symbaroum Statblock Parser module is ready');
  const parserButton = $('<button class="parse-statblock">Stat Block Parser</button>');
  parserButton.click(() => {
    game.platform.showHtmlTab('modules/symbaroum-statblock-parser/app.html');
  });
  $('.directory-header .controls').append(parserButton);
});

Hooks.on('closeHtmlTab', (app, element) => {
  if (app === 'symbaroum-statblock-parser') {
    console.log('Stat Block Parser app is closed');
  }
});
