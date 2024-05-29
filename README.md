# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![Screebshot of the social links component](./screenshot.png)

### Links

- [Github Repo](https://github.com/ffrosch/frontendmentor-social-links-profile)
- [Live URL](https://ffrosch.github.io/frontendmentor-social-links-profile/)

## My process

## Tech Stack

This exercise uses `react-ts`, `emotion`, `css custom properties` and a custom deployment workflow on Github Pages.

### Installation

```shell
# install in current directory
npm create vite@latest . -- --template react-ts
npm install --save @emotion/react
npm install -D @emotion/babel-plugin
```

### Configuration

To suppport the `css` prop from `emotion` (with Typescript) a few adjustments are necessary (thanks go out to [Mehdi Najafi
Mehdi Najafi](https://dev.to/mehdinajafi/how-to-use-emotion-css-prop-in-vite-39pj)):

`vite.config.js`

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
});
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    // ...
    "jsxImportSource": "@emotion/react"
  }
}
```

`vite-env.d.ts`

```ts
/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />
```

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Typescript
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Emotion CSS](https://emotion.sh/)

### What I learned

I really like trying out different approaches for CSS-in-JS. I think my style objects worked well, but it becomes clear that a component based approach will be necessary for larger projects to keep things simple.

I used absolute positioning to center the element and I enjoyed learning a bit more about this method. But I also found it quite hard to get everything right and had to make countless small adjustments to fix inconsistencies in the design.

### Useful resources

- [CSS variables for react-devs](https://www.joshwcomeau.com/css/css-variables-for-react-devs/)
- [Use CSS variables instead of React Context](https://epicreact.dev/css-variables/)
- [Emotion CSS best practices](https://emotion.sh/docs/best-practices)
- [Colocation](https://kentcdodds.com/blog/colocation)
- [Change how you write your CSS-in-JS for better performance](https://douges.dev/blog/taming-the-beast-that-is-css-in-js)
- [How to center a div](https://www.joshwcomeau.com/css/center-a-div/)

## Author

- Website - [florianfrosch.de](https://florianfrosch.de/)
- Frontend Mentor - [@ffrosch](https://www.frontendmentor.io/profile/ffrosch)
