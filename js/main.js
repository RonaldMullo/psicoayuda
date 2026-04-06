// js/main.js

import { initMoodUI } from './ui-mood.js';
import { applyTranslations, setLang, t } from './i18n.js';



function updateBookingWhatsAppLink() {
  const bookingBtn = document.querySelector('#bookingWhatsAppBtn');
  if (!bookingBtn) return;

  const phone = '593962900907';
  const message = encodeURIComponent(t('bookingWhatsappMessage'));
  bookingBtn.href = `https://wa.me/${phone}?text=${message}`;
}

function initLangMenu() {
  const toggle = document.querySelector('#langToggle');
  const menu = document.querySelector('#langMenu');

  const closeMenu = () => {
    if (!menu || !toggle) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle?.addEventListener('click', () => {
    if (!menu) return;
    const isOpen = menu.hidden === false;
    menu.hidden = isOpen;
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });

  menu?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    setLang(btn.dataset.lang);
    updateBookingWhatsAppLink();
    closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (!menu || !toggle) return;
    if (!menu.hidden && !menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}


function initMobileNav() {
  const nav = document.querySelector('.top-nav');
  const btn = document.querySelector('#menuBtn');
  const linksWrap = document.querySelector('#navLinks');

  const langMenu = document.querySelector('#langMenu');
  const langToggle = document.querySelector('#langToggle');

  const closeNav = () => {
    if (!nav || !btn) return;
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };

  const closeLang = () => {
    if (!langMenu || !langToggle) return;
    langMenu.hidden = true;
    langToggle.setAttribute('aria-expanded', 'false');
  };

  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!nav) return;
    const isOpen = nav.classList.contains('open');
    // one open at a time
    closeLang();
    if (isOpen) {
      closeNav();
    } else {
      nav.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav || !btn) return;
    if (!nav.classList.contains('open')) return;
    const target = e.target;
    if (btn.contains(target)) return;
    if (linksWrap && linksWrap.contains(target)) return;
    closeNav();
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  // Close if resizing back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeNav();
  });
}


function initModals() {
  const openers = document.querySelectorAll('[data-open-modal]');
  const modals = document.querySelectorAll('.modal');

  const openModal = (id) => {
    const el = document.querySelector(`#modal-${id}`);
    if (!el) return;
    el.hidden = false;
    // Focus first focusable
    const focusable = el.querySelector('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])');
    focusable?.focus();
  };

  const closeModal = (el) => {
    if (!el) return;
    el.hidden = true;
  };

  openers.forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-open-modal')));
  });

  modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });

    modal.querySelectorAll('[data-close-modal]').forEach((btn) => {
      btn.addEventListener('click', () => closeModal(modal));
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    modals.forEach((m) => { if (!m.hidden) closeModal(m); });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Year
  const y = document.querySelector('#year');
  if (y) y.textContent = String(new Date().getFullYear());

  // i18n
  applyTranslations();
  initLangMenu();
  initMobileNav();

  const saved = localStorage.getItem('lang') || 'es';
  setLang(saved);
  updateBookingWhatsAppLink();

  // UI features
  initModals();
  initMoodUI();
});
