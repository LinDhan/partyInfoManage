const express = require('express')
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/runoob'
//创建路由实例
var router = express.Router()

router.post('/post', function (req, res) {
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
})
module.exports = router
