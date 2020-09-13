const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
	console.log('click hamburger')
	if(btnHamburger.classList.contains('open')){
		body.classList.remove('no-scroll');
		btnHamburger.classList.remove('open');
		fadeElems.forEach(function(element){
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
		

	}
	else{
		body.classList.add('no-scroll');
		btnHamburger.classList.add('open');
		fadeElems.forEach(function(element){
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		})
		
	}
	
});

/*const over = document.querySelector('#over');

btnHamburger.addEventListener('click', function(){
	console.log('click over')
	if(over.classList.contains('fade')){

		over.classList.remove('fade');

	}
	else{

		over.classList.add('fade');
	}
	
});*/

