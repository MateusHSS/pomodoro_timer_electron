const NotifyTemplates = {
    short_break : {
        title: "Pequena pausada",
        body: "Hora de dar uma pequena pausada",
        audio: {
            src: "./src/audio/alarm-clock.mp3"
        }
    },
    long_break : {
        title: "Pausada longa",
        body: "Hora de dar uma longa pausada",
        audio: {
            src: "./src/audio/alarm-clock.mp3"
        }
    },
    work_time : {
        title: "Hora de trabalhar",
        body: "Trabalha vagabundo"
    },
    start : {
        title: "O inicio",
        body: "Hora de iniciar os trabalhos"
    }
}

export { NotifyTemplates }