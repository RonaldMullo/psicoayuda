// js/mood-storage.js
//
// Privacy-aware storage:
// - Normal mode: localStorage (persists on device)
// - Private mode: sessionStorage (clears when tab closes)
// NOTE: In production for sensitive users, prefer encryption at rest and minimal data collection.

const STORAGE_KEY = 'nhoa-mood-entries-v1';
const PRIVACY_KEY = 'nhoa-privacy-mode-v1';

function getStore() {
  const privacyOn = localStorage.getItem(PRIVACY_KEY) === '1';
  return privacyOn ? sessionStorage : localStorage;
}

export function isPrivacyMode() {
  return localStorage.getItem(PRIVACY_KEY) === '1';
}

export function setPrivacyMode(on) {
  localStorage.setItem(PRIVACY_KEY, on ? '1' : '0');

  // When enabling privacy mode, copy and then clear persistent data to reduce exposure.
  if (on) {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      sessionStorage.setItem(STORAGE_KEY, raw);
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

/**
 * Returns all entries saved. Always returns an array.
 */
export function getAllMoodEntries() {
  const store = getStore();
  const raw = store.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Saves a new entry.
 */
export function saveMoodEntry(entry) {
  const store = getStore();
  const current = getAllMoodEntries();
  current.push(entry);
  store.setItem(STORAGE_KEY, JSON.stringify(current));
}

/**
 * Deletes all entries in both stores.
 */
export function clearMoodEntries() {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY);
}
