export function setBrand(hue: number, sat?: string): void;
export function setPreset(
  name: "blue" | "cyan" | "green" | "orange" | "rose" | "violet",
): void;
export function setTheme(theme: "light" | "dark"): void;
export function applyCustomColor(hex: string): void;

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "soft"
  | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
