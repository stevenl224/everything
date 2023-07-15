# Everything

This is the C4C monorepo containing all of our active projects.

Deployable units exist in `/apps`, inside each folder there is a README explaining how that unit is tested and deployed.

Business logic and supporting library for those deployable units exist in `/libs`. These are composable units of software that are not coupled to a specific deployment framework or strategy, and are meant to be easily reused in future projects.

The purpose of `README.md`s in this repository are to explain the usage of the application. The bare minimum you need to get it running. More detailed developer and public documentation exists on the wiki. `README.md`s will often link to relevant wiki pages.


Links to Project `README.md`

- [Monarch](./apps/monarch/README.md)
- [c4cneu.com](./apps/dotcom/README.md)

## Description

This project is a URL shortener, similar to bit.ly, that allows users to input any URL and receive a shortened version that redirects to the original URL.

## How it Works
1. The user will input the list of URLs they'd like to shorten.
2. A shortened hyperlink will be generated and displayed next to the original URL.
3. Clicking on the URL will redirect the user to the original URL.

## Things I'd do to Improve the Codebase

1. Document changes with comments describing what was changed to improve readability and maintability for potential future changes.
2. Use GitHub or some other version control to track specific changes overtime and make it easier for collaboration. It'll also allow for addressing bugs and cactching them early on.
3. Adding a linter to check the code for syntax and stylistic errors and bugs. This will help reduce the risk of bugs.


## 🔨 Development
1. Install Node v16.x
2. Clone this repo
3. `yarn install`

When adding new dependencies, use `yarn add` or its dev dependency equivalent. Thanks to Nx, each package will only be installed once, and each app knows how to bundle itself correctly based on its dependencies.
