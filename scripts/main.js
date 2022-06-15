  // AOS animation
  AOS.init({
    anchorPlacement: "top-left",
    duration: 600,
    easing: "ease-in-out",
    once: false,
    mirror: false,
    disable: false,
  });

  //swiper
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 2000,
    },
    // loop: true
  });

  // navbar effects
  let navbar = document.getElementById("nav")
  window.addEventListener("scroll" , ()=>{
    if(window.scrollY > 0){
      navbar.classList.add("nav_not_top")
    }else{
      navbar.classList.remove("nav_not_top")
    }
  })