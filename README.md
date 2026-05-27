# Diya Chakraborti — Portfolio

Product design portfolio built from the [Figma design](https://www.figma.com/design/G79VtoQlJbdAID7VcKgPRA/Portfolio?node-id=17-374).

## Stack

- [Next.js](https://nextjs.org) (App Router)
- CSS Modules (no Tailwind)
- [Geist](https://vercel.com/font) & Geist Pixel Square

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Projects** — edit `lib/projects.ts` (add `href` when case study pages exist)
- **Social links** — edit `lib/social-links.ts` (`ariaLabel` on every link; optional `tooltip` for hover — email & resume only by default)
- **Resume** — `public/Diya Chakraborti Resume.pdf`, or change the `resume` href in `lib/social-links.ts`
- **Avatar** — replace `public/avatar.png`
- **Project images** — extend `ProjectCard` to accept an `image` prop when assets are ready
