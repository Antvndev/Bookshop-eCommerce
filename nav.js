// nav.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  // Initialize icon based on current theme attribute
  function updateIcon() {
    if (root.getAttribute('data-theme') === 'dark') {
      themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
      themeIcon.classList.replace('bx-sun', 'bx-moon');
    }
  }
  updateIcon();

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    updateIcon();
  });
});
