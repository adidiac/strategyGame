const express=require('express')
const app=express()
console.log("da");
const port=2000;

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
  });

app.use(express.static(__dirname + "/public"));
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname+'/public/style.css')
  });
app.get('/home.js', (req, res) => {
    res.sendFile(__dirname+'/public/home.js')
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })