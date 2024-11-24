# 💬 Chat App

A sleek and modern real-time chat application for seamless communication. Built with **Next.js** for the frontend and **Node.js** for the backend, this app offers real-time messaging, responsive design, and secure authentication.

---

## ✨ Features

- **Real-time Messaging**: Smooth and fast communication.
- **Responsive Design**: Optimized for all devices.
- **Secure Backend**: JWT authentication and robust database integration.
- **MongoDB Integration**: Reliable and scalable data storage.

---

## 🚀 Installation Guide

Follow these steps to set up and run the project locally:

---

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or above)
- **npm** or **yarn**
- **MongoDB Atlas** (or local MongoDB instance)

---

### 🖥 Frontend Setup

1. Clone the repository:
   ```bash
   git clone "https://github.com/waisodum/chatliee.git"
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the environment variables:
   - Create a `.env.local` file in the `frontend` folder's root directory.
   - Add the following content:
     ```plaintext
     NEXT_PUBLIC_API=http://localhost:8000
     ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to:
   ```plaintext
   http://localhost:3000
   ```

---

### 🔧 Backend Setup

1. Clone the backend repository and navigate to the directory:
   ```bash
   git clone "https://github.com/waisodum/chatliee-backend.git"
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the `backend` folder's root directory.
   - Add the following content:
     ```plaintext
     Uri=mongodb://<db_username>:<db_password>@ac-bvyyg4v-shard-00-00.1ripenz.mongodb.net:27017,ac-bvyyg4v-shard-00-01.1ripenz.mongodb.net:27017,ac-bvyyg4v-shard-00-02.1ripenz.mongodb.net:27017/?ssl=true&replicaSet=atlas-12s8c1-shard-0&authSource=admin&retryWrites=true&w=majority
     Frontend=http://localhost:3000
     JWT_SECRET=randomstring
     ```

4. Start the backend server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. The backend server will be running at:
   ```plaintext
   http://localhost:8000
   ```

---

## 📂 Project Structure

```
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env.local
│   ├── package.json
│   └── ...
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── ...
```

---

## 🌐 Technologies Used

- **Frontend**: Next.js, Tailwind CSS,socketio
- **Backend**: Node.js, Express.js,socketio
- **Database**: MongoDB Atlas
- **Authentication**: JSON Web Token (JWT)

---

## ✉️ Contact

For questions or feedback, reach out at salman.iqureshi04@gmail.com.

---

Happy Coding! 🚀