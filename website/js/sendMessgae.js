$('document').ready(function(){
    let user_id = '';
    let url = window.location.href.split("=",2); 
   
    $.get("http://localhost:8000/"+url[1]+"",
    {
     
     
    },
    function(data, status){
     user_id = data.user_id;
    });
    $('.addMessage').click(function(){
       let content =  document.querySelector(".inputs").value;
        $.post("http://localhost:8000/addpost",
        {
            user_id : user_id,
          content : content
         
        },
        function(data, status){
         
        });
    })

   

    
   
     










})




