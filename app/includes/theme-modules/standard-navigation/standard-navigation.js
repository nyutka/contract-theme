 /* define(["./data.json",
        "jquery",
        "underscore",
        "theme_module_loader",
        "./standard-navigation.html",
        "./standard-navigation-callback.js",
        "./standard-navigation.css"
], function (data, $, _, Module, htmlTemplate, callback) {
    
    var args = {
        name: "standard-navigation",
        htmlTemplate: htmlTemplate,
        data: data,
        callback: callback
    };
    
    var standardNavigation = new Module(args);

    return standardNavigation;
});

*/


var $ = require("jquery");
var _ = require("underscore");
require("./standard-navigation.css");

var Module = require("theme_module_loader");
var data = require("./data.json");
var htmlTemplate = require("./standard-navigation.html");
var callback = require("./standard-navigation-callback.js");



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


