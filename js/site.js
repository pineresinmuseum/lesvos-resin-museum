// Αντικαθιστά τη λειτουργία των Bootstrap menus του Odoo (το SingleFile αφαιρεί το JS)
document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            if (this.hasAttribute('data-bs-toggle') && this.getAttribute('data-bs-toggle') === 'collapse') return;
            e.preventDefault();
            e.stopPropagation();
            var parent = this.closest('.dropdown') || this.parentElement;
            var menu = parent.querySelector('.dropdown-menu');
            if (menu) {
                menu.classList.remove('sf-hidden');
                var isShowing = menu.style.display === 'block';
                document.querySelectorAll('.dropdown-menu').forEach(function (m) { m.style.display = 'none'; });
                if (!isShowing) {
                    menu.style.display = 'block';
                    if (window.innerWidth > 991) { menu.style.position = 'absolute'; }
                    else { menu.style.position = 'static'; menu.style.paddingLeft = '15px'; menu.style.border = 'none'; menu.style.boxShadow = 'none'; }
                    menu.style.zIndex = '1050';
                    menu.style.backgroundColor = '#fff';
                }
            }
        });
    });

    var offcanvasToggles = document.querySelectorAll('[data-bs-toggle="offcanvas"]');
    var closeButtons = document.querySelectorAll('[data-bs-dismiss="offcanvas"]');
    offcanvasToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault(); e.stopPropagation();
            var targetId = this.getAttribute('data-bs-target');
            if (targetId) {
                var target = document.querySelector(targetId);
                if (target) {
                    target.classList.remove('sf-hidden');
                    target.style.visibility = 'visible';
                    target.style.transform = 'translateX(0)';
                    target.style.transition = 'transform 0.3s ease-in-out';
                }
            }
        });
    });

    closeButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault(); e.stopPropagation();
            var offcanvas = this.closest('.offcanvas');
            if (offcanvas) {
                offcanvas.style.transform = 'translateX(100%)';
                setTimeout(function () { offcanvas.style.visibility = 'hidden'; }, 300);
            }
        });
    });

    var collapseToggles = document.querySelectorAll('[data-bs-toggle="collapse"]');
    collapseToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault(); e.stopPropagation();
            var targetSelector = this.getAttribute('data-bs-target');
            if (targetSelector) {
                var target = document.querySelector(targetSelector);
                if (target) {
                    var isCollapsed = this.classList.contains('collapsed');
                    if (isCollapsed) { this.classList.remove('collapsed'); target.style.display = 'block'; }
                    else { this.classList.add('collapsed'); target.style.display = 'none'; }
                }
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(function (m) {
                if (!m.closest('.offcanvas')) { m.style.display = 'none'; }
            });
        }
    });
});
