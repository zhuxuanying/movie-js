
(async function (){
  if(location.search.indexOf("mid=")!=-1){
        var mid=location.search.split("=")[1];
              //         ?lid=5   ?lid,5   5
  //mid-ajax
    var res=await ajax({
          url:"http://localhost:3000/mdetail",
          type:"get",
          data:`mid=${mid}`,
          dataType:"json"
    });
      var{msg,pics}=res;
      //console.log(msg)
      var{score,Eng_name,detail,director,type,language,length,mname,release_time,staring}=msg;
      //=========================tu=================================
        var html=`
          <div class="tu">
            <img src="img/movie-detail/1.jpg" alt=""/>
            <p>评分<span><span class="font-big">${score}</span>.0</span> </p>
          </div>
          <div class="detail">
            <h1>${mname}</h1>
            <p>${Eng_name}</p>
            <hr/>
            <p>${detail}</p>
            <p class="b-1"><span>上映日期:</span>${release_time}</p>
            <p class="b-1"><span>片长/语言:</span>${length}分钟/${language}</p>
            <p class="b-1"><span>导演/演员:</span>${director}&nbsp;&nbsp;${staring}</p>
            <p class="b-1"><span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span><a href="#">${type}</a></p>
          </div>
          `; 
          var parent=document.getElementById("s-top");
          var div=parent.firstElementChild;
            div.innerHTML=html+div.innerHTML;
      //============================吐丝===================================
          var html="";
          var juzhao=document.querySelector( "#juzhao");
          for(var p of pics.slice(1,5)){
            html +=`
            <img src="${p.md}"/>
          `
          }
          html=html+`<a href="#">更多》</a>`
          
          juzhao.innerHTML=html;
        
      //========================下方图片列表========================================
          var firstImg=document.querySelector(
            "#s-top>.s-top-left>.tu>img"
          );
          
          firstImg.src=pics[0].md;

          var html="";
          var pics=pics.slice(1);
          for(var p of pics){
            var {md}=p
            html+=`
          <li>
            <a href="#" data-toggle="tab">
              <img src="${md}" alt="">
            </a>
          </li>`;
          }
          var ul=document.querySelector(
            "#small-img>ul"
          );
          ul.innerHTML=html;
          ul.style.width=`${120*pics.length}px`;
          var mImg=document.querySelector(
            "#juzhao1>.right>div"
          );
          
          //if(pics[1].md!==undefined)
          if(pics.length>0){
            html=`<img src="${pics[1].md}">`
          }
          //console.log(mImg);
          //console.log(pics[3])
          //console.log(pics[1].md)
        
            mImg.innerHTML=html;  
            
        }
      //====================yingping=====================================
      
        var comment=res.comment[0];
       
        if(comment!==undefined){
            var html=`<div>
            <h4>剧情简介</h4>
            <p>${msg["intr"]}
            </p>
          </div>
          <div>
            <h4>影片点评</h4>
            <div class="user-argu">
              <div>
                <img src="img/movie-detail/user_aver.jpg" />
                <p class="font-3">${comment["cid"]}</p>
              </div>
              <div>
                <p class="font-1">${comment["content"]}</p>
                <p class="font-3">来自${comment["user_name"]}的${comment["time"]}间的评论</p>
              </div>
            </div>
          </div>`
            var $parent=$(" #yingping");
            $parent.html(html);
        }
     //=================同类============================
      var html="";
     var $parent=$(".flag-top>ul");
     var html=`
     <li>
     <p>${res.msg.type}</p>
   </li>`
   $parent.html(html);
    var xss=res.xs;
    var $parent=$(".flag-bottom>ul");
    var html=""
    for(var i=0;i<xss.length;i++){
      var xs=xss[i];
      html+=`
          <li  data-toggle="flag">
                    <div class="res1-watch ${i==0?"hidden":""}">
                      <h4>0${i+1}</h4>
                      <p>
                        <a href="#">
                              ${xs["pname"]}
                        </a>
                        <a href="#">
                            [10月28日上映]
                        </a>
                      </p>
                      <a href="#">
                        <span>5</span> 人加入了观影清单
                      </a>
                    </div>
                    <div class="hover1-watch ${i!==0?"hidden":""}" >
                        <h4>0${i+1}</h4>
                        <img src="${xs["pic"]}" alt="">
                        <p>
                          <a href="#">
                          ${xs["pname"]}
                          </a>
                          <a href="#">
                              [10月28日上映]
                          </a>
                          <a href="#">
                              <span>5</span> 人加入了观影清单
                          </a>
                          <a href="#">加入观影清单</a>  
                        </p>
                         
                    </div>
              </li>`
      }
      $parent.html(html);
      //flag事件
      $("[data-toggle=flag]").mouseenter("[data-toggle=flag]",function(e){
        e.preventDefault();
        var $tar=$(this);
        console.log($tar);
        if($tar.children(":last-child").hasClass("hidden")){  //tar--li
            console.log(111);
            $tar.children(":last-child")
            .removeClass("hidden")
            .prev()
            .addClass("hidden");
            console.log($tar.siblings());
            $tar.siblings()
            .children(":first-child").removeClass("hidden");
            $tar.siblings()
            .children(":last-child").addClass("hidden");
            
        }
    })  
        //单击事件
        var $prev=$("#prev");
        var $next=$("#next");
        var $ul=$("#small-img>ul:first-child");
        var moved=0,LIWIDTH=91;
          $next.click(function(){
          var $next=$(this);
          //如果 next 不是禁用的move ++
          if(!$next.is(".disable")){
            moved++;
            $ul.css("marginLeft",-LIWIDTH*moved);
            $prev.removeClass("disable");
            //console.log(moved);
            if($ul.children().length-6==moved|moved==$ul.children().length){
              $next.addClass("disable");
            }
            if(moved!=0){
              $prev.removeClass("disable");
            }
          }
        })
      //单击事件
        $prev.click(function(){
          //如果prev不是禁用的move--
          var $prev=$(this);
          //console.log(moved);
          if(!$prev.is(".disable")){
          moved--;
          $ul.css("marginLeft",-LIWIDTH*moved)
          }
          if(moved==0){
            $prev.addClass("disable");
          }
          if($ul.children().length-6>moved|moved<$ul.children().length){
            $next.removeClass("disable");
          }
        })

      //单机事件
      var $mImg=$("#juzhao1>.right>div>img");
      $ul.on("click","[data-toggle=tab]",function(e){
        e.preventDefault();
        var $tar=$(e.target);
        var md=$tar.attr("src");
        $mImg.attr("src",md);
      })
  
      //goupiao  ajax 
  //show-date
    var date=new Date(2018,8,1,10,30,50);
    var m=date.getMonth()+1;
    var d=date.getDate();
   //console.log(m,d)
    if(d.length=1){
      d="0"+d;
    }
    if(m.length=1){
      m="0"+m;
    }
    var $parent=$("#goupiao>.date>ul.second-ul");
    html="";
    for(var key=0;key<3;key++){
      html+=`<li data-toggle="date">
              <a href="#" class="${key==0?'hover':''}">
                <div class="fl">
                ${key==0?"今天":
                 key==1?"明天":
                 "后天"}</div>
                <div class="fr data">
                  <p>${m}月</p>
                  <p>${d}日</p>
                </div>
              </a>  
            </li>`
            d++;
            if(d.length=1){
              d="0"+d;
            }         
    }
      $parent.html(html);
    //goupiao 日期单击事件
    $("#goupiao>.date>.second-ul").on("click","[data-toggle=date]",function(e){
      e.preventDefault();
      var $tar=$(this)
      if(!$tar.children().hasClass("hover")){
          $tar.siblings().children().removeClass("hover");
          $tar.children().addClass("hover")  
      }
    });
  //show move-theater
  var {mtmsg,mmsg,ppmsg,hallmsg}=res;
  async function getMtmsg(mtid){
    //console.log("zhehsi "+mtid);
    var res=await ajax({
      url:"http://localhost:3000/mdetail/mt",
      type:"get",
      data:`mid=${mid}&mtid=${mtid}`,
      dataType:"json"
    });
    var{mtmsg}=res;
    var html="";
    var $parent=$("#yy-detail");
    html=`
        <img src="${mtmsg.pic}" />
          <div class="d-wenzi">
            <a href="#">
                <h2>${mtmsg.mtname}</h2>
            </a>
            <div>
              <span class="blue">0</span>
                0元购
              <span class="three-D">3D</span>
            </div>
            <div>
              <a href="#" class="blue">+</a>
              <a href="#">设为常去影院</a>
            </div>
            <p class="font-3">
              ${mtmsg.mt_address}
            </p>
          </div>`
    $parent.html(html);
    var{mmsg,ppmsg,hallmsg}=res;
    //console.log(mmsg,ppmsg,hallmsg);
    var html="";
    var $parent=$(" #x-zuo>.xijie");
    for(var i=1;i<hallmsg.length;i++){
      var hour=parseInt(mmsg.length/60);
      var fen=msg.length%60;
      leave=ppmsg[i].time.split(":");
      //console.log("原来的leave   "+leave);
      leave[1]=eval(parseInt(leave[1])+fen);
      if(leave[1]>60){
        leave[1]=leave[1]%60;
        leave[0]++;
      }
      leave[0]=eval(parseInt(leave[0])+hour);
      if(leave[0]>23){
        leave[0]=00;
      }
     
      //console.log("我的leave  "+leave);
      html+=` <ul>
                <li>
                    <span>${ppmsg[i].time}</span> <br/>
                    <p  class="font-small"><span>${leave[0]}:${leave[1]}</span>离场</p>
                </li>
                <li>
                  <span>${mmsg.time}</span> <br/>
                  <a href="#" class="three">${mmsg.texiao}</a>
                </li>
                <li>
                  ${hallmsg[i]["hall_name"]}
                </li>
                <li>
                  <a href="#" class="dui">兑</a>
                  <a href="#" class="dui">抵</a>
                  <a href="#" class="di">低至19元</a>
                </li>
                <li class="money">
                  ${mmsg.price}.00元
                </li>
                <li>
                  <span><a href="order-detail.html?mid=${mmsg.mid}&hid=${hallmsg[i].hid}&mtid=${mtid}"  class="select">选座购票</a></span>
                  <a href="order-detail.html?mid=${mmsg.mid}&hid=${hallmsg[i].hid}&mtid=${mtid}">
                    <img src="img/order/xuanzuo.png"/>
                  </a>
                </li>
          </ul>`
        }
        $parent.html(html);
  }
  
  getMtmsg(1);
  $("#goupiao>.movie>.yingyuan").on("click","[data-toggle=mtid]",function(e){
    e.preventDefault();
    var $tar=$(this);
    var mtid=$tar.attr("data-mtid");
    //console.log(mtid);
    if(!$tar.hasClass("hover")){
        $tar.parent().siblings().children().removeClass("hover");
        $tar.addClass("hover");
        getMtmsg(mtid);
    }else{
      
    }
  })







})();

