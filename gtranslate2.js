const googleTranslateConfig = {
  lang: "ru",
  // langFirstVisit: 'en',
  domain: "tatianara.com"
};

function TranslateInit() {

  let code = Cookies.get('googtrans') ? Cookies.get('googtrans').split('/')[1] : googleTranslateConfig.lang;

  document.querySelector('[data-google-lang="' + code + '"]').classList.add('language__item_active');

  new google.translate.TranslateElement({
    pageLanguage: code,
  });

  TranslateEventHandler('click', '[data-google-lang]', function (el) {
    Cookies.set('googtrans', '/' + el.getAttribute("data-google-lang"));
    window.location.reload();
  });
}

function TranslateEventHandler(event, selector, handler) {
  document.addEventListener(event, function (e) {
    let el = e.target.closest(selector);
    if (el) handler(el);
  });
}
