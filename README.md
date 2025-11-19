<<<<<<< Updated upstream

# Coffee Shop Menu — Front-end Focused Project

## Project Overview

**Coffee-shop-menu-front-end-focused-project** is a front-end application that presents a beautiful, accessible, and responsive menu for a coffee shop. It focuses on UI/UX, component reusability, performance, and accessibility while being easy to integrate with any backend API.

This document explains goals, features, architecture, components, design tokens, data shape, development workflow.

---

## Goals

- Build a visually appealing and fast coffee menu UI.
- Prioritize accessibility (keyboard, screen readers, semantic HTML).
- Responsive layouts: mobile-first, tablet, desktop.
- Component-driven architecture with clear props and state boundaries.
- Easy to connect with APIs or static JSON for demo build.
- Provide documentation and example data for easy handoff.

---

## Who is this for

- Front-end developers building a restaurant/coffee shop site.
- Designers looking for a coded reference of a menu system.

---

## Tech Stack 

- **Framework**: React , Next.js;
- **Bundler**: Next.js (app/router)
- **Styling**: Tailwind CSS (utility-first) + CSS variables for design tokens
- **Images**: responsive `srcset` and `sizes`, optionally `next/image` for Next.js
- **Icons**:  react-icons
- **Testing**: Jest + React Testing Library; MSW for API mocking
- **Lint & Formatting**: ESLint + Prettier + TypeScript 

---

## Design tokens 

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --footer-bg-color: rgb(33, 31, 30);

  --color-primary: #453e3c;
  --color-secondary: #6a6867;
  --color-accent: #009f3b;
  --color-accent-light: #4b9d69;
  --color-accent-2: #ecb881;
  --color-active-link: #007a2c;
}
```
---

## components Folder structure

```

├─ components/
│  ├─ about/
│  │  ├─ Herosec.tsx
│  │  └─ MainPage.tsx
│  ├─ contact/
│  │  ├─ Herosec.tsx
│  │  └─ MainPage.tsx
│  └─ homepage/
│     ├─ category-sec/
│     │  └─CategorySec.tsx
│     ├─ delight-sec
│     │  ├─ DelightSec.module.css
│     │  └─ DelightSec.tsx
│     ├─ drinks/
│     │  └─ Drinks.tsx
│     ├─ life-begin/
│     │  ├─ LifeBegin.module.css
│     │  └─ LifeBegin.tsx
│     ├─CoffeeMenu.tsx
│     └─ HeroSec.tsx
│     
├─ loaders/
│  ├─ loading-categories/
│  │   ├─ LoadingCategories.module.css
│  │   └─ LoadingCategories.tsx
│  │
│  └─ main-loader/
│     ├─ MainLoader.module.css
│     └─ MainLoader.tsx
├─ menu/
│  ├─ FullMenu.tsx
│  └─ Herosec.tsx
│
├─ menu-by-category/
│  ├─ MenuByCategory.tsx
│  └─ Herosec.tsx
│
├─ navbar/
│  ├─ LocaleSwitcher.tsx
│  ├─ MobileNav.tsx
│  └─ Navbar.tsx
├─ core/
│  ├─ CoffeeCard.tsx
│  ├─ CustomImage.tsx
│  ├─ TitleDescButtonSec.tsx
│  └─ TopHeroSec.tsx
│
├─ AutoBreadcrumb.tsx
└─Footer.tsx
```

---

## Utility Components Design (Props & Behavior)

### TopHeroSec

**Imports:**

* `AutoBreadcrumb`
* `CustomImage`

**Props:**

* `title: string` – Main heading text.
* `imageSrc: string` – Background hero image.

**Behavior:**

* Renders a hero section with a background image.
* Uses `CustomImage` with `preload` enabled for performance.
* Displays a title centered vertically.
* Renders automatic breadcrumbs below the title.
* Includes animated accent underline using Tailwind and pseudo-elements.

---

### TitleDescButtonSec

**Props:**

* `title: string` – Section title.
* `description?: string` – Optional paragraph text.
* `quote?: string` – Optional quote (renders instead of description).
* `buttonLabel?: string` – Optional button label.
* `onButtonClick?: () => void` – Optional click handler.

**Behavior:**

* Displays a centered section containing title + description or quote.
* If both `quote` and `description` exist, **quote takes priority**.
* Renders a styled accent button if `buttonLabel` is provided.
* Button includes hover animation using Tailwind pseudo-elements.

---

### CustomImage

**Props:**

* `src: string`
* `alt: string`
* `width?: number`
* `height?: number`
* `blurDataURL?: string`
* `preload?: boolean`
* `fetchPriority?: "high" | "low" | "auto"`
* `sizes?: string`
* `className?: string`
* `srcSet?: SrcSetEntry[]`
* `objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"`

**Behavior:**

* Wraps Next.js `<Image />` with `<picture>` to enable custom responsive sources.
* If no width/height is provided → component uses `fill` mode.
* Supports blur placeholder.
* Allows manually controlling `preload` and `fetchPriority` (should not combine with Next.js `priority`).
* Supports advanced responsive loading via `srcSet`.

---

### CoffeeCard

**Props:**

* `coffee: Coffee` – Object containing:

  * `name`
  * `image`
  * `description`
  * `origin`
  * `price`

**Behavior:**

* Displays a coffee card with image + details.
* Uses `CustomImage` with `objectFit="cover"`.
* Accessible: card uses semantic roles and aria-labels.

---

## Accessibility checklist

- Semantic HTML (`<nav>`, `<main>`, `<ul>`, `<button>`, `<form>`)
- Keyboard support (tab navigation, Enter/Space for activation)
- ARIA attributes: `aria-label`, `aria-describedby` for menus and dialogs
- Images with `alt` text
---

## Responsiveness & Layout

- Small screens: single column list
- Larger screens: multi-column grid (3–4 columns depending on width)
- Breakpoints example: sm 640px, md 768px, lg 1024px, xl 1280px
---


## Deployment

- Static hosting: Vercel(for Next)

---

## Example README for repo (short)

```
# Coffee Shop Menu (frontend)

A responsive, accessible front-end app for a coffee shop menu built with React and Tailwind.

## Run locally

1. `npm install`
2. `npm run dev` (Vite) or `npm run dev` (Next.js)

## Build

`npm run build`

## Test

`npm run test`
```

---



=======

# Coffee-shop-menu

