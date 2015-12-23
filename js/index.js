var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function() {
        var success = function() { window.location="menu.html"; };
        var failure = function(reason) { alert("NFC no leido: " + reason); };
         window.plugins.imeiplugin.getImei(callback);//funcion lectura de imei.
                  function callback(dato) {
        nfc.share([ ndef.textRecord(dato)], success, failure);
                  }
        setInterval(function () {
                navigator.app.exitApp();
        }, 50000);
    }
};

app.initialize();