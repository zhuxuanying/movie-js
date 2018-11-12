const express=require("express");
const router=express.Router();
const pool=require("../pool");
//mlist
/*
SELECT * ,(SELECT md from spider_movie_pic where movie_id=mid limit 1) as md
FROM `spider_movie` 
where title like '%喜剧%' and title like '快把我哥带走'
*/
router.get("/",(req,res)=>{
    //http://localhost:3000/products/?kw=i7 128g&pno=0,1
    //要 kw  和 pno
    //返回 给 客户端 products查询出来的所有商品  pno 当前页码 pageCount 总页数
    var kw=req.query.kw;
    if(kws!==undefined){
    var kws=kw.split("=");
    kws.forEach((elem,i,kws)=>
        kws[i]=`title like '%${elem}%'`
    );//[]
    var where=`where ${kws.join("  and  ")}`;
    var sql=`
    SELECT * ,(SELECT md from spider_movie_pic where movie_id=mid limit 1) as md
    FROM spider_movie 
    `;
    sql+=where;
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        data={};//新建结果对象
        data.pno=req.query.pno;//在结果对象中添加pno属性
        //用查询结果的总数/5,上取整，获得总页数，放入结果data中
        data.pageCount=Math.ceil(result.length/5)
        //仅截取查询结果中的pno*5还是的5条记录，放入data中
        data.products=result.slice(data.pno*5,data.pno*5+5)
        //取找到的影片数目
        data.total=result.length;
        //console.log(data);
        res.send(data);
      }) 
    
    }    
})
//http://localhost:3000/mlist/?kw=喜剧&pno=0


module.exports=router;