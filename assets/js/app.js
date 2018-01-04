$(document).ready(function(){

	$("#ingresa").click(function() {
		var hideLogin= $("#login").hide();
		var hideModal= $("#inicia").hide();
		var removeFade= $("#inicia").removeClass("modal fade");
		var showUser= $(".img-circle").show();

	});

//evento al apretar botón
	$("#post").click(function() {
	//guardar input
	var newReview= $("#mensajetxt").val();
	$("#mensajetxt").val(""); //limpia area

//apendding inputs
$(".contenedor").append("<div class='formcont'>"+
	"<h4>"+mensaje+"</h4>"+"</div");
	


	});
});