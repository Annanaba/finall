let mySwiperPrice; 
let initializedPrice = false; 


function initSwiperPrice() {
  if (window.innerWidth < 768) {
    if (!initializedPrice) {
      initializedPrice = true;
      mySwiperPrice = new Swiper('.price__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: '.price__swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (initializedPrice) {
      mySwiperPrice.destroy(true, true);
      initializedPrice = false;
    }
  }
}


function initSwipers() {
  initSwiperPrice();
}

window.addEventListener('load', () => {
  initSwipers();
});

window.addEventListener('resize', () => {
  initSwipers();
});