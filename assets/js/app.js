// Import all website section components
import renderHeader from './header.js';
import renderHero from './hero.js';
import renderService from './service.js';
import renderAbout from './about.js';
import renderDoctor from './doctor.js';
import renderCTA from './cta.js';
import renderBlog from './blog.js';
import renderFooter from './footer.js';
import renderBackTop from './backTop.js';

// Initialize all components after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderHero();
  renderService();
  renderAbout();
  renderDoctor();
  renderCTA();
  renderBlog();
  renderFooter();
  renderBackTop();
});
