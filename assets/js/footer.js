export default function renderFooter() {
  // Footer static data
  const footerData = {
    logo: 'SmileCraft',
    description: 'SmileCraft provides modern, gentle dental care focused on comfort, trust, and long-term oral health.',
    schedule: 'Monday - Saturday: 9:00 AM - 10:00 PM',
    links: ['Home', 'About Us', 'Services', 'Our Team', 'Blog'],
    services: [
      'Root Canal Care',
      'Teeth Alignment',
      'Cosmetic Dentistry',
      'Oral Hygiene Care',
      'Online Consultation',
      'Cavity Checkup',
    ],
    contact: {
      address: '1247/Plot No. 39, 15th Phase, LHB Colony, Kanpur',
      phone: '+91-7052-101-786',
      email: 'help@smilecraft.com',
    },
    copyright: '© 2023 nawazdevx. All Rights Reserved.',
  };

  // Get Footer Root
  const footerRoot = document.getElementById('footer-root');

  // Render Footer HTML
  footerRoot.innerHTML = `
    <footer class="footer" id="footer">

      <div class="footer-top section">
        <div class="container">

          <!-- Brand -->
          <div class="footer-brand">
            <a href="#home" class="logo">${footerData.logo}</a>
            <p class="footer-text">${footerData.description}</p>

            <div class="schedule">
              <div class="schedule-icon">
                <ion-icon name="time-outline"></ion-icon>
              </div>
              <span class="span">${footerData.schedule}</span>
            </div>
          </div>

          <!-- Links -->
          <ul class="footer-list">
            <li><p class="footer-list-title">Quick Links</p></li>
            ${footerData.links
              .map(
                (item) => `
                <li>
                  <a href="#" class="footer-link">
                    <ion-icon name="add-outline"></ion-icon>
                    <span class="span">${item}</span>
                  </a>
                </li>
              `,
              )
              .join('')}
          </ul>

          <!-- Services -->
          <ul class="footer-list">
            <li><p class="footer-list-title">Our Services</p></li>
            ${footerData.services
              .map(
                (service) => `
                <li>
                  <a href="#" class="footer-link">
                    <ion-icon name="add-outline"></ion-icon>
                    <span class="span">${service}</span>
                  </a>
                </li>
              `,
              )
              .join('')}
          </ul>

          <!-- Contact -->
          <ul class="footer-list">
            <li><p class="footer-list-title">Contact Us</p></li>

            <li class="footer-item">
              <div class="item-icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <address class="item-text">${footerData.contact.address}</address>
            </li>

            <li class="footer-item">
              <div class="item-icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <a href="tel:${footerData.contact.phone}" class="footer-link">
                ${footerData.contact.phone}
              </a>
            </li>

            <li class="footer-item">
              <div class="item-icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <a href="mailto:${footerData.contact.email}" class="footer-link">
                ${footerData.contact.email}
              </a>
            </li>
          </ul>

        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">${footerData.copyright}</p>

          <ul class="social-list">
            <li><a href="#" class="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="#" class="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href="#" class="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
          </ul>
        </div>
      </div>

    </footer>
  `;
}
