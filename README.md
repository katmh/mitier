# MITier: Tier rank MIT classes

Inspired by [Confession #46376](https://www.facebook.com/beaverconfessions/posts/4134086619993687), which may have been inspired by this [Admissions blog post](https://mitadmissions.org/blogs/entry/tier-listing-my-classes/), which may have been inspired by who knows what.

Colors are from [Courseroad](https://github.com/sipb/courseroad2/blob/master/src/assets/css/coursecolors.css). Course data is processed from the subject listing, currently just IAP/Spring 2021 (so old courses may not be included yet). See [`/data` README](https://github.com/katmh/mitier/tree/main/data) for slightly more information.

## Installation

This is a Next.js (React) app using NPM. It's all client-side except for an [API route](https://nextjs.org/docs/api-routes/introduction) (see `/pages/api`) that filters the courses dataset.

```
git clone https://github.com/katmh/mitier
cd mitier
npm install
npm run dev
```

## Issues and Contributing

To report a bug or request a feature, making an issue is probably the way to go. Contributions  are welcome (feel free to make a pull request or open an issue to discuss) but I don't have any contributor guidelines yet.