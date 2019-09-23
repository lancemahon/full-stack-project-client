#
I used HTML and CSS (with some SASS variables mixed in) to structure most of my page. There was some handlebars used to change the appearance of my page when switching from character selection to character naming, and then to the character list.
I used JavaScript for all my front-end event listening and handling. I made calls to a Rails Api that I built with Ruby, which is deployed via Heroku.

This page could be improved by adding functionality to support more in-depth character updates, by adding columns to the character table, as well as making join tables to connect charcters to things like spells, equipment, etc. The look also needs work, and some of the buttons look terrible.

Some user stories that helped guide this project:
As a user, I want to be able to sign up with new credentials and sign in/out normally
As a user, I want to be able to see character options and pick from a list
As a user, I want to be able to name my characters
As a user, I want to be able to see my charcters (and only mine)
As a user, I want to be able to update my characters name/class
As a user, I want to have fields disappear when they are not relevant/available
As a user, I want to to have forms clear on failed submissions

Here are some wireframe that I did NOT stick to, but they were a starting point for the page's layout: https://imgur.com/gallery/Ip0Lenk


Links to all:
backend - 
https://github.com/lancemahon/full-stack-rails-project
front end - 
https://github.com/lancemahon/full-stack-project-client
