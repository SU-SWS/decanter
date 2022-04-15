/**
 * Line heights
 */
module.exports = function () {
  return {
    none: '1',
    tight: '1.1', // For things like button text
    display: '1.2', // For display fonts, e.g., headings and button text
    snug: '1.3', // For card paragraph, caption etc
    cozy: '1.4', // Normal for slightly smaller paragraph font sizes (eg, 19px)
    DEFAULT: '1.5', // Normal for regular paragraphs
    half: '0.5', // Useful for logo lockup
    trim: '0.75', // Trim leading for Source Sans Pro
  };
};
