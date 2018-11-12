//用户路由器
const express=require('express');
//导入连接数据库的模块
const pool=require('../pool.js');
//使用路由器 返回对象------------------------1***
var router=express.Router();
//index
// 请求  movie-details
router.get("/",(req,res)=>{
    //根据lid  得到商品信息
    var lid=req.query.mid,obj={msg:{},type:[],pics:[]};
    (async function(){
        var sql=`SELECT * FROM spider_movie where mid=?`
        await new Promise(function(open){
            pool.query(sql,[lid],(err,result)=>{
              if(err) console.log(err);
              obj.msg=result[0];
             open();
            })
          })
          //得到图片
          var sql=`SELECT * FROM  spider_movie_pic  where movie_id=?`;
          await new Promise(function(open){
            pool.query(sql,[lid],(err,result)=>{
              if(err) console.log(err);
              obj.pics=result;
              open(); 
            })
          })
          //评论
          var sql=`SELECT * FROM spider_user_comment where mid=?`;
          await new Promise(function(open){
            pool.query(sql,[lid],(err,result)=>{
              if(err) console.log(err);
              obj.comment=result;
              open(); 
            })
          })
          //得到相似
          var sql=`SELECT * FROM spider_index_product`;
          var types=obj.msg.type;
          types.split(" ")
          var where=`  where  type like '%${types[0]}%' `;
          sql+=where;
          var limit=`  limit 0,4`;
          sql+=limit;
          await new Promise(function(open){
            pool.query(sql,[],(err,result)=>{
              if(err) throw err;
              obj.xs=result;
              open()
            })
        }) 

          res.send(obj)
    })()
}) 






router.get("/mt",(req,res)=>{
  var mid=req.query.mid;
  var mtid=req.query.mtid;
  var objMsg={};
  (async function(){
    //  mtid=1  mid=1;
    //得到影院的信息
    await new Promise(function(open){
      var sql=`SELECT * FROM spider_movie_theater where mtid=?`;
      pool.query(sql,[mtid],(err,result)=>{
        if(err) console.log(err);
        objMsg.mtmsg=result[0];
       open();
      })
    })
    //得到影片信息
    var sql=`SELECT * FROM spider_movie where mid=?`
        await new Promise(function(open){
            pool.query(sql,[mid],(err,result)=>{
              if(err) console.log(err);
              objMsg.mmsg=result[0];
             open();
            })
          })
    //得到拍片的信息
    var sql=`SELECT * FROM spider_paipian where movie_id=? and movie_theater_id=?`
    await new Promise(function(open){
      pool.query(sql,[mid,mtid],(err,result)=>{
        if(err) console.log(err);
        objMsg.ppmsg=result;
       open();
      })
    })
    //得到hall-ID消息
   /* var sql=`SELECT DISTINCT hall_id FROM spider_paipian where movie_id=? and movie_theater_id=?`
    await new Promise(function(open){
      pool.query(sql,[mid,mtid],(err,result)=>{
        if(err) console.log(err);
        //console.log(result[0]);
        var result=result[0];
        var hids=[]
        for(var key in result){
          hids.push(result[key]);
          
        }
        console.log(hids);
       open(hids);
      })
    })*/
     //得到hall
     
    var sqlHid=`SELECT DISTINCT hall_id FROM spider_paipian where movie_id=? and movie_theater_id=?`
    await new Promise(function(open){
      pool.query(sqlHid,[mid,mtid],(err,result)=>{
        if(err) console.log(err);
        //console.log(result[0]);
        var hids=[]
        for(var i in result){
          for(var key in result[i]){
            hids.push(result[i][key]); 
          }
        }
        var sql=`SELECT * FROM spider_hall where hid =?`

        var length=hids.length;
        if(hids.length==1){
          pool.query(sql,[hids],(err,result)=>{
            if(err) console.log(err);
            objMsg.hallmsg=result[0];
            open();
          })
        }else{
          hids.forEach((elem,i,hids)=>{
            hids[i]=`hid=${elem}`
          })
          var where=`where  ${hids.join("  or  ")}`
          var sql1=`SELECT * FROM spider_hall `;
          sql1+=where;
          pool.query(sql1,[],(err,result)=>{
            if(err) console.log(err);
            //console.log(result);
            objMsg.hallmsg=result;
            open()
          })
        }
      })
       
    })
    res.send(objMsg);
  })()
})
//导出路由器
module.exports=router;
//http://localhost:3000/mdetail/mt?mid=1&mtid=1