const express = require('express');

var app= express();

app.get('/',(req, res)=>{

   res.send('hello world');
});

app.get('/user', (req , res)=>{

    res.send([{
      name: 'anmol',
      age: 25  
    }, {
        name: 'rajat',
        age: 26
    }, {
        name: 'behl',
        age: 27
}]);
});


app.listen(3000);

module.exports.app = app;