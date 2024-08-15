# Style Guide

## Colors

- Primary: hsl(20.4, 62.1%, 55.5%)
- East Bay: hsl(255.8, 25.9%, 40.2%)
- Jagger: hsl(269.1, 58.6%, 22.7%)
- Neutral: hsl(0, 0%, 0.8%)
- Success: hsl(81.2, 71.4%, 46.7%)
- Caution: hsl(49.3, 95.2%, 59.4%)
- Danger: hsl(346.9, 94.4%, 50.6%)
- Info: hsl(195.4, 94.5%, 57.1%)

## Typography

### Headings

- Font: Oswald Bold
- Size: 83px
- Case: Uppercase

### Subheadings

- Font: Montserrat Light
- Size: 23px
- Case: Uppercase

### Body Text

- Font: Cooper Hewitt Book
- Size: 15px
- Line Height: 1.6

## Usage Guidelines

1. Use the primary color for main call-to-action elements and primary interactive components.
2. East Bay and Jagger colors can be used for secondary and tertiary elements or backgrounds.
3. Neutral color is for body text and general content.
4. Use Success, Caution, Danger, and Info colors for their respective contextual feedback or alerts.
5. Headings should always be in Oswald Bold and uppercase.
6. Subheadings should use Montserrat Light and be uppercase.
7. Body text should consistently use Cooper Hewitt Book at 15px size with 1.6 line height for optimal readability.

## Accessibility

- Ensure sufficient color contrast between text and background colors.
- Use semantic HTML elements to structure content properly.
- Provide alternative text for images and icons.
- Ensure interactive elements are keyboard accessible.

## Responsive Design

- Design should be mobile-first and adapt smoothly to larger screen sizes.
- Use Tailwind's responsive utility classes for consistent breakpoints across the project.

## Components

(List and describe any custom components or common UI patterns specific to your project here.)

## File Naming Conventions

- Use kebab-case for file names (e.g., `header-component.tsx`, `about-page.tsx`).
- React components should be in PascalCase (e.g., `HeaderComponent.tsx`).

## Code Style

- Follow the Airbnb JavaScript Style Guide for general JavaScript/TypeScript conventions.
- Use functional components and hooks in React.
- Prefer named exports over default exports for better refactoring and intellisense support.

## Project Structure

This project uses NextJS 14 with Typescript and App Router, Tailwind CSS, and Shadcn/UI. Ensure that the following configurations are in place:

### Tailwind Configuration

```javascript:tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(20.4, 62.1%, 55.5%)",
        eastBay: "hsl(255.8, 25.9%, 40.2%)",
        jagger: "hsl(269.1, 58.6%, 22.7%)",
        neutral: "hsl(0, 0%, 0.8%)",
        success: "hsl(81.2, 71.4%, 46.7%)",
        caution: "hsl(49.3, 95.2%, 59.4%)",
        danger: "hsl(346.9, 94.4%, 50.6%)",
        info: "hsl(195.4, 94.5%, 57.1%)",
      },
      fontFamily: {
        sans: ["var(--font-cooper-hewitt)", "sans-serif"],
        heading: ["var(--font-oswald)", "sans-serif"],
        subheading: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        heading: "83px",
        subheading: "23px",
        body: "15px",
      },
      lineHeight: {
        body: "1.6",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### Global Styles

```css:src/styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 0.8%;
    --primary: 20.4 62.1% 55.5%;
    --secondary: 255.8 25.9% 40.2%;
    --muted: 0 0% 96.1%;
    --accent: 269.1 58.6% 22.7%;
    --destructive: 346.9 94.4% 50.6%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 20.4 62.1% 55.5%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 0.8%;
    --foreground: 0 0% 98%;
    --primary: 20.4 62.1% 55.5%;
    --secondary: 255.8 25.9% 40.2%;
    --muted: 0 0% 14.9%;
    --accent: 269.1 58.6% 22.7%;
    --destructive: 346.9 94.4% 50.6%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 20.4 62.1% 55.5%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply text-body leading-body bg-background font-sans text-foreground;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading text-heading uppercase;
  }
  h2 {
    @apply font-subheading text-subheading uppercase;
  }
}
```

