/*
 * jQuery HTML5 kuepoints Plugin 1.0
 * https://github.com/alloyking/kuepoints
 *
 * Copyright 2012, Timothy Shultis
 * http://morsekode.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */


(function($){
 var funcArr = []
 ,nameArr = []
 ,pointsObj;

$.fn.KuePoints = function(vid) {
    if (this.length > 1){
        this.each(function() { $(this).kuePoints(vid); });
        return this;
    }
   
    var video = vid;
    video.addEventListener("timeupdate", vidProgress);
       
    this.initialize = function() {
        return this;
    };

   this.addListener = function(name,func){
   		if(name === 'cue'){
   			//not currently used
			funcArr.push(func);	
		} else if(name instanceof Array){
			for(i=0; i<name.length; i++){
			pointsObj = {f: func, n:parseFloat(name[i])};
			funcArr.push(pointsObj);
			}
		} else{
			nameArr = name.split(',');
			for(i=0; i<nameArr.length; i++){
			pointsObj = {f: func, n:parseFloat(nameArr[i])};
			funcArr.push(pointsObj);

			}
		}	
   };
   return this.initialize();
};


function vidProgress(e){
	var playHeadTime = parseInt(e.currentTarget.currentTime);
	for(i=0; i<funcArr.length; i++)
	if(playHeadTime == funcArr[i]['n']){
		funcArr[i]['f']();
	}
}


})(jQuery);