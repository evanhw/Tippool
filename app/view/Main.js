Ext.define('Tippool.view.Main', {
	id: 'mainWindow',
	extend: 'Ext.Container',
	config: {
		fullscreen: true,
		layout: 'hbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
					{ 
						xtype: 'button', 
						text: 'Scale'
					},
					{ 
						xtype: 'button', 
						text: 'Friends'
					},
                    { xtype: 'spacer', width: 50 },
                    {
                        xtype: 'button',
                        iconMask: true,
                        iconCls: 'refresh'
                    }
                ]
            }
		]
	}
});