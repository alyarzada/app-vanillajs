const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from('.navbar', { y: '-100%', ease: 'bounce' })
  .from('.navbar-nav', { opacity: 0, stagger: 0.5 })
  .from('.content', { opacity: 0, y: '-20%' }, 1)
  .from('.image', { opacity: 0, x: '20%', ease: 'elastic', duration: 3 }, '<.5')
//   .fromTo(
//     '.main-btn',
//     { scale: 0, opacity: 0, rotation: 720 },
//     { scale: 1, opacity: 1, rotation: 0 },
//     '<'
//   );

const btn = document.querySelector('.main-btn');

btn.addEventListener('click', () => {
  // timeline.restart();
  timeline.reverse();
});

// const tl = gsap.timeline(
//     {
//         scrollTrigger: {
//             trigger
//         }
//     }
// )

gsap.to(
    '.about-text',
    {
        scrollTrigger:'.about-text',
        y:300,
    }
)