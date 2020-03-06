# Create Rails React App

Create full-stack apps with no build configuration.

Create Rails React App works with docker.
If you don't have docker already, you should download it [here](https://www.docker.com/products/docker-desktop).
If something doesn’t work, please [file an issue](https://github.com/carlosarias1992/create-rails-react-app/issues/new).

## Get Started Immediately
Inside your newly created project, you can run some built-in commands:

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

## License
Create Rails React App is open source software [licensed as MIT](https://github.com/carlosarias1992/create-rails-react-app/blob/master/LICENSE).
