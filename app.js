const express = require('express')
const app = express();

// MIDDLE TIME
app.set("view engine","ejs");

app.get('/home', function(req, res){
    console.log('bruh')
    res.render('home');
});

app.listen(3000, function(err){
    if (err){
        console.log(err)
    }
    console.log('u mega gay times 3000')
});

