window.addEventListener('mouseup',function(event){
    var nav = document.querySelector('.nav__list');
    if(event.target !== nav && event.target.parentNode !== nav){
      nav.style.left = "-40rem";
      document.body.classList.remove("active");
    }
  }); 

  // https://github.com/salimd83/ecommerce-frontend
  var popTriggers = document.querySelectorAll(".popup-wrap.click .popup-trigger");
  for (let i = 0; i < popTriggers.length; i++) {
    popTriggers[i].addEventListener("click", (e) => {
      let pop = document.querySelector(".popup-wrap.click.active");
      if(pop && pop !== e.currentTarget.parentElement) pop.classList.remove("active");
      e.currentTarget.parentElement.classList.toggle("active");
    });
  }
  
  window.addEventListener("click", function (e) {
    let pop = document.querySelector(".popup-wrap.click.active .popup-trigger");
    if (pop && !pop.parentElement.contains(e.target)) {
      pop.parentElement.classList.remove("active");
    }
  })
