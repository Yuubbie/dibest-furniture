document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Header background state on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // Per-item inquiry modal
  var overlay = document.querySelector('.inquiry-overlay');
  if (overlay) {
    var itemField = overlay.querySelector('#inquiry-item');
    document.querySelectorAll('[data-inquire]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (itemField) itemField.value = btn.getAttribute('data-inquire');
        overlay.classList.add('open');
      });
    });
    overlay.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', function () { overlay.classList.remove('open'); });
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });
    var form = overlay.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var item = overlay.querySelector('#inquiry-item').value;
        var name = overlay.querySelector('#inquiry-name').value;
        var phone = overlay.querySelector('#inquiry-phone').value;
        var message = overlay.querySelector('#inquiry-message').value;

        var text = 'Hello DiBest Furniture, I would like to inquire about: ' + item +
          '\n\nName: ' + name +
          '\nPhone: ' + phone +
          (message ? '\nMessage: ' + message : '');

        window.open('https://wa.me/2348108844843?text=' + encodeURIComponent(text), '_blank');

        form.innerHTML = '<p style="color:#f3eee3;margin:0;">Opening WhatsApp now. If it did not open, message us directly at +234 810 884 4843.</p>';
      });
    }
  }
});
