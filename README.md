# 🌿 EcoNest – Eco Homestay Booking Platform

## Overview

EcoNest is a full-stack web application that connects travelers with eco-friendly homestays. The platform promotes sustainable tourism by allowing users to browse environmentally friendly accommodations and explore unique travel experiences.

This project was developed using **Next.js** for the frontend and **Express.js** for the backend as part of the TBI-GEU Internship Program.

---

# Features

## Frontend

* Modern responsive user interface
* Dark / Light Mode
* Home Page
* Dashboard
* About Page
* Login Page
* Reusable UI Components
* Dynamic Homestay Cards
* Loader Component
* Toast Notifications

## Backend

* Express.js REST API
* CRUD Operations
* Search API
* Error Handling Middleware
* Environment Variable Support
* Modular Folder Structure

---

# Tech Stack

## Frontend

* Next.js
* React.js
* Tailwind CSS

## Backend

* Node.js
* Express.js
* CORS
* Dotenv

---

# Project Structure

```
ECONEST
│
├── backend
│   ├── controllers
│   ├── data
│   ├── middleware
│   ├── routes
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── public
│
├── src
│   ├── app
│   ├── components
│   └── styles
│
├── package.json
└── README.md
```

---

# API Endpoints

| Method | Endpoint                   | Description        |
| ------ | -------------------------- | ------------------ |
| GET    | `/api/homestays`           | Get all homestays  |
| GET    | `/api/homestays/:id`       | Get homestay by ID |
| GET    | `/api/homestays/search?q=` | Search homestays   |
| POST   | `/api/homestays`           | Create a homestay  |
| PUT    | `/api/homestays/:id`       | Update a homestay  |
| DELETE | `/api/homestays/:id`       | Delete a homestay  |

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Dakshc28/ECONEST-Eco-Homestay-Booking-Platform.git
```

```bash
cd ECONEST-Eco-Homestay-Booking-Platform
```

---

# Frontend Setup

Install dependencies

```bash
npm install
```

Run the frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:3000
```

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Run backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```
PORT=5000
```

---

# Current Features

* Responsive UI
* Dynamic Home Page
* Dashboard connected to Backend
* REST API
* Search Endpoint
* CRUD Operations
* Loading Spinner
* Toast Notifications
* Dark / Light Theme

---

# Future Improvements

* MongoDB Integration
* User Authentication
* Booking System
* Payment Gateway
* AI-Based Homestay Recommendations
* Review & Rating System
* Image Uploads
* Admin Dashboard

---

# Author

**Daksh Choudhary**

TBI-GEU Internship Project

EcoNest – Eco Homestay Booking Platform
