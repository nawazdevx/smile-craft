export default function renderService() {
  // Service static data
  const serviceData = {
    subtitle: 'Our Services',
    title: 'What We Provide',
    bannerImage: './assets/images/service-banner.png',
    services: [
      {
        title: 'Root Canal Care',
        text: 'Gentle and pain-free treatment to save your natural teeth.',
        icon: './assets/images/service-icon-1.png',
      },
      {
        title: 'Teeth Alignment',
        text: 'Modern braces and aligners for a perfect smile.',
        icon: './assets/images/service-icon-2.png',
      },
      {
        title: 'Cosmetic Dentistry',
        text: 'Whitening and cosmetic treatments for a confident smile.',
        icon: './assets/images/service-icon-3.png',
      },
      {
        title: 'Oral Hygiene Care',
        text: 'Professional cleaning and gum care for healthy teeth.',
        icon: './assets/images/service-icon-4.png',
      },
      {
        title: 'Online Consultation',
        text: 'Talk to our dentists from the comfort of your home.',
        icon: './assets/images/service-icon-5.png',
      },
      {
        title: 'Cavity Checkup',
        text: 'Early detection and gentle cavity treatment.',
        icon: './assets/images/service-icon-6.png',
      },
    ],
  };

  // Get Service Root
  const serviceRoot = document.getElementById('service-root');

  // Render Service HTML
  serviceRoot.innerHTML = `
    <section class="section service" id="service" aria-label="service">
      <div class="container">

        <p class="section-subtitle text-center">${serviceData.subtitle}</p>
        <h2 class="h2 section-title text-center">${serviceData.title}</h2>

        <ul class="service-list">
          ${renderServiceCards(serviceData.services)}

          <li class="service-banner">
            <figure>
              <img
                src="${serviceData.bannerImage}"
                width="409"
                height="467"
                alt="Dental services"
                class="w-100"
              />
            </figure>
          </li>
        </ul>

      </div>
    </section>
  `;
}

// Render individual service cards
function renderServiceCards(services) {
  return services
    .map(
      (service) => `
      <li>
        <div class="service-card">
          <div class="card-icon">
            <img
              src="${service.icon}"
              width="100"
              height="100"
              alt="${service.title}"
              class="w-100"
              loading="lazy"
            />
          </div>

          <div>
            <h3 class="h3 card-title">${service.title}</h3>
            <p class="card-text">${service.text}</p>
          </div>
        </div>
      </li>
    `,
    )
    .join('');
}
