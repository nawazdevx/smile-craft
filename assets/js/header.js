export default function renderHeader() {
  // Header static data
  const headerData = {
    logo: 'SmileCraft',
    contact: {
      email: 'info@smilecraft.com',
      phone: '+91-7052-101-786',
    },
    menu: [
      { label: 'Home', link: '#home' },
      { label: 'Services', link: '#service' },
      { label: 'About Us', link: '#about' },
      { label: 'Blog', link: '#blog' },
      { label: 'Contact', link: '#footer' },
    ],
    socialLinks: [
      { icon: 'logo-facebook', url: '#' },
      { icon: 'logo-instagram', url: '#' },
      { icon: 'logo-twitter', url: '#' },
      { icon: 'logo-youtube', url: '#' },
    ],
    ctaText: 'Book Appointment',
  };

  // Get Header Root
  const headerRoot = document.getElementById('header-root');

  // Render Header HTML
  headerRoot.innerHTML = `
    <header class="header">

      <!-- Header Top -->
      <div class="header-top">
        <div class="container">

          <ul class="contact-list">
            <li class="contact-item">
              <ion-icon name="mail-outline"></ion-icon>
              <a href="mailto:${headerData.contact.email}" class="contact-link">
                ${headerData.contact.email}
              </a>
            </li>

            <li class="contact-item">
              <ion-icon name="call-outline"></ion-icon>
              <a href="tel:${headerData.contact.phone}" class="contact-link">
                ${headerData.contact.phone}
              </a>
            </li>
          </ul>

          <ul class="social-list">
            ${headerData.socialLinks
              .map(
                (item) => `
                <li>
                  <a href="${item.url}" class="social-link">
                    <ion-icon name="${item.icon}"></ion-icon>
                  </a>
                </li>
              `,
              )
              .join('')}
          </ul>

        </div>
      </div>

      <!-- Header Bottom -->
      <div class="header-bottom" data-header>
        <div class="container">

          <a href="#home" class="logo">${headerData.logo}</a>

          <nav class="navbar container" data-navbar>
            <ul class="navbar-list">
              ${headerData.menu
                .map(
                  (item) => `
                  <li>
                    <a href="${item.link}" class="navbar-link" data-nav-link>
                      ${item.label}
                    </a>
                  </li>
                `,
                )
                .join('')}
            </ul>
          </nav>

          <a href="#" class="btn">${headerData.ctaText}</a>

          <button class="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
            <ion-icon name="menu-sharp" class="menu-icon"></ion-icon>
            <ion-icon name="close-sharp" class="close-icon"></ion-icon>
          </button>

        </div>
      </div>

    </header>
  `;

  initHeaderActions();
}

// Header interactions and behavior
function initHeaderActions() {
  const navbar = document.querySelector('[data-navbar]');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const navToggler = document.querySelector('[data-nav-toggler]');
  const header = document.querySelector('[data-header]');

  // Mobile menu toggle
  navToggler.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navToggler.classList.toggle('active');
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      navToggler.classList.remove('active');
    });
  });

  // Header sticky on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
}
