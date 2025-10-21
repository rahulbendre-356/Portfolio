# 🚀 Rahul Bendre - Electronics Engineer Portfolio

A modern, interactive, and feature-rich portfolio website showcasing my projects and skills in Electronics Engineering, Embedded Systems, and IoT.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Version](https://img.shields.io/badge/Version-1.0-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### 🎨 **Visual Effects**
- **Particles.js Background** - Interactive floating particles that respond to mouse movement
- **Custom Animated Cursor** - Smooth cursor with follower effect
- **Professional Loading Screen** - Circuit-themed loading animation
- **Parallax Scrolling** - Depth effect on background elements
- **Gradient Animations** - Smooth color transitions throughout

### 🎬 **Animations**
- **AOS (Animate On Scroll)** - Elements fade, zoom, and slide into view
- **Typed.js Effect** - Rotating text animations in hero section
- **Skill Progress Bars** - Animated percentage indicators
- **Counter Animations** - Stats count up smoothly on view
- **Smooth Page Transitions** - Fade effects between pages

### 🎯 **Interactive Elements**
- **Dark/Light Theme Toggle** - Persistent theme preference (saves to localStorage)
- **Project Filters** - Filter projects by category (All, Embedded, IoT, Power Electronics)
- **Smooth Scrolling** - Buttery smooth navigation
- **Keyboard Navigation** - Arrow keys (←→) or numbers (1-4) to switch pages
- **Scroll to Top Button** - Quick navigation back to top

### 📧 **Contact Form**
- **Form Validation** - Client-side validation for all fields
- **EmailJS Integration** - Ready to connect with email service
- **Success/Error Messages** - Beautiful notification system
- **Loading States** - Visual feedback during submission

### ⚡ **Performance**
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Lazy Loading** - Optimized image loading
- **60fps Animations** - Smooth performance
- **SEO Optimized** - Meta tags and semantic HTML

### 🎮 **Easter Eggs**
- **Konami Code** - Try: ↑↑↓↓←→←→BA for a surprise!
- **Console Messages** - Fun messages for fellow developers
- **Rainbow Effect** - Hidden animation features

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **JavaScript (ES6+)** - Interactive functionality

### Libraries & Frameworks
- [Particles.js](https://vincentgarreau.com/particles.js/) - Particle effects
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [Typed.js](https://mattboldt.com/demos/typed-js/) - Typing animations
- [Font Awesome](https://fontawesome.com/) - Icons
- [EmailJS](https://www.emailjs.com/) - Contact form backend

## 📂 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN libraries)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahulbendre-356/portfolio.git
   cd portfolio
   ```

2. **Open the project**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Customize the content**
   - Edit `index.html` to add your information
   - Modify `styles.css` for color schemes
   - Update `script.js` for additional features

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;        /* Primary color */
    --secondary: #8b5cf6;      /* Secondary color */
    --accent: #ec4899;         /* Accent color */
    --success: #10b981;        /* Success color */
    --warning: #f59e0b;        /* Warning color */
}
```

### Adding Projects
Add new project cards in `index.html`:
```html
<div class="project-card" data-category="embedded" data-aos="fade-up">
    <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <span class="project-emoji">🔧</span>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-link" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i> View Demo
            </a>
        </div>
    </div>
</div>
```

### Updating Skills
Modify the skills section in `index.html` and adjust progress bars:
```html
<div class="skill-item">
    <div class="skill-icon">🔌</div>
    <div class="skill-name">Your Skill</div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="85"></div>
    </div>
</div>
```

## 📧 Setting Up Contact Form

1. **Sign up for EmailJS**
   - Visit [EmailJS](https://www.emailjs.com/)
   - Create a free account
   - Set up an email service
   - Create an email template

2. **Get your credentials**
   - Public Key
   - Service ID
   - Template ID

3. **Update script.js**
   ```javascript
   // Line 227-228 in script.js
   emailjs.init("YOUR_PUBLIC_KEY");
   
   // Line 255 in the form submission
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
   ```

## 🌐 Deployment

### Deploy to GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select main branch → Save
4. Your site will be live at `https://yourusername.github.io/portfolio`

### Deploy to Netlify
1. Drag and drop your folder to [Netlify](https://www.netlify.com/)
2. Or connect your GitHub repository
3. Site deploys automatically!

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Other Options
- **Cloudflare Pages** - Fast and free
- **Render** - Simple deployment
- **Firebase Hosting** - Google's hosting solution

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` | Next page |
| `←` | Previous page |
| `1` | Home page |
| `2` | About page |
| `3` | Projects page |
| `4` | Contact page |
| `↑↑↓↓←→←→BA` | Konami code easter egg! |

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🐛 Known Issues

- Custom cursor disabled on mobile devices (better UX)
- Particles.js may slow down on very old devices
- Some animations may be reduced on devices with low battery

## 🔮 Future Enhancements

- [ ] Blog section for articles
- [ ] Testimonials carousel
- [ ] More project categories
- [ ] Certificate showcase
- [ ] Resume download feature
- [ ] Multi-language support
- [ ] PWA (Progressive Web App) support
- [ ] Analytics dashboard

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 About Me

I'm Rahul Bendre, an Electronics Engineer passionate about embedded systems, IoT, and innovative hardware solutions. This portfolio showcases my journey and projects in the field of electronics engineering.

## 📞 Contact

- **Email**: [rajeshbendre71@gmail.com](mailto:rajeshbendre71@gmail.com)
- **LinkedIn**: [linkedin.com/in/rahul-bendre-a3b0b6292](https://www.linkedin.com/in/rahul-bendre-a3b0b6292)
- **GitHub**: [github.com/rahulbendre-356](https://github.com/rahulbendre-356)

## 🙏 Acknowledgments

- [Particles.js](https://vincentgarreau.com/particles.js/) for the amazing particle effects
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [Typed.js](https://mattboldt.com/demos/typed-js/) for typing effects
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- All the open-source contributors who make web development amazing!

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/rahulbendre-356/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/rahulbendre-356/portfolio?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/rahulbendre-356/portfolio?style=social)

---

<div align="center">
  <p>Made with ❤️ and lots of ☕ by Rahul Bendre</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

## 💡 Tips for Best Experience

1. **View on Desktop First** - The full experience is best on larger screens
2. **Enable JavaScript** - Required for all interactive features
3. **Try Dark Mode** - Toggle using the moon/sun icon
4. **Use Keyboard Navigation** - Arrow keys for quick navigation
5. **Check Console** - Fun messages for developers!
6. **Filter Projects** - Use category buttons to find specific work
7. **Try Easter Eggs** - Konami code and more hidden features

## 🔄 Version History

- **v1.0** (Current) - Initial release with all features
  - Particles.js background
  - Dark/light theme
  - Project filters
  - Contact form
  - Animations and effects
  - Easter eggs

---

**Last Updated**: October 2024  
**Status**: 🟢 Active Development
