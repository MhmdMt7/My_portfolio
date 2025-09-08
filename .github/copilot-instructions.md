# Copilot Instructions for `my_portfolio`

## Project Overview
This is a React portfolio project using Vite for fast development and TailwindCSS for styling. The codebase is organized for modularity and rapid prototyping, with a focus on interactive UI and personal branding.

## Architecture & Key Components
- **Entry Point:** `src/main.jsx` bootstraps the React app.
- **App Shell:** `src/App.jsx` is the root component, currently rendering `SectionOne`.
- **Sections:** Each major UI section (e.g., `SectionOne`) is a folder under `src/`, containing its own CSS, assets, and components.
- **Custom Components:** Example: `TextType.jsx` in `SectionOne` implements animated typing with color cycling and cursor effects, using GSAP and motion.
- **Assets:** Images and SVGs are stored in `src/assets/` and section-specific folders.

## Styling
- **TailwindCSS:** Used for utility-first styling. Classes are applied directly in JSX.
- **Section-specific CSS:** Some components (e.g., `SectionOne`) use additional CSS files for custom styles.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (or `yarn dev`) launches Vite with HMR.
- **Build for Production:** `npm run build` outputs optimized assets.
- **Preview Production Build:** `npm run preview` serves the build locally.
- **Linting:** `npm run lint` runs ESLint with project-specific config (`eslint.config.js`).

## Patterns & Conventions
- **Component Structure:** Prefer function components. Group related files (JSX, CSS, assets) in section folders.
- **Animation:** Use `gsap` and `motion` for interactive effects. See `TextType.jsx` for advanced usage.
- **Props:** Components are highly configurable via props (see `TextType` for example prop patterns).
- **Icons:** Use `react-icons` for scalable vector icons.
- **Responsive Design:** Use Tailwind's responsive classes (e.g., `md:grid-cols-2`).

## Integration Points
- **External Libraries:**
  - `gsap` for animation
  - `motion` for UI transitions
  - `react-countup` for animated numbers
  - `react-icons` for iconography
  - `tailwindcss` for styling
- **Vite Plugins:**
  - `@vitejs/plugin-react` for React HMR
  - `@tailwindcss/vite` for Tailwind integration

## Example: Adding a New Section
1. Create a folder under `src/` (e.g., `SectionTwo`).
2. Add your JSX, CSS, and assets.
3. Import and render the new section in `App.jsx`.

## Key Files & Directories
- `src/App.jsx` — App shell, entry for sections
- `src/SectionOne/SectionOne.jsx` — Example section component
- `src/SectionOne/TextType.jsx` — Custom animated text component
- `vite.config.js` — Vite and plugin configuration
- `eslint.config.js` — ESLint rules
- `package.json` — Scripts and dependencies

---

**For AI agents:**
- Follow the modular section/component pattern for new features.
- Use Tailwind for styling unless a section has its own CSS.
- Prefer animation libraries already in use (`gsap`, `motion`).
- Reference existing section/component structure for best practices.
- Use provided scripts for build/lint/dev tasks.

If any conventions or workflows are unclear, ask for clarification or examples from the user.
