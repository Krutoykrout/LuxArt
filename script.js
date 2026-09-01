(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  const header = document.querySelector('.site-header');

  if (toggle && menu) {
    const close = () => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', () => {
      const opening = menu.hidden;
      menu.hidden = !opening;
      toggle.setAttribute('aria-expanded', String(opening));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  if (header) {
    const syncHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [...document.querySelectorAll('.reveal')];
  items.forEach((item, index) => item.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`);

  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -6% 0px' });
    items.forEach(item => observer.observe(item));
  } else {
    items.forEach(item => item.classList.add('is-visible'));
  }

  if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    const stage = document.querySelector('.hero-stage');
    const board = document.querySelector('.hero-board');
    if (stage && board) {
      stage.addEventListener('pointermove', (event) => {
        const rect = stage.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        board.style.transform = `translate3d(${(x * 5).toFixed(1)}px, ${(y * 4).toFixed(1)}px, 0)`;
      });
      stage.addEventListener('pointerleave', () => { board.style.transform = ''; });
    }
  }
})();
