$(document).ready(function() {
	
	var id = 'permit';	//set a default
	
	//smart radio buttons
	$('.identifier').addClass('input_hidden');
	$('.faux-radio').click(function(e) {
		
		e.preventDefault();
		
		//toggle UI
		//pass ID to the rest of the form
		id = $(this).find('.identifier').attr('id');;
		console.log('id:', id);
		
		setForm(id);
		
		$.smoothScroll({
		    
		    scrollTarget: '#identifier-header'
		});
		
	})
	
	function setForm(id) {
		
		switch (id) {
			
			case 'address':
			
				id = 'Please enter an address.';
				href = 'results-address.html'; //load results-address
				break;
				
			case 'folio':
			
				id = 'Please enter a ' + id + ' number.';
				href = 'results-address.html'; //load results-address
				break;
				
			default: 
				
				id = 'Please enter a ' + id + ' number.';
				href = 'results.html'; //load results.html
				break;
		}
		
		$('#identifier-header').replaceWith('<h2 id="identifier-header">' + id + '</h2>');
			var href;
		
		
		$('#submit-href').attr('href', href);
	}
	
	$('.faux-radio').mouseover(function() {
		
		$(this).find('.icon-green').removeClass('hide');
		$(this).find('.icon-white').addClass('hide');
	})
	
	$('.faux-radio').mouseout(function() {
		
		$(this).find('.icon-green').addClass('hide');
		$(this).find('.icon-white').removeClass('hide');
	})
	
	var language = 'en';
	var loc = window.location.href;
	var newloc;
	
	$('#en').click(function() {
		
		if($(this).hasClass('active')) {
			
			$(this).removeClass('active');
		
		} else {
			
			$(this).addClass('active reverse');
		}
		
		if(language == 'es') {
			
			language = 'en';
			newloc = loc.replace('-es.html','.html');
			
			window.location.href = newloc;
			
			
			/*$('body').load( newloc, function() {
			  alert( "Load was performed." );
			});*/		
		}
		
		console.log(loc, language, newloc);
	})
	
	$('#es').click(function() {
		
		if($(this).hasClass('active')) {
			
			$(this).removeClass('active');
		
		} else {
			
			$(this).addClass('active reverse');
		}
		
		console.log(loc, language);
		
		if(language == 'en') {
			
			language == 'es';
			newloc = loc.replace('.html','-es.html');
			
			window.location.href = newloc;
			
			console.log(window.location.href);
			/*$('body').load( newloc, function() {
			  alert( "Load was performed." );
			});*/
		}
	})
	
})