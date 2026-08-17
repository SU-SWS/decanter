/**
 * Responsive embed container to ensure that contents scale to the
 * width of parent element while retaining an aspect ratio of 16:9.
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      // @deprecated The padding-bottom hack predates `aspect-ratio`. Use
      // `class="aspect-[16/9] overflow-hidden"` on the wrapper and `class="size-full"`
      // on the embed instead. Will be removed in v8.
      // Note: `aspect-video` reads better but generates nothing while
      // @tailwindcss/aspect-ratio is loaded — that plugin suppresses the core
      // `aspect-*` utilities. `aspect-[16/9]` works today and keeps working once the
      // plugin is dropped in v8.
      '.embed-container': {
        paddingBottom: '56.25%',
        position: 'relative',
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        'embed, iframe, object ': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      },
    };

    addComponents(components);
  };
};
