# Natalie Cheng's Portfolio Website

## Setup Instructions for Development

1.  Clone the repository.
2.  Run `npm install` to install dependencies.
3.  Run `npm run dev` to start the Vite development server on port 5173.

## Best Practices for Development

- Set up Prettier to autoformat your code on save.
- Use TypeScript instead of JavaScript.
- Use Tailwind utility classes for styling.
  - To specify rules that should apply to all, say, `h1`, you can use the global
    [`index.css`](./src/index.css) file. Even there, use `@apply` with Tailwind classes when
    possible.
- Write extremely DRY code ("Don't Repeat Yourself").
  - Use the [`Text`](./src/components/Text), [`Title`](./src/components/Title), and
    [`Button`](./src/components/Button) components instead of their raw HTML counterparts.
- If a component is only referenced by one parent component, it should be nested in a directory with the
  same name as the parent component. The parent component code would then be in an index file in
  that same directory. This is to avoid cluttering the `components/` directory with components that
  are only used once. See the [`Layout`](./src/components/Layout) component for a good example of
  how this is done.
  - If a component is only referenced by one _page_, it should be nested in a subdirectory of
    [`pages`](./src/pages) with the same name as the page.

## Technologies Used

- [React](https://reactjs.org/): The frontend library.
- [Vite](https://vitejs.dev/): The frontend build tool.
- [TypeScript](https://www.typescriptlang.org/): The statically-typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): The utility-first CSS framework.
- [PostCSS](https://postcss.org/): The CSS postprocessor.
- [Prettier](https://prettier.io/): The code formatter.
- [Vercel](https://vercel.com/): The deployment platform.

## Repo File Structure

- [`dist/`](./dist): The output directory for the Vite build. Git-ignored.
- [`public/`](./public): Served statically by Vite. Contains the favicon.
- [`src/`](./src): The source code directory.
  - [`assets/`](./src/assets): All static images and videos.
  - [`components/`](./src/components): The directory for all components that are _shared across
    two or more pages_.
  - [`fonts/`](./src/fonts): TTF font files for Nat Font and Work Sans.
  - [`pages/`](./src/pages): The directory for all pages.
  - [`index.css`](./src/index.css): The global CSS file.
  - [`main.tsx`](./src/main.tsx): The entrypoint React file, which handles routing.
- [`.prettierrc`](./.prettierrc): Prettier configuration.
- [`index.html`](./index.html): The main HTML file.
- [`package.json`](./package.json): Specifies NPM dependencies and scripts.
- [`postcss.config.js`](./postcss.config.js): PostCSS configuration.
- [`README.md`](./README.md): This file.
- [`tailwind.config.js`](./tailwind.config.js): Tailwind CSS configuration.
- [`tsconfig.json`](./tsconfig.json): TypeScript configuration.
- [`vercel.json`](./vercel.json): Instructions for Vercel (the deployment platform).
- [`vite.config.ts`](./vite.config.ts): Vite configuration.
