const bars=document.querySelector('.fa-bars');
const navlist =document.querySelector('.navbar')

bars.addEventListener('click',()=>{

    navlist.classList.toggle("open");
    bars.classList.toggle(".fa-xmark")
})

window.onscroll =()=>{
    navlist.classList.remove("open");
    bars.classList.remove(".fa-xmark")
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".myswiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });