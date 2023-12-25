let tl = gsap.timeline();

function loaderTimer() {
    let a = 0;
    setInterval(() => {
        a = a + Math.floor(Math.random() * 15);
        if (a < 100) {
            document.querySelector("#loader h1").innerHTML = a + "%";
        } else {
            a = 100;
            document.querySelector("#loader h1").innerHTML = a + "%";
        }
    }, 150)
};


tl.to("#loader h1", {
    delay: 0.5,
    duration: 1,
    onStart: loaderTimer()
})
tl.to("#loader", {
    top: "-100vh",
    delay: 0.4,
    duration: 1.5
})


gsap.to("#page1 h1", {
    transform: " translateX(-100%)",
    fontWeight: '100',
    scrollTrigger: {
        // markers: true,
        trigger: "#page1",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        pin: true,
        scrub: 3
    }
})

