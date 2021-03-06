var args = arguments[0] || {};
	showMap();
function goHome(e){
	$.map.close();
}

function showMap(){	  
var MapModule = require('ti.map');

var map3 = MapModule.createView({
    userLocation: true,
    mapType: MapModule.SATELLITE_TYPE,
    animate: true,
    region: {latitude: 58.893539, 
    		longitude: 11.012579, 
    		latitudeDelta: 0.1, 
    		longitudeDelta: 0.1 },	
    height: '85%',
    width: Ti.UI.FILL
});

var markers = Alloy.Collections.hotspotModel;

markers.fetch({
	success: displayMarkers,
	error: Ti.API.error
});

function displayMarkers()
{ 
	markers.each(function(marker){
		var markerAnnotation = MapModule.createAnnotation({
			latitude : marker.get('xkoord'),
			longitude : marker.get('ykoord'),
			title : marker.get('name')
		});
		
		map3.addAnnotation(markerAnnotation);
	});
}

$.mapView.add(map3);
};
