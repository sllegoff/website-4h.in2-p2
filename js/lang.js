document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('lang-selector');

    async function setLanguage(lang) {
        const res = await fetch(`../lang/${lang}.json`);
        const translations = await res.json();
        if (translations['titel']) document.title = translations['titel'];
        document.querySelectorAll('[langdata]').forEach(el => {
            const key = el.getAttribute('langdata');
            if (translations[key]) el.innerHTML = translations[key]; // <-- innerHTML
        });
        localStorage.setItem('lang', lang);
    }
    const savedLang = localStorage.getItem('lang') || 'nl';
    selector.value = savedLang;
    setLanguage(savedLang);

    selector.addEventListener('change', (e) => setLanguage(e.target.value));
});