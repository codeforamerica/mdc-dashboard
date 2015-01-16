$(document).ready(function() {
	
	var id = 'permit';	//set a default
	var globalLanguage;
	
	if($('#en').hasClass('active')) {
		
		globalLanguage = 'en';
		console.log("english is active", globalLanguage);
	
	} else {
		
		globalLanguage = 'es';
	}
	
	console.log('hello world, language: ', globalLanguage);
	
	//smart radio buttons
	$('.identifier').addClass('input_hidden');
	$('.faux-radio').click(function(e) {
		
		e.preventDefault();
		
		//toggle UI
		//pass ID to the rest of the form
		id = $(this).find('.identifier').attr('id');
		console.log('id:', id);
		
		if(globalLanguage == 'en') {
			
			setForm(id);
		
		} else {
			
			setFormEs(id);
		}
		
		
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
		
	}
	
	function setFormEs(id) {
		
		console.log("form ID spanish");
			switch (id) {
				
				case 'address':
				
					id = 'Favor de introducir una dirección';
					href = 'results-address-es.html'; //load results-address
					break;
					
				case 'folio':
				
					id = 'Favor de introducir un numero de Folio';
					href = 'results-address-es.html'; //load results-address
					break;
					
				default: 
					
					id = 'Favor de introducir un numero de ' + id;
					href = 'results-es.html'; //load results.html
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
			language = 'en';
		
		} else {
			
			$(this).addClass('active reverse');
		}
		
		newloc = loc.replace('-es.html','.html');
		console.log("EN clicked, language is ES, newloc should be .html", newloc);
		language = 'en';
			
		window.location.href = newloc;

	})
	
	$('#es').click(function() {
		
		if($(this).hasClass('active')) {
			
			$(this).removeClass('active');
			language = 'es';
		
		} else {
			
			$(this).addClass('active reverse');
		}
		
		console.log(loc, language);
		
		if(language == 'en') {
			
			//console.log("ES clicked, language is EN, newloc is -es.html");
			
			newloc = loc.replace('.html','-es.html');
			language == 'es';
			
			window.location.href = newloc;
			
		}
	})
	
	//ernie's toggle
	$("#expandtable tbody tr:even").addClass("toggle-row");
	$("#expandtable tbody tr:not(.toggle-row)").hide();	
	$("#expandtable tbody tr").click(function(){
	    $(this).next('tr').toggle();
	    // $(this).find(".arrow").toggleClass("up");
	});

	
})