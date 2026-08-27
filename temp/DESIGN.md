---
name: Serene Intellectualism
colors:
  surface: '#fff8f4'
  surface-dim: '#e1d8d3'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ec'
  surface-container: '#f5ece7'
  surface-container-high: '#efe7e1'
  surface-container-highest: '#e9e1db'
  on-surface: '#1e1b18'
  on-surface-variant: '#424845'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efe9'
  outline: '#737875'
  outline-variant: '#c3c8c4'
  surface-tint: '#53625c'
  primary: '#53615c'
  on-primary: '#ffffff'
  primary-container: '#6b7a74'
  on-primary-container: '#ffffff'
  inverse-primary: '#bacac3'
  secondary: '#625e54'
  on-secondary: '#ffffff'
  secondary-container: '#e9e2d4'
  on-secondary-container: '#696459'
  tertiary: '#605d57'
  on-tertiary: '#ffffff'
  tertiary-container: '#79766f'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e6df'
  primary-fixed-dim: '#bacac3'
  on-primary-fixed: '#111e1a'
  on-primary-fixed-variant: '#3b4a45'
  secondary-fixed: '#e9e2d4'
  secondary-fixed-dim: '#ccc6b9'
  on-secondary-fixed: '#1e1b13'
  on-secondary-fixed-variant: '#4a463d'
  tertiary-fixed: '#e7e2d9'
  tertiary-fixed-dim: '#cac6bd'
  on-tertiary-fixed: '#1d1c16'
  on-tertiary-fixed-variant: '#494740'
  background: '#fff8f4'
  on-background: '#1e1b18'
  surface-variant: '#e9e1db'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is rooted in the concept of "Digital Sanctuary." It targets an intellectual audience—researchers, writers, and strategic thinkers—who require a distraction-free environment to map complex thoughts. 

The aesthetic is a sophisticated blend of **Minimalism** and **Tactile Modernism**. It prioritizes extreme clarity and purposeful whitespace to reduce cognitive load. The visual narrative draws from architectural forms, using soft lighting metaphors and organic depth to create a sense of calm and structure. Every interaction should feel intentional, quiet, and premium, evoking the feeling of a physical gallery or a high-end personal library.

## Colors

The palette is derived from natural, earthy materials like limestone, linen, and sage.

- **Primary (#6B7A74):** A muted, professional green/grey used for focus actions and primary iconography.
- **Secondary (#D9D2C5):** A warm, mid-tone beige for structural elements and secondary buttons.
- **Tertiary (#EAE5DC):** A soft cream that serves as the foundation for cards and surfaces.
- **Neutral (#544F4B):** A deep, warm charcoal used for primary text to ensure high legibility without the harshness of pure black.
- **Background (#F2EEE9):** A very light, off-white beige that provides a breathable canvas.

The default mode is light, as it mimics the reflective quality of physical paper and architectural spaces.

## Typography

This system uses a classical-modernist pairing. **EB Garamond** provides an authoritative, literary feel for headlines, while **Hanken Grotesk** offers a clean, technical precision for functional text.

- Use **Display** sizes for hero sections and chapter headings.
- **Body** text uses a generous line height (1.6) to ensure maximum readability during long-form thought mapping.
- **Labels** are set in Hanken Grotesk with a slight tracking increase for a more modern, architectural feel in navigation and metadata.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid hybrid grid**. 
- Content is centered within a maximum width of 1280px on desktop.
- A 12-column grid is used with generous 24px gutters.
- **Whitespace is treated as a first-class citizen.** Vertical spacing between sections should be expansive (XL spacing) to emphasize the "Sanctuary" vibe.
- On mobile, the grid collapses to 4 columns with 20px side margins.

Avoid "crowding" elements; if in doubt, increase the padding. The goal is to make the user feel like they have "room to think."

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Soft Ambient Shadows** rather than stark borders.

1.  **Base Layer:** The primary background color.
2.  **Surface Layer:** Cards and containers use a slightly lighter tone (Tertiary) with extremely soft, large-radius shadows (Blur: 30px, Opacity: 4%, Color: Neutral).
3.  **Interactive Layer:** Elements being dragged or hovered should slightly "lift" with a more pronounced shadow and a subtle scale increase.

Use backdrop blurs (Glassmorphism) sparingly—only for persistent navigation bars to maintain context of the content beneath.

## Shapes

The design system uses **Rounded** geometry to feel approachable and organic.

- **Standard Elements (Buttons, Inputs):** 0.5rem (8px).
- **Large Elements (Cards, Modals):** 1.5rem (24px) to create a soft, "container" feel.
- **Interactive Pill Elements:** Fully rounded (pill) for specific tags or navigation indicators to differentiate them from functional inputs.

## Components

### Buttons
Primary buttons use the Primary Color with white or cream text. Secondary buttons use a ghost style with a 1px border of the Primary Color. All buttons have a subtle transition on hover, shifting the background color slightly deeper.

### Input Fields
Inputs should be minimalist: a 1px bottom border or a very soft Tertiary-colored background. Focus states are indicated by a change in border color to the Primary Green/Grey.

### Cards
Cards are the core of the mental mapping tool. They should feature generous internal padding (MD spacing) and use the `rounded-xl` shape. They should appear "sunken" or "lifted" using the elevation guidelines.

### Chips & Nodes
For the mapping interface, nodes should be rounded or pill-shaped. Use subtle color coding (muted tones only) to categorize different thought paths without breaking the serene aesthetic.

### Navigation
The navigation bar should be clean, using the Label-md typography style. Use a "pill" background for the active state to mimic the look of a physical tab.