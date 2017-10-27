window.onload = function(){
	// замеряем высоту и ширину экрана 

	var width 	= screen.width,
		height 	= screen.height;

	// находим наши элементы
	var choose 	  = document.querySelector('.choose');
	var img_count = document.querySelectorAll('menu .choose .char');
	console.log(choose);
	// даем нашим элементам высоту и ширину
	choose.style.width  = width+"px";
	choose.style.height = height+"px";
	var elem_width = width/img_count.length;
	for (var i = 0; i < img_count.length; i++) {
		img_count[i].style.width 	= elem_width+"px";
		img_count[i].style.height 	= height+"px";

		// вешаем прослушку 

		img_count[i].addEventListener('mouseover', function(){
			
			this.style.width = elem_width*2+"px";
			console.log(1);
			this.nextSibling = elem_width/2+"px";
			console.log(2);
			this.previousSibling = elem_width/2+"px";
			console.log(3);
		})
		img_count[i].addEventListener('mouseout',function(){

			event.target.style.width = elem_width+"px";
			console.log(4);
		})
	}

}