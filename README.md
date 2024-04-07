## MyShop

This is an E-Commerce Website Build with Next.js, Typescript & Tailwind.css

## Live App

View Deployed Version of the App at: Open [https://myshop-three-weld.vercel.app/](https://myshop-three-weld.vercel.app/) with your browser to see the result.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## More About App

The app does the following:

- Display List of Products

It renders list of products on the home page from this fake API [`https://api.escuelajs.co/api/v1/products`](https://api.escuelajs.co/api/v1/products)

Sample Response from the API
[
    {
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://i.imgur.com/QkIa5tT.jpeg"
    },
    "images": [
      "https://i.imgur.com/QkIa5tT.jpeg",
      "https://i.imgur.com/Qphac99.jpeg",
      "https://i.imgur.com/Qphac99.jpeg"
    ]
  },
  {

  }
]

- View Product Details

The App also allows users to view and read more about any product listed. Details of every single product is obtained from this fake API Route [`https://api.escuelajs.co/api/v1/products/${id}`](https://api.escuelajs.co/api/v1/products/1)

Sample Response from the API
{
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "<https://i.imgur.com/QkIa5tT.jpeg>"
    },
    "images": [
      "https://i.imgur.com/QkIa5tT.jpeg",
      "https://i.imgur.com/Qphac99.jpeg",
      "https://i.imgur.com/Qphac99.jpeg"
    ]
  }

- Create a New Product

A beautiful form is designed to allow any user to Add New Product. The form is submitted via POST request using axios to this fake API [`https://api.escuelajs.co/api/v1/products`](https://api.escuelajs.co/api/v1/products)

The add new product form inputs are validated using react-hook-form vaildation to ensure all required fields are entered before sending it to the backend. This prevent unneccessary request been sent to the backend API.This saves of time and cost.

If the Form is Successfully Submited. The user will be redirected to a page where the user can view more details about the product.

## Likely Improvements

The App is not completely functional. It's only meant for testing purposes.
Due to timing factor, these are likely improvement to be made to it.

- Product Image Carousel
  In the Product Details page, the product image section should have been a carousel which showcase various images of the product to a user.
  If improvement is to be done, that section should be worked out. As it's the norm of every standard e-commerce shop and also a good practice to convice customers to purchase a product.

- User Authentication
  Despite it been a test app. It's not a best practice to allow any user to add new product without any registration or signin.
    User Registration and Sign In feature would have been added.

- Buy Now or Add to Cart functionality

### Open Live Website

Check out the Live App at: [https://myshop-three-weld.vercel.app/](https://myshop-three-weld.vercel.app/) for more details.
