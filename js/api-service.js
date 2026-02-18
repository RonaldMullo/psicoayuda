// js/api-service.js
//
// Privacy-first: avoid third-party calls by default.
// If you later enable online content, do it via a backend proxy (recommended),
// not directly from the client, to reduce metadata leakage.

const ONLINE_KEY = 'nhoa-online-content-v1';

// Offline libraries (safe defaults)
const OFFLINE_ADVICE = {
  positive: [
    "Reconoce lo que hiciste bien hoy, por pequeño que parezca.",
    "Aprovecha esta energía para cuidar un hábito que te hace bien."
  ],
  neutral: [
    "Haz una pausa breve: respira 4 segundos, exhala 6, repite 3 veces.",
    "Nombra tu emoción sin juzgarla: 'Estoy sintiendo…' y déjala pasar."
  ],
  negative: [
    "Hoy toca suavidad: reduce expectativas y elige una sola cosa posible.",
    "Si puedes, busca apoyo de alguien de confianza. No tienes que cargarlo sola/o."
  ]
};

const OFFLINE_ACTIVITIES = {
  positive: [
    "Escribe 3 cosas que agradeces de hoy.",
    "Comparte un mensaje amable con alguien importante para ti."
  ],
  neutral: [
    "Estira cuello y hombros 2 minutos y toma agua.",
    "Ordena un espacio pequeño (una mesa o mochila) por 5 minutos."
  ],
  negative: [
    "Pon una mano en el pecho y otra en el abdomen; respira lento 2 minutos.",
    "Haz 'anclaje 5-4-3-2-1': 5 cosas que ves, 4 que sientes, 3 que oyes, 2 que hueles, 1 que saboreas."
  ]
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function isOnlineContentEnabled() {
  return localStorage.getItem(ONLINE_KEY) === '1';
}

export function setOnlineContentEnabled(on) {
  localStorage.setItem(ONLINE_KEY, on ? '1' : '0');
}

export async function getAdviceForMood(mood) {
  // Offline only (recommended for vulnerable users)
  return pick(OFFLINE_ADVICE[mood] || OFFLINE_ADVICE.neutral);
}

export async function getActivityForMood(mood) {
  return pick(OFFLINE_ACTIVITIES[mood] || OFFLINE_ACTIVITIES.neutral);
}

export async function getDailyQuote() {
  // Offline quote to avoid third-party calls
  const quotes = [
    "Un paso pequeño también es avance.",
    "Respirar también es una forma de cuidarte.",
    "No tienes que hacerlo perfecto para que sea valioso."
  ];
  return pick(quotes);
}
