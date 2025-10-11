# Kokoa Components

`kokoa-components` is a React-focused UI component library.

## Button Component

The `Button` component wraps the native `<button>` element and exposes a `variant` prop for out-of-the-box styling. All standard button attributes (e.g. `type`, `disabled`, `onClick`) are forwarded.

| Variant     | Visual Style                                                                                | Suggested Use                            |
| ----------- | ------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `primary`   | Solid background with high-contrast text. Hover and focus styles reinforce primary actions. | Main call-to-action buttons              |
| `secondary` | Neutral surface with subtle border and hover fill. Works on light backgrounds.              | Secondary actions, non-destructive flows |
| `ghost`     | Minimal styling with transparent background and hover fill.                                 | Low-emphasis actions, toolbar controls   |

```tsx
import { Button } from "kokoa-components";

export function Example() {
  return (
    <div className="flex gap-2">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost" onClick={() => console.log("Clicked!")}>
        Learn more
      </Button>
    </div>
  );
}
```

## Development

- `npm run dev` – Start Vite for local component development.
- `npm run storybook` – Launch Storybook to interactively explore the components.
- `npm run build` – Generate the library bundles (`dist/`) with type declarations ready for publishing.
