# RefreshBoulder.org

1. [Basics](#basics)
2. [Setup](#setup)
3. [Compiling](#compiling)

<hr>

# Basics

This site uses Ruby and Node.js plugins to compile CSS.


# Setup

To set up all the asset compiling, locally the following tools are required:

    ruby 1.9.3
    node
    npm

It's easiest to manage your Ruby version and gemset with RVM.

    `rvm --create --rvmrc 1.9.3@refreshboulder`
    `cd .`

To set up Compass and Sass, run:

    `gem install bundler`
    `bundle install`

Then, to install the node tools:

    `npm install`


# Compiling

## In Development

`grunt` to start the watcher. When any Sass files in source is edited, grunt will compile and output them into compiled.
