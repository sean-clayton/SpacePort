var config = require('./config.json');
var remote = require('remote');
var BrowserWindow = remote.require('browser-window');
var win = remote.getCurrentWindow();
var themeName = config.theme.name;
var themeFile = './res/themes/' + themeName + '/style.css';
var theme = document.createElement('link');
theme.href = themeFile;
theme.rel = 'stylesheet';
var head = document.getElementsByTagName('head')[0];
head.appendChild(theme);

$('#close-button').click(function() {
  win.close();
});

$('#minimize-button').click(function() {
  win.minimize();
});

if(win.isResizable()) {
  var parent = document.getElementsByClassName('window-controls')[0];
  var maxmizeButton = document.createElement('object');
  maxmizeButton.data = './res/components/material-design-icons/navigation/svg/production/ic_fullscreen_24px.svg';
  maxmizeButton.id = 'maximize-button';
  maxmizeButton.className = 'titlebar-button';

  parent.appendChild(maxmizeButton);

  $('#maximize-button').click(function() {
    if(win.isMaximized()) {
      win.restore();
    }
    else {
      win.maximize();
    }
  });

  function srcChange() {
    if(win.isMaximized()) {
      maxmizeButton.data = './res/components/material-design-icons/navigation/svg/production/ic_fullscreen_exit_24px.svg';
    }
    else {
      maxmizeButton.data = './res/components/material-design-icons/navigation/svg/production/ic_fullscreen_24px.svg';
    }
  }

  win.on('maximize', function(){srcChange();});
  win.on('unmaximize', function(){srcChange();});
  win.on('blur', function(){srcChange();});
  win.on('focus', function(){srcChange();});
}

win.openDevTools();