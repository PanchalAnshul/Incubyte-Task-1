
# 🍬 Sweet Shop Inventory Manager

A simple inventory management system for a sweet shop, developed using a **Test-Driven Development (TDD)** approach with a clean React frontend built using **Vite**.

---

## 🧪 Test-Driven Development

All backend logic is thoroughly tested using **Jest**, and was written following a strict **TDD** workflow. Here's an overview of the test coverage:

### Test Files and Their Responsibilities

#### `tests/addSweet.test.js`
- Adds new sweets with unique ID and name
- Prevents duplicate entries
- Validates required fields

#### `tests/deleteSweet.test.js`
- Deletes sweets by ID or name
- Handles cases where sweet does not exist

#### `tests/viewSweets.test.js`
- Fetches and displays all sweets
- Handles empty inventory gracefully

#### `tests/searchSweet.test.js`
- Searches sweets by ID or name (case-insensitive, partial match)
- Displays appropriate message

#### `tests/sortSweet.test.js`
- Sorts sweets alphabetically or by quantity (asc/desc)
- Handles empty/malformed inventory

#### `tests/purchaseSweet.test.js`
- Purchases sweets by ID or name
- Decreases quantity correctly
- Handles errors for invalid sweet ID or name

#### `tests/restockSweet.test.js`
- Restocks sweets by ID or name
- Increases quantity accordingly
- Handles edge cases and invalid inputs

---

## 📁 Project Structure

sweet-shop/
├── src/ # Core inventory logic
│ └── sweetManager.js
├── tests/ # Unit tests using Jest
│ ├── addSweet.test.js
│ ├── deleteSweet.test.js
│ ├── viewSweets.test.js
│ ├── searchSweet.test.js
│ ├── sortSweet.test.js
│ ├── purchaseSweet.test.js
│ └── restockSweet.test.js
├── Frontend/ # React frontend
│ ├── src/components/ # UI Components
│ ├── src/sweetManager.js
│ └── ui-screenshot.png
├── .gitignore
└── README.md

---

## 🖥️ Frontend (React + Vite)

A minimal React interface to visualize and interact with the backend logic.

### Key Components
- **NavBar** – Simple top navigation bar
- **SweetForm** – Add, restock, purchase, or delete sweets
- **SweetList** – Displays and filters inventory in real time
- **SweetCard** – Card layout for each sweet item
- **Search Bar** – Filter sweets by name or ID

### To Run the Frontend:

```bash
cd Frontend
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

✨ Features
✅ Add new sweets to the inventory

✅ Purchase sweets (decrease stock)

✅ Restock sweets (increase stock)

✅ Delete sweets from the system

✅ View and sort sweets

✅ Search sweets by ID or name

✅ Lightweight and intuitive frontend

📌 Notes
✔️ 100% Test-Driven Development for backend logic

✔️ Clean UI with essential CRUD + Search/Sort functionality

✔️ Covers edge cases through Jest tests

👨‍💻 Developer
Anshul Panchal
