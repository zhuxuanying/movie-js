/*********************************** my-tab***********************************************/
$("[data-toggle=tab").parent().on("click","[data-toggle=tab]",e=>{
    e.preventDefault();
    var $tar=$(e.target);   
    $tar
    .addClass("active")
    .parent().siblings().children()   
    .removeClass("active")
    var id=$tar.attr("data-target");
    $(id)
    .removeClass("hidden")
    .siblings()
    .addClass("hidden")
})
/***************************************my-flag************************************************/
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
   /*for(var key=0;key<$li.length;key++){
        li=$li[key]
        res=li.firstElementChild;
        hover=li.lastElementChild;
        
   }*/
   
    
     
