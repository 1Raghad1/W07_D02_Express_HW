const express = require('express');
console.log(express)

const app = express();

app.get('/', ( req, res )=>{
console.log("Oh hey! I got a request. Let me respond with something");
 res.send('Hello World!')
})

  
  app.get('/somedata', (request, response)=>{
    // console.log('response: ', response);
    // console.log('===================');
    response.send('here is your information');
  });
app.listen(3000, ()=> {
 console.log("I am listening for requests!!!");
});

