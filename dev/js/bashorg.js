;( function($, _, undefined){
  "use strict";

  var weatherObject = ips.utils.db.getByType('bashorg');

  ips.controller.register('plugins.bashorg', {

    initialize: function() {
      this.on(document, 'click', '[data-action="nextQuote"]', this.nextQuote);
    },

    nextQuote: function() {
        var quote = $(this.scope);
        var quote_id = $('[data-action=nextQuote]').attr('quote-id');

        if (quote_id == '') {
          return;
        }

        ips.getAjax()(ips.getSetting('baseURL') + 'index.php?app=core&module=system&section=plugins&do=nextQuote&quote_id=' + quote_id)
           .done(function(response) {
              quote.html(response.quote);
              ips.utils.anim.go('fadeInDown', quote);
              $('[data-action=nextQuote]').attr('quote-id', response.quote_id);
            })
           .fail(function() {

        });
      }

  });
}(jQuery, _));
