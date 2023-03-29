/*sap.ui.define([

], function () {
	"use strict";
	alert("UI5 is ready");
});*/

// Controls Code
/*
sap.ui.define([
	"sap/m/Text"

], function (Text) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

});*/
/*
// XML

sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	 "sap/m/Text"
], function (XMLView) {
	"use strict";
new Text({
		text: "Hello World"
	}).placeAt("content");
	/*XMLView.create({
		viewName: "walkthrough.webapp.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});

/* Schritt 5 Controllers*/
/*
sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	console.log("test*");

	XMLView.create({
		viewName: "walkthrough.webapp.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});

*/
/*Schritt 6 Modules*/ 

/*Schritt 6*/ 
/*
sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "walkthrough.webapp.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});
*/

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	new ComponentContainer({
		name: "walkthrough.webapp",
		settings : {
			id : "webapp"
		},
		async: true
	}).placeAt("content");
});
 