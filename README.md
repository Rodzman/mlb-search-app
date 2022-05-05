# MLB Search App

*This project was designed as a test to allow users to search for products and services in the Mercado Libre platform.
It's still a PoC and has no pretensions to be official.*

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Index
- [Stack](#stack)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Contact](#contact)
## Stack

### NextJS
NextJS was chosen due to the project focus and strategy. NextJS is a SSR JavaScript framework that already has a solid structure allowing minimal configuration. Also, it is SEO friendly which was one of the initial requirements.
### Node.js
This project was developed using [NodeJS LTS/Gallium](https://nodejs.org/download/release/latest-gallium/).

We recommend using [NVM](https://github.com/nvm-sh/nvm). Nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

### TypeScript
It also was used [TypeScript](https://www.typescriptlang.org/docs/) due to it's several proven advantages over vanilla JavaScript when typing and developing allowing to minimize the possibilties of bugs.

### Sass
[Sass](https://sass-lang.com/documentation) is a powerful and stable stylesheet language that is compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more while keeping all of it very organized.

To make it even more organized it was used the CSS Modules strategy where all class names are scoped locally by default.
## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running.

## Testing
This project has two libs for testing. [RTL - React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Cypress](https://docs.cypress.io/). While they have similar principles - to test the user experience while using the app - and we could have used only one of them, we chose to focus on each type of tests showcasing diffent ways of doing it.

RTL is implemented with [Jest](https://jestjs.io/pt-BR/docs/getting-started) testing framework and was used mainly on the component level and its iterations. 

Cypress, in the other hand, is more focused on the integration tests. It runs a complete user path example but with still only one scenario described.

To run the tests there are two main commands:

```bash
# For jest/RTL

npm test
#or
npm run test
```

```bash
# For Cypress

npm run e2e
# or
npm run e2e:headless
```

## Commits
This project has a git commit hook testing validation. It uses [Husky](https://typicode.github.io/husky/#/) to run a test command before commiting the code. It tries to assure even more code security and less bugs. It's configured and runs automatically at every commit.

## Contact
For any information regarding this app and it's contents please refer to [Rodrigo Souza](https://github.com/Rodzman) at designrsp@gmail.com .
