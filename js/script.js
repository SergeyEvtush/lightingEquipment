
$(document).ready(function(){
$('.slider').slick({
arrows:true,
dots:true,
infinite: true,
 slidesToShow: 2,
responsive:[
	{
	breakpoint: 690,
	settings:{
		slidesToShow: 1	
					},
	},
	{
		breakpoint: 520,
		settings:{
			arrows:false,
			slidesToShow: 1		
						},
			}
		] 
	}
);
$('.rentequipment__slider').slick({
										arrows:true,
										infinite: true,
										slidesToShow: 1,
										responsive:[
											{
											breakpoint: 615,
											settings:{
												arrows:false,
															},
											},
											
												] 
									});
								
});
//бургер
const iconMenu=document.querySelector('.menu__icon');
const menuBody=document.querySelector('.menu__list');
if(iconMenu)
{

	//при клике на menu__icon то есть на бургер(на саму иконку) присваиваем body класс _lock,а для иконки и для самого меню
	//добавляем им класс _active
iconMenu.addEventListener("click",function(e){
	document.body.classList.toggle('_lock');	
iconMenu.classList.toggle('_active');
menuBody.classList.toggle('_active');
});
}