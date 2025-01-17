# Product Search Application

This is a simple React application for displaying, searching, filtering, and managing a list of products with the ability to add them to favorites. The application is built using React, TypeScript, and Bootstrap.

## Features

- **Display Products**: View a list of products with their details including name, image, category, and price.
- **Search**: Search for products by name.
- **Filter by Category**: Filter products based on selected categories.
- **Add to Favorites**: Mark products as favorites, which are then saved in localStorage to persist even after a page reload.
- **Responsive Design**: The application is responsive and works well on mobile devices.

## Technologies Used

- React
- TypeScript
- Bootstrap
- localStorage

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

- Node.js (https://nodejs.org/)
- npm (Node Package Manager)

### Project structures 

- src/components: Contains the React components used in the application.

- src/types: TypeScript type definitions.

- src/App.tsx: Main application component.

- src/index.tsx: Entry point for the React application.

- public/grocery.json: Static JSON file containing the list of products.

  ### Components
- ProductList: Displays the list of products with search and filter functionalities.

- ProductItem: Displays the details of a single product and allows users to add/remove it from favorites.

- CustomNavbar: The navigation bar component with search and category filter inputs.

### Usage
- Search: Type in the search bar to filter products by name.

- Category Filter: Use the dropdown menu to filter products by category.

- Add to Favorites: Click the "Add to Favorites" button to add a product to the favorites list. Click again to remove it from the favorites list.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
