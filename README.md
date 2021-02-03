# MITier: Tier rank MIT classes

Inspired by [Confession #46376](https://www.facebook.com/beaverconfessions/posts/4134086619993687), which may have been inspired by this [Admissions blog post](https://mitadmissions.org/blogs/entry/tier-listing-my-classes/), which may have been inspired by who knows what.

Colors are from [Courseroad](https://github.com/sipb/courseroad2/blob/master/src/assets/css/coursecolors.css). Course data is processed from the subject listing, currently just IAP/Spring 2021 (so old courses may not be included yet). See [`/data` README](https://github.com/katmh/mitier/tree/main/data) for slightly more information.

## Installation

This is a Next.js (React) app using NPM. Everything happens on the front-end except for an [API route](https://nextjs.org/docs/api-routes/introduction) (see `/pages/api`) that filters the courses dataset.

```
git clone https://github.com/katmh/mitier
cd mitier
npm install
npm run dev
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fkatmh%2Fmitier)

## Issues and Contributing

To report a bug or request a feature, making an issue is probably the way to go. Contributions  are welcome (feel free to make a pull request or open an issue to discuss) but I don't have any contributor guidelines yet.

Stylistic note: Some components are classes and others are functions. I prefer functional but the drag-and-drop library wasn't playing nice with them.

## Adapting this to other schools

### 1. Put dataset of classes in `data/courses.json`

The file contains a list of objects, whose keys are `id`, `number`, and `title`. `id` should be a unique string.

```
[
  {
    "id": "someUniqueId",
    "number": "ENG 100",
    "title": "100 Varieties of English"
  },
  {
    "id": "anotherUniqueClass",
    "number": "LSD 229",
    "title": "Light Saber Dueling"
  }
]
```

If you're wondering how to get this data for your school, it might be helpful to see the `/data` README, where I describe how I got the data for MIT.

### 2. Fork/clone this repo and customize `config.js`

Fork on GitHub or clone in your CLI with `git clone https://github.com/katmh/mitier`. In the file `config.js`, located in the root directory, you can customize the page heading, social sharing info, default classes, tier colors, and more.

### 3. Handle course color-coding

The original/MIT version uses colors from [Courseroad](https://courseroad.mit.edu/), a popular course planning website we have. One can find the department of a class by reading everything before the dot in a course number, e.g. `WGS.101`'s department is `WGS`, `16.06`'s department is `16`. In `data/colors.json`, departments are mapped to hex codes. They're then used in `components/Item.js`.

**If you want colors,** you can figure out how to extract the subject/department/whatever-determines-the-color from a course's ID/number and write code to do that in `components/Item.js`. Then modify `data/colors.json` to have the right department-to-color pairs.

**If you don't want colors** because there don't exist widely recognized color schemes or for any other reason: you can go to `components/Item.js`, delete the line setting a `subject` variable, and set `color` to some constant color. Then all class blocks will have the same color.

### 4. Deploy to Vercel

[Vercel](https://vercel.com/) is a platform that's really good for hosting websites built with Next.js, like this one.
