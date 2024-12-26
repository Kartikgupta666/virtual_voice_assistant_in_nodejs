const express = require('express');
const cors = require('cors');
const { generate } = require('./Backend/gen-ai-sdk');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8001;
app.post('/', (req, res) => {
    const { text } = req.body;
    
    generate(text).then((response) => {
        res.send(response)
        // console.log("response is",response)
    }).catch((error) => { console.log(error) })

});


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})