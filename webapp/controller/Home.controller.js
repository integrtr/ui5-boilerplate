sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('ui5boilerplate.controller.Home', {
    onInit: function () {},

    /**
     * Press event handler for INTEGRTR logo
     */
    integrtrLogoPress: function () {
      window.open('https://www.integrtr.com', '_blank');
    },

    /**
     * Press event handler for GitHub logo
     */
    githubLogoPress: function () {
      window.open('https://github.com/integrtr/ui5-boilerplate', '_blank');
    },
  });
});
