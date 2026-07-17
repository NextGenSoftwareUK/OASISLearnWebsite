'use strict';

// ── Copy-to-clipboard for code blocks ──────────────────────
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const pre = btn.closest('.code-block').querySelector('pre');
    const text = pre.innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
    });
  });
});

// ── Scroll-spy: highlight rail links ───────────────────────
const railLinks = document.querySelectorAll('.rail-nav a');
if (railLinks.length) {
  const headings = Array.from(document.querySelectorAll('h2[id], h3[id]'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        railLinks.forEach(l => l.classList.remove('active'));
        const match = document.querySelector(`.rail-nav a[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-10% 0px -80% 0px' });
  headings.forEach(h => observer.observe(h));
}

// ── Mobile sidebar toggle ───────────────────────────────────
const menuBtn = document.querySelector('.mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');
if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== menuBtn)
      sidebar.classList.remove('open');
  });
}

// ── Mark current sidebar nav item as active ─────────────────
const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav-item').forEach(link => {
  const href = link.getAttribute('href');
  if (!href) return;
  const linkPath = href.replace(/\/$/, '') || '/';
  if (currentPath === linkPath || currentPath.endsWith(linkPath)) {
    link.classList.add('active');
  }
});
