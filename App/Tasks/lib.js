/**
 * @module App.Tasks
 * @desc This is the application main app module (inherits from Ink.App)
 * @version 1
 */    

Ink.createModule('App.Tasks', '1', ['Ink.App_1', 'Ink.Data.Binding_1', 'Ink.Plugin.Signals_1', 'Ink.Data.Grid_1', 'Ink.Data.AutoComplete_1'], function(App, ko, Signal) {
    
    // App constructor (only data initialization logic)
    var Module = function() {
        App.call(this); // Call the base initialization logic

        this.appTitle = 'My Tasks';
    };
    
    Module.prototype = new App();
    Module.constructor = Module;

    /*
     * Define routing maps
     * 
     */
    Module.prototype.listVisibleRoutes = function() {
        return [
          {isActive: ko.observable(true), caption: 'Todo', hash: 'home', module: 'App.Tasks.Home'},
          {isActive: ko.observable(true), caption: 'Completed', hash: 'completed', module: 'App.Tasks.Completed'},
          {isActive: ko.observable(true), caption: 'Incomplete', hash: 'incomplete', module: 'App.Tasks.Incomplete'}
        ];
    };

    Module.prototype.listInvisibleRoutes = function() {
        return [
          //{isActive: ko.observable(false), hash: 'dashboard\\?search=:search', module: 'App.Intra.Dashboard.ListAll', parentModule: 'App.Intra.Dashboard'},
        ];
    };
    

    /*
     * UI signals setup
     * 
     */
    Module.prototype.addCustomSignals = function() {
    };

    /*
     * Application startup logic
     * 
     */
    Module.prototype.navigateToStart = function() {
        var self=this;
        
        if (window.location.hash=='') {
            self.navigateTo('home');
        }
    };
    
    return new Module();
});
