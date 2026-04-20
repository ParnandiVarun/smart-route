# RouteVision

> Smart Multi-Route Navigation Platform with Dynamic Route Optimization, Blocked Zone Avoidance, and 2D / 3D Map Visualization.

## Live Demo

🔗 **Deployed Link:** _Update after deployment_

## GitHub Repository

🔗 **GitHub Profile:** https://github.com/ParnandiVarun

---

# Project Overview

RouteVision is a modern geospatial routing web application built using **React + Vite** that allows users to generate multiple routes between two locations, compare travel distance and duration, avoid blocked zones dynamically, and visualize navigation in both **2D and 3D map modes**.

# Core Features

## Smart Route Generation

- Generate multiple routes between start and destination
- Compare route options instantly
- Intelligent route suggestions

## Location Search

- Search by city / place names
- Geocoding powered location conversion

## Dynamic Blocked Zones

- Detect blocked areas
- Re-route navigation automatically
- Route optimization based on restrictions

## Route Details

For each route:

- Total Distance
- Estimated Duration
- Route Type Tags

## Dual Map Modes

### 2D View

- Interactive OpenStreetMap view using Leaflet

### 3D View

- Immersive 3D map experience using Mapbox GL

## Route Selection

- Click route card to highlight selected route
- Active route emphasized on map

## Responsive UI

- Fully mobile responsive
- Tablet friendly
- Desktop optimized dashboard

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- TailwindCSS
- JavaScript (ES6+)

## API Integration

- Axios

## Maps & GIS

- OpenRouteService API
- OpenStreetMap Nominatim Geocoding
- React Leaflet
- Leaflet.js
- Mapbox GL JS

---

# Folder Structure

```bash
src/
├── api/
│   ├── routeService.js
│   ├── geocodeService.js
│   └── blockedService.js
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchPanel.jsx
│   └── RouteList.jsx
│
├── maps/
│   ├── MapSection.jsx
│   ├── Map2D.jsx
│   └── Map3D.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
└── main.jsx
```

---

# Installation & Setup

## 1️.Clone Repository

```bash
git clone https://github.com/ParnandiVarun/your-repo-name.git
cd your-repo-name
```

## 2️.Install Dependencies

```bash
npm install
```

## 3️.Add Environment Variables

Create `.env`

```env
VITE_ORS_KEY=your_openrouteservice_key
VITE_MAPBOX_TOKEN=your_mapbox_token
```

## 4️.Start Development Server

```bash
npm run dev
```

---

# How It Works

1. User enters start and destination locations
2. App converts place names into coordinates
3. Routing API generates multiple route options
4. Blocked zones are considered during route generation
5. Routes displayed in cards + maps
6. User selects preferred route

---

# UI Highlights

- Premium dashboard layout
- Gradient dark theme
- Glassmorphism cards
- Animated route cards
- Smooth interactions
- Clean geospatial product styling

---

# Assignment Requirements Covered

✅ React-based application
✅ Multiple route generation
✅ Blocked location avoidance
✅ 2D map view
✅ 3D map view
✅ Different route colors
✅ Select route highlight
✅ Distance & duration display
✅ Responsive UI
✅ Scalable architecture

---

# Future Enhancements

- Live traffic integration
- Real-time GPS tracking
- Voice navigation
- Turn-by-turn directions
- Route history
- Save favorite locations
- Weather-aware routing
- AI route recommendations

---

# Developer

**Varun Parnandi**
Frontend / Full Stack Developer

🔗 GitHub: https://github.com/ParnandiVarun

---
