define(["data",
        "jquery",
        "underscore",
        "module-loader",
        "text!/static/themes/generic-standard-theme/theme-modules/standard-agent-header/standard-agent-header.html",
        "css!/static/themes/generic-standard-theme/theme-modules/standard-agent-header/standard-agent-header.css"
], function (data, $, _, Module, htmlTemplate) {
    
    var callback = function(){};
    
    var args = {
        name: "standard-agent-header",
        htmlTemplate: htmlTemplate,
        data: data,
        callback: callback
    };
    
    var standardAgentHeader = new Module(args);
});