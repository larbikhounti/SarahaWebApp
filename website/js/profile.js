$('document').ready(function(){

   
        let token = localStorage.getItem("token");
        $('.tablo').append(  '<table />' );
        
        $.get("http://localhost:8000/posts",
        {
          token : token,
          secret: "mysecret"
        },
        function(data, status){
         
         for(let i = 0 ; i< data.length;i++){
          $('.tablo table').append( '<tr><td>' +  data[i].content + '</td></tr>' );

         }
         
         
  
        });
    
        
       
         
    




 




})




