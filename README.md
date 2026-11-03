
# 🍽️ FoodPOS – Restaurant Point of Sale System

A modern and responsive Restaurant Point of Sale (POS) application built using React. FoodPOS helps restaurant staff manage products, create customer orders, manage cart items, and calculate bills through a simple and intuitive interface.

## 🚀 Features

### 🛍️ Product Management

* Display restaurant products with images and prices.
* Browse products through different categories.
* Filter products by category.
* Search products by name.

### 🛒 Cart Management

* Add products to the cart.
* Increase or decrease product quantities.
* Remove products from the cart.
* Display total products and total item quantities.
* Automatically calculate cart totals.

### 🧾 Bill Calculation

* Calculate subtotal.
* Apply percentage-based discounts.
* Calculate tax.
* Display discounted subtotal.
* Calculate and display the final grand total.

### 🍽️ Order Management

* Select order types:

  * Dine In
  * Takeout
  * Curbside
* Display the selected order type in the current order panel.

### 🎨 User Interface

* Modern restaurant POS dashboard.
* Responsive layout.
* Interactive buttons and category selection.
* Clean and user-friendly design.

## 🛠️ Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| React.js          | Frontend UI development           |
| JavaScript (ES6+) | Application logic                 |
| CSS3              | Styling and responsive design     |
| HTML5             | Application structure             |
| Vite              | Development server and build tool |

## 📂 Project Structure

```text
food-pos/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryList.jsx
│   │   ├── CategoryItem.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── OrderPanel.jsx
│   │   ├── OrderItem.jsx
│   │   └── OrderSummary.jsx
│   │
│   ├── pages/
│   │   ├── Menu.jsx
│   │   ├── OrderList.jsx
│   │   ├── History.jsx
│   │   ├── Bills.jsx
│   │   └── Settings.jsx
│   │
│   ├── data/
│   │   ├── product.js
│   │   └── categories.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

*Note: Adjust the structure above if your actual project folders or files differ.*

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to Project Directory

```bash
cd food-pos
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

```text
http://localhost:5173
```

## 🧮 Billing Logic

FoodPOS currently uses the following billing calculation:

| Component           | Calculation                      |
| ------------------- | -------------------------------- |
| Subtotal            | Sum of product price × quantity |
| Discount            | 10% of subtotal                  |
| Discounted Subtotal | Subtotal − Discount             |
| Tax                 | 5% of discounted subtotal        |
| Grand Total         | Discounted Subtotal + Tax        |

## 📌 Project Status

**Currently in Development 🚧**

Implemented features:

* Product listing and category filtering.
* Product search.
* Cart management.
* Quantity management.
* Automatic bill calculations.
* Order type selection.

Planned features:

* Customer details management.
* Table number selection for Dine In.
* Place order functionality.
* Order list and order history.
* Receipt generation and printing.
* LocalStorage persistence.
* Improved responsive design.

## 🎯 Learning Objectives

This project is also part of my React.js learning journey. Through FoodPOS, I am practising:

* React functional components.
* Props and component communication.
* `useState` hook.
* Event handling.
* Conditional rendering.
* Array methods such as `map()`, `filter()`, `find()` and `reduce()`.
* State management.
* Component-based architecture.

## 👨‍💻 Author

**Piyush**

Full Stack Developer | MERN Stack Developer

---

⭐ If you find this project interesting, feel free to explore the repository!
