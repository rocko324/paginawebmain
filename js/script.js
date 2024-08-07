const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    grabCursor:true,
    spaceBetween:10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {

     0:{
        slidesPerView: 1
     },
     620:{
        slidesPerView: 2
     },
     1024:{
        slidesPerView: 3
     },  
     1600:{
        slidesPerView: 4
     },
     2200:{
        slidesPerView: 5
     },
     2800:{
        slidesPerView: 6
     } ,    
    }
  
   
  });