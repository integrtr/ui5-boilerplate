sap.ui.define(['sap/ui/core/util/MockServer'], (MockServer) => {
  return {
    init() {
      // create
      var oMockServer = new MockServer({
        rootUri: '', // rootUri and manifest dataSource uri should be same
      });
      var oUriParameters = jQuery.sap.getUriParameters();
      // configure
      MockServer.config({
        autoRespond: true,
        autoRespondAfter: oUriParameters.get('serverDelay') || 1000,
      });
      // simulate
      let sPath = jQuery.sap.getModulePath('ui5boilerplate.localService');
      oMockServer.simulate(`${sPath}/metadata.xml`, `${sPath}/mockdata`);
      // start
      oMockServer.start();
    },
  };
});
