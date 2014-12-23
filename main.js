var app = require('app');  // Module to control application life.
var Menu = require('menu');
var Tray = require('tray');
var appIcon = null;
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var config = require('./config.json');

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var launcherWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

// This method will be called when atom-shell has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  launcherWindow = new BrowserWindow(config.launcherWindow);
  appIcon = new Tray(config.theme.icon);
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' },
  ]);
  appIcon.setToolTip('This is my application.');
  appIcon.setContextMenu(contextMenu);

  // and load the index.html of the app.
  launcherWindow.loadUrl('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  launcherWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    launcherWindow = null;
  });
});