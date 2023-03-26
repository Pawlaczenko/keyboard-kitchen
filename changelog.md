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