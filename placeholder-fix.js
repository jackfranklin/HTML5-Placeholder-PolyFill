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
        var origColours = {};
        for(var i = 0; i < inputs.length; i++)
        {
            var curInput = inputs[i];
            console.log(curInput);
            origColours[i] = curInput.style.color;
            if(curInput.getAttribute("type") !== "text") break;
            curInput.setAttribute("value", curInput.getAttribute("placeholder"));
            curInput.style.color = "#585858";

            curInput.onfocus = function() {
                console.log("Focused: ", this);
                if(this.getAttribute("value") === this.getAttribute("placeholder")) {
                    this.setAttribute("value","");
                    this.style.color = origColours[i];
                }
            }
            curInput.onblur = function() {
                if(this.getAttribute("value") === "") {
                    this.setAttribute("value", this.getAttribute("placeholder"));
                    this.style.color = "#585858";
                }
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
