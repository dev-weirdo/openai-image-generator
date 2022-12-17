const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 5000
const openaiRoutes = require('./routes/openaiRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(openaiRoutes)

app.use(express.static(path.join(__dirname, "./public")));
app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "./public/index.html"),
        (err) => {
            res.status(500).send(err);
        }
    );
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))