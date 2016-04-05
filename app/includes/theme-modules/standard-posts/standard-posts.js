

require("./standard-posts.css");
var Module = require("theme_module_loader");
var data = require("../data.json");
var htmlTemplate = require("./standard-posts.html");

module.exports = {
    init: function(){
        var args = {
            name: "standard-posts",
            htmlTemplate: htmlTemplate,
            data: data,
            callback: function () {}
            };

            var standardPosts = new Module(args);
    }
}