
gsap.registerPlugin(ScrollTrigger);



gsap.to("#nayphoto", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 95%", 
        end: "bottom 50%",
        scrub: true,
        markers: false,
        
    },
    // x: 400, 
    opacity: 0, 
    duration: 1, 
});

gsap.to(".nay", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top", 
        end: "bottom",
        scrub: true,     
        pin: true,   
    },
});

gsap.to(".down-arrow", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 100%", 
        end: "top 80%",
        scrub: true,     
           
    },
    y: 20,
    opacity: 0,
    duration: .5,
});

gsap.to(".intro", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 100%", 
        end: "bottom 50%",
        scrub: true,        
    },
    x: -300, 
    opacity: 0, 
    duration: 3, 
});

gsap.to(".honor", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 100%", 
        end: "bottom 10%",
        scrub: true,        
    },
    x: 300, 
    opacity: 0, 
    duration: 3, 
});

gsap.from(".portfolio-text", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 100%", 
        end: "bottom top",
        scrub: true,   
    },

    opacity: 0, 
    duration: 3, 
    // toggleActions: "restart pause reverse reset"
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.portfolio',
        start: "center 90%",
        scrub: true,
        

    }
});

tl.from(".portfolio-header", { opcaity: 0, duration: 1})
   .from(".portfolio", {x: 600, opacity: 0, duration: 0.5}, "-=2")
   