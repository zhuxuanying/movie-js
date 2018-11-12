//用户路由器
const express=require('express');
//导入连接数据库的模块
const pool=require('../pool.js');
//使用路由器 返回对象------------------------1***
var router=express.Router();
//odetail
// 请求  
router.get("/",(req,res)=>{
   var  mid=req.query.mid;
   var  hid=req.query.hid;
   var  mtid=req.query.mtid;
   var obj={};
(async function(){
    var sql=`SELECT * FROM spider_movie where mid=?`
    await new Promise(function(open){
        pool.query(sql,[mid],(err,result)=>{
          if(err) console.log(err);
          obj.msg=result[0];
         open();
        })
    })
      //得到图片
    var sql=`SELECT * FROM  spider_movie_pic  where movie_id=? Limit 0,1`;
      await new Promise(function(open){
        pool.query(sql,[mid],(err,result)=>{
          if(err) console.log(err);
          obj.pics=result;
          open(); 
        })
    })
      //得到mtname
    await new Promise(function(open){
        var sql=`SELECT mtname FROM spider_movie_theater where mtid=?`;
        pool.query(sql,[mtid],(err,result)=>{
          if(err) console.log(err);
          obj.mtname=result[0];
         open();
        })
    })
    //得到hall
    
    await new Promise(function(open){
        var sql=`SELECT tab FROM spider_hall_table where hid=?`
        pool.query(sql,[hid],(err,result)=>{
          obj.hallid=result[0];
          //console.log(result);
            if(result.length>0){
            var sql=`select * from ${obj.hallid.tab}`;
            pool.query(sql,[],(err,result)=>{
                console.log(111);
                if(err) throw err;
                obj.hallMsg=result;
                open();
            })
          }else{
            open();
          }
          
         
        
        })
    })

      res.send(obj);
      
})()
})









//导出路由器
module.exports=router;
//http://localhost:3000/odetail/?mid=1&hid=2