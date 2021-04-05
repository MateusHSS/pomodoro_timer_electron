import { Emitter } from "./Emitter.js"
import { Notifyer } from "./Notifyer.js"
import { Timer } from "./Timer.js"

const notify = {
    title: "Teste notificacao",
    body: "Body teste"
}

const App = {
    async start(){
        try {
            await Notifyer.init()

            Emitter.on("countdown-start", Notifyer.notify(notify))
            Emitter.on("countdown-end", Timer.next_round)

            Timer.init()
        }catch(e){
            console.log(e.message)
        }
    }
}

export { App }