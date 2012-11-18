/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'Feed',
        'News'
    ],
    stores: [
        'Feeds',
        'News'
    ],
    views: [
        'Main',
        'Login',
        'Feeds',
        'News',
        'NewsDetails',
        'FeedEdit'
    ],
    name: 'RSS',
    controllers: [
        'Main',
        'Feeds'
    ],

    launch: function() {

        Ext.create('RSS.view.Main', {fullscreen: true});
    }

});
