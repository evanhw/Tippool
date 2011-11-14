Ext.define('Tippool.controller.Main', {
    extend: 'Ext.app.Controller',
	
    views : [
        'Main'
    ],
    init: function() {
		this.getView('Main').create();
    }
});
