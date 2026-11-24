// Στέλνει τις φόρμες επικοινωνίας στο Formspree χωρίς να φύγει ο επισκέπτης από τη σελίδα.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form.js_formspree_form').forEach(function (form) {
        var box = form.parentNode;
        var result = form.querySelector('.js_formspree_result');
        var msgs = box.querySelector('.js_formspree_msgs');
        function msg(key) { return msgs ? msgs.getAttribute('data-' + key) : ''; }
        function show(text, ok) {
            if (!result) return;
            result.textContent = text;
            result.className = 'js_formspree_result me-3 ' + (ok ? 'text-muted' : 'text-danger');
        }
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var action = form.getAttribute('action');
            if (!action || action.indexOf('formspree.io') < 0) {
                show(msg('missing'), false);
                return;
            }
            var btn = form.querySelector('button[type=submit]');
            if (btn) btn.disabled = true;
            show(msg('sending'), true);
            fetch(action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
                .then(function (r) {
                    if (!r.ok) throw new Error(r.status);
                    form.classList.add('d-none');
                    var done = box.querySelector('.js_formspree_done');
                    if (done) done.classList.remove('d-none');
                })
                .catch(function () {
                    if (btn) btn.disabled = false;
                    show(msg('error'), false);
                });
        });
    });
});
