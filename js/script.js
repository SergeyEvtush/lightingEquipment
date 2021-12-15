
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
