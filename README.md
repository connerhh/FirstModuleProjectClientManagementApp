# FirstModuleProjectClientManagementApp
Client Management App. First Module Project. 
# 📅 Client Management App

This is a full-stack web application for managing client registrations and scheduling meetings.

---

## 🧩 Features

- ✅ Register new clients (with validation)
- ✅ Schedule meetings for registered clients
- ✅ View all scheduled meetings in a formatted table
- ✅ Login + logout with localStorage flag
- ✅ Search for clients by name or email
- ✅ Responsive layout (desktop and mobile friendly)

---

## 🛠️ Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | Angular 16+        |
| Backend      | Node.js + Express  |
| Database     | MySQL              |
| Styling      | Custom CSS         |
| Testing      | Jasmine + Karma (Angular CLI test) |

---

## 🔐 Login Info

- **Email:** `admin@example.com`  
- **Password:** `admin`

---

## 🔧 Prerequisites

- Node.js & npm installed  
- Angular CLI installed globally: `npm install -g @angular/cli`  
- MySQL server running  

---

## ✅ Backend Setup (Node + MySQL)

1. Navigate to the backend folder:
   ```bash
   cd client-management-server

2. Install Dependencies 
   '''bach
   npm install

3.Update server.js with you MySql credentials if needed. 

4.Start the server:
  '''bash
    node server.js   

5.The server should run on http://localhost:3000


Frontend Setup (Angular)

1. Navigate to the Angular project folder:
    '''bash
    cd client-management-angular

2. Install dependencies:
    '''bash
    npm install

3. Run the frontend:
    '''bash
    ng serve

4. Open your browser:
    http://localhost:4200

Run Unit Tests
    '''bash
    ng test
    This opens Karma in your browser to confirm unit test results. 
