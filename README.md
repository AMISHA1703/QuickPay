# 💼 QuickPay Web Application       
 ## 🚀 Live Demo  ( [Live](https://quick-pay-fjil.vercel.app/))

A full-stack digital wallet web application designed to emulate the core functionalities of real-world peer-to-peer payment systems. Users can register, log in, view balances, search for other users, and transfer funds — all through an intuitive and responsive interface.

---

## 📌 Description

This application simulates a basic digital wallet with user-to-user money transfer functionality. It provides a real-world-like flow including user signup/login, balance management, user discovery, and secure transaction handling.

---

## ✨ Key Features

### 🔐 User Registration and Authentication
- Users can **sign up** and **sign in** using a secure authentication flow.
- A **random dummy balance** is assigned to each user upon registration.
- **JWT (JSON Web Tokens)** are used for secure session handling and route protection.

### 📊 Dashboard
- After login, users are presented with a personalized dashboard showing their **current account balance**.
- Access to search and transaction functionalities is available directly from the dashboard.

### 🔎 Real-Time User Search
- Users can search for others by typing the **first letter of a username**.
- Matching results are fetched in real time from the database.
- Each result includes a **“Send Money”** button.
- Handles all UI states: 
  - `"No Search"` (initial state)  
  - `"User Not Found"`  
  - `"Matching Results"`

### 💸 Money Transfer Functionality
- On clicking **“Send Money”**, the user is navigated to a transfer page.
- The recipient’s username or ID is passed via the URL.
- Users enter the amount and initiate the transfer.
- Post-transfer:
  - Sender's balance is **deducted**
  - Recipient's balance is **credited**
- All changes are reflected and persisted in the database.

---

## 🛠️ Tech Stack

| Layer         | Technology                        |
|---------------|------------------------------------|
| **Frontend**  | React.js                          |
| **Backend**   | Node.js, Express.js               |
| **Database**  | MongoDB                           |
| **Auth**      | JWT (JSON Web Tokens)             |
| **Validation**| Zod (for server-side validation)  |

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB (local or cloud like MongoDB Atlas)

### Installation
```bash
# Clone the repository
git clone https://github.com/AMISHA1703/QuickPay.git
cd wallet-app

# Install dependencies
npm install

# Start the server
npm start
