/*  window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    console.log(this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;
 
} 
 */
window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    console.log( "gamla scrollen" > "nya scrollen");
    this.oldScroll = this.scrollY;
 
} 


  function myFunction1() { 
    var e = document.getElementById("#section-1"); 
    e.scrollIntoView(false); // Makes the element  
} 

function myFunction2() { 
    var e = document.getElementById("#section-2"); 
    e.scrollIntoView(true); 
} 

function myFunction3() { 
    var e = document.getElementById("#section-3"); 
    e.scrollIntoView(); // Default is true 
} 


/* $(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
    }
    else {
        console.log('Scroll down');
    }
    });
 */























/* const Hammer = require('hammerjs');



const app = document.querySelector('.app');
const hello = document.querySelector('#section-1');
const landingGradient = document.querySelector('#section-2');
const landingBio = document.querySelector('#section-3');

function landingIntro(){

    landingGradient.style.transform += 'scaleX(2.3)';
    hello.style.transform += 'translateX(1500px)';
    TweenMax.to(landingBio, 1, {
        transform: 'translateY(0)'
    });
}

function landing() {
landingGradient.style.transform = 'scaleX(1)';
hello.style.transform = 'translateX(0)';
TweenMax.to(landingBio, 1, {
    transform: 'translateY(150px)'
})
}

let scroll = 0;

function scrollControll(e){

let direction = 0;

if (e.deltaY === undefined) {
    direction = e < 0 ? 1 : -1;
} else {
    direction = e.deltaY < 0 ? -1 : 1;
}


scroll = scroll + direction;
scroll = scroll < 0 ? 0 : scroll;
scroll = scroll >= 5 ? 5 : scroll;

scrollState(scroll);

}

function scrollState(scroll) {
    switch (scroll) {
        case 0:
        TweenMax.to(app, 1, { scrollTo: 0});
        landing();
        break;
        case 1:
        TweenMax.to(app, 1, { scrollTo: 0});
        landing();
        break;
        case 2;
        landingIntro();
        diplayCase(scroll);
        TweenMax.to(app, 1, {scrollTo:window.innerHeight});
        break:
        case 3:
        diplayCase(scroll);
        break;
        case 4:
        diplayCase(scroll);
        break;
        case 5:
        diplayCase(scroll);
        break;
        case 6:
        diplayCase(scroll);
        break;
        case 7:
        diplayCase(scroll);
        break;
    }
} */








//landing greeting är min section 1 (landingpage)

//landingGradient är min section2 (onlyTheBest)

// bio__titel och bio__item är båda min section3 (theDill) 





/* in b4 hammer js */

/* 
const hammer = new Hammer(app);
hammer.get'swipe'.set ({ direction: Hammer.DIRECTION_VERTICAL });

hammer.on('swipeup', function (){
    scrollControll(-1);
    navAt();
});

hammer.on('swipedown', function (){
    scrollControll(1);
    navAt();
}); */

/* Hammer JS ends */