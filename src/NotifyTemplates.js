const NotifyTemplates = {
    short_break : {
        title: "Pequena pausada",
        body: "Hora de dar uma pequena pausada",
        icon: "./src/img/tomato.png",
        audio: {
            src: "./src/audio/alarm-clock.mp3"
        }
    },
    long_break : {
        title: "Pausada longa",
        body: "Hora de dar uma longa pausada",
        icon: "./src/img/tomato.png",
        audio: {
            src: "./src/audio/alarm-clock.mp3"
        }
    },
    work_time : {
        title: "Hora de trabalhar",
        body: "Trabalha vagabundo",
        icon: "./src/img/tomato.png"
    },
    start : {
        title: "O inicio",
        body: "Hora de iniciar os trabalhos",
        icon: "./src/img/tomato.png"
    }
}

export { NotifyTemplates }