var express = require('express')
var app = express()

//下面的代码用来接收请求
app.get('/jiang',function (req,res) {
  // res.send('Hello Express')
  console.log('hello jiangrong')
})
app.get('/rong',function (req,res) {
  // res.send('Hello Jiangrong')
  console.log('hello rong')
})
app.listen(3000,function(){
  console.log('running on port 3000...')
})
