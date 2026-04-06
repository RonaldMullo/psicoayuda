const LOCALE_MAP = { es: "es-EC", en: "en-US", pt: "pt-BR" };

const STRINGS = {
  es: {
    headerTitle: "Nhoa",
    tagline: "Ayuda psicológica clínica, cálida y segura.",
    navServices: "Servicios",
    navTools: "Herramientas",
    navAbout: "Sobre Nhoa",
    navTestimonials: "Testimonios",
    navContact: "Contacto",
    privacyModeBtn: "Modo privado",
    ctaBook: "Agendar sesión",
    ctaTools: "Usar herramientas",

    heroTitle: "Apoyo psicológico con calidez, confidencialidad y seguridad.",
    heroSubtitle: "Para niñas/os, jóvenes y adultos. Familias y parejas. Atención sensible para personas en contextos de alta vulnerabilidad.",
    heroPrivacyNote: "Nota de privacidad: puedes usar la app sin crear cuenta. En “Modo privado” reducimos almacenamiento y ocultamos datos en pantalla.",
    heroCardTitle: "Seguridad primero",
    heroCardItem1: "Minimización de datos",
    heroCardItem2: "Controles de pantalla privada",
    heroCardItem3: "Buenas prácticas de cifrado y acceso",

    servicesTitle: "Nuestros servicios",
    servicesSubtitle: "Atención psicológica con enfoque clínico y humano. Online y presencial (según disponibilidad).",
    svc1Title: "Atención psicológica individual",
    svc1Body: "Niñas/os, adolescentes y adultos: evaluación, acompañamiento y plan de trabajo.",
    svc2Title: "Familias y crianza",
    svc2Body: "Orientación para madres, padres y cuidadores; habilidades emocionales y comunicación.",
    svc3Title: "Parejas y matrimonios",
    svc3Body: "Acompañamiento en acuerdos, vínculo, confianza, conflictos y proyectos de vida.",
    svc4Title: "Alta vulnerabilidad",
    svc4Body: "Uso con mínima información personal, límites claros de confidencialidad, y opciones de seguridad en pantalla.",

    toolsTitle: "Herramientas de autocuidado",
    toolsSubtitle: "Registro breve de emociones y orientación diaria. No reemplaza atención de emergencia.",

    moodTitle: "¿Cómo te sientes hoy?",
    moodLegend: "Elige tu estado",
    moodPositive: "Bien",
    moodNeutral: "Estable",
    moodNegative: "Bajo ánimo",
    notesLabel: "Notas del día (opcional)",
    notesPlaceholder: "¿Qué influyó en tu estado emocional hoy?",
    notesDisabled: "Notas desactivadas en modo privado.",
    saveBtn: "Guardar",

    quickHideBtn: "Ocultar pantalla",
    privacyPill: "Modo privado activo",
    privacyHow: "¿Cómo protegemos tu privacidad?",

    supportTitle: "Apoyo para hoy",
    dailyAdvice: "Consejo",
    advicePlaceholder: "Aquí aparecerá un consejo según tu estado.",
    suggestedActivity: "Actividad",
    activityPlaceholder: "Aquí aparecerá una actividad que podría ayudarte.",

    historyTitle: "Tu historial",
    clearHistory: "Borrar historial",
    confirmClear: "¿Seguro que deseas borrar tu historial en este dispositivo?",
    selectMoodAlert: "Por favor selecciona cómo te sientes hoy.",

    aboutTitle: "Sobre Nhoa",
    aboutBody1: "Nhoa nace para ofrecer apoyo psicológico con una estética clínica y cálida, y con seguridad como prioridad.",
    aboutBody2: "Para contextos de alta vulnerabilidad, priorizamos: mínima recolección de datos, controles de privacidad en pantalla y opciones sin cuenta.",
    aboutNoticeTitle: "Importante",
    aboutNoticeBody: "Si estás en una situación de riesgo inmediato, busca ayuda local de emergencia. Esta app no sustituye servicios de emergencia.",
    aboutMediaHint: "Puedes reemplazar esta imagen por una foto profesional o ilustración.",

    testimonialsTitle: "Testimonios",
    testimonialsSubtitle: "Mensajes anónimos o con iniciales. No publicamos detalles sensibles.",
    t1: "Me sentí acompañada sin presión. El modo privado me dio tranquilidad.",
    t2: "La guía diaria es breve y útil. Me ayuda a ponerle nombre a lo que siento.",
    t3: "Me gustó que no pide datos innecesarios.",
    t4: "La experiencia es muy cálida y clara. Recomiendo para familias.",

    contactTitle: "Tu próximo paso puede ser simple",
    contactSubtitle: "Agenda una sesión o deja un mensaje. Puedes usar un alias. Comparte solo lo necesario.",
    contactNameLabel: "Nombre o alias",
    contactNamePh: "Nombre o alias",
    contactPrivacy: "Consejo de seguridad: si estás en un dispositivo compartido, activa “Modo privado” y evita escribir información identificable.",

    bookingTitle: "Agendar sesión",
    bookingBody: "Esta sección es un lugar seguro para ti. Agenda con manejo de husos horarios, reprogramación flexible y verificación de consentimiento.",
    bookingNoticeTitle: "Privacidad",
    bookingNoticeBody: "Evita compartir datos sensibles por formularios abiertos. Usa canales seguros y consentimiento informado.",
    bookingWhatsappMessage: "Hola, me gustaría agendar una sesión. ¿Qué horarios tienes disponibles?",
    privacyTitle: "Privacidad y uso seguro",
    privacy1: "Puedes usar la app sin cuenta.",
    privacy2: "En “Modo privado” desactivamos notas y usamos almacenamiento temporal.",
    privacy3: "Evita escribir nombres, direcciones o detalles identificables en notas.",
    privacy4: "Si el dispositivo es compartido, usa “Ocultar pantalla” y borra historial al finalizar.",
    okBtn: "Entendido",
    bookingWhatsappBtn: "Agendar cita por WhatsApp",

    coverTitle: "Pantalla en pausa",
    coverBody: "Toca “Volver” para regresar.",
    coverBack: "Volver"
  },

  en: {
    headerTitle: "Nhoa",
    tagline: "Clinical, warm, and safe psychological support.",
    navServices: "Services",
    navTools: "Tools",
    navAbout: "About",
    navTestimonials: "Testimonials",
    navContact: "Contact",
    privacyModeBtn: "Private mode",
    ctaBook: "Book a session",
    ctaTools: "Use tools",

    heroTitle: "Psychological support with warmth, confidentiality, and safety.",
    heroSubtitle: "For children, teens, and adults. Families and couples. Sensitive support for high‑vulnerability contexts.",
    heroPrivacyNote: "Privacy note: you can use the app without an account. In “Private mode” we reduce storage and hide data on screen.",
    heroCardTitle: "Safety first",
    heroCardItem1: "Data minimization",
    heroCardItem2: "Private-screen controls",
    heroCardItem3: "Encryption & access best practices",

    servicesTitle: "Our services",
    servicesSubtitle: "Human, clinically-informed support. Online and in-person (as available).",
    svc1Title: "Individual therapy",
    svc1Body: "Children, teens, and adults: assessment, support, and a care plan.",
    svc2Title: "Families & parenting",
    svc2Body: "Guidance for caregivers; emotional skills and communication.",
    svc3Title: "Couples",
    svc3Body: "Support for agreements, bonding, conflict, and life projects.",
    svc4Title: "High vulnerability",
    svc4Body: "Use with minimal personal data, clear confidentiality boundaries, and private-screen options.",

    toolsTitle: "Self-care tools",
    toolsSubtitle: "A brief mood check-in and daily guidance. Not a crisis service.",

    moodTitle: "How are you feeling today?",
    moodLegend: "Choose your mood",
    moodPositive: "Good",
    moodNeutral: "Okay",
    moodNegative: "Low",
    notesLabel: "Notes (optional)",
    notesPlaceholder: "What influenced your mood today?",
    notesDisabled: "Notes are disabled in private mode.",
    saveBtn: "Save",

    quickHideBtn: "Hide screen",
    privacyPill: "Private mode on",
    privacyHow: "How do we protect your privacy?",

    supportTitle: "Support for today",
    dailyAdvice: "Tip",
    advicePlaceholder: "A tip will appear here based on your mood.",
    suggestedActivity: "Activity",
    activityPlaceholder: "An activity will appear here to help you.",

    historyTitle: "Your history",
    clearHistory: "Clear history",
    confirmClear: "Are you sure you want to delete your history on this device?",
    selectMoodAlert: "Please select how you feel today.",

    aboutTitle: "About Nhoa",
    aboutBody1: "Nhoa is designed for warm, clinical support—security comes first.",
    aboutBody2: "For high-vulnerability contexts we prioritize: data minimization, private-screen controls, and no-account options.",
    aboutNoticeTitle: "Important",
    aboutNoticeBody: "If you're in immediate danger, seek local emergency help. This app is not a replacement for emergency services.",
    aboutMediaHint: "You can replace this image with a professional photo or illustration.",

    testimonialsTitle: "Testimonials",
    testimonialsSubtitle: "Anonymous or initial-based quotes. We don't publish sensitive details.",
    t1: "I felt supported without pressure. Private mode gave me peace of mind.",
    t2: "Daily guidance is short and useful. It helps me name what I feel.",
    t3: "I liked that it doesn't ask for unnecessary info.",
    t4: "Warm and clear experience. Great for families.",

    contactTitle: "Your next step can be simple",
    contactSubtitle: "Book a session or leave a message. You can use an alias. Share only what's necessary.",
    contactNameLabel: "Name or alias",
    contactNamePh: "Name or alias",
    contactPrivacy: "Safety tip: if you're on a shared device, enable “Private mode” and avoid entering identifying details.",

    bookingTitle: "Book a session",
    bookingBody: "This section is a safe space for you. Schedule with time zone management, flexible rescheduling, and consent verification.",
    bookingNoticeTitle: "Privacy",
    bookingNoticeBody: "Avoid sharing sensitive data through open forms. Use secure channels and informed consent.",
    bookingWhatsappMessage: "Hello, I would like to schedule a session. What times do you have available?",
    privacyTitle: "Privacy and safer use",
    privacy1: "You can use the app without an account.",
    privacy2: "In “Private mode” we disable notes and use temporary storage.",
    privacy3: "Avoid writing names, addresses, or identifying details in notes.",
    privacy4: "If the device is shared, use “Hide screen” and clear history when done.",
    okBtn: "Got it",
    bookingWhatsappBtn: "Book via WhatsApp",

    coverTitle: "Screen paused",
    coverBody: "Tap “Back” to return.",
    coverBack: "Back"
  },

  pt: {
    headerTitle: "Nhoa",
    tagline: "Apoio psicológico clínico, acolhedor e seguro.",
    navServices: "Serviços",
    navTools: "Ferramentas",
    navAbout: "Sobre",
    navTestimonials: "Depoimentos",
    navContact: "Contato",
    privacyModeBtn: "Modo privado",
    ctaBook: "Agendar sessão",
    ctaTools: "Usar ferramentas",

    heroTitle: "Apoio psicológico com acolhimento, confidencialidade e segurança.",
    heroSubtitle: "Para crianças, jovens e adultos. Famílias e casais. Apoio sensível em contextos de alta vulnerabilidade.",
    heroPrivacyNote: "Nota de privacidade: você pode usar sem conta. No “Modo privado”, reduzimos armazenamento e ocultamos dados na tela.",
    heroCardTitle: "Segurança em primeiro lugar",
    heroCardItem1: "Minimização de dados",
    heroCardItem2: "Controles de tela privada",
    heroCardItem3: "Boas práticas de criptografia e acesso",

    servicesTitle: "Nossos serviços",
    servicesSubtitle: "Atendimento humano e clínico. Online e presencial (conforme disponibilidade).",
    svc1Title: "Atendimento individual",
    svc1Body: "Crianças, jovens e adultos: avaliação, acompanhamento e plano de cuidado.",
    svc2Title: "Famílias e parentalidade",
    svc2Body: "Orientação a responsáveis; habilidades emocionais e comunicação.",
    svc3Title: "Casais",
    svc3Body: "Acordos, vínculo, conflitos e projetos de vida.",
    svc4Title: "Alta vulnerabilidade",
    svc4Body: "Uso com mínimos dados pessoais, limites de confidencialidade e opções de tela privada.",

    toolsTitle: "Ferramentas de autocuidado",
    toolsSubtitle: "Registro breve de emoções e orientação diária. Não é serviço de crise.",

    moodTitle: "Como você está hoje?",
    moodLegend: "Escolha seu estado",
    moodPositive: "Bem",
    moodNeutral: "Estável",
    moodNegative: "Baixo",
    notesLabel: "Notas (opcional)",
    notesPlaceholder: "O que influenciou seu estado hoje?",
    notesDisabled: "Notas desativadas no modo privado.",
    saveBtn: "Salvar",

    quickHideBtn: "Ocultar tela",
    privacyPill: "Modo privado ativo",
    privacyHow: "Como protegemos sua privacidade?",

    supportTitle: "Apoio para hoje",
    dailyAdvice: "Dica",
    advicePlaceholder: "Uma dica aparecerá aqui conforme seu estado.",
    suggestedActivity: "Atividade",
    activityPlaceholder: "Uma atividade aparecerá aqui para ajudar.",

    historyTitle: "Seu histórico",
    clearHistory: "Apagar histórico",
    confirmClear: "Tem certeza que deseja apagar o histórico neste dispositivo?",
    selectMoodAlert: "Por favor selecione como você está hoje.",

    aboutTitle: "Sobre Nhoa",
    aboutBody1: "Nhoa foi criada para apoio clínico e acolhedor, com segurança como prioridade.",
    aboutBody2: "Em alta vulnerabilidade priorizamos: minimização de dados, controles de tela privada e opção sem conta.",
    aboutNoticeTitle: "Importante",
    aboutNoticeBody: "Em risco imediato, procure ajuda de emergência local. Este app não substitui emergências.",
    aboutMediaHint: "Você pode trocar esta imagem por uma foto profissional ou ilustração.",

    testimonialsTitle: "Depoimentos",
    testimonialsSubtitle: "Mensagens anônimas ou com iniciais. Não publicamos detalhes sensíveis.",
    t1: "Senti apoio sem pressão. O modo privado me deu tranquilidade.",
    t2: "A orientação diária é curta e útil. Ajuda a nomear o que sinto.",
    t3: "Gostei que não pede dados desnecessários.",
    t4: "Experiência acolhedora e clara. Recomendo para famílias.",

    contactTitle: "Seu próximo passo pode ser simples",
    contactSubtitle: "Agende uma sessão ou deixe uma mensagem. Você pode usar um apelido. Compartilhe só o necessário.",
    contactNameLabel: "Nome ou apelido",
    contactNamePh: "Nome ou apelido",
    contactPrivacy: "Dica de segurança: em dispositivo compartilhado, ative “Modo privado” e evite dados identificáveis.",

    bookingTitle: "Agendar sessão",
    bookingBody: "Esta seção é um lugar seguro para você. Agendamento com gerenciamento de fusos horários, reprogramação flexível e verificação de consentimento.",
    bookingNoticeTitle: "Privacidade",
    bookingNoticeBody: "Evite dados sensíveis em formulários abertos. Use canais seguros e consentimento informado.",
    bookingWhatsappMessage: "Olá, gostaria de agendar uma sessão. Quais horários você tem disponíveis?",
    privacyTitle: "Privacidade e uso seguro",
    privacy1: "Você pode usar sem conta.",
    privacy2: "No “Modo privado”, desativamos notas e usamos armazenamento temporário.",
    privacy3: "Evite escrever nomes, endereços ou detalhes identificáveis nas notas.",
    privacy4: "Se o dispositivo for compartilhado, use “Ocultar tela” e apague o histórico ao finalizar.",
    okBtn: "Entendido",

    coverTitle: "Tela em pausa",
    coverBody: "Toque “Voltar” para retornar.",
    coverBack: "Voltar"
  }
};

let currentLang = "es";

export function getLocale() {
  return LOCALE_MAP[currentLang] || "es-EC";
}

export function t(key) {
  return STRINGS[currentLang]?.[key] ?? STRINGS.es[key] ?? key;
}

export function setLang(lang) {
  currentLang = STRINGS[lang] ? lang : "es";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
}

export function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });
}
