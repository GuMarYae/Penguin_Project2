# Project 2
#### By Tony Daniels

## Project Summary

Im building a wishlist app  using mongo, express, node and liquid. The app is to bring the user excitement with the things that they come up with but to store it in their pockets and use the app whenever they forget whats on their wishlist. 


## Models

The Model will cosist of a schema that will have 3 properties
- a name property 
- a number property  
- a Boolean property 

## Route Table

List your routes in a table

| url                  | method  | action                                 |
|----------------------|---------|----------------------------------------|
| /wishlists           | get     | get all wishlists items (index)        | index
| /wishlists/:id       | get     | get a particular wishlists item (show) | show
| /wishlists/:id/new   | get     | make a new item                        | new
| /wishlists/          | post    | post the new item                      | create                           
| /wishlists/:id/edit  | get     | edit any item on the list              | edit
| /wishlists/:id/      | put     | update the edited item from the list   | update
| /wishlists/:id       | delete  | delete any item                        | delete
## User Stories
User should be able to put down what they want on this app so that they don’t have to worry about forgetting after. If they have the item, they can either delete the item or react to a "check" that they have it.
## Challenges

- detail roadblocks and anything you did to overcome whether you did or didn't

## List of Technologies
- node.js
- HTML
- CSS
- LIQUID
- EXPRESS
- mongo
- morgan
