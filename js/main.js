// js/main.js

import { initMoodUI } from './ui-mood.js';
import { applyTranslations, setLang } from './i18n.js';

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

  const saved = localStorage.getItem('lang') || 'es';
  setLang(saved);

  // UI features
  initModals();
  initMoodUI();
});
