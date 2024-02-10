var tl = gsap.timeline();

tl.from("nav, i",{
    y: -100,  
    duration: .5, 
    delay:.5,
    opacity:0,
    stagger: .1
})

tl.from("img",{
    duration:.2,
    scale:1.4,
    opacity:0,
    stagger:.1
})

tl.from("h1",{
    y: 100,  
    duration: .5, 
    delay:.2,
    opacity:0,
    stagger: .5
})

tl.from("h2",{
    opacity:-1
})

tl.from("#scroll",{
    y:-20,
    duration:.5,
    repeat: -1,
    yoyo: true
})
