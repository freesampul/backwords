// import {answer, realPhrase} from '/express/index.js'

const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs')

// const client = new NLPCloudClient('paraphrase-multilingual-mpnet-base-v2','2e08600377ac66a4ad5c542a189b6995ed0d33b5')
// client.semanticSimilarity([variable1, variable2]).then(function (response) {
//        value = response.data})

app.use(express.json());
app.use(express.static("express"));
// default URL for website
////

app.use('/', (req,res, next) => {
  res.locals.test = 'tester'
    next()
})

app.use((req, res, next) => {
  // count  = fs.readFileSync('express/count.txt')
      
  // //console.log("the count right now is at " + count)

  // newCount = parseInt(count)+1

  // //console.log("After adding, the count is at " + newCount)


  // fs.writeFileSync('express/count.txt', newCount.toString())
  next()
})

app.get('/', function(req,res, next){
      //__dirname : It will resolve to your project folder
    
    
      res.render(__dirname + '/express/index.html' + { test });
  });
// app.post('/submit', (req, res) => {
//   let value
//   client.semanticSimilarity([variable1, variable2]).then(function (response) {
//     value = response.data})
//     res.
// })

app.get('/check', (req, res) => 
{
  res.json('penis')
})

  /////////
const server = http.createServer(app);

//Element.addEventListener("submitter", computeGuess())



const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);







