import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import ReactGame1 from '../assets/ReactGame1.png';
import ReactGame2 from '../assets/ReactGame2.png';
import ReactGame3 from '../assets/ReactGame3.png';
import ReactGame4 from '../assets/ReactGame4.png';
import FTU1 from '../assets/FTU1.png';
import FTU2 from '../assets/FTU2.png';
import FTU3 from '../assets/FTU3.png';
import FTU4 from '../assets/FTU4.png';
import PG1 from '../assets/PG1.png';
import PG2 from '../assets/PG2.png';
import LW1 from '../assets/LW1.png';
import LW2 from '../assets/LW2.png';
import LW3 from '../assets/LW3.png';
import WA0 from '../assets/WA0.png';
import WA1 from '../assets/WA1.png';
import WA2 from '../assets/WA2.png';
import WA3 from '../assets/WA3.png';
import PF1 from '../assets/PF1.png';
import PF2 from '../assets/PF2.png';
import PF3 from '../assets/PF3.png';
import PF4 from '../assets/PF4.png';
import PF5 from '../assets/PF5.png';
import TD1 from '../assets/TD1.png';
import TD2 from '../assets/TD2.png';
import VAST1 from '../assets/VAST1.png';
import VAST2 from '../assets/VAST2.png';
import VAST3 from '../assets/VAST3.png';
import VM0 from '../assets/VM0.png';
import VM1 from '../assets/VM1.png';
import VM2 from '../assets/VM2.png';
import VM3 from '../assets/VM3.png';
import VM4 from '../assets/VM4.png';
import RJ1 from '../assets/RJ1.png';
import RJ2 from '../assets/RJ2.png';
import RJ3 from '../assets/RJ3.png';
import CC1 from '../assets/CC1.png';
import CC2 from '../assets/CC2.png';
import CC3 from '../assets/CC3.png';
import CC4 from '../assets/CC4.png';
import CC5 from '../assets/CC5.png';



