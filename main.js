window.addEventListener('scroll', reveal);
function  reveal(){

   var reveals = document.querySelectorAll('.s-box');

   for(var i =0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint){
         reveals[i].classList.add('active');

      }
      else{
         reveals[i].classList.remove('active');
      }

   }
}


window.addEventListener('scroll', project);
function  project(){

   var projects = document.querySelectorAll('.box1');

   for(var i =0; i < projects.length; i++){
      var windowheight = window.innerHeight;
      var projecttop = projects[i].getBoundingClientRect().top;
      var projectpoint = 150;

      if (projecttop < windowheight - projectpoint){
         projects[i].classList.add('activ');

      }
      else{
         projects[i].classList.remove('activ');
      }

   }
}


window.addEventListener('scroll', box);
function  box(){

   var boxs = document.querySelectorAll('.name');

   for(var i =0; i < boxs.length; i++){
      var windowheight = window.innerHeight;
      var boxtop = boxs[i].getBoundingClientRect().top;
      var boxpoint = 150;

      if (boxtop < windowheight - boxpoint){
         boxs[i].classList.add('move');

      }
      else{
         boxs[i].classList.remove('move');
      }

   }
}

window.addEventListener('scroll', img);
function  img(){

   var boxs = document.querySelectorAll('.img');

   for(var i =0; i < boxs.length; i++){
      var windowheight = window.innerHeight;
      var boxtop = boxs[i].getBoundingClientRect().top;
      var boxpoint = 150;

      if (boxtop < windowheight - boxpoint){
         boxs[i].classList.add('mimg');

      }
      else{
         boxs[i].classList.remove('mimg');
      }

   }
}


window.addEventListener('scroll', logo);
function  logo(){

   var boxs = document.querySelectorAll('.logo');

   for(var i =0; i < boxs.length; i++){
      var windowheight = window.innerHeight;
      var boxtop = boxs[i].getBoundingClientRect().top;
      var boxpoint = 150;

      if (boxtop < windowheight - boxpoint){
         boxs[i].classList.add('mlogo');

      }
      else{
         boxs[i].classList.remove('mlogo');
      }

   }
}


