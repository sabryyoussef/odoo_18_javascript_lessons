# Lesson 3: Basic JavaScript in Odoo

**Objective**:  
- Learn how to write a simple JavaScript file for Odoo.  
- Understand how to use the Odoo web framework’s utilities.

## Overview

1. **Basic Logging**  
   - Confirm your file is being loaded by logging messages to the console.  
2. **DOM Manipulation**  
   - Use standard JavaScript or jQuery (if loaded) to modify page elements.  
3. **Odoo Modules**  
   - Example of defining an Odoo module with `owl` or older frameworks (`Class`, etc.), depending on your Odoo version.

## Example Code

```js
/** custom_module/static/src/js/my_script.js **/

console.log("Hello from our basic Odoo 18 JavaScript file!");

document.addEventListener("DOMContentLoaded", () => {
    // Example: changing the background color of a DOM element
    const headerEl = document.querySelector('header');
    if (headerEl) {
        headerEl.style.backgroundColor = "#f0f0f0";
    }
});
