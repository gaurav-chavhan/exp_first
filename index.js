const express = require('express');
const path = require('path');
const app = express();
const port = 4000; 


const path_n = (path.join(__dirname,'..'));
// console.log(path.join(__dirname,'..'));

app.use(express.static(path_n));
app.get('/', (req, res)=>{
    res.send("send...");
});

app.listen(port, ()=>{
    console.log(`runnig on ${port}`)
});