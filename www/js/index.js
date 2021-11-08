document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(
        onGeolocationSuccess,
        onGeolocationError,
        { timeout: 120000 }
    );
}

function onGeolocationSuccess(position) {
    let message = "";
    
    for(var key in position.coords)
        message += `${capitalizeFirstLetter(key.toString())}: ${position.coords[key]}\n`;

    message += `Timestamp: ${position.timestamp}`;

    alert(message);

    document.getElementById("lat").value = position.coords.latitude;
    document.getElementById("lng").value = position.coords.longitude;
}

function onGeolocationError(err) {
    alert(`${err.code} - ${err.message}`);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}