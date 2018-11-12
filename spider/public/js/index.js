(async function(){
    var res=await ajax({
        url:"http://localhost:3000/index/",
        type:"get",
        dataType:"json"
      });
    var p=res[0];
    var parent=document.querySelector("#hot-movie>.center");
    //hot-movie  center  first-product ---------------------------------------------- 
    var {pic,pname,price,score,href}=p;
    var html=`
    <a href="${href}"> 
      <img src="${pic}" class="hot-1"/>
    </a>
    <div class="tan">
    <a href="${href}">${pname}</a>
      <span> <i>${score}</i> .0</span>
      <span>￥ <b>${price}</b>元起</span>
    </div>
   `
    parent.firstElementChild.innerHTML=html;
    //hot-movie center  six small-----------------------------------------------------
    //console.log(res);
    var parent=parent.lastElementChild.firstElementChild;
    var html=``;
    for(var p of res.slice(1,1+3)){
      var {pic,pname,price,score,href}=p;
      html+=`
      <li>
         <a href="${href}">
            <img src="${pic}" />
          </a>
          <div class="tan1">
            <a href="${href}">${pname}</a>
             <span> <i>${score}</i> .0</span>
            <span>￥ <b>￥${price}</b>元起</span>
          </div>
      </li>`
    }
    for(var p of res.slice(4,4+3)){
      var {pic,pname,price,score,href}=p;
      html+=`
      <li class="pt">
         <a href="${href}">
            <img src="${pic}" />
          </a>
          <div class="tan1">
            <a href="${href}">${pname}</a>
             <span> <i>${score}</i> .0</span>
            <span>￥ <b>￥${price}</b>元起</span>
          </div>
      </li>`
    }
    parent.innerHTML=html;

   var html="";
    //flag 
      var {pic,pname,price,score,href}=res[0];
      html=`
      <li  data-toggle="flag">
                <div class="res-watch hidden">
                  <h4>01</h4>
                  <a href="${href}">
                          ${pname}
                  </a>
                  <a href="${href}">
                  <span>${score}</span>.0
                  </a>
                  <a href="${href}">32%</a>
                </div>
                <div class="hover-watch " >
                    <h4>01</h4>
                    <p>
                      <a href="${href}">
                            ${pname}
                      </a>
                      <a href="${href}">
                        <span>${score}</span>.0
                      </a>
                    </p>
                    <a href="${href}">
                      <img src="${pic}" alt="">
                    </a> 
                    
                    <a href="${href}">32%</a>     
                </div>
              </li>`
    var i=1;
    for(var p of res.slice(2,2+4)){
      i++;
      var {pic,pname,price,score,href}=p;
      html+=`
      <li  data-toggle="flag">
                <div class="res-watch">
                  <h4>0${i}</h4>
                  <a href="${href}">
                          ${pname}
                  </a>
                  <a href="${href}">
                  <span>${score}</span>.0
                  </a>
                  <a href="${href}">32%</a>
                </div>
                <div class="hover-watch  hidden" >
                    <h4>0${i}</h4>
                    <p>
                      <a href="${href}">
                            ${pname}
                      </a>
                      <a href="${href}">
                        <span>${score}</span>.0
                      </a>
                    </p>
                    <a href="${href}">
                      <img src="${pic}" alt="">
                    </a> 
                    
                    <a href="${href}">32%</a>     
                </div>
              </li>`
    }
    var $parent=$("#hot-movie>.flag>.flag-bottom>ul");

    $parent.html(html);
    /*flag event*/
    $("[data-toggle=flag]").mouseenter("[data-toggle=flag]",function(e){
      e.preventDefault();
      var $tar=$(this);
      if($tar.children(":last-child").hasClass("hidden")){  //tar--li
          $tar.children(":last-child")
          .removeClass("hidden")
          .prev()
          .addClass("hidden");
          $tar.siblings()
          .children(":first-child").removeClass("hidden");
          $tar.siblings()
          .children(":last-child").addClass("hidden");
          
      }
  })  
  //console.log(res);
  //场次
  var $parent=$("#m-changci>.left");
  html="";
 for(var p of res.slice(7,7+3)){
    var {pic,pname,price,score,href,detail}=p;
    html+=`
    <div class="dianying">
        <a href="${href}"><img src="${pic}" alt=""/></a> 
        <div class="dy-b">
          <span>${detail}</span>
          <a href="${href}" class="fr">立即购票</a>
        </div>
        <a class="dingwei">${pname}</a>
      </div>`
  }
  $parent.html(html);
  //console.log(parent);
  //console.log(html)
})();