const projects = [
    {
        id: "0",
        name: "CodeCloset",
        shortDesc:
            "A personal portfolio web app built with React and Tailwind CSS that showcases all coding projects in an organized, interactive layout.",
        longDesc:
            "Code Closet is a modern React-based project showcase that serves as a digital portfolio. It organizes and displays multiple personal projects with detailed information such as features, setup instructions, and technologies used. With smooth navigation, responsive design, and a clean UI powered by Tailwind CSS, it provides an elegant and engaging way to explore my development work.",
        tags: ["React", "Tailwind", "Vite"],
        github: "https://github.com/ShardulDhiwar/CodeCloset",
        live: "https://code-closet.vercel.app",
        images: [CC1,CC2,CC3,CC4,CC5],
        features: [
            "🗂️ Showcase multiple coding projects with detailed info pages",
            "🏠 Home and About pages with smooth navigation",
            "🎨 Tailwind CSS for responsive modern UI",
            "⚡ Built with React + Vite for fast performance",
            "🌐 Hosted live on Vercel",
        ],
        structure: `
your-react-app/
├── src/
│   ├── components/      # Navbar, Footer, ProjectCard
│   ├── pages/           # Home, Closet, About, ProjectInfo
│   ├── data/            # projects.js with all project data
│   ├── App.jsx          # Routing setup
│   ├── main.jsx         # ReactDOM root
│   └── index.css        # Tailwind base styles
├── package.json
├── vite.config.js
└── tailwind.config.js
  `,
        setup: [
            "Clone the repository using git clone https://github.com/ShardulDhiwar/CodeCloset.git",
            "Navigate into the project folder (cd CodeCloset)",
            "Install dependencies using npm install",
            "Start the development server using npm run dev",
            "Access the app at http://localhost:5173",
        ],
        usage: [
            "Visit the Home page to get an overview",
            "Open the Closet page to browse all projects",
            "Click on any project to view its details",
            "Use the About page to learn more about the developer",
        ],
        technologies: ["React ⚛️", "Tailwind CSS 🎨", "React Router 🌐", "Vite ⚡", "Vercel 🚀"],
    },

    {
        id: "1",
        name: "ChatME",
        shortDesc:
            "A simple real-time chat application built with React and Socket.IO that lets users create and join chat rooms instantly.",
        longDesc:
            "ChatME is a real-time chat application that enables users to create and join chat rooms with ease. Built using React for the frontend and Socket.IO for real-time communication, it delivers smooth, instant messaging without any database dependency. The app features a clean UI, username-based chats, and shareable room links — making it ideal for quick, temporary group conversations.",
        tags: ["React", "Socket.IO", "Node.js", "Express"],
        github: "https://github.com/ShardulDhiwar/ChatME",
        live: "https://chat-me-omega.vercel.app/",
        images: [img1, img2],
        features: [
            "Create unique chat rooms with shareable links",
            "Real-time messaging using Socket.IO",
            "No database required — messages are not persisted",
            "Clean and modern UI",
            "Username-based chat system",
        ],
        structure: `
chat-app/
├── frontend/           # React frontend
│   ├── src/
│   │   ├── pages/     # React components
│   │   ├── App.js     # Main App component
│   │   └── index.js   # Entry point
│   └── package.json   # Frontend dependencies
└── backend/           # Node.js backend
    ├── server.js      # Socket.IO server
    └── package.json   # Backend dependencies
  `,
        setup: {
            backend: [
                "cd backend",
                "npm install",
                "npm start",
                "Server runs on http://localhost:3001",
            ],
            frontend: [
                "cd frontend",
                "npm install",
                "npm start",
                "Frontend runs on http://localhost:3000",
            ],
        },
        usage: [
            "Open the live demo at https://chat-me-omega.vercel.app/ or run locally on http://localhost:3000",
            "Click 'Create New Room' to generate a new chat room",
            "Share the room URL with others to chat together",
            "Enter your username when joining a room",
            "Start chatting instantly!",
        ],
        technologies: [
            "React ⚛️",
            "Socket.IO 🔌",
            "React Router 🌐",
            "Node.js 💻",
            "Express 🚀",
        ],
    },
    {
        id: "2",
        name: "ReactGameHub",
        shortDesc:
            "A mini game hub with Snake, Tic Tac Toe, and Memory Game built in React.",
        longDesc:
            "ReactGameHub is a fun web-based mini game hub built with React.js and Vite. It brings together three classic games — Snake, Tic Tac Toe, and Memory Game — all inside a smooth, responsive UI styled with Tailwind CSS.",
        tags: ["React", "Tailwind", "Vite"],
        github: "https://github.com/ShardulDhiwar/ReactGameHub",
        live: "https://reacts-game-hub.vercel.app/",
        images: [ReactGame1, ReactGame2, ReactGame3, ReactGame4],
        features: [
            "🐍 Classic Snake Game with keyboard controls",
            "❌⭕ Two-player Tic Tac Toe with win detection",
            "🧠 Memory Game with score tracking",
            "🎨 Responsive UI with Tailwind CSS",
            "⚛️ Built using React + Vite for lightning-fast performance",
        ],
        structure: `
ReactGameHub/
├── public/
├── src/
│   ├── components/         # Game components (SnakeGame, TicTacToe, MemoryGame)
│   ├── assets/             # Images & icons
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json
├── tailwind.config.js
└── vite.config.js
  `,
        setup: [
            "Clone the repository",
            "Run npm install to install dependencies",
            "Start the dev server using npm run dev",
        ],
        usage: [
            "Play fun classic games directly in your browser!",
            "Enjoy Snake, Tic Tac Toe, and Memory Game — all in one place!",
        ],
        technologies: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    {
        id: "3",
        name: "FixTheUI",
        shortDesc:
            "A UI improvement project focused on responsive, accessible, and modern layouts.",
        longDesc:
            "FixTheUI refines, revamps, and elevates user interfaces for better usability and visual polish. It focuses on improving existing UI components and layouts — enhancing responsiveness, accessibility, and code structure for a modern feel.",
        tags: ["React", "Tailwind", "Vite"],
        github: "https://github.com/ShardulDhiwar/FixTheUI",
        live: "https://fix-the-ui.vercel.app/",
        images: [FTU1, FTU2, FTU3, FTU4],
        features: [
            "🎨 Modern responsive UI redesigns",
            "📱 Fully mobile-friendly layout",
            "🧩 Clean and maintainable component structure",
            "🔧 Code improvements for readability and maintainability",
            "🚀 Live demo hosted on Vercel",
        ],
        structure: `
FixTheUI/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── styles/
│   └── App.jsx
├── tailwind.config.js
└── vite.config.js
  `,
        setup: {
            frontend: [
                "Clone the repository",
                "Navigate to the project folder",
                "Run npm install to install dependencies",
                "Start the development server using npm run dev",
            ],
        },
        usage: [
            "Open the live demo or run it locally.",
            "Explore the redesigned and responsive UI components.",
            "Check cross-device compatibility and responsiveness.",
        ],
        technologies: [
            "React.js ⚛️",
            "Tailwind CSS 💨",
            "HTML 🧩",
            "JavaScript (ES6+) 💻",
            "Vite ⚡",
            "ESLint 🧠",
            "Vercel 🚀",
        ],
    },

    {
        id: "4",
        name: "Password Generator App",
        shortDesc:
            "A simple and secure password generator built with React and Tailwind CSS.",
        longDesc:
            "The Password Generator App lets users instantly create strong, random passwords. It offers customization options for length, numbers, and symbols — and a one-click copy feature. Designed to be lightweight, fast, and responsive.",
        tags: ["React", "Tailwind", "JavaScript"],
        github: "https://github.com/ShardulDhiwar/password-generator",
        live: "https://password-generator-shardul.vercel.app/",
        images: [PG1, PG2],
        features: [
            "✅ Generate random passwords instantly",
            "🧩 Customize password length (10–30)",
            "🔢 Include numbers and symbols",
            "📋 One-click copy to clipboard",
            "🎨 Clean and minimal Tailwind UI",
        ],
        structure: `
PasswordGenerator/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── tailwind.config.js
  `,
        setup: {
            frontend: [
                "Clone the repository",
                "Run npm install to install dependencies",
                "Start the development server using npm run dev",
                "Visit http://localhost:5173 to view the app",
            ],
        },
        usage: [
            "Open the app in your browser.",
            "Choose password length and toggle symbol/number options.",
            "Click 'Generate' to create a password.",
            "Copy it with one click!",
        ],
        technologies: ["React.js ⚛️", "Tailwind CSS 💨", "JavaScript (ES6+) 💻"],
    },
    {
        id: "5",
        name: "Laundry Wallah",
        shortDesc:
            "An online laundry booking system with live cost updates, animations, and responsive design.",
        longDesc:
            "Laundry Wallah is a responsive web app that simplifies the process of booking laundry services online. Users can dynamically add or remove items, instantly see total cost updates, and confirm bookings with a personalized message. The app also includes a newsletter subscription feature via EmailJS, animations using AOS, and a smooth hamburger menu for mobile navigation.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ShardulDhiwar/laundry-wallah",
        live: "https://laundry-wallah.vercel.app/",
        images: [LW1, LW2, LW3],
        features: [
            "🧼 Dynamic service selection with live total updates",
            "💰 Automatic cart calculation",
            "📩 Booking confirmation message",
            "📨 Newsletter subscription using EmailJS",
            "📱 Fully responsive design for all devices",
            "🍔 Animated hamburger navigation",
            "✨ AOS scroll-based animations for UI effects",
        ],
        structure: `
Laundry-Wallah/
├── index.html
├── style.css
├── script.js
├── /assets
│   ├── images/
│   └── icons/
└── README.md
  `,
        setup: {
            frontend: [
                "Clone the repository using git clone https://github.com/ShardulDhiwar/laundry-wallah.git",
                "Navigate to the project folder using cd laundry-wallah",
                "Open index.html in your browser to run the app",
            ],
        },
        usage: [
            "Open the site and choose laundry services you want.",
            "Add or remove items — watch the total update in real-time.",
            "Confirm your booking and subscribe to the newsletter if you wish.",
        ],
        technologies: [
            "HTML 🧩",
            "CSS 🎨",
            "JavaScript 💻",
            "AOS ✨",
            "EmailJS 📩",
            "Ionicons 🔆",
        ],
    },

    {
        id: "6",
        name: "Weather App",
        shortDesc:
            "A responsive web app to view live weather conditions, forecasts, and AQI using the OpenWeatherMap API.",
        longDesc:
            "The Weather App provides real-time weather data and 7-day forecasts for any city worldwide. It features an intuitive UI, includes air quality index (AQI) data, and allows users to switch between current and forecast modes. Built with HTML, CSS, and JavaScript — powered by the OpenWeatherMap API and Webpack for bundling.",
        tags: ["JavaScript", "API", "Weather", "OpenWeatherMap"],
        github: "https://github.com/ShardulDhiwar/weather-app",
        live: "https://weather-app-shardul.vercel.app/",
        images: [WA0, WA3, WA1, WA2],
        features: [
            "🌍 Search weather by city name",
            "🔁 Toggle between current weather and 7-day forecast",
            "🌬️ Display air quality index, humidity, and wind speed",
            "📱 Responsive user interface",
            "🔒 Secure API key management using dotenv",
        ],
        structure: `
Weather-App/
├── public/
│   └── index.html
├── src/
│   ├── js/
│   ├── styles/
│   ├── index.js
│   └── api.js
├── .env
├── webpack.config.js
├── package.json
└── README.md
  `,
        setup: {
            frontend: [
                "Clone the repository using git clone https://github.com/ShardulDhiwar/weather-app.git",
                "Navigate to the folder using cd weather-app",
                "Create a .env file and add your OpenWeatherMap API key",
                "Install dependencies using npm install",
                "Run the app using npm start",
            ],
        },
        usage: [
            "Search for a city to view current weather details.",
            "Toggle between current weather and 7-day forecast.",
            "Check air quality, humidity, and wind speed data.",
        ],
        technologies: [
            "HTML 🌐",
            "CSS 🎨",
            "JavaScript (ES6+) 💻",
            "Webpack ⚙️",
            "OpenWeatherMap API ☁️",
            "dotenv-webpack 🔒",
        ],
    },
    {
        id: "7",
        name: "Portfolio Website",
        shortDesc:
            "A personal portfolio website showcasing projects, skills, and contact details — built with HTML, CSS, and JavaScript.",
        longDesc:
            "Shardul Dhiwar’s Portfolio is a personal website highlighting my development journey, featured projects, and professional skills. It has a clean and minimal UI, responsive layout, and easy navigation. Hosted on GitHub Pages, this portfolio serves as both a resume and an interactive showcase of my work.",
        tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
        github: "https://github.com/ShardulDhiwar/Portfolio",
        live: "https://sharduldhiwar.github.io/Portfolio/",
        images: [PF1, PF2, PF3, PF4, PF5],
        features: [
            "✨ Clean and responsive design",
            "📱 Mobile-friendly layout",
            "🧩 Project showcase section with detailed previews",
            "📬 Contact section with email and social links",
            "🌐 Hosted on GitHub Pages",
        ],
        structure: `
Portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
  `,
        setup: {
            frontend: [
                "Clone the repository using git clone https://github.com/ShardulDhiwar/Portfolio.git",
                "Navigate to the project folder using cd Portfolio",
                "Open index.html directly in your browser to view the site",
            ],
        },
        usage: [
            "Visit the live site or open index.html locally.",
            "Scroll through the homepage to explore projects and skills.",
            "Use the contact section to reach out or view social profiles.",
        ],
        technologies: [
            "HTML5 🌐",
            "CSS3 🎨",
            "JavaScript 💻",
            "GitHub Pages 🚀",
        ],
    },
    {
        id: "8",
        name: "Simple To-Do Web App",
        shortDesc:
            "A clean and responsive to-do list app built with HTML, CSS, and JavaScript — organize daily, weekly, and monthly tasks.",
        longDesc:
            "Simple To-Do Web App is a lightweight task manager built entirely with frontend technologies. It lets users add, complete, and delete tasks divided into three sections — Today, This Week, and This Month. The app is fully responsive and runs directly in the browser without any backend.",
        tags: ["HTML", "CSS", "JavaScript", "To-Do App"],
        github: "https://github.com/ShardulDhiwar/todo-web-app",
        live: "https://todo-web-app-shardul.vercel.app/",
        images: [TD1, TD2],
        features: [
            "📝 Add new tasks to Today, Week, or Month sections",
            "✅ Mark tasks as completed with visual distinction",
            "❌ Delete tasks when no longer needed",
            "🎨 Simple, clean, and user-friendly interface",
            "📱 Fully responsive across devices",
            "⚡ Fast and lightweight — runs entirely in the browser",
        ],
        structure: `
todo-web-app/
├── index.html       # Main HTML file
├── styles.css       # App styling
└── script.js        # JavaScript for task management
  `,
        setup: {
            frontend: [
                "Clone the repository using git clone https://github.com/ShardulDhiwar/todo-web-app.git",
                "Navigate into the folder using cd todo-web-app",
                "Open index.html directly in your browser to start using the app",
            ],
        },
        usage: [
            "Open the app in your browser.",
            "Add tasks under Today, This Week, or This Month categories.",
            "Mark completed tasks or delete them when done.",
        ],
        technologies: [
            "HTML5 🌐",
            "CSS3 🎨",
            "JavaScript (ES6) 💻",
        ],
    },

    {
        id: "9",
        name: "VAST - Mental Health Chatbot",
        shortDesc:
            "A full-stack mental health chatbot built with Flask, Dialogflow, and PostgreSQL that provides conversational support to users.",
        longDesc:
            "VAST is a mental health chatbot web application designed to provide emotional support and resources through AI-driven conversations. Built with Flask for the backend, Dialogflow for natural language understanding, and PostgreSQL for database management, it offers a secure user authentication system and intelligent dialogue handling. The project demonstrates an integration of cloud AI with web backend technologies for a meaningful real-world use case.",
        tags: ["Flask", "Dialogflow", "PostgreSQL", "Python"],
        github: "https://github.com/ShardulDhiwar/mental-health-chatbot",
        live: "#",
        images: [VAST1, VAST2, VAST3],
        features: [
            "🧠 AI-driven chatbot powered by Google Dialogflow",
            "🔐 User authentication with secure password storage (Flask-Bcrypt)",
            "💬 RESTful chat API with Flask",
            "🗃️ PostgreSQL database integration for user management",
            "🧩 JSON-based intent loading and import capability",
            "🔑 Google Cloud service account integration for Dialogflow access",
            "⚙️ Flask-Login session handling",
        ],
        structure: `
mental-health-chatbot/
├── app.py                        # Flask backend
├── structured_mental_health.json # Dialogflow intent data
├── vast-ytfa-36b7391b4430.json   # Google Cloud service account key
├── templates/
│   ├── login.html
│   └── signup.html
├── requirements.txt
└── README.md
  `,
        setup: {
            backend: [
                "Clone the repository using git clone https://github.com/ShardulDhiwar/mental-health-chatbot.git",
                "Navigate into the folder using cd mental-health-chatbot",
                "Set up a virtual environment (python -m venv venv && source venv/bin/activate)",
                "Install dependencies using pip install -r requirements.txt",
                "Configure PostgreSQL database and update credentials in app.py",
                "Enable Google Dialogflow API and export credentials with service account key",
            ],
        },
        usage: [
            "Run the app using python app.py",
            "Visit http://localhost:5000 to access the chatbot interface",
            "Sign up or log in to start chatting with the AI bot",
            "Ask mental health-related questions and get empathetic responses",
        ],
        technologies: [
            "Python 🐍",
            "Flask ⚙️",
            "PostgreSQL 🗃️",
            "Dialogflow 🤖",
            "Flask-Bcrypt 🔐",
            "Flask-Login 🔑",
            "Google Cloud API ☁️",
        ],
    },
    {
        id: "10",
        name: "Gesture-Controlled Virtual Mouse",
        shortDesc:
            "A Python-based application that lets you control your computer using hand gestures via your webcam, powered by MediaPipe, OpenCV, and Flask.",
        longDesc:
            "Gesture-Controlled Virtual Mouse is an innovative computer vision project that transforms hand gestures into real-time system actions. It uses MediaPipe for hand-tracking, OpenCV for video processing, and Flask for the web interface. With simple hand gestures, users can move the cursor, click, scroll, and even adjust system volume and brightness. This project showcases the integration of AI-based gesture recognition with practical computer control.",
        tags: ["Python", "Flask", "OpenCV", "MediaPipe", "AI"],
        github: "https://github.com/ShardulDhiwar/gesture-controlled-virtual-mouse",
        live: "#",
        images: [VM1, VM0, VM2, VM3, VM4],
        features: [
            "🔁 Control mouse movement using hand gestures",
            "👏 Perform clicks, double-clicks, and right-clicks with specific finger signs",
            "🔊 Adjust system volume and screen brightness using pinch gestures",
            "🌐 Web interface built with Flask, HTML, CSS, and JavaScript",
            "🎥 Real-time gesture recognition using MediaPipe and OpenCV",
            "⚙️ Works cross-platform (Windows/Linux) with webcam access",
        ],
        structure: `
gesture-controlled-virtual-mouse/
├── app.py                 # Flask backend server
├── gesture_control.py     # Core logic for gesture recognition
├── templates/
│   ├── index.html         # Web interface
│   └── layout.html
├── static/
│   ├── style.css
│   └── script.js
├── requirements.txt
└── README.md
  `,
        setup: {
            backend: [
                "Clone the repository using git clone https://github.com/ShardulDhiwar/gesture-controlled-virtual-mouse.git",
                "Navigate into the folder using cd gesture-controlled-virtual-mouse",
                "Install dependencies using pip install -r requirements.txt",
                "Ensure your webcam is enabled and system permissions are granted",
            ],
        },
        usage: [
            "Run the app using python app.py",
            "Open the local server in your browser (http://localhost:5000)",
            "Click 'Start Gesture Control' to begin tracking",
            "Use hand gestures to move the cursor, click, scroll, or adjust system volume/brightness",
        ],
        technologies: [
            "Python 🐍",
            "Flask ⚙️",
            "OpenCV 🎥",
            "MediaPipe ✋",
            "PyAutoGUI 🖱️",
            "PyCaw 🔊",
            "Screen Brightness Control 💡",
            "HTML/CSS/JavaScript 🌐",
        ],
    },
    {
        id: "11",
        name: "ReactJobs",
        shortDesc:
            "A sleek job listing app built with React and Tailwind CSS that lets users browse and filter jobs by category or location.",
        longDesc:
            "ReactJobs is a responsive and fast job listing web app built using React and Tailwind CSS. It displays job openings from a local data source and allows users to filter listings by category, location, or salary range. Designed with simplicity and performance in mind, ReactJobs provides a seamless experience for exploring job opportunities without needing a backend.",
        tags: ["React", "Tailwind", "Vite"],
        github: "https://github.com/ShardulDhiwar/ReactJobs",
        live: "#",
        images: [RJ1, RJ2, RJ3],
        features: [
            "🧩 Dynamic job listings loaded from a local data file",
            "🔍 Filter jobs by category or location",
            "🖥️ Dedicated job detail pages",
            "📱 Responsive and clean UI",
            "⚡ Built using React + Vite",
        ],
        structure: `
ReactJobs/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/       # Reusable components
│   ├── data/             # jobs.js file with listings
│   ├── pages/            # Home and JobDetails pages
│   ├── App.jsx           # Router setup
│   ├── main.jsx          # React root
│   └── index.css         # Tailwind styles
├── package.json
├── tailwind.config.js
└── vite.config.js
  `,
        setup: [
            "Clone the repository",
            "Run npm install to install dependencies",
            "Start the app using npm run dev",
            "Open http://localhost:5173 to view it",
        ],
        usage: [
            "Browse available jobs on the homepage",
            "Use filters to find jobs by location or category",
            "Click any job to view its details",
        ],
        technologies: ["React.js", "Tailwind CSS", "Vite", "JavaScript (ES6+)"],
    },

];

export default projects;
