app = { views: { departament: {} } };
app.views.departament.index = function($el) {
    if (!$el) {
        throw("Element undefined");
    }
    
    this.$el = $el;
    this.db = new db("departaments");

    this.init();
};

app.views.departament.index.prototype = {
    init: function() {       
        this.$elGrid = this.$el.parentElement.querySelector("[name='grid']");
        
        this.loadGrid();
        this.initEvents();
    },

    loadGrid: function() {
        let elTBody = this.$elGrid.parentElement.querySelector("tbody");
        
        let tbody = this.db.get().reduce((row, departament) => {
            row = row.concat("<tr><td>".concat(departament.id).concat("</td><td>").concat(departament.description).concat("</td></tr>"));
            return row;
        }, "");
        
        elTBody.innerHTML = tbody;
    },

    initEvents: function() {        
    }
}