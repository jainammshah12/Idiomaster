# Idiomaster

This is the backend for Idiomaster. It allows teachers to create courses and students to enroll, purchase, and track achievements. The backend is built using **Node.js** with **MongoDB Atlas** as the database.

## Features
- User Registration (Students & Teachers)
- User Login (One-time login/logout system)
- Course Creation (By Teachers)
- Course Enrollment (By Students)
- Data Storage using MongoDB Atlas

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (Cloud-Based)
- **Dependencies:**
  - `express`
  - `mongoose`
  - `dotenv`
  - `cors`
  - `nodemon` (for development)

---

## 📌 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/learning-platform-backend.git
cd learning-platform-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up MongoDB Atlas
1. copy and paste the .env file in the backend folder.

### 4️⃣ Run the Server
For development:
```sh
npm run dev
```
For production:
```sh
npm start
```

---

## 📌 API Routes

### User Routes (`/api/users`)

#### 📝 Register a User
**POST** `/api/users/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```
Response:
```json
{
  "message": "User registered"
}
```

#### 🔑 Login a User
**POST** `/api/users/login`
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
Response:
```json
{
  "message": "Login successful",
  "user": {
    "_id": "67f04a97cc4ad8b8c0cac97f",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

For any issues, open a GitHub issue or contact the developer! 🎉

