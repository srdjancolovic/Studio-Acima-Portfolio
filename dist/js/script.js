"use strict";var menuBtn=document.querySelector(".menu__toggler"),navMenu=document.querySelector(".menu"),menuChevron=document.querySelector(".menu__chevron"),menuLinks=document.querySelectorAll(".menu__link"),body=document.querySelector("body"),preloaderContainer=document.querySelector(".container-preloader"),projectsGallery=(body.addEventListener("click",function(e){console.log(e.target),e.target.classList.contains("btn-chevron")||e.target.classList.contains("menu")||(navMenu.classList.remove("menu-open"),menuChevron.classList.remove("menu-chevron-close"))}),menuBtn.addEventListener("click",function(){navMenu.classList.toggle("menu-open"),menuChevron.classList.toggle("menu-chevron-close")}),menuLinks.forEach(function(e){e.addEventListener("click",function(){navMenu.classList.toggle("menu-open"),menuChevron.classList.toggle("menu-chevron-close")})}),$(".smooth-scroll, .contact__logo").on("click",function(e){var n;""!==this.hash&&(n=this.hash,$("html, body").animate({scrollTop:$(n).offset().top},800))}),new Swiper(".projects__slider",{grabCursor:!0,effect:"creative",speed:700,creativeEffect:{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},navigation:{nextEl:".projects__control-btn--next",prevEl:".projects__control-btn--prev"},pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"}})),callback=(lightbox.option({resizeDuration:500,wrapAround:!0}),window.addEventListener("load",function(){new Swiper(".main__carousel-content",{grabCursor:!0,effect:"creative",speed:1400,loop:!0,autoplay:{delay:2500},creativeEffect:{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}});body.style.overflow="visible",preloaderContainer.style.zIndex=-99999,gsap.to(".preloader",{opacity:0,duration:.5}),gsap.timeline({defaults:{duration:.5}}).from(".main__logo",{y:-50,opacity:0}).from(".main__text-heading",{x:-30,opacity:0}).from(".main__projects-btn",{x:-30,opacity:0}).from(".main__contact-icons",{y:50,opacity:0}).from(".menu__toggler",{x:-50})}),function(e){e.forEach(function(e){e.isIntersecting&&e.target.timeline.play()})}),observer=new IntersectionObserver(callback,{root:null,threshold:.5}),slideInUpAnim=document.querySelectorAll(".slideInUp"),slideInLeftAnim=(slideInUpAnim.forEach(function(e){var n=gsap.timeline({paused:!0}).from(e,{y:60,opacity:0,duration:.6,delay:.5});e.timeline=n}),Array.prototype.forEach.call(slideInUpAnim,function(e){observer.observe(e)}),document.querySelectorAll(".slideInLeft")),slideInRight=(slideInLeftAnim.forEach(function(e){var n=gsap.timeline({paused:!0}).from(e,{x:-60,opacity:0,duration:.6,delay:.5});e.timeline=n}),Array.prototype.forEach.call(slideInLeftAnim,function(e){observer.observe(e)}),document.querySelectorAll(".slideInRight"));slideInRight.forEach(function(e){var n=gsap.timeline({paused:!0}).from(e,{x:60,opacity:0,duration:.6,delay:.5});e.timeline=n}),Array.prototype.forEach.call(slideInRight,function(e){observer.observe(e)});
//# sourceMappingURL=script.js.map
