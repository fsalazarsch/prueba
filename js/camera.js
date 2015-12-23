//
//    2015-05-23 - Added Video
//    https://github.com/apache/cordova-plugin-camera/
//
var cameraOptions = {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI
};

function getCamera() {
    navigator.camera.getPicture(onSuccessCamera, onFailCamera, cameraOptions);
}

function onSuccessCamera(imageURI) {
    var image = document.getElementById('myImage');
    // place image in view
    image.src = imageURI;
    // reuse object
    image = document.getElementById('imgName');
    // write the text next to the image
    image.innerHTML = imageURI;
}

function onFailCamera(message) {
    alert('Failed because: ' + message);
}