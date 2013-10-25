Ink.createModule('App.Tasks.Incomplete', '1', ['App.Tasks', 'Ink.Data.Binding_1'], function(app, ko) {
    var Module = function() {
        this.moduleName = 'App.Tasks.Incomplete';

        this.tasks = [];
        
        this.tasksModel = new ko.simpleGrid.viewModel({
            data: this.tasks,
            pageSize: 20,
            columns: [
              {headerText: 'Incomplete', rowText: 'caption'},
            ]
        });
    };

    Module.prototype.initialize = function() {
    };

    Module.prototype.afterRender = function() {
        document.getElementById('mainMenuDropDown').style.display = 'none';  
      };
    
    return new Module();
});
