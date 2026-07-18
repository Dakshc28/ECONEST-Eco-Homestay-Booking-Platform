# 🌿 EcoNest – Eco Homestay Booking Platform

EcoNest is a full-stack web application that connects travelers with eco-friendly homestays while promoting sustainable tourism and local community experiences. This project is being developed as part of an AI-Assisted Full Stack Web Development course.

---

# 📌 Week 5 Deliverables

In Week 5, the backend was upgraded from using in-memory data storage to a real cloud database using MongoDB Atlas.

## ✅ Features Completed

- Connected Express.js backend to MongoDB Atlas
- Designed and implemented Homestay database schema using Mongoose
- Migrated CRUD operations from in-memory storage to MongoDB
- Tested all REST API endpoints using Postman
- Implemented centralized error handling
- Successfully integrated cloud database with backend

---

# 🚀 Tech Stack

## Frontend
- Next.js
- React.js
- Tailwind CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose ODM

## API Testing
- Postman

## Version Control
- Git
- GitHub

---

# 📂 Project Structure

```
econest/
│
├── src/
│
├── components/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── public/
│
└── README.md
```

---

# 📦 Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Install Frontend Dependencies

```bash
npm install
```

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

# ⚙ Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

# ▶ Running the Application

## Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/homestays | Get all homestays |
| GET | /api/homestays/:id | Get homestay by ID |
| POST | /api/homestays | Create new homestay |
| PUT | /api/homestays/:id | Update homestay |
| DELETE | /api/homestays/:id | Delete homestay |

---

# 🗄 Database

MongoDB Atlas is used as the cloud database.

Current Collection:

```
homestays
```

Current Schema Fields:

- name
- location
- price
- ecoScore
- createdAt
- updatedAt

---

# ✅ Testing

All API endpoints were successfully tested using Postman.

Implemented Operations:

- Create Homestay
- Read All Homestays
- Read Homestay by ID
- Update Homestay
- Delete Homestay

---

# 📷 Week 5 Submission Includes

- MongoDB Atlas Integration
- Mongoose Schema
- CRUD API
- Postman Collection
- ER Diagram
- GitHub Repository
- Project Documentation

+----------------------------------+
|            Homestay              |
+----------------------------------+
| _id                              |
| name                             |
| location                         |
| price                            |
| ecoScore                         |
| createdAt                        |
| updatedAt                        |
+----------------------------------+

---

# 👨‍💻 Developed By

Daksh choudhary

B.Tech Computer Science Engineering

Graphic Era University

---

# 📄 License

This project is developed for educational purposes.
## Authentication

EcoNest provides two authentication methods:

### JWT Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Generation
- Protected API Routes
- Logout functionality

### Google OAuth Authentication
- Google Sign-In using Auth.js
- Secure OAuth 2.0 authentication
- Automatic session management
- Redirect to dashboard after successful login
## AI Trip Planner

Features:

- Personalized eco-friendly travel plans
- Powered by Google Gemini
- Backend Express API
- Secure API key using .env
- Loading and error handling