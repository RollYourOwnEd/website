$(window).scroll(function() {
    var scrollHeight = $(window).scrollTop();
    if(scrollHeight  > 0) {
        $("a.back-to-top-button").addClass("show")
    }
	else {
	 	$("a.back-to-top-button").removeClass("show")
	}
});

/*----------------------------------------------------
ADD CLASS "HIGHLIGHTED" TO THE ACTIVE PARENT MENU ITEM
----------------------------------------------------*/

$("ul.nav-child").hover(parentColour, parentColour);
	function parentColour(){
	$(this).parent().toggleClass("highlighted");
}

function supportsPlaceholder() {
  return 'placeholder' in document.createElement('input');
}

function radioCheckBoxWrapper() {
	$("input:radio, input:checkbox")
	$("input:radio, input:checkbox").not(".radio-checkbox-wrapper input:radio, .radio-checkbox-wrapper input:checkbox").wrap("<div class='radio-checkbox-wrapper'></div>").after("<div class='radio-checkbox-dummy'></div>");
}

function inputTypeFile() {
	$("input:file").not(".input-file-wrapper input:file").wrap("<div class='input-file-wrapper'>Select file</div>");
	$(".input-file-wrapper").after("<div class='clr'></div><p class='selected-file'>Selected file: None selected</p>");
}

function rotateImages() {
  var oCurrentPhoto = jQuery("div.slide.current");
  var oNextPhoto = oCurrentPhoto.next("div.slide");
  if (oNextPhoto.length == 0)
    oNextPhoto = jQuery("div.slide:first");
    
  oCurrentPhoto.removeClass("current").addClass("previous");    
  oNextPhoto.css({opacity: 0.0}).addClass("current")
    .animate({opacity: 1.0}, 2000,
      function() {
        oCurrentPhoto.removeClass("previous");
      });
}


$(document).ready(function() {
  	radioCheckBoxWrapper();
  	inputTypeFile();
  	$("a.back-to-top-button").attr("href","javascript: void(0)");
  	$("input:file").change(function() {
		var selectedFile = jQuery(this).val().split('\\').pop();;
	  	$(this).parent().siblings('p.selected-file').html("Selected file: <span class='file-name'>" + selectedFile + "</span>");
	  	$(this).parent().addClass('file-selected');
	});
	$("a.back-to-top-button").click(function(event) {
		event.preventDefault();
		$("html, body").animate({"scrollTop": "0px"}, 100);
	});
	$(function() {
	  setInterval("rotateImages()", 5000);
	});
	
	$(".user-menu-icon").click(function(e) {
		$(".user-menu").toggleClass("show");
		$(this).toggleClass("active");
		e.stopPropagation();
	});

	$(".user-menu ul li a").each(function(e) {
		var href = $(this).attr('href').split('/');
		var slug = href[href.length-1];
	    $(this).addClass(slug);
	})
	

	$(document).click(function(e) {
	    $(".user-menu").removeClass("show");
	    $(this).removeClass("active");
	});

	$(".user-menu").click(function(e) {
	    e.stopPropagation();
	});

	$("div.messages").prepend("<span class='icon'></span>");

	//Add scroll top behaviour when accordion item is opened. Must add class 'open' in addition to the classes added by jQuery ui, because of the order in which the code is run.
	$(".ui-accordion .ui-accordion-header.ui-state-active").addClass("open");
	$(".ui-accordion .ui-accordion-header.ui-state-default").on('click', function(){
		if (!$(this).hasClass("open")) {
			var scrollBarPosition = $(this).offset().top - 15;
        	$('html,body').animate({scrollTop: scrollBarPosition}, 300);
		}
		$(this).toggleClass("open");
		
    }); 
});




