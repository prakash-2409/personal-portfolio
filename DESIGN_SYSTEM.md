# Design System — Developer Portfolio

A minimal, intentional design system for a professional developer portfolio.

---

## Philosophy

> **"Less, but better."** — Dieter Rams

This design system prioritizes:
- **Content-first**: Let your work speak for itself
- **Visual quietness**: No gradients, no glassmorphism, minimal shadows
- **Mobile-first**: Base styles for mobile, enhanced for desktop
- **Accessibility**: WCAG AA compliant contrast ratios

---

## 1. Color Palette

### Light Theme

| Token | Value | Usage |
|-------|-------|-------|
| **Primary** | `#1a1a1a` | Main text, primary buttons |
| **Accent** | `#2563eb` | Links, highlights, tags |
| **Text** | `#1a1a1a` | Headings, body copy |
| **Text Muted** | `#666666` | Descriptions, metadata |
| **Background** | `#fafafa` | Page background |
| **Surface** | `#ffffff` | Cards, elevated elements |
| **Border** | `#e5e5e5` | Dividers, outlines |

### Dark Theme

| Token | Value | Usage |
|-------|-------|-------|
| **Primary** | `#f0f0f0` | Main text, primary buttons |
| **Accent** | `#60a5fa` | Links, highlights, tags |
| **Text** | `#f0f0f0` | Headings, body copy |
| **Text Muted** | `#a0a0a0` | Descriptions, metadata |
| **Background** | `#0f0f0f` | Page background |
| **Surface** | `#1f1f1f` | Cards, elevated elements |

### Design Decisions

