/// <reference types="astro/client" />

// Side-effect CSS imports (TypeScript 6 requires declarations for these).
declare module '@fontsource-variable/inter';
declare module '@fontsource-variable/space-grotesk';

declare module '*.yml' {
  const data: any;
  export default data;
}
