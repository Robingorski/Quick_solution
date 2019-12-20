document.getElementById('section-1').addEventListener('scroll', function() {
    TweenMax.to('#section-2', 1, )
})


















/* in b4 hammer js */


const hammer = new Hammer(app);
hammer.get'swipe'.set ({ direction: Hammer.DIRECTION_VERTICAL });

hammer.on('swipeup', function (){
    scrollControll(-1);
    navAt();
});

hammer.on('swipedown', function (){
    scrollControll(1);
    navAt();
});

/* Hammer JS ends */