
# Attack Map Backend

The **backend** of the Live Attack Map project. It fetches attack data, enriches it with GeoIP, stores it in MongoDB, and exposes APIs for the frontend.

## Features

- Scheduled attack data fetching (cron jobs)  
- GeoIP enrichment (lat/lon, ASN, country)  
- MongoDB persistence  
- REST API for the frontend  

## Tech Used

- Node.js + Express  
- MongoDB + Mongoose  
- geoip-lite  
- node-cron  

## Setup & Installation

``` bash
cd serverside
npm install
```

### Create a .env file:

```
MONGO_URI=<your mongodb connection string>
PORT=8000
```

### Run the server:

```
npm run dev
# or
node server.js
```

## Deployment (Render)

- Root directory: serverside

- Build command: npm install

- Start command: node server.js

- Environment variables: set Mongo URI and PORT

## API Routes
```Route Method Description
/attacks/getattacks	GET	Fetch all enriched attacks
/attacks/createattack	POST	(Optional) add attack record
```
