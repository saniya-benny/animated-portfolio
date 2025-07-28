const video1=document.getElementById("pro1");
const video2=document.getElementById("pro2");
const videolist=[video1,video2];
videolist .forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
    })
     video.addEventListener('mouseout',function(){
        video.pause()
    }
    )

})
    
