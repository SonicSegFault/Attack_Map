
# Attack Map Frontend

The **frontend** of the Live Attack Map project. It fetches enriched attack data from the backend and displays animated arcs on a 3D globe.

## Features

- 3D globe with animated arcs representing attacks  
- Randomized arcs every few seconds for dynamic effect  
- Labels showing IP, country, and last report time  
- Auto-rotation and responsive layout  

## Tech Used

- React + Vite  
- react-globe.gl  
- Tailwind CSS  
- axios
- Material UI 

## Setup & Installation

```bash
cd clientside
npm install
npm run dev
```

## Build for production:

```bash
npm run build
```

## Deployment (Netlify)

- Base directory: clientside

- Build command: npm run build

- Publish directory: clientside/dist
