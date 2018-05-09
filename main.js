const electron = require('electron');

const { app } = electron;

const { BrowserWindow } = electron;

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({width: 980, height: 600});
  
    win.loadURL('file://' + __dirname + '/index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});


