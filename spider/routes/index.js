//用户路由器
const express=require('express');
//导入连接数据库的模块
const pool=require('../pool.js');
//使用路由器 返回对象------------------------1***
var router=express.Router();
//index
// 请求  hot—move
router.get("/",(req,res)=>{
    var sql="SELECT * FROM spider_index_product";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
       res.send(result);   
    })
})

//导出路由器
module.exports=router;