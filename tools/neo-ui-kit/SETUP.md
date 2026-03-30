# Neo-Brutalism Toolkit (Local)

This workspace has been equipped with two tools:

1. `neobrutalismcss@1.0.0` (CSS-only framework)
2. `neobrutal@1.1.0` (component CLI; Tailwind/React-oriented)

## Installed Paths

- CSS source (expanded): `vendor/neobrutalismcss.css`
- CSS source (minified): `vendor/neobrutalismcss.min.css`
- npm packages: `node_modules/`

## Quick Use

### For static HTML pages (recommended now)

Add this in your HTML `<head>`:

```html
<link rel="stylesheet" href="./tools/neo-ui-kit/vendor/neobrutalismcss.min.css" />
```

### For component scaffolding (future React/Tailwind project)

```bash
cd /Users/sunflower/Desktop/personal-website-template/tools/neo-ui-kit
npx neobrutal list
npx neobrutal init -y
npx neobrutal add button -y -o
```

## Verified Online Sources

- NeoBrutalismCSS npm: https://www.npmjs.com/package/neobrutalismcss
- NeoBrutalismCSS docs: https://matifandy8.github.io/NeoBrutalismCSS/
- neobrutal CLI npm: https://www.npmjs.com/package/neobrutal
- neobrutal registry/docs endpoint (from CLI README): https://www.neobrutalui.live/
- neobrutalism React package (alternative): https://www.npmjs.com/package/@soupbowl/neobrutalism-react
- Tailwind plugin (alternative): https://www.npmjs.com/package/@01sadra/tailwind-neobrutalism

## Notes

- `neobrutalismcss` is the best fit for the current plain HTML/CSS site.
- `neobrutal` generates component files and is better suited for a React/Tailwind stack.
