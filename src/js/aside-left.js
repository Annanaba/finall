const openMenuButton = document.querySelector('.burger');
const leftMenu = document.querySelector('.aside-left');
const closeMenuButton = document.querySelector('.aside-left__close');
const openCall = document.querySelectorAll('.call-mobile');
const closeCall = document.querySelector('.close-call');
const feedbackCall = document.querySelector('.request-call');
const openChat = document.querySelectorAll('.chat-mobile')
const feedbackChat = document.querySelector('.feedback-chat')
const closeChat = document.querySelector('.feedback-chat-close')
const header = document.querySelector('.header')
const main = document.querySelector('.main')

openMenuButton.addEventListener('click', function() {
    if (window.innerWidth < 1400) {
        leftMenu.style.display = 'block';
        closeMenuButton.style.display = 'block';
        document.body.style.overflow = 'hidden';
        header.style.opacity ='0.04';
        main.style.opacity ='0.04';
    }
});

closeMenuButton.addEventListener('click', function(){
    if(window.innerWidth < 1400){
        leftMenu.style.display = 'none';
        document.body.style.overflow = '';
        header.style.opacity = '';
        main.style.opacity = '';
    }
});

openCall.forEach(button => {
    button.addEventListener('click', function() {
        feedbackCall.style.display = 'block';
        document.body.style.overflow = 'hidden';
        header.style.opacity ='0.04';
        main.style.opacity ='0.04';
        leftMenu.style.opacity ='0.01';
    });
});

closeCall.addEventListener('click', function(){
    feedbackCall.style.display = 'none';
    document.body.style.overflow = '';
    header.style.opacity = '';
    main.style.opacity = '';
    leftMenu.style.opacity ='';
});

openChat.forEach(button =>{
    button.addEventListener('click', function(){
        feedbackChat.style.display =' block';
        document.body.style.overflow = 'hidden';
        header.style.opacity ='0.04';
        main.style.opacity ='0.04';
        leftMenu.style.opacity ='0.01';
    })
})
closeChat.addEventListener('click', function(){
    feedbackChat.style.display = 'none'
    document.body.style.overflow = '';
    header.style.opacity = '';
    main.style.opacity = '';
    leftMenu.style.opacity ='';
})





