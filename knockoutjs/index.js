var
    Item = function () {
        this.content = ko.observable();
        this.complete = ko.observable(false)
    },
    myViewModel = {
        taskList: ko.observableArray([]),
        authenticated: ko.observable(false),
        login: function () {
            if (!this.authenticated()) {
                this.authenticated(true);
            }
        },
        logout: function () {
            if (this.authenticated()) {
                this.authenticated(false);
            }
        },
        appName: "Todo V1.0",
        newItem: ko.observable(),
        addNewItem: function () {
            if (this.newItem() != "") {
                var item = new Item();
                item.content(this.newItem());
                this.taskList.push(item);
                this.newItem('');
                // $('#txt-addItem').focus();
            }
        },
        clearItems: function () {
            this.taskList([]);
        }
    };

ko.applyBindings(myViewModel);