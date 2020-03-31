

$(document).ready(function() {
	
	//Fade mobile quotes section 
    var quotesMobile = $(".quote-mobile");
    var quotesMobileIndex = 0;
    
    function showNextMobileQuote() {
      ++quotesMobileIndex;
      if (quotesMobileIndex === quotesMobile.length) {
        quotesMobileIndex = 0;
      }
      quotesMobile.eq(quotesMobileIndex).stop().fadeIn().addClass('animateIn').delay(4000).fadeOut(1000, showNextMobileQuote);
    }
    
    showNextMobileQuote();
	
	
    //Fade desktop quotes section 
    var quotesDesktop = $(".quote-desktop");
    var quotesDesktopIndex = 0;
    
    function showNextDesktopQuote() {
      ++quotesDesktopIndex;
      if (quotesDesktopIndex === quotesDesktop.length) {
        quotesDesktopIndex = 0;
      }
      quotesDesktop.eq(quotesDesktopIndex).stop().fadeIn().addClass('animateIn').delay(4000).fadeOut(1000, showNextDesktopQuote);
    }
    
    showNextDesktopQuote();
	
	
	/* Enable Privacy Pop-Up */
	
	$(function () {
		$('.privacy').magnificPopup({
			type: 'inline',
		});
	});
	
	
	/* Initialize AOS */

	AOS.init({duration: 800});

});

var snipe = $("#snipe").innerHeight();
				$("#wrapper").css("margin-top", snipe);

/* Recalibrate Wrapper Margin Based On Snipe Height */

$(window).on("load resize scroll",function(e){
				var snipe = $("#snipe").innerHeight();
				$("#wrapper").css("margin-top", snipe);
				
				/*var maxHeight = 0;
				$(".quote-desktop").each(function(){
				   var thisH = $(this).height();
				   if (thisH > maxHeight) { maxHeight = thisH; }
				});

				$(".quotator-wrapper").height(maxHeight);*/
			});