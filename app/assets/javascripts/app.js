$(document).ready(function(){
	$("#nav").hide();
	$("#menu").hide();


	$("#restaurant-button").on("click", function(){
		$(".hide").hide();
		$("#menu").slideDown();

	})

})