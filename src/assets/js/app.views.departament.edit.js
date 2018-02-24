app = { views: { departament: {} } };
app.views.departament.edit = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.db = new Store("departaments");

    this.init();
};

app.views.departament.edit.prototype = {
    init: function() {    
        this.$elSave = this.$el.parentElement.querySelector("[name='save']");
        this.$elDelete = this.$el.parentElement.querySelector("[name='delete']");
        this.$elCancel = this.$el.parentElement.querySelector("[name='cancel']");

        this.$elId = this.$el.parentElement.querySelector("[name='id']");
        this.$elDescription = this.$el.parentElement.querySelector("[name='description']");

        if(location.search){
            this.dataFill();
        }

        this.initEvents();
    },

    dataFill: function() {
        var props = window.location.search.replace("?", "").split("&");
        var data = props.reduce(function(acc, x) { 
            var y = x.split("="); 
            acc[y[0]] = y[1];             
            return acc; }, {});

        this.$elId.value = data.id;

        var isNew = Number(data.id) === 0;

        if(!isNew) {
            var item = this.db.getItemById(data.id);
            this.$elDescription.value = item.description;
        }

        this.$elId.disabled = true;
        this.$elId.readOnly = true;
        this.$elDescription.focus();
        this.$elDelete.hidden = isNew;
    },

    save: function() {        
        var departament = {
            id: Number(this.$elId.value),
            description: this.$elDescription.value
        };

        this.db.save(departament, function(item) {
            item.description = departament.description;
        });
    },

    delete: function() {
        this.db.removeItem(Number(this.$elId.value));
    },

    initEvents: function() {       
        var _this = this;
        
        this.$elSave.addEventListener("click", function() {
            _this.save();
        });

        this.$elDelete.addEventListener("click", function() {
            _this.delete();
        });
    }
}