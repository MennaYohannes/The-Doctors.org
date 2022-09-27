var items = document.querySelectorAll('.item-wrapper');
for(i=0; i<items.length; i++){
    items[i].addEventListener('mouseover', addClass.bind(null,i));
    items[i].addEventListener('mouseout', removeClass.bind(null,i) );
}
function addClass(i) { 
        items = document.querySelectorAll('.item-wrapper');
        if (typeof items[i].getElementsByClassName('background-image')[0] !== 'undefined'){
          items[i].getElementsByClassName('background-image')[0].classList.add('image-darken');
        }
    }
    
function removeClass(i){
    if (typeof items[i].getElementsByClassName('background-image')[0] !== 'undefined' )
            items[i].getElementsByClassName('background-image')[0].classList.remove('image-darken');
}
 
//})


var no_of_posts = document.getElementsByClassName('item-wrapper').length;

var liked = new Array(no_of_posts);          // creating an array of boolean values so that every post have false (not liked) values.
for(var x = 0; x < no_of_posts; x++) {
    liked[x] = false;
}

var parentLike = document.getElementsByClassName('buttons-wrapper');
for (var i=0;i<parentLike.length;i++) {
    var child = parentLike[i].getElementsByTagName('button')[0];
    child.addEventListener('click',like_click.bind(null,i),false);
}

function like_click(i){
    var likeButton = document.getElementsByClassName("buttons-wrapper");
    likeButton = likeButton[i].getElementsByTagName("button");
    var likes = document.getElementsByClassName("likes");
    var likeCount = parseFloat(likes[i].innerHTML);

    if(!liked[i]){
         likeCount +=  1;
    }
    else{
          likeCount -= 1;
    }
likes[i].innerHTML = likeCount;
    if (likeButton[0].style.backgroundImage == 'url("interactions/likeWhite.png")'){
        likeButton[0].className = "changeBackground";
        likeButton[0].removeAttribute("style");
        liked[i]=true;
    } else {
        likeButton[0].className = "";
        likeButton[0].setAttribute('style','background-image: url(interactions/likeWhite.png)')
       liked[i]=false;
    }

}
var parentComment = document.getElementsByClassName('buttons-wrapper');
for (var i=0;i<parentComment.length;i++) {
    var child = parentComment[i].getElementsByTagName('button')[1];
    child.addEventListener('click',comment_click.bind(null,i),false);
}

// event for the comment button
function comment_click(i){
   window.location="comments.html";
}


