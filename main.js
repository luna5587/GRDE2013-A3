gsap.registerPlugin(ScrollTrigger);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", sideMenu);

function sideMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

ScrollTrigger.create({
  animation:gsap.from(".nav-bar", {
    scale:1.1,
  }),
  scrub:true,
  trigger: "#Home",
  start: "top bottom",
  endTrigger: '#About',
  end: 'top center',
});

window.onscroll = function() {progressIndicator()};

function progressIndicator(){
  var winScroll = document.body.scrollTop || 
  document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

//scroll animations

const tlhome = gsap.timeline({
  scrollTrigger: {
      trigger: '#Home',
      start: "center bottom",
      end: 'bottom 20%',
  }
})

    ScrollTrigger.create({
      trigger: '#Home',
      animation: gsap.from('.nav-bar, #progress-bar', {duration: 1, opacity: 0, y:-200}),
    })

  const tlhomeafter = gsap.timeline({
    scrollTrigger: {
        trigger: '#About',
        start: "center bottom",
        scrub: true
    }
  })
  tlhomeafter.to('.hero-1-container, .caption', {y:-35, duration: 0.2}, "-=0.3")
        .to('#sun, #scribble', {y:-150, duration: 0.2}, "-=0.4");

  const tlabout = gsap.timeline({
    scrollTrigger: {
        trigger: '#about-text',
        start: "center bottom",
        scrub: true,
    }
  })
  tlabout.from('#about-text', {opacity:0, y:-100, duration: 1, ease: "power4.out"}, "-=0.3");

  const tlwhat = gsap.timeline({
    scrollTrigger: {
        trigger: '#blue-background',
        start: "center bottom",
        scrub: true,
    }
  })

  tlwhat.from('#what-text', {opacity:0, y:-100, duration: 1, ease: "power4.out"}, "-=0.3")
  .from('#question-mark', {rotation: 360 * 3, duration: 1, ease: "none"}, "-=0.8");

  const tlwhy = gsap.timeline({
    scrollTrigger: {
        trigger: '#why-heading',
        start: "center bottom",
        scrub: true,
    }
  })
  tlwhy.from('#why-heading', {opacity:0, y:-100, duration: 1, ease: "power4.out"}, "-=0.3")
  .from('.statistics-info', {opacity:0, y:-50, duration: 1, ease: "power4.out"}, "-=0.3");

  const tlstats = gsap.timeline({
    scrollTrigger: {
        trigger: '.statistics-info',
        start: "center bottom",
        scrub: true,
    }
  });
  tlstats.from('#why-text', {opacity:0, y:-100, duration: 0.6, ease: "power4.out"}, "-=0.3");

  const tlact = gsap.timeline({
    scrollTrigger: {
        trigger: '.action-container',
        start: "center bottom",
        scrub: true,
    }
  })
  tlact.from('#action-text', {opacity:0, y:-100, duration: 1, ease: "power4.out"});

  const tlinspire = gsap.timeline({
    scrollTrigger: {
        trigger: '.inspire-swiper',
        start: "center bottom",
        scrub: true,
    }
  })
  tlinspire.from('#inspire-text', {opacity:0, y:-100, duration: 1, ease: "power4.out"});

  const tlhashtag = gsap.timeline({
    scrollTrigger: {
        trigger: '.inspire-swiper',
        start: "center bottom",
        scrub: true,
    }
  })
    tlhashtag.from('#hashtag', {duration: 2, x: -300, rotate: 360, ease: "power4.out"});

    const tlfooter = gsap.timeline({
      scrollTrigger: {
          trigger: '#footer-wrapper',
          start: "center bottom",
          scrub: true,
      }
    })
      tlfooter.from('#footer-wrapper', {duration: 1, y: 400, ease: "power4.out"})

    
//

const natureSound = new Audio('audio/nature.wav')
const natureImg = document.querySelector('.leaves-container')

natureImg.addEventListener('mouseover', () => {
    natureSound.play()
})
natureImg.addEventListener('mouseleave', () => {
  natureSound.pause()
})

const scribbleSound = new Audio('audio/scribble.wav')
const sunImg = document.querySelector('#sun');
const scribbleImg = document.querySelector('#scribble');
const questionImg = document.querySelector('#question-mark');
const hashtagImg = document.querySelector('#hashtag');

scribbleImg.addEventListener('mouseover', () => {
  scribbleSound.play()
})
scribbleImg.addEventListener('mouseleave', () => {
  scribbleSound.pause()
})
sunImg.addEventListener('mouseover', () => {
  scribbleSound.play()
})
sunImg.addEventListener('mouseleave', () => {
  scribbleSound.pause()
})
questionImg.addEventListener('mouseover', () => {
  scribbleSound.play()
})
questionImg.addEventListener('mouseleave', () => {
  scribbleSound.pause()
})
hashtagImg.addEventListener('mouseover', () => {
  scribbleSound.play()
})
hashtagImg.addEventListener('mouseleave', () => {
  scribbleSound.pause()
})



gsap.from ('.statistics', {
  autoAlpha:0, 
  y:40
});
gsap.to(".statistics", {
    duration:2, 
    autoAlpha:1, 
    y:0, 
    scrollTrigger: "#why-heading",
    ease: "power2.inOut",
});

//parallax scrolling img animations
gsap.utils.toArray('.img-container').forEach(container => {
    const img = container.querySelector('img');
    const tl = gsap.timeline({
    scrollTrigger: { trigger: container, scrub: true, pin: false,}
  });
  tl.fromTo(img, { yPercent: -12, ease: 'none'  }, { yPercent: 8, ease: 'none'});
  });

//statistics animations

gsap.from([".meter-1"], {
  strokeDashoffset: "360",
})
gsap.to([".meter-1"], {
  duration:1.4, 
  strokeDashoffset: "120",
  scrollTrigger: ".meter",
  ease: "power2.inOut",
});

gsap.from([".meter-2"], {
  strokeDashoffset: "360",
})
gsap.to([".meter-2"], {
  duration:1.4, 
  strokeDashoffset: "40",
  scrollTrigger: ".meter",
  ease: "power2.inOut",
});

// carousel controllable
var swiper = new Swiper(".action-swiper", {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// automatic carousel

var swiper = new Swiper(".inspire-swiper",{
  loop: true,
  autoplay: {
    delay: 0,
  },
  autoplayDisableOnInteraction:true,
  slidesPerView: '4',
  spaceBetween: 100,
  speed: 1500,
  grabCursor: true,
});







ScrollTrigger.matchMedia({
  "(max-width: 400px)"() {
    
    //parallax scrolling img animations
    gsap.utils.toArray('.img-container').forEach(container => {
    const img = container.querySelector('img');
    const tl = gsap.timeline({
    scrollTrigger: { trigger: container, scrub: true, pin: false,}
    });

  tl.fromTo(img, { yPercent: -5, ease: 'none'  }, { yPercent: 5, ease: 'none'});
  });
      ScrollTrigger.create({
        trigger: '#Home',
        animation: gsap.from('.nav-bar, #progress-bar', {duration: 0, opacity: 0, y:-200}),
      })

  const tlhomeafter = gsap.timeline({
    scrollTrigger: {
        trigger: '#About',
        start: "center bottom",
        scrub: true
    }
    })
    tlhomeafter.to('.hero-1-container, .caption', {y:5, duration: 0.5, ease: "power4.out"}, "-=0.3")
          .to('#sun, #scribble', {duration: 0.4, ease: "power4.out"}, "-=0.4");

    const tlabout = gsap.timeline({
      scrollTrigger: {
          trigger: '#Home',
          start: "center bottom",
          scrub: true,
      }
    })
    tlabout.from('#about-text', {opacity:0, duration: 1, ease: "power4.out"})
    .from('.leaves-container, .clean-up-container', {opacity: 0, duration: 2, ease: "power4.out"});

    const tlwhat = gsap.timeline({
      scrollTrigger: {
          trigger: '#blue-background',
          start: "center bottom",
          scrub: true,
      }
    })
    tlwhat.from('#what-text', {opacity:0, y:-40, duration: 1, ease: "power4.out"}, "-=0.3")
    .from('#question-mark', {rotation: 360 * 3, duration: 1, ease: "none"}, "-=0.8");

    const tlwhy = gsap.timeline({
      scrollTrigger: {
          trigger: '#why-heading',
          start: "center bottom",
          scrub: true,
      }
    })
    tlwhy.from('#why-heading', {opacity:0, y:-100, duration: 1, ease: "power4.out"}, "-=0.3")
    .from('.statistics-info', {opacity:0, y:-50, duration: 1, ease: "power4.out"}, "-=0.3");

    const tlstats = gsap.timeline({
    scrollTrigger: {
        trigger: '.statistics-info',
        start: "center bottom",
        scrub: true,
    }
    });
    tlstats.from('#why-text', {opacity:0, y:-40, duration: 0.6, ease: "power4.out"}, "-=0.3");

    const tlact = gsap.timeline({
      scrollTrigger: {
          trigger: '.action-container',
          start: "center bottom",
          scrub: true,
      }
    })
    tlact.from('#action-text', {opacity:0, y:-40, duration: 1, ease: "power4.out"});

    const tlinspire = gsap.timeline({
      scrollTrigger: {
          trigger: '.inspire-swiper',
          start: "center bottom",
          scrub: true,
      }
    })
    tlinspire.from('#inspire-text', {opacity:0, y:-40, duration: 1, ease: "power4.out"});

    const tlhashtag = gsap.timeline({
      scrollTrigger: {
          trigger: '.inspire-swiper',
          start: "center bottom",
          scrub: true,
      }
    })
    tlhashtag.from('#hashtag', {duration: 2, x: -40, rotate: 360, ease: "power4.out"});

    const tlfooter = gsap.timeline({
      scrollTrigger: {
          trigger: '#footer-wrapper',
          start: "center bottom",
          scrub: true,
      }
    })
      tlfooter.from('#footer-wrapper', {duration: 3, opacity:0, y:-60, ease: "power4.out"}, "-=0.6")

      // carousel controllable
    var swiper = new Swiper(".action-swiper", {
      slidesPerView: 2, 
      centeredSlides: true,
      spaceBetween: 30,
      freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // automatic carousel

    var swiper = new Swiper(".inspire-swiper",{
      slidesPerView: 2,
      spaceBetween: 80,
    });
  },
})