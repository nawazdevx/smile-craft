export default function renderDoctor() {
  // Doctor static data
  const doctorData = {
    subtitle: 'Our Doctors',
    title: 'Meet Our Dental Experts',
    doctors: [
      {
        name: 'Dr. Howard Holmes',
        role: 'Dentist',
        image: './assets/images/doctor-1.png',
      },
      {
        name: 'Dr. Ella Thompson',
        role: 'Dentist',
        image: './assets/images/doctor-2.png',
      },
      {
        name: 'Dr. Vincent Cooper',
        role: 'Dentist',
        image: './assets/images/doctor-3.png',
      },
      {
        name: 'Dr. Danielle Bryant',
        role: 'Dentist',
        image: './assets/images/doctor-4.png',
      },
    ],
  };

  // Get Doctor Root
  const doctorRoot = document.getElementById('doctor-root');

  // Render Doctor HTML
  doctorRoot.innerHTML = `
    <section class="section doctor" aria-label="doctor">
      <div class="container">

        <p class="section-subtitle text-center">${doctorData.subtitle}</p>
        <h2 class="h2 section-title text-center">${doctorData.title}</h2>

        <ul class="has-scrollbar">
          ${doctorData.doctors
            .map(
              (doctor) => `
              <li class="scrollbar-item">
                <div class="doctor-card">

                  <div class="card-banner img-holder" style="--width: 460; --height: 500">
                    <img
                      src="${doctor.image}"
                      width="460"
                      height="500"
                      alt="${doctor.name}"
                      class="img-cover"
                      loading="lazy"
                    />
                  </div>

                  <h3 class="h3 card-title">${doctor.name}</h3>
                  <p class="card-subtitle">${doctor.role}</p>

                  <ul class="card-social-list">
                    <li>
                      <a href="#" class="card-social-link">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="card-social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="card-social-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                    </li>
                  </ul>

                </div>
              </li>
            `,
            )
            .join('')}
        </ul>

      </div>
    </section>
  `;
}
