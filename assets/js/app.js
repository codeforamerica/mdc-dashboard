$(document).ready(function() {
	
	console.log("hello world");
	
	//smart radio buttons
	$('.identifier').click(function(e) {
		
		e.preventDefault();
		
		//toggle UI
		//pass ID to the rest of the form
		var id = $(this).attr('id');
		console.log('id:', id);
		
		setForm(id);
		
	})
	
	function setForm(id) {
		
		$('#identifier-header').text(id);
	}
});