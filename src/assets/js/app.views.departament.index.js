app = { views: { departament: {} } };
app.views.departament.index = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.init();
};

app.views.departament.index.prototype = {
    init: function() {       
        this.initEvents();
    },

    initEvents: function() {        
    }
}