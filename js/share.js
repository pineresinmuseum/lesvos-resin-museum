// Συμπληρώνει τα κουμπιά "Share this post" με τη διεύθυνση της τρέχουσας σελίδας.
document.addEventListener('DOMContentLoaded', function () {
    var canonical = document.querySelector('link[rel="canonical"]');
    var url = (canonical && /^https?:/.test(canonical.href)) ? canonical.href : window.location.href.split('#')[0];
    if (!/^https?:/.test(url)) return;  // άνοιγμα από τον δίσκο (file://): κράτα ό,τι έχει ήδη
    var titleEl = document.querySelector('.o_wblog_post_name');
    var title = titleEl ? titleEl.textContent.trim() : document.title;
    var u = encodeURIComponent(url), t = encodeURIComponent(title);
    var links = {
        'o_facebook': 'https://www.facebook.com/sharer/sharer.php?u=' + u,
        'o_twitter':  'https://twitter.com/intent/tweet?text=' + t + '&url=' + u,
        'o_linkedin': 'https://www.linkedin.com/sharing/share-offsite/?url=' + u
    };
    document.querySelectorAll('.o_wblog_social_links a').forEach(function (a) {
        for (var cls in links) {
            if (a.classList.contains(cls)) { a.href = links[cls]; }
        }
    });
});
