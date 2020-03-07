# Create Rails React App  [![Build Status](https://travis-ci.com/carlosarias1992/create-rails-react-app.svg?token=PXQSTSbcuzTt1ugrMp75&branch=master)](https://travis-ci.com/carlosarias1992/create-rails-react-app)

Create full-stack apps with no build configuration.

Create Rails React App works with docker.
If you don't have docker already, you should download it [here](https://www.docker.com/products/docker-desktop).
If something doesn’t work, please [file an issue](https://github.com/carlosarias1992/create-rails-react-app/issues/new).

## Quick Overview

```bash
npx create-rails-react-app -n my-app
cd my-app
make build && make start
```

If you've previously installed `create-rails-react-app` globally via `npm install -g create-rails-react-app`, we recommend you uninstall the package using `npm uninstall -g create-rails-react-app` to ensure that npx always uses the latest version.

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

## Get Started Immediately
You don’t need to install or configure tools like webpack or Babel.
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App
You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine (but it’s not required on the server). You can use [nvm](https://github.com/nvm-sh/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx
```bash
npx create-rails-react-app -n my-app
```
([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://github.com/carlosarias1992/create-rails-react-app/blob/master/instructions.md))

### npm
```bash
npm init rails-react-app -n my-app
```
`npm init <initializer>` is available in npm 6+

### Yarn
```bash
yarn create rails-react-app -n my-app
```
[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+

It will create a directory called `my-app` inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies.

No configuration, only the files you need to build your app.
Once the installation is done, you can open your project folder:

```bash
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `make build`
Builds the entire docker infrastructure needed to run your app.

You should only run this command once after creating your project or right after cleaning your containers.

### `make start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.

### `make test`
Runs the test framework.

[Read more about Rails testing.](https://guides.rubyonrails.org/testing.html)

[Read more about React testing.](https://create-react-app.dev/docs/running-tests/)

## Environment Variables

### `backend`

`create-rails-react-app` uses [Figaro](https://github.com/laserlemon/figaro) to manage environment variables in Rails. In `./backend/config/application.yml`, you can assign the variables you need in the environment you need them in *(eg. production/development/test)*.

Required environment variables:

* `DATABASE_PASSWORD` Defaults to `postgres`
* `REACT_URL` Defaults to `http://localhost:3000`

### `frontend`

All of your environment variables will need to be preceded with `REACT_APP_`. You will need to create an `.env` file in your project's `frontend` directory and assign the variables there. If you need to define variables depending on the environment you're in, you can simply append the environment name to the file name.
You can refer to `.env.development` in your project's frontend directory for an example of this. 

Required environment variables:

* `REACT_APP_API_URL` Defaults to `http://localhost:3001` 

### `.gitignore`

Remember to gitignore any environment variable files that hold sensitive information such as passwords or credentials of any kind.

## Philosophy
* **One Dependency**: There is only one build dependency. It uses webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

* **No Configuration Required**: You don't need to configure anything. A reasonably good configuration is handled for you so you can focus on writing code.

## What's included?

Your environment will have everything you need to build a modern full-stack Rails/React app:

* Ruby on Rails, PostgreSQL, and Rufo support for the backend.
* React, JSX, ES6, and TypeScript syntax support for the frontend.
* Language extras beyond ES6 like the object spread operator.
* Autoprefixed CSS, so you don’t need` -webkit-` or other prefixes.
* A fast interactive unit test runner with built-in support for coverage reporting.
* A live development server that warns about common mistakes.
* Hassle-free updates for the above tools with a single dependency.

## Popular Alternatives
Create Rails React App is a great fit for:

* **Learning React and Rails** in a comfortable and feature-rich development environment.
* **Starting new full-stack applications.**
* **Creating examples** with React and Rails for your libraries and components.

Here are a few common cases where you might want to try something else:

* If you want to **try React or Rails** without hundreds of transitive build tool dependencies, consider using an [online sandbox instead](https://codesandbox.io/s/new).

* If you need to publish a React component, nwb can also do this, as well as Neutrino's react-components preset.

* If you want to do **server rendering** with React and Node.js, check out [Next.js](https://github.com/zeit/next.js/) or [Razzle](https://github.com/jaredpalmer/razzle). 

* If your website is **mostly static** (for example, a portfolio or a blog), consider using [Gatsby](https://www.gatsbyjs.org/) instead. 

* Finally, if you need **more customization**, check out [Neutrino](https://neutrinojs.org/) and its [React preset](https://neutrinojs.org/packages/react/).

All of the above tools can work with little to no configuration.

## Credits
Documentation mostly resembles that of [`create-react-app`](https://github.com/facebook/create-react-app)

The combination, Rails + PostgreSQL + Docker Compose, is just a result I followed [Docker Compose's official instruction](https://docs.docker.com/compose/rails/).

Bootstrapped with [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript).

## License
Create Rails React App is open source software [licensed as MIT](https://github.com/carlosarias1992/create-rails-react-app/blob/master/LICENSE).
