$(document).ready(function(){
    
$(".log-in").click(function(Event){
    Event.preventDefault()
  

    let email_adress =  $(".email").val()
    let password =  $(".password").val()
    
      
    $.post("http://localhost:8000/login",
    {
      email_adress: email_adress,
      password: password
    },
    function(data, status){
       if(data.token != null){
        localStorage.setItem("token", data.token);
        localStorage.setItem("secret", "mysecret");

        window.location.href = '/profile.html'; 
       }
    });

})

$(".sign-up").click(function(Event){
  Event.preventDefault()


  let username =  $(".username").val()
  let full_name =  $(".full_name").val()
  let password =  $(".password").val()
  let email_adress =  $(".email_adress").val()
  let bio =  $(".bio").val()
    if(password != ""){
      $.post("http://localhost:8000/signup",
      {
        email_adress: email_adress,
        password: password,
        username : username,
        full_name : full_name,
        bio : bio
      },
      function(data, status){
        
          console.log(data);
        
      });
    }
  

})








})