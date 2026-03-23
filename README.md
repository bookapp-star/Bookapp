# Project Architecture & AI Context Guide

## 📱 Developer Environment
* **Platform:** Mobile-only development (no terminal, no local IDE).
* **Workflow:** All files are created and edited directly in the GitHub web interface.
* **Code Generation:** I rely on AI to write the complete, ready-to-paste code. 

## 🛠 Tech Stack (100% Free Tools)
* **Backend:** Node.js with Express.js
* **Database:** Supabase (PostgreSQL)
* **Hosting:** Render (Web Service)
* **Version Control:** GitHub

## 🔒 Security & Architecture Rules (STRICT)
1. **Backend as Gatekeeper:** The Frontend MUST NEVER communicate directly with Supabase. 
2. **No Frontend Keys:** The Frontend will never hold Supabase URLs, Anon keys, or Service Role keys. It only calls the Render backend API.
3. **Admin Access:** The Node.js backend uses the `@supabase/supabase-js` client initialized with the `SUPABASE_SERVICE_ROLE_KEY` to bypass RLS and manage the database securely.
4. **Environment Variables:** Credentials (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`) are stored safely in Render's dashboard.

## 🏗 Code Structure Preference
* **Modularized:** Do not put everything in one massive `index.js` file.
* **Scalable:** Separate concerns into folders (e.g., `/routes`, `/controllers`, `/config`) even if the project is starting small.

## 🚀 Deployment (Render)
* **Build Command:** `npm install`
* **Start Command:** `npm start`
* **Branch:** `main`
