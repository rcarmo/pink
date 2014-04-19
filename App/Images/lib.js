/**
 * @module App.Images
 * @desc This is the application main app module (inherits from Ink.App)
 * @version 1
 */    

Ink.createModule('App.Images', '1', ['Ink.App_1', 'Ink.Plugin.Signals_1', 'Ink.Data.Binding_1'], function(App, Signal, ko) {
    var Module = function() {
        App.call(this, 'search', 'search'); 

        this.appTitle = 'Image search sample';
    };
    
    Module.prototype = new App();
    Module.constructor = Module;

    Module.prototype.listInvisibleRoutes = function() {
        return [
          {hash: 'search', module: 'App.Images.Search'},
          {hash: 'view', module: 'App.Images.View'}
        ];
    };
    
    Module.prototype.addCustomSignals = function() {
    	this.signals.viewPhoto = new Signal();
    };

    /*
     * Application startup logic
     * 
     */
    Module.prototype.ready = function() {
    	var self=this;
    	
    	Ink.requireModules(['App.Images.View'], function() {
            self.start();
    	});
    };

    return new Module();
});
