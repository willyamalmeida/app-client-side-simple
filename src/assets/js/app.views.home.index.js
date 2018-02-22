app.views.home.index = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.init();
};

app.views.home.index.prototype = {
    init: function() {
        this.$elDepartament = this.$el.parentElement.querySelector("a[href='#departament']");
        this.$elEmployee = this.$el.parentElement.querySelector("a[href='#employee']");
    
        this.initEvents();
    },

    initEvents: function() {        
        this.$elDepartament.addEventListener("click", function() {
            
        });

        this.$elEmployee.addEventListener("click", function() {
            
        });
    }
}