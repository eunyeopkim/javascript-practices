	var onLoad = (function() {
		var rects = [
			new Rect(100, 100, 200, 300, "#00f"),
			new Rect(250, 250, 400, 400, "#0f0"),
			new Rect(400, 450, 500, 800, "#f00")];
		
		var index = 0;
		var intervalId = setInterval(function(){
			if(index >= rects.length){
				clearInterval(intervalId);
				return;
			}
			
			rects[index].show();
			console.log(rects[index].hasOwnProperty("x1"));
			index++;
			
		}, 1000);
	});
	
	window.addEventListener('load', onLoad);