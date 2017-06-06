


function showOne(divId) {
	console.log("hi there")
	$(".showInfo").each(function() {
		if ($(this).attr("id") == divId) {
			$(this).show("slow")
		} else {
			$(this).hide(600);
		}
	})
}
$("#about-link").click(function() {
showOne();
})

$('.modal').modal({
	dismissible: true
})
