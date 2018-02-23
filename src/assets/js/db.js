db = function (key) {
    if (!key) {
        throw ("key undefined");
    }

    this.key = key;
    this.init();
};

db.prototype = {
    init: function () {
        if (localStorage.length === 0) {
            this.save([]);
        }

        this.list = this.get();
    },

    assertItem: function (item) {        
        if (!item) {
            throw ("item is null");
        }

        let isNew = item.id === 0 || item.id === undefined || item.id === null;

        if(!isNew) {
            this.assertItemExist(item.id);            
        }
    },

    assertItemExist: function(id) {
        let item = this.getItem(id);            

        if(!item) {
            throw("item not exist");
        }
    },

    save: function (item, callbackUpdate) {
        this.assertItem(item);

        let items = this.get();

        if (isNew) {
            items.push(item);
        }
        else {            
            callbackUpdate(value);
        }

        this.save(items);
    },

    save: function(items) {
        let newItems = JSON.stringify(items);
        localStorage.setItem(this.key, newItems);
    },

    get: function () {
        let item = localStorage.getItem(this.key);
        let value = JSON.parse(item);

        return value;
    },

    getItem: function (id) {
        let items = this.get();
        let item = this.getItem(items, id);

        return item;
    },

    getItem: function(items, id) {
        let item = items.find(x => x.id === id);
        return item;
    },

    clear: function () {
        localStorage.removeItem(this.key);
    },

    removeItem: function (id) {
        this.assertItemExist(id);

        let items = this.get();
        let item = this.getItem(id);
        
        items.remove(item);

        this.save(items);
    }
};