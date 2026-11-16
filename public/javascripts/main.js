var silly = document.querySelectorAll('[data-silly]');
silly.forEach(function (el) {
  var normal = el.textContent;
  el.onmouseenter = function () { el.textContent = el.getAttribute('data-silly'); };
  el.onmouseleave = function () { el.textContent = normal; };
});

var avatar = document.querySelector('.avatar');
var pokeLine = document.getElementById('poke-line');
var lines = ['heyyy', 'ok again', 'you can stop', 'fine. one more.', 'projects page. go.'];
var pokes = 0;
if (avatar) {
  avatar.onclick = function () {
    pokeLine.textContent = lines[pokes % lines.length];
    pokes = pokes + 1;
    avatar.classList.remove('boop');
    void avatar.offsetWidth;
    avatar.classList.add('boop');
  };
}

var seen = Number(sessionStorage.getItem('pages') || 0) + 1;
sessionStorage.setItem('pages', seen);
document.getElementById('visit-count').textContent = 'pages this visit: ' + seen;

var bye = document.getElementById('come-back');
document.onmouseout = function (e) {
  if (!e.relatedTarget) bye.classList.add('show');
};
bye.onclick = function () { bye.classList.remove('show'); };

document.onclick = function (e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  var star = document.createElement('span');
  star.className = 'spark';
  star.textContent = '✦';
  star.style.left = e.clientX + 'px';
  star.style.top = e.clientY + 'px';
  document.body.appendChild(star);
  setTimeout(function () { star.remove(); }, 600);
};

var form = document.getElementById('contact-form');
if (form) {
  form.onsubmit = function (e) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    if (name && email && message) return;
    e.preventDefault();
    var warning = document.getElementById('form-warning');
    warning.textContent = 'you left a box empty.';
    warning.classList.remove('d-none');
    warning.classList.remove('shake');
    void warning.offsetWidth;
    warning.classList.add('shake');
  };
}
