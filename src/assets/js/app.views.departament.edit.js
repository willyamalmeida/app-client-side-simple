app = { views: { departament: {} } };
app.views.departament.edit = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.init();
};

app.views.departament.edit.prototype = {
    init: function() {       
        this.initEvents();
    },

    initEvents: function() {        
    }
}