const express = require('express');
const app = express()
const PORT = 3030;
const cors = require('cors');

app.use(cors());

require('./routes/index')(app)

app.get('/', (req, res) =>{
    res.json({message: 'welcome'});
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`);
});