document.getElementById('toggle-navbar').onclick = function(){
	this.classList.toggle("opened");
};


$(document).ready(function() {

	$("#navbar a").on('click', function(event) {
		event.preventDefault();
		$id = '#section-' + $(this).attr('id');
		scrollToAnchor($id);
	});
	
	function scrollToAnchor(anchor_id){
		$anchor = $(anchor_id);
	    $('html,body').animate({scrollTop: $anchor.offset().top},'slow');
	};

	function makePlanningResponsive() {
		$firstTds = $("#planning tr td:first-child");
		console.log($firstTds);
	};
	makePlanningResponsive();
});


function makeTablesResponsive() {
	var tds = document.getElementByTagName("td");
	for (var i = 0; i < tds.length; i++) {
		var td = tds[i];
		if (td.hasAttribute("headers")) {
			var th = document.getElementById(td.getAttribute("headers"));
			if (th != null) {
				td.setAttribute("data-headers", th.textContent);
			};
		};
	};
};
