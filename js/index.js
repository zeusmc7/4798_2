/*
Разработка сайтов от Григорий Измайлов
VK - vk.com/grinya91
*/


function ready() {
  const $logo = document.querySelector('.logo');
  const $htp = document.querySelector('.how-to-play');
  const $nav = document.querySelector('.nav');
  const $servers = document.querySelector('.servers');
  const $play = document.querySelector('.play');
  const $news = document.querySelector('.news-list');
  const $donate = document.querySelector('.donate');
  const $about = document.querySelector('.about');
  const logoWidth = $logo.offsetWidth;
  const logoHeight = $logo.offsetHeight;
  const $container = document.querySelector('.page-container');
  const containerWidth = $container.offsetWidth;
  const containerHeight = $container.offsetHeight;
  const offsetX = (containerWidth - logoWidth)/ 2;
  const offsetY = (containerHeight - logoHeight) / 2;

  $logo.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  setTimeout(function() {
    $logo.classList.remove('logo--hidden');
  }, 600);
  setTimeout(function() {
    $htp.classList.remove('how-to-play--hidden');
  }, 3500);
  setTimeout(function() {
    $servers.classList.remove('servers--hidden');
  }, 3500);
  setTimeout(function() {
    $play.classList.remove('play--hidden');
  }, 3500);
  setTimeout(function() {
    $donate.classList.remove('donate--hidden');
  }, 3500);
  setTimeout(function() {
    $about.classList.remove('about--hidden');
  }, 3500);
  setTimeout(function() {
    $nav.classList.remove('nav--hidden');
  }, 3000);
  setTimeout(function() {
    $news.classList.remove('news-list--hidden');
  }, 3500);
  setTimeout(function() {
    $logo.style.transform = null;
  }, 2000);
}
document.addEventListener('DOMContentLoaded', ready);

// buttons
var animateButton = function(e) {
  e.preventDefault;
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};
var socialButtons = document.getElementsByClassName("social_join");
var serversButtons = document.getElementsByClassName("join-btn");


for (var i = 0; i < socialButtons.length; i++) {
  socialButtons[i].addEventListener('click', animateButton, false);
}
for (var i = 0; i < serversButtons.length; i++) {
  serversButtons[i].addEventListener('click', animateButton, false);
}

//Онлайн сервера
$.get("https://infinitymta.ru/php/online.php", function(adata){
  var checker = jQuery.parseJSON(adata);
  var playersonline = checker.onlineplayers;
  var playersmax = checker.maxplayers;
  $('#onlinesum').html(playersonline);
  //$('#playersinfo').html(playersonline);
  $(".rage-monitor .players").text((playersonline || 0) + "/" + (playersmax || 1000));
});

// Официальная страница
jQuery(function($){
  $.ajax({
    url: 'https://api.vk.com/method/groups.getMembers?group_id=116970329&version=5.27&access_token=ec3d4e109c123874d038646a20ac09de055b49b04463cef9df3d2fb8f219d9a570c7136243c94bd9c8a70',
    dataType: "jsonp",  
    success:function(e){
        console.log(e.response);
      $('#official').html(e.response.count);
    }  
  });
});

// Свободная группа
jQuery(function($){
  $.ajax({
    url: 'https://api.vk.com/method/groups.getMembers?group_id=178431125&version=5.27&access_token=ec3d4e109c123874d038646a20ac09de055b49b04463cef9df3d2fb8f219d9a570c7136243c94bd9c8a70',
    dataType: "jsonp",  
    success:function(e){
        console.log(e.response);
      $('#free').html(e.response.count);
    }  
  });
});

// Ютуб
jQuery(function($){
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCnCcr3BRQTYbukusidcT3PQ&fields=items/statistics/subscriberCount&key=AIzaSyA-VpaBuPGT0BiTluaO9JuJWVoP6keK0Qc',
    dataType: "jsonp",  
    success:function(e){
        //console.log(e.response);
        console.log(e.items[0].statistics)
      $('#youtube').html(e.items[0].statistics.subscriberCount);
    }  
  });
});

// Дискорд
$.get("https://infinitymta.ru/php/discord.php", function(data){
  var duce = jQuery.parseJSON(data);
  var mcountdiscord = duce.membercount;
  $('#discord').html(mcountdiscord);
});

// scroll to top
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});

// slides
$(document).ready(function() {
  $("#carousel").owlCarousel({
      navigation : false,
      slideSpeed : 500,
      paginationSpeed : 800,
      rewindSpeed : 3000,
      singleItem: true,
      autoPlay : true,
      stopOnHover : true,
  });
});