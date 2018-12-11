'use strict';

/**
 * This module is used to load the base KSS builder class needed by this builder
 * and to define any custom CLI options or extend any base class methods.
 *
 * Note: since this builder wants to extend the KssBuilderBaseTwig class, it
 * must export a KssBuilderBaseTwig sub-class as a module. Otherwise, kss-node
 * will assume the builder wants to use the KssBuilderBaseHandlebars class.
 *
 * This file's name should follow standard node.js require() conventions. It
 * should either be named index.js or have its name set in the "main" property
 * of the builder's package.json. See
 * http://nodejs.org/api/modules.html#modules_folders_as_modules
 *
 * @module kss/builder/twig
 */

const path = require('path'),
  Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs-extra'));
const md5 = require('md5');


// We want to extend kss-node's Twig builder so we can add options that
// are used in our templates.
let BaseTwigBuilder;

try {
  // In order for a builder to be "kss clone"-able, it must use the
  // require('kss/builder/path') syntax.
  BaseTwigBuilder = require('kss/builder/base/twig');
} catch (e) {
  // The above require() line will always work.
  //
  // Unless you are one of the developers of kss-node and are using a git clone
  // of kss-node where this code will not be inside a "node_modules/kss" folder
  // which would allow node.js to find it with require('kss/anything'), forcing
  // you to write a long-winded comment and catch the error and try again using
  // a relative path.
  BaseTwigBuilder = require('../base/twig');
}

/**
 * A kss-node builder that takes input files and builds a style guide using Twig
 * templates.
 */
class DecanterBuilder extends BaseTwigBuilder {
  /**
   * Create a builder object.
   */
  constructor() {
    // First call the constructor of KssBuilderBaseTwig.
    super();

    // Then tell kss which Yargs-like options this builder adds.
    this.addOptionDefinitions({
      title: {
        group: 'Style guide:',
        string: true,
        multiple: false,
        describe: 'Title of the style guide',
        default: 'KSS Style Guide'
      }
    });

  }

  /**
   * Build the HTML files of the style guide given a KssStyleGuide object.
   *
   * @param {KssStyleGuide} styleGuide The KSS style guide in object format.
   * @returns {Promise.<KssStyleGuide>} A `Promise` object resolving to a
   *   `KssStyleGuide` object.
   */
  build(styleGuide) {
    let options = {};

    // Returns a promise to read/load a template provided by the builder.
    options.readBuilderTemplate = name => {
      return this.Twig.twigAsync({
        id: '@builderTwig/' + name + '.twig',
        path: path.resolve(this.options.builder, name + '.twig')
      });
    };

    // Returns a promise to read/load a template specified by a section.
    options.readSectionTemplate = (name, filepath) => {
      return this.Twig.twigAsync({
        id: name,
        path: filepath
      });
    };

    // Returns a promise to load an inline template from markup.
    options.loadInlineTemplate = (name, markup) => {
      return this.Twig.twigAsync({
        id: name,
        data: markup
      });
    };

    // Returns a promise to load the data context given a template file path.
    options.loadContext = filepath => {
      let context;
      // Load sample context for the template from the sample .json file.
      try {
        context = require(path.join(path.dirname(filepath), path.basename(filepath, path.extname(filepath)) + '.json'));
        // require() returns a cached object. We want an independent clone of
        // the object so we can make changes without affecting the original.
        context = JSON.parse(JSON.stringify(context));
        context = this.safeMarkup(context);
      } catch (error) {
        context = {};
      }
      return Promise.resolve(context);
    };

    // Returns a promise to get a template by name.
    options.getTemplate = name => {
      return this.Twig.twigAsync({
        ref: name
      });
    };

    // Returns a promise to get a template's markup by name.
    options.getTemplateMarkup = name => {
      // We don't wrap the rendered template in "new handlebars.SafeString()"
      // since we want the ability to display it as a code sample with {{ }} and
      // as rendered HTML with {{{ }}}.
      return options.getTemplate(name).then(template => {
         // The rawMarkup is a custom property set in twigAsync().
        return template.rawMarkup;
      });
    };

    // Renders a template and returns the markup.
    options.templateRender = (template, context) => {
      return template.render(context);
    };

    // Converts a filename into a Twig template name.
    options.filenameToTemplateRef = filename => {
      // Return the filename path hash.
      return md5(filename);
    };

    options.templateExtension = 'twig';
    options.emptyTemplate = '{# Cannot be an empty string. #}';

    // Reset the Twig template registry so KSS can be run in a "watch" task that
    // does not destroy the Node.js environment between builds.
    this.Twig.registryReset();

    return this.buildGuide(styleGuide, options);
  }

}

module.exports = DecanterBuilder;
