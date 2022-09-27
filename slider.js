$(document).ready(function(){
    $('.next').on('click',function(){

        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index',-10);
            nextImg.addClass('active').css('z-index', 10);
            
        }
});
    $('.prev').on('click',function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index',-10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});
var page = document.querySelector("#page");

//image slide
var btnOpen =  document.querySelector("#open");
    var openWide = document.querySelector('#open-wide');
    btnOpen.addEventListener('click',function(){
       openWide.style.display = "block";
       
        var posts = document.getElementsByClassName('post');
var sliderInner = document.querySelector("#slider-inner");
        for(i=0;i<posts.length;i++){   

            
           if(typeof posts[i].getElementsByTagName('img')[0] === 'undefined'){
            var newElement = document.createElement('video');
            newElement.src = posts[i].getElementsByTagName('video')[0].src;
            newElement.controls = "controls";
            
           }
            else{
                var newElement = document.createElement('img');
                newElement.src = posts[i].getElementsByTagName('img')[0].src;
            }
            sliderInner.appendChild(newElement);
        }
        sliderInner.getElementsByTagName('img')[0].className = 'active';
    page.classList.add('blur');
    });

    var btnClose = document.querySelector('#open-wide').getElementsByTagName('button')[0];
    btnClose.addEventListener('click',function(){
        openWide.style.display = "none";
        page.classList.remove('blur');
    // Remove every element when slide is closed    
        var posts = document.getElementsByClassName('post');
        var sliderInner = document.querySelector("#slider-inner");
                for(i=0;i<posts.length;i++){   
        
                    if(typeof posts[i].getElementsByTagName('img')[0] === 'undefined'){
                 var element = sliderInner.getElementsByTagName('video')[0];   
                   
                     }else{
                       var element = sliderInner.getElementsByTagName('img')[0];  
                        }          
        sliderInner.removeChild(element);
     
                    }
    });