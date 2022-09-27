var user = {
    firstName : "",
    lastName : "",
    userName : "",
    email : "",
    gender : "",
    country : "",
    password : "",
    profile : ""
}

var createAccount = document.querySelector('#create-account');

createAccount.addEventListener('submit',function(e){

var pass1 = document.getElementsByClassName('textbox')[3].getElementsByTagName('input')[0].value;
var pass2 = document.getElementsByClassName('textbox')[4].getElementsByTagName('input')[0].value;

var msgBox = document.querySelector('#message-box');
var msg = document.querySelector('#message');
var page = document.querySelector("#fill-info");
if (pass1 !== pass2){
    e.preventDefault();
    page.classList.add('blur');
    msgBox.style.display = "block";
    msg.innerHTML = "Passwords don't match !";
    
}
if(pass1.length < 6){
    e.preventDefault();
    page.classList.add('blur');
    msgBox.style.display = "block";
    msg.innerHTML = "Password must be more than 6 characters";

}
if((pass1.toString() === pass2.toString()) && (pass1.toString().length >= 6)){

    user.firstName = document.getElementsByClassName('textbox')[0].getElementsByTagName('input')[0].value;
    user.lastName = document.getElementsByClassName('textbox')[1].getElementsByTagName('input')[0].value;
    user.userName = '@' + user.lastName + user.firstName;
    user.email = document.getElementsByClassName('textbox')[2].getElementsByTagName('input')[0].value;
        if (document.getElementById('male').checked ==true)
            user.gender = "Male";
        else
            user.gender = "Female";
    user.country = document.getElementById('country').value;
    user.password = pass1;
    
    var user_serialized = JSON.stringify(user);
localStorage.setItem("userInfo",user_serialized);

}

var btnmsg = document.getElementById("message-box").getElementsByTagName("button")[0];

btnmsg.addEventListener('click',function(){
    msgBox.style.display = "none";
    page.classList.remove('blur');
});
});

createAccount.addEventListener('reset',function(){
    window.document.location = "login.html";

});
