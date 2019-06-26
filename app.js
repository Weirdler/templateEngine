const express = require('express')
const app = express();

app.get('/', function(req, res){
    console.log('bruh')
    res.send('gay boi');
});

app.listen(3000, function(err){
    if (err){
        console.log(err)
    }
    console.log('u mega gay times 3000')
});

