window.addEventListener('mouseup',function(event){
    var nav = document.querySelector('.nav__list');
    if(event.target !== nav && event.target.parentNode !== nav){
      nav.style.left = "-40rem";
      document.body.classList.remove("active");
    }
  }); 
