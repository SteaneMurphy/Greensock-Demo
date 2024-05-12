/********************************************************************************************************************
 *                                                ISE102: ASSESSMENT 2                                              *
 *                                               SOLUTION DEVELOPED BY:                                             *
 *                                                    JAMES MURPHY                                                  *
 *                                                      A00107819                                                   *
 ********************************************************************************************************************/

/*This script controls animations across the entire project. The project uses the Greensock animation framework. This project
utilises four animation event handlers and over 35 animations.*/


//sends an event notification when the DOM has finished loading all the page content
//this event then triggers all of the scroll trigger page animations below
document.addEventListener("DOMContentLoaded", function() {

    //all the variables here are defined references to HTML elements that are to animated

    //images
    var img1 = document.querySelector('.hero1');
    var img2 = document.querySelector('.hero2');
    var img3 = document.querySelector('.hero3');
    var img4 = document.querySelector('.hero4');
    var sec4img = document.querySelector('.sec4img');

    //video
    var video = document.querySelector('.video');

    //content container divs
    var firstCont = document.querySelector('.section1');
    var secondCont = document.querySelector('.section2');
    var thirdCont = document.querySelector('.section3');
    var fourthCont = document.querySelector('.section4');
    var navBar = document.querySelector('.navbar');

    //logo images
    var navLogo = document.querySelector('.navLogo');
    var logo = document.querySelector('.logo');
    var logoMid = document.querySelector('.logoMid');

    //text container divs
    var secondContText = document.querySelector('.secondContText');
    var secondContText2 = document.querySelector('.secondContText2');
    var thirdContText = document.querySelector('.thirdContText');
    var thirdContText2 = document.querySelector('.thirdContText2');
    var thirdContText3 = document.querySelector('.thirdContText3');

    //links
    var L1 = document.querySelector('.L1');
    var L2 = document.querySelector('.L2');
    var L3 = document.querySelector('.L3');
    var L4 = document.querySelector('.L4');
    var L5 = document.querySelector('.L5');
    var L6 = document.querySelector('.L6');
    var L7 = document.querySelector('.L7');

    //we have to register the Greensock Scroll Trigger plugin (creates an instance of the ScrollTrigger class)
    gsap.registerPlugin(ScrollTrigger);
    //refresh the plugin in case of any content load after pageload
    ScrollTrigger.refresh()

    /* Below contains a lot of animations, their layout is mostly the same so I will make an explanation here. The 'gsap.to' and 'gsap.from'
    functions are called and a reference to the HTML element we want to animated is passed in as a parameter. From here, the element's CSS properties
    can be animated. In the 'to' function, the element is animated from its original value to the new value listed in the function, ie; the elements might have an
    opacity of 0, and be animated to an opacity of 1. The animation takes the length of the duration value and its direction is controlled by an easing function, in
    this case 'power2.out'.
    
    All animations in Greensock require a trigger or an event. In this case the animations inside of the 'DOMContentLoaded' event use a page 'scrollTrigger' to trigger
    the start of the animation. As the scrub value is set to 'true', the animation will move backward and forwards along its interpolation according to the position of 
    the viewport. The 'start' value indicates when the animation should be triggered and start, the 'end' value indicates when the animation should finish its interpolation.
    
    When the 'to' and 'from' animations are not triggered by the 'scrollTrigger', they will run immediately and only once, unless specified in another way. This can be seen
    further below. */
    
    //first container div: TO
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

    //first hero image, fade to transparent: TO
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

    //second hero image, fade to opaque: TO
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

    //third hero image: FROM
    gsap.from(img3, {
        opacity: 0,
        x: 1000,
        rotationZ: 0,
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
        }
    })

    //navigation bar, fade to opaque: TO
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

    //second container logo, movement: FROM
    gsap.from(logo, {
        opacity: 0,
        x: 1000,
        scale: 1.4,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
        }
    })

    //second container text container div, movement: FROM
    gsap.from(secondContText, {
        opacity: 0,
        y: 1000,
        scale: 1.4,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
        }
    })

    //second container text container div, movement: FROM
    gsap.from(secondContText2, {
        opacity: 0,
        x: -1000,
        y: 1000,
        scale: 1.4,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: secondCont,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
        }
    })

    //second container div, movement: TO
    gsap.to(secondCont, {
        borderRadius: "0% 0% 80% 0%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 120%",
            end: "bottom 50%",
            scrub: true
        }
    })

    //third hero image, animate later: TO
    gsap.to(img3, {
        rotationZ: -25,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 140%",
            end: "bottom 50%",
            scrub: true
        }
    })

    //third container div, movement: FROM
    gsap.from(thirdCont, {
        opacity: 0,
        scale: 0,
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

    //fourth hero image: TO
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

    //third container text container div, movement: FROM
    gsap.from(thirdContText, {
        opacity: 0,
        x: -1000,
        scale: 1.4,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true
        }
    })
    
    //third container text container div, movement: FROM
    gsap.from(thirdContText2, {
        opacity: 0,
        y: 1000,
        scale: 1.4,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true
        }
    })

    //third container text container div, movement: FROM
    gsap.from(thirdContText3, {
        opacity: 0,
        x: 1000,
        scale: 1.4,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true
        }
    })

    //third container logo image, movement: FROM
    gsap.from(logoMid, {
        opacity: 0,
        y: -1000,
        scale: 1.4,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: thirdCont,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true
        }
    })

    //fourth container video element, movement: FROM
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

    //fourth container div, opacity: TO
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

    //fourth container logo image, movement: FROM
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

    //timeline function is defined and paused
    var tl = gsap.timeline({ paused: true });
    //each animation is added to the timeline function, adjusted like the other to/from functions, and a delay set
    //this timeline gives control over when exactly these animations trigger
    //this timeline only allows these animations to run once, as they animate the navigation bar and its elements into place
    tl.from(L1, {x: -1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L2, {y: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L3, {x: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L4, {y: -1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L5, {x: -1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L6, {y: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(L7, {x: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);
    tl.from(navLogo, {x: 1000, ease: "power2.out", duration: 1, opacity: 0}, 0);

    /* The timeline is triggered to play by detecting the user scrolling to the top of
    the second container div. Once detected by the scroll trigger, the timeline is triggered by 'tl.play()' */
    ScrollTrigger.create({
        trigger: '.section2',
        start: 'top 30%',
        endTrigger: '.section3',
        onEnter: () => {
            tl.play()            
        }
    });
});

//Random number function from 0 to input (max)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//this function is called from the 'onmouseenter' function on the DOM. Whenever the user mouses over the
//fourth container div, this function triggers and changes the colour of the div background
function ChangeColour()
{
    //HTML elements defined and referenced
    var fourthCont = document.querySelector('.section4');
    var wishlist = document.getElementById("wishlist");
    
    //create array to hold RGB values
    var rgbArray = [];
    //five colours chosen and set to the array
    rgbArray[0] = "rgb(0, 174, 218)"
    rgbArray[1] = "rgb(196, 62, 93)"
    rgbArray[2] = "rgb(81, 172, 28)"
    rgbArray[3] = "rgb(190, 26, 26)"
    rgbArray[4] = "rgb(211, 100, 10)"
    //return a number between 0 and 4
    input = getRandomInt(5);

    /*the fourth container div as well as the 'add to wishlist' link are animated from their current colour
    to the new colour determined by the random colour picker above. */

    //fourth container div background colour: TO
    gsap.from(fourthCont, {
        backgroundColor: rgbArray[input],
        duration: 0.2,
    })
    //fourth container div background colour: FROM
    gsap.to(fourthCont, {
        backgroundColor: rgbArray[input],
        rotationZ: 0,
        duration: 0.2,
    })
    //wishlist link elements text colour: FROM
    gsap.from(wishlist, {
        color: rgbArray[input],
        duration: 0.2,
    })
    //wishlist link elements text colour: TO
    gsap.to(wishlist, {
        color: rgbArray[input],
        duration: 0.2,
    })
}

//global variable to store the state of the 'OpenFooter()' function. Initialised to false.
var isOpen = false;

/* This function triggers when a user clicks the 'Get Yours' button. This function shrinks the fourth
container div and expands the footer div. It also checks the state of these two elements and determines
whether or not to expand or collapse each respective element */
function OpenFooter()
{
    //the fourth container div and the footer div are defined and referenced
    var videoPanel = document.getElementById("videoPanel");
    var footer = document.getElementById("footer");

    //checks if the footer is open or closed and sets state accordingly
    if(isOpen == false)
    {
        isOpen = true;

        //changes the 'Get Yours' text content
        document.getElementById("footerText").innerHTML = "Get Yours &#8595;";

        //shrink the video panel by 50% of viewport
        gsap.to(videoPanel, {
            height: "50vh",
            duration: 0.5,
        })
        //expand the footer div by 50% or viewport
        gsap.to(footer, {
            height: "50vh",
            duration: 0.5,
        })
    }
    else
    {
        isOpen = false;

        //changes the 'Get Yours' text content
        document.getElementById("footerText").innerHTML = "Get Yours &#8594;";

        //return video panel to full viewport height
        gsap.to(videoPanel, {
            height: "100vh",
            duration: 0.5,
        })
        //shrink the footer
        gsap.to(footer, {
            height: "5vh",
            duration: 0.5,
        });
        
    }
}

