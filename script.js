const menuButton = document.querySelector('.menu');
const mobileNav = document.querySelector('#mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    mobileNav.hidden = open;
    mobileNav.classList.toggle('is-open', !open);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
      mobileNav.classList.remove('is-open');
    });
  });
}
