<html>
	<head>
		<title>Page Title</title>

	</head>
	<body>
    <div>
      <button onclick="prev()"> Prev </button>
      <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg" 
        width="200px" height="100px"/>
      <button onclick="next()"> Next </button>
    </div>
	</body>
</html>

/*
button {
  margin-top:30px;
  float:left;
  height:50px;
}
img {
  float:left;
  margin-right:10px;
  margin-left:10px;
}
*/

var images = [
  "http://www.sololearn.com/uploads/slider/1.jpg", 
  "http://www.sololearn.com/uploads/slider/2.jpg", 
  "http://www.sololearn.com/uploads/slider/3.jpg"
];

var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}