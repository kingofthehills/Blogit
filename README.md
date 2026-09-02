# Blogit

Blogit is a full-stack MERN blogging platform with an admin dashboard for managing posts and comments, AI-assisted content generation, and image hosting/optimization for post cover images.

## Features

- Public blog with a home feed and individual post pages
- Comment system where readers can leave comments that require admin approval before they appear
- Admin dashboard (JWT-protected) with:
  - Login screen and token-based authentication
  - Overview stats (total blogs, comments, drafts, recent posts)
  - Create, list, publish/unpublish, and delete blog posts
  - Approve or delete reader comments
- AI-generated blog content via the Google Gemini API, used to draft post content from a prompt
- Cover image upload and optimization (auto compression, WebP conversion, resizing) via ImageKit
- Toast notifications and a rich text editor (Quill) for writing posts

## Tech Stack

**Frontend (`client/`)**
- React 19 + Vite
- React Router
- Tailwind CSS 4
- Quill (rich text editor), Marked (markdown rendering)
- Axios, React Hot Toast, Motion (animations), Moment

**Backend (`server/`)**
- Node.js + Express 5
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for admin authentication
- Multer for file upload handling
- ImageKit SDK for image storage/optimization
- Google GenAI SDK (`@google/genai`) for AI content generation

## Project Structure

```
Blogit/
├── client/                  # React frontend (Vite)
│   └── src/
│       ├── components/      # Shared UI + admin components (Sidebar, Login, table items, etc.)
│       ├── pages/           # Home, Blog detail, and admin pages (Dashboard, AddBlog, ListBlog, Comments)
│       ├── context/         # AppContext (auth token, base URL, shared state)
│       └── assets/          # Images, icons, static assets
└── server/                  # Express backend
    ├── configs/             # MongoDB, ImageKit, and Gemini client configuration
    ├── controllers/         # Admin and blog request handlers
    ├── middleware/          # JWT auth middleware, Multer upload middleware
    ├── models/               # Mongoose models (Blog, Comment)
    ├── routes/               # /api/admin and /api/blog route definitions
    └── server.js             # Express app entry point
```

## Setup & Installation

### Prerequisites
- Node.js
- A MongoDB database (e.g. MongoDB Atlas)
- An ImageKit account (for image uploads)
- A Google Gemini API key (for AI content generation)

### 1. Clone the repository
```bash
git clone https://github.com/kingofthehills/Blogit.git
cd Blogit
```

### 2. Backend setup
```bash
cd server
npm install
```

Create a `.env` file in `server/` with:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
GEMINI_API_KEY=your_gemini_api_key
PORT=3000
```

Run the server:
```bash
npm run server   # starts with nodemon (auto-restart)
# or
npm start        # starts with node
```

### 3. Frontend setup
```bash
cd client
npm install
```

Create a `.env` file in `client/` with:
```
VITE_BASE_URL=http://localhost:3000
```

Run the dev server:
```bash
npm run dev
```

Other client scripts:
- `npm run build` – production build
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## API Overview

- `POST /api/admin/login` – admin login, returns a JWT
- `GET /api/admin/dashboard` – dashboard stats (auth required)
- `GET /api/admin/blogs` / `GET /api/admin/comments` – list all blogs/comments (auth required)
- `POST /api/admin/delete-comment` / `POST /api/admin/approve-comment` – moderate comments (auth required)
- `GET /api/blog/all` – list published blogs
- `GET /api/blog/:blogId` – get a single blog post
- `POST /api/blog/add` – create a blog post with an image upload (auth required)
- `POST /api/blog/delete` / `POST /api/blog/toggle-publish` – manage a post (auth required)
- `POST /api/blog/add-comment` / `POST /api/blog/comments` – add/list comments for a post
- `POST /api/blog/generate` – generate blog content from a prompt using Gemini (auth required)