**Why near-black (#1a1a1a) instead of pure black?**  
Pure black (#000) creates harsh contrast that can cause eye strain during extended reading. Near-black is softer while maintaining strong hierarchy.

**Why blue for accent?**  
Blue (#2563eb) conveys trust, professionalism, and technical competence—ideal for a developer portfolio. It's saturated enough to stand out but not overwhelming.

**Why only 2 text colors?**  
Text + Text Muted provides sufficient hierarchy without visual complexity. A third muted level (#999) exists for timestamps/labels but is used sparingly.

---

## 2. Typography

### Font Pairing

| Purpose | Font | Fallbacks |
|---------|------|-----------|
| **Headings** | Source Serif 4 | Georgia, Times New Roman, serif |
| **Body** | Inter | -apple-system, BlinkMacSystemFont, sans-serif |

### Design Decisions

**Why Source Serif 4 for headings?**  
A refined serif font with an editorial feel. Conveys intelligence and craftsmanship. The variable font allows for precise weight control. Serif on headings creates visual distinction from body text.

**Why Inter for body?**  
Designed specifically for screens. Excellent x-height and legibility at small sizes. Neutral personality that doesn't distract from content. Industry standard for developer and tech sites.

### Type Scale

| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 12px | Labels, captions |
| `--text-sm` | 14px | Secondary text, navigation |
| `--text-base` | 16px | Body copy |
| `--text-lg` | 18px | Lead paragraphs |
| `--text-xl` | 20px | Card titles |
| `--text-2xl` | 28px | Section titles |
| `--text-3xl` | 32px | Page titles (mobile) |
| `--text-4xl` | 40px | Hero (tablet) |
| `--text-5xl` | 64px | Hero (desktop) |

---

## 3. Spacing Scale

Based on an **8px grid** with half-steps for fine-tuning.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 8px | Icon gaps, tight padding |
| `--space-sm` | 16px | Element gaps, small margins |
| `--space-md` | 24px | Card padding, standard gaps |
| `--space-lg` | 32px → 48px* | Between elements |
| `--space-xl` | 64px → 80px* | Section padding |
| `--space-2xl` | 80px → 128px* | Major sections |

*Values expand on screens ≥768px

### Design Decisions

**Why an 8px grid?**  
8 divides evenly into common screen widths. Creates consistent rhythm. Half-steps (4px) allow fine-tuning without breaking the system.

**Why separate mobile/desktop spacing?**  
Content needs room to breathe on larger screens. But excessive whitespace on mobile wastes precious viewport space.

---

## 4. Buttons

Three variants covering all interaction hierarchies:

### Primary Button

```css
.btn-primary {
    background: #1a1a1a;
    color: #fafafa;
    border: 1px solid #1a1a1a;
}
```

**Usage**: Main calls-to-action. "View Projects", "Contact Me", "Download Resume"

### Secondary Button

```css
.btn-secondary {
    background: transparent;
    color: #1a1a1a;
    border: 1px solid #e5e5e5;
}
```

**Usage**: Alternative actions. "Learn More", "View Source", paired with primary buttons.

### Subtle Button

```css
.btn-subtle {
    background: transparent;
    color: #666666;
    border: none;
}
```

**Usage**: Tertiary actions. "Cancel", "Skip", navigation items.

### Design Decisions

**Why use primary color instead of accent for buttons?**  
Black/dark buttons are more versatile and feel more intentional. Accent color is reserved for links and highlights where color aids recognition (like in body text).

**Why 48px minimum height?**  
Touch-friendly. Apple's HIG recommends 44px minimum; 48px provides comfortable margin.

---

## 5. Cards

```css
.card {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 24px;
}
```

### Hover State

```css
.card:hover {
    border-color: #999999;
}
```

**Not used**: Shadow elevation. Shadows add visual noise and don't align with our minimal philosophy.

### Card Anatomy

```
┌─────────────────────────────────┐
│  TAG                            │
│  Card Title                     │
│  Description text goes here...  │
│                                 │
│  ┌─────┐ ┌──────┐ ┌─────────┐   │
│  │React│ │Node  │ │Firebase │   │  ← Meta items
│  └─────┘ └──────┘ └─────────┘   │
│                                 │
│  View Project →                 │  ← Link
└─────────────────────────────────┘
```

### Design Decisions

**Why borders instead of shadows?**  
- More minimal and intentional
- Better performance (no blur calculations)
- Clear boundaries without visual noise
- Aligns with "no excessive shadows" constraint

**Why subtle hover instead of lift?**  
Border color change provides feedback without dramatic movement. Respects reduced motion preferences.

---

## 6. Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| Default | Mobile (0 - 479px) |
| 480px+ | Large mobile |
| 768px+ | Tablet |
| 900px+ | Small desktop |
| 1100px+ | Desktop |

### Mobile-First Approach

1. Write base styles for mobile
2. Add complexity via `@media (min-width: ...)` queries
3. Key changes at 768px: spacing expands, layouts shift to multi-column

---

## Usage

### Installation

Link the design system before your main stylesheet:

```html
<link rel="stylesheet" href="design-system.css">
<link rel="stylesheet" href="style.css">
```

Or import in CSS:

```css
@import url('design-system.css');
```

### Button Examples

```html
<button class="btn btn-primary">View Projects</button>
<button class="btn btn-secondary">Learn More</button>
<button class="btn btn-subtle">Cancel</button>
```

### Card Example

```html
<article class="card">
  <span class="card-tag">Full Stack</span>
  <h3 class="card-title">Project Name</h3>
  <p class="card-description">Brief description of the project...</p>
  <div class="card-meta">
    <span class="card-meta-item">React</span>
    <span class="card-meta-item">Node.js</span>
  </div>
  <a href="#" class="card-link">View Project →</a>
</article>
```

---

## CSS Custom Properties Reference

```css
/* Colors */
--color-primary
--color-accent
--color-text
--color-text-muted
--color-bg
--color-surface
--color-border

/* Typography */
--font-heading
--font-body
--text-xs through --text-5xl
--weight-regular / --weight-medium / --weight-semibold
--leading-tight / --leading-normal / --leading-relaxed

/* Spacing */
--space-xs through --space-2xl
--space-1 through --space-32 (raw values)

/* Layout */
--radius-sm / --radius-md / --radius-lg
--transition-fast / --transition-base / --transition-slow
```

---

*Last updated: December 31, 2024*
