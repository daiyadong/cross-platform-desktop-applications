'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow(
      {
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: true
        }
      }
  );
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function () { mainWindow = null; });
	//mainWindow.webContents.openDevTools();
});