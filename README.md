# Fridgy

### Description

This is a fridge organiser web app to help you keep track of what is in your fridge.

At the moment, it is a list of items in your fridge, displaying their names, quantities, and sorted by expiration date.

I have a lot of ideas for this project, but for now I am focusing on the iOS version.

### Future Features

- Selecting several items will allow a google search for recipes with those items to be made
  - This was one of the key ideas behind this - to be able to get recipes for things in your fridge that are about to expire
- Colour coding for items about to expire
- Tag items that are in the freezer and colour code them too
  - Separate the list into 3-4 lists of fridge, freezer, pantry, maybe condiments
- The quantity feature is not particularly useful, since it requires micromanagement and I imagine most people would set this to 1 for convenience.
  - Instead, quantity will be replaced by a counter with 3 states - in the fridge, running low, and run out.
  - The only times that the user would update is if they are running low or have run out.
  - This will lead to better effectiveness of shopping lists (see below)
- The option to 'permanently' add to the fridge for items that you will always have in your fridge
  - If you run out of one of these, they will be remembered by the app
  - Potentially available in a drop down when you enter the items name
- A shopping list can be generated to include all of the items you have marked as running low on, as well as any of the items you have marked as permanently in your fridge
- Barcode scanning support will make entering items into your list much easier



Created using create-react-app with the MERN stack and bootstrap
