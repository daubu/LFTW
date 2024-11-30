
# Base foundation 6 project for Gopublic

## Prerequisites
To use this template, your computer needs:

* NodeJS
* Bower

## Installation

* Run "npm install" to install the node_modules folder
* Run "bower install" to install the bower_components folder

## Changes

* Run "gulp" to compile the css and js once. 
* Run "gulp watch" to watch for changes in the css and the js. 
* Run "gulp server" to watch for changes in the css and the js and start the browser-sync for developing. 

## File structure

* Place the view-index.html file in the root folder.
* Place all the other views in the root folder, in the following format: "view-xxx.html"
* If you have changes to your own javascript code, do this in base/js/misc/own.js

## Other helpful tips

* Avoid using colors in the .scss files, rather use variables in _variables.scss.
* Avoid variable color names like $yellow or $green, rather use names like $normal, $action or something like $action-light. 
* Avoid adding classes to headers, like <h1 class="testclass">...</h1>, same for h2, h3.. etc. Always target headers by using ".main_page h1 {}" for example.
* bower_components folder will be installed on the live location, so you can link to files in this folder.
* node_modules folder will NOT be installed on the live locatoin, so don't link to files in this folder, this is purely for the development stage. 

