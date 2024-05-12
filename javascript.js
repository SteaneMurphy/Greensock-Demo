document.addEventListener("DOMContentLoaded", function() {

    var img1 = document.querySelector('.hero1');
    var img2 = document.querySelector('.hero2');
    var img3 = document.querySelector('.hero3');
    var img4 = document.querySelector('.hero4');
    var firstCont = document.querySelector('.section1');
    var secondCont = document.querySelector('.section2');
    var thirdCont = document.querySelector('.section3');
    var fourthCont = document.querySelector('.section4');
    var navBar = document.querySelector('.navbar');
    var logo = document.querySelector('.logo');
    var secondContText = document.querySelector('.secondContText');
    var secondContText2 = document.querySelector('.secondContText2');

    var thirdContText = document.querySelector('.thirdContText');
    var thirdContText2 = document.querySelector('.thirdContText2');
    var thirdContText3 = document.querySelector('.thirdContText3');
    var logoMid = document.querySelector('.logoMid');

    var sec4img = document.querySelector('.sec4img');

    var video = document.querySelector('.video');
    var footer = document.querySelector('.footer');

    var L1 = document.querySelector('.L1');
    var L2 = document.querySelector('.L2');
    var L3 = document.querySelector('.L3');
    var L4 = document.querySelector('.L4');
    var L5 = document.querySelector('.L5');
    var L6 = document.querySelector('.L6');
    var L7 = document.querySelector('.L7');
    var navLogo = document.querySelector('.navLogo');

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh()
    gsap.to(firstCont, {
        borderRadius: "0% 0% 0% 80%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 100%",
            end: "bottom 20%",
            scrub: true
        }
    })

    gsap.to(img1, {
        opacity: 0,
        x: 0,
        rotationZ: 25,
        scale: 1.4,
        borderRadius: "0% 0% 0% 40%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 100%",
            end: "bottom 20%",
            scrub: true
        }
    })

    gsap.to(img2, {
        opacity: 1,
        x: 0,
        rotationZ: 25,
        scale: 1.4,
        borderRadius: "0% 0% 0% 40%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 100%",
            end: "bottom 20%",
            scrub: true
        }
    })

    gsap.from(img3, {
        opacity: 0,
        x: 1000,
        //y: -1000,
        rotationZ: 0,
        scale: 0,
        //borderRadius: "100%",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
        }
    })

    gsap.to(navBar, {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 50%",
            end: "bottom 20%",
            scrub: true
        }
        
    })

    gsap.from(logo, {
        opacity: 0,
        x: 1000,
        scale: 1.4,
        //borderRadius: "0% 0% 0% 40%",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
        }
    })

    gsap.from(secondContText, {
        opacity: 0,
        y: 1000,
        scale: 1.4,
        //borderRadius: "0% 0% 0% 40%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
        }
    })

    gsap.from(secondContText2, {
        opacity: 0,
        x: -1000,
        y: 1000,
        scale: 1.4,
        //borderRadius: "0% 0% 0% 40%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
        }
    })

    gsap.to(secondCont, {
        borderRadius: "0% 0% 80% 0%",
        //rotationZ: -25,
        duration: 1.5,
        //scale: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 120%",
            end: "bottom 50%",
            scrub: true
        }
    })

    gsap.to(img3, {
        rotationZ: -25,
        //scale: 1.5,
        //borderRadius: "100%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 140%",
            end: "bottom 50%",
            scrub: true
        }
    })

    gsap.from(thirdCont, {
        opacity: 0,
        scale: 0,
        //rotationZ: 90,
        borderRadius: "1000%",
        duration: 5,
        backgroundColor: "#c43e5d",
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 160%",
            end: "bottom 50%",
            scrub: true
        }
    })

    gsap.to(img4, {
        opacity: 0.5,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: fourthCont,
            start: "top 130%",
            end: "bottom 50%",
            scrub: true
        }
    })

    gsap.from(thirdContText, {
        opacity: 0,
        x: -1000,
        scale: 1.4,
        //borderRadius: "0% 0% 0% 40%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true
        }
    })
    
    gsap.from(thirdContText2, {
        opacity: 0,
        y: 1000,
        scale: 1.4,
        //borderRadius: "0% 0% 0% 40%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true
        }
    })

    gsap.from(thirdContText3, {
        opacity: 0,
        x: 1000,
        scale: 1.4,
        //borderRadius: "0% 0% 0% 40%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true
        }
    })

    gsap.from(logoMid, {
        opacity: 0,
        y: -1000,
        scale: 1.4,
        //borderRadius: "0% 0% 0% 40%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true
        }
    })

    gsap.from(video, {
        x: -3500,
        duration: 5,
        scrollTrigger: {
            trigger: fourthCont,
            start: "top 100%",
            end: "bottom 100%",
            scrub: true
        }
    })

    gsap.to(fourthCont, {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: thirdCont,
            start: "bottom 60%",
            end: "bottom 5%",
            scrub: true
        }
    })

    gsap.from(sec4img, {
        opacity: 0,
        x: -1000,
        duration: 1,
        scrollTrigger: {
            trigger: fourthCont,
            start: "top 100%",
            end: "bottom 100%",
            scrub: true
        }
    })

    var tl = gsap.timeline({ paused: true });
    tl.from(L1, {x: -1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L2, {y: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L3, {x: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L4, {y: -1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L5, {x: -1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L6, {y: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L7, {x: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(navLogo, {x: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);

    ScrollTrigger.create({
        trigger: '.section2',
        start: 'top 30%',
        endTrigger: '.section3',
        onEnter: () => {
            tl.play()            
        }
    });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function ChangeColour()
{
    var fourthCont = document.querySelector('.section4');
    var wishlist = document.getElementById("wishlist");
    
    var rgbArray = [];
    rgbArray[0] = "rgb(0, 174, 218)"
    rgbArray[1] = "rgb(196, 62, 93)"
    rgbArray[2] = "rgb(81, 172, 28)"
    rgbArray[3] = "rgb(190, 26, 26)"
    rgbArray[4] = "rgb(211, 100, 10)"
    input = getRandomInt(5);

    gsap.from(fourthCont, {
        backgroundColor: rgbArray[input],
        duration: 0.2,
    })
    gsap.to(fourthCont, {
        backgroundColor: rgbArray[input],
        rotationZ: 0,
        duration: 0.2,
    })

    gsap.from(wishlist, {
        color: rgbArray[input],
        duration: 0.2,
    })
    gsap.to(wishlist, {
        color: rgbArray[input],
        duration: 0.2,
    })
}

