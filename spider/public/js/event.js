
/*$("#hot-movie>.center>.center-left").mouseover(function(e){
    e.preventDefault();
    var $tar=$(this);
    if($tar.children().hasClass("tan")){
        $tar.children().removeClass("tan")
    }else{
        $tar.children().addClass("tan")
    }
})*/
//movie-detail.html events
//tusi  juzhao 
//收起 

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

    
