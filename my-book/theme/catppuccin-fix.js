// Catppuccin theme switcher fix for mdBook
// Bypasses book.js theme whitelist and handles Catppuccin flavor switching
window.addEventListener('load', function () {
    const catppuccinThemes = ['latte', 'frappe', 'macchiato', 'mocha'];

    function applyTheme(theme) {
        // Remove all known classes and re-apply chosen theme
        const html = document.documentElement;
        html.classList.remove(...catppuccinThemes, 'light', 'rust', 'coal', 'navy', 'ayu');
        html.classList.add(theme, 'js');
        try {
            localStorage.setItem('mdbook-theme', theme);
        } catch (e) {}
    }

    // Restore saved theme on page load
    try {
        const saved = localStorage.getItem('mdbook-theme');
        if (saved && catppuccinThemes.includes(saved)) {
            applyTheme(saved);
        }
    } catch (e) {}

    // Attach click handlers to Catppuccin theme buttons
    document.querySelectorAll('#mdbook-theme-list .theme').forEach(function (btn) {
        if (catppuccinThemes.includes(btn.id)) {
            btn.addEventListener('click', function () {
                applyTheme(this.id);
            });
        }
    });
});