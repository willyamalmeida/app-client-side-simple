app = { views: { employee: {} } };

app.views.employee.index = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.init();
};

app.views.employee.index.prototype = {
    init: function() {       
        this.initEvents();
    },

    initEvents: function() {        
    }
}