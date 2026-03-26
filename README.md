# Professional Portfolio

A modern, responsive, and bilingual (EN/FR) portfolio built with **React.js**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **About Page**: Profile showcase with bio and skills.
- **Projects Page**: Dynamic grid of cards with image carousels and external links.
- **Resume Page**: PDF embedding with a dedicated download button.
- **Multilingual Support**: Toggle between English and French dynamically using `react-i18next`.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Modern UI**: Smooth transitions, glassmorphism effects, and premium aesthetics.

## 🛠️ Tech Stack

- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Translations**: i18next / react-i18next
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📦 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Portfolio-Dunia.git
   cd Portfolio-Dunia
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

- `src/components/`: Reusable UI components (Navbar, Footer, ProjectCard, etc.)
- `src/pages/`: Main page views (About, Projects, Resume)
- `src/i18n/`: Translation files and configuration
- `src/data/`: Static data for projects and experience
- `public/`: Static assets like the resume PDF

## 🚀 Deployment to GitHub Pages

1. **Update `vite.config.js`**:
   Ensure the `base` property matches your repository name:
   ```javascript
   base: '/Portfolio-Dunia/',
   ```

2. **Deploy with one command**:
   ```bash
   npm run deploy
   ```
   This will build the project and push the `dist` folder to the `gh-pages` branch.

3. **Enable GitHub Pages**:
   Go to your repository settings on GitHub, navigate to **Pages**, and set the source to the `gh-pages` branch.

## 📄 Customization

- **Profile**: Update `AboutPage.jsx` and `en.json/fr.json` with your details.
- **Projects**: Edit `src/data/projects.js` to add your own work.
- **Resume**: Replace `public/resume.pdf` with your actual CV.

---
Built with ❤️ by J.P.M.
