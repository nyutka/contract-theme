define(["underscore", "jquery"], function(_, $) {

    var Module = function(args) {

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

        this.templateData = $.extend({
            module: this
        }, this.data);

        this.render = function(template, data) {

            var template = _.template(template),
                $container = $("#" + this.id),
                renderedTemplate = template(data);

            // Append rendered module in the container element in the DOM
            $container.append(renderedTemplate);

            console.log(this.id + " loaded.");
        }

        this.init = function() {

            // Render module
            this.render(this.htmlTemplate, this.templateData);

            // Execute any module specific javascript
            this.callback();
        }

        this.init();

    };

    return Module;
})