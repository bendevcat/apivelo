var slideshow = {

    prevSlide:      document.createElement("div"),
    innerSlideshow: document.createElement("div"),
    nextSlide:      document.createElement("div"),
    leftArrow:      document.createElement("i"),
    rightArrow:     document.createElement("i"),
    slidePics:      [],
    position:       0,
    idNum:          0,

    // Construction de la structure du Slideshow.
    init: function () {

        this.idNum++;

        // Création de la div gauche
        var prevSlide    = this.prevSlide;
            prevSlide.id = "prevSlide"+ this.idNum;
            prevSlide.classList.add("prevSlide");
        document.getElementById("slideshow").appendChild(prevSlide);

        // Création du bouton gauche dans la div gauche
        var leftArrow = this.leftArrow;
            leftArrow.setAttribute("class", "fas fa-chevron-circle-left leftArrow");
        document.getElementById("prevSlide"+ this.idNum).appendChild(leftArrow);

        // Création de la div qui contiendra l'image
        var innerSlideshow    = this.innerSlideshow;
            innerSlideshow.id = "innerSlideshow"+ this.idNum;
            innerSlideshow.classList.add("innerSlideshow");
        document.getElementById("slideshow").appendChild(innerSlideshow);

        // Création de la div droite
        var nextSlide    = this.nextSlide;
            nextSlide.id = "nextSlide"+ this.idNum;
            nextSlide.classList.add("nextSlide");
        document.getElementById("slideshow").appendChild(nextSlide);

        // Création du bouton droit dans la div droite
        var rightArrow = this.rightArrow;
            rightArrow.setAttribute("class", "fas fa-chevron-circle-right rightArrow");
        document.getElementById("nextSlide"+ this.idNum).appendChild(rightArrow);

        // Affichage de la première image au chargement de la page
        var innerPic             = document.createElement("img");
            innerPic.id          = "innerPic";
            innerPic.src         = this.slidePics[0];
            innerPic.style.width = "100%";
        this.innerSlideshow.appendChild(innerPic);

        // Appel de la fonction slideEvent
        this.slideEvent();
    },


    // Récupération des Events click et keydown
    slideEvent: function () {

        // Récupération de this pour l'utiliser dans les fonctions anonymes
        var slideEvent = this;

        // Click Event
        var allArrow = document.querySelectorAll(".leftArrow, .rightArrow");
            allArrow.forEach(function (arrow) {
                arrow.addEventListener("click", function (e) {
                    if (e.target.classList[1] === "fa-chevron-circle-left") {
                        if (slideEvent.position > 0) {
                            slideEvent.position--;
                            document.getElementById("innerPic").src = slideEvent.slidePics[slideEvent.position];
                        } else {
                            slideEvent.position = 4;
                            document.getElementById("innerPic").src = slideEvent.slidePics[slideEvent.position];
                        }
                    }
                    else if (e.target.classList[1] === "fa-chevron-circle-right") {
                        if (slideEvent.position < 4) {
                            slideEvent.position++;
                            document.getElementById("innerPic").src = slideEvent.slidePics[slideEvent.position];
                        }

                        else {
                            slideEvent.position = 0;
                            document.getElementById("innerPic").src = slideEvent.slidePics[slideEvent.position];
                        }
                    }
                });
            });

        // Keyboard Event
        // Ajout d'un écouteur keydown sur les flèches du clavier
        document.addEventListener("keyup", function (e) {
            // Récupération des clés Arrow*
            var keyEvent = e.key;

            // Si la touche enfoncée correspond à la clé Left ou Up
            if (keyEvent === "ArrowLeft") {
                if (slideEvent.position > 0) {
                    slideEvent.position--;
                    document.getElementById("innerPic").src = slideEvent.slidePics[slideEvent.position];
                }
                else {
                    slideEvent.position = 4;
                    document.getElementById("innerPic").src = slideEvent.slidePics[slideEvent.position];
                }

            }
            // Si la touche enfoncée correspond à la clé Right ou Down
            else if (keyEvent === "ArrowRight") {
                if (slideEvent.position < 4) {
                    slideEvent.position++;
                    document.getElementById("innerPic").src = slideEvent.slidePics[slideEvent.position];
                }
                else {
                    slideEvent.position = 0;
                    document.getElementById("innerPic").src = slideEvent.slidePics[slideEvent.position];
                }
            }
        });
    }
};


