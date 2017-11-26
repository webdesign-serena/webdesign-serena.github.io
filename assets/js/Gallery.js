$("document").ready(function(){
	// $("#lightbox").css("display", "none");

	// // or
	// jQuery Function Number 1
	$("#lightbox").hide()

	// jQuery Function Number 2
	$(".item").click(function(){
		let imageURL = $(this).attr("src")
		// jQuery Function Number 3
		$("#image").attr("src", imageURL);
		// jQuery Function Number 4
		$("#lightbox").show();
	})

	$("#close").click(function(){
		$("#lightbox").hide()
	})// jQuery Function Number 5

	$("#close").css("cursor", "pointer");

	$("#overlay").click(function(){
		$("#lightbox").hide();
	})

})