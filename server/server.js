const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/",(req,res)=>{
    res.send('Server is running');
});

app.get('/api/questions',(req,res)=>{
    res.json([{title:"first question"}, {title:"second question"}])
})

app.listen(3000,()=>{
    console.log('Server is up and running at 3000');
});