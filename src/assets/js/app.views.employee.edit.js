app = { views: { employee: {} } };
app.views.employee.edit = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.db = new Store("employees");

    this.init();
};

app.views.employee.edit.prototype = {
    init: function() {    
        this.$elSave = this.$el.parentElement.querySelector("[name='save']");
        this.$elDelete = this.$el.parentElement.querySelector("[name='delete']");
        this.$elCancel = this.$el.parentElement.querySelector("[name='cancel']");

        this.$elId = this.$el.parentElement.querySelector("[name='id']");
        this.$elName = this.$el.parentElement.querySelector("[name='name']");
        this.$elDepartament = this.$el.parentElement.querySelector("[name='departament']");

        this.setDepartaments();

        if(location.search){
            this.dataFill();
        }

        this.initEvents();
    },

    setDepartaments: function() {
        var departaments = new Store("departaments").get();
        var options = departaments.reduce(function(opts, departament){
            opts = opts
              .concat("<option value='")
              .concat(departament.id)
              .concat("'>")
              .concat(departament.description)
              .concat("</option>");
            return opts;
        }, "");

        this.$elDepartament.innerHTML = "<option value='0'></option>".concat(options);
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
            this.$elName.value = item.name;
            
            var elOption = this.$elDepartament.parentElement.querySelector("option[value='" + item.departament.id + "']");
            
            if(elOption){
                elOption.selected = true;
            }
        }

        this.$elId.disabled = true;
        this.$elId.readOnly = true;
        this.$elName.focus();
        this.$elDelete.hidden = isNew;
    },

    valid: function(employee) {
        if (!employee.name) {
            var msg = "Name is required";
            alert(msg);
            throw(msg);
        }

        if (!employee.departament) {
            var msg = "Departament is required";
            alert(msg);
            throw(msg);
        }
    },

    save: function() {           
        var employee = {
            id: Number(this.$elId.value),
            name: this.$elName.value,
            departament: {}     
        };

        var idDepartament = this.$elDepartament.selectedOptions[0].value;
        var departament = new Store("departaments").getItemById(idDepartament);
        employee.departament = departament;
        
        this.valid(employee);

        this.db.save(employee, function(item) {
            item.name = employee.name;
            item.departament = employee.departament;
        });
    },

    delete: function() {
        this.db.removeItem(Number(this.$elId.value));
    },

    goIndex: function() {
        window.location = "index.html";
    },

    initEvents: function() {       
        var _this = this;
        
        this.$elSave.addEventListener("click", function() {
            _this.save();
            _this.goIndex();
        });

        this.$elDelete.addEventListener("click", function() {
            _this.delete();
            _this.goIndex();
        });

        this.$elCancel.addEventListener("click", function() {         
            _this.goIndex();
        });
    }
}