const express=require('express')
const app=express()
//引入express中间体body-parser.对http请求体进行解析
const bodyParser=require('body-parser')
//解析json格式
app.use(bodyParser.json())


app.use('/api/manager',require('./Api/managerApi'))
app.use('/api/user',require('./Api/userApi'))

const http=require('http')
const server=http.createServer(app)

server.listen(3000,()=>{
    console.log('服务器已启动')
})