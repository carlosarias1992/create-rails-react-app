#!/usr/bin/env node

const chalk = require("chalk");
const shell = require("shelljs");
const yargs = require("yargs");
const fs = require('fs');

// CLI setup

const help = `Please specify the project name:
  ${chalk.cyan("create-rails-react-app -n")} ${chalk.green("<project-name>")}
  
For example:
  ${chalk.cyan("create-rails-react-app -n")} ${chalk.green("my-rails-react-app")}
 
Run create-rails-react-app --help to see all options.`;

const footer = `Only <project-name> is required.

If you have any problems, do not hesitate to file an issue:
https://github.com/carlosarias1992/create-rails-react-app/issues/new`;

const options = yargs
    .usage("Usage: create-rails-react-app -n <project-name> [options]")
    .option("n", { alias: "name", describe: "Project name", type: "string", demandOption: true })
    .option("auth", { describe: "Create app with user authentication", type: "boolean" })
    .alias('v', 'version')
    .alias('h', 'help')
    .showHelpOnFail(false, help)
    .help('help', footer)
    .argv;

if (!options.name) {
    console.log(help);
    return;
}

if (fs.existsSync(`./${options.name}`)) {
    console.log(chalk.red.bold("Error: "), `project ${options.name} already exists`);
    return;
}

// Clone the repo

shell.exec("git clone https://github.com/carlosarias1992/create-rails-react-app.git");
shell.cd("./create-rails-react-app");

if (options.auth) {
    shell.exec("git checkout d45d954d2a0da5861c29fd7f184e6f9fedd67295");
} else {
    shell.exec("git checkout 5166adeaf05c810cd535dc7d6c8267b76c584edb");
}

shell.exec("rm -r .git");
shell.cd("..");
shell.exec(`mv ./create-rails-react-app ./${options.name}`);

// Figaro

const figaro=`# Add configuration values here, as shown below.
#
# pusher_app_id: "2954"
# pusher_key: 7381a978f7dd7f9a1117
# pusher_secret: abdc3b896a0ffb85d373
# stripe_api_key: sk_test_2J0l093xOyW72XUYJHE4Dv2r
# stripe_publishable_key: pk_test_ro9jV5SNwGb1yYlQfzG17LHK
#
# production:
#   stripe_api_key: sk_live_EeHnL644i6zo4Iyq4v1KdV9H
#   stripe_publishable_key: pk_live_9lcthxpSIHbGwmdO941O1XVU
`;

shell.ShellString(`${figaro}`).to(`./${options.name}/backend/config/application.yml`);

// Replace `PROJECT_NAME_RAILS_REACT_APP` with project name provided by user

const PROJECT_NAME_RAILS_REACT_APP = 'PROJECT_NAME_RAILS_REACT_APP';

shell.cd(`./${options.name}`);
shell.exec(`find . -type f -name "*.yml" -exec sed -i'' '' 's/${PROJECT_NAME_RAILS_REACT_APP}/${options.name}/g' {} +`);
shell.exec(`find . -type f -name "*.rb" -exec sed -i'' '' 's/${PROJECT_NAME_RAILS_REACT_APP}/${options.name}/g' {} +`);
shell.exec(`find . -type f -name "Dockerfile" -exec sed -i'' '' 's/${PROJECT_NAME_RAILS_REACT_APP}/${options.name}/g' {} +`);
shell.exec(`find . -type f -name "*.html.erb" -exec sed -i'' '' 's/${PROJECT_NAME_RAILS_REACT_APP}/${options.name}/g' {} +`);
shell.exec(`find . -type f -name "Makefile" -exec sed -i'' '' 's/${PROJECT_NAME_RAILS_REACT_APP}/${options.name}/g' {} +`);
shell.exec(`find . -type f -name "*.json" -exec sed -i'' '' 's/${PROJECT_NAME_RAILS_REACT_APP}/${options.name}/g' {} +`);
shell.cd("..");

// Success!

const success = `
${chalk.green.bold("Success!")} Created ${options.name}
If you don't already have docker, you should install it now:
  https://www.docker.com/products/docker-desktop

  ${chalk.cyan("make build")}
    Builds all containers and initializes the database.
  
  ${chalk.cyan("make up")}
    Starts the development server.
  
  ${chalk.cyan("make test")}
    Starts the test runner.
  
We suggest that you begin by typing:
  ${chalk.cyan("cd")} ${options.name}
  ${chalk.cyan("make build && make up")}

Happy hacking!`;

console.log(success);
