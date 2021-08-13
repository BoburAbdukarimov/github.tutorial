"use strict";
window.addEventListener('DOMContentLoaded', function (){
    window.addEventListener('scroll', function (){
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    const menuBtn = document.querySelector('.hamburger'),
          btn = document.querySelector('.btn'),
          navigation = document.querySelector('.menu-bar'),
          matnlar = document.querySelector('.matnlar'),
          qisqa = document.querySelector('.qisqacha'),
          color = document.querySelector('.color'),
          send = document.querySelector('.send'),
          bar1 =document.querySelector('.bar1'),
          modal = document.querySelector('.modal'),
          col = document.querySelector(".col"),
          rasmla007 = document.querySelector('#rasmla007'),
          btn1 = document.querySelector('.btn1'),
          loader = document.querySelector('.loader');
console.log(rasmla007);

setTimeout(function(){
  loader.style.opacity = '0';
  setTimeout(function(){
    loader.style.display = 'none';
  }, 1000)
},2500)

            menuBtn.addEventListener('click',function(){
            menuBtn.classList.toggle('active');
            navigation.classList.toggle('active');
    });
//     rasmla007.addEventListener('click',function(){
//       rasmla007.classList.toggle('active12');
//       col.classList.toggle('active12');
// });
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

});