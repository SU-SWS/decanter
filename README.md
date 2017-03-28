# [Decanter](https://github.com/SU-SWS/decanter)
##### Version: 0.0.0

Maintainers: [kgcreative](https://github.com/kgcreative), [sherakama](https://github.com/sherakama)  

Changelog: [CHANGELOG.md](CHANGELOG.md)

Description
---

Decanter is a collection of SASS and CSS patterns that you can include in any project. This project is based off of bourbon, neat, and bitters.
The goal of this project is to generic css patterns that you can use in any of your projects.

Accessibility
---
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)
Evaluation Date: 201X-XX-XX  
This project conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: [https://ucomm.stanford.edu/policies/accessibility-policy.html](https://ucomm.stanford.edu/policies/accessibility-policy.html).

Installation
---

You can require this project as part of your project through NPM.

```
npm install su-sws/decanter --save-dev
```

If you are using a node based compiler you can tell the sass compiler to look
in to node_modules when using @import statements. Please see:
[https://github.com/sass/node-sass#includepaths](https://github.com/sass/node-sass#includepaths)

Grunt Example:
```javascript
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      // This will compile all of our sass files
      // Additional configuration options can be found at https://github.com/sindresorhus/grunt-sass
      options: {
        includePaths: [
          "node_modules/bourbon/core",
          "node_modules/bourbon-neat/core",
          "node_modules/decanter/core", // <-- this one will allow you to import decanter.
          "node_modules"
        ],
        sourceMap: true,
        // This controls the compiled css and can be changed to nested, compact or compressed.
        outputStyle: 'expanded',
        precision: 10
      },
      dist: {
        files: {
          'css/my-stylesheet.css': 'scss/my-sass-sheet.scss'
        }
      }
    }
  })
};
```

Then in your sass files you can import any part of the project.

Example:

```sass
  // Everything.
  @import "decanter/main";

  // Just a component.
  @import "decanter/components/my-component";
```

Configuration
---

Please see [docs/CONFIGURATION.md](docs/CONFIGURATION.md) document.


Troubleshooting
---

If you are experiencing issues with this please have a look at the examples section first. If the examples fail to provide you the answer you are looking for please have a visit to the Github issue tracker. The issue tracker is not a personal support queue but rather, a place to post reproducible bugs.

Developer
---

If you wish to contribute to this project please see the [CONTRIBUTING.md](CONTRIBUTING.md) document for more information.

The development standards and best practices can be found in the (docs)[docs] section.  
