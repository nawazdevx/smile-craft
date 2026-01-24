export default function renderBackTop() {
  // Get Back To Top Root
  const backTopRoot = document.getElementById('backtop-root');

  // Render Back To Top HTML
  backTopRoot.innerHTML = `
    <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
      <ion-icon name="caret-up"></ion-icon>
    </a>
  `;

  // Get Back To Top Button
  const backTopBtn = document.querySelector('[data-back-top-btn]');

  // Show button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backTopBtn.classList.add('active');
    } else {
      backTopBtn.classList.remove('active');
    }
  });
}
