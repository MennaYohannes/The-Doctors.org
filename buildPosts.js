
var bulidPost = function(proPic,name,username,time,post,comments,likeCount,commentCount){
    this.proPic = proPic;
    this.name = name;
    this.username = username;
    this.time = time;
    this.post = post;
    this.comments = comments;
    this.likeCount = likeCount;
    this.commentCount = commentCount;

this.displayPost = function(){
    var itemsWrapper = document.getElementsByClassName('items-wrapper')[0];
    var profileStatus = document.createElement('div');
    profileStatus.className = "profile-status";
    var itemWrapper = document.createElement('div');
    itemWrapper.className = "item-wrapper";

    itemsWrapper.appendChild(profileStatus);
    itemsWrapper.appendChild(itemWrapper);
    
    var proPic = document.createElement('div');
    proPic.className = "proPic";
    var img = document.createElement('img');
    img.src = this.proPic;
    proPic.appendChild(img);
    profileStatus.appendChild(proPic);

    var nameTimeUsername = document.createElement('div');
    nameTimeUsername.className = "name-time-username-wrapper";
    profileStatus.appendChild(nameTimeUsername);

    var nameAndUsername = document.createElement('div');
    nameAndUsername.className = "name-username-wrapper";
    nameTimeUsername.appendChild(nameAndUsername);

    var name = document.createElement('div');
    name.className = "name";
    name.innerHTML = this.name;
    nameAndUsername.appendChild(name);

    var username = document.createElement('div');
    username.className = "username";
    username.innerHTML = this.username;
    nameAndUsername.appendChild(username);

    var dotTime = document.createElement('div');
    dotTime.className = "dot-time-wrapper";
    nameTimeUsername.appendChild(dotTime);

    var dot = document.createElement('div');
    dot.className = "dot";
    dotTime.appendChild(dot);

    var time = document.createElement('div');
    time.className = "time";
    time.innerHTML = this.time;
    dotTime.appendChild(time);

    var postType = getPostType(this.post);
    var backImg = document.createElement('div');
    backImg.className = "background-image";


    itemWrapper.appendChild(backImg);

    var btnWrapper = document.createElement('div');
    btnWrapper.className = "buttons-wrapper";
    itemWrapper.appendChild(btnWrapper);

    var likeCount = document.createElement('div');
    likeCount.className = "post-status likes";
    likeCount.innerHTML = this.likeCount;
    btnWrapper.appendChild(likeCount);

    var btnLike = document.createElement('button');
    btnLike.style.backgroundImage = "url('interactions/likeWhite.png')"
    btnWrapper.appendChild(btnLike);

    var commentCount = document.createElement('div');
    commentCount.className = "post-status comments";
    commentCount.innerHTML = this.commentCount;
    btnWrapper.appendChild(commentCount);

    var btnComment = document.createElement('button');
    btnComment.style.backgroundImage = "url('interactions/comment.png')";
    btnWrapper.appendChild(btnComment);

    
    
    var btnDwnld = document.createElement('button');
    btnDwnld.style.backgroundImage = "url('interactions/download.png')";
    btnWrapper.appendChild(btnDwnld);

    if(postType === "image") {
      backImg.style.backgroundImage = "url('posts/" + this.post + "')";
      
  }
  else if (postType === "text"){
    itemWrapper.innerHTML = this.post.replace(/(?:\r\n|\r|\n)/g,"<br>");
    itemWrapper.style.padding = "20px";
    itemWrapper.appendChild(btnWrapper);
    btnLike.style.display = "block";
    btnComment.style.display = "block";
    likeCount.style.display = "block";
    commentCount.style.display = "block";
    btnWrapper.style.position = "relative";
    btnWrapper.style.top = "20px";
    btnWrapper.style.backgroundColor = "#2C3E50";
    itemWrapper.style.pointerEvents = "none";
    btnWrapper.style.pointerEvents = "auto";
    btnDwnld.style.display = "none";

    // like is disappearing when mouse out
    btnWrapper.addEventListener('mouseout',function(){
      btnLike.style.display = "block";
    })
    
}
    
}
}
function getPostType(post){
  post = post.toUpperCase();
  var extension = post.slice(post.indexOf('.')+1);
  var type;
  if (extension === "JPG" || extension === "PNG" || extension === "GIF" || extension === "WEBP" || extension === "TIFF" || extension === "PSD" || extension === "RAW" || extension === "BMP" || extension === "HEIF" || extension === "INDD" || extension === "JPEG 2000")
      type = "image";
  else if (extension === "WEBM" || extension === "MPG" || extension === "MP2" || extension === "MPEG" || extension === "MPE" || extension === "MPV" || extension === "OGG" || extension === "MP4" || extension === "M4P" || extension === "M4V" || extension === "AVI" || extension === "WMV" || extension ==="MOV"
          || extension === "QT" || extension === "FLV" || extension === "SWF" || extension === "AVCHD" || extension === "MKV" )
      type = "video";
   else
      type = "text";
      
return type;
}
//POSTING STATICALLY
var posts = [];
posts[0] = new bulidPost("profile pictures/download.png","Menna Yohannes","@Dr.Menna","2:30 AM","The Centers for Disease Control and Prevention estimates that more than 1.2 million Americans 13 years and older are living with HIV. One in four people living with AIDS in the United States in 2014 was a woman","",5,6);
posts[0].displayPost();
posts[1] = new bulidPost("profile pictures/download2.png","Wongel H/Michael","@Dr.Wongel","2:30 AM","120.png","",10,15);
posts[1].displayPost();
posts[1] = new bulidPost("profile pictures/download2.png","Wongel H/Michael","@Dr.Wongel","8:30 AM","118.jpg","",10,15);
posts[1].displayPost();
posts[0] = new bulidPost("profile pictures/download.png","Menna Yohannes","@Dr.Menna","12:30 AM","We spend about one-third of our time on Planet Earth asleep. That’s about 16 hours a night as infants, 9 hours as teens and 7 to 8 hours as adults. Until 25 years ago, scientists knew little about this nighttime habit of ours. Below, experts in our Sleep Disorders Center share curious and fantastic facts about sleep.","",5,6);
posts[0].displayPost();
posts[1] = new bulidPost("profile pictures/imageddd.jpg","Nahom H/Michael","@Dr.Nahom","8:30 AM","123.jpg","",10,15);
posts[1].displayPost();



