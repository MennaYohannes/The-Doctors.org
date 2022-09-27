var user = JSON.parse(localStorage.getItem("userInfo"));

var profile = user.profile;

document.getElementsByClassName('status-desc')[0].innerHTML = user.firstName;
document.getElementsByClassName('status-desc')[1].innerHTML = user.lastName;
document.getElementsByClassName('status-desc')[2].innerHTML = user.email;
document.getElementsByClassName('status-desc')[3].innerHTML = user.country;
document.getElementsByClassName('status-desc')[4].innerHTML = user.gender;
document.getElementsByClassName('status-desc')[5].innerHTML = user.userName;
document.getElementsByClassName('left-side-content')[0].getElementsByTagName('img')[0].src = "profile pictures/" + user.profile;