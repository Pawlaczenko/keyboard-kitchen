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

### 0.2.2 (26.03.2023)
### Creating Dishes
* Developed a Dish component that includes draggable behavior and dynamic rendering of specific dish types.
* Implemented absolute positioning to support stacking of dishes and panels.
* Added SVG files of dishes as background images.
* Implemented onDrag animation for both panels and dishes.

### 0.2.3 (27.03.2023)
### UI Improvements
* Updated font to Roboto
* Created ContainerContext to handle constraints and z-index
* Introduced useContainer hook to manage constraints logic and z-index
* Moved dragging and positioning logic to a separate component called DraggableEntity
* Updated dishes' graphics to be more symmetrical and visually appealing
* Added Dish themes with background images and text colors
* Moved panel themes to panels.tsx file.

### 0.3.0 (27.03.2023)
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