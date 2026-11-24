// Κάνει να δουλεύουν τα carousel της Odoo (π.χ. τα σχόλια επισκεπτών στην αρχική)
// χωρίς το JavaScript της Odoo/Bootstrap: βελάκια, τελείες και αυτόματη εναλλαγή.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.carousel').forEach(function (carousel) {
        var items = carousel.querySelectorAll('.carousel-item');
        if (items.length < 2) return;
        var dots = carousel.querySelectorAll('[data-bs-slide-to]');
        var current = 0;
        items.forEach(function (it, i) { if (it.classList.contains('active')) current = i; });

        function show(i) {
            current = (i + items.length) % items.length;
            items.forEach(function (it, k) { it.classList.toggle('active', k === current); });
            dots.forEach(function (d) {
                var on = parseInt(d.getAttribute('data-bs-slide-to'), 10) === current;
                d.classList.toggle('active', on);
                if (on) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
            });
        }

        var id = carousel.id ? '#' + carousel.id : null;
        var controls = Array.prototype.slice.call(carousel.querySelectorAll('[data-bs-slide],[data-bs-slide-to]'));
        if (id) {
            document.querySelectorAll('[data-bs-target="' + id + '"],[href="' + id + '"]').forEach(function (c) {
                if (controls.indexOf(c) < 0) controls.push(c);
            });
        }
        controls.forEach(function (c) {
            c.addEventListener('click', function (e) {
                e.preventDefault();
                var to = c.getAttribute('data-bs-slide-to');
                var dir = c.getAttribute('data-bs-slide');
                if (to !== null) show(parseInt(to, 10));
                else if (dir === 'prev') show(current - 1);
                else show(current + 1);
                restart();
            });
        });

        var interval = parseInt(carousel.getAttribute('data-bs-interval'), 10) || 5000;
        var ride = carousel.getAttribute('data-bs-ride');
        var timer = null;
        function restart() {
            if (timer) clearInterval(timer);
            if (ride && ride !== 'false') timer = setInterval(function () { show(current + 1); }, interval);
        }
        carousel.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
        carousel.addEventListener('mouseleave', restart);
        restart();
    });
});
