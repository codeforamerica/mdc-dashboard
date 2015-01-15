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
		
		switch (id) {
			
			case 'address':
			
				id = 'Please enter an address.';
				break;
				
			default: 
				
				id = 'Please enter a ' + id + ' number.';
				break;
		}
		
		$('#identifier-header').replaceWith('<h2 id="identifier-header">' + id + '</h2>');
	}
});