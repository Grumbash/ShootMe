
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
	var get_name = document.querySelector('.innerName').value;
	var get_skills = document.querySelectorAll('.stats ul li input');

	for (var i = 0; i < get_skills.length; i++) {
		var li_inner 		= document.createElement('span').textContent = get_skills[i].value
		// li_inner.textContent = get_skills[i].value;
		switch(i){
			case 0:
			var ws = li_inner;
			case 1:
			var bs = li_inner;
			case 2:
			var s = li_inner;
			case 3:
			var t = li_inner;
			case 4:
			var ag = li_inner;
			case 5:
			var int = li_inner;
			case 6:
			var per = li_inner;
			case 7:
			var wp = li_inner;
			case 8:
			var fel = li_inner;
			case 9:
			var inf = li_inner;
		}

	}
	new_elem.innerHTML =    '<div class="desc">'+
								'<div class="name">'+
									'<div class="buttons">'+
										'<button class="edit">Edit</button>'+
										'<button class="remove">Remove</button>'+
									'</div>'+
									'<p>'+
										get_name+
									'</p>'+
								'</div>'+
								'<div class="stats">'+
									'<ul>'+
										'<li class="ws"><span>weapon skill(ws)</span><span>'+ws+'</span></li>'+
										'<li class="bs"><span>ballistic skill (bs)</span><span>'+bs+'</span></li>'+
										'<li class="s"><span>strength (s)</span><span>'+s+'</span></li>'+
										'<li class="t"><span>toughness (t)</span><span>'+t+'</span></li>'+
										'<li class="ag"><span>agility (ag)</span><span>'+ag+'</span></li>'+
										'<li class="int"><span>intelligence (int)</span><span>'+int+'</span></li>'+
										'<li class="per"><span>perseprion (per)</span><span>'+per+'</span></li>'+
										'<li class="wp"><span>willpower (wp)</span><span>'+wp+'</span></li>'+
										'<li class="fel"><span>fellowship (fel)</span><span>'+fel+'</span></li>'+
										'<li class="inf"><span>influence (inf)</span><span>'+inf+'</span></li>'+
									'</ul>'+
								'</div>'+
							'</div>';

	choose.appendChild(new_elem);

	mainSettings();
}
mainSettings();






