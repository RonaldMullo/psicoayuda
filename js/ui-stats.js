// js/ui-stats.js

import { calculateMoodScore, mostCommonMood } from './stats.js';

/**
 * Render the calendar that is in the code within the mood in such a way that it marks the most recent entry.
 */
export function renderCalendar(entries, highlightId = null) {
  const calendar = document.querySelector('#mood-calendar');
  if (!calendar) return;

  calendar.innerHTML = '';

  entries.forEach((entry) => {
    const day = document.createElement('div');
    day.classList.add('calendar-day', `mood-${entry.mood}`);

    // Content: daily for the month
    const date = new Date(entry.date);
    day.textContent = String(date.getDate()).padStart(2, '0');

    // Tooltip 
    day.title = `${date.toLocaleDateString()} — ${entry.mood.toUpperCase()}${
      entry.notes ? `\nNotas: ${entry.notes}` : ''
    }`;

    if (highlightId && entry.id === highlightId) {
      day.classList.add('new-entry');
      // remove animation
      setTimeout(() => {
        day.classList.remove('new-entry');
      }, 800);
    }

    calendar.appendChild(day);
  });
}

/**
 * Update daily counters, totals, positives, negatives, and advanced statistics.
 */
export function updateStatsPanel(entries) {
  const totalSpan = document.querySelector('#total-days');
  const posSpan = document.querySelector('#positive-days');
  const neuSpan = document.querySelector('#neutral-days');
  const negSpan = document.querySelector('#negative-days');

  const total = entries.length;
  const positive = entries.filter((e) => e.mood === 'positive').length;
  const neutral = entries.filter((e) => e.mood === 'neutral').length;
  const negative = entries.filter((e) => e.mood === 'negative').length;

  if (totalSpan) totalSpan.textContent = total;
  if (posSpan) posSpan.textContent = positive;
  if (neuSpan) neuSpan.textContent = neutral;
  if (negSpan) negSpan.textContent = negative;

  // Advanced statitics 
  const scoreSpan = document.querySelector('#mood-score');
  const commonSpan = document.querySelector('#common-mood');

  if (scoreSpan) {
    scoreSpan.textContent = calculateMoodScore(entries);
  }

  if (commonSpan) {
    commonSpan.textContent = mostCommonMood(entries);
  }
}
