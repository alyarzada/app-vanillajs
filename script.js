// queryselectors
const btn = document.querySelector('.main-btn');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');



// animations
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from('.content', { opacity: 0, y: '-20%' })
  .from('.image', { opacity: 0, x: '20%' },'.2<')
  .from('.navbar', { y: '-100%', ease: 'bounce' })
  .from('.navbar-nav', { opacity: 0, stagger: 0.5 });



// reverse
const reverseHandler = async () => {
  await timeline.reverse()
  gsap.to('.contact-form', {opacity:1, duration:1, visibility:'visible'})
}

// close form
const closeFormHandler = () => {
  timeline.restart();
  gsap.to('.contact-form', { visibility:'hidden', opacity:0, duration:1})
}


// events
closeBtn.addEventListener('click', closeFormHandler)
btn.addEventListener('click', reverseHandler);


// navbar
window.addEventListener('scroll', function () {
  navbar.classList.toggle('fixed', window.scrollY > 0);
});

// const tl = gsap.timeline(
//     {
//         scrollTrigger: {
//             trigger
//         }
//     }
// )

gsap.from('.service', {
  scrollTrigger: '.service',
  opacity:0,
  scale:0,
  duration:1
});