app = { views: { departament: {} } };
app.views.departament.edit = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.db = new db("departaments");

    this.init();
};

app.views.departament.edit.prototype = {
    init: function() {    
        this.$elSave = this.$el.parentElement.querySelector("[name='save']");
        this.$elDelete = this.$el.parentElement.querySelector("[name='delete']");
        this.$elCancel = this.$el.parentElement.querySelector("[name='cancel']");

        this.$elId = this.$el.parentElement.querySelector("[name='id']");
        this.$elDescription = this.$el.parentElement.querySelector("[name='description']");

        this.initEvents();
    },

    save: function() {        
        let departament = {
            id: this.$elId.value,
            description: this.$elDescription.value
        };

        this.db.save(departament);
    },

    initEvents: function() {       
        let _this = this;
        
        this.$elSave.addEventListener("click", function() {
            _this.save();
        });
    }
}