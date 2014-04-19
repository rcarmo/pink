Ink.createModule('App.Images.Search', '1', ['App.Images', 'Ink.Data.Binding', 'Ink.Net.JsonP_1'], function(app, ko, JsonP) {
    var Module = function() {
        var self=this;
        
        this.photos = ko.observableArray();
        this.noPhotos = ko.computed(function() {
        	return self.photos().length==0;
        });
        this.search = ko.observable('');
        this.searching = ko.observable(false);
        
        this.search.subscribe(this.searchChangeHandler.bind(this));
    };
    
    Module.prototype.searchChangeHandler = function(search) {
    	if (this.timer) {
    		window.clearTimeout(this.timer);
    	}
    	
    	if (search.length > 2) {
        	this.timer = window.setTimeout(this.doSearch.bind(this, search), 1000);
    	}
    };
    
    Module.prototype.doSearch = function(search) {
    	var self=this;
		var uri = 'http://services.sapo.pt/Photos/JSON2?u='+search;

		this.searching(true);
		this.photos([]);
		
		new JsonP(uri, {
	        params: {limit: '40'}, 
	        onSuccess: function(data) {
	            var aItems = data.rss.channel.item;
	            var photos = [];
	            var i;

	            if (aItems) {
		            for(i=0, total=aItems.length; i < total; i++) {
		                photos.push({
		                	tbUrl: aItems[i]['media:thumbnail'][2].url,
		                	url: aItems[i]['media:content'].url,
		                	title: aItems[i].title,
		                	clickHandler: self.viewPhoto.bind(self)
		                });
		            }
	            }
	            
	    		self.searching(false);
	            self.photos(photos);
	        }, 
	        onFailure: function() {
	    		self.searching(false);
	        	app.showErrorToast('Failure in photos service');
	        }
	    });
    };
    
    Module.prototype.viewPhoto = function(photo) {
    	app.signals.viewPhoto.dispatch(photo);
    };

    return new Module();
});
