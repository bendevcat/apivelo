var displayMarkers = {

    init: function () {

        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c1464f18ea0833f000f8db8aff36e130bdc1935c", function (response) {

            var  getStations = JSON.parse(response);

            for (var i = 0; i <  getStations.length; i++) {

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
                var availableBikesStation =  getStations[i].available_bikes;
                    if (availableBikesStation > 0) {
                        var createButton = "<button id='greenButton' name='reservationStation' type='submit'><i class=\"fas fa-calendar-plus\"></i> Réserver un Vélo\'V</button>";
                    }
                    else {
                        var createButton = "<button id='redButton' name='reservationStation' type='submit' disabled><i class=\"fas fa-calendar-times\"></i> Désolé, plus de Vélo'V ici</button>";
                    }
                var availableBikeStandsStation =  getStations[i].available_bike_stands;
                var latPositionStation =  getStations[i].position.lat;
                var lngPositionStation =  getStations[i].position.lng;

                var popupStation =  "<span class='infoStation'><h3><i class=\"fas fa-info-circle\"></i> Infos Station</h3></span>" +
                                    "<span class='" + statusEn + "'><h3>" + fasCircle + " " + statusStation + "</h3></span>" +
                                    "<span class='nameStation'><h3>" + nameStation + "</h3></span>" +
                                    "<span class='addressStation'><strong>Adresse : </strong>" + addressStation + "</span><br />" +
                                    "<span class='availableBikesStation'><strong>Nombre de Vélo'V disponible : </strong>" + availableBikesStation + "</span><br />" +
                                    "<span class='availableBikeStandsStation'><strong>Nombre de places restantes : </strong>" + availableBikeStandsStation + "</span>" +
                                    "<span class='createButton'>" + createButton + "</span>";

                if (statusEn === "OPEN") {
                    var markerStation = L.marker([latPositionStation, lngPositionStation],
                                        {icon: greenIcon}).addTo(createMap);
                }
                else if (statusEn === "CLOSED") {
                    var markerStation = L.marker([latPositionStation, lngPositionStation],
                                        {icon: redIcon}).addTo(createMap);
                }
                if (statusEn === "OPEN" && availableBikesStation === 0) {
                    var markerStation = L.marker([latPositionStation, lngPositionStation],
                                        {icon: orangeIcon}).addTo(createMap);
                }
                markerStation.bindPopup(popupStation).openPopup();

            }
        });
    }
};

