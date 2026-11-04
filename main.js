const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    title: 'Sober External Executor',
    // Optional: Keep window on top of Roblox
    // alwaysOnTop: true, 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Required for older Electron versions or specific fetch behaviors
      enableRemoteModule: false
    }
  })

  // Load the HTML file from the same directory
  win.loadFile('index.html')

  // Open DevTools for debugging your Lua output
  // win.webContents.openDevTools() 
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
