require("./standard-navigation.css");
var Module = require("theme_module_loader");
var data = require("../data.json");
var htmlTemplate = require("./standard-navigation.html");
var callback = require("./standard-navigation-callback.js");


module.exports = {
    init: function(){
        console.log(data);

        var args = {
            name: "standard-navigation",
            htmlTemplate: htmlTemplate,
            data: data,
            callback: callback
        };

        var standardNavigation = new Module(args);
    }
}


