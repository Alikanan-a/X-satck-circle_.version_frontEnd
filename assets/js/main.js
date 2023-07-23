// /*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
// <!--=============== colors ===============-->
const blue = document.querySelector('#blue')
const purple = document.querySelector('#purple')
const pink = document.querySelector('#pink')
const teal = document.querySelector('#teal')
const red = document.querySelector('#red')
const orange = document.querySelector('#orange')
const brown = document.querySelector('#brown')
const gray = document.querySelector('#gray')
const body = document.querySelector('body')


$(function () {
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
  $('#purple').click(function (e) {
    e.preventDefault()
    $("body").removeClass('blue');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('purple')
  })
  $('#blue').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('blue')
  })
  $('#pink').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('blue');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('pink')
  })
  $('#teal').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('blue');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('teal')
  })
  $('#red').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('blue');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('red')
  })
  $('#orange').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('blue');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('orange')
  })
  $('#brown').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('blue');
    $("body").removeClass('gray');
    $('body').addClass('brown')
  })
  $('#gray').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('blue');
    $('body').addClass('gray')
  })
})
$(function () {
    $('.about_us__main_page_circle').mouseenter(function() {
        $('.about_us__main_page_section2-content').css('opacity', '1');
    })
    $('.about_us__main_page_circle').mouseout(function() {
      $('.about_us__main_page_section2-content').css('opacity', '0') ;
  })
})

// /*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
// })

// sr.reveal('.color-container')
// sr.reveal('.menu', {
//   delay: 500
// })
// sr.reveal('.main__h1_placeHolder', {
//   delay: 600
// })
// sr.reveal('.main__h1_lorem_placeHolder', {
//   delay: 700
// })
// sr.reveal('.profile__info-group', {
//   interval: 100,
//   delay: 700
// })
// sr.reveal('.profile__buttons', {
//   delay: 800
// })
// sr.reveal('.filters__content', {
//   delay: 900
// })
// sr.reveal('.filters', {
//   delay: 1000
// })


// /*=============== sticky navbar ===============*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor : true ,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
