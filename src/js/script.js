const menuBtn = document.querySelector('.menu__toggler');
const navMenu = document.querySelector('.menu');
const menuChevron = document.querySelector('.menu__chevron');
const menuLinks = document.querySelectorAll('.menu__link');
const body = document.querySelector('body');
const preloaderContainer = document.querySelector('.container-preloader');

body.addEventListener('click', (e) => {
  console.log(e.target);
  if (
    !e.target.classList.contains('btn-chevron') &&
    !e.target.classList.contains('menu')
  ) {
    navMenu.classList.remove('menu-open');
    menuChevron.classList.remove('menu-chevron-close');
  }
});
//Toggle mennu on click
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('menu-open');
  menuChevron.classList.toggle('menu-chevron-close');
});

//Close menu on menu link click

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open');
    menuChevron.classList.toggle('menu-chevron-close');
  });
});

//Smooth scroll
$('.smooth-scroll, .contact__logo').on('click', function (e) {
  if (this.hash !== '') {
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

//Projects
const projectsGallery = new Swiper('.projects__slider', {
  grabCursor: true,
  effect: 'creative',
  speed: 700,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-20%', 0, -1],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  navigation: {
    nextEl: '.projects__control-btn--next',
    prevEl: '.projects__control-btn--prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
  },
});

//Lightbox options
lightbox.option({
  resizeDuration: 500,
  wrapAround: true,
});

//Animations

window.addEventListener('load', () => {
  //Landing page swiper
  const landing = new Swiper('.main__carousel-content', {
    grabCursor: true,
    effect: 'creative',
    speed: 1400,
    loop: true,
    autoplay: {
      delay: 2500,
    },

    creativeEffect: {
      prev: {
        shadow: true,
        origin: 'left center',
        translate: ['-5%', 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: 'right center',
        translate: ['5%', 0, -200],
        rotate: [0, -100, 0],
      },
    },
  });
  body.style.overflow = 'visible';
  preloaderContainer.style.zIndex = -99999;
  gsap.to('.preloader', { opacity: 0, duration: 0.5 });
  const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
  timeline

    .from('.main__logo', { y: -50, opacity: 0 })
    .from('.main__text-heading', {
      x: -30,
      opacity: 0,
    })
    .from('.main__projects-btn', { x: -30, opacity: 0 })
    .from('.main__contact-icons', { y: 50, opacity: 0 })
    .from('.menu__toggler', { x: -50 });
});

//Callback function for target
const callback = function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.timeline.play();
    }
  });
};

//Intersection observer
const observer = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.5,
});

///SlideInUp Animation

const slideInUpAnim = document.querySelectorAll('.slideInUp');
slideInUpAnim.forEach(function (item) {
  const action = gsap
    .timeline({ paused: true })
    .from(item, { y: 60, opacity: 0, duration: 0.6, delay: 0.5 });

  item.timeline = action;
});

Array.prototype.forEach.call(slideInUpAnim, (el) => {
  observer.observe(el);
});

///SlideInLeft
const slideInLeftAnim = document.querySelectorAll('.slideInLeft');
slideInLeftAnim.forEach(function (item) {
  const action = gsap
    .timeline({ paused: true })
    .from(item, { x: -60, opacity: 0, duration: 0.6, delay: 0.5 });
  item.timeline = action;
});
Array.prototype.forEach.call(slideInLeftAnim, (el) => {
  observer.observe(el);
});

///SlideInRight
const slideInRight = document.querySelectorAll('.slideInRight');
slideInRight.forEach(function (item) {
  const action = gsap
    .timeline({ paused: true })
    .from(item, { x: 60, opacity: 0, duration: 0.6, delay: 0.5 });
  item.timeline = action;
});
Array.prototype.forEach.call(slideInRight, (el) => {
  observer.observe(el);
});
