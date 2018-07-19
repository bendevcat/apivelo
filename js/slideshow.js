var slideshow = {

    prevSlide:      document.createElement("div"),
    innerSlideshow: document.createElement("div"),
    nextSlide:      document.createElement("div"),
    leftArrow:      document.createElement("i"),
    rightArrow:     document.createElement("i"),
    slidePics:      [],
    position:       0,

    //Construction de la structure du Slideshow.
    init: function () {

        //Création de la div gauche.
        var prevSlide = this.prevSlide;
            prevSlide.id = "prevSlide";
        document.getElementById("slideshow").appendChild(prevSlide);
        //Création du bouton gauche dans la div gauche.
        var leftArrow = this.leftArrow;
            leftArrow.setAttribute("class", "fas fa-chevron-circle-left");
        document.getElementById("prevSlide").appendChild(leftArrow);

        //Création de la div qui contiendra l'image.
        var innerSlideshow    = this.innerSlideshow;
            innerSlideshow.id = "innerSlideshow";
        document.getElementById("slideshow").appendChild(innerSlideshow);

        //Création de la div droite.
        var nextSlide = this.nextSlide;
            nextSlide.id = "nextSlide";
        document.getElementById("slideshow").appendChild(nextSlide);
        //Création du bouton droit dans la div droite.
        var rightArrow = this.rightArrow;
            rightArrow.setAttribute("class", "fas fa-chevron-circle-right");
        document.getElementById("nextSlide").appendChild(rightArrow);

        //Affichage de la première image au chargement de la page.
        var innerPic             = document.createElement("img");
            innerPic.id          = "innerPic";
            innerPic.src         = this.slidePics[0];
            innerPic.style.width = "100%";
        this.innerSlideshow.appendChild(innerPic);

        //Appel de la fonction clickEvent
        this.clickEvent();
    },


    //On affiche les img correspondantes à la position dans le tableau,
    //à chaque click sur un bouton.
    clickEvent: function () {

        //Récupération de this pour l'utiliser dans les fonctions anonymes.
        var clickEvent = this;

        //Ecoute du click sur le bouton gauche
        document.querySelector("#prevSlide").addEventListener("click", function () {

            //Si la position dans le tableau est supérieur à zéro,
            if (clickEvent.position > 0) {
                //Je baisse sa position de 1,
                clickEvent.position--;
                //Et j'affiche l'image précédente.
                document.getElementById("innerPic").src = clickEvent.slidePics[clickEvent.position];
            }

            //Si la position est à 0, je la remet à 4,
            //et j'affiche l'img en dernière position dans le tableau.
            else {
                clickEvent.position = 4;
                document.getElementById("innerPic").src = clickEvent.slidePics[clickEvent.position];
            }
        });

        //Ecoute du click sur le bouton droit
        document.querySelector("#nextSlide").addEventListener("click", function () {

            //Si la position dans le tableau inférieur à 4,
            if (clickEvent.position < 4) {
                //Je monte sa position de 1,
                clickEvent.position++;
                //Et j'affiche l'image suivante.
                document.getElementById("innerPic").src = clickEvent.slidePics[clickEvent.position];
            }

            //Si la position est à 4, je la remet à 0,
            //et j'affiche l'img en première position dans le tableau.
            else {
                clickEvent.position = 0;
                document.getElementById("innerPic").src = clickEvent.slidePics[clickEvent.position];
            }
        });
    }
};

