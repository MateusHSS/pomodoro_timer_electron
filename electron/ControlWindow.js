const { screen } = require('electron')

function controlWindow(win, tray) {

    function toggle() {
        if(win.isVisible()) {
            win.hide()
        } else {
            show()
        }
    }

    function show () {
        const {x, y} = getPosition()

        win.setPosition(x, y, false)

        win.show()
        win.focus()
    }

    function getPosition() {
        const winBounds = win.getBounds()
        const trayBounds = tray.getBounds()
        const clickPosition = screen.getCursorScreenPoint()
        
        console.log(winBounds)

        const x = Math.round(clickPosition.x)
        const y = Math.round(trayBounds.y + trayBounds.height + 3)

        console.log(x, y)

        return {x, y}
    }

    return {
        toggle
    }
}

module.exports = controlWindow