const Notifyer = {
    async init(){
        const permission = await Notification.requestPermission()

        if(permission !== "granted"){
            throw new Error("Permissao negada")
        }
    },
    notify({ title, body, audio = null, icon = null }){
        return () => {
            if(audio != null){
                let player = new Audio(audio.src)
    
                player.volume = 0.05
                player.play()
        
                setTimeout(() => {
                    player.pause()
                    player.currentTime = 0
                }, 3000)
            }
            
            return new Notification( title, {
                body,
                icon
            })
        }
        
    }
}

export { Notifyer }