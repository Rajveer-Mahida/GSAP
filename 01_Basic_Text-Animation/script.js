let tl = gsap.timeline();

tl.from("#nav img,#nav h3,#nav button", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2

})

tl.from("#main h1", {
    y: 100,
    duration: 1,
    // delay : 1,
    stagger: 0.3,
    opacity: 0
})


tl.from("#main>img", {
    scale: 0.1,
    opacity: 0,
    stagger: 0.2
})

tl.from("h5",{
    scale:0,
    opacity:0,
    
})

tl.to("h5",{
    y : 20,
    duration:0.7,
    yoyo:true,
    repeat : -1
})