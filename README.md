# Hangman Game

A polished Hangman game built with React, Vite, Tailwind CSS, and React Router.

This project is designed as a modern browser-based game experience with a clean UI, mobile-first layout, and a deployable production build.

## Live Demo

- https://hangmangame-phi.vercel.app/start

## Features

- Enter a word or phrase to start a game
- Letter guessing gameplay with wrong guess tracking
- Compact hangman SVG graphic with progressive drawing
- Win / lose state feedback
- Responsive UI with centered keyboard and gameplay board
- Automatic redirect from root route to `/start`

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- ESLint

## Run Locally

1. Clone the repository
```bash
git clone https://github.com/<your-username>/HangmanGame.git
cd HangmanGame
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open the app

Visit the local URL shown in the terminal, typically `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

## Deployment

This project is ready for deployment on Vercel.

Recommended settings:
- Framework: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

Any push to the connected GitHub `main` branch will trigger an automatic Vercel deploy.

## Project Structure

- `src/`
  - `App.jsx` – React Router configuration
  - `pages/startgame.jsx` – initial game setup page
  - `pages/PlayGame.jsx` – main gameplay screen
  - `components/` – reusable UI components
  - `components/HangMan/HangMan.jsx` – SVG hangman drawing
  - `components/LetterButtons/LetterButtons.jsx` – alphabet keyboard
  - `components/MaskedText/MaskedText.jsx` – masked letter display
  - `components/TextInputFrom/` – form and input UI

## Notes

- The game preserves spaces and punctuation in the masked phrase.
- The play screen is designed to minimize scrolling and remain centered on both desktop and mobile.

## Author

- **Chirag Bhalla**
