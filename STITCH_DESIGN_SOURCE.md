---
name: Prestige Driver Network
colors:
  surface: '#101416'
  surface-dim: '#101416'
  surface-bright: '#363a3c'
  surface-container-lowest: '#0b0f11'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2d'
  surface-container-highest: '#323538'
  on-surface: '#e0e3e6'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e0e3e6'
  inverse-on-surface: '#2d3133'
  outline: '#8f9097'
  outline-variant: '#44474c'
  surface-tint: '#bbc7dd'
  primary: '#bbc7dd'
  on-primary: '#263142'
  primary-container: '#0a1626'
  on-primary-container: '#758094'
  inverse-primary: '#545f72'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#e4c0a3'
  on-tertiary: '#422c17'
  tertiary-container: '#231102'
  on-tertiary-container: '#987960'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d7e3fa'
  primary-fixed-dim: '#bbc7dd'
  on-primary-fixed: '#101c2c'
  on-primary-fixed-variant: '#3c4759'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#e4c0a3'
  on-tertiary-fixed: '#2a1705'
  on-tertiary-fixed-variant: '#5b422c'
  background: '#101416'
  on-background: '#e0e3e6'
  surface-variant: '#323538'
  gold-light: '#F2D479'
  gold-dark: '#9E7E1D'
  navy-accent: '#14253D'
  status-success: '#27AE60'
  status-info: '#2F80ED'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
  button-text:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is built to evoke a sense of **exclusive reliability and professional excellence**. Targeting professional drivers for passenger and cargo transport, the aesthetic balances the gravitas of a traditional luxury institution with the sleek efficiency of a modern logistics partner.

The chosen style is **Modern Corporate with a Tactile twist**. It utilizes a deep, authoritative color palette and sharp typography, punctuated by metallic accents and subtle depth to mirror the automotive industry's high-end finishes. The interface must feel premium but never fragile, ensuring that drivers perceive the taxi park as a robust and high-priority partner.

Key visual pillars include:
- **Depth and Materiality:** Use of subtle gradients and lighting effects to mimic brushed metal and polished paint.
- **Precision:** Tight alignment and generous whitespace to emphasize systematic organization.
- **Authority:** High-contrast color pairings that ensure absolute legibility and an institutional feel.

## Colors

The palette is centered on the contrast between **Deep Midnight Navy** and **Metallic Gold**. 

- **Primary (Navy):** Used as the foundational surface color to provide a stable, high-end environment. It replaces pure black to add depth and sophistication.
- **Secondary (Gold):** Used exclusively for high-priority calls to action, highlights, and brand insignias. When used for buttons, apply a subtle linear gradient from `gold-dark` to `gold-light` to simulate a metallic sheen.
- **Neutral:** A range of cool grays and off-whites used for body text and secondary information to maintain readability against the dark backgrounds.
- **Status Colors:** Functional colors for success (green) and information (blue) are desaturated slightly to harmonize with the primary navy without losing their semantic meaning.

## Typography

This design system uses **Manrope** for headlines to provide a modern, geometric, and technical feel. **Hanken Grotesk** is used for body text and labels to ensure maximum legibility and a contemporary professional tone.

- **Headlines:** Should be used with tight letter spacing for a "locked-in" editorial look.
- **Labels:** Tactical information (like "COMMISSION 1.5%") should use the `label-caps` style to differentiate data points from narrative text.
- **Hierarchy:** Ensure a clear distinction between the "Taxi" and "Cargo" headers to allow users to scan and identify their specific path immediately.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a centered, prestigious feel, while transitioning to a fluid single-column model for mobile.

- **Desktop:** 12-column grid with a 1280px max-width. Sections are separated by large vertical gaps (`section-gap`) to allow the brand elements to breathe.
- **Mobile:** 4-column grid with minimal margins. Elements like cards for "Taxi" and "Cargo" should stack vertically.
- **Rhythm:** Use a strict 8px base unit for all internal component padding and element spacing to ensure a disciplined, engineered appearance.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** combined with **Inner Gloss**.

- **Surfaces:** Use `navy-accent` for cards and containers sitting on the `primary_color` background. This creates a subtle "raised" effect without the need for heavy drop shadows.
- **Metallic Accents:** High-priority elements use a 1px "Gold" stroke with a subtle inner glow to simulate the edge of a physical metal plaque.
- **Shadows:** Avoid large, fuzzy shadows. Instead, use sharp, low-opacity (15%) black shadows with a 4px blur to give interactive elements a slight lift.

## Shapes

The shape language is **Soft (0.25rem)**. While a premium brand could lean into sharp corners, a slight radius communicates modern technology and approachable reliability.

- **Buttons & Cards:** Use `rounded-sm` (4px) to maintain a precise, "machined" look.
- **Icons:** Should be linear, using a 2px stroke weight to match the technicality of the typography.
- **Decorative Elements:** Any diagonal lines or "slashes" should be set at a consistent 15-degree angle to echo the sleek lines of automotive design.

## Components

### Primary Button (Phone CTA)
The most critical action. Styled with a gold gradient background, navy text, and a `rounded-sm` corner. On hover, the gradient should shift brightness slightly, and a subtle "shimmer" animation should pass across the surface once every few seconds to draw the eye.

### Secondary Button (Email/Info)
Outlined style. Uses a 1px gold stroke with gold text. The background remains transparent to maintain hierarchy below the phone call CTA.

### Service Cards (Taxi & Cargo)
Large interactive tiles.
- **Default:** Navy-accent background with gold icons.
- **Hover/Active:** A thin gold border appears, and the icon scales slightly (5%). 
- Content includes the direction name, commission percentage (using `label-caps`), and a list of key benefits.

### Step Indicators
Simplified numeric indicators. Gold numbers on a navy background. Connected by a thin 1px gold vertical or horizontal line to show progression.

### Contact Section
A high-contrast block at the footer of the page. The phone number should be displayed in `headline-xl` to ensure it is impossible to miss.