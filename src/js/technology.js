let mySwiperTechnology; 
let initializedTechnology = false;
const buttonReadMore = document.querySelector('.technology_btn');
const articleTextDesktop = document.querySelector('.technology__list');

function initSwiperTechnology() {
    if (window.innerWidth < 768) {
      if (!initializedTechnology) {
        initializedTechnology = true;
        mySwiperTechnology = new Swiper('.technology__swiper', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          loop: true,
          pagination: {
            el: '.technology__swiper-pagination',
            clickable: true,
          },
        });
      }
    } else {
      if (initializedTechnology) {
        mySwiperTechnology.destroy(true, true);
        initializedTechnology = false;
      }
    }
  }




function initSwipers() {
    initSwiperTechnology();
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