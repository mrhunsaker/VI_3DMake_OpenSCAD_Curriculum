// Catppuccin theme switcher fix for mdBook
// Intercepts theme button clicks BEFORE book.js can reject unknown theme names
(function () {
  const catppuccinThemes = ['latte', 'frappe', 'macchiato', 'mocha'];

  function applyTheme(theme) {
    const html = document.documentElement;
    // Remove all known theme classes (both mdBook built-ins and Catppuccin)
    html.classList.remove(
      ...catppuccinThemes,
      'light', 'rust', 'coal', 'navy', 'ayu'
    );
    html.classList.add(theme, 'js');
    try {
      localStorage.setItem('mdbook-theme', theme);
    } catch (e) {}
  }

  // Restore saved Catppuccin theme as early as possible (before DOMContentLoaded)
  try {
    const saved = localStorage.getItem('mdbook-theme');
    if (saved && catppuccinThemes.includes(saved)) {
      applyTheme(saved);
    }
  } catch (e) {}

  // Attach intercepting click handlers once the DOM is ready
  function attachHandlers() {
    document.querySelectorAll('#mdbook-theme-list .theme').forEach(function (btn) {
      if (catppuccinThemes.includes(btn.id)) {
        btn.addEventListener('click', function (e) {
          // Stop book.js from seeing this click and doing nothing / overriding
          e.stopImmediatePropagation();
          applyTheme(btn.id);
          // Close the theme popup (book.js normally does this; we replicate it)
          const popup = document.getElementById('mdbook-theme-list');
          if (popup) popup.style.display = 'none';
          const toggle = document.getElementById('mdbook-theme-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
          // Re-show on next toggle click
          setTimeout(function () {
            if (popup) popup.style.display = '';
          }, 300);
        }, true); // useCapture=true so we fire before book.js's bubble-phase handler
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachHandlers);
  } else {
    attachHandlers();
  }
})();