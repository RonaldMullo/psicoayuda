// js/ui-mood.js

import { getAllMoodEntries, saveMoodEntry, clearMoodEntries, isPrivacyMode, setPrivacyMode } from './mood-storage.js';
import { getAdviceForMood, getActivityForMood } from './api-service.js';
import { renderCalendar, updateStatsPanel } from './ui-stats.js';
import { t, getLocale } from './i18n.js';

function buildEntry({ mood, notes, advice, activity, privacyOn }) {
  const now = new Date();

  // Privacy mode: minimize stored data.
  if (privacyOn) {
    return {
      id: Date.now(),
      date: now.toISOString(),
      mood,
      emoji: mood === 'positive' ? '😊' : mood === 'neutral' ? '😐' : '😔'
    };
  }

  return {
    id: Date.now(),
    date: now.toISOString(),
    mood,
    notes,
    advice,
    activity,
    weekday: now.toLocaleDateString(getLocale(), { weekday: 'long' }),
    month: now.getMonth(),
    year: now.getFullYear(),
    emoji: mood === 'positive' ? '😊' : mood === 'neutral' ? '😐' : '😔'
  };
}

function refreshUI(entries) {
  updateStatsPanel(entries);
  renderCalendar(entries);
}

function applyPrivacyUI(privacyOn) {
  const notes = document.querySelector('#mood-notes');
  const pill = document.querySelector('#privacy-pill');

  if (pill) pill.hidden = !privacyOn;

  if (notes) {
    notes.disabled = privacyOn;
    notes.placeholder = privacyOn ? t('notesDisabled') : t('notesPlaceholder');
    if (privacyOn) notes.value = '';
  }
}

export function initMoodUI() {
  const moodForm = document.querySelector('#mood-form');
  const adviceText = document.querySelector('#advice-text');
  const activityText = document.querySelector('#activity-text');
  const clearButton = document.querySelector('#clear-history');

  const privacyBtn = document.querySelector('#privacyModeBtn');
  const quickHideBtn = document.querySelector('#quickHideBtn');
  const cover = document.querySelector('#screenCover');
  const coverBackBtn = document.querySelector('#coverBackBtn');

  // Initial
  const privacyOn = isPrivacyMode();
  applyPrivacyUI(privacyOn);

  let entries = getAllMoodEntries();
  refreshUI(entries);

  // Privacy mode toggle (header button)
  privacyBtn?.addEventListener('click', () => {
    const next = !isPrivacyMode();
    setPrivacyMode(next);
    applyPrivacyUI(next);

    // reload entries from selected storage
    entries = getAllMoodEntries();
    refreshUI(entries);

    // Discreet UX: adjust title while privacy is ON
    document.title = next ? 'Notas' : 'Nhoa · Ayuda Psicológica';
  });

  // Quick hide overlay (no external redirects)
  quickHideBtn?.addEventListener('click', () => {
    if (!cover) return;
    cover.hidden = false;
  });

  coverBackBtn?.addEventListener('click', () => {
    if (!cover) return;
    cover.hidden = true;
  });

  // Save mood
  moodForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = new FormData(moodForm);
    const mood = form.get('mood');

    if (!mood) {
      alert(t('selectMoodAlert'));
      return;
    }

    const privacyOnNow = isPrivacyMode();
    const notes = privacyOnNow ? '' : String(form.get('notes') || '').trim();

    const advice = await getAdviceForMood(mood);
    const activity = await getActivityForMood(mood);

    // Update support panel (in-memory display)
    if (adviceText) adviceText.textContent = advice;
    if (activityText) activityText.textContent = activity;

    const entry = buildEntry({ mood, notes, advice, activity, privacyOn: privacyOnNow });
    saveMoodEntry(entry);

    entries = getAllMoodEntries();
    refreshUI(entries);

    moodForm.reset();
  });

  // Clear history
  clearButton?.addEventListener('click', () => {
    const ok = confirm(t('confirmClear'));
    if (!ok) return;
    clearMoodEntries();
    entries = [];
    refreshUI(entries);

    if (adviceText) adviceText.textContent = t('advicePlaceholder');
    if (activityText) activityText.textContent = t('activityPlaceholder');
  });
}
