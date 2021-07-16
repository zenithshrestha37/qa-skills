const express = require('express')
const app = express()

const path = require('path')


app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname,'../tictacjs.html'));
});

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})