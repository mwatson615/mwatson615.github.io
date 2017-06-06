
$(document).ready(function() {
	$(".showView").click(function(el) {
	$(".infoDiv").hide()
	showOne(el.target.hash);
	})
})

function showOne(target) {
		if (target === "#about-me" ) {
			$("#about-me").show("slow")
		} else if (target === "#projectId") {
			$("#projectId").show("slow")
		}
	}

$('.modal').modal({
	dismissible: true
})
