"use strict";
window.addEventListener('DOMContentLoaded', function (){
    window.addEventListener('scroll', function (){
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    const menuBtn = document.querySelector('.hamburger'),
          btn = document.querySelector('.btn'),
          navigation = document.querySelector('.menu-bar'),
          body = document.body,
          matnlar = document.querySelector('.matnlar'),
          qisqa = document.querySelector('.qisqacha'),
          color = document.querySelector('.color'),
          send = document.querySelector('.send'),
          bar1 =document.querySelector('.bar1'),
          modal = document.querySelector('.modal');

            menuBtn.addEventListener('click',function(){
            menuBtn.classList.toggle('active');
            navigation.classList.toggle('active');
    });
    btn.addEventListener('click',function(){
    qisqa.style.display = 'block';
});
color.addEventListener('click',function(){
  qisqa.style.display = 'none';
});

    send.addEventListener('click', function(){
    modal.style.display = 'block';
    });
    modal.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  send.addEventListener('click',function(){
    modal.style.opacity = '1';
  });
  send.addEventListener('click',function(){
    modal.style.transition = '.5s ease';
  });
  //  bar1.addEventListener('click', ()=>{
  //   modal.style.display = 'none'
  // })
  console.log("hello jshind");
});