const buttonReadMore = document.querySelector('.article__button');
const articleTextDesktop = document.querySelector('.article__wrapper');

buttonReadMore.addEventListener('click', () => {
  const isOpen = articleTextDesktop.style.maxHeight === 'none';


  if (isOpen) {
    articleTextDesktop.style.maxHeight = null;
    buttonReadMore.textContent = 'Читать далее';
    buttonReadMore.classList.remove('opened');
  } else {
    articleTextDesktop.style.maxHeight = 'none';
    buttonReadMore.textContent = 'Скрыть';
    buttonReadMore.classList.add('opened');
  }


  buttonReadMore.classList.toggle('rotate-icon');
});


