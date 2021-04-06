import { Emitter } from "./Emitter.js"
import { Notifyer } from "./Notifyer.js"
import { RoundController } from "./RoundController.js"
import { Timer } from "./Timer.js"
import { View } from "./View.js"
import { NotifyTemplates } from "./NotifyTemplates.js"

const App = {
    async start(){
        try {
            await Notifyer.init()

            Emitter.on("countdown-start", Notifyer.notify(NotifyTemplates.start))
            Emitter.on("countdown-end", RoundController.next_round)
            Emitter.on("notify-work", Notifyer.notify(NotifyTemplates.work_time))
            Emitter.on("notify-short-break", Notifyer.notify(NotifyTemplates.short_break))
            Emitter.on("notify-long-break", Notifyer.notify(NotifyTemplates.long_break))

            View.time_render({ hours: '00', minutes: '00', seconds: '06'})
            View.button_render({ message: 'START', background: 'cyan', action: Timer.init})
        }catch(e){
            console.log(e.message)
        }
    }
}

export { App }