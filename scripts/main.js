	
	function loadCanvas(){
      var canvas = document.getElementById("blueSquare");
      var context = canvas.getContext("2d");

      context.beginPath();
      context.rect(0, 0, 500, 500);
      context.fillStyle = "#7A95D2";
      context.fill();

      context.beginPath();
      context.rect(100, 100, 300, 300);
      context.fillStyle = "#FFFF00";
      context.fill();
	}