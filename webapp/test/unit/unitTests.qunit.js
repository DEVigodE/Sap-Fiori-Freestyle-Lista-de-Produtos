/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"br/com/nel/freestyle/ibm/report/products/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
