(function ($) {
  var i18n = $.i18n();
  var changeLanguage = function (locale) {
    i18n.locale = locale;
    i18n
      .load('./i18n/' + i18n.locale + '.json', i18n.locale)
      .done(function () {

      });
  };

  $(document).ready(function () {
    changeLanguage(window.navigator.userLanguage || window.navigator.language || '');
    
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 1000
    });
    
    // $('.change-language').on('click', function () {
    //     changeLanguage(this.lang.toLowerCase());
    //     return false;
    // });
  });
})(jQuery);