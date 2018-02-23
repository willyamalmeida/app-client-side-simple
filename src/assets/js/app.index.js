app = {};

app.index = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.init();
};

app.index.prototype = {
    init: function() {        
        this.initEvents();
    },

    initEvents: function() {
    }
}