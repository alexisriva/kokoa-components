import { useState } from "react";
import { Button, IconButton, Input, Pill, Textarea, Dropdown } from "../index";
import type { ComponentVariant } from "../theme/variants";

const VARIANTS: ComponentVariant[] = ["primary", "secondary", "ghost"];

// Simple inline SVG icons
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const dropdownOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular", disabled: true },
  { value: "solid", label: "Solid" },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export function App() {
  const [dropdownValues, setDropdownValues] = useState<Record<string, string>>(
    {},
  );
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center gap-4">
        <img src="/logo.png" alt="Kokoa" className="h-16 w-16 object-contain" />
        <div>
          <h1 className="text-xl font-bold text-slate-900">Kokoa Components</h1>
          <p className="text-sm text-slate-500">
            Component showcase — all variants &amp; states
          </p>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <a
            href="https://github.com/alexisriva/kokoa-components"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <a
            href="/kokoa-components/storybook/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            Storybook
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-12 flex flex-col gap-16">
        {/* Button */}
        <Section title="Button">
          {VARIANTS.map((variant) => (
            <Row key={variant} label={variant}>
              <Button variant={variant}>Default</Button>
              <Button variant={variant} leadingIcon={<StarIcon />}>
                Leading icon
              </Button>
              <Button variant={variant} trailingIcon={<ArrowRightIcon />}>
                Trailing icon
              </Button>
              <Button
                variant={variant}
                leadingIcon={<PlusIcon />}
                trailingIcon={<ArrowRightIcon />}
              >
                Both icons
              </Button>
              <Button variant={variant} disabled>
                Disabled
              </Button>
            </Row>
          ))}
        </Section>

        {/* IconButton */}
        <Section title="IconButton">
          {VARIANTS.map((variant) => (
            <Row key={variant} label={variant}>
              <IconButton variant={variant} size="sm" aria-label="Star (sm)">
                <StarIcon />
              </IconButton>
              <IconButton variant={variant} size="md" aria-label="Heart (md)">
                <HeartIcon />
              </IconButton>
              <IconButton variant={variant} size="lg" aria-label="Plus (lg)">
                <PlusIcon />
              </IconButton>
              <IconButton variant={variant} aria-label="Trash">
                <TrashIcon />
              </IconButton>
              <IconButton variant={variant} disabled aria-label="Disabled">
                <SearchIcon />
              </IconButton>
            </Row>
          ))}
        </Section>

        {/* Pill */}
        <Section title="Pill">
          {VARIANTS.map((variant) => (
            <Row key={variant} label={variant}>
              <Pill variant={variant}>Label</Pill>
              <Pill variant={variant}>
                <StarIcon /> Featured
              </Pill>
              <Pill variant={variant}>In progress</Pill>
              <Pill variant={variant}>v1.0.0</Pill>
            </Row>
          ))}
        </Section>

        {/* Input */}
        <Section title="Input">
          {VARIANTS.map((variant) => (
            <Row key={variant} label={variant}>
              <Input
                variant={variant}
                placeholder="Placeholder text"
                className="max-w-xs"
              />
              <Input
                variant={variant}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                className="max-w-xs"
              />
              <Input
                variant={variant}
                placeholder="Disabled"
                disabled
                className="max-w-xs"
              />
            </Row>
          ))}
        </Section>

        {/* Textarea */}
        <Section title="Textarea">
          {VARIANTS.map((variant) => (
            <Row key={variant} label={variant}>
              <Textarea
                variant={variant}
                placeholder="Placeholder text..."
                className="max-w-xs"
                rows={3}
              />
              <Textarea
                variant={variant}
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                placeholder="Type something..."
                className="max-w-xs"
                rows={3}
              />
              <Textarea
                variant={variant}
                placeholder="Disabled"
                disabled
                className="max-w-xs"
                rows={3}
              />
            </Row>
          ))}
        </Section>

        {/* Dropdown */}
        <Section title="Dropdown">
          {VARIANTS.map((variant) => (
            <Row key={variant} label={variant}>
              <Dropdown
                variant={variant}
                options={dropdownOptions}
                value={dropdownValues[variant]}
                onChange={(val) =>
                  setDropdownValues((prev) => ({ ...prev, [variant]: val }))
                }
                placeholder="Select framework..."
              />
              <Dropdown
                variant={variant}
                options={dropdownOptions}
                value={dropdownValues[`${variant}-icon`]}
                onChange={(val) =>
                  setDropdownValues((prev) => ({
                    ...prev,
                    [`${variant}-icon`]: val,
                  }))
                }
                placeholder="With icon..."
                icon={<GlobeIcon />}
              />
              <Dropdown
                variant={variant}
                options={dropdownOptions}
                placeholder="Disabled"
                disabled
              />
            </Row>
          ))}
        </Section>
      </main>
    </div>
  );
}
