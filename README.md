# 🎸 Riffusion - AI Music, Video & Image Generator

> Powered by AI. Inspired by Riffusion. Your creativity, amplified.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.9+](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![Node.js 18+](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

🎵 **Music Generation**
- Generate music from text prompts
- Remix and transform existing audio
- Audio stem separation (vocals, drums, bass, etc.)

🎬 **Video Creation**
- Generate videos from text descriptions
- AI-powered video editing and effects
- Custom duration and resolution

🖼️ **Image Generation**
- Create images from text prompts
- Edit existing images with AI
- Batch processing support

⚡ **Advanced Features**
- Real-time generation with GPU acceleration
- Customizable generation parameters
- Batch processing capabilities
- Advanced analytics and tracking

---

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 14+ (React 18)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** React Query
- **Language:** TypeScript

### Backend
- **Framework:** FastAPI (Python)
- **GPU Support:** CUDA/PyTorch
- **Models:** Diffusers, Transformers, Riffusion
- **Audio Processing:** Librosa, pydub, Demucs
- **Video Processing:** OpenCV, FFmpeg
- **Database:** PostgreSQL + SQLAlchemy

### Desktop
- **Framework:** Electron
- **UI:** React

---

## 📦 Prerequisites

Before you begin, ensure you have installed:

### Required
- **Python 3.9+** - [Download](https://www.python.org/downloads/)
- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Optional but Recommended
- **CUDA 11.8+** - For GPU acceleration (NVIDIA GPUs only)
- **FFmpeg** - For video/audio processing
  - **Windows:** `choco install ffmpeg` (requires Chocolatey)
  - **macOS:** `brew install ffmpeg`
  - **Linux:** `sudo apt-get install ffmpeg`

### Hardware Recommendations
- **RAM:** 8GB minimum, 16GB recommended
- **GPU:** NVIDIA GPU with CUDA support (optional but faster)
- **Disk Space:** 20GB for models and outputs

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Brrrreskvaa-stack/Rifusion-ai-.git
cd Rifusion-ai-
```

### 2. Setup Backend

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
```

**Edit `.env` file if needed:**
```
DEBUG=True
DEVICE=cuda  # or 'cpu' if no GPU
HOST=0.0.0.0
PORT=8000
```

### 3. Setup Frontend

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.local.example .env.local
```

**Edit `.env.local` if needed:**
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=Riffusion
```

---

## 🏃 Running Locally

### Start Backend Server

Open a terminal in the `backend` folder:

```bash
# Make sure virtual environment is activated
source venv/bin/activate  # macOS/Linux
# or
venv\Scripts\activate     # Windows

# Run the server
python app/main.py
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Application startup complete
```

### Start Frontend Development Server

Open a **new terminal** in the `frontend` folder:

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.0.0
- Local:        http://localhost:3000
```

### Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs (Swagger UI)

---

## 📚 API Documentation

### Health Check

```bash
GET /api/health
```

Response:
```json
{
  "status": "healthy"
}
```

### Music Generation

```bash
POST /api/music/generate
```

Request body:
```json
{
  "prompt": "upbeat electronic dance music",
  "duration": 10,
  "num_inference_steps": 50,
  "guidance_scale": 7.5
}
```

### Audio Remix

```bash
POST /api/music/remix
```

Multipart form data:
- `file`: Audio file (WAV, MP3)
- `prompt`: Text description
- `denoising`: 0.0-1.0 (default: 0.75)

### Audio Stem Separation

```bash
POST /api/music/split
```

Multipart form data:
- `file`: Audio file (WAV, MP3)

### Image Generation

```bash
POST /api/image/generate
```

Request body:
```json
{
  "prompt": "a beautiful sunset over mountains",
  "num_inference_steps": 50,
  "guidance_scale": 7.5,
  "width": 512,
  "height": 512,
  "num_images": 1
}
```

### Video Generation

```bash
POST /api/video/generate
```

Request body:
```json
{
  "prompt": "a cat playing with a ball",
  "duration": 10,
  "fps": 24,
  "width": 1280,
  "height": 720
}
```

For full API documentation, visit: **http://localhost:8000/docs**

---

## 📁 Project Structure

```
Rifusion-ai-/
├── frontend/                 # Next.js React application
│   ├── src/
│   │   ├── pages/           # Next.js pages
│   │   ├── components/      # React components
│   │   ├── styles/          # CSS styles
│   │   └── utils/           # Utility functions
│   ├── public/              # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── next.config.js
│
├── backend/                  # FastAPI Python application
│   ├── app/
│   │   ├── routes/          # API endpoints
│   │   ├── models/          # Pydantic models
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helper functions
│   │   └── main.py          # FastAPI app
│   ├── requirements.txt      # Python dependencies
│   ├── .env.example
│   └── README.md
│
├── desktop/                  # Electron desktop app
│   ├── src/
│   ├── package.json
│   └── main.js
│
├── .gitignore
├── .env.example
├── LICENSE
├── CONTRIBUTING.md
└── README.md
```

---

## 🔧 Development

### Running Tests

Backend:
```bash
cd backend
pytest
```

Frontend:
```bash
cd frontend
npm test
```

### Building for Production

Backend:
```bash
cd backend
# Run with production settings
python app/main.py
```

Frontend:
```bash
cd frontend
npm run build
npm start
```

### Code Quality

Python (linting & formatting):
```bash
cd backend
pip install black flake8
black app/
flake8 app/
```

JavaScript (linting & formatting):
```bash
cd frontend
npm install --save-dev eslint prettier
npm run lint
npm run format
```

---

## 🐛 Troubleshooting

### Backend won't start

**Issue:** `ModuleNotFoundError: No module named 'fastapi'`

**Solution:**
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

### Frontend won't start

**Issue:** `npm: command not found`

**Solution:**
- Download and install Node.js from https://nodejs.org/
- Restart your terminal/IDE

### CUDA/GPU not detected

**Issue:** Backend using CPU instead of GPU

**Solution:**
1. Install NVIDIA drivers
2. Install CUDA 11.8+
3. Update `.env`: `DEVICE=cuda`
4. Restart backend

### Port already in use

**Issue:** `Address already in use`

**Solution:**
```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :8000   # Windows (then taskkill)

# Or change port in .env
PORT=8001
```

---

## 📖 Documentation

- [Contributing Guidelines](./CONTRIBUTING.md)
- [License](./LICENSE)

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### Quick Start
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

---

## 🌟 Support

- 📧 **Email:** support@riffusion.dev
- 🐛 **Issues:** [GitHub Issues](https://github.com/Brrrreskvaa-stack/Rifusion-ai-/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/Brrrreskvaa-stack/Rifusion-ai-/discussions)

---

## 🎉 Acknowledgments

- Inspired by the original [Riffusion](https://www.riffusion.com/) project
- Built with [FastAPI](https://fastapi.tiangolo.com/), [Next.js](https://nextjs.org/), and [Hugging Face](https://huggingface.co/)

---

**Made with ❤️ by the Riffusion community**
