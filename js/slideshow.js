var slideshow = {

    prevSlide:      document.createElement("div"),
    innerSlideshow: document.createElement("div"),
    nextSlide:      document.createElement("div"),
    leftArrow:      document.createElement("i"),
    rightArrow:     document.createElement("i"),
    slidePics:      [],

    display: function () {

        //Création de la div gauche
        var prevSlide = this.prevSlide;
            prevSlide.id = "prevSlide";
        document.getElementById("slideshow").appendChild(prevSlide);
        //Création du bouton gauche
        var leftArrow = this.leftArrow;
            leftArrow.setAttribute("class", "fas fa-chevron-circle-left");
        document.getElementById("prevSlide").appendChild(leftArrow);

        //Création de la div qui contiendra l'image
        var innerSlideshow    = this.innerSlideshow;
            innerSlideshow.id = "innerSlideshow";
        document.getElementById("slideshow").appendChild(innerSlideshow);


        //Création de la div droite
        var nextSlide = this.nextSlide;
            nextSlide.id = "nextSlide";
        document.getElementById("slideshow").appendChild(nextSlide);
        //Création du bouton droit
        var rightArrow = this.rightArrow;
            rightArrow.setAttribute("class", "fas fa-chevron-circle-right");
        document.getElementById("nextSlide").appendChild(rightArrow);

        //Style CSS
        innerSlideshow.style.width = "80%";
        prevSlide.style.minWidth = "10%";
        nextSlide.style.minWidth = "10%";
        prevSlide.style.display = "flex";
        nextSlide.style.display = "flex";
        prevSlide.style.display = "-webkit-flex";
        nextSlide.style.display = "-webkit-flex";
        prevSlide.style.justifyContent = "center";
        nextSlide.style.justifyContent = "center";
        prevSlide.style.alignItems = "center";
        nextSlide.style.alignItems = "center";
        prevSlide.style.fontSize = "5em";
        nextSlide.style.fontSize = "5em";
        prevSlide.style.color = "#c1d7b5";
        nextSlide.style.color = "#c1d7b5";
        prevSlide.style.textShadow = "3px 5px #a8be9c";
        nextSlide.style.textShadow = "3px 5px #a8be9c";

        //Affichage de l'image
        var imgElt             = document.createElement("img");
            imgElt.src         = "img/01.png";
            imgElt.style.width = "100%";
        this.innerSlideshow.appendChild(imgElt);

    }

};

slideshow.display();



