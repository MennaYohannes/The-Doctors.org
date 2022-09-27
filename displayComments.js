function getComment(){                              //return the comment entered by the user in the textarea
    var comment;       
        var textarea = document.getElementsByClassName('comment-area')[0].getElementsByTagName('textarea')[0];
            if (textarea.value != ''){
                comment = textarea.value;
                textarea.value = "";
                return comment;
            }
        
    if(comment == null){
        return null;
    }
}

function getCurrentDate(){
    var time = new Date();
  var month = time.toLocaleString('default',{month:'long'});           // get the current month in word
  var day = time.getDate();
  var hrAndMin = time.toLocaleString('default',{hour:'numeric',minute:'numeric',hour12:true});  //get hour and minute in 12 hours format
  return month + ' ' + day + " at " + hrAndMin;
}
var Comments = function(proPic, name, username, time, comment, likeCount, replyCount){
    this.proPic = proPic;
    this.name = name;
    this.time = time;
    this.comment = comment;
    this.username = username;
    this.likeCount = likeCount;
    this.replyCount = replyCount;
   this.getIndex = function(commentWrapper){
// get index of commentWrapper
var commentsWrapper = document.getElementsByClassName('comments-wrapper')[0];
for(var i=0;i<commentsWrapper.getElementsByClassName('comment-wrapper').length;i++){
  
  cw = commentsWrapper.getElementsByClassName('comment-wrapper')[i];
  if(cw == commentWrapper)
    return i;

}
   }
   this.displayComment = function(replying){ 
    
        
            var commentWrapper = document.createElement('div');     // container for each comment(image,name,time...)
            commentWrapper.className = "comment-wrapper";
        
          var commentsWrapper = document.getElementsByClassName('comments-wrapper')[0];
          if(!replying){
          commentsWrapper.appendChild(commentWrapper);
          }
          
          var repliesWrapper;

              if(commentWrapper.getElementsByClassName('replies-wrapper').length == 0){
                  repliesWrapper = document.createElement('div');
                  repliesWrapper.className = "replies-wrapper";
                //  console.log('ew')
               }else{
                 repliesWrapper = commentWrapper.getElementsByClassName('replies-wrapper')[0];
                 
              }
      
       

           // comments inside commentsWrapper
          var commentsCount = commentsWrapper.getElementsByClassName('comment-wrapper').length;
          this.replyCount = commentWrapper.getElementsByClassName('replies-wrapper').length;
          
          var commenterInfo = document.createElement('div');      // name, text, time 
          commenterInfo.className = "commenter-info";
          if(replying)
            repliesWrapper.appendChild(commenterInfo);
          else
            commentWrapper.appendChild(commenterInfo);
        
          var profileStatus = document.createElement('div');
          profileStatus.className = "commenter-profile-status";
        
          if(replying){
            repliesWrapper.insertBefore(profileStatus,commenterInfo);
          }
          else
            commentWrapper.insertBefore(profileStatus,commenterInfo);

          
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

          var commentedText = document.createElement('div');
          commentedText.className = "commented-text";      
          commentedText.innerHTML =  this.comment.replace(/(?:\r\n|\r|\n)/g,"<br>");

 /* if(this.comment.indexOf('@') != -1){
      
      
        var uname = commentedText.innerHTML.slice(commentedText.innerHTML.indexOf('@'),commentedText.innerHTML.indexOf(' '));
        var unameLink = document.createElement('a');
        unameLink.id = "username-link";
        unameLink.innerHTML = uname;
        commentedText.innerHTML = commentedText.innerHTML.replace(uname,'<a id="username-link" href="">'+unameLink+"</a>");


      }*/
          commenterInfo.appendChild(commentedText);
          var bottomPartWrapper = document.createElement('div');
          bottomPartWrapper.className = "bottom-part-wrapper";
  
          commentWrapper.appendChild(bottomPartWrapper);

          var likeCount = document.createElement('div');
          likeCount.className = "like-count";
          bottomPartWrapper.appendChild(likeCount);
          likeCount.innerHTML = this.likeCount;
          var btnLike = document.createElement('button');
          btnLike.style.backgroundImage = "url('interactions/like.png')"
          bottomPartWrapper.appendChild(btnLike);
          btnLike.addEventListener('click',likeComment.bind(null,commentsCount-1),false);
if(!replying){
          var replyCount = document.createElement('div');
          replyCount.className = "reply-count";
          bottomPartWrapper.appendChild(replyCount);
          
}else{
          var replyWrapper = document.createElement('div');
          replyWrapper.className = "reply-wrapper";
        replyWrapper.appendChild(profileStatus);

        replyWrapper.innerHTML = this.comment;
        cw = document.getElementById("commenting");  
        document.getElementById("commenting").removeAttribute("id");
        cw.getElementsByClassName('replies-wrapper')[0].appendChild(replyWrapper);
        rw =  cw.getElementsByClassName('replies-wrapper')[0].getElementsByClassName('reply-wrapper');
        rc = cw.getElementsByClassName('reply-count')[0];
        rc.innerHTML = rw.length;
}


          var btnReply = document.createElement('button');
          btnReply.style.backgroundImage = "url('interactions/reply.png')";
          bottomPartWrapper.appendChild(btnReply);
          btnReply.addEventListener('click',replyComment.bind(null,this.username,commentWrapper),false);

commentWrapper.getElementsByClassName('bottom-part-wrapper')[0].after(repliesWrapper);
if(!replying)
  replyCount.innerHTML = commentWrapper.getElementsByClassName('replies-wrapper')[0].getElementsByClassName('reply-wrapper').length; //this.replyCount; 
 
  updateCommentscount();
        }
    
}
var replying = false;
function replyComment(username,commentWrapper){
 var textarea = document.getElementsByClassName('comment-area')[0].getElementsByTagName('textarea')[0];
    textarea.value = username + " ";
    textarea.focus();
    replying =true;
    var replyingTo = document.getElementsByClassName('replying-to')[0];
    replyingTo.innerHTML = "Replying to " + username;
    replyingTo.style.display = "block";
    var btnCancel = document.getElementById('btnCancel');
    btnCancel.style.display = "block";
    
    commentWrapper.setAttribute("id","commenting");
}
// event for the reset button
var parentReset = document.querySelectorAll('.comment-area');
var child = parentReset[0].children[1];
child.addEventListener('click',resetComment,false);

