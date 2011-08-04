#HTML5 Placeholder PolyFill
Firstly, I know this is nothing new and I'm sure a lot of other people have written this kind of script before, but I wrote this a while back and finally got round to chucking it on Github, much for my sake as well as anyone else's.

#Usage
The file placeholder-fix.js comes with 2 versions of the code, a jQuery version and a pure JS version. Include the file and then delete the version you're not using. If you're using the non-jQuery version, you need to tell the function to run, probably on `window.onload` :

    window.onload = function() {
        placeholderFix();
    }

If you're using the jQuery version, you just need to include the file. *No extra coding is needed.*

#Current Issues
Things I will be fixing in the future

1. Only works on inputs of type 'text', none of the new fields types added in HTML5 (email, tel, etc)

2. Should be re-factored into a jQuery extension.

3. Would also like to branch into a non-jQuery version too. - **DONE**

#Suggestions?
Create an issue here or tweet me @Jack_Franklin
