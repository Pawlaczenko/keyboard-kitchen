## 0.1.0 (24.03.2023)

### Initial commit
* Established the file structure of the application
* Added assets required for the game
* Developed globalStyles, css variables, and reset.css to maintain consistency
* Incorporated background gradient and image to the body
* Added Logo to App component
* Created README and CHANGELOG to document progress

## 0.2.0 (24.03.2023)

### Panel Component and Styling
* Developed a Panel component
* Added draggable and resizable functionality to the Panel component
* Replaced Logo with a more efficient background image
* Implemented additional style variables
* Installed ReactIcons

## 0.2.1 (24.03.2023)

### Constraints and Theming
* Created ConstraintsContext to maintain App's reference
* Added drag constraints to Panel component using App's reference
* Replaced placeholder values in Panel component with customizable props
* Established an enum containing possible Panels
* Created a Map to hold Panel Themes
* Added PanelTheme for recipe Panel

## 0.2.2 (26.03.2023)
### Creating Dishes
* Developed a Dish component that includes draggable behavior and dynamic rendering of specific dish types.
* Implemented absolute positioning to support stacking of dishes and panels.
* Added SVG files of dishes as background images.
* Implemented onDrag animation for both panels and dishes.

## 0.2.3 (27.03.2023)
### UI Improvements
* Updated font to Roboto
* Created ContainerContext to handle constraints and z-index
* Introduced useContainer hook to manage constraints logic and z-index
* Moved dragging and positioning logic to a separate component called DraggableEntity
* Updated dishes' graphics to be more symmetrical and visually appealing
* Added Dish themes with background images and text colors
* Moved panel themes to panels.tsx file.

## 0.3.0 (27.03.2023)
### Ingredients
* Create basic Ingredients system.
* Added an interface IIngredient that describes the properties of an ingredient.
* Added an enum UNIT that lists different units of measurement an ingredient can have.
* Added an enum PORTIONING that lists different ways an ingredient can be portioned.
* Added a type ingredientKey that lists the names of different ingredients.
* Populated the INGREDIENTS map with 9 different ingredients with their respective properties such as tags, unit of measurement, portioning options (if any), and price. The ingredients are salt, pepper, egg, sugar, flour, water, apple, milk, and pasta.
* Assigned values to each property of the ingredients added to the INGREDIENTS map.
* Tags added to the ingredients include INGREDIENTS_TAG.SPICE, INGREDIENTS_TAG.DIARY, INGREDIENTS_TAG.GRAINS, INGREDIENTS_TAG.FLUID, and INGREDIENTS_TAG.FRUIT.
* Defined different unit of measurements for each ingredient such as countable, gram, liter, and teaspoon.

## 0.3.1 (28.03.2023)
### FRIDGE
* Developed a new Fridge Component that displays the list of available ingredients.
* Introduced an IStoredIngredient interface to ensure consistency in the data format used throughout the application.
* Implemented a Fridge Slice to manage the state of the Fridge Component and added the Fridge reducer to the global store.
* Updated the typography of the application by using the Kanif font.
* Modified the IIngredient interface to include a name property, which provides additional information about the ingredient.
* Added a ratio property to the IPanelTheme interface, which enables dynamic adjustment of the width/height ratio of a panel.
* Enabled the scrolling functionality of the Panel Component, when the content overflows on the y-axis.
* Developed a custom typography helper function that adds plural suffixes to words, improving the readability of the application.
* Introduced font-weight CSS variables (400, 700)

## 0.3.2 (28.03.2023)
### WORKTOP
* Developed a new Worktop Component that displays the ingredients.
* Implemented a Worktop Slice to manage the state of the Worktop Component and added the Worktop reduver to the global store.
* Introduced a StoredIngredient Component that creates a reusable label for the stored ingredient.
* Made StoredIngredients more readable by adjusting the word-spacing and letter-spacing.

## 0.3.3 (30.03.2023)
### RECIPES
* Developed a new RecipeBookPanel Component that displays the recipes in alphabetical order.
* Created a customizable List Component that displays list items in either an ordered or unordered fashion.
* Replaced all lists within the app with the new List component.
* Passed the PanelTheme to the PanelWrapper styled component, allowing for the distribution of values to CSS variables for deep PanelTheme access.
* Populated the RecipePanel component with content, featuring the display of both ingredients and steps of a recipe.
* Adjusted the styling of the StoredIngredient component to improve readability and fixed the pluralize function to apply to fractions.
* Added several new ingredients.
* Developed a way to store a recipe within the application, and added two new recipes for testing purposes.
* Changed panel themes for most panels within the application, creating a more aesthetically pleasing and legible experience.

## 0.4.0 (31.03.2023)
### CONSOLE
* Changed the font to rainyhearts
* Added a Console Panel with typing feature.
* Created a Desktop context to hold information about displayed panels/dishes.
* Every Panel now takes a panelType property. ClosePanel function and theme are taken from the Panel component.
* Removed MinimizeWindow Button - indefinitely

## 0.4.1 (03.04.2023)
### THEY'RE MULTIPLYING
* Added functionality to display all dishes and recipes in state
* Implemented an ID parameter in the dish component
* Fixed a bug that caused draggableEntity to change constraints momentarily
* Separated drag constraints and z-index handling into distinct contexts
* Improved the rerendering of DraggableEntity
* Moved handlePanelClose function to separate panels and passed it as a parameter to the Panel component

## 0.4.2 (03.04.2023)
### INTERPRETING COMMANDS
* The console component has been updated to a fixed element on the side of the application.
* The app has undergone significant visual changes due to the console update.
* A basic command interpreter has been implemented, with plans for future refactoring.
* The following commands have been added: OPEN, CLOSE, GET, STASH, and CLEAR.
* A new commandResponse type has been introduced to provide response information, including code and message, when interpreting a command.

## 0.4.3 (12.04.2023)
### Fixing and improving Console - Part I
* Extracted PanelsWrapper to seperate component.
* Extracted commandInterpreter function to seperate file.
* Fixed the issue with useSelector value in Console component not updating.
* Set capacity of commands visible in Console to 70
* Set capacity of commands accessible in commandHistory in Console to 50
* Added handling for additional errors in commandInterpreter

## 0.4.4 (14.04.2023)
### Fixing and improving Console - Part II
* Changed font to Minecraft font (last time).
* Rewritten commandInterpreter as a Class. Refactored error handling to be more responsive for future commands.
* Added the ability to pass ReactNode element as the command info.
* Added Welcome Message.
* Renamed Recipe Book Panel to Cookbook Panel
* Added Read command that displays a single recipe.