// File Path: README.md

# Project Architecture & AI Context Guide (Single-File Version)

## 📱 Developer Environment
* **Platform:** Mobile-only development (no terminal, no local IDE).
* **Workflow:** All files created/edited via GitHub web interface.
* **Code Generation:** AI-driven, ready-to-paste code.

## 🛠 Tech Stack (100% Free Tools)
* **Backend:** Node.js with Express.js
* **Database:** Supabase (PostgreSQL)
* **Hosting:** Render (Web Service) - Frankfurt Region
* **Version Control:** GitHub

## 🔒 Security & Architecture Rules (STRICT)
1. **Backend as Gatekeeper:** Frontend NEVER communicates directly with Supabase.
2. **No Frontend Keys:** Frontend holds NO Supabase credentials.
3. **Admin Access:** Backend uses `SUPABASE_SERVICE_ROLE_KEY` to bypass RLS.
4. **Environment Variables:** Credentials stored in Render Dashboard.
5. **Always Ask:** AI must ask for existing code before providing updates.
6. **File Paths:** All code snippets must include the file path as a comment.

## 🏗 Code Structure Preference
* **Single-File Architecture:** No `/routes` or `/controllers` folders. All logic resides in `server.js`.
* **Entry Point:** `server.js`

## 🚀 Deployment (Render)
* **Build Command:** `npm install`
* **Start Command:** `npm start`
