# Portfolio Site - Harsha Vardhan Pushadapu

A modern, sleek portfolio website built with React and Tailwind CSS, featuring a dark theme with glassmorphism effects and smooth animations.

## Features

- 🎨 Modern glassmorphism design
- 🌙 Dark theme with gradient accents
- 📱 Fully responsive layout
- ⚡ Built with React and Tailwind CSS
- 🎭 Smooth animations and transitions
- 🔒 Security-focused design aesthetic
- 📧 Contact form with state management

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Space Grotesk & Inter typography
- **Material Symbols** - Icon library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
portfolio-site/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section with intro
│   │   ├── Philosophy.jsx   # Core philosophy cards
│   │   ├── TechStack.jsx    # Technical capabilities
│   │   ├── Projects.jsx     # Portfolio projects
│   │   ├── History.jsx      # Career timeline
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer with links
│   ├── App.js               # Main app component
│   ├── App.css              # App styles
│   ├── index.js             # Entry point
│   └── index.css            # Global styles & Tailwind
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies

```

## Customization

### Colors

Edit the color palette in `tailwind.config.js` under `theme.extend.colors`.

### Content

Update the content in each component file:
- Personal info: `Hero.jsx`
- Skills: `TechStack.jsx`
- Projects: `Projects.jsx`
- Work history: `History.jsx`

### Fonts

The site uses:
- **Space Grotesk** for headings
- **Inter** for body text

Change fonts in `tailwind.config.js` and update the import in `index.css`.

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Netlify, Vercel, or GitHub Pages

The build folder can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Use `gh-pages` package

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or collaboration opportunities, use the contact form on the website.

---

Built with ❤️ using React and Tailwind CSS
