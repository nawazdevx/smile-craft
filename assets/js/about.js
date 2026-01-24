export default function renderAbout() {
  // About static data
  const aboutData = {
    subtitle: 'About SmileCraft',
    title: 'We Care About Your Smile',
    text1: 'SmileCraft uses modern technology and gentle methods to provide safe and comfortable dental care.',
    text2: 'Our team focuses on clear communication, honest advice, and long-term oral health.',
    buttonText: 'Read More',
    image: './assets/images/about-banner.png',
  };

  // Get About Root
  const aboutRoot = document.getElementById('about-root');

  // Render About HTML
  aboutRoot.innerHTML = `
    <section class="section about" id="about" aria-label="about">
      <div class="container">

        <figure class="about-banner">
          <img
            src="${aboutData.image}"
            width="470"
            height="538"
            alt="About SmileCraft"
            class="w-100"
            loading="lazy"
          />
        </figure>

        <div class="about-content">
          <p class="section-subtitle">${aboutData.subtitle}</p>

          <h2 class="h2 section-title">${aboutData.title}</h2>

          <p class="section-text section-text-1">
            ${aboutData.text1}
          </p>

          <p class="section-text">
            ${aboutData.text2}
          </p>

          <a href="#" class="btn">${aboutData.buttonText}</a>
        </div>

      </div>
    </section>
  `;
}
