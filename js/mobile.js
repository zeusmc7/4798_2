/*
Разработка сайтов от Григорий Измайлов
VK - vk.com/grinya91
*/


$('.menu__link').on('click', function(e) {
  
    e.preventDefault;
  $(this).toggleClass('menu__link--active');
  $('.navs').toggleClass('visible');

});