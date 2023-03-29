/*
sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("walkthrough.webapp.controller.App", {
       onShowHello : function () {
          // show a native JavaScript alert
          alert("Hello there");
       }
    });
 });
 */

 /* Schritt 6
 sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("walkthrough.webapp.controller.App", {

		onShowHello : function () {
			MessageToast.show("Hello World");
		}
	});

});
*/
/*--schritt 7
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("walkthrough.webapp.controller.App", {

		onInit : function () {

			// set data model on view
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},

		onShowHello : function () {
			MessageToast.show("Hello World");
		}
	});

});
*/
/* Schritt 8*/
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("walkthrough.webapp.controller.App", {
     onInit : function () {
         // set data model on view
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
         // set i18n model on view
         var i18nModel = new ResourceModel({
            bundleName: "walkthrough.webapp.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
      }
   });
});
/*
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("walkthrough.webapp.controller.App", {
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
      }
   });
});
*/

