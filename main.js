const { app, BrowserWindow } = require('electron')

// Creazione variabile di tipo string per recuperare l'environment
const env = process.env.NODE_ENV || 'development';

// Funzione per creare la finestra principale
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration:true
    }
  });

  if(env.toLowerCase() === 'development') {
    mainWindow.loadURL('http://localhost:4200')
  } else {
    mainWindow.loadFile('dist/browser/index.html')
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
