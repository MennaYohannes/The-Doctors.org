var login = document.querySelector('#login');


login.addEventListener('submit',function(e){
    
    
var email = document.getElementsByClassName('textbox')[0].getElementsByTagName('input')[0].value;
var pass = document.getElementsByClassName('textbox')[1].getElementsByTagName('input')[0].value;
          
var user = JSON.parse(localStorage.getItem("userInfo"));
if( user !== null){
    
    if (user.email !== email || user.password !== pass){
       alert("Incorrect email or password")
       e.preventDefault();
    }
    
}else{
    alert("You are not a user. Please sign up.");
    e.preventDefault();
}   
   
});
