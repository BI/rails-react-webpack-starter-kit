rails-react-webpack-starter-kit
====================

This is a starter kit for using Webpack & React from within the Rails Asset Pipeline.

Why? Because having to wrap every NPM module you find in a Ruby Gem is a waste of time. Also better scoping of your JS dependencies!

What do do with this thing? Fork it, copy it, whatever. It's just here to get you started faster.

## Development Workstation Installation

This doc assumes you are on a UNIX like environment (Mac, Linux, BSD) - though you may do alright in Windows as well.


### Dependencies

First install the following dependencies if not already installed

1. Ruby 
2. Bundler
3. Node
4. Foreman (https://github.com/ddollar/foreman)

### Application Setup

After git cloning the repository, cd in to the root of the application directory.

Run the following command to install ruby gem dependencies:

```
$ bundle install
```

Enter admin password when prompted.

Install the front end dependencies:

```
$ npm install --global webpack 
$ npm install
$ webpack
``` 

### Run The Server

Use foreman to start the webpack development server along with the rails server.

```
$ foreman start
```

The app will run on http://localhost:3000

## TODO:

1. Improve console output for Foreman (Rails process output is currently obscured)
2. Upgrade to Rails 4.2

