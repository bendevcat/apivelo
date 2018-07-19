// Slideshow.JS
// Création d'un nouvel Object "slideshow" appelé "myFirstSlideshow"
var myFirstSlideshow = Object.create(slideshow);
myFirstSlideshow.slidePics = [
    "img/01.png",
    "img/02.png",
    "img/03.png",
    "img/04.png",
    "img/05.png"
];

myFirstSlideshow.init();
// myFirstSlideshow.clickEvent();
