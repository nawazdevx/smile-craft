export default function renderBlog() {
  // Blog static data
  const blogData = {
    subtitle: 'Our Blog',
    title: 'Dental Tips & News',
    posts: [
      {
        title: 'How to Keep Your Teeth Healthy',
        text: 'Learn simple daily habits that help protect your teeth and gums.',
        date: '12 March 2023',
        image: './assets/images/blog-1.jpg',
      },
      {
        title: 'Why Regular Dental Checkups Matter',
        text: 'Regular visits help prevent serious dental problems early.',
        date: '18 March 2023',
        image: './assets/images/blog-2.jpg',
      },
      {
        title: 'Simple Tips for a Brighter Smile',
        text: 'Easy and safe ways to improve your smile naturally.',
        date: '25 March 2023',
        image: './assets/images/blog-3.jpg',
      },
    ],
  };

  // Get Blog Root
  const blogRoot = document.getElementById('blog-root');

  // Render Blog HTML
  blogRoot.innerHTML = `
    <section class="section blog" id="blog" aria-label="blog">
      <div class="container">

        <p class="section-subtitle text-center">${blogData.subtitle}</p>
        <h2 class="h2 section-title text-center">${blogData.title}</h2>

        <ul class="blog-list">
          ${blogData.posts
            .map(
              (post) => `
              <li>
                <div class="blog-card">

                  <figure class="card-banner img-holder" style="--width: 1180; --height: 800">
                    <img
                      src="${post.image}"
                      alt="${post.title}"
                      class="img-cover"
                      loading="lazy"
                    />

                    <div class="card-badge">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <time class="time">${post.date}</time>
                    </div>
                  </figure>

                  <div class="card-content">
                    <h3 class="h3 card-title">${post.title}</h3>
                    <p class="card-text">${post.text}</p>
                    <a href="#" class="card-link">Read More</a>
                  </div>

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
