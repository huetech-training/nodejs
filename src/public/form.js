    function deletes(){
        fetch('/add',{
            method:'DELETE'
        }).then((res)=>{
            console.log(res);
        })
    }