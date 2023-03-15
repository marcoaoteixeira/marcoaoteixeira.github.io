(function ($) {
  var i18n = $.i18n();
  var changeLanguage = function (locale) {
    i18n.locale = locale.toLowerCase();
    i18n
      .load('./i18n/' + i18n.locale + '.json', i18n.locale)
      .done(function () {
        $('body').i18n();
      });
  };

  $(document).ready(function () {
    changeLanguage(window.navigator.userLanguage || window.navigator.language || '');

    $('.change-language').on('click', function () {
      changeLanguage(this.lang);
      return false;
    });

    $('#download-cv').on('click', function () {
      window.open(`../resources/Curriculum.${i18n.locale}.pdf`, '_blank')

      return false;
    });

    AOS.init({
      anchorPlacement: 'top-left',
      duration: 1000
    });
  });
})(jQuery);