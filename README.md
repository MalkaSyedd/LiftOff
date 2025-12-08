# LiftOff — Flight Booking Web Application

LiftOff is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) flight booking simulation application that allows users to search, book, and manage flights with a modern and responsive user interface. The platform includes user accounts, airline seller accounts, reward points, secure bookings, and an admin dashboard for system management.

---

## Features

### User Experience
- Secure user registration and login
- Search for flights
- Filter by date, location, price, and more
- Book flights for individuals or groups
- Simulated saved card and fast checkout system
- View booking history and reward point balance

### Seller Experience
- Airline sellers can register
- Admin approval required before they can offer flights
- Manage and publish flight options

### Admin Tools
- Full management of users, sellers, flights, and bookings
- Full access to system analytics
- Approve or reject seller activation requests

---

## Tech Stack

| Category | Technology |
|---------|------------|
| Frontend | React.js, React Router, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Authentication | JSON Web Tokens (JWT) |
| Styling | Custom CSS |

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/MalkaSyedd/LiftOff.git
cd LiftOff
```

## Install server dependencies

- Open a new terminal and then split terminal
- In the First Terminal do

```bash
cd server
npm install
node server.js
```

You should expect:
- Backend server starts successfully
- Logs like:
  - Server running on port 9000
  - Connected to MongoDB
- Keep this terminal open

## Install client dependencies

- In the second Terminal do

```bash
cd frontend
npm install
npm start
```

You should expect:
- Browser opens automatically
- App running at: http://localhost:3000
- LiftOff user interface will appear and reload with any code changes

---

Both backend and frontend must run at the same time for the app to work correctly.


