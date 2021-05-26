sap.ui.define(['sap/ui/core/UIComponent'], (UIComponent) => {
  return UIComponent.extend('ui5boilerplate.Component', {
    metadata: {
      manifest: 'json',
    },

    /**
     * The component is initialized by UI5 automatically during the
     * startup of the app and calls the init method once.
     * @public
     * @override
     */
    init() {
      // Initialize UI component
      // eslint-disable-next-line prefer-rest-params
      UIComponent.prototype.init.apply(this, arguments);

      // create the views based on the url/hash
      this.getRouter().initialize();
    },
  });
});