function resetComment(){
    var textarea = document.getElementsByClassName('comment-area')[0].getElementsByTagName('textarea')[0];
    textarea.value = "";
    textarea.focus();
}

// event for the cancel button
var child = document.getElementById('btnCancel');
child.addEventListener('click',cancelReply,false);

function cancelReply(){
    var textarea = document.getElementsByClassName('comment-area')[0].getElementsByTagName('textarea')[0];
    textarea.value = "";
    textarea.focus();
    var replyingTo = document.getElementsByClassName('replying-to')[0];
    replyingTo.style.display = "none";
    var btnCancel = document.getElementById('btnCancel');
    btnCancel.style.display = "none";
    replying = false;
}

if (document.getElementsByClassName('comments-wrapper').length != 0){
    var no_of_comments = document.getElementsByClassName('comments-wrapper')[0].getElementsByClassName('comment-wrapper').length;
    var liked = new Array(no_of_comments);          // creating an array of boolean values so that every comment have false (not liked) values.
    for(var x = 0; x < no_of_comments; x++) {
        liked[x] = false;
    }
}

function likeComment(i){
    var likeButton = document.getElementsByClassName("bottom-part-wrapper");
    likeButton = likeButton[i].getElementsByTagName("button")[0];
    var likes = document.getElementsByClassName("like-count");
    var likeCount = parseFloat(likes[i].innerHTML);

if(!liked[i]){
        likeCount +=  1;
   }
   else{
         likeCount -= 1;
   }
likes[i].innerHTML = likeCount;

   if (likeButton.style.backgroundImage == 'url("interactions/like.png")'){
       likeButton.className = "changeBackground";
       likeButton.removeAttribute("style");
       liked[i]=true;
   } else {
       likeButton.className = "";
       likeButton.setAttribute('style','background-image: url(interactions/like.png)')
      liked[i]=false;
   }
}

function loadComments(){
    var comments = [];
    comments[0] = new Comments("profile pictures/pic1.jpg","Tolosa Ayalew","@tolosa",getCurrentDate(),"Awesome",75,96);
    comments[0].displayComment(replying);
    comments[1] = new Comments("profile pictures/pic2.jpg","Abdu Hassen","@abdu",getCurrentDate(),"Amazing",45,25);
    comments[1].displayComment(replying);
    comments[2] = new Comments("profile pictures/pic3.jpg","Sebrin Ahmed","@sebrin",getCurrentDate(),"Great",92,62);
    comments[2].displayComment(replying);
    comments[3] = new Comments("profile pictures/pic4.jpg","Sara hailu","@sebrin",getCurrentDate(),"Fantastic",28,55);
    comments[3].displayComment(replying);
}

function updateCommentscount(){
  var length = document.getElementsByClassName('comment-wrapper').length;
    document.getElementsByClassName('comment-count')[0].innerHTML = length + ' ' + "comments";

  }
// event for the send button
var parentSend = document.querySelectorAll('.comment-area');
var child = parentSend[0].children[2];
child.addEventListener('click',sendComment,false);


function sendComment(){
  var user = JSON.parse(localStorage.getItem("userInfo"));
    var commentText = getComment();

        if (commentText != null){               // check if the textarea is not empty
            var comment = new Comments("profile pictures/"+user.profile,user.firstName+' '+user.lastName, user.userName,getCurrentDate(),commentText,0,0);
            comment.displayComment(replying);

        }
        if (replying){
          cancelReply();
          replying = false;
          
        }

}

function goBack(){
    window.document.location = "index.html";
}

