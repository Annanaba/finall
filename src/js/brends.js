
const buttonReadMore = document.querySelector('.brends__description_btn');
const articleTextDesktop = document.querySelector('.brends__list');
let mySwiperBrends; 
let initializedBrends = false; 


function initSwiperBrends() {
  if (window.innerWidth < 768) {
    if (!initializedBrends) {
      initializedBrends = true;
      mySwiperBrends = new Swiper('.brends__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: '.brends__swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (initializedBrends) {
      mySwiperBrends.destroy(true, true);
      initializedBrends = false;
    }
  }
}


function initSwipers() {
  initSwiperBrends();
}

window.addEventListener('load', () => {
  initSwipers();
});

window.addEventListener('resize', () => {
  initSwipers();
});


buttonReadMore.addEventListener('click', () => {
    const isOpen = articleTextDesktop.style.maxHeight === 'none';
  
    if (isOpen) {
      articleTextDesktop.style.maxHeight = null;
      buttonReadMore.textContent = 'Показать все';
      buttonReadMore.classList.remove('opened');
    } else {
      articleTextDesktop.style.maxHeight = 'none';
      buttonReadMore.textContent = 'Скрыть';
      buttonReadMore.classList.add('opened');
    }
  
    buttonReadMore.classList.toggle('rotate-icon');
  });








