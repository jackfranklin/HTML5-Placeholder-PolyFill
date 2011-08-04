/*
 * Detects support for HTML 5 placeholders and provides a jQuery fallback for "faking" placeholders
 * Author: Jack Franklin
 * Credit: Idea taken from looking at code on http://procssforhightrafficwebsites.com/code/index.html
 
 */

/*
 * Instructions for Use:
 * This file contains a jQuery & JavaScript ONLY version. Include this file in your page and DELETE the version you are not using. Full instructions on usage are available on the Github repo:
 * https://github.com/jackfranklin/HTML5-Placeholder-PolyFill
 */

//JavaScript only Version

var placeholderFix = function() {
    
    if(!('placeholder' in document.createElement("input"))) {
        var inputs = document.getElementsByTagName("input"); 
        for(var i = 0; i < inputs.length; i++)
        {
            inputs[i].setAttribute("data-initial-colour",inputs[i].style.color);
            if(inputs[i].getAttribute("type") !== "text") break;
            inputs[i].setAttribute("value", inputs[i].getAttribute("placeholder"));
            inputs[i].style.color = "#585858";

            inputs[i].onfocus = function() {
                (function(theInput) {
                    console.log(theInput);
                    if(theInput.getAttribute("value") === theInput.getAttribute("placeholder")) {
                        theInput.setAttribute("value","");
                        theInput.style.color = theInput.getAttribute("data-initial-colour");
                    }

                })(this);
                
            }
            inputs[i].onblur = function() {
                (function(theInput) {
                    if(theInput.getAttribute("value") === "") {
                        theInput.setAttribute("value", theInput.getAttribute("placeholder"));
                        theInput.style.color="#585858";
                    }
                })(this);

            }
        }

    }

}



//jQuery Version
/*
(function($) {
	$(function() {
		if(!('placeholder' in document.createElement("input"))) { //don't do any work if we don't have to!
			var inputs = $("input[type='text']"),
				origColour = inputs.eq(0).css("color");

			inputs
				.each(function(i) {
					var $t = $(this);
					$t.val($t.attr("placeholder")).css("color", "#585858");
				})
				.focus(function() {
					var $t = $(this);
					if($t.val() === $t.attr("placeholder")) $t.val('').css("color", origColour);
				})
				.blur(function() {
					var $t = $(this);
					if($t.val() === '') {
						$t.val($t.attr("placeholder")).css("color", "#585858");
					} 
				})
		}
	})

})(jQuery);
*/
