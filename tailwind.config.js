/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Scanned locally when sibling repos are present; CF Pages build uses safelist below
    "../PignusFacturacion/public/**/*.{html,js}",
    "../PignusPortal/**/*.html",
    "../PignusInversiones/dashboard/frontend/**/*.{html,js}",
    "./src/**/*.css",
  ],
  // Safelist covers all Tailwind classes used across the three apps.
  // Required because CF Pages builds PignusUI in isolation without sibling repos.
  safelist: [
    // layout / display
    "flex", "flex-1", "flex-col", "flex-shrink-0", "flex-row",
    "grid", "grid-cols-3",
    "block", "inline", "inline-flex", "hidden",
    "sticky", "fixed", "relative", "absolute", "inset-0",
    // overflow
    "overflow-hidden", "overflow-x-auto",
    // position helpers
    "top-0", "bottom-6", "left-0", "right-0", "left-1/2", "-translate-x-1/2",
    "z-30", "z-40", "z-50",
    // flexbox / grid
    "items-center", "items-start",
    "justify-between", "justify-center",
    "gap-1", "gap-1.5", "gap-2", "gap-3",
    "space-y-6",
    // sizing
    "w-full", "w-3.5", "w-4", "w-5", "w-9",
    "h-1.5", "h-3.5", "h-4", "h-5", "h-9", "h-44", "h-64", "h-72",
    "min-h-screen",
    "max-w-3xl", "mx-auto",
    // arbitrary values
    "max-w-[72px]", "min-w-[700px]",
    // spacing
    "p-0.5", "p-2", "p-4",
    "px-2", "px-2.5", "px-3", "px-4", "px-5",
    "py-0.5", "py-1", "py-1.5", "py-2", "py-3", "py-3.5", "py-6", "py-8", "py-10",
    "pt-3", "pt-4", "pb-3",
    "mt-0.5", "mt-1", "mt-3", "mb-2", "mb-3", "mb-4", "ml-0.5", "ml-4",
    // typography
    "font-sans", "font-bold", "font-semibold",
    "text-xs", "text-sm", "text-base",
    "text-left", "text-right", "text-center",
    "leading-tight", "tabular-nums", "truncate", "whitespace-nowrap",
    // colors (arbitrary)
    "hover:text-[#1c1814]",
    // borders / radius
    "rounded", "rounded-full", "rounded-lg", "rounded-xl",
    // effects
    "shadow-lg",
    "opacity-50", "opacity-70", "opacity-80",
    "hover:opacity-60", "hover:opacity-100",
    "disabled:opacity-40",
    // transitions / animation
    "transition-all", "transition-colors", "transition-transform",
    "duration-200",
    "rotate-180", "animate-spin",
    // interaction
    "cursor-pointer", "select-none", "pointer-events-none", "touch-manipulation",
    // responsive
    "sm:flex-row", "sm:h-56", "sm:items-center", "sm:justify-between",
  ],
  theme: {
    extend: {
      colors: {
        cream:         '#f5f0e8',
        'cream-hover': '#ede7d9',
        card:          '#ffffff',
        border:        '#ddd5c0',
        'border-mid':  '#c8bfa8',
        ink:           '#1c1814',
        'ink-2':       '#5c5248',
        'ink-3':       '#9c8f84',
        blue:          '#1d4ed8',
        ok:            '#1a6b2a',
        err:           '#c23b22',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
