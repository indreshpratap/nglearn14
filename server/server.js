const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const mountRoutes = require('./api/api.routes');
//app.use(cors());

app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send('Server is running');
});



mountRoutes(app);

app.listen(3000,()=>{
    console.log('Server is up and running at 3000');
});