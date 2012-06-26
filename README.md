kuepoints
=========

html5 cuepoints


example:
	
	
	
	
	var video = document.getElementsByTagName("video")[0];
	
	
	//init the kuepoints
	var kuepoints = $.fn.KuePoints(video);
		
	
	//add a single cuepoint
	kuepoints.addListener('5',function(){
	 alert('do something');
	});

	// add cuepoints in an array
	kueArray = [20,25];
	kuepoints.addListener(kueArray,function(){
	 alert('do something else');
	});
	
	//add cuepoints in a string
	kuepoints.addListener('10,15,30',function(){
	 alert('do something really crazy');
	});
	
	
	//kuepoints can be added in any order as they are sorted