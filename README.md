<h1 align="center">🧠 SYNAPSE – Smart Healthcare Assistant</h1>

<p align="center">
An AI-powered virtual healthcare assistant platform to streamline patient-doctor interactions,<br>
analyze medical reports, and automate appointment scheduling.<br><br>
💻 Built with React.js, FastAPI, and cutting-edge ML technologies.
</p>

---

## 🚀 About the Project

**Synapse** is an intelligent healthcare web application designed to improve patient care and reduce clinical overhead using AI.

The platform features a virtual assistant that:
- Understands patient symptoms via voice/text
- Provides AI-generated preliminary advice
- Automatically schedules doctor appointments

Doctors get a full view of:
- Appointments
- Uploaded patient reports
- AI-analyzed insights to aid diagnosis

This personal hackathon project emphasizes accessibility, automation, and meaningful use of machine learning in real-world healthcare settings.

---

## ✅ Features (Already Implemented)

- **User Roles:** Patients and Doctors, each with personalized dashboards
- **Virtual Assistant:** AI-powered voice/text chat for health queries and bookings
- **Medical Report Analysis:** Upload PDFs or images and get ML-driven summaries
- **Smart Scheduling:** Patients can book time slots, doctors see live schedules
- **Voice Intelligence:**
  - **Speech-to-Text:** Powered by OpenAI Whisper
  - **Text-to-Speech:** Using gTTS
  - **Conversational AI:** Google Generative AI
- **Twilio Integration:** Phone-based appointment confirmations
- **Secure & Scalable Backend:** FastAPI + MongoDB

---

## 🧰 Tech Stack

### 🔹 Frontend
- React.js  
- Tailwind CSS  
- Zustand (Global State)  
- React Router  
- SweetAlert2  
- Axios  

### 🔸 Backend
- FastAPI  
- Uvicorn  
- PyMongo + MongoEngine  
- OpenAI Whisper  
- gTTS  
- Google Generative AI  
- Twilio API  
- WebSockets  

---

## 🛠️ Getting Started

```bash
git clone https://github.com/your-username/synapse.git
cd synapse
```

Open **two terminals** in separate tabs/windows:

### 1️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

> Create a `.env` file in `backend/` and add:
```
MONGO_URL = your_mongo_connection_string
OPENAI_API_KEY = your_openai_key
GOOGLE_API_KEY = your_google_gen_ai_key
TWILIO_SID = your_twilio_sid
TWILIO_AUTH_TOKEN = your_twilio_token
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

- Frontend: `http://localhost:5173`  
- Backend API: `http://localhost:8000`

---

## ⚠️ Notes

- Whisper and gTTS require access to audio devices.
- For Google Generative AI, enable the appropriate API in your GCP account.
- Twilio credentials are optional unless you enable phone call confirmations.

---

## 💡 Future Enhancements

- Real-time chat between doctors and patients  
- Patient history timeline and download feature  
- ML model fine-tuning on localized datasets  
- Role-based authorization using JWT  

---

## 📦 Deployment Info

- **Frontend:** Deploy on Vercel or Netlify  
- **Backend:** Render / Railway / EC2  
- **Database:** MongoDB Atlas  

---

## 🙌 Special Note

This is a **personal project** built for a hackathon. Contributions are not open at the moment, but the tech and vision behind it aim to bridge gaps in modern healthcare access.  

If you're working on something similar or want to collaborate — feel free to reach out!

---

Let me know if you want a contribution guide or demo link section added!
