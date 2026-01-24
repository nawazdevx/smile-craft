<div>
  <h1>SmileCraft - Dental Website</h1>

  <p>
    <strong>About Project:</strong> 
    A responsive dental care website featuring modern design principles, smooth animations, and component-based JavaScript architecture. Built with semantic HTML5 structure, CSS custom properties for consistent styling, and modular ES6 JavaScript components that render sections independently. The site includes email subscription forms, horizontal scrollable doctor cards, interactive navigation with smooth transitions, and a mobile-first approach that dental clinics can customize for their practice, and much more.
  </p>

  <p> 
    <strong>What I learned:</strong>
    Implemented modular JavaScript architecture using ES6 import/export syntax, created reusable component functions with template literals for HTML rendering, combined CSS Grid and Flexbox for complex responsive layouts, utilized HSL color system with gradient overlays, and built custom horizontal scrollbars with webkit styling, and much more.
  </p>

  <p> 
    <strong>Personal Note:</strong>
    I started building HTML, CSS, and JavaScript projects in 2022. <br />
    At that time, I focused on learning first and began uploading to GitHub recently. <br />
    Now I'm working with <strong>React.js</strong> and <strong>Next.js</strong>, and seeking opportunities as a <strong>frontend</strong> or <strong>web developer</strong>.
  </p>
</div>

