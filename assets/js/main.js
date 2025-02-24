
  AOS.init();
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
     
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    loop:true,
  });
  function add(){
  document.querySelector('.carousel-indicators .fresh ').classList.add('position-fixed');
  document.querySelector(' .carousel-indicators .Store ').classList.add('position-fixed');
  document.querySelector('.arrivals-swiper ').classList.add('position-fixed');
  document.querySelector('.clients-swiper').classList.add('position-fixed');
  document.querySelector('.blog-swiper ').classList.add('position-fixed');
  document.querySelector('.retroge-swiper ').classList.add('position-fixed');
  document.querySelector('.carousel-indicators .fresh ').setAttribute('style','background-color:transparent');
  document.querySelector('.carousel-indicators .Store ').setAttribute('style','background-color:transparent');
  }
  function remove(){
  document.querySelector('.carousel-indicators .fresh  ').classList.remove('position-fixed');
  document.querySelector('.carousel-indicators .Store').classList.remove('position-fixed');
  document.querySelector('.arrivals-swiper ').classList.remove('position-fixed');
  document.querySelector('.clients-swiper').classList.remove('position-fixed');
  document.querySelector('.blog-swiper ').classList.remove('position-fixed');
  document.querySelector('.retroge-swiper ').classList.remove('position-fixed');
  document.querySelector('.carousel-indicators .fresh ').setAttribute('style','background-color:red');
  document.querySelector('.carousel-indicators .Store ').setAttribute('style','background-color:red');
  }
window.onload=function() {
  add();
}
document.querySelector('.alert .close').addEventListener('click',function(){
document.querySelector('.alert').classList.add('d-none');
remove();
});
document.addEventListener('keydown',function(e){
 if(e.code =='Escape'){
  document.querySelector('.alert').classList.add('d-none');
  remove();
 }
});
document.querySelector('.nav-icons .yourAccount').addEventListener('click', function(){
document.querySelector('.account').classList.remove('d-none');
 add();
});
document.querySelector('.account .close').addEventListener('click', function(){
  document.querySelector('.account').classList.add('d-none');
})
document.querySelector('.logo .list-bt').addEventListener('click', function(){
document.querySelector('.logo .list').classList.remove('d-none');
 add();
  document.querySelector('.nav-items').classList.add('d-none');
  document.querySelector('.nav-icons').classList.add('d-none');
  document.querySelector(' .header .carousel-item.active').style.display = 'none';
document.querySelector('.collection .card').style.visibility = 'hidden';
});
document.querySelector('.list .close').addEventListener('click', function(){
  document.querySelector('.list ').classList.add('d-none');
 remove();
  document.querySelector(' .header .carousel-item.active').style.display = 'block';
  document.querySelector('.header .carousel-item').style.visibility = 'visible'; 
  document.querySelector('.collection .card').style.visibility = 'visible';
  document.querySelector('.nav-icons').classList.remove('d-none');
 


});




  