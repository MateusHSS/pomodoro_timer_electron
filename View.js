const View = {
    render({ hours, minutes, seconds }) {
        document.body.innerHTML = `
            <p>Time remaining</p>
            <span>${hours}:${minutes}:${seconds}</span>
        `
    }
}

export { View }