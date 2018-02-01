# LEMP
_Docker Compose on LEMP_

This branch includes bootstrap framework.

## Prerequisite
- [Node.js and npm](https://nodejs.org/en/) installed.
- BrowserSync, Gulp, Gulp-Sass installed.
```sh
$ npm install browser-sync gulp gulp-sass -g  
```


## Usage
Clone this repository to your new project directory, e.g.,
```sh
$ git clone https://github.com/epsilonxe/lemp your-new-project
```
Browse to the new created directory
```sh
cd your-new-project
```
Initialize the project directory for node modules
```sh
your-new-project$ npm init
```
and fill the project information on the appearing fields.

Next, install Bootstrap and its dependencies
```sh
your-new-project$ npm install jquery popper.js bootstrap
```
This will install the above node modules at ```your-new-project/node_modules```.

In the following step, we have to link BrowserSync, Gulp and Gulp-Sass to node modules
```sh
your-new-project$ npm link browser-sync gulp gulp-sass
```

Now we can run docker compose by executing the following command
```sh
your-new-project$ docker-compose up -d
```
Although the new project can be surfed by either ```localhost``` or ```127.0.0.1```, we recommend to run BrowserSync via our gulp tasks by easily running the following command at the project directory
```sh
your-new-project$ gulp
```


To stop and remove the containers, just simply use the command
```sh
your-new-project$ docker-compose down
```
