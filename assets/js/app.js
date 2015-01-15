$(document).ready(function() {
	
	//smart radio buttons
	$('.identifier').addClass('input_hidden');
	$('.faux-radio').click(function(e) {
		
		e.preventDefault();
		
		//toggle UI
		//pass ID to the rest of the form
		var id = $(this).find('.identifier').attr('id');;
			//id = id
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
	
	$('.faux-radio').mouseover(function() {
		
		$(this).find('.icon-green').removeClass('hide');
		$(this).find('.icon-white').addClass('hide');
	})
	
	$('.faux-radio').mouseout(function() {
		
		$(this).find('.icon-green').addClass('hide');
		$(this).find('.icon-white').removeClass('hide');
	})
});