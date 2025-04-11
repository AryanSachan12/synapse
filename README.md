<h1 align="center">🧠 Synapse – Smart Healthcare Assistant</h1> <p align="center"> A voice-enabled virtual assistant platform that revolutionizes healthcare access and efficiency through AI and automation. </p>
📘 Project Abstract
Synapse is an innovative healthcare platform designed to enhance patient engagement and streamline clinical workflows using the power of machine learning.

At its core is an intelligent, on-call virtual assistant that:

Analyzes patient-reported symptoms

Provides preliminary medical advice

Automatically schedules appointments with doctors

This reduces the administrative burden on staff while ensuring timely, efficient healthcare access.

🌟 Core Features
👥 Role-Based Access
Patients: Book appointments, upload medical reports, and interact with the virtual assistant.

Doctors: View daily schedules, patient-submitted data, and AI-generated diagnostic insights.

🤖 Virtual Medical Assistant
Text & voice-based interaction

Understands symptoms using NLP

Suggests next steps and books appointments

📂 Medical Report Analysis
Upload documents (PDFs, images, etc.)

ML models extract key insights

Supports early diagnosis with AI-generated summaries

🗓️ Smart Appointment Scheduler
Real-time calendar view

Integrated with doctor availability

Powered by Twilio for automated phone call confirmations

🧠 Voice Intelligence
OpenAI Whisper: Converts patient speech to text

gTTS: Converts AI text to speech

Google Generative AI: Provides intelligent, human-like responses

🛠️ Tech Stack
🔹 Frontend
React.js

Tailwind CSS

Zustand (State Management)

SweetAlert2

React Router

Axios

🔸 Backend
FastAPI

Uvicorn

MongoDB (PyMongo + MongoEngine)

WebSockets

OpenAI Whisper

gTTS (Google Text-to-Speech)

Google Generative AI

Twilio API

📁 Folder Structure
synapse/
├── backend/ → FastAPI server
│ ├── main.py
│ ├── routers/
│ └── utils/
├── frontend/ → React app
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/
│ │ └── store/
└── README.md

🧑‍💻 Getting Started
1. Clone the Repository
git clone https://github.com/your-username/synapse.git
cd synapse

2. Backend Setup
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Make sure to configure your .env file with appropriate API keys and MongoDB URL.

3. Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at http://localhost:5173

Backend API runs at http://localhost:8000

🚀 Deployment
Frontend: Vercel / Netlify

Backend: Render / Railway / EC2

Database: MongoDB Atlas

🎯 Goals
Synapse strives to:

Improve accessibility to primary healthcare

Reduce administrative overload in hospitals

Use AI responsibly to support, not replace, medical professionals

🙌 Final Note
If you found this project interesting, feel free to give it a ⭐ and share your feedback.
Together, let's build smarter, more compassionate healthcare. 💙
