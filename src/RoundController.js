import { Emitter } from "./Emitter.js";
import { Timer } from "./Timer.js"
import { View } from "./View.js"

const SHORT_BREAK = -1;
const LONG_BREAK = -2;

const RoundController = {
    start_round(){

        if(Timer.break){
            const time = (Timer.break_type == SHORT_BREAK) ? Timer.short_break_time : Timer.long_break_time

            Timer.init(time)
        }else{
            Timer.init()
        }

    },

    next_round(){

        if(Timer.break){

            View.time_render(Timer.time_to_object(Timer.time))
            Timer.break = false

            Emitter.emit("notify-work")

        }else{

            Timer.break = true;

            if(Timer.current_round == Timer.round_set - 1){
                Timer.break_type = LONG_BREAK
                Timer.current_round = 0
    
                View.time_render(Timer.time_to_object(Timer.long_break_time))
                Emitter.emit("notify-long-break")
            }else{
                Timer.break_type = SHORT_BREAK
                Timer.current_round++
    
                View.time_render(Timer.time_to_object(Timer.short_break_time))
                Emitter.emit("notify-short-break")
            }
        }

        clearInterval(Timer.interval)
        View.button_render({ message: 'START', background: 'cyan', action: RoundController.start_round })
    }
}

export { RoundController }