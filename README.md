# Nodejs MongoDB Crud

A simple project to make crud operations using MongoDB and node.js

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.19.0

    $ npm --version
    8.19.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g



## Install

    $ git clone https://github.com/x-slasher/node-mongo-crud.git
    $ cd node-mongo-crud
    $ npm install

## Configure app

    $ cp .env.example .env

## Running the project

    $ npm run devgit push -u origin main

## Extra information 
Import the `node-mongo.postman_collection.json` file in your postman collection to use the api