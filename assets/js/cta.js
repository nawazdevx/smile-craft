export default function renderCTA() {
  // CTA static data
  const ctaData = {
    subtitle: 'Book Dental Appointment',
    title: 'We Are Open and Welcoming New Patients',
    buttonText: 'Book Appointment',
    image: './assets/images/cta-banner.png',
  };

  // Get CTA Root
  const ctaRoot = document.getElementById('cta-root');

  // Render CTA HTML
  ctaRoot.innerHTML = `
    <section class="section cta" aria-label="cta">
      <div class="container">

        <figure class="cta-banner">
          <img
            src="${ctaData.image}"
            width="1056"
            height="1076"
            alt="Dental appointment"
            class="w-100"
            loading="lazy"
          />
        </figure>

        <div class="cta-content">
          <p class="section-subtitle">${ctaData.subtitle}</p>
          <h2 class="h2 section-title">${ctaData.title}</h2>
          <a href="#" class="btn">${ctaData.buttonText}</a>
        </div>

      </div>
    </section>
  `;
}