// Dynamic post for user
//POSTING IMAGES
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
var str;

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {

  if (realFileBtn.value) {
    str = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1]; 
  var user = JSON.parse(localStorage.getItem("userInfo"));
  var time = new Date();
  var hrAndMin = time.toLocaleString('default',{hour:'numeric',minute:'numeric',hour12:true});  //get hour and minute in 12 hours format
 var i = posts.length;
 posts[i] = new bulidPost("profile pictures/"+user.profile,user.firstName+' '+user.lastName,user.userName,hrAndMin,str,"",0,0);
posts[i].displayPost();

// Add events to new buttons
var like = document.getElementsByClassName('item-wrapper')[i].getElementsByClassName('buttons-wrapper')[0].getElementsByTagName('button')[0];
var comment = document.getElementsByClassName('item-wrapper')[i].getElementsByClassName('buttons-wrapper')[0].getElementsByTagName('button')[1];
like.addEventListener('click',like_click.bind(null,i),false);
comment.addEventListener('click',comment_click.bind(null,i),false);
document.getElementsByClassName('item-wrapper')[i].addEventListener('mouseover',addClass.bind(null,i),false);
document.getElementsByClassName('item-wrapper')[i].addEventListener('mouseout',removeClass.bind(null,i),false);
}
});


/// POSTING TEXTS
var textarea = document.querySelector("#postSomething").getElementsByTagName('textarea')[0];
var btnPost = document.querySelector('#post').getElementsByTagName("button")[0];


textarea.addEventListener('keyup',function(){

  if(textarea.value !== ''){
    btnPost.style.display = "block";
 
  }else{
      btnPost.style.display = "none";
  }

});

btnPost.addEventListener('click',function(){
  var time = new Date();
  var hrAndMin = time.toLocaleString('default',{hour:'numeric',minute:'numeric',hour12:true});  //get hour and minute in 12 hours format

posts[i] = new bulidPost("profile pictures/"+user.profile,user.firstName+' '+user.lastName,user.userName,hrAndMin,textarea.value,"",0,0);
posts[i].displayPost();


// Add events to new buttons
var like = document.getElementsByClassName('item-wrapper')[i].getElementsByClassName('buttons-wrapper')[0].getElementsByTagName('button')[0];
var comment = document.getElementsByClassName('item-wrapper')[i].getElementsByClassName('buttons-wrapper')[0].getElementsByTagName('button')[1];
like.addEventListener('click',like_click.bind(null,i),false);
comment.addEventListener('click',comment_click.bind(null,i),false);
textarea.value = "";
btnPost.style.display = "none";
});

