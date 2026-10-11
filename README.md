# Paradise Nursery Shopping Application

## About the Project
Paradise Nursery is a React-based online houseplant shopping application. It allows users to explore houseplants, add plants to their shopping cart, manage quantities, and view the total price.

## Features
- Home page with a navigation bar.
- About Us page describing Paradise Nursery.
- 18 houseplants organized into 3 categories.
- Plant names, images, prices, and descriptions.
- Add to Cart buttons that become disabled after adding a plant.
- Dynamic cart item count in the navigation bar.
- Increase or decrease plant quantities.
- Remove plants from the cart.
- Automatic calculation of item totals and the grand total.
- Checkout button with a Coming Soon message.
- Continue Shopping link.
- Redux Toolkit for cart state management.
- Responsive layout for different screen sizes.

## Technologies Used
- React
- Vite
- JavaScript
- Redux Toolkit
- React Redux
- React Router
- Lucide React
- CSS

## Installation and Setup

1. Clone this repository.
2. Open the project folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

## Project Structure

```text
paradise-nursery/
├── public/
├── src/
│   ├── AboutUs.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── CartItem.jsx
│   ├── CartSlice.jsx
│   ├── ProductList.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Future Improvements
- Add a real checkout and payment system.
- Store cart items between browser sessions.
- Add plant search and filtering.
- Connect to a product database.

## Author
Paradise Nursery Shopping Application — React Project