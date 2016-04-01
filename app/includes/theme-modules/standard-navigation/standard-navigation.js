define(["data",
        "jquery",
        "underscore",
        "module-loader",
        "text!/static/themes/generic-standard-theme/theme-modules/standard-navigation/standard-navigation.html",
        "/static/themes/generic-standard-theme/theme-modules/standard-navigation/standard-navigation-callback.js",
        "css!/static/themes/generic-standard-theme/theme-modules/standard-navigation/standard-navigation.css"
], function (data, $, _, Module, htmlTemplate, callback ) {
    
    var args = {
        name: "standard-navigation",
        htmlTemplate: htmlTemplate,
        data: data,
        callback: callback
    };
    
    var standardNavigation = new Module(args);
});