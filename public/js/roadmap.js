const tl=gsap.timeline();
tl.to("#loader",{
    top:"-100vh",
    delay:1,
    duration:1
})
tl.from("#navbar",{
    opacity:0,
    delay:0.5,
    y:-10
})
tl.from("#logo ,h3,.item",{
    y:-50,
    stagger:0.3,
    opacity:0,
    duration:0.2
})
tl.from("#home h1,#first",{
    x:-500,
    scale:0,
    opacity:0,
    duration:2,
    stagger:0.4,
    // ease:Expo.easeInOut
}).from("#second",{
    x:500,
    scale:0,
    opacity:0,
    duration:0.4,
    // stagger:0.4,
    // ease:"none"
})
tl.from(".btn, #movingdiv",{
    scale:0,
    opacity:1,
    duration:0.6,
    stagger:0.3
})
tl.to(".fieldscontainer h1",{
    transform:"translateY(-100%)",
    fontWeight:400,
    scrollTrigger:{
        trigger:".fieldscontainer",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -70%",
        scrub:2,
        pin:true
    }
})
gsap.from("#fields .card",{
    scale:0,
    opacity:0,
    stagger:0.2,
    duration:1.5,
    scrollTrigger:{
        trigger:"#fields .card",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }
})
gsap.to(".contact h1 ",{
    transform:"translateY(-100%)",
    fontWeight:400,
    scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true
    }
})
gsap.from(".form",{
    scale:0,
    opacity:0,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".form",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})