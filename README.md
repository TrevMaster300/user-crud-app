
# 👥 React User Manager

A simple React-based frontend to **Create, Read, Update, and Delete (CRUD)** user records. This project is designed to be API-ready and uses in-memory state for now, making it easy to integrate with any backend.

## 🔧 Features

- Add new users
- Edit user details
- Delete users
- Display all users in a list
- Clean, simple form and layout
- Built with Create React App

---

## 📋 User Fields

Each user contains:
- `Employee Number`
- `Name`
- `Surname`
- `Phone Number`
- `Address`

---

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- JavaScript (ES6+)
- CSS (custom styling)
- Node.js (for development)

---

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### ✅ Prerequisites

Make sure you have **Node.js** and **npm** installed.  
Download from [https://nodejs.org](https://nodejs.org)

Check if they're installed:

```bash
node -v
npm -v
```

### 🔄 Clone the repository

```bash
git clone https://github.com/TrevMaster300/user-crud-app.git
cd user-crud-app
```

### 📦 Install dependencies

```bash
npm install
```

### ▶️ Run the development server

```bash
npm start
```

This will start the app at [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Integration (Optional)

Currently, this app manages users **in local state only**. But it’s designed to be easily connected to an API.

When ready:
- Replace `useState` with `useEffect` and `axios` to load user data
- Replace `handleSubmit` with `POST/PUT` API calls
- Replace `handleDelete` with `DELETE` API calls

Let me know if you need help with this step.

---

## 📁 Folder Structure

```
user-crud-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── UserList.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
```

---

## 📸 Screenshot

![image](https://github.com/user-attachments/assets/6994370f-daf1-4fbc-a26c-d4adcdf886a4)



---

## ✍️ Author

Trevor Sekoboane  
GitHub: [@TrevMaster300](https://github.com/TrevMaster300)

---

## 📜 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
