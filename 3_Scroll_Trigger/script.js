gsap.from("#page1 #box", {
    scale: 0,
    delay: 0.5,
    duration: 2,
    rotate: 360,
    yoyo:true
})

gsap.from("#page2 #box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    // scrollTrigger: "#page2 #box"
    scrollTrigger :{
        trigger : "#page2 #box",
        scroll : "body",
        markers: true,
        start:"top 70%",
        end: "top 30%",
        scrub : 2
    }
})

