ckan.module('example_theme_popover', function ($, _) {
  return {
    initialize: function () {
      console.log("I've been initialized for element: %o", this.el);
    }
  };
});
