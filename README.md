# saalik.me

Bits and pieces of everything about [me](https://saalik.me/).

# Made with love ❣️ and

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [Firebase](https://firebase.google.com/)
- **Deployment**: [Vercel](https://vercel.com)
- **API**: [Spotify](https://developer.spotify.com/) and [Github](https://docs.github.com/en/)

## Overview

- `components/*` - Various components used throughout the site.
- `layouts/*` - The different layout options available to use on each page.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services like spotify and github.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering page and blog views and a proxy to [spotify](https://developer.spotify.com/) and [github](https://docs.github.com/en/) api.
- `pages/blog/*` - Static pre-rendered blog pages using markdown.
- `pages/pictures` - Everything about me that I like.
- `pages/*` - All other static pages.
- `public/*` - Static assets including robots.txt
- `styles/*` - Global styles, and reusable classes. I'm mostly using CSS modules.
- `posts/*` - contains the blog posts.
- `interfaces/*` - contains the typescript interfaces for all the data floating around the site.
- `data/*` - contains global data about the site.

## Running Locally

```bash
git clone git@github.com:saalikmubeen/saalik.me.git
cd saalik.me
npm install
npm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/saalikmubeen/saalik.me/blob/main/.env.example).

## Cloning / Forking

Feel free to clone it, fork it, modify it and use it as you wish 😊.
