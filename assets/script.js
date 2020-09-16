
gsap.registerPlugin(ScrollTrigger);

// opacity scroll trigger for Portrait

gsap.to("#nayphoto", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 95%", 
        end: "bottom 50%",
        scrub: true,
        
        
    },
    // x: 400, 
    opacity: 0, 
    duration: 1, 
});

// code for animating Nay Wilkins text header

// gsap.to(".nay", {
//     scrollTrigger: {
//         trigger: ".portfolio-header", 
//         start: "top 95%", 
//         end: "bottom 50%",
//         scrub: true,     
//         pin: true,   
//         markers: true,
//     },
// });

// code for animating down arrow down and opacity

gsap.to(".down-arrow", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 100%", 
        end: "top 60%",
        scrub: true,  
           
           
    },
    y: 80,
    opacity: 0,
    duration: .5,
});

// code for animating second down arrow and opacity

gsap.to(".down-arrow2", {
    scrollTrigger: {
        trigger: ".contact-header", 
        start: "top 100%", 
        end: "top 60%",
        scrub: true,  
           
           
    },
    y: 80,
    opacity: 0,
    duration: .5,
});


// code for animating intro text left and opacity down

gsap.to(".intro", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 100%", 
        end: "bottom 50%",
        scrub: true,  
             
    },
    x: -90, 
    opacity: 0, 
    duration: 3, 
});

// code for animating honor to meet you text right and opacity down

gsap.to(".honor", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 100%", 
        end: "bottom 10%",
        scrub: true,   
            
    },
    x: 50, 
    opacity: 0, 
    duration: 3, 
});

// code for animating portfolio header, left and right arrows, and click to view text opacity 

gsap.from(".portfolio-text", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 100%", 
        end: "bottom top",
        scrub: true,   
        pin: false,
        
    },

    opacity: 0, 
    duration: 3, 

});

//or animating portfolio row into place from right 

gsap.from(".portfolio-row", {
    scrollTrigger: {
        trigger: ".portfolio-header", 
        start: "top 100%", 
        end: "bottom 20%",
        scrub: true, 
        markers: false,       
    },
    x: 300, 
    opacity: 0, 
    duration: 3, 
});

//code for snapping sections

let snapSections = gsap.utils.toArray(".snap"),
    snapper;
ScrollTrigger.create({
  trigger: snapSections[0], 
  start: "top bottom",
  endTrigger: snapSections[snapSections.length-1], 
  end: "bottom top",
  onRefresh: self => {
    
    let values = snapSections.map(section => gsap.utils.normalize(self.start, self.end, section.offsetTop));
    values.push(1); 
    snapper = gsap.utils.snap(values); 
  },
  snap: value => snapper(value)
});

//code for fading in contact header

gsap.from(".contact-header", {
    scrollTrigger: {
        trigger: ".contact-info", 
        start: "top 100%", 
        end: "bottom 90%",
        scrub: true,   
        pin: false,
        
        
    },

    opacity: 0, 
    duration: 2, 

});

// code for fading in conatact info

gsap.from(".contact-info", {
    scrollTrigger: {
        trigger: ".contact-info", 
        start: "top 100%", 
        end: "bottom 70%",
        scrub: true,   
        pin: false,
       
        
    },

    opacity: 0, 
    duration: 2, 

});

// code for fading in conatact info

gsap.from("#up-arrow", {
    scrollTrigger: {
        trigger: "#up-arrow", 
        start: "top 100%", 
        end: "bottom 70%",
        scrub: true,   
        pin: false,
    
        
    },

    opacity: 0, 
    duration: 2, 

});




   //code for automating x overflow scroll with buttons
   

document.getElementById("portfolio-icon-right").addEventListener("click", function() {
        console.log("clicked")
       let portfolioRow = document.getElementsByClassName("portfolio-row")[0]
       console.log(portfolioRow)
       portfolioRow.scrollLeft = screen.width + 50
       });


document.getElementById("portfolio-icon-left").addEventListener("click", function() {
        console.log("clicked")
       let portfolioRow2 = document.getElementsByClassName("portfolio-row")[0]
       console.log(portfolioRow2)
       portfolioRow2.scrollLeft = -screen.width
       });

       //up to top arrow function

document.getElementById("up-arrow").addEventListener("click", function() {
        console.log("clicked")
        window.scroll({
            top: 100,
            behavior: 'smooth'
          }); 
       });

//down to next section arrow

