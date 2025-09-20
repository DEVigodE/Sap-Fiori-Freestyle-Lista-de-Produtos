/*global QUnit*/

sap.ui.define([
	"br/com/nel/freestyle/ibm/report/products/controller/Lista.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Lista Controller");

	QUnit.test("I should test the Lista controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
