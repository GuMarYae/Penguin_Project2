# Project 2

#### By Tony Daniels

## Project Summary

Im building a wishlist app using mongo, express, node and liquid. The app is to bring the user excitement with the things that they come up with but to store it in their pockets and use the app whenever they forget whats on their wishlist.

## Models

The Model will cosist of a schema that will have 3 properties

- name: String
- cost: Number
- Got it: Boolean

## Route Table

List your routes in a table

| url                 | method | action                                 |
|---------------------|--------|----------------------------------------|--------|
| /wishlists          | get    | get all wishlists items (index)        | index  |
| /wishlists/:id      | get    | get a particular wishlists item (show) | show   |
| /wishlists/:id/new  | get    | make a new item                        | new    |
| /wishlists/         | post   | post the new item                      | create |
| /wishlists/:id/edit | get    | edit any item on the list              | edit   |
| /wishlists/:id/     | put    | update the edited item from the list   | update |
| /wishlists/:id      | delete | delete any item                        | delete |

## User Stories

User should be able to put down what they want on this app so that they don’t have to worry about forgetting after. If they have the item, they can either delete the item or react to a "check" that they have it.

## Challenges

- putting const mongoose = require("./connection") inside of models/wishlists took me 3 hours to realize i needed to declare it at the top

- making the modal was super confusing. Had to make a separate js folder in public. Did about three attteps.

- wanted to keep the name and price entered in the edit window instead of retyping it

- didnt realize that const express = require("express") needed to be entered on different js files even if declared in on main js file.

## List of Technologies

- node.js
- HTML
- CSS
- LIQUID
- EXPRESS
- mongo
- morgan

##

- cite
  https://www.youtube.com/watch?v=MBaw_6cPmAw

  Build a Popup With JavaScript
