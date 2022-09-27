var user = JSON.parse(localStorage.getItem("userInfo"));
if(user.profile === null){
    document.getElementsByClassName('my-proPic')[0].getElementsByTagName('img')[0].src = "profile pictures/user.jpg";
}else{
    document.getElementsByClassName('my-proPic')[0].getElementsByTagName('img')[0].src = "profile pictures/"+ user.profile; 
}

document.getElementsByClassName('myname')[0].innerHTML = user.firstName + ' ' + user.lastName;