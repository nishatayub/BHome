# 🏠 BHome — Your Next Home, Just a Click Away

**BHome** is a full-featured, responsive property rental platform designed to simplify the process of finding, listing, and renting properties. Whether you're a tenant searching for a cozy apartment or a landlord looking to showcase your listings, BHome offers a seamless, secure, and intuitive experience for all.

---

## ✨ Features

### 🧭 Core Functionality
- **User Authentication & Authorization**
  - Secure login/signup for tenants and landlords
  - Role-based dashboard access
- **Dynamic Property Listings**
  - Renters can browse, filter, and sort listings
  - Landlords can add, edit, and delete properties
- **Advanced Search & Filters**
  - Location, price range, number of bedrooms, amenities, etc.
- **Image Gallery & Property Details**
  - Interactive image carousel and complete listing info
- **Responsive Design**
  - Fully optimized for mobile, tablet, and desktop

### 📊 Interactive & Engaging UX
- **Live Map Integration** (e.g., Google Maps or Mapbox)
  - View listings on an interactive map
- **Calendar & Availability Picker**
  - View available dates for booking
- **Save to Wishlist / Favorites**
  - Logged-in users can bookmark listings
- **Reviews & Ratings**
  - Tenants can rate their rental experience

### 💼 Landlord Features
- **Dashboard to Manage Listings**
  - View stats, update pricing, track tenant inquiries
- **Booking Management**
  - Accept/reject rental requests, manage calendar
- **Messaging System**
  - In-app chat with potential tenants

### 💳 Secure Payments (Optional / Future)
- Integration with Stripe/PayPal for deposit and rent payments
- Payment receipts and history

---

## 🛠️ Tech Stack

| Technology     | Purpose                         |
|----------------|---------------------------------|
| **React.js**   | Frontend UI                     |
| **Node.js**    | Backend Server                  |
| **Express.js** | REST API                        |
| **MongoDB**    | Database                        |
| **Mongoose**   | ODM for MongoDB                 |
| **JWT**        | Authentication & Authorization  |
| **Cloudinary** | Image Upload & Optimization     |
| **Tailwind CSS / SCSS** | UI Styling             |
| **Socket.io**  | Real-time chat functionality    |
| **Mapbox/Google Maps API** | Location services  |

---

## 🚀 Getting Started

### 📦 Prerequisites
- Node.js (v18+)
- MongoDB Atlas or local instance
- Cloudinary (for image uploads)
- Google Maps API key (optional)

### 📁 Installation

git clone https://github.com/yourusername/bhome.git
cd bhome
npm install
cd client
npm install
🔐 Environment Variables
Create a .env file in the root and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAP_API_KEY=your_mapbox_or_google_key
▶️ Running the App

# Backend

cd server

npm run dev

# Frontend

cd client

npm run dev


## 🧪 Upcoming Features

🏦 Admin Dashboard for platform management

📅 Real-time availability calendar sync (iCal support)

🔔 Push & Email Notifications

🧾 Rental Agreements & PDF Generation

🕵️‍♀️ Tenant Background Verification Integration

🧬 AI-powered recommendation engine for tenants

🌍 Multi-language & currency support

📱 Progressive Web App (PWA) features for offline use

## 📸 UI Previews
Coming soon! Add some cool screenshots or Figma mockups here.

## 🧠 Learnings & Goals
Developed full CRUD operations with role-based access

Learned how to integrate cloud services (e.g., image hosting, maps)

Implemented modular and scalable backend architecture

Improved UX through feedback-driven iterations

## 🤝 Contributing
Feel free to open issues or submit pull requests. All feedback is welcome!

## 📝 License
This project is licensed under the MIT License.

## 📬 Contact
Made with ❤️ by Nishat Ayub
Drop your queries or suggestions at: nishatayub09@icloud.com

### Let me know if you'd like to customize this further for:
- **Only frontend** or **only backend**
- **A MERN-specific setup guide**
- **A version with Next.js or other tech**
- Or if you want **Figma-style UI mockups** included in the repo.

##### Want a PDF version or portfolio-ready presentation format too? I can help you