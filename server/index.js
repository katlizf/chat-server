const express = require('express')
const app = express()
app.use(express.json())
const PORT = 3001
const messages_control = require('./controller/message_controller')

app.get('/api/messages', messages_control.readMessages)
app.post('/api/messages', messages_control.createMessage)
app.put('/api/messages/:id', messages_control.updateMessage)
app.delete('/api/messages/:id', messages_control.deleteMessage)


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})