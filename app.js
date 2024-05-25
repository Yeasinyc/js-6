
     let nav = document.querySelector('#nav');
     let a = 0; 
window.addEventListener('scroll',function(){
    let test = document.documentElement.scrollTop;
    if(test < a){
      nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
     a = test;
});

     let moon = document.querySelector(".moon");
     let sun = document.querySelector(".sun");
     let body = document.querySelector("body");

    moon.addEventListener('click' , function (){
    body.classList.add('MODE');
    if(body.classList.contains('MODE')){
        moon.style. marginTop = '-100%';
        console.log('okk');
    }
})

    sun.addEventListener('click', function(){
     body.classList.remove("MODE");
     if(!body.classList.contains('MODE')){
        moon.style.marginTop = "0%";
     }  
    })

    let cursor = document.querySelector(".cursor");
    window.addEventListener('mousemove', function(e){
       let x = e.clientX;
       let y = e.clientY;
       cursor.style.left = x + 'px';
       cursor.style.top = y + 'px';
       console.log("X ="+ x);
       console.log("Y ="+ y);
    });









