# ZapShift

## Run the application

1. Install the frontend dependencies with `npm install`.
2. Install the API dependencies with `npm install --prefix server`.
3. Copy `server/.env.example` to `server/.env` and set `MONGODB_URI` to your MongoDB connection string.
4. In one terminal, run the API with `npm run server`.
5. In another terminal, run the frontend with `npm run dev`.

The Vite development server proxies `/api` requests to `http://localhost:5000`. For a deployed frontend, set `VITE_API_URL` to the backend's base URL and configure `CLIENT_ORIGIN` on the backend to the frontend's origin.

## Signup API

`POST /api/auth/register` accepts a JSON body with `name`, `email`, and `password`. It creates a user with a bcrypt-hashed password and returns `201` with the user's public profile. Email addresses are normalized to lowercase; duplicate email addresses return `409`. Invalid fields return `400`.

`POST /api/auth/login` accepts `email` and `password`, checks the password against its stored hash, and returns the user's public profile. Invalid credentials return `401`.

`GET /api/health` returns the API health status.
