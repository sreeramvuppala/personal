/**
 * @author Sreeram
 */


/* google maps */
var personal = personal || {};
(function(context) {
	'use strict';
	var myLatlng = new google.maps.LatLng(41.841,-76.734771);

	var mapInitOpts = {
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    center: myLatlng,
	    zoom: 12
	};

	var map = new google.maps.Map(document.getElementById("my-location"), mapInitOpts);
	
	var marker = new google.maps.Marker({
	    position: myLatlng, 
	    map: map, 
	    title: "My Home" 
	});
	
	var infoBubble2 = new InfoBubble({
	          map: map,
	          content: '<div class="phoneytext">Random spot&nbsp;&nbsp;<i class="icon-remove" id="remove"></i></div>',
	          position: new google.maps.LatLng(-35, 152),
	          shadowStyle: 1,
	          padding: 0,
	          backgroundColor: 'rgb(57,57,57)',
	          borderRadius: 4,
	          arrowSize: 10,
	          borderWidth: 1,
	          borderColor: '#2c2c2c',
	          disableAutoPan: true,
	          hideCloseButton: true,
	          arrowPosition: 30,
	          backgroundClassName: 'phoney',
	          arrowStyle: 2
	        });

	google.maps.event.addListener(marker, 'click', function() {
		if(!infoBubble2.isOpen())
			google.maps.event.addListenerOnce(infoBubble2, 'domready', function(){
				google.maps.event.addDomListener(document.getElementById('remove'),'click', function() {
	      			infoBubble2.close();
	    		});
			});
        	infoBubble2.open(map,marker);
        });

	$().ready(function (){
	
	    center_map();
	
	    google.maps.event.trigger(map, 'resize'); 
	    moveTo();	
	});
	
	$(window).on('resize', function (e){
	    
	    center_map();
	
	});

	function center_map(){
	    
	    window.setTimeout(function() {
	        map.panTo(marker.getPosition()); 
	        }, 500);
	
	};
})(personal);