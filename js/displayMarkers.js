var displayMarkers = {

    init: function () {

        var self = this;

        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c1464f18ea0833f000f8db8aff36e130bdc1935c", function (response) {
            // Récupère un Array de toutes les stations
            var  getStations = JSON.parse(response);

            // Traitement du tableau des stations
            for (var i = 0; i <  getStations.length; i++) {

                // getStations[i] contient les informations d'une station dans un Array

                // Définit si la station est ouverte ou fermée
                var statusStation =  getStations[i].status;
                var statusEn = statusStation;
                    if (statusEn === "OPEN") {
                        var statusFrOpen = statusEn.replace("OPEN", "OUVERTE");
                        statusStation = statusFrOpen;

                        var fasCircle = "<i class=\"fas fa-check-circle\"></i>";
                    }
                    else {
                        var statusFrClosed = statusEn.replace("CLOSED", "FERMÉE");
                        statusStation = statusFrClosed;

                        var fasCircle = "<i class=\"fas fa-times-circle\"></i>";
                    }


                var nameStation =  getStations[i].name;
                var addressStation =  getStations[i].address;

                // Création du bouton de réservation
                // Définit si le bouton affiché sera Green ou Red
                var availableBikesStation =  getStations[i].available_bikes;
                    if (availableBikesStation > 0) {
                        var createButton = "<button class='greenButton' name='reservationStation' type='submit'>" +
                                           "<i class=\"fas fa-calendar-plus\"></i> Réserver un Vélo\'V</button>";
                    }
                    else {
                        var createButton = "<button class='redButton' name='reservationStation' type='submit' disabled>" +
                                           "<i class=\"fas fa-calendar-times\"></i> Désolé, plus de Vélo'V ici</button>";
                    }

                var availableBikeStandsStation =  getStations[i].available_bike_stands;
                var latPositionStation =  getStations[i].position.lat;
                var lngPositionStation =  getStations[i].position.lng;

                // Création du contenu du markerPopup : class=leaflet-popup-content
                var popupStation =  "<span class='titleStation'><h3><i class=\"fas fa-info-circle\"></i> Infos Station</h3></span>" +
                                    "<span class='" + statusEn + "'><h3>" + fasCircle + " " + statusStation + "</h3></span>" +
                                    "<span class='nameStation'><h3>" + nameStation + "</h3></span>" +
                                    "<span class='addressStation'><strong>Adresse : </strong>" + addressStation + "</span><br /><br />" +
                                    "<span class='availableBikesStation'><strong>Nombre de Vélo'V disponible : </strong>" + availableBikesStation + "</span><br />" +
                                    "<span class='availableBikeStandsStation'><strong>Nombre de places restantes : </strong>" + availableBikeStandsStation + "</span>" +
                                    "<span class='createButton'>" + createButton + "</span>";

                // Gestion de l'affichage et de la couleur des markerIcon
                if (statusEn === "OPEN") {
                    self.markersStations = L.marker([latPositionStation, lngPositionStation],
                                                {icon: greenIcon}).addTo(createMap);
                }
                else if (statusEn === "CLOSED") {
                    self.markersStations = L.marker([latPositionStation, lngPositionStation],
                                                {icon: redIcon}).addTo(createMap);
                }
                if (statusEn === "OPEN" && availableBikesStation === 0) {
                    self.markersStations = L.marker([latPositionStation, lngPositionStation],
                                                {icon: orangeIcon}).addTo(createMap);
                }


                // Affichage d'une Popup en cliquant sur un marker contenant les infos de la station cliqué
                self.markersStations.bindPopup(popupStation);

                // Récupère les infos d'une station contenu dans le marker cliqué
                var contentPopupStations = self.markersStations;

                // Ajout d'un écouteur sur le click d'un marker
                contentPopupStations.addEventListener("click", function (e) {

                    var contentPopup = e.target._popup._content;

                    // Création et traitement de la div qui va contenir les infos
                    var contentInfos = document.getElementById("contentInfos");
                    contentInfos.innerHTML = contentPopup;

                    var titleContentInfos = contentInfos.querySelector("h3");
                    titleContentInfos.classList.add("hide");
                    var buttonContentInfos = contentInfos.querySelector("button");
                    buttonContentInfos.classList.add("hide");

                    document.getElementById("infosStation").appendChild(contentInfos);

                    document.getElementById("infosStation").classList.remove("hide");
                    document.getElementById("infosStation").classList.add("active");
                });
            } // forEnd
        }); // ajaxGetEnd
    } // initEnd
};




























