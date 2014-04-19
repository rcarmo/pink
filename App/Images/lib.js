/**
 * @module App.Images
 * @desc This is the application main app module (inherits from Ink.App)
 * @version 1
 */    

Ink.createModule('App.Images', '1', ['Ink.App_1', 'Ink.Data.Binding_1', 'Ink.Plugin.Signals_1'], function(App, ko, Signal) {
    var Module = function() {
        App.call(this, 'search', 'search'); 

        this.appTitle = 'Image search sample';
    };
    
    Module.prototype = new App();
    Module.constructor = Module;

    Module.prototype.listInvisibleRoutes = function() {
        return [
          {hash: 'search', module: 'App.Images.Search'},
          {hash: 'view\\?url=:url', module: 'App.Images.View'}
        ];
    };
    
    return new Module();
});
