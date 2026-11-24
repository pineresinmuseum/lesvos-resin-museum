// Στέλνει τη φόρμα newsletter στο Brevo χωρίς να φύγει ο επισκέπτης από τη σελίδα.
// (Αν το JavaScript είναι κλειστό, η φόρμα στέλνεται κανονικά και ανοίγει η σελίδα του Brevo.)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form.js_brevo_form').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var action = form.getAttribute('action');
            var wrap = form.closest('.js_subscribe_wrap');
            var block = wrap ? wrap.parentNode : form.parentNode;
            var error = wrap ? wrap.querySelector('.js_brevo_error') : null;
            if (!action || action.charAt(0) === '#') {
                console.warn('Brevo: λείπει το brevoFormAction στο hugo.toml');
                if (error) error.classList.remove('d-none');
                return;
            }
            var btn = form.querySelector('button[type=submit]');
            if (btn) btn.disabled = true;
            if (error) error.classList.add('d-none');
            fetch(action, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(new FormData(form)) })
                .then(function () {
                    if (wrap) wrap.classList.add('d-none');
                    var done = block.querySelector('.js_subscribed_wrap');
                    if (done) done.classList.remove('d-none');
                })
                .catch(function () {
                    if (btn) btn.disabled = false;
                    if (error) error.classList.remove('d-none');
                });
        });
    });
});
