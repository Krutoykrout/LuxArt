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
  const canAnimate = typeof Element !== 'undefined' && typeof Element.prototype.animate === 'function';
  const items = [...document.querySelectorAll('.reveal')];

  const ease = 'cubic-bezier(.22,.8,.24,1)';

  const profileFor = item => {
    let x = 0;
    let y = 30;
    let scale = 0.985;
    let duration = 820;
    let delay = 0;

    if (item.matches('.hero-copy')) {
      x = -56; y = 0; duration = 930; delay = 70;
    } else if (item.matches('.hero-board')) {
      x = 62; y = 0; duration = 980; delay = 170;
    } else if (item.matches('.hero-strip')) {
      y = 38; duration = 860; delay = 280;
    } else if (item.matches('.direction-card--taxi, .requirement-main, .conditions-copy, .faq-title, .contact-copy')) {
      x = -48; y = 0; duration = 900;
    } else if (item.matches('.direction-card--cargo, .documents-panel, .contact-actions')) {
      x = 48; y = 0; duration = 900; delay = 90;
    } else if (item.matches('.condition-row')) {
      x = 38; y = 0; duration = 760;
      delay = [...item.parentElement.children].indexOf(item) * 75;
    } else if (item.matches('.step-card')) {
      y = 42; duration = 820;
      delay = [...item.parentElement.children].indexOf(item) * 95;
    } else if (item.matches('.faq-item')) {
      x = 30; y = 0; duration = 720;
      delay = [...item.parentElement.children].indexOf(item) * 65;
    } else if (item.matches('.section-head')) {
      y = 32; duration = 820;
    }

    return { x, y, scale, duration, delay };
  };

  const animateChildren = item => {
    if (!canAnimate) return;

    let children = [];
    let x = 0;
    let y = 18;
    let baseDelay = 160;
    let step = 80;

    if (item.matches('.hero-board')) {
      children = [...item.querySelectorAll('.board-topline, .board-main, .board-grid, .board-footer')];
      y = 22;
      baseDelay = 300;
      step = 105;
    } else if (item.matches('.hero-strip')) {
      children = [...item.querySelectorAll('li')];
      y = 20;
      baseDelay = 390;
      step = 85;
    } else if (item.matches('.contact-actions')) {
      children = [...item.querySelectorAll('a')];
      x = 22;
      y = 0;
      baseDelay = 240;
      step = 75;
    } else if (item.matches('.direction-card')) {
      children = [...item.querySelectorAll('.direction-icon, .direction-card__body, .direction-card__bottom')];
      y = 16;
      baseDelay = 210;
      step = 90;
    } else if (item.matches('.requirement-main, .documents-panel')) {
      children = [...item.children];
      y = 16;
      baseDelay = 210;
      step = 85;
    }

    children.forEach((child, index) => {
      child.animate([
        { opacity: 0, transform: `translate3d(${x}px, ${y}px, 0)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      ], {
        duration: 620,
        delay: baseDelay + index * step,
        easing: ease,
        fill: 'both'
      });
    });
  };

  const revealItem = item => {
    const { x, y, scale, duration, delay } = profileFor(item);

    if (!canAnimate) {
      item.classList.add('is-visible');
      return;
    }

    item.style.transition = 'none';
    item.classList.add('is-visible');
    animateChildren(item);

    const animation = item.animate([
      {
        opacity: 0,
        transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        filter: 'blur(5px)'
      },
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        filter: 'blur(0)'
      }
    ], {
      duration,
      delay,
      easing: ease,
      fill: 'both'
    });

    const cleanup = () => {
      item.style.transition = '';
      item.classList.remove('reveal');
      item.classList.add('is-visible');
    };

    animation.finished.then(cleanup).catch(cleanup);
  };

  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealItem(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -7% 0px' });

    items.forEach(item => observer.observe(item));

    const media = [...document.querySelectorAll('main img, .footer img')];
    const mediaObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        if (canAnimate) {
          image.animate([
            { opacity: 0, transform: 'translate3d(0, 24px, 0) scale(.94)', filter: 'blur(4px)' },
            { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)', filter: 'blur(0)' }
          ], { duration: 760, easing: ease, fill: 'both' });
        }
        mediaObserver.unobserve(image);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    media.forEach(image => mediaObserver.observe(image));

    requestAnimationFrame(() => {
      const shell = document.querySelector('.header-shell');
      const logo = document.querySelector('.site-header .brand img');

      shell?.animate([
        { opacity: 0, transform: 'translate3d(0, -18px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      ], { duration: 720, easing: ease, fill: 'both' });

      logo?.animate([
        { opacity: 0, transform: 'translate3d(-14px, 0, 0) scale(.88)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }
      ], { duration: 820, delay: 140, easing: ease, fill: 'both' });
    });
  } else {
    items.forEach(item => {
      item.classList.add('is-visible');
      item.classList.remove('reveal');
    });
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
