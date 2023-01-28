# Developement of React TypeScript GYM SPA.

Create vite Project:

```sh
npm create vite@latest
```

Select React & Typescript:

Install required dependencies from vite with the command:

```sh
npm install
```

Install project dependencies:

```sh
npm i framer-motion react-anchor-link-smooth-scroll@1.0.2 @heroicons/react
```

In-order to TS to know package types manually Install dev deps:

```
npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node
```

configuration to make project to map file location from src folder:

modify `vite.config.ts` with the following:

```js
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
```

Update `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }

  //   **** other code
}
```

Install tailwind with vite:

```sh
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```
