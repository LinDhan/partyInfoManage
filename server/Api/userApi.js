const express = require('express')
//创建MongoClient对象
var MongoClient = require('mongodb').MongoClient
//配置指定的URL和端口号，如果数据库不存在则会创建
var url = 'mongodb://localhost:27017/runoob'
//创建路由实例
var router = express.Router()
//检查用户是否存在
router.post('/check', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        var filter={IDCard:req.body.IDCard}
        dbo.collection('member').find(filter).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            if(result.length===0){
                //可以添加
                res.send({description:'ok'})
            }
            else{
                //已存在该用户
                res.send({description:'no'})
            }
            db.close();
        });
    })
})
//添加新用户
router.post('/addOne', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var obj=req.body 
        var dbo = db.db("runoob");
         dbo.collection("member").insertOne(obj, function (err, res) {
            if (err) throw err;
            console.log('文档插入成功')
            
            db.close();
        });
    })
    res.send()
})
module.exports = router
