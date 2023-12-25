let tl = gsap.timeline();

tl.from("#nav", {
    opacity: 0,
    delay: 0.5
})

tl.from("#nav h2,#nav h3,#nav h4", {
    y: -80,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.3,
    opacity: 0

})

tl.from("#left h1", {
    x: -50,
    opacity: 0,
    stagger: 0.5,
    delay: 0.3


})

tl.from("#right img", {
    opacity: 0,
    duration: 0.6,
    x: 50,
    // scale : 2
})


gsap.from("#page2 .box", {
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger : 0.3,
    // yoyo:true,
    scrollTrigger : {
        trigger : "#page2 .box",
        scroller : "body",
        // markers : true,
        start : "top 70%",
    }
})