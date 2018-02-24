app = { views: { departament: {} } };
app.views.departament.index = function($el) {
    if (!$el) {
        throw("Element undefined");
    }
    
    this.$el = $el;
    this.db = new Store("departaments");

    this.init();
};

app.views.departament.index.prototype = {
    init: function() {       
        this.$elGrid = this.$el.parentElement.querySelector("[name='grid']");    
        
        this.loadGrid();
        this.initEvents();
    },

    loadGrid: function() {
        var elTBody = this.$elGrid.parentElement.querySelector("tbody");
        
        var tbody = this.db.get().reduce(function(row, departament) {
            row = row.concat("<tr><td>".concat(departament.id).concat("</td><td>").concat(departament.description).concat("</td></tr>"));
            return row;
        }, "");
        
        elTBody.innerHTML = tbody;
    },

    initEvents: function() {   
        this.$elGrid.querySelectorAll("tbody tr").forEach(function(row) {
            row.addEventListener("click", function(e) { 
                var id = e.target.parentElement.querySelector("td").innerText;
                location = "edit.html?id=".concat(id);                
            });  
        });           
    }
}