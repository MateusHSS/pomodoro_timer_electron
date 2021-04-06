const View = {
    time_render({ hours, minutes, seconds }) {
        document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`
    },
    button_render({ message, background, action = null }){
        let object = document.getElementById("action-button")
        
        object.innerHTML = message
        object.style.background = background
        object.onclick = action
    }
}

export { View }