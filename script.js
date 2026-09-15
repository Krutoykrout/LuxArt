(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  const header = document.querySelector('.site-header');
  const desktop = window.matchMedia('(min-width: 981px)');

  const setMenu = (open, { restoreFocus = false } = {}) => {
    if (!toggle || !menu) return;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    if (restoreFocus) toggle.focus();
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => setMenu(menu.hidden));
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !menu.hidden) setMenu(false, { restoreFocus: true });
    });
    document.addEventListener('pointerdown', event => {
      if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
    });
    const syncBreakpoint = event => { if (event.matches) setMenu(false); };
    desktop.addEventListener?.('change', syncBreakpoint);
  }

  if (header) {
    let scheduled = false;
    const syncHeader = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 18);
      scheduled = false;
    };
    syncHeader();
    window.addEventListener('scroll', () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(syncHeader);
      }
    }, { passive: true });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [...document.querySelectorAll('.reveal')];

  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    items.forEach(item => observer.observe(item));
  } else {
    items.forEach(item => item.classList.add('is-visible'));
  }

  // Neutral analytics hook: no vendor or endpoint is added without repository data.
  document.addEventListener('click', event => {
    const link = event.target.closest('[data-cta]');
    if (!link) return;
    window.dispatchEvent(new CustomEvent('luxart:cta', {
      detail: { name: link.dataset.cta, href: link.getAttribute('href') }
    }));
  });
})();
