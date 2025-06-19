
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  // Theme toggle
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

  // Scrollspy
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateLinkOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100; // adjust for fixed nav height
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav-link[href="#${sectionId}"]`)
          ?.classList.add("active-link");
      } else {
        document
          .querySelector(`.nav-link[href="#${sectionId}"]`)
          ?.classList.remove("active-link");
      }
    });
  }

  window.addEventListener("scroll", activateLinkOnScroll);

  // Optional: Immediate active state on click
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active-link"));
      this.classList.add("active-link");
    });
  });

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')
if(loginButton){
  loginButton.addEventListener('click', () =>{
    loginContent.classList.add('show-login')
  })
}
if(loginClose){
  loginClose.addEventListener('click', () =>{
    loginContent.classList.remove('show-login')
  })
}
});
