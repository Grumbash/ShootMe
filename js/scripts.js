window.onload = function(){
	// замеряем высоту и ширину экрана 

	var width 	= document.documentElement.clientWidth,
		height 	= document.documentElement.clientHeight;

	// находим наши элементы
	var choose 	  = document.querySelector('.choose');
	var img_count = document.querySelectorAll('menu .choose .char');
	var desc 	  = document.querySelectorAll('.desc');
	console.log(desc);
	// даем нашим элементам высоту и ширину
	choose.style.width  = width+"px";
	choose.style.height = height+"px";
	var elem_width = width/img_count.length;
	for (var i = 0; i < img_count.length; i++) {
		img_count[i].style.width 	= elem_width+"px";
		img_count[i].style.height 	= height+"px";

		// вешаем прослушку 

		img_count[i].addEventListener('mouseover',slide);
		img_count[i].addEventListener('mouseout',closeSlide);
	}

	function slide(){
		this.style.width = elem_width*2+"px";
		var elem_par = this.parentNode;
		for (var i = 0; i < elem_par.children.length; i++) {
			if(elem_par.children[i] !== this){
				elem_par.children[i].style.width = (choose.style.width - this.style.width)/elem_par.children[i-1];
			}
		}
		
	}

	function closeSlide(){
		this.style.width = elem_width+"px";

		console.log(4);
	}
}
