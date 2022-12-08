let tl = gsap.timeline();

tl.fromTo(
  ".page-overlay",
  {
    clipPath: "circle(0%)",
  },
  {
    clipPath: "circle(100%)",
    delay: 1,
    duration: 1.5,
    ease: "power2.inOut",
    display: "none",
  }
);

tl.to(
  ".hero",
  {
    background: "#000",
    delay: -0.5,  
  }
)

tl.fromTo(
  ".hero-container",
  {
    clipPath: "circle(0%)",
    rotation: 45,
    opacity: 0,
  },
  {
    clipPath: "circle(10%)",
    rotation: 0,
    opacity: 1,
    duration: 1,
  }
);

tl.fromTo(
  ".hero-container",
  {
    clipPath: "circle(10%)",
  },
  {
    clipPath: "circle(100%)",
    duration: 1,
    delay: 2.5,
    ease: "power2.inOut",
  }
);

tl.fromTo(
  ".navbar",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
    delay: 0.5,
  }
);
