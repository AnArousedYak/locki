import { app, BrowserWindow } from 'electron'

const createWindow = () => {
const appWindow = new BrowserWindow({ width: 800, height: 600 })
      appWindow.loadURL('http://localhost:5173')
    /*
    We are calling the loadFile method from Electron on appWindow and asking for index.html.
    HOWEVER because we are using React + Vite, we need to lead electron to the locally hosted 
    webpage by vite, so we use loadURL instead!
    */
   
}

app.whenReady().then(() => {
  createWindow()
  /* 
  We're calling the whenReady function on the app object we imported from Electron. 
  When the electron app is fully initialized and ready, it runs the createWindow function we defined earlier in this file.
  */
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
/*Because MacOS is fundamentally different than windows, we have to explicitly tell MacOS 'hey dude, im running and i want to see the ui'
so, in order to do this when the app window is "reactivated" we need to draw a window!
to do this we call the on method inherited from node.js to the app object and listen for the 'activate' event, then we check if there are any windows open
by using the getAllWindows method on the BrowserWindow class, and if that doesnt return any windows, we create one! using the createWindow function!*/
  
})
/*
the app object inherits the on method from the node event emitter 'class'. 
When we call this method on the app object, we pass the first argument string 'window-all-closed' 
'window-all-closed' is the event emitted by Electron when all windows close.

If the platform property on the process object is NOT darwin (meaning its not macOS),
we call app.quit method to exit the app completely which is how windows and linux behave
*/
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

console.log('Hello from Electron!')

