/**
 * Decanter Tailwind Configuration (CommonJS)
 */
const plugin = require('tailwindcss/plugin');
const { createDecanterConfig } = require('./tw.config.js');

module.exports = createDecanterConfig(plugin, require);
