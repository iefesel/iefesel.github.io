/* Kopyala düğmesi */
document.addEventListener("click", function (e) {
  var b = e.target.closest(".copy"); if (!b) return;
  var v = b.dataset.v;
  var done = function () { b.textContent = "Kopyalandı"; setTimeout(function () { b.textContent = "Kopyala"; }, 1600); };
  var select = function () {
    var el = b.parentElement.querySelector(".value");
    var r = document.createRange(); r.selectNodeContents(el);
    var s = getSelection(); s.removeAllRanges(); s.addRange(r);
  };
  try { navigator.clipboard.writeText(v).then(done, select); } catch (err) { select(); }
});

/* Tema düğmesi: Sistem → Açık → Koyu */
(function () {
  var THEMES = [["", "Sistem"], ["light", "Açık"], ["dark", "Koyu"]];
  var btn = document.getElementById("theme-btn"); if (!btn) return;
  var root = document.documentElement;
  var cur = function () { return root.getAttribute("data-theme") || ""; };
  var idx = function () { for (var i = 0; i < THEMES.length; i++) if (THEMES[i][0] === cur()) return i; return 0; };
  var paint = function () { btn.textContent = "Tema: " + THEMES[idx()][1]; };
  btn.addEventListener("click", function () {
    var next = THEMES[(idx() + 1) % THEMES.length][0];
    if (next) root.setAttribute("data-theme", next); else root.removeAttribute("data-theme");
    try { next ? localStorage.setItem("tema", next) : localStorage.removeItem("tema"); } catch (err) {}
    paint();
  });
  paint();
})();

/* Telefonda aktif sekmeyi görünür alana kaydır */
(function () {
  var a = document.querySelector('nav.tabs a[aria-current="page"]');
  if (a && a.scrollIntoView && matchMedia("(max-width: 520px)").matches) a.scrollIntoView({ block: "nearest", inline: "center" });
})();
