export const backgrounds = [
  {
    title: 'Aurora',
    theme: 'dark',

    background: `
      radial-gradient(
        circle at 50% 35%,
        rgba(223, 182, 92, 0.35),
        transparent 32%
      ),
      radial-gradient(
        circle at 50% 35%,
        rgba(180, 151, 214, 0.18),
        transparent 55%
      ),
      #09090b
    `,

    code: `background:
  radial-gradient(circle at 50% 35%, rgba(223, 182, 92, 0.35), transparent 32%),
  radial-gradient(circle at 50% 35%, rgba(180, 151, 214, 0.18), transparent 55%),
  #09090b;`,

    tailwind: `bg-[radial-gradient(circle_at_50%_35%,rgba(223,182,92,0.35),transparent_32%),radial-gradient(circle_at_50%_35%,rgba(180,151,214,0.18),transparent_55%),#09090b]`
  },

  {
    title: 'Radial Spotlight',
    theme: 'light',

    background: `
      radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.95),
        transparent 60%
      ),
      #e8e5df
    `,

    code: `background:
  radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.95),
    transparent 60%
  ),
  #e8e5df;`,

    tailwind: `bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),transparent_60%),#e8e5df]`
  },

  {
    title: 'Deep Violet',
    theme: 'dark',

    background: `
      radial-gradient(
        circle at 30% 30%,
        rgba(124, 58, 237, 0.6),
        transparent 40%
      ),
      #09090b
    `,

    code: `background:
  radial-gradient(
    circle at 30% 30%,
    rgba(124, 58, 237, 0.6),
    transparent 40%
  ),
  #09090b;`,

    tailwind: `bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.6),transparent_40%),#09090b]`
  }
];