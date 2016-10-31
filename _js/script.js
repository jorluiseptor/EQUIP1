/* Author: 
Jorge Sepulveda, jorluiseptor.com
*/

$(document).ready(function() {
	
		
	//to enable corners on any element with the corner class
		//$(".corner").corner("5px");
		
	//adds class 'alt' for every other table row
		$('table tr:even').addClass('alt');
	
	//adds class of 'over' to each table row when the mouse is over that row. will remove on mouseout	
		$("table tr").mouseover(function() {$(this).addClass("over");}).mouseout(function() {$(this).removeClass("over");});	
	
	
		
		
	//tipsy
		$('.hasfootnote').tipsy({html: true});	
		
		
	//set height of section on homepage the same as height of viewport
	//	$('#home section').height($(window).height()-35);	
		
		
	
	//creates table of content automatically grabbing the H1,h2,h3	
	//Table of Contents jQuery Plugin
	//Version 0.8
	//Written by Doug Neiner 
	
	$("#toc ul").tableOfContents();

	//adds title to the TOC
		$('#toc').prepend('<h1>Page Contents</h1>');
		//adds "jump to chapter to the TOC for the pages under PLC
		$('body[id^="plc-"] #toc ul').append('<h1>Jump to Chapter</h1>');
		
	//scroll to
		
		$.localScroll({hash:true,margin:true, offset:{top:-35}});
		//$.localScroll({hash:true,margin:true, offset:{top:0}});
		//$.scrollTo('#introduction', 3000, {queue:true} );
		


	//kwicks library
	/*
			$().ready(function() {
				
				$('#plc-index nav ul').kwicks({
					max : 300, //how wide they will expand
					spacing : 5 //the padding between boxes in px
				});
			});
	*/
	
	//in the TOC hides the headings 2 and 3 levels	
		$("#toc li ul").hide();
		
	//show sub-levels on hover
	/*
		$("#toc li").hoverIntent(
			function () { 
				//$(this).clearQueue();
				clearTimeout($(this).data('timeout'));
				$(this).addClass("current");
				$(".current > ul").slideDown();	
				  
			  }, 
			  function () {
				 $(this).removeClass("current");
				 $(this).find("ul").slideUp();
				 
			  }
		);
	//expand the TOC on hover 
		$("#toc").hover(
			function () { 
			$(this).clearQueue();
			clearTimeout($(this).data('timeout'));
				 
				    $(this).animate({
					    width: "31.25em",
					    opacity:"100%"
					  }, 1500 );	
			  }, 
			  function () {
				  var t = setTimeout(function() {
					   $('li.icon > ul').slideUp('fast');
				    }, 2000);
				  $(this).delay(1000).animate({
					    width: "12.5em",
					    opacity:".8" 
					  }, 1500 );	
				  }
		);
		*/
		
		
	//display footnote next to words when clicked.
		//$('span.hasfootnote').click();
		
});




















