var delivery = document.querySelector('.services_list li:nth-child(1)');
var guarantee = document.querySelector('.services_list li:nth-child(2)');
var credit = document.querySelector('.services_list li:nth-child(3)');

var delivery_button = document.querySelector('.delivery-button');
var guarantee_button = document.querySelector('.guarantee-button');
var credit_button = document.querySelector('.credit-button');

delivery_button.addEventListener("click", function () {
	delivery.classList.remove('li-unvisible');
	delivery.classList.add('li-visible');
	guarantee.classList.remove('li-visible');
	guarantee.classList.add('li-unvisible');
	credit.classList.remove('li-visible');
	credit.classList.add('li-unvisible');
	delivery_button.classList.add('background-black');
	delivery_button.classList.add('delete-after');
	guarantee_button.classList.remove('background-black');
	guarantee_button.classList.remove('delete-after');
	credit_button.classList.remove('background-black');
	credit_button.classList.remove('delete-after');
});

guarantee_button.addEventListener("click", function () {
	delivery.classList.remove('li-visible');
	delivery.classList.add('li-unvisible');
	guarantee.classList.remove('li-unvisible');
	guarantee.classList.add('li-visible');
	credit.classList.remove('li-visible');
	credit.classList.add('li-unvisible');
	delivery_button.classList.remove('background-black');
	delivery_button.classList.remove('delete-after');
	guarantee_button.classList.add('background-black');
	guarantee_button.classList.add('delete-after');
	credit_button.classList.remove('background-black');
	credit_button.classList.remove('delete-after');
});

credit_button.addEventListener("click", function () {
	delivery.classList.remove('li-visible');
	delivery.classList.add('li-unvisible');
	guarantee.classList.remove('li-visible');
	guarantee.classList.add('li-unvisible');
	credit.classList.remove('li-unvisible');
	credit.classList.add('li-visible');
	delivery_button.classList.remove('background-black');
	delivery_button.classList.remove('delete-after');
	guarantee_button.classList.remove('background-black');
	guarantee_button.classList.remove('delete-after');
	credit_button.classList.add('background-black');
	credit_button.classList.add('delete-after');
});

var pop_upForm = document.querySelector('.pop-up_form');
var buttonForPop_upForm = document.querySelector('.write-us-button');
var buttonToCloseForm = document.querySelector('.pop-up_close');

buttonForPop_upForm.addEventListener("click", function (evt) {
	evt.preventDefault();
	pop_upForm.classList.remove('pop-up_hidden');
});

buttonToCloseForm.addEventListener("click", function () {
	pop_upForm.classList.add('pop-up_hidden');
})

var pop_upMap = document.querySelector('.pop-up_map');
var buttonForPop_upMap = document.querySelector('.contacts img');
var buttonToCloseMap = document.querySelector('.map-close');

buttonForPop_upMap.addEventListener("click", function () {
	pop_upMap.classList.remove('pop-up_hidden');
});

buttonToCloseMap.addEventListener("click", function () {
	pop_upMap.classList.add('pop-up_hidden');
})