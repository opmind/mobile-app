var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement("style");

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute("media", "screen")
	// style.setAttribute("media", "only screen and (max-width : 1024px)")

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();

sheet.insertRule("body { background: red!important; }", 1);

// window.onload = function(){
    // var style = document.createElement('style');
    // style.innerHTML = `
    // .c-navbar {
    // display: none;
    // }
    // `;
    // document.head.appendChild(style);
// };