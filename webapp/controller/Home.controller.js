sap.ui.define(['ui5boilerplate/controller/Base.controller'], (BaseController) => {
  return BaseController.extend('ui5boilerplate.controller.Home', {
    onInit() {},

    /**
     * Press event handler for INTEGRTR logo
     */
    integrtrLogoPress() {
      window.open('https://www.integrtr.com', '_blank');
    },

    /**
     * Press event handler for GitHub logo
     */
    githubLogoPress() {
      window.open('https://github.com/integrtr/ui5-boilerplate', '_blank');
    },
  });
});
