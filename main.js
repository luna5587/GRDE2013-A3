gsap.registerPlugin(ScrollTrigger);

//text animations
gsap.set ('.text-container', {autoAlpha:0, y:40});

gsap.to(".text-container", {
    trigger: ".text-container",
    duration:1.4, 
    autoAlpha:1, 
    y:0, 
    ease: "power2.inOut"
});
        
gsap.timeline({
  scrollTrigger: {
  trigger: "#About",
    start: "bottom",
    end: "center",
    scrub: true
  }
})
.to(".text-container",  {autoAlpha:1, transformOrigin: "center center", scale:1, ease: "none"}, 0);


//parallax scrolling img animations
gsap.utils.toArray('.img-container').forEach(container => {
    const img = container.querySelector('img');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      }
    });
    tl.fromTo(img, {
      yPercent: -10,
      ease: 'none'
    }, {
      yPercent: 10,
      ease: 'none'
    });
  });

// statistics animations