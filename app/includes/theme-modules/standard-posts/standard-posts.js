define(["data",
        "jquery",
        "underscore",
        "module-loader",
        "text!/static/themes/generic-standard-theme/theme-modules/standard-posts/standard-posts.html",
        "css!/static/themes/generic-standard-theme/theme-modules/standard-posts/standard-posts.css",
], function (data, $, _, Module, htmlTemplate) {

    var args = {
        name: "standard-posts",
        htmlTemplate: htmlTemplate,
        data: data,
        callback: function () {}
    };

    var standardPosts = new Module(args);
})