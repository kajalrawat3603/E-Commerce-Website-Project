# E-Commerce Website Project

This is a full-stack e-commerce web application built with **React** and **Node.js**. The application allows users to browse products, add them to a cart, and manage their orders. The project includes user authentication, product management, cart functionality, and blog submission features.

## Live Demo

Access the application [here](https://kr-e-commerce.vercel.app).

## Table of Contents

- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Features

- **User Authentication:** Secure login and registration with password hashing and JWT-based authentication.
- **Product Management:** Display products fetched from a database, with functionality to add products to the cart.
- **Cart Management:** Users can add, update, or remove items from their cart, with quantities managed dynamically.
- **Blog Section:** Users can submit blogs, view existing blogs, and read more about each product.
- **Responsive Design:**  Ensuring a smooth and consistent experience across all device types.

### API Endpoints

#### User Authentication
- **POST /login:** Authenticate a user and return a JWT.
- **POST /register:** Register a new user.

#### Product Management
- **GET /products:** Fetch all products.
- **GET /products/:id:** Fetch product details by ID.
  
#### Cart Management
- **POST /cart/add:** Add a product to the cart.
- **POST /cart/remove:** Remove a product from the cart.
- **POST /cart/update:** Update product quantity in the cart.
  
#### Blog Section
- **POST /new-blog:** Submit a new blog.
- **GET /blog:** Fetch all blogs.
- **GET /blog-image/:id:** Fetch a blog image by ID.
  
#### Technologies Used
- **Frontend:** React, React Router, CSS
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT, bcryptjs
- **File Uploads:** Multer
- **Email Service:** Nodemailer
