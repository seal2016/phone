 var onSuccess = function(position) {

			var targetUrl = "https://200.48.64.123/consultawebsielse?lat="+position.coords.latitude+"&lon="+position.coords.longitude;
			
			//var targetUrl = "http://localhost:64019?lat="+position.coords.latitude+"&lon="+position.coords.longitude;
			var bkpLink = document.getElementById("bkpLink");
			bkpLink.setAttribute("href", targetUrl);
			bkpLink.text = targetUrl;
			window.location.replace(targetUrl);
	 
	 
        
    };

    // onError Callback receives a PositionError object
    /*
	var targetUrl = "http://localhost:64019?lat=-16.401057&lon=-71.539434"; 
			var bkpLink = document.getElementById("bkpLink");
			bkpLink.setAttribute("href", targetUrl);
			bkpLink.text = targetUrl;
			window.location.replace(targetUrl);
	*/
	
	
	
	
    function onError(error) {

			var targetUrl = "http://200.48.64.123/consultawebsielse?lat=-16.401057&lon=-71.539434";
			
			//var targetUrl = "http://localhost:64019?lat=-16.401057&lon=-71.539434";
 var bkpLink = document.getElementById("bkpLink");
			bkpLink.setAttribute("href", targetUrl);
			bkpLink.text = targetUrl;
			window.location.replace(targetUrl);
	 
    }

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		
		var networkState = navigator.connection.type;
		if(networkState == Connection.NONE){
			document.getElementById("spinner").innerHTML = "No tiene conexión a internet";
		}
		else{		
			navigator.geolocation.getCurrentPosition(onSuccess, onError);			
		}
        
        
},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();