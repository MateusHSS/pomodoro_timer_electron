const { BrowserWindow } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'src', 'img', 'tomato-app-icon.png')

function createWindow () {
    const win = new BrowserWindow({
      width: 250,
      height: 310,
      show: false,
      frame: false,
      resizable: false,
      fullscreenable: false,
      icon: iconPath
    })
  
    win.loadFile('index.html')

    return win
}

module.exports = createWindow()