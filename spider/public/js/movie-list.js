$(function(){  
    //console.log(111);
    function loadPage(pno=0){
        //console.log(location.search.indexOf("kw="));
        if(location.search.indexOf("kw=")!=-1){
            //"?kw=aaa
            var kw=decodeURI(location.search.split("=")[1]);
            //console.log(kw);
            $.ajax({
                url:"http://localhost:3000/mlist/",
                type:"get",
                data:{kw,pno},
                dataType:"json",
                success:function(data){
                    var{pno,products,pageCount,total}=data;
                    //console.log(products);
                    var html="";
                   // console.log(products);
                    for(i=0;i<products.length;i++){
                        var {mname,detail,score,type,length,language,director,staring,price,mid,md,price}=products[i];
                        html+=`
                        <div>
                      
                            <div class="left">
                                <a href="http://localhost:3000/order-detail.html"+${mid}>
                                <img src="${md}"/>
                                </a>
                                <a href="http://localhost:3000/order-detail.html?${mid}" class="a-btn">选座购票</a>
                            </div>
                        
                            <div class="right">
                                <ul>
                                <li>
                                    <h2>${mname}</h2>
                                    <span>[已热映2天]</span>
                                    <p>评分：<span>${score}.0</span></p>
                                </li>
                                <li>
                                    <p>${detail}</p>
                                </li>
                                <li>
                                        <a href="#">+</a>
                                        <button><a href="#">加入观影清单</a></button>
                                </li>
                                <li>
                                    类型：${type}
                                </li>
                                <li>
                                    <p>片长/语言：${length}/${language}</p>
                                </li>
                                <li>
                                    导演/演员：${director} / ${staring}
                                </li>
                                <li>
                                    <p>今日至09月13日 72家影院热映 <span> ${price}.00</span>元起</p>
                                </li>
                            </ul>
                            </div>
                        </div>  `
                    }
                    //console.log(html);
                //console.log($(" #left>div.movie-list"));
                $(" #left>div.movie-list").html(html);
                var html="";
                
                if(total>0){
                    html=`<p>共找到<span>${total}</span>部关于<span>${kw}</span>的电影</p>`;
                    $("#top").html(html);
                    var html=`<li class="prev"><a href="#top">上一页</a></li>`;
                    for(var i=1;i<=pageCount;i++){
                            html+=`<li><a href="#top" class="${pno==i-1?'active':''}" data-toggle="tab">${i}</a></li>`;
                    }
                    html+=` <li class="next"><a href="#top">下一页</a></li>`;
                    var $page=$("#left>div.page>ul");
                    $page.html(html);
                    if(pno==0)
                        $("#left>div.page>ul>.prev>a").addClass("disabled")
                        
                    if(pno==pageCount-1)
                    $("#left>div.page>ul>.next>a").addClass("disabled")
                 }else{
                  html=`<img src="img/index//cannot.png">抱歉，没有找到与${kw}有关的电影`;
                  $("#top").html(html);
                 }
                
               
                }
            })
        } 
    }
    loadPage();
    $("#left>div.page>ul").on("click","a",function(e,pageCount){
        if(pno!=0&&pno>0)
            $("#left>div.page>ul>.prev>a").removeClass("disabled")            
        if(pno<pageCount-1)
        $("#left>div.page>ul>.next>a").removeClass("disabled")
        //console.log($("#left>div.page>ul"));
        
        var $a=$(this);
        if(!$a.is(".disabled,.active")) {
        
          if($a.html()=="上一页"){
            var pno=$("[data-toggle=tab]").index($("a.active"))-1 ;
            console.log(pno);
            //刚才的激活的下标
            //pno=?
          }else if($a.html()=="下一页"){
            //刚才激活的下标加2
            var pno=$("[data-toggle=tab]").index($("a.active"))+1;
            console.log(pno);
          }else{         
            var pno=$a.html()-1;
            console.log(pno);
          }
          loadPage(pno);
        }
      })
})