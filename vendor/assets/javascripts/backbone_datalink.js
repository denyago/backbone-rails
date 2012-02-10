(function($) {
  return $.extend($.fn, {
    backboneLink: function(model) {
      return $(this).find(":input").each(function() {
        var el, name;
        el = $(this);
        name = el.attr("name");
        if (el.attr('data-backbone-datalink') !== "false") {
          model.bind("change:" + name, function() {
            return el.val(model.get(name));
          });
        };
        return $(this).bind("change", function() {
          var attrs;
          el = $(this);
          attrs = {};
          if (el.attr('type') == 'checkbox' ) {
            if ( el.attr('checked') === undefined ) {
              model.unset(el.attr("name"));
            } else {
              attrs[el.attr("name")] = el.val();
            }
          } else {
            attrs[el.attr("name")] = el.val();
          }
          return model.set(attrs);
        });
      });
    }
  });
})(jQuery);
