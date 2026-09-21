# 🚀 Live Deployment Guide: Exam Portal (Docker, Render & Vercel)

Yeh guide aapko step-by-step batayegi ki kaise aap apne **Exam Portal** ko **Render (Backend with Docker)** aur **Vercel (Frontend)** par live kar sakte hain.

---

## 📋 Architecture Overview

```
                   +---------------------------+
                   |       User Browser        |
                   +-------------+-------------+
                                 |
         +-----------------------+-----------------------+
         |                                               |
         v (Frontend UI)                                 v (API Requests)
+------------------------+                     +------------------------+
|     Vercel Host        |                     |      Render Host       |
|   (React + Vite)       | --(REST /api/...)-->|    (Express Server)    |
|   client/              |                     |  Running via Docker    |
+------------------------+                     +-----------+------------+
                                                           |
                                                           v
                                               +------------------------+
                                               |     MongoDB Atlas      |
                                               |    (Cloud Database)    |
                                               +------------------------+
```

---

## 🛠️ Step 1: Push Code to GitHub

Agar aapne abhi tak code ko GitHub par push nahi kiya hai:

1. Terminal me project ke root folder (`exam-portal`) par jaayein:
```bash
git init
git add .
git commit -m "Configure Docker, Render, and Vercel live deployment"
```
2. GitHub par new repository create karein (e.g. `exam-portal`).
3. GitHub repo ko connect karke push karein:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/exam-portal.git
git push -u origin main
```

*(Note: `.env` file ko `.gitignore` me daal diya gaya hai taaki aapke secrets public na hon)*

---

## 🐳 Step 2: Deploy Backend on Render using Docker

1. **[render.com](https://render.com)** par jaayein aur login/signup karein (GitHub se login karna sabse aasan hai).
2. Dashboard par **"New +"** button par click karein aur **"Web Service"** select karein.
3. Apna GitHub repository (`exam-portal`) select karein aur connect karein.
4. Settings form me yeh details fill karein:

| Field | Value | Notes |
|---|---|---|
| **Name** | `exam-portal-api` | Yeh aapka unique backend name hoga |
| **Region** | `Singapore` ya `Oregon` | Nearest region select karein |
| **Branch** | `main` | |
| **Root Directory** | *Leave empty* (ya `./server`) | Agar root chhod rahe hain toh root Dockerfile use hoga |
| **Runtime / Language** | **Docker** | Select "Docker" |
| **Dockerfile Path** | `./server/Dockerfile` (ya `Dockerfile`) | Hamne dono place par config kar diya hai |
| **Docker Context** | `./server` (ya `.`) | |
| **Instance Type** | **Free** | Free tier select karein |

5. **Environment Variables** section me jaayein aur **"Add Environment Variable"** click karke yeh add karein:

| Key | Value |
|---|---|
| `PORT` | `5000` |
| `MONGO_URI` | `mongodb+srv://ganeshplays700_db_user:0A38DNGy00iWVStB@cluster0.5atdutm.mongodb.net/exam_portal?retryWrites=true&w=majority` |
| `JWT_SECRET` | `f98a2e4c91d7b68a5c31e0f4928d3e7b1a6c5f89e240b7194d38c6a2e5f1b09d84e72a19b5c30f4e6d28a7b9c1f0e4d25a8b7c3e91f0a6b4d8c2e5f7a1b3c9d4` |
| `CORS_ORIGIN` | `*` |

6. Click karein **"Deploy Web Service"**.
7. Render Docker image build karega. Build complete hone ke baad aapko ek live URL milega:
   - Example: `https://exam-portal-api.onrender.com`
8. **Test your backend live**:
   - Browser me open karein: `https://exam-portal-api.onrender.com/api/health`
   - Agar aapko `{"status":"online","database":"connected"}` dikhe, toh backend 100% successfully live ho gaya hai! 🎉
   - *Note: Fresh database connect hone par backend automatically default Admin, Student aur 150 questions seed kar deta hai!*

---

## ⚡ Step 3: Deploy Frontend on Vercel

1. **[vercel.com](https://vercel.com)** par jaayein aur login karein.
2. **"Add New..."** $\rightarrow$ **"Project"** par click karein.
3. Apna GitHub repository (`exam-portal`) **Import** karein.
4. **Configure Project** screen par:
   - **Framework Preset**: `Vite` (auto-detected).
   - **Root Directory**: **"Edit"** par click karein aur `client` select karein (IMPORTANT).
   - **Build and Output Settings**: Default rehne dein (`npm run build` aur `dist`).
5. **Environment Variables** expand karein aur add karein:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://exam-portal-api.onrender.com/api` *(Step 2 me mila Render backend URL + `/api`)*
6. Click karein **"Deploy"**.
7. Vercel kuch seconds me frontend build karke aapko live URL de dega:
   - Example: `https://exam-portal.vercel.app`

---

## 🧪 Step 4: Test Live Application

Aap apne Vercel live URL par jaayein:
1. **Admin Login**:
   - **Username**: `admin`
   - **Password**: `admin`
   - Features: View students, question management, exams results.
2. **Student Login**:
   - **Username**: `student`
   - **Password**: `student`
   - Features: Attempt HTML, CSS, JavaScript exams, dynamic timer, live question palette, instant scores.

---

## 🐳 Bonus: Run Locally with Docker Compose

Agar aapko apne computer par poora stack (Frontend + Backend) Docker me ek saath run karna ho:

1. Docker Desktop start karein.
2. Root folder me command run karein:
```bash
docker compose up --build
```
3. Open in browser:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000/api/health`

---

## 💡 Important Notes for Free Hosting:
- **Render Free Tier Sleep Behavior**: Free web services Render par 15 minutes inactive rehne ke baad sleep mode me chale jaate hain. Jab koi pehli baar request bhejta hai, toh 30-45 seconds lag sakte hain wake up hone me. Yeh normal hai.
- **Vercel**: Vercel hamesha instant active rehta hai aur CDN se fast serve hota hai.
