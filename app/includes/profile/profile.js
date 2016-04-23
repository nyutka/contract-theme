require("!css!sass!./profile.scss");
var Module = require("theme_module_loader");
var JSContext = require("../../js/common/jscontext.js");
var htmlTemplate = require("./profile.html");
var callback = require("./profile-callback.js");
var data = window.JSContext;
module.exports = {
    init: function(){

        var args = {
            id: "profile", /* the div id to which the module will be appended */
            htmlTemplate: htmlTemplate, /* the Underscore template that will be used by the module */
            data: data, /* the data available in the module */
            callback: callback /* a function to execute after the module has been rendered. Wrap there any javascript for the module */
        };

        var standardNavigation = new Module(args);
    }
}


