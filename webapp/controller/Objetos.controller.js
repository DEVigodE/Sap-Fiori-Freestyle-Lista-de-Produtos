sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("br.com.nel.freestyle.ibm.report.products.controller.Objestos", {
        onInit: function () {

        },
        onClickSetText: function () {
            var oTitle = this.getView().byId("title1");
            var sText = oTitle.getText();
            oTitle.setText("Texto Alterado");
            alert("O texto do header é: " + sText);
        }
    });
});
