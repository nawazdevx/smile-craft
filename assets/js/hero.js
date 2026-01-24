export default function renderHero() {
  // Hero static data
  const heroData = {
    subtitle: 'Welcome to SmileCraft',
    title: 'Modern Dental Care for a Confident Smile',
    description: 'We provide gentle, modern dental treatments focused on comfort and long-term oral health.',
    emailPlaceholder: 'Your email address',
    buttonText: 'Get a Call Back',
    bgImage: './assets/images/hero-bg.png',
    heroImage: './assets/images/hero-banner.png',
  };

  // Get Hero Root
  const heroRoot = document.getElementById('hero-root');

  // Render Hero HTML
  heroRoot.innerHTML = `
    <section
      class="section hero"
      id="home"
      aria-label="hero"
      style="background-image: url('${heroData.bgImage}')"
    >
      <div class="container">

        <div class="hero-content">
          <p class="section-subtitle">${heroData.subtitle}</p>

          <h1 class="h1 hero-title">${heroData.title}</h1>

          <p class="hero-text">${heroData.description}</p>

          <form class="hero-form">
            <input
              type="email"
              placeholder="${heroData.emailPlaceholder}"
              required
              class="email-field"
              aria-label="email address"
            />

            <button type="submit" class="btn">
              ${heroData.buttonText}
            </button>
          </form>
        </div>

        <figure class="hero-banner">
          <img
            src="${heroData.heroImage}"
            width="587"
            height="839"
            alt="Dental care professional"
            class="w-100"
          />
        </figure>

      </div>
    </section>
  `;

  initHeroForm();
}

// Hero form interactions
function initHeroForm() {
  const form = document.querySelector('.hero-form');

  // Handle hero form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    form.reset();
  });
}
