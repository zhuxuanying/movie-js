//用户路由器
const express=require('express');
//导入连接数据库的模块
const pool=require('../pool.js');
//使用路由器 返回对象------------------------1***
var router=express.Router();
//login
// 请求  
router.get("/",(req,res)=>{
   var uname=req.query.uname;
   var upwd=req.query.upwd;
   (async function(){
        var sql=`SELECT * FROM spider_user where uname=? and upwd =?`;
        await new promise(function(open){
            pool.query(sql,[uname,upwd],(err,result)=>{
                if(err)  throw err;
                //res.send(result);
                if(result.length>0){
                    res.send(result);    
                }else{
                    res.send("0")
                } 
            })
       })
    })()
})

//导出路由器
module.exports=router;
//http://localhost:3000/login?uname=dangdang&upwd=123456