function fn(){
    for(var i=0,arr=[];i<3;i++){
            arr[i]=function(){
            console.log(i);
        }
    }
        return arr;  
    }
    var funs=fn();
    funs[0]();
    funs[1]();
    funs[2]();