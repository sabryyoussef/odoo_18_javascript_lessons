# Lesson 2: Environment Setup

**Objective**:  
- Install and configure Odoo 18 (or ensure you have access to a running instance).  
- Set up a development environment for JavaScript in Odoo.

## Prerequisites

- Python 3.x installed
- Postgres database
- Git installed (optional but recommended)
- Node.js & npm (useful for front-end tooling)

## Steps

1. **Install Odoo 18**  
   - You can install from source or use a package manager, depending on your system.  
   - Make sure Odoo 18 is running on a local port (e.g., `localhost:8069`) or a remote server you can access.

2. **Enable Developer Mode**  
   - In Odoo’s web interface, go to **Settings** → **Activate the developer mode** (sometimes a bug icon or “Developer Mode” link).  
   - Developer mode exposes technical features and file paths used by Odoo.

3. **Structure Your Custom Module**  
   - If you haven’t already, create a custom module folder (e.g., `custom_module`). Inside it, have:
     ```
     custom_module/
     ├── __init__.py
     ├── __manifest__.py
     └── static/
         └── src/
             └── js/
                 └── my_script.js
     ```

4. **Reference Your JavaScript**  
   - In your module’s `__manifest__.py`:
     ```python
     {
       'name': 'Custom Module',
       'version': '1.0',
       'depends': ['web'],
       'data': [],
       'assets': {
         'web.assets_frontend': [
           'custom_module/static/src/js/my_script.js',
         ],
       },
     }
     ```
   - This tells Odoo to load `my_script.js` in the front-end asset bundle.

5. **Restart Odoo**  
   - Once installed, restart your Odoo instance so changes take effect:
     ```bash
     sudo service odoo18 restart
     ```
     or
     ```bash
     ./odoo-bin --addons-path=addons,custom_addons ...
     ```

## Verification

- Log into Odoo, open the browser’s DevTools (F12), and check the console.  
- If your script has a `console.log("My Custom JS is loaded!");`, you should see it in the console.

## Next

- Move on to [Lesson 3: Basic JavaScript in Odoo](../lesson3_basic_js_in_odoo/README.md).
