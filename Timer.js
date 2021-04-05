import { Emitter } from "./Emitter.js"
import { View } from "./View.js"

const Timer = {
    time: 0.05 * 60,
    rest_time: 0.1 * 60,
    current_time: null,
    round_set: 4,
    current_round: 1,
    interval: null,

    time_to_hours: time => Math.floor(time/3600),
    time_to_minutes: time => (Math.floor(time/60) < 60) ? Math.floor(time/60) : 0,
    time_to_seconds: time => time % 60,

    format_time: time => String(time).padStart(2, '0'),

    init(time){
        // Emitter.emit("countdown-start")

        Timer.current_time = time || Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)
    },

    start_round(){
        (Timer.current_round != 0) ? Timer.init() : Timer.init(Timer.rest_time)
    },

    next_round(){
        if(Timer.current_round == Timer.round_set){
            Timer.current_round = 0;
        }else{
            Timer.current_round++;
        }

        Timer.start_round()
    },

    countdown(){
        const hours = Timer.format_time(Timer.time_to_hours(Timer.current_time))
        const minutes = Timer.format_time(Timer.time_to_minutes(Timer.current_time))
        const seconds = Timer.format_time(Timer.time_to_seconds(Timer.current_time))

        View.render({
            hours,
            minutes,
            seconds
        })

        if(Timer.current_time == 0){
            clearInterval(Timer.interval)
            Emitter.emit("countdown-end")
        }

        Timer.current_time--;
    }
}

export { Timer }
