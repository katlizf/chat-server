const messages = []

let id = 0

module.exports= {
    readMessages: (req, res) => {
        res.status(200).send(messages)
    },
    createMessage: (req, res) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },    
    updateMessage: (req, res) => {
        const {text} = req.body
        const {id} = req.params
        const messageIndex = messages.findIndex(message => message.id == id)
            messages[messageIndex] = {
                id: messages[messageIndex].id,
                text: text || messages[messageIndex].text,
                time: messages[messageIndex].time
            }
            res.status(200).send(messages)
    },
    deleteMessage: (req, res) => {
        const {id} = req.params
        const messageIndex = messages.findIndex(message => message.id == id)
        console.log(id)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)        
    }
}
