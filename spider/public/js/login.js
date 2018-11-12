$(function(){
    isLogin=location.search;
    console.log(isLogin);
    $("#biaodan a.submit").click(function(e){
        e.preventDefault();
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        console.log(uname,upwd);
        $.ajax({
            url:"http://localhost:3000/login",
            type:"get",
            data:{uname:uname,upwd:upwd},
            dataType:"json",
            success:function(res){
                var $isPass=$("#isPass");
                //console.log($isPass)
               if(res==0){
                    $isPass.removeClass("hidden");       
               }else{
                    $isPass.addClass("hidden");
                    var uid=res[0].uid;
                    location.href=`index.html?isLogin="true"`;  
               }
            }
        })
       
    })
   
       
    
   
})