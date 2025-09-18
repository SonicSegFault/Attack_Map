# Attack Map

**Live Attack Map** is a project to visualize IP abuse data on a 3D globe. It fetches data from a backend API, enriches it with GeoIP information, and shows arcs from attackers to a fixed endpoint. The project has both a **server-side** and **client-side**.

## What this project does

- Fetches IP abuse data regularly (cron job)  
- Enriches it with GeoIP data (latitude, longitude, country, etc.)  
- Stores data in MongoDB  
- Frontend displays the data as animated arcs on a globe  
- Auto-updates so viewers see near-real-time attack flows

## Tech Stack

| Component | Technology |
|-----------|-------------|
| Backend | Node.js, Express, Mongoose (MongoDB) |
| GeoIP enrichment | geoip-lite |
| Frontend | React, Vite, react-globe.gl, Tailwind CSS |
| Deployment | Database: MongoDB Atlas, Backend: Render/Railway, Frontend: Netlify |

## Installation (local dev)

```bash
# Clone repo
git clone https://github.com/SonicSegFault/Attack_Map.git
cd Attack_Map
```

### Backend Setup

```bash
cd serverside
npm install
cp .env.example .env   # set Mongo URI and PORT
npm run dev
```

### Frontend Setup

```bash
cd clientside
npm install
npm run dev
```

## Deployment

Backend → Render 

Frontend → Netlify (base dir clientside/, publish dir clientside/dist)

Database → MongoDB Atlas
