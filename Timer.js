import { Emitter } from "./Emitter.js"
import { View } from "./View.js"

const Timer = {
    time: 25 * 60,
    short_break_time: parseFloat(localStorage.getItem("short-break")) * 60 || 5 * 60,
    long_break_time: parseFloat(localStorage.getItem("long-break")) * 60 || 15 * 60,
    break: false,
    break_type: 0,
    current_time: null,
    round_set: parseInt(localStorage.getItem("long-break-interval")) || 4,
    current_round: 0,
    interval: null,

    time_to_hours: time => Math.floor(time/3600),
    time_to_minutes: time => (Math.floor(time/60) < 60) ? Math.floor(time/60) : Math.floor(time/60) - 60,
    time_to_seconds: time => time % 60,

    format_time: time => String(time).padStart(2, '0'),

    time_to_object: time => {
        return {
            hours: Timer.format_time(Timer.time_to_hours(time)),
            minutes: Timer.format_time(Timer.time_to_minutes(time)),
            seconds: Timer.format_time(Timer.time_to_seconds(time))
        }
    },

    get_time: () => {
        let hours = parseInt(localStorage.getItem("work-hours")) || 0
        let minutes = parseInt(localStorage.getItem("work-minutes")) || 0
        let seconds = parseInt(localStorage.getItem("work-seconds")) || 0

        return ((hours * 3600) + (minutes * 60) + seconds)
    },

    init(time){
        Timer.time = Timer.get_time() || time
        Timer.current_time = isNaN(time) ? Timer.get_time() : time
        Timer.interval = setInterval(Timer.countdown, 1000)

        View.button_render({ message: 'STOP', background: 'red', action: Timer.pause_countdown })
    },

    countdown(){
        View.time_render(Timer.time_to_object(Timer.current_time - 1))

        if(Timer.current_time == 0){
            clearInterval(Timer.interval)
            Emitter.emit("countdown-end")

            return
        }

        Timer.current_time--;
    },

    pause_countdown(){
        clearInterval(Timer.interval)

        View.button_render({ message: 'CONTINUE', background: 'cyan', action: Timer.continue_countdown })
    },

    continue_countdown(){
        View.button_render({ message: 'STOP', background: 'red', action: Timer.pause_countdown })
        Timer.interval = setInterval(Timer.countdown, 1000)
    }
}

export { Timer }
