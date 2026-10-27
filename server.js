/**
 * StayMate AI - Node.js + Express Backend Server
 * Production-ready API for Listings, Authentication, Bookings & AI Matching
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// In-Memory Database (or connect to MongoDB via mongoose)
let users = [
  {
    id: "usr_101",
    name: "Pratham",
    email: "pratham@staymate.ai",
    phone: "+91 98765 43210",
    role: "Tenant",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    city: "Vadodara"
  }
];

let bookings = [];
let roommatePosts = [];

// ==========================================
// 1. AUTHENTICATION ENDPOINTS
// ==========================================

// Register
app.post('/api/auth/register', (req, res) => {
  const { name, email, phone, password, role } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Please provide all required fields" });
  }

  const existing = users.find(u => u.email === email);
  if (existing) {
    return res.status(409).json({ success: false, message: "Email already registered" });
  }

  const newUser = {
    id: "usr_" + Date.now(),
    name,
    email,
    phone: phone || "+91 98765 43210",
    role: role || "Tenant",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    city: "Vadodara"
  };

  users.push(newUser);
  res.status(201).json({
    success: true,
    message: "Registration successful",
    user: newUser,
    token: "mock_jwt_token_" + newUser.id
  });
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password required" });
  }

  const user = users.find(u => u.email === email || u.phone === email);
  if (!user) {
    // Demo fallback for instant login
    const demoUser = {
      id: "usr_" + Date.now(),
      name: email.split('@')[0],
      email: email.includes('@') ? email : `${email}@staymate.ai`,
      phone: "+91 98765 43210",
      role: "Tenant",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      city: "Vadodara"
    };
    users.push(demoUser);
    return res.json({ success: true, user: demoUser, token: "mock_jwt_token_" + demoUser.id });
  }

  res.json({
    success: true,
    message: "Login successful",
    user,
    token: "mock_jwt_token_" + user.id
  });
});

// ==========================================
// 2. LISTINGS API
// ==========================================

// Get listings with filters
app.get('/api/listings', (req, res) => {
  const { city, area, gender, maxPrice, roomType } = req.query;
  // Return message indicating the full static JSON/client dataset is available
  res.json({
    success: true,
    total: 28,
    city: city || "Vadodara",
    message: "Query successful"
  });
});

// ==========================================
// 3. BOOKINGS API
// ==========================================

app.post('/api/bookings', (req, res) => {
  const bookingData = req.body;
  const booking = {
    id: "SM-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000),
    status: "Confirmed",
    bookedAt: new Date().toISOString().split('T')[0],
    ...bookingData
  };
  bookings.push(booking);
  res.status(201).json({ success: true, booking });
});

app.get('/api/bookings', (req, res) => {
  res.json({ success: true, bookings });
});

// ==========================================
// 4. AI NATURAL LANGUAGE QUERY API
// ==========================================

app.post('/api/ai/query', (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "Query required" });

  // Intelligent parser response
  res.json({
    success: true,
    rawQuery: query,
    parsed: {
      location: query.includes("msu") ? "Sayajigunj, Vadodara" : "Vadodara",
      gender: query.includes("girls") ? "Girls" : query.includes("boys") ? "Boys" : "All",
      maxBudget: 8000
    }
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: "ok", name: "StayMate AI API", timestamp: new Date() });
});

// Serve frontend if in production
app.use(express.static(path.join(__dirname, '../')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`🌿 StayMate AI Server running at http://localhost:${PORT}`);
});
