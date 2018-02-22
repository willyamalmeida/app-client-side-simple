app = {
    views: {
        home: {}
    }
};

app.index = function($el) {
    if (!$el) {
        throw("Element undefined");
    }

    this.$el = $el;
    this.init();
};

app.index.prototype = {
    init: function() {
        this.$elHome = this.$el.parentElement.querySelector("header > a");               
        this.$elContainer = this.$el.parentElement.querySelector(".container");

        this.loadHome();
        this.initEvents();
    },

    loadHome: function() {
        this.$elContainer.innerText = "Index";
    },

    initEvents: function() {
        let _this = this;

        this.$elHome.addEventListener("click", function() {
            _this.$elContainer.innerText = "Home";
        });
    }
}