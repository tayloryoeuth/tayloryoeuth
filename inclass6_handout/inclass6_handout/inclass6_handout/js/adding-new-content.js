$(function() {
	$("ul").before("<p> Just Updated </p>");

	$("li.hot").prepend("+");

	var $new = $("li:last").after().append("gluten-free soy sauce");
	$("li:last").after($new);

});
