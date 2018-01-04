$(document).ready(function(){

	$("#ingresa").click(function {
		var showUser= $(".img-circle").show();
		var hideLogin=$("login").hide();
	});

//evento al apretar botón
	$(".send").click(function() {
	//guardar input
	var mensaje= $("#mensajetxt").val();
	$("#mensajetxt").val(""); //limpia area

//apendding inputs
$(".contenedor").append("<div class='formcont'>"+
	"<h4>"+mensaje+"</h4>"+"</div");
	


	});
});