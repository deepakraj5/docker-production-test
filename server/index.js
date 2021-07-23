const express = require('express')
require('./db/mongoose')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
    console.log(`app running ${process.pid}`)
    res.send(`app running ${process.pid}`)
})





app.listen(PORT, () => console.log(`servre upon port ${PORT}`))