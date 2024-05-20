let timeline = gsap.timeline();

gsap.from(".main-page-animation", {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 1,
    stagger: 0.3
});

timeline.from(".navbar-animation", {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 1,
    stagger: 0.3
});

// gsap.from(".myaboutheading", {
//     x: -80,
//     duration: 1,
//     opacity: 0,
//     ease: "Sinc",
//     scrollTrigger: {
//         trigger: ".mymyaboutheading",
        
//         // scrub: 2
//     }
// })

gsap.from(".upper-text, .mid-text, .other-stuff, .skill-list>p", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".upper-text",
        scroller: "body",
        // markers: true,
        scrub: 0.3,
        end: "bottom 50%",
        start: "top 90%"

    }
})
gsap.from(".about-image-area>img", {
    x: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 1,
    scrollTrigger: {
        trigger: ".upper-text",
        scroller: "body",
        // markers: true,
        scrub: 0.3,
        end: "bottom 50%",
        start: "top 90%"
    }
})