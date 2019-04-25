$(document).ready(function() {
    $('.next').on('click', function() {
        console.log('.next Clicked');
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        } else {
            console.log('No next image');
        }
    });
    $('.prev').on('click', function() {
        console.log('.prev Clicked');
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        } else {
            console.log('No prev image');
        }
    });
    // TODO: when it gets to last image, re start

});