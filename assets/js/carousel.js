

window.onload = function(){

 
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
    // options
        cellAlign: 'left',
        contain: true,
        wrapAround: false,
        freeScroll: true,
        pageDots: false,
        // resize: false,
        // setGallerySize: false,
        // autoPlay: 5000,
        // fullscreen: true,
        lazyLoad: 2
    });

    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity( '.main-carousel', {
    // options
    });
}