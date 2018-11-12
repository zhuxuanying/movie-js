$(function(){
    if(location.search.indexOf("mid=")!=-1  && location.search.indexOf("hid=")!=-1){
        //mid=1&hid=2
        var mid;
        var string=decodeURI(location.search.slice(1).split("&"));
        var arr=string.split(",");
        var mid=arr[0].split("=")[1];
        var hid=arr[1].split("=")[1];
        var mtid=arr[2].split("=")[1];
       
        $.ajax({
            url:"http://localhost:3000/odetail",
            type:"get",
            data:{mid,hid,mtid},
            dataType:"json",
            success:function(res){
                var {hallMsg,msg,mtname,pics}=res;
                var {mname,price,language,texiao}=msg;
                var {mtname}=mtname;
                var {md}=pics[0];
                //top
                var $parent=$("#choose>.row1>ul")
                var html=`
                <li class="flex">
                    <img src="${md}" alt=""/>
                    <h4>${mname}</h4>
                </li>
                <li>
                    <p class="yy">${mtname}</p>
                    
                </li>
                <li>
                    <p class="yy">语言/版本：${language} ${texiao} </p>
                    <div class="time">
                    
                    </div>
                </li>`
                $parent.html(html);
                //座位行数
                var $parent=$("#choose>.row2>.seat-RN>ul");
                var html="";
                for(var i in hallMsg){
                    i=parseInt(i);
                    html+=`<li>${i+1}</li>`
                }
                $parent.html(html);
                var $parent=$("#seatArea")
                //座位详情
                var html="";
                var sHtml="";
                var row=hallMsg.length;
                var colomn=0;
                for(var i in hallMsg["0"]){
                    colomn++;
                   
                }
                for(var i=0;i<row;i++){ //行数
                    for(var j=0;j<colomn-1;j++){
                       
                        sHtml+=`
                        <span>
                            <img name="weixuan" data-color="yellow" flag="1" src="img/order-details/yellow.png" data-red="img/order-details/red.png" data-pink="img/order-details/pink.png" data-green="img/order-details/green.png"  title="${i+1}排${j+1}座"  data-yellow="img/order-details/yellow.png" data-num="${i+1}排${j+1}座" data-toggle="seat" >
                        </span>`
                    }
                    sHtml=`<div class="seat-row">`+sHtml+` </div>`;
                    html+=sHtml;
                    sHtml=""
                }
               $parent.html(html);
               //左边事件
               $("#choose .control").click(function(e){
                e.preventDefault();
                var $tar=$(this);
                if(!$tar.hasClass("data-none")){
                    $tar.prev().css({"width":"0px","opacity":"0"});
                    var $gt=$(`
                        <a href="#">
                            <span>&gt;</span>
                            <span>展</span>
                            <span>开</span>
                        </a>
                    `)
                    $tar.html($gt)
                    .addClass("data-none")
                }else{
                    $tar.prev().css({"width":"870px","opacity":"1"});
                    var $lt=$(`
                        <a href="#">
                            <span>&lt;</span>
                            <span>收</span>
                            <span>起</span>
                        </a>
                    `)
                    $tar.html($lt)
                    .removeClass("data-none")
                }
            })
            //单击变绿
            var i=1;
            $("#seatArea").on("click","[data-toggle=seat]",function(e){
                e.preventDefault();
                $tar=$(this);
                var dataNum=$tar.attr("data-num");
                //var $price=$("#result>.price>p:first-Child");================================
                var $span=$("#result>.seat>p>span");
                //console.log($span)
                
                //console.log($price);
                if($tar.attr("data-color")=="yellow"&&i<=4){
                    var $green=$tar.attr("data-green");
                    $tar
                    .attr("src",$green)
                    .attr("data-color","green");
                    i++;
                    $span.html(i-1);
                    getPrice();
                    var $parent=$("#result ul");
                    var $li=`<li class="has-seat">
                                <p>${dataNum}</p>
                                <a href="#" data-toggle="del">X</a>
                            </li>`;
                    $parent.append($li);
                }else if($tar.attr("data-color")=="green" ){
                    var $yellow=$tar.attr("data-yellow");
                    $tar.attr("src",$yellow)
                    .attr("data-color","yellow");
                    i--;
                    $span.html(i-1);
                    getPrice();
                    var $lis=$("#result ul").children();
                    for(var elem of $lis){
                        var $elem=$(elem);
                        var num=$elem.children(":first-child").text();
                        if(num==dataNum){
                           $elem.remove();
                            console.log($lis)
                        }
                    }
                }
               // $price.html(30*(i-1));==========================================
               
                if(i>0){
                    var $parent=$("#result ul");
                    $parent.next().removeClass("hidden");
                    $("#result .origin-seat").addClass("hidden");
                    $("#result ul").removeClass("hidden");
                    $("#result div.submit>.xuanze").addClass("hidden");
                    $("#result div.submit>.tijiao").removeClass("hidden");
                }else if(i<=0){
                    var $parent=$("#result ul");
                    $parent.next().addClass("hidden");
                    $("#result .origin-seat").removeClass("hidden");
                    $("#result ul").addClass("hidden");
                    $("#result div.submit>.xuanze").removeClass("hidden");
                    $("#result div.submit>.tijiao").addClass("hidden")
                   
                }
                
            
            })
            //span单击事件
            //  console.log($("#result ul>li"));
            $("#result ul").on("click","[data-toggle=del]",function(e){
                console.log(111);
                e.preventDefault();
                $tar=$(this);
                $tar.parent().remove();
                var $imgs=$("#seatArea").find("[data-toggle=seat]");
                for(var img of $imgs){
                    $img=$(img);
                    imgNum=$img.attr("data-Num");
                    tNum=$tar.prev().text();
                    if(imgNum==tNum){
                        var $yellow=$img.attr("data-yellow");
                        $img.attr("src",$yellow)
                        .attr("data-color","yellow");
                    }
                }
                i--;
                if(i>0 && i<=4){
                    $("#result .origin-seat").addClass("hidden");
                    $("#result ul").removeClass("hidden");
                    $("#result div.submit>.xuanze").addClass("hidden");
                    $("#result div.submit>.tijiao").removeClass("hidden");
                }else{
                    $("#result .origin-seat").removeClass("hidden");
                    $("#result ul").addClass("hidden");
                    $("#result div.submit>.xuanze").removeClass("hidden");
                    $("#result div.submit>.tijiao").addClass("hidden")
                }
            })
            
                
            
               //右边
               function getPrice(){
                $parent=$("#result>.price");
                var html=`<p>票价：￥${price*i}元(单价${price})元</p>  
                        <p>小计：<span>￥${price*i}元</span> </p>  `
                    $parent.html(html);
                }
                getPrice();
                console.log($("#result>.submit>.tijiao"))
               $("#result>.submit>.tijiao").on("click",function(e){
                    e.preventDefault();
                    var reg=/^[0-9]{11}$/
                    var value=$("#result>.phone>div>input").val();
                    console.log(value)
                   if(value==""){
                        $("#kong").removeClass("hidden");
                   } else if(!reg.test(value)){
                    $("#geshi").removeClass("hidden");
                   }else{
                    $("#result>.phone>div>input").siblings().addClass("hidden")
                   }
                   //页面相应的绿色变为红色  更改数据库中1-0
                   //首次加载时0的引入
                   //倒计时
               })
               
            }
            
        })
    }


})