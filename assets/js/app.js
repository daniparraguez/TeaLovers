$(document).ready(function(){

	$("#ingresa").click(function() {
		var hideLogin= $("#login").hide();
		var showUser= $(".img-circle").show();

	});

//evento al apretar botón
	$("#post").click(function() {
	//guardar input
	var newReview= $("#review").val();
	$("#review").val(""); //limpia area
	var newType= $("#type").val();
	$("#type").val(""); //limpia area
	var newImg= $("#urlimg").val();
	$("#urlimg").val(""); //limpia area
	var date= new Date;

//apendding review de té input
$(".post").append("<div class='well'>"+"<div class='media'>"+
"<a class='pull-left' href='#'>"+
"<img class='media-object' src="+newImg+">"+"</a>"+"<div class='media-body'>"+
"<h4 class='media-heading'>"+newReview+"</h4>"+"<p class='text-left'>User</p>"+
"<p class='new-review'></p>"+"<ul class='list-inline list-unstyled'>"+
"<li><span><i class='glyphicon glyphicon-calendar'></i>" +date+"</span></li>"+
"<li>|</li><span><i class='glyphicon glyphicon-comment'></i></span>"+
"<li>|</li><li><span class='glyphicon glyphicon-star'></span>"+
"<span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'>"+
"</span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'>"+
"</span></li><li>|</li></ul></div></div></div></div>");

//apendding tipo de té input al trending
$("#trending").append("<a href='#'' class='list-group-item'>#"+newType+"</a>");

	});
});