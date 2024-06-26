# React Item information App

This is a simple React application for managing a list of items. The app allows you to view, edit, and delete items, as well as view details for each item. The app uses JSONPlaceholder online REST API.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [API](#api)
- [Components](#components)
- [Output](#Output)


## Demo

You can view a live demo of the application [here](#https://item-info-elysiums-projects-fcd33f12.vercel.app/).
- link: https://item-info-elysiums-projects-fcd33f12.vercel.app/

## Features

- View a list of items
- View details for a specific item
- Edit an item
- Delete an item
- Pagination for the item list

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development
- **React Router**: Declarative routing for React
- **SweetAlert2**: A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes
- **JSONPlaceholder API**: A free fake online REST API for testing and prototyping

## Setup

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation 
- **follow instructure in the link below**
- https://vitejs.dev/guide/

## API
- This application uses the JSONPlaceholder API, which is a free fake online REST API for testing and prototyping.

**Endpoints Used**
- GET /posts: Fetch a list of items
- GET /posts/:id: Fetch a single item by ID
- PUT /posts/:id: Update an item by ID
- DELETE /posts/:id: Delete an item by ID

## Components
- **App.tsx**
- The root component that sets up the routes for the application.

- **ItemList.tsx**
- Displays a paginated list of items with options to view, edit, or delete each item.

- **ItemDetails.tsx**
- Displays details for a specific item, with options to edit or delete the item.

**ItemEdit.tsx**
- Allows editing of a specific item.

## Output 


![list item](https://github.com/Elyzsium/item-info/assets/40998323/7012f09b-d304-41bd-b9c3-83b5594f3c37)

- **List Item**

![Screenshot 2024-06-14 at 16 15 11](https://github.com/Elyzsium/item-info/assets/40998323/b68982ec-d0ae-454e-869d-b7bcb3bc154c)

- **Edit Item**

![Screenshot 2024-06-14 at 16 15 23](https://github.com/Elyzsium/item-info/assets/40998323/957549c6-4580-4937-b35a-f0f1b7e0f270)

- **View Item**

![Screenshot 2024-06-14 at 16 15 39](https://github.com/Elyzsium/item-info/assets/40998323/b0c5b61b-04e1-4d51-b95b-03f852c02d80)



