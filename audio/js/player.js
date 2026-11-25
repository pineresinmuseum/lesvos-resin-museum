/* Λογική του ηχητικού οδηγού — δεν χρειάζεται αλλαγές. Το περιεχόμενο είναι στο data.js */
(function () {
  "use strict";

  var UI = {
    el: { dyk: "Ήξερες ότι…", cc: "Υπότιτλοι", trShow: "Κείμενο ομιλίας", trTitle: "Κείμενο ομιλίας",
          other: "English", play: "Αναπαραγωγή", pause: "Παύση",
          note: "" },
    en: { dyk: "Did you know…", cc: "Subtitles", trShow: "Transcript", trTitle: "Transcript",
          other: "Ελληνικά", play: "Play", pause: "Pause",
          note: "The speaker talks in Greek — English subtitles are shown." }
  };

  var $ = function (id) { return document.getElementById(id); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var params = new URLSearchParams(location.search);
  var id = params.get("id") || params.get("s");
  var stop = (typeof STOPS !== "undefined") ? STOPS[id] : null;
  var S = (typeof SETTINGS !== "undefined") ? SETTINGS : {};

  if (!stop) { $("error").hidden = false; return; }

  var audio = $("audio");
  var lang = null, lines = [], activeIdx = -1, captionsOn = false, pendingTime = 0;

  /* ---------- βοηθητικά ---------- */
  function txt(obj, l) { return obj ? (obj[l] || obj.el || "") : ""; }
  function parseTime(t) {
    if (typeof t === "number") return t;
    var p = String(t).trim().split(":").map(Number);
    return p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p.length === 2 ? p[0] * 60 + p[1] : p[0] || 0;
  }
  function fmt(s) {
    if (!isFinite(s)) s = 0;
    s = Math.floor(s);
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }
  function photoOf() { return stop.photo || S.defaultPhoto || "img/speaker.svg"; }
  function speakerOf(l) { return txt(stop.speaker || S.defaultSpeaker, l); }

  /* ---------- 1. επιλογή γλώσσας ---------- */
  function showChooser() {
    $("player").hidden = true;
    $("chooser").hidden = false;
    $("ch-museum").textContent = txt(S.museumName, "el") + " · " + txt(S.museumName, "en");
    $("ch-photo").src = photoOf();
    $("ch-photo").alt = speakerOf("el");
    $("ch-title-el").textContent = stop.el.title;
    $("ch-title-en").textContent = stop.en ? stop.en.title : "";
    if (!stop.en) document.querySelector('[data-lang="en"]').hidden = true;

    var saved = store.get("rm-autoplay");
    $("autoplay-toggle").checked = saved === null ? !!S.autoplay : saved === "1";
    $("autoplay-wrap").hidden = S.showAutoplaySwitch === false;
  }

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      var auto = $("autoplay-wrap").hidden ? !!S.autoplay : $("autoplay-toggle").checked;
      store.set("rm-autoplay", auto ? "1" : "0");
      if (S.rememberLanguage !== false) store.set("rm-lang", b.dataset.lang);
      openPlayer(b.dataset.lang, auto);
    });
  });

  /* ---------- 2. player ---------- */
  function openPlayer(l, autoplay) {
    lang = l;
    var d = stop[l] || stop.el, u = UI[l] || UI.el;
    document.documentElement.lang = l;
    $("chooser").hidden = true;
    $("player").hidden = false;
    document.title = d.title + " — " + txt(S.museumName, l);

    $("museum-name").textContent = txt(S.museumName, l);
    $("switch-lang").textContent = u.other;
    $("switch-lang").hidden = !(stop.el && stop.en);
    $("stop-title").textContent = d.title;
    $("speaker-photo").src = photoOf();
    $("speaker-photo").alt = speakerOf(l);
    $("speaker-name").textContent = speakerOf(l);
    $("site-link").textContent = (S.website || "").replace(/^https?:\/\//, "");
    $("site-link").href = S.website || "#";

    // Ήξερες ότι
    $("dyk-title").textContent = u.dyk;
    var ul = $("dyk-list"); ul.innerHTML = "";
    (d.didYouKnow || []).forEach(function (f) { var li = document.createElement("li"); li.textContent = f; ul.appendChild(li); });
    ul.parentElement.hidden = !(d.didYouKnow && d.didYouKnow.length);

    // ήχος (αν λείπει το αγγλικό, παίζει το ελληνικό με αγγλικούς υπότιτλους)
    var src = d.audio || stop.el.audio;
    var fallback = !d.audio && l !== "el";
    var keep = audio.getAttribute("data-last") === src ? audio.currentTime : 0;
    audio.pause();
    if (keep) pendingTime = keep;
    audio.src = src;
    audio.setAttribute("data-last", src);

    // κείμενο
    buildTranscript(d.transcript || []);
    $("tr-title").textContent = u.trTitle;
    $("tr-note").textContent = u.note;
    $("tr-note").hidden = !fallback;
    $("tr-btn").textContent = u.trShow;
    $("cc-btn").textContent = "CC  " + u.cc;
    $("cc-btn").hidden = !lines.some(function (x) { return x.timed; });
    setCaptions(fallback || store.get("rm-cc") === "1");
    updatePlayLabel();

    if ("mediaSession" in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: d.title, artist: speakerOf(l), album: txt(S.museumName, l),
          artwork: [{ src: photoOf(), sizes: "400x400" }]
        });
      } catch (e) {}
    }

    if (autoplay) play();
  }

  $("switch-lang").addEventListener("click", function () {
    var nl = lang === "el" ? "en" : "el";
    if (S.rememberLanguage !== false) store.set("rm-lang", nl);
    var playing = !audio.paused;
    openPlayer(nl, playing);
  });

  /* ---------- κείμενο / υπότιτλοι ---------- */
  function buildTranscript(arr) {
    var box = $("tr-lines"); box.innerHTML = ""; lines = []; activeIdx = -1;
    arr.forEach(function (item) {
      var timed = Array.isArray(item);
      var t = timed ? parseTime(item[0]) : null;
      var text = timed ? item[1] : String(item);
      var el;
      if (timed) {
        el = document.createElement("button");
        el.type = "button"; el.className = "tr-line";
        el.innerHTML = '<span class="t"></span><span class="x"></span>';
        el.querySelector(".t").textContent = fmt(t);
        el.querySelector(".x").textContent = text;
        el.addEventListener("click", function () { audio.currentTime = t; play(); });
      } else {
        el = document.createElement("p"); el.className = "tr-plain"; el.textContent = text;
      }
      box.appendChild(el);
      lines.push({ t: t, text: text, el: el, timed: timed });
    });
    $("tr-btn").hidden = lines.length === 0;
    $("caption").textContent = "";
  }

  function syncText() {
    var now = audio.currentTime, idx = -1;
    for (var i = 0; i < lines.length; i++) { if (lines[i].timed && lines[i].t <= now + 0.15) idx = i; }
    if (idx === activeIdx) return;
    if (activeIdx > -1 && lines[activeIdx]) lines[activeIdx].el.classList.remove("active");
    activeIdx = idx;
    $("caption").textContent = idx > -1 ? lines[idx].text : "";
    if (idx > -1) {
      var el = lines[idx].el, box = $("tr-lines");
      el.classList.add("active");
      if (!$("transcript").hidden) box.scrollTop = el.offsetTop - box.offsetTop - box.clientHeight / 3;
    }
  }

  function setCaptions(on) {
    captionsOn = on && !$("cc-btn").hidden;
    $("caption").hidden = !captionsOn;
    $("cc-btn").setAttribute("aria-pressed", String(captionsOn));
  }
  $("cc-btn").addEventListener("click", function () {
    setCaptions(!captionsOn); store.set("rm-cc", captionsOn ? "1" : "0");
  });
  $("tr-btn").addEventListener("click", function () {
    var open = $("transcript").hidden;
    $("transcript").hidden = !open;
    this.setAttribute("aria-expanded", String(open));
    if (open) { activeIdx = -1; syncText(); $("transcript").scrollIntoView({ behavior: "smooth", block: "start" }); }
  });

  /* ---------- έλεγχοι ---------- */
  function play() {
    initAnalyser();
    if (actx && actx.state === "suspended") actx.resume();
    var p = audio.play();
    if (p && p.catch) p.catch(function () { /* ο browser μπλόκαρε το autoplay — ο χρήστης πατά Play */ });
  }
  function updatePlayLabel() {
    var u = UI[lang] || UI.el;
    $("play").setAttribute("aria-label", audio.paused ? u.play : u.pause);
  }
  $("play").addEventListener("click", function () { audio.paused ? play() : audio.pause(); });
  $("back10").addEventListener("click", function () { audio.currentTime = Math.max(0, audio.currentTime - 10); });
  $("fwd10").addEventListener("click", function () { audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10); });

  var seeking = false;
  $("seek").addEventListener("input", function () {
    seeking = true;
    var t = (this.value / 1000) * (audio.duration || 0);
    $("cur").textContent = fmt(t);
    this.style.setProperty("--p", this.value / 10 + "%");
  });
  $("seek").addEventListener("change", function () {
    audio.currentTime = (this.value / 1000) * (audio.duration || 0); seeking = false;
  });

  audio.addEventListener("loadedmetadata", function () {
    $("dur").textContent = fmt(audio.duration);
    if (pendingTime) { audio.currentTime = pendingTime; pendingTime = 0; }
  });
  audio.addEventListener("timeupdate", function () {
    if (!seeking && audio.duration) {
      var v = Math.round((audio.currentTime / audio.duration) * 1000);
      $("seek").value = v; $("seek").style.setProperty("--p", v / 10 + "%");
      $("cur").textContent = fmt(audio.currentTime);
    }
    syncText();
  });
  audio.addEventListener("play", function () { document.body.classList.add("is-playing"); updatePlayLabel(); startBars(); });
  audio.addEventListener("pause", function () { document.body.classList.remove("is-playing"); updatePlayLabel(); });
  audio.addEventListener("ended", function () { document.body.classList.remove("is-playing"); updatePlayLabel(); });

  /* ---------- μπάρες ομιλίας ---------- */
  var N = 28, barEls = [], levels = new Array(N).fill(0);
  for (var i = 0; i < N; i++) { var s = document.createElement("span"); $("bars").appendChild(s); barEls.push(s); }

  var actx = null, analyser = null, freq = null, silentFrames = 0, simulate = false, raf = 0;
  function initAnalyser() {
    if (actx || simulate) return;
    // Σε αρχείο ανοιγμένο τοπικά (file://) η ανάλυση ήχου δεν επιτρέπεται: χρησιμοποιούμε προσομοίωση.
    if (!/^https?:$/.test(location.protocol)) { simulate = true; return; }
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      actx = new AC();
      var srcNode = actx.createMediaElementSource(audio);
      analyser = actx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.6;
      srcNode.connect(analyser); analyser.connect(actx.destination);
      freq = new Uint8Array(analyser.frequencyBinCount);
    } catch (e) { simulate = true; actx = null; }
  }

  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  function startBars() { if (!raf) raf = requestAnimationFrame(drawBars); }
  function drawBars(ts) {
    var playing = !audio.paused && !audio.ended;
    var target = new Array(N).fill(0);
    if (playing) {
      if (analyser && !simulate) {
        analyser.getByteFrequencyData(freq);
        // φωνή ≈ 85–4000 Hz: παίρνουμε τα αντίστοιχα bins
        var hz = actx.sampleRate / analyser.fftSize, lo = Math.max(1, Math.floor(85 / hz)), hi = Math.floor(4000 / hz);
        var sum = 0;
        for (var b = 0; b < N; b++) {
          var a = lo + Math.floor((b / N) * (hi - lo)), z = lo + Math.floor(((b + 1) / N) * (hi - lo)), m = 0;
          for (var k = a; k <= z; k++) m = Math.max(m, freq[k]);
          target[b] = m / 255; sum += m;
        }
        silentFrames = sum === 0 ? silentFrames + 1 : 0;
        if (silentFrames > 90 && audio.currentTime > 2) simulate = true;
      } else {
        var t = ts / 1000, env = 0.55 + 0.45 * Math.sin(t * 2.3) * Math.sin(t * 0.7 + 1);
        for (var j = 0; j < N; j++) target[j] = Math.max(0, env * (0.35 + 0.65 * Math.abs(Math.sin(t * (3 + j % 5) + j * 1.7))));
      }
    }
    // συμμετρικό σχήμα: πιο ψηλές μπάρες στη μέση
    var total = 0;
    for (var n = 0; n < N; n++) {
      var center = 1 - Math.abs(n - (N - 1) / 2) / (N / 2) * 0.55;
      var src = target[(n * 7) % N] * center;
      levels[n] += (src - levels[n]) * (src > levels[n] ? 0.6 : 0.2);
      total += levels[n];
      barEls[n].style.transform = "scaleY(" + Math.max(0.08, Math.min(1, levels[n])).toFixed(3) + ")";
    }
    if (!reduce) $("avatar-wrap").style.setProperty("--lvl", Math.min(1, (total / N) * 1.8).toFixed(3));
    if (playing || total > 0.05) raf = requestAnimationFrame(drawBars);
    else { raf = 0; $("avatar-wrap").style.setProperty("--lvl", 0); }
  }

  /* ---------- έναρξη ---------- */
  var urlLang = params.get("lang");
  var remembered = S.rememberLanguage !== false ? store.get("rm-lang") : null;
  if (urlLang && stop[urlLang]) openPlayer(urlLang, false);
  else showChooser();
  // Σημ.: ακόμη κι αν θυμάται τη γλώσσα, δείχνουμε την επιλογή — η γνωστή γλώσσα είναι πρώτη.
  if (remembered === "en" && !urlLang) {
    var box = document.querySelector(".lang-buttons");
    box.insertBefore(document.querySelector('[data-lang="en"]'), box.firstChild);
  }
})();