<details open> 
  <summary><h2>Project More Details</h2></summary>

  <details> 
    <summary><h4>What's Inside</h4></summary>
    <ul>
      <li><strong>Header Top Bar</strong> - Contact information with email and phone links, social media icons, and responsive visibility</li>
      <li><strong>Sticky Navigation</strong> - Fixed header with logo, menu links, appointment button, and mobile hamburger toggle</li>
      <li><strong>Hero Section</strong> - Full-width banner with background image, headline, description, and email subscription form</li>
      <li><strong>Services Grid</strong> - Six service cards with icons and descriptions, plus centered banner image in desktop layout</li>
      <li><strong>About Section</strong> - Two-column layout with image banner and detailed text content with call-to-action button</li>
      <li><strong>Doctor Profiles</strong> - Horizontal scrollable cards showing team members with images and social media links</li>
      <li><strong>CTA Section</strong> - Dark background appointment booking section with image and action button</li>
      <li><strong>Blog Cards</strong> - Latest articles grid with images, date badges, titles, and read more links</li>
      <li><strong>Footer Sections</strong> - Brand info with schedule, quick links, services list, and contact details</li>
      <li><strong>Back to Top</strong> - Floating circular button with smooth scroll-to-top functionality</li>
    </ul>
  </details>

  <details> 
    <summary><h4>Technologies Used</h4></summary>
    <ul>
      <li><strong>HTML5</strong> - Semantic structure with proper section elements and ARIA labels for accessibility</li>
      <li><strong>CSS3</strong> - Advanced styling with Grid, Flexbox, CSS variables, keyframe animations, gradients, and box shadows</li>
      <li><strong>JavaScript (ES6+)</strong> - Modular component architecture with import/export, template literals, and DOM manipulation</li>
      <li><strong>Google Fonts</strong> - Roboto and Poppins font families for clean, professional typography</li>
      <li><strong>Ionicons</strong> - Modern icon library for navigation, social media, and UI elements</li>
      <li><strong>CSS Custom Properties</strong> - Centralized design tokens for colors, typography, spacing, shadows, and transitions</li>
      <li><strong>Linear Gradients</strong> - Multi-color gradients for buttons and decorative elements</li>
      <li><strong>Media Queries</strong> - Four breakpoints at 575px, 768px, 992px, and 1200px for seamless responsiveness</li>
    </ul>
  </details>

  <details> 
    <summary><h4>Project Structure</h4></summary>
    <pre>
    smile-craft/
    │
    ├── index.html                 # Main HTML with section root elements
    │
    ├── assets/
    │   ├── css/
    │   │   └── style.css         # Complete styles with custom properties and responsive design
    │   │
    │   ├── js/
    │   │   ├── app.js            # Main entry point that imports and initializes all components
    │   │   ├── header.js         # Header component with navigation and sticky behavior
    │   │   ├── hero.js           # Hero banner with email form functionality
    │   │   ├── service.js        # Services grid with cards and banner
    │   │   ├── about.js          # About section component
    │   │   ├── doctor.js         # Doctor profiles with horizontal scroll
    │   │   ├── cta.js            # Call-to-action section component
    │   │   ├── blog.js           # Blog cards grid component
    │   │   ├── footer.js         # Footer with multiple columns
    │   │   └── backTop.js        # Back-to-top button with scroll detection
    │   │
    │   └── images/               # Hero banners, service icons, doctor photos, blog images
    │
    └── README.md                 # Project documentation
    </pre>
  </details>

  <details> 
    <summary><h4>Key Features</h4></summary>
    <ul>
      <li><strong>Modular Component System</strong> - Each page section built as independent ES6 module for easy maintenance</li>
      <li><strong>Fully Responsive Design</strong> - Adapts smoothly from 320px mobile screens to 1920px+ desktop displays</li>
      <li><strong>Mobile-First Navigation</strong> - Collapsible menu with smooth toggle animation and overlay close functionality</li>
      <li><strong>Sticky Header Effect</strong> - Navigation bar becomes fixed with shadow after 100px scroll distance</li>
      <li><strong>Email Subscription Form</strong> - Hero section form with validation and alert feedback on submission</li>
      <li><strong>Horizontal Scroll Cards</strong> - Doctor profiles section with custom scrollbar styling and snap alignment</li>
      <li><strong>Gradient Buttons</strong> - Interactive buttons with gradient background that reverses direction on hover</li>
      <li><strong>Image Hover Effects</strong> - Blog cards with smooth image scale transform on hover interaction</li>
      <li><strong>Social Media Links</strong> - Header and footer social icons with hover color transitions</li>
      <li><strong>Scroll-Triggered Elements</strong> - Back-to-top button appears with transform animation after scrolling down</li>
      <li><strong>Cross-Browser Support</strong> - Tested and working on Chrome, Firefox, Safari, Edge, and Opera browsers</li>
      <li><strong>CSS Variables System</strong> - Easy theme customization through centralized color and typography tokens</li>
    </ul>
  </details>

  <details> 
    <summary><h4>Quick Start</h4></summary>
    <ol>
      <li>
        <strong>Clone the repository:</strong>
        <pre><code>git clone https://github.com/nawazdevx/smile-craft.git</code></pre>
      </li>

      <li>
        <strong>Open the project:</strong>
        <ul>
          <li>Open <code>index.html</code> directly in your browser</li>
          <li>Or run a local server:</li>
        </ul>

        <pre><code>python -m http.server 3000</code></pre>
        Then visit <code>http://localhost:3000</code>
      </li>

      <li>
        <strong>Start Customizing:</strong>
        <ul>
          <li>Update clinic name and content in component files inside <code>assets/js/</code> folder</li>
          <li>Change colors in <code>style.css</code> using CSS custom properties</li>
          <li>Replace images in <code>assets/images/</code> folder with your clinic photos</li>
          <li>Modify contact information in <code>header.js</code> and <code>footer.js</code> files</li>
        </ul>
      </li>
    </ol>
  </details>

  <details> 
    <summary><h4>Customization</h4></summary>
    <ul>
      <li><strong>Component Content:</strong> Each section has its own JavaScript file in <code>assets/js/</code> folder with static data objects at the top - edit clinic name, service descriptions, doctor names, and blog content directly in these files</li>
      <li><strong>Colors:</strong> Update CSS variables in <code>:root</code> selector at the top of <code>style.css</code>
        <pre><code>:root {
  --royal-blue-light: hsl(225, 68%, 53%);    /* Primary blue color */
  --carolina-blue: hsl(201, 92%, 47%);       /* Secondary blue color */
  --oxford-blue-1: hsl(218, 70%, 18%);       /* Dark backgrounds */
  --white: hsl(0, 0%, 100%);                 /* White backgrounds */
}</code></pre>
      </li>
      <li><strong>Images:</strong> Replace files inside <code>assets/images/</code> with your clinic photos - keep same filenames or update image paths in component JavaScript files</li>
      <li><strong>Fonts:</strong> Change Google Fonts link in HTML <code>&lt;head&gt;</code> section and update <code>--ff-roboto</code> and <code>--ff-poppins</code> variables in CSS</li>
      <li><strong>Services Section:</strong> Add or remove service cards by editing the services array in <code>service.js</code> file</li>
      <li><strong>Doctor Profiles:</strong> Update team members by modifying the doctors array in <code>doctor.js</code> component</li>
      <li><strong>Blog Posts:</strong> Edit blog content in the posts array inside <code>blog.js</code> with new titles, dates, and images</li>
      <li><strong>Footer Content:</strong> Modify clinic hours, contact details, and link sections in <code>footer.js</code> data object</li>
      <li><strong>Navigation Menu:</strong> Change menu items in the menu array inside <code>header.js</code> component file</li>
    </ul>
  </details>

</details>

<p> 
  <strong>License:</strong>
  This project is licensed under the <a href="https://choosealicense.com/licenses/mit/">MIT License</a>.
</p>

<p> 
  <strong>Contact:</strong> 
  Connect with me on <a href="https://www.linkedin.com/in/nawazdevx">LinkedIn</a> or visit my <a href="https://nawazdevx.vercel.app/">Portfolio</a>.
</p>

<p> 
  <strong>Support:</strong> 
  Found this helpful? Give it a ⭐ on GitHub! Thank you.
</p>

<br />

<div>
  <h2>Project Preview</h2>

  <p>
    <strong>You can view the live project here ➜</strong>
    <a href="https://nawazdevx.github.io/smile-craft/" target="_blank">
      <strong>Live Demo</strong>
    </a>
  </p>

  <img src="./assets/images/readme-image.png" alt="Desktop Demo" />
</div>