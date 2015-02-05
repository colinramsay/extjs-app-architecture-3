/**
 * @class CultivateCode.ux.form.MetaPanel
 * @extends Ext.form.Panel
 * Description
 */
Ext.define('CultivateCode.ux.form.MetaPanel', {
    extend: 'Ext.form.Panel',

    // mixins: [
    //     // Contains methods:
    //     // - buildItemsFromRecord
    //     // - buildFieldsetsFromRecord
    //     // - buildItemForField
    //     'CultivateCode.ux.form.Builder',

    //     // - isStateAvailable
    //     // - addPersistanceEvents
    //     // - persistFieldOnChange
    //     // - restorePersistedForm
    //     // - clearPersistance
    //     'CultivateCode.ux.form.Persistance'
    // ],

    initialize: function() {
        this.callParent(arguments);
        this.addPersistanceEvents();
    },

    loadRecord: function(model) {
        this.buildItemsFromRecord(model);
        this.callParent(arguments);
    },

    buildItemsFromRecord: function(model) {
        // Implementation
    },

    buildFieldsetsFromRecord: function(model){
        // Implementation
    },

    buildItemForField: function(field){
        // Implementation
    },

    isStateAvailable: function(){
        // Implementation
    },

    addPersistanceEvents: function(){
        // Implementation
    },

    persistFieldOnChange: function(){
        // Implementation
    },

    restorePersistedForm: function(){
        // Implementation
    },

    clearPersistance: function(){
        // Implementation
    }
});