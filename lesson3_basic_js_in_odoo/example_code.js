/** custom_module/static/src/js/my_module.js **/
odoo.define('custom_module.my_module', function (require) {
    "use strict";

    // If using the older web framework, you might import certain utilities:
    const core = require('web.core');
    const _t = core._t; // for translations

    // A simple example function
    function greetUser() {
        console.log(_t("Hello from Odoo's JavaScript module!"));
    }

    // Call the function immediately
    greetUser();
});
