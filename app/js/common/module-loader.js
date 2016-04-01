define(["underscore", "jquery"], function (_, $) {

    var Module = function (args) {

        // Merge argumentsobject in the Module loader. Expected values:
        // this.name
        // this.htmlTemplate
        // this.data
        // this.callback

        if (args) {
            for (var attrname in args) {
                this[attrname] = args[attrname];
            }
        }

        this.modulesFolder = "static/theme-modules";
        this.imagesFolder = "images";
        this.moduleLocation = this.modulesFolder + "/" + this.name;
        this.imagesLocation = this.moduleLocation + "/" + this.imagesFolder + "/";
        this.templateData = $.extend({
                    module: this
                }, this.data);
    
        this.render = function () {

            var template = _.template(this.htmlTemplate),
                $container = $("#" + this.name),
                renderedTemplate = template(this.templateData);

            // Append rendered module in the container element in the DOM
            $container.append(renderedTemplate);

            console.log(this.name + " loaded.");
        }

        this.init = function () {

            // Render module
            this.render();

            // Execute any module specific javascript
            this.callback();
        }

    };

    return Module;
})