
// замеряем высоту и ширину экрана 

var width 	= document.documentElement.clientWidth,
	height 	= document.documentElement.clientHeight;

// находим наши элементы
var choose 	  = document.querySelector('.choose');
var img_count = document.querySelectorAll('menu .choose .char');
var addChar   = document.querySelector('.addChar');
var names_of  = document.querySelectorAll('.desc .name');
var stats 	  = document.querySelectorAll('.desc .stats');
var for_add	  = document.querySelector('.for-add');
var close_for_add = document.querySelector('.name .close');



// вызываем окно добаления перса

for_add.style.display = 'none';
addChar.addEventListener('click',function(){
	if (for_add.style.display === 'none') {
		for_add.style.display = 'block';
		console.log('block');
	}else{
		for_add.style.display ='none';
		console.log('none');
	}

});

// находим кнопку добавить и вешаем прослоушку с функией добавления

var add_char = document.querySelector('.add-char');
add_char.addEventListener('click',addCharecter);

close_for_add.addEventListener('click', function(){
	for_add.style.display = for_add.style.display === 'none' ? '' : 'none';
});

// вешаем прослушку на анимацию слайда
function mainSettings() {
	//удаляем елемент  
	var remove_char = document.querySelectorAll('.remove');
	for (var i = 0; i < remove_char.length; i++) {
		remove_char[i].addEventListener('click', removeChar)
	}

	// даем нашим элементам высоту и ширину
	var img_count = document.querySelectorAll('menu .choose .char');

	var chooseWidth  	= choose.style.width  = width-25+"px";
	var chooseHeight 	= choose.style.height = height+"px";
	var elem_width   	= width/img_count.length;
	for_add.style.width = width/img_count.length+"px";

	for (var i = 0; i < img_count.length; i++) {
		img_count[i].style.width 	= elem_width+"px";
		img_count[i].style.height 	= height+"px";

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
	}

	function removeChar(){
		this.parentNode.parentNode.parentNode.parentNode.remove();
		mainSettings();
	}
}
function addCharecter(){
	var new_elem = document.createElement('div');
	new_elem.classList.add('char');
	new_elem.innerHTML = '<div class="desc">'+
						'<div class="name">'+
						'<div class="buttons">'+
							'<button class="edit">Edit</button>'+
							'<button class="remove">Remove</button>'+
						'</div>'+
						'<p>'+
							
						'</p>'+
					'</div>'+
					'<div class="stats">'+
						'<ul>'+
							'<li><span>weapon skill(ws)</span><span></span></li>'+
							'<li><span>ballistic skill (bs)</span><span></span></li>'+
							'<li><span>strength (s)</span><span></span></li>'+
							'<li><span>toughness (t)</span><span></span></li>'+
							'<li><span>agility (ag)</span><span></span></li>'+
							'<li><span>intelligence (int)</span><span></span></li>'+
							'<li><span>perseprion (per)</span><span></span></li>'+
							'<li><span>willpower (wp)</span><span></span></li>'+
							'<li><span>fellowship (fel)</span><span></span></li>'+
							'<li><span>influence (inf)</span><span></span></li>'+
						'</ul>'+
					'</div>'+
				'</div>';
	choose.appendChild(new_elem);
	mainSettings();
}
mainSettings();