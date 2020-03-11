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

sheet.insertRule(".c-navbar { display: none!important; }", 0);
sheet.insertRule(".c-main-content { padding-top: 0; }", 0);
sheet.insertRule("dashboard-panels { display: none }", 0);
sheet.insertRule(".dashboard-heading { display: none!important }", 0);
sheet.insertRule(".search-container { display: none; }", 0);
sheet.insertRule(".sticky-container > div { top: 0!important; }", 0);
sheet.insertRule(".c-dashboard-toolbar__side-left .ui-button { display: none; }", 0);
sheet.insertRule("app-dashboard-main app-dashboard-controls { display: none; }", 0);