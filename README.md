# Kokoa Components

`kokoa-components` is a React UI component library.

## Architecture

The project follows an [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) layout:

- **Atoms** live under `src/components/atoms` and include elemental building blocks such as `Button` and `Input`.
- **Molecules** live under `src/components/molecules` and compose atoms into richer widgets like the `Dropdown`.

All public exports are surfaced from the package root, so consumers can continue importing from `kokoa-components`.

## Atoms

### Button

Wraps the native `<button>` and exposes a `variant` prop for quick styling. The component defaults to `type="button"` and forwards all HTML attributes.

| Variant     | Visual Style                                                                                | Suggested Use                            |
| ----------- | ------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `primary`   | Solid background with high-contrast text. Hover and focus styles reinforce primary actions. | Main call-to-action buttons              |
| `secondary` | Neutral surface with subtle border and hover fill. Works on light backgrounds.              | Secondary actions, non-destructive flows |
| `ghost`     | Minimal styling with transparent background and hover fill.                                 | Low-emphasis actions, toolbar controls   |

```tsx
import { Button } from "kokoa-components";

export function Actions() {
  return (
    <div className="flex gap-2">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Learn more</Button>
    </div>
  );
}
```

### IconButton

Purpose-built for icon-only actions. It enforces a square hit-area, handles accessible labeling via `aria-label`, and reuses the shared variants—something you don’t get by simply dropping an `<img>` inside the regular `Button`.

```tsx
import { IconButton } from "kokoa-components";

export function FavoriteToggle() {
  return (
    <IconButton aria-label="Favorite" variant="ghost">
      <span aria-hidden="true">★</span>
    </IconButton>
  );
}
```

### Pill

Displays status tags or counters with the shared variant language.

```tsx
import { Pill } from "kokoa-components";

export function Status() {
  return (
    <div className="flex gap-2">
      <Pill variant="primary">Live</Pill>
      <Pill variant="secondary">Draft</Pill>
      <Pill variant="ghost">Archived</Pill>
    </div>
  );
}
```

### Input

Stylised single-line text input with forwarded refs.

```tsx
import { Input } from "kokoa-components";

export function ProfileForm() {
  return (
    <form className="space-y-3">
      <Input variant="secondary" name="name" placeholder="Name" />
      <Input variant="primary" type="email" name="email" placeholder="Email" />
      <Input variant="ghost" name="search" placeholder="Search..." />
    </form>
  );
}
```

### Textarea

Multi-line counterpart to `Input`, carrying the same variant system.

```tsx
import { Textarea } from "kokoa-components";

export function FeedbackForm() {
  return (
    <Textarea
      variant="secondary"
      placeholder="Share your thoughts…"
      rows={6}
    />
  );
}
```

## Molecules

### Dropdown

Styled `<select>` element that matches the shared variant language and optionally renders options from an array.

| Variant     | Visual Style                                       | Suggested Use              |
| ----------- | -------------------------------------------------- | -------------------------- |
| `primary`   | Solid fill with white text and high-focus outline. | Primary selection controls |
| `secondary` | Light surface with subtle border and hover fill.   | Default dropdowns          |
| `ghost`     | Minimal transparent surface with hover emphasis.   | Low-emphasis filters       |

```tsx
import { Dropdown } from "kokoa-components";

const options = [
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
];

export function FlavorSelect() {
  return (
    <Dropdown
      variant="secondary"
      options={options}
      aria-label="Favorite flavor"
      defaultValue="vanilla"
    />
  );
}
```

## Development

- `npm run dev` – Start Vite for local component development.
- `npm run storybook` – Launch Storybook to interactively explore the components.
- `npm run build` – Generate the library bundles (`dist/`) with type declarations ready for publishing.
