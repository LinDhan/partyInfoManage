const express=require('express')
var MongoClient=require('mongodb').MongoClient
var url='mongodb://localhost:27017/runoob'
//创建路由实例
var router=express.Router()

//获得所有信息
router.get('/getAllInfo',(req,res)=>{
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("runoob");
      dbo.collection('member'). find({}).toArray(function(err, result) { // 返回集合中所有数据
          if (err) throw err;
          res.send(result)
          db.close();
      });
  });
})
//获得某个条件的信息
router.post('/getInfo',(req,res)=>{
  MongoClient.connect(url,function(err,db){
      if(err)throw err;
      var dbo = db.db("runoob");
      const filter={}
      if(req.body.name){filter.name=req.body.name}
      if(req.body.branch){filter.branch=req.body.branch}
        dbo.collection('member'). find(filter).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        res.send(result)
        db.close();
    });
  })
})
module.exports=router