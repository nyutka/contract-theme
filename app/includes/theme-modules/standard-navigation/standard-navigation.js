require("./standard-navigation.css");
var Module = require("theme_module_loader");
var JSContext = require("../../../js/common/jscontext.js");
var htmlTemplate = require("./standard-navigation.html");
var callback = require("./standard-navigation-callback.js");
var data = window.JSContext;
module.exports = {
    init: function(){

        var args = {
            name: "standard-navigation",
            htmlTemplate: htmlTemplate,
            data: data,
            callback: callback
        };

        var standardNavigation = new Module(args);
    }
}


