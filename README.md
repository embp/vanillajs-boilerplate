# vanillajs-boilerplate

A boilerplate for your vanillajs applications

## How do you use it

1. Download the boilerplate
1. Run `npm install`
1. To develop locally run `npm run dev`
1. To build your project for a production site, run `npm run build`
1. The end

## How does this boilerplate help you?

This boilerplate comes with webpack pre-configured to do the following:

-   Run a local dev server
-   Build a production bundle for deploying an optimized build to a live server
-   Copies your images to the dev and production bundle
-   Copies your favicon files and site.webmanifest to the bundle
-   Allows you to use modern Javascript and transpiles to es5 using Babel

In addition to what webpack can do for you, I also included:

-   The [Tachyons](https://tachyons.io/) minimalist css library
-   [Axios](https://github.com/axios/axios) for making API requests
-   Includes an example setup for loading images in html and css
-   [Prettier](https://prettier.io/) to keep your code formatted. Also added a minimal `.prettierrc` file to configure the formatter

## Why did you build this?

I wanted to build a landing page, so I first bought a landing page pack for React. I couldn't beleive how complex and heavy it was just for a single page landing page. I was a little frustrated, so I just built my own landing page with the most basic tools I could (plain Javascript, css, and Tachyons).

After I built my landing page I cleand up my setup a bit and created this boilerplate for future projects. I wanted to share it with other devs that wanted something simple.

## What does this boilerplate not do for you?

This library is for small simple sites. It uses only one webpack config. On more complex sites you may need two.

SASS is not supported out of the box. The idea was to use vanilla js and also just plain css.

## How do I update the favicon setup to add my own icon?

The easiest thing you can do is go to a site like [favicon.io](https://favicon.io/), drag a large image you want to use as an icon, and download the generated assets. Then just drag them into your `src` file and replace all the files. That's all you need to do.
