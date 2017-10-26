window.onload = function(){

	var width = screen.width;

	var img_count = document.querySelectorAll('menu .choose .char');
	var elem_width = width/img_count.length;
	for (var i = 0; i < img_count.length; i++) {
		img_count[i].style.width = elem_width+"px";
		img_count[i].onclick = function(){
			this.style.width = elem_width*2+"px";
		}
	}
	console.log();
}