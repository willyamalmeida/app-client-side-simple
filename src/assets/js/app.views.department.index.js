var app = { views: { department: {} } };

app.views.department.index = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.db = new Store("departments");

    this.init();
};

app.views.department.index.prototype = {
    init: function() {
        this.$elGrid = this.$el.parentElement.querySelector("[name='grid']");
        this.$elTotal = this.$elGrid.parentElement.querySelector("tfoot > tr > th > span");

        this.loadGrid();
        this.initEvents();
    },

    loadGrid: function() {
        var elTBody = this.$elGrid.parentElement.querySelector("tbody");
        var list = this.db.get();
        var tbody = list.reduce(function(row, department) {
            row = row.concat("<tr class='item'><td>".concat(department.id).concat("</td><td>").concat(department.description).concat("</td></tr>"));
            return row;
        }, "");

        elTBody.innerHTML = tbody.concat("<tr><td></td><td></td></tr>");
        this.$elTotal.innerText = list.length;
    },

    initEvents: function() {
        this.$elGrid.querySelectorAll("tbody .item").forEach(function(row) {
            row.addEventListener("click", function(e) {
                var id = e.target.parentElement.querySelector("td").innerText;
                location = "edit.html?id=".concat(id);
            });
        });
    }
}
