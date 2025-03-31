import { CapstoneData } from "@/app/page";

export const capstoneProjects: CapstoneData[] = [
  {
    thesisTitle: "E-Voting System",
    shortDescription:
      "A secure online voting system for organizations and schools.",
    category: "Government & Public Service",
    technologyUsed: ["React", "Node.js", "MongoDB", "Blockchain"],
    roles: ["Front-End Developer", "Back-End Developer", "Security Analyst"],
    similarProjects: [{ name: "Voatz", link: "https://voatz.com/" }],
  },
  {
    thesisTitle: "Smart Attendance System",
    shortDescription: "A facial recognition-based attendance system.",
    category: "Education",
    technologyUsed: ["React Native", "Flask", "OpenCV", "Firebase"],
    roles: ["AI Engineer", "Mobile Developer", "Database Administrator"],
    similarProjects: [
      {
        name: "Face Recognition Attendance System",
        link: "https://www.facefirst.com/",
      },
    ],
  },
  {
    thesisTitle: "Milk Tea Shop App",
    shortDescription: "An ordering and delivery app for milk tea businesses.",
    category: "E-Commerce",
    technologyUsed: ["React Native", "Firebase", "GCash API"],
    roles: ["Mobile Developer", "Backend Developer", "UI/UX Designer"],
    similarProjects: [
      { name: "Chatime App", link: "https://www.chatime.com/" },
    ],
  },
  {
    thesisTitle: "Government Service Information Portal",
    shortDescription:
      "A centralized platform for accessing government services.",
    category: "Government & Public Service",
    technologyUsed: ["Next.js", "MongoDB", "Express.js"],
    roles: ["Full-Stack Developer", "UI/UX Designer", "Content Manager"],
    similarProjects: [{ name: "Gov.ph", link: "https://www.gov.ph/" }],
  },
  {
    thesisTitle: "Thesis Title Generator",
    shortDescription:
      "An AI-powered website to generate thesis titles based on user input.",
    category: "Education",
    technologyUsed: ["Next.js", "OpenAI API", "MongoDB"],
    roles: ["AI Engineer", "Full-Stack Developer", "UI/UX Designer"],
    similarProjects: [
      {
        name: "Thesis Title Generator AI",
        link: "https://www.scribbr.com/thesis-title-generator/",
      },
    ],
  },
  {
    thesisTitle: "Hospital Queue Management System",
    shortDescription:
      "A system that manages patient queues in hospitals to reduce waiting times.",
    category: "Healthcare",
    technologyUsed: ["Vue.js", "Django", "PostgreSQL"],
    roles: [
      "Front-End Developer",
      "Back-End Developer",
      "Database Administrator",
    ],
    similarProjects: [{ name: "Qmatic", link: "https://www.qmatic.com/" }],
  },
  {
    thesisTitle: "E-Learning Platform",
    shortDescription:
      "An interactive e-learning platform for students and professionals.",
    category: "Education",
    technologyUsed: ["Next.js", "GraphQL", "Firebase"],
    roles: ["Full-Stack Developer", "UI/UX Designer", "Content Creator"],
    similarProjects: [{ name: "Udemy", link: "https://www.udemy.com/" }],
  },
  {
    thesisTitle: "Smart Home Automation System",
    shortDescription: "A system that automates home devices using IoT.",
    category: "IoT",
    technologyUsed: ["React Native", "Raspberry Pi", "MQTT"],
    roles: ["IoT Engineer", "Mobile Developer", "Hardware Engineer"],
    similarProjects: [
      {
        name: "Google Nest",
        link: "https://store.google.com/product/nest_hub",
      },
    ],
  },
  {
    thesisTitle: "Online Job Portal",
    shortDescription: "A job portal connecting employers with job seekers.",
    category: "Business & Employment",
    technologyUsed: ["Angular", "Spring Boot", "MySQL"],
    roles: ["Full-Stack Developer", "Database Administrator", "UI/UX Designer"],
    similarProjects: [
      { name: "LinkedIn Jobs", link: "https://www.linkedin.com/jobs/" },
    ],
  },
  {
    thesisTitle: "AI-Based Chatbot for Customer Support",
    shortDescription:
      "A chatbot that provides automated customer support using AI.",
    category: "AI & Machine Learning",
    technologyUsed: ["Python", "TensorFlow", "Dialogflow"],
    roles: ["AI Engineer", "Full-Stack Developer", "UI/UX Designer"],
    similarProjects: [
      { name: "IBM Watson Assistant", link: "https://www.ibm.com/watson" },
    ],
  },
  {
    category: "Web Development",
    thesisTitle: "Predictive Healthcare Appointment System",
    shortDescription:
      "A web application that uses machine learning to predict optimal appointment times based on patient history, reducing no-shows and optimizing clinic scheduling.",
    technologyUsed: [
      "React",
      "Node.js",
      "MongoDB",
      "TensorFlow.js",
      "Express.js",
    ],
    similarProjects: [
      {
        name: "PatientPal",
        link: "https://patientpal.io",
      },
      {
        name: "AppointMed",
        link: "https://appointmed.com",
      },
    ],
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "ML Engineer",
      "UX Designer",
      "Project Manager",
    ],
  },
  {
    category: "Mobile App Development",
    thesisTitle: "Community-Based Disaster Response App",
    shortDescription:
      "A mobile application that coordinates local volunteer efforts during natural disasters, connecting those in need with nearby volunteers and resources.",
    technologyUsed: [
      "Flutter",
      "Firebase",
      "Google Maps API",
      "Push Notifications",
      "Kotlin",
    ],
    similarProjects: [
      {
        name: "Zello",
        link: "https://zello.com",
      },
      {
        name: "Crisis Cleanup",
        link: "https://crisiscleanup.org",
      },
    ],
    roles: [
      "Mobile Developer",
      "Backend Developer",
      "UX/UI Designer",
      "GIS Specialist",
      "Community Manager",
    ],
  },
  {
    category: "Artificial Intelligence",
    thesisTitle: "Personalized Educational Content Generator",
    shortDescription:
      "An AI system that generates customized educational materials based on individual student learning styles, progress, and areas of difficulty.",
    technologyUsed: ["Python", "PyTorch", "GPT-4", "Flask", "MongoDB"],
    similarProjects: [
      {
        name: "Knewton",
        link: "https://www.knewton.com",
      },
      {
        name: "Carnegie Learning",
        link: "https://www.carnegielearning.com",
      },
    ],
    roles: [
      "AI Researcher",
      "ML Engineer",
      "Education Specialist",
      "Backend Developer",
      "Data Scientist",
    ],
  },
  {
    category: "Data Science",
    thesisTitle: "Urban Transportation Flow Optimization",
    shortDescription:
      "A data analytics platform that predicts traffic patterns and suggests dynamic routing for public transportation to reduce congestion and commute times.",
    technologyUsed: [
      "Python",
      "R",
      "Apache Spark",
      "Tableau",
      "PostgreSQL",
      "QGIS",
    ],
    similarProjects: [
      {
        name: "Moovit",
        link: "https://moovit.com",
      },
      {
        name: "UrbanFlow",
        link: "https://urbanflow.io",
      },
    ],
    roles: [
      "Data Scientist",
      "Transportation Planner",
      "Backend Developer",
      "GIS Specialist",
      "Data Visualization Expert",
    ],
  },
  {
    category: "IoT",
    thesisTitle: "Smart Agricultural Monitoring System",
    shortDescription:
      "An IoT-based system that collects soil, climate, and plant growth data to provide farmers with actionable insights for optimal crop management.",
    technologyUsed: [
      "Arduino",
      "Raspberry Pi",
      "MQTT",
      "LoRaWAN",
      "Node.js",
      "React",
    ],
    similarProjects: [
      {
        name: "FarmBeats",
        link: "https://www.microsoft.com/en-us/research/project/farmbeats-iot-agriculture",
      },
      {
        name: "The Yield",
        link: "https://www.theyield.com",
      },
    ],
    roles: [
      "IoT Hardware Engineer",
      "Backend Developer",
      "Frontend Developer",
      "Agricultural Specialist",
      "Data Analyst",
    ],
  },
  {
    category: "Blockchain",
    thesisTitle: "Decentralized Medical Records System",
    shortDescription:
      "A blockchain-based platform allowing secure sharing of medical records between healthcare providers while giving patients control over their health data.",
    technologyUsed: ["Ethereum", "Solidity", "IPFS", "React", "Node.js"],
    similarProjects: [
      {
        name: "MedRec",
        link: "https://medrec.media.mit.edu",
      },
      {
        name: "Patientory",
        link: "https://patientory.com",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Smart Contract Engineer",
      "Full Stack Developer",
      "Healthcare Specialist",
      "Security Expert",
    ],
  },
  {
    category: "Cybersecurity",
    thesisTitle: "Advanced Phishing Detection Framework",
    shortDescription:
      "A multi-layered security system that combines machine learning, behavioral analysis, and visual recognition to detect sophisticated phishing attempts.",
    technologyUsed: [
      "Python",
      "TensorFlow",
      "Django",
      "Docker",
      "MongoDB",
      "Natural Language Processing",
    ],
    similarProjects: [
      {
        name: "PhishTank",
        link: "https://phishtank.org",
      },
      {
        name: "Cofense",
        link: "https://cofense.com",
      },
    ],
    roles: [
      "Security Researcher",
      "Machine Learning Engineer",
      "Backend Developer",
      "Security Analyst",
      "UI/UX Designer",
    ],
  },
  {
    category: "Augmented Reality",
    thesisTitle: "AR-Enhanced Surgical Training System",
    shortDescription:
      "An augmented reality application that overlays anatomical information and procedural guidance during surgical training simulations.",
    technologyUsed: [
      "Unity",
      "ARCore",
      "C#",
      "3D Modeling",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Microsoft HoloLens for Surgery",
        link: "https://www.microsoft.com/en-us/hololens",
      },
      {
        name: "Proximie",
        link: "https://www.proximie.com",
      },
    ],
    roles: [
      "AR Developer",
      "3D Modeler",
      "Medical Consultant",
      "UI/UX Designer",
      "Software Engineer",
    ],
  },
  {
    category: "Environmental Technology",
    thesisTitle: "AI-Powered Waste Sorting System",
    shortDescription:
      "An automated waste management system using computer vision and robotics to identify, sort, and process recyclable materials more efficiently than manual methods.",
    technologyUsed: [
      "Computer Vision",
      "Python",
      "TensorFlow",
      "Robotics",
      "ROS",
      "Arduino",
    ],
    similarProjects: [
      {
        name: "CleanRobotics",
        link: "https://cleanrobotics.com",
      },
      {
        name: "AMP Robotics",
        link: "https://www.amprobotics.com",
      },
    ],
    roles: [
      "Computer Vision Engineer",
      "Robotics Engineer",
      "Environmental Scientist",
      "Software Developer",
      "Hardware Engineer",
    ],
  },
  {
    category: "Fintech",
    thesisTitle: "Microfinance Blockchain Platform for Underserved Communities",
    shortDescription:
      "A blockchain-based microfinance platform enabling peer-to-peer lending in underbanked communities with smart contracts for loan terms and repayments.",
    technologyUsed: [
      "Ethereum",
      "Solidity",
      "React",
      "Node.js",
      "MongoDB",
      "Mobile Development",
    ],
    similarProjects: [
      {
        name: "Kiva Protocol",
        link: "https://www.kiva.org/protocol",
      },
      {
        name: "BitPesa",
        link: "https://bitpesa.co",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Financial Systems Analyst",
      "Full Stack Developer",
      "Community Outreach Coordinator",
      "Security Specialist",
    ],
  },
  {
    category: "Game Development",
    thesisTitle: "Adaptive Difficulty AI for Educational Games",
    shortDescription:
      "A game engine that dynamically adjusts difficulty based on player performance to maintain engagement while ensuring optimal learning outcomes.",
    technologyUsed: [
      "Unity",
      "C#",
      "Python",
      "Machine Learning",
      "Educational Psychology",
    ],
    similarProjects: [
      {
        name: "DreamBox Learning",
        link: "https://www.dreambox.com",
      },
      {
        name: "Adaptemy",
        link: "https://www.adaptemy.com",
      },
    ],
    roles: [
      "Game Developer",
      "AI Engineer",
      "Educational Game Designer",
      "Child Psychology Consultant",
      "UI/UX Designer",
    ],
  },
  {
    category: "Sustainable Energy",
    thesisTitle: "Peer-to-Peer Renewable Energy Trading Platform",
    shortDescription:
      "A platform enabling homeowners with solar panels to sell excess electricity directly to neighbors, creating a localized energy marketplace.",
    technologyUsed: [
      "Blockchain",
      "IoT",
      "Smart Contracts",
      "React",
      "Node.js",
      "Time Series Databases",
    ],
    similarProjects: [
      {
        name: "Power Ledger",
        link: "https://www.powerledger.io",
      },
      {
        name: "Brooklyn Microgrid",
        link: "https://www.brooklyn.energy",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Energy Systems Engineer",
      "IoT Developer",
      "Full Stack Developer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Natural Language Processing",
    thesisTitle: "Cultural Context-Aware Translation System",
    shortDescription:
      "A translation platform that preserves cultural nuances and context across languages, particularly for idioms, humor, and culturally-specific references.",
    technologyUsed: [
      "Python",
      "Transformer Models",
      "TensorFlow",
      "BERT",
      "Flask",
      "React",
    ],
    similarProjects: [
      {
        name: "Idiom Savant",
        link: "https://idiomsavant.com",
      },
      {
        name: "DeepL",
        link: "https://www.deepl.com",
      },
    ],
    roles: [
      "NLP Researcher",
      "Machine Learning Engineer",
      "Linguist",
      "Full Stack Developer",
      "Cultural Consultant",
    ],
  },
  {
    category: "Healthcare",
    thesisTitle: "Remote Patient Monitoring for Chronic Conditions",
    shortDescription:
      "A comprehensive system combining wearable devices, mobile apps, and AI analytics to monitor patients with chronic diseases and alert healthcare providers of concerning trends.",
    technologyUsed: [
      "IoT",
      "Machine Learning",
      "React Native",
      "Node.js",
      "MongoDB",
      "WebRTC",
    ],
    similarProjects: [
      {
        name: "Livongo",
        link: "https://www.livongo.com",
      },
      {
        name: "Propeller Health",
        link: "https://www.propellerhealth.com",
      },
    ],
    roles: [
      "Medical IoT Developer",
      "Mobile Developer",
      "Healthcare Data Analyst",
      "UI/UX Designer",
      "Medical Consultant",
    ],
  },
  {
    category: "Virtual Reality",
    thesisTitle: "Virtual Rehabilitation Environment for Stroke Patients",
    shortDescription:
      "A VR system providing gamified physical therapy exercises that track patient movements and adapt difficulty based on progress for stroke rehabilitation.",
    technologyUsed: [
      "Unity",
      "VR Development",
      "Motion Tracking",
      "C#",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Neuro Rehab VR",
        link: "https://www.neurorehabvr.com",
      },
      {
        name: "MindMaze",
        link: "https://www.mindmaze.com",
      },
    ],
    roles: [
      "VR Developer",
      "Physical Therapy Consultant",
      "Game Designer",
      "3D Modeler",
      "Medical Researcher",
    ],
  },
  {
    category: "Robotics",
    thesisTitle: "Companion Robot for Elderly Care",
    shortDescription:
      "A social robot designed to assist elderly individuals with daily tasks, medication reminders, and provide companionship through natural conversation.",
    technologyUsed: [
      "ROS",
      "Python",
      "Natural Language Processing",
      "Computer Vision",
      "3D Printing",
      "Arduino",
    ],
    similarProjects: [
      {
        name: "ElliQ",
        link: "https://elliq.com",
      },
      {
        name: "Care.Coach",
        link: "https://care.coach",
      },
    ],
    roles: [
      "Robotics Engineer",
      "Gerontology Specialist",
      "NLP Developer",
      "Hardware Engineer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Computer Vision",
    thesisTitle: "Real-time Sign Language Translation System",
    shortDescription:
      "A computer vision application that recognizes sign language gestures in real-time and translates them to text and speech for two-way communication.",
    technologyUsed: [
      "OpenCV",
      "TensorFlow",
      "Python",
      "React Native",
      "WebRTC",
      "GCP",
    ],
    similarProjects: [
      {
        name: "SignAll",
        link: "https://www.signall.us",
      },
      {
        name: "Signapse",
        link: "https://www.signapse.ai",
      },
    ],
    roles: [
      "Computer Vision Engineer",
      "Machine Learning Specialist",
      "Mobile Developer",
      "Sign Language Expert",
      "UI/UX Designer",
    ],
  },
  {
    category: "Smart Cities",
    thesisTitle: "Intelligent Urban Water Management System",
    shortDescription:
      "A network of IoT sensors and predictive analytics to monitor water quality, detect leaks, and optimize distribution in urban water systems.",
    technologyUsed: [
      "IoT",
      "LoRaWAN",
      "Time Series Databases",
      "Python",
      "Machine Learning",
      "GIS",
    ],
    similarProjects: [
      {
        name: "Smart Water Networks",
        link: "https://www.swan-forum.com",
      },
      {
        name: "Water Smart",
        link: "https://watersmartsoft.com",
      },
    ],
    roles: [
      "IoT Engineer",
      "Data Scientist",
      "Civil Engineer",
      "Backend Developer",
      "GIS Specialist",
    ],
  },
  {
    category: "E-commerce",
    thesisTitle: "Sustainable Product Recommendation Engine",
    shortDescription:
      "An e-commerce platform that highlights sustainable and ethical products based on verified environmental impact data and personalized user preferences.",
    technologyUsed: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Recommendation Algorithms",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Good On You",
        link: "https://goodonyou.eco",
      },
      {
        name: "DoneGood",
        link: "https://donegood.co",
      },
    ],
    roles: [
      "Full Stack Developer",
      "Data Scientist",
      "Sustainability Researcher",
      "UX Designer",
      "E-commerce Specialist",
    ],
  },
  {
    category: "Social Impact",
    thesisTitle: "Accessible Navigation for Visually Impaired Users",
    shortDescription:
      "A mobile application providing detailed audio navigation guidance for visually impaired individuals in urban environments, including indoors.",
    technologyUsed: [
      "React Native",
      "Bluetooth Beacons",
      "ARKit/ARCore",
      "Text-to-Speech",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Lazarillo",
        link: "https://www.lazarillo.app",
      },
      {
        name: "BlindSquare",
        link: "https://www.blindsquare.com",
      },
    ],
    roles: [
      "Mobile Developer",
      "Accessibility Specialist",
      "UX Researcher",
      "IoT Engineer",
      "Backend Developer",
    ],
  },
  {
    category: "Education Technology",
    thesisTitle: "Collaborative Virtual Science Laboratory",
    shortDescription:
      "A virtual reality platform allowing students to collaboratively conduct science experiments in a simulated laboratory environment with realistic physics.",
    technologyUsed: [
      "Unity",
      "VR Development",
      "Physics Simulation",
      "WebRTC",
      "Node.js",
      "MongoDB",
    ],
    similarProjects: [
      {
        name: "Labster",
        link: "https://www.labster.com",
      },
      {
        name: "Beyond Labz",
        link: "https://www.beyondlabz.com",
      },
    ],
    roles: [
      "VR Developer",
      "Science Education Specialist",
      "3D Modeler",
      "Physics Programmer",
      "Backend Developer",
    ],
  },
  {
    category: "Cloud Computing",
    thesisTitle: "Multi-Cloud Resource Optimization Platform",
    shortDescription:
      "A management tool that analyzes usage patterns across multiple cloud providers to automatically optimize resource allocation and reduce costs.",
    technologyUsed: [
      "Python",
      "Kubernetes",
      "Terraform",
      "AWS/Azure/GCP APIs",
      "React",
      "Node.js",
    ],
    similarProjects: [
      {
        name: "CloudHealth",
        link: "https://www.cloudhealthtech.com",
      },
      {
        name: "Densify",
        link: "https://www.densify.com",
      },
    ],
    roles: [
      "Cloud Architect",
      "DevOps Engineer",
      "Full Stack Developer",
      "Data Analyst",
      "Financial Analyst",
    ],
  },
  {
    category: "Supply Chain",
    thesisTitle: "Blockchain-Based Food Traceability System",
    shortDescription:
      "A supply chain platform using blockchain to track food products from farm to table, ensuring transparency and food safety through immutable records.",
    technologyUsed: [
      "Hyperledger Fabric",
      "IoT Sensors",
      "React",
      "Node.js",
      "MongoDB",
    ],
    similarProjects: [
      {
        name: "IBM Food Trust",
        link: "https://www.ibm.com/blockchain/solutions/food-trust",
      },
      {
        name: "TE-FOOD",
        link: "https://te-food.com",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Supply Chain Specialist",
      "Full Stack Developer",
      "IoT Engineer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Mental Health",
    thesisTitle: "AI-Assisted Cognitive Behavioral Therapy Platform",
    shortDescription:
      "A digital therapeutic application that provides personalized CBT exercises with AI coaching to support users between therapy sessions.",
    technologyUsed: [
      "React Native",
      "Node.js",
      "Natural Language Processing",
      "MongoDB",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Woebot",
        link: "https://woebothealth.com",
      },
      {
        name: "Wysa",
        link: "https://www.wysa.io",
      },
    ],
    roles: [
      "Mobile Developer",
      "Backend Developer",
      "Mental Health Professional",
      "ML Engineer",
      "UX Researcher",
    ],
  },
  {
    category: "Transportation",
    thesisTitle: "Autonomous Last-Mile Delivery System",
    shortDescription:
      "A fleet management platform for autonomous delivery robots that optimizes routes and manages deliveries in urban environments.",
    technologyUsed: [
      "ROS",
      "Computer Vision",
      "Path Planning Algorithms",
      "React",
      "Node.js",
      "MongoDB",
    ],
    similarProjects: [
      {
        name: "Starship Technologies",
        link: "https://www.starship.xyz",
      },
      {
        name: "Nuro",
        link: "https://www.nuro.ai",
      },
    ],
    roles: [
      "Robotics Engineer",
      "Path Planning Specialist",
      "Full Stack Developer",
      "Computer Vision Engineer",
      "UX Designer",
    ],
  },
  {
    category: "Quantum Computing",
    thesisTitle: "Quantum Machine Learning for Drug Discovery",
    shortDescription:
      "A quantum computing application that accelerates the drug discovery process by simulating molecular interactions and predicting potential therapeutic compounds.",
    technologyUsed: [
      "Qiskit",
      "PennyLane",
      "Python",
      "PyTorch",
      "Flask",
      "React",
    ],
    similarProjects: [
      {
        name: "QC Ware",
        link: "https://qcware.com",
      },
      {
        name: "ProteinQure",
        link: "https://www.proteinqure.com",
      },
    ],
    roles: [
      "Quantum Computing Researcher",
      "Computational Chemist",
      "ML Engineer",
      "Backend Developer",
      "Frontend Developer",
    ],
  },
  {
    category: "Agriculture",
    thesisTitle: "Precision Farming Drone System",
    shortDescription:
      "An automated drone system that captures multispectral imagery and uses AI to detect crop diseases, nutrient deficiencies, and irrigation issues.",
    technologyUsed: [
      "Drone Programming",
      "Computer Vision",
      "Machine Learning",
      "Python",
      "Django",
      "React",
    ],
    similarProjects: [
      {
        name: "Taranis",
        link: "https://taranis.ag",
      },
      {
        name: "DroneDeploy",
        link: "https://www.dronedeploy.com",
      },
    ],
    roles: [
      "Drone Engineer",
      "Computer Vision Specialist",
      "Agricultural Scientist",
      "Full Stack Developer",
      "Data Analyst",
    ],
  },
  {
    category: "Web Development",
    thesisTitle: "Telemedicine Platform with Remote Diagnostic Tools",
    shortDescription:
      "A comprehensive telehealth platform integrating with at-home diagnostic devices to enable more accurate remote consultations.",
    technologyUsed: [
      "React",
      "Node.js",
      "WebRTC",
      "MongoDB",
      "Redux",
      "IoT Integration",
    ],
    similarProjects: [
      {
        name: "Tyto Care",
        link: "https://www.tytocare.com",
      },
      {
        name: "Medici",
        link: "https://medici.md",
      },
    ],
    roles: [
      "Full Stack Developer",
      "IoT Integration Specialist",
      "Healthcare UX Designer",
      "WebRTC Engineer",
      "Security Specialist",
    ],
  },
  {
    category: "Mobile App Development",
    thesisTitle: "Augmented Reality Shopping Assistant",
    shortDescription:
      "A mobile app that uses AR to help shoppers navigate stores, locate products, and visualize product information and reviews.",
    technologyUsed: [
      "ARKit/ARCore",
      "Swift",
      "Kotlin",
      "Firebase",
      "Computer Vision",
      "React Native",
    ],
    similarProjects: [
      {
        name: "Wanna Kicks",
        link: "https://wanna.fashion",
      },
      {
        name: "IKEA Place",
        link: "https://www.ikea.com/au/en/customer-service/mobile-apps/say-hej-to-ikea-place-pub1f8af050",
      },
    ],
    roles: [
      "AR Developer",
      "Mobile Developer",
      "UI/UX Designer",
      "Backend Developer",
      "Computer Vision Engineer",
    ],
  },
  {
    category: "Artificial Intelligence",
    thesisTitle: "Financial Fraud Detection System",
    shortDescription:
      "An AI-powered system that detects unusual patterns in financial transactions to identify potential fraud in real-time.",
    technologyUsed: [
      "Python",
      "TensorFlow",
      "Kafka",
      "PostgreSQL",
      "Flask",
      "React",
    ],
    similarProjects: [
      {
        name: "Feedzai",
        link: "https://feedzai.com",
      },
      {
        name: "Darktrace",
        link: "https://www.darktrace.com",
      },
    ],
    roles: [
      "Machine Learning Engineer",
      "Financial Systems Analyst",
      "Data Engineer",
      "Full Stack Developer",
      "Security Expert",
    ],
  },
  {
    category: "Data Science",
    thesisTitle: "Predictive Maintenance for Industrial Equipment",
    shortDescription:
      "A data science platform that analyzes sensor data from industrial machinery to predict failures before they occur, reducing downtime.",
    technologyUsed: [
      "Python",
      "Scikit-learn",
      "IoT Sensors",
      "Time Series Analysis",
      "Power BI",
      "Azure IoT Hub",
    ],
    similarProjects: [
      {
        name: "Uptake",
        link: "https://www.uptake.com",
      },
      {
        name: "PredictronixIQ",
        link: "https://www.predictronix.com",
      },
    ],
    roles: [
      "Data Scientist",
      "IoT Developer",
      "Machine Learning Engineer",
      "Industrial Engineer",
      "Dashboard Developer",
    ],
  },
  {
    category: "IoT",
    thesisTitle: "Smart City Air Quality Monitoring Network",
    shortDescription:
      "A distributed network of air quality sensors throughout urban areas providing real-time pollution data and predictive air quality analytics.",
    technologyUsed: [
      "ESP32",
      "LoRaWAN",
      "Time Series Databases",
      "React",
      "Node.js",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "PurpleAir",
        link: "https://www2.purpleair.com",
      },
      {
        name: "Clarity Movement",
        link: "https://www.clarity.io",
      },
    ],
    roles: [
      "IoT Hardware Engineer",
      "Environmental Scientist",
      "Data Engineer",
      "Full Stack Developer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Blockchain",
    thesisTitle: "Decentralized Identity Verification System",
    shortDescription:
      "A blockchain solution allowing users to maintain control of their digital identity and selectively share verified credentials with service providers.",
    technologyUsed: [
      "Ethereum",
      "Solidity",
      "Zero-Knowledge Proofs",
      "React Native",
      "Node.js",
    ],
    similarProjects: [
      {
        name: "uPort",
        link: "https://www.uport.me",
      },
      {
        name: "Sovrin",
        link: "https://sovrin.org",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Cryptography Specialist",
      "Mobile Developer",
      "Security Expert",
      "UX Designer",
    ],
  },
  {
    category: "Cybersecurity",
    thesisTitle: "Autonomous Security Response System",
    shortDescription:
      "A security platform that automatically detects, analyzes, and responds to network intrusions without human intervention.",
    technologyUsed: [
      "Python",
      "Machine Learning",
      "Network Security",
      "Kubernetes",
      "Docker",
      "ELK Stack",
    ],
    similarProjects: [
      {
        name: "Darktrace",
        link: "https://www.darktrace.com",
      },
      {
        name: "CrowdStrike",
        link: "https://www.crowdstrike.com",
      },
    ],
    roles: [
      "Security Engineer",
      "ML Engineer",
      "DevOps Specialist",
      "Network Security Expert",
      "Full Stack Developer",
    ],
  },
  {
    category: "Augmented Reality",
    thesisTitle: "AR Navigation and Information System for Museums",
    shortDescription:
      "An augmented reality platform that enhances museum visits by providing interactive information about exhibits and personalized guided tours.",
    technologyUsed: [
      "ARKit/ARCore",
      "Unity",
      "Bluetooth Beacons",
      "React Native",
      "Node.js",
      "MongoDB",
    ],
    similarProjects: [
      {
        name: "Cuseum",
        link: "https://cuseum.com",
      },
      {
        name: "Guru",
        link: "https://www.getguru.com",
      },
    ],
    roles: [
      "AR Developer",
      "3D Modeler",
      "Content Curator",
      "Mobile Developer",
      "UX Designer",
    ],
  },
  {
    category: "Environmental Technology",
    thesisTitle: "Predictive Wildfire Management System",
    shortDescription:
      "A platform using satellite imagery, weather data, and ML to predict wildfire risk areas and optimize resource deployment for prevention and response.",
    technologyUsed: [
      "Python",
      "Satellite Imagery Analysis",
      "GIS",
      "Machine Learning",
      "Weather APIs",
      "Flask",
    ],
    similarProjects: [
      {
        name: "FireMap",
        link: "https://firemap.net",
      },
      {
        name: "Wildfire Analyst",
        link: "https://www.wildfireanalyst.com",
      },
    ],
    roles: [
      "Data Scientist",
      "GIS Specialist",
      "Environmental Scientist",
      "Backend Developer",
      "Frontend Developer",
    ],
  },
  {
    category: "Fintech",
    thesisTitle: "Personal Finance AI Coach",
    shortDescription:
      "A financial wellness application that analyzes spending patterns and provides personalized guidance for budgeting, saving, and investing.",
    technologyUsed: [
      "React Native",
      "Node.js",
      "Machine Learning",
      "Banking APIs",
      "PostgreSQL",
      "AWS",
    ],
    similarProjects: [
      {
        name: "Cleo",
        link: "https://www.meetcleo.com",
      },
      {
        name: "Mint",
        link: "https://mint.intuit.com",
      },
    ],
    roles: [
      "Mobile Developer",
      "ML Engineer",
      "Financial Advisor",
      "UI/UX Designer",
      "Backend Developer",
    ],
  },
  {
    category: "Game Development",
    thesisTitle: "AI-Powered Procedural Content Generation for Games",
    shortDescription:
      "A game development toolkit that uses AI to automatically generate game levels, characters, and narratives based on player preferences and behaviors.",
    technologyUsed: [
      "Unity",
      "C#",
      "Machine Learning",
      "Procedural Generation Algorithms",
      "Python",
      "GAN Models",
    ],
    similarProjects: [
      {
        name: "Ludo AI",
        link: "https://ludo.ai",
      },
      {
        name: "AI Dungeon",
        link: "https://play.aidungeon.io",
      },
    ],
    roles: [
      "Game Developer",
      "ML Engineer",
      "Narrative Designer",
      "3D Artist",
      "Game Designer",
    ],
  },
  {
    category: "Sustainable Energy",
    thesisTitle: "AI-Optimized Smart Grid Management System",
    shortDescription:
      "A platform that uses AI to predict energy demand, optimize distribution, and integrate renewable sources into the power grid more effectively.",
    technologyUsed: [
      "Python",
      "TensorFlow",
      "IoT",
      "Time Series Analysis",
      "SCADA Integration",
      "React",
    ],
    similarProjects: [
      {
        name: "AutoGrid",
        link: "https://www.auto-grid.com",
      },
      {
        name: "Stem",
        link: "https://www.stem.com",
      },
    ],
    roles: [
      "Machine Learning Engineer",
      "Energy Systems Engineer",
      "IoT Developer",
      "Frontend Developer",
      "Data Scientist",
    ],
  },
  {
    category: "Natural Language Processing",
    thesisTitle: "Multilingual Customer Support Automation",
    shortDescription:
      "An NLP platform that handles customer service inquiries in multiple languages, routing complex issues to human agents with appropriate context.",
    technologyUsed: [
      "Python",
      "BERT",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
    ],
    roles: [
      "NLP Engineer",
      "Machine Learning Engineer",
      "Backend Developer",
      "Frontend Developer",
      "DevOps Engineer",
      "Product Manager",
      "UX/UI Designer",
    ],
    similarProjects: [
      {
        name: "Ada",
        link: "https://www.ada.cx",
      },
      {
        name: "Kore.ai",
        link: "https://kore.ai",
      },
    ],
  },

  {
    category: "Web Development",
    thesisTitle: "Predictive Healthcare Appointment System",
    shortDescription:
      "A web application that uses machine learning to predict optimal appointment times based on patient history, reducing no-shows and optimizing clinic scheduling.",
    technologyUsed: [
      "React",
      "Node.js",
      "MongoDB",
      "TensorFlow.js",
      "Express.js",
    ],
    similarProjects: [
      {
        name: "PatientPal",
        link: "https://patientpal.io",
      },
      {
        name: "AppointMed",
        link: "https://appointmed.com",
      },
    ],
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "ML Engineer",
      "UX Designer",
      "Project Manager",
    ],
  },
  {
    category: "Mobile App Development",
    thesisTitle: "Community-Based Disaster Response App",
    shortDescription:
      "A mobile application that coordinates local volunteer efforts during natural disasters, connecting those in need with nearby volunteers and resources.",
    technologyUsed: [
      "Flutter",
      "Firebase",
      "Google Maps API",
      "Push Notifications",
      "Kotlin",
    ],
    similarProjects: [
      {
        name: "Zello",
        link: "https://zello.com",
      },
      {
        name: "Crisis Cleanup",
        link: "https://crisiscleanup.org",
      },
    ],
    roles: [
      "Mobile Developer",
      "Backend Developer",
      "UX/UI Designer",
      "GIS Specialist",
      "Community Manager",
    ],
  },
  {
    category: "Artificial Intelligence",
    thesisTitle: "Personalized Educational Content Generator",
    shortDescription:
      "An AI system that generates customized educational materials based on individual student learning styles, progress, and areas of difficulty.",
    technologyUsed: ["Python", "PyTorch", "GPT-4", "Flask", "MongoDB"],
    similarProjects: [
      {
        name: "Knewton",
        link: "https://www.knewton.com",
      },
      {
        name: "Carnegie Learning",
        link: "https://www.carnegielearning.com",
      },
    ],
    roles: [
      "AI Researcher",
      "ML Engineer",
      "Education Specialist",
      "Backend Developer",
      "Data Scientist",
    ],
  },
  {
    category: "Data Science",
    thesisTitle: "Urban Transportation Flow Optimization",
    shortDescription:
      "A data analytics platform that predicts traffic patterns and suggests dynamic routing for public transportation to reduce congestion and commute times.",
    technologyUsed: [
      "Python",
      "R",
      "Apache Spark",
      "Tableau",
      "PostgreSQL",
      "QGIS",
    ],
    similarProjects: [
      {
        name: "Moovit",
        link: "https://moovit.com",
      },
      {
        name: "UrbanFlow",
        link: "https://urbanflow.io",
      },
    ],
    roles: [
      "Data Scientist",
      "Transportation Planner",
      "Backend Developer",
      "GIS Specialist",
      "Data Visualization Expert",
    ],
  },
  {
    category: "IoT",
    thesisTitle: "Smart Agricultural Monitoring System",
    shortDescription:
      "An IoT-based system that collects soil, climate, and plant growth data to provide farmers with actionable insights for optimal crop management.",
    technologyUsed: [
      "Arduino",
      "Raspberry Pi",
      "MQTT",
      "LoRaWAN",
      "Node.js",
      "React",
    ],
    similarProjects: [
      {
        name: "FarmBeats",
        link: "https://www.microsoft.com/en-us/research/project/farmbeats-iot-agriculture",
      },
      {
        name: "The Yield",
        link: "https://www.theyield.com",
      },
    ],
    roles: [
      "IoT Hardware Engineer",
      "Backend Developer",
      "Frontend Developer",
      "Agricultural Specialist",
      "Data Analyst",
    ],
  },
  {
    category: "Blockchain",
    thesisTitle: "Decentralized Medical Records System",
    shortDescription:
      "A blockchain-based platform allowing secure sharing of medical records between healthcare providers while giving patients control over their health data.",
    technologyUsed: ["Ethereum", "Solidity", "IPFS", "React", "Node.js"],
    similarProjects: [
      {
        name: "MedRec",
        link: "https://medrec.media.mit.edu",
      },
      {
        name: "Patientory",
        link: "https://patientory.com",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Smart Contract Engineer",
      "Full Stack Developer",
      "Healthcare Specialist",
      "Security Expert",
    ],
  },
  {
    category: "Cybersecurity",
    thesisTitle: "Advanced Phishing Detection Framework",
    shortDescription:
      "A multi-layered security system that combines machine learning, behavioral analysis, and visual recognition to detect sophisticated phishing attempts.",
    technologyUsed: [
      "Python",
      "TensorFlow",
      "Django",
      "Docker",
      "MongoDB",
      "Natural Language Processing",
    ],
    similarProjects: [
      {
        name: "PhishTank",
        link: "https://phishtank.org",
      },
      {
        name: "Cofense",
        link: "https://cofense.com",
      },
    ],
    roles: [
      "Security Researcher",
      "Machine Learning Engineer",
      "Backend Developer",
      "Security Analyst",
      "UI/UX Designer",
    ],
  },
  {
    category: "Augmented Reality",
    thesisTitle: "AR-Enhanced Surgical Training System",
    shortDescription:
      "An augmented reality application that overlays anatomical information and procedural guidance during surgical training simulations.",
    technologyUsed: [
      "Unity",
      "ARCore",
      "C#",
      "3D Modeling",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Microsoft HoloLens for Surgery",
        link: "https://www.microsoft.com/en-us/hololens",
      },
      {
        name: "Proximie",
        link: "https://www.proximie.com",
      },
    ],
    roles: [
      "AR Developer",
      "3D Modeler",
      "Medical Consultant",
      "UI/UX Designer",
      "Software Engineer",
    ],
  },
  {
    category: "Environmental Technology",
    thesisTitle: "AI-Powered Waste Sorting System",
    shortDescription:
      "An automated waste management system using computer vision and robotics to identify, sort, and process recyclable materials more efficiently than manual methods.",
    technologyUsed: [
      "Computer Vision",
      "Python",
      "TensorFlow",
      "Robotics",
      "ROS",
      "Arduino",
    ],
    similarProjects: [
      {
        name: "CleanRobotics",
        link: "https://cleanrobotics.com",
      },
      {
        name: "AMP Robotics",
        link: "https://www.amprobotics.com",
      },
    ],
    roles: [
      "Computer Vision Engineer",
      "Robotics Engineer",
      "Environmental Scientist",
      "Software Developer",
      "Hardware Engineer",
    ],
  },
  {
    category: "Fintech",
    thesisTitle: "Microfinance Blockchain Platform for Underserved Communities",
    shortDescription:
      "A blockchain-based microfinance platform enabling peer-to-peer lending in underbanked communities with smart contracts for loan terms and repayments.",
    technologyUsed: [
      "Ethereum",
      "Solidity",
      "React",
      "Node.js",
      "MongoDB",
      "Mobile Development",
    ],
    similarProjects: [
      {
        name: "Kiva Protocol",
        link: "https://www.kiva.org/protocol",
      },
      {
        name: "BitPesa",
        link: "https://bitpesa.co",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Financial Systems Analyst",
      "Full Stack Developer",
      "Community Outreach Coordinator",
      "Security Specialist",
    ],
  },
  {
    category: "Game Development",
    thesisTitle: "Adaptive Difficulty AI for Educational Games",
    shortDescription:
      "A game engine that dynamically adjusts difficulty based on player performance to maintain engagement while ensuring optimal learning outcomes.",
    technologyUsed: [
      "Unity",
      "C#",
      "Python",
      "Machine Learning",
      "Educational Psychology",
    ],
    similarProjects: [
      {
        name: "DreamBox Learning",
        link: "https://www.dreambox.com",
      },
      {
        name: "Adaptemy",
        link: "https://www.adaptemy.com",
      },
    ],
    roles: [
      "Game Developer",
      "AI Engineer",
      "Educational Game Designer",
      "Child Psychology Consultant",
      "UI/UX Designer",
    ],
  },
  {
    category: "Sustainable Energy",
    thesisTitle: "Peer-to-Peer Renewable Energy Trading Platform",
    shortDescription:
      "A platform enabling homeowners with solar panels to sell excess electricity directly to neighbors, creating a localized energy marketplace.",
    technologyUsed: [
      "Blockchain",
      "IoT",
      "Smart Contracts",
      "React",
      "Node.js",
      "Time Series Databases",
    ],
    similarProjects: [
      {
        name: "Power Ledger",
        link: "https://www.powerledger.io",
      },
      {
        name: "Brooklyn Microgrid",
        link: "https://www.brooklyn.energy",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Energy Systems Engineer",
      "IoT Developer",
      "Full Stack Developer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Natural Language Processing",
    thesisTitle: "Cultural Context-Aware Translation System",
    shortDescription:
      "A translation platform that preserves cultural nuances and context across languages, particularly for idioms, humor, and culturally-specific references.",
    technologyUsed: [
      "Python",
      "Transformer Models",
      "TensorFlow",
      "BERT",
      "Flask",
      "React",
    ],
    similarProjects: [
      {
        name: "Idiom Savant",
        link: "https://idiomsavant.com",
      },
      {
        name: "DeepL",
        link: "https://www.deepl.com",
      },
    ],
    roles: [
      "NLP Researcher",
      "Machine Learning Engineer",
      "Linguist",
      "Full Stack Developer",
      "Cultural Consultant",
    ],
  },
  {
    category: "Healthcare",
    thesisTitle: "Remote Patient Monitoring for Chronic Conditions",
    shortDescription:
      "A comprehensive system combining wearable devices, mobile apps, and AI analytics to monitor patients with chronic diseases and alert healthcare providers of concerning trends.",
    technologyUsed: [
      "IoT",
      "Machine Learning",
      "React Native",
      "Node.js",
      "MongoDB",
      "WebRTC",
    ],
    similarProjects: [
      {
        name: "Livongo",
        link: "https://www.livongo.com",
      },
      {
        name: "Propeller Health",
        link: "https://www.propellerhealth.com",
      },
    ],
    roles: [
      "Medical IoT Developer",
      "Mobile Developer",
      "Healthcare Data Analyst",
      "UI/UX Designer",
      "Medical Consultant",
    ],
  },
  {
    category: "Virtual Reality",
    thesisTitle: "Virtual Rehabilitation Environment for Stroke Patients",
    shortDescription:
      "A VR system providing gamified physical therapy exercises that track patient movements and adapt difficulty based on progress for stroke rehabilitation.",
    technologyUsed: [
      "Unity",
      "VR Development",
      "Motion Tracking",
      "C#",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Neuro Rehab VR",
        link: "https://www.neurorehabvr.com",
      },
      {
        name: "MindMaze",
        link: "https://www.mindmaze.com",
      },
    ],
    roles: [
      "VR Developer",
      "Physical Therapy Consultant",
      "Game Designer",
      "3D Modeler",
      "Medical Researcher",
    ],
  },
  {
    category: "Robotics",
    thesisTitle: "Companion Robot for Elderly Care",
    shortDescription:
      "A social robot designed to assist elderly individuals with daily tasks, medication reminders, and provide companionship through natural conversation.",
    technologyUsed: [
      "ROS",
      "Python",
      "Natural Language Processing",
      "Computer Vision",
      "3D Printing",
      "Arduino",
    ],
    similarProjects: [
      {
        name: "ElliQ",
        link: "https://elliq.com",
      },
      {
        name: "Care.Coach",
        link: "https://care.coach",
      },
    ],
    roles: [
      "Robotics Engineer",
      "Gerontology Specialist",
      "NLP Developer",
      "Hardware Engineer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Computer Vision",
    thesisTitle: "Real-time Sign Language Translation System",
    shortDescription:
      "A computer vision application that recognizes sign language gestures in real-time and translates them to text and speech for two-way communication.",
    technologyUsed: [
      "OpenCV",
      "TensorFlow",
      "Python",
      "React Native",
      "WebRTC",
      "GCP",
    ],
    similarProjects: [
      {
        name: "SignAll",
        link: "https://www.signall.us",
      },
      {
        name: "Signapse",
        link: "https://www.signapse.ai",
      },
    ],
    roles: [
      "Computer Vision Engineer",
      "Machine Learning Specialist",
      "Mobile Developer",
      "Sign Language Expert",
      "UI/UX Designer",
    ],
  },
  {
    category: "Smart Cities",
    thesisTitle: "Intelligent Urban Water Management System",
    shortDescription:
      "A network of IoT sensors and predictive analytics to monitor water quality, detect leaks, and optimize distribution in urban water systems.",
    technologyUsed: [
      "IoT",
      "LoRaWAN",
      "Time Series Databases",
      "Python",
      "Machine Learning",
      "GIS",
    ],
    similarProjects: [
      {
        name: "Smart Water Networks",
        link: "https://www.swan-forum.com",
      },
      {
        name: "Water Smart",
        link: "https://watersmartsoft.com",
      },
    ],
    roles: [
      "IoT Engineer",
      "Data Scientist",
      "Civil Engineer",
      "Backend Developer",
      "GIS Specialist",
    ],
  },
  {
    category: "E-commerce",
    thesisTitle: "Sustainable Product Recommendation Engine",
    shortDescription:
      "An e-commerce platform that highlights sustainable and ethical products based on verified environmental impact data and personalized user preferences.",
    technologyUsed: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Recommendation Algorithms",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Good On You",
        link: "https://goodonyou.eco",
      },
      {
        name: "DoneGood",
        link: "https://donegood.co",
      },
    ],
    roles: [
      "Full Stack Developer",
      "Data Scientist",
      "Sustainability Researcher",
      "UX Designer",
      "E-commerce Specialist",
    ],
  },
  {
    category: "Social Impact",
    thesisTitle: "Accessible Navigation for Visually Impaired Users",
    shortDescription:
      "A mobile application providing detailed audio navigation guidance for visually impaired individuals in urban environments, including indoors.",
    technologyUsed: [
      "React Native",
      "Bluetooth Beacons",
      "ARKit/ARCore",
      "Text-to-Speech",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Lazarillo",
        link: "https://www.lazarillo.app",
      },
      {
        name: "BlindSquare",
        link: "https://www.blindsquare.com",
      },
    ],
    roles: [
      "Mobile Developer",
      "Accessibility Specialist",
      "UX Researcher",
      "IoT Engineer",
      "Backend Developer",
    ],
  },
  {
    category: "Education Technology",
    thesisTitle: "Collaborative Virtual Science Laboratory",
    shortDescription:
      "A virtual reality platform allowing students to collaboratively conduct science experiments in a simulated laboratory environment with realistic physics.",
    technologyUsed: [
      "Unity",
      "VR Development",
      "Physics Simulation",
      "WebRTC",
      "Node.js",
      "MongoDB",
    ],
    similarProjects: [
      {
        name: "Labster",
        link: "https://www.labster.com",
      },
      {
        name: "Beyond Labz",
        link: "https://www.beyondlabz.com",
      },
    ],
    roles: [
      "VR Developer",
      "Science Education Specialist",
      "3D Modeler",
      "Physics Programmer",
      "Backend Developer",
    ],
  },
  {
    category: "Cloud Computing",
    thesisTitle: "Multi-Cloud Resource Optimization Platform",
    shortDescription:
      "A management tool that analyzes usage patterns across multiple cloud providers to automatically optimize resource allocation and reduce costs.",
    technologyUsed: [
      "Python",
      "Kubernetes",
      "Terraform",
      "AWS/Azure/GCP APIs",
      "React",
      "Node.js",
    ],
    similarProjects: [
      {
        name: "CloudHealth",
        link: "https://www.cloudhealthtech.com",
      },
      {
        name: "Densify",
        link: "https://www.densify.com",
      },
    ],
    roles: [
      "Cloud Architect",
      "DevOps Engineer",
      "Full Stack Developer",
      "Data Analyst",
      "Financial Analyst",
    ],
  },
  {
    category: "Supply Chain",
    thesisTitle: "Blockchain-Based Food Traceability System",
    shortDescription:
      "A supply chain platform using blockchain to track food products from farm to table, ensuring transparency and food safety through immutable records.",
    technologyUsed: [
      "Hyperledger Fabric",
      "IoT Sensors",
      "React",
      "Node.js",
      "MongoDB",
    ],
    similarProjects: [
      {
        name: "IBM Food Trust",
        link: "https://www.ibm.com/blockchain/solutions/food-trust",
      },
      {
        name: "TE-FOOD",
        link: "https://te-food.com",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Supply Chain Specialist",
      "Full Stack Developer",
      "IoT Engineer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Mental Health",
    thesisTitle: "AI-Assisted Cognitive Behavioral Therapy Platform",
    shortDescription:
      "A digital therapeutic application that provides personalized CBT exercises with AI coaching to support users between therapy sessions.",
    technologyUsed: [
      "React Native",
      "Node.js",
      "Natural Language Processing",
      "MongoDB",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "Woebot",
        link: "https://woebothealth.com",
      },
      {
        name: "Wysa",
        link: "https://www.wysa.io",
      },
    ],
    roles: [
      "Mobile Developer",
      "Backend Developer",
      "Mental Health Professional",
      "ML Engineer",
      "UX Researcher",
    ],
  },
  {
    category: "Transportation",
    thesisTitle: "Autonomous Last-Mile Delivery System",
    shortDescription:
      "A fleet management platform for autonomous delivery robots that optimizes routes and manages deliveries in urban environments.",
    technologyUsed: [
      "ROS",
      "Computer Vision",
      "Path Planning Algorithms",
      "React",
      "Node.js",
      "MongoDB",
    ],
    similarProjects: [
      {
        name: "Starship Technologies",
        link: "https://www.starship.xyz",
      },
      {
        name: "Nuro",
        link: "https://www.nuro.ai",
      },
    ],
    roles: [
      "Robotics Engineer",
      "Path Planning Specialist",
      "Full Stack Developer",
      "Computer Vision Engineer",
      "UX Designer",
    ],
  },
  {
    category: "Quantum Computing",
    thesisTitle: "Quantum Machine Learning for Drug Discovery",
    shortDescription:
      "A quantum computing application that accelerates the drug discovery process by simulating molecular interactions and predicting potential therapeutic compounds.",
    technologyUsed: [
      "Qiskit",
      "PennyLane",
      "Python",
      "PyTorch",
      "Flask",
      "React",
    ],
    similarProjects: [
      {
        name: "QC Ware",
        link: "https://qcware.com",
      },
      {
        name: "ProteinQure",
        link: "https://www.proteinqure.com",
      },
    ],
    roles: [
      "Quantum Computing Researcher",
      "Computational Chemist",
      "ML Engineer",
      "Backend Developer",
      "Frontend Developer",
    ],
  },
  {
    category: "Agriculture",
    thesisTitle: "Precision Farming Drone System",
    shortDescription:
      "An automated drone system that captures multispectral imagery and uses AI to detect crop diseases, nutrient deficiencies, and irrigation issues.",
    technologyUsed: [
      "Drone Programming",
      "Computer Vision",
      "Machine Learning",
      "Python",
      "Django",
      "React",
    ],
    similarProjects: [
      {
        name: "Taranis",
        link: "https://taranis.ag",
      },
      {
        name: "DroneDeploy",
        link: "https://www.dronedeploy.com",
      },
    ],
    roles: [
      "Drone Engineer",
      "Computer Vision Specialist",
      "Agricultural Scientist",
      "Full Stack Developer",
      "Data Analyst",
    ],
  },
  {
    category: "Web Development",
    thesisTitle: "Telemedicine Platform with Remote Diagnostic Tools",
    shortDescription:
      "A comprehensive telehealth platform integrating with at-home diagnostic devices to enable more accurate remote consultations.",
    technologyUsed: [
      "React",
      "Node.js",
      "WebRTC",
      "MongoDB",
      "Redux",
      "IoT Integration",
    ],
    similarProjects: [
      {
        name: "Tyto Care",
        link: "https://www.tytocare.com",
      },
      {
        name: "Medici",
        link: "https://medici.md",
      },
    ],
    roles: [
      "Full Stack Developer",
      "IoT Integration Specialist",
      "Healthcare UX Designer",
      "WebRTC Engineer",
      "Security Specialist",
    ],
  },
  {
    category: "Mobile App Development",
    thesisTitle: "Augmented Reality Shopping Assistant",
    shortDescription:
      "A mobile app that uses AR to help shoppers navigate stores, locate products, and visualize product information and reviews.",
    technologyUsed: [
      "ARKit/ARCore",
      "Swift",
      "Kotlin",
      "Firebase",
      "Computer Vision",
      "React Native",
    ],
    similarProjects: [
      {
        name: "Wanna Kicks",
        link: "https://wanna.fashion",
      },
      {
        name: "IKEA Place",
        link: "https://www.ikea.com/au/en/customer-service/mobile-apps/say-hej-to-ikea-place-pub1f8af050",
      },
    ],
    roles: [
      "AR Developer",
      "Mobile Developer",
      "UI/UX Designer",
      "Backend Developer",
      "Computer Vision Engineer",
    ],
  },
  {
    category: "Artificial Intelligence",
    thesisTitle: "Financial Fraud Detection System",
    shortDescription:
      "An AI-powered system that detects unusual patterns in financial transactions to identify potential fraud in real-time.",
    technologyUsed: [
      "Python",
      "TensorFlow",
      "Kafka",
      "PostgreSQL",
      "Flask",
      "React",
    ],
    similarProjects: [
      {
        name: "Feedzai",
        link: "https://feedzai.com",
      },
      {
        name: "Darktrace",
        link: "https://www.darktrace.com",
      },
    ],
    roles: [
      "Machine Learning Engineer",
      "Financial Systems Analyst",
      "Data Engineer",
      "Full Stack Developer",
      "Security Expert",
    ],
  },
  {
    category: "Data Science",
    thesisTitle: "Predictive Maintenance for Industrial Equipment",
    shortDescription:
      "A data science platform that analyzes sensor data from industrial machinery to predict failures before they occur, reducing downtime.",
    technologyUsed: [
      "Python",
      "Scikit-learn",
      "IoT Sensors",
      "Time Series Analysis",
      "Power BI",
      "Azure IoT Hub",
    ],
    similarProjects: [
      {
        name: "Uptake",
        link: "https://www.uptake.com",
      },
      {
        name: "PredictronixIQ",
        link: "https://www.predictronix.com",
      },
    ],
    roles: [
      "Data Scientist",
      "IoT Developer",
      "Machine Learning Engineer",
      "Industrial Engineer",
      "Dashboard Developer",
    ],
  },
  {
    category: "IoT",
    thesisTitle: "Smart City Air Quality Monitoring Network",
    shortDescription:
      "A distributed network of air quality sensors throughout urban areas providing real-time pollution data and predictive air quality analytics.",
    technologyUsed: [
      "ESP32",
      "LoRaWAN",
      "Time Series Databases",
      "React",
      "Node.js",
      "Machine Learning",
    ],
    similarProjects: [
      {
        name: "PurpleAir",
        link: "https://www2.purpleair.com",
      },
      {
        name: "Clarity Movement",
        link: "https://www.clarity.io",
      },
    ],
    roles: [
      "IoT Hardware Engineer",
      "Environmental Scientist",
      "Data Engineer",
      "Full Stack Developer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Blockchain",
    thesisTitle: "Decentralized Identity Verification System",
    shortDescription:
      "A blockchain solution allowing users to maintain control of their digital identity and selectively share verified credentials with service providers.",
    technologyUsed: [
      "Ethereum",
      "Solidity",
      "Zero-Knowledge Proofs",
      "React Native",
      "Node.js",
    ],
    similarProjects: [
      {
        name: "uPort",
        link: "https://www.uport.me",
      },
      {
        name: "Sovrin",
        link: "https://sovrin.org",
      },
    ],
    roles: [
      "Blockchain Developer",
      "Cryptography Specialist",
      "Mobile Developer",
      "Security Expert",
      "UX Designer",
    ],
  },
  {
    category: "Cybersecurity",
    thesisTitle: "Autonomous Security Response System",
    shortDescription:
      "A security platform that automatically detects, analyzes, and responds to network intrusions without human intervention.",
    technologyUsed: [
      "Python",
      "Machine Learning",
      "Network Security",
      "Kubernetes",
      "Docker",
      "ELK Stack",
    ],
    similarProjects: [
      {
        name: "Darktrace",
        link: "https://www.darktrace.com",
      },
      {
        name: "CrowdStrike",
        link: "https://www.crowdstrike.com",
      },
    ],
    roles: [
      "Security Engineer",
      "ML Engineer",
      "DevOps Specialist",
      "Network Security Expert",
      "Full Stack Developer",
    ],
  },
  {
    category: "Augmented Reality",
    thesisTitle: "AR Navigation and Information System for Museums",
    shortDescription:
      "An augmented reality platform that enhances museum visits by providing interactive information about exhibits and personalized guided tours.",
    technologyUsed: [
      "ARKit/ARCore",
      "Unity",
      "Bluetooth Beacons",
      "React Native",
      "Node.js",
      "MongoDB",
    ],
    similarProjects: [
      {
        name: "Cuseum",
        link: "https://cuseum.com",
      },
      {
        name: "Guru",
        link: "https://www.getguru.com",
      },
    ],
    roles: [
      "AR Developer",
      "3D Modeler",
      "Content Curator",
      "Mobile Developer",
      "UX Designer",
    ],
  },
  {
    category: "Environmental Technology",
    thesisTitle: "Predictive Wildfire Management System",
    shortDescription:
      "A platform using satellite imagery, weather data, and ML to predict wildfire risk areas and optimize resource deployment for prevention and response.",
    technologyUsed: [
      "Python",
      "Satellite Imagery Analysis",
      "GIS",
      "Machine Learning",
      "Weather APIs",
      "Flask",
    ],
    similarProjects: [
      {
        name: "FireMap",
        link: "https://firemap.net",
      },
      {
        name: "Wildfire Analyst",
        link: "https://www.wildfireanalyst.com",
      },
    ],
    roles: [
      "Data Scientist",
      "GIS Specialist",
      "Environmental Scientist",
      "Backend Developer",
      "Frontend Developer",
    ],
  },
  {
    category: "Fintech",
    thesisTitle: "Personal Finance AI Coach",
    shortDescription:
      "A financial wellness application that analyzes spending patterns and provides personalized guidance for budgeting, saving, and investing.",
    technologyUsed: [
      "React Native",
      "Node.js",
      "Machine Learning",
      "Banking APIs",
      "PostgreSQL",
      "AWS",
    ],
    similarProjects: [
      {
        name: "Cleo",
        link: "https://www.meetcleo.com",
      },
      {
        name: "Mint",
        link: "https://mint.intuit.com",
      },
    ],
    roles: [
      "Mobile Developer",
      "ML Engineer",
      "Financial Advisor",
      "UI/UX Designer",
      "Backend Developer",
    ],
  },
  {
    category: "Game Development",
    thesisTitle: "AI-Powered Procedural Content Generation for Games",
    shortDescription:
      "A game development toolkit that uses AI to automatically generate game levels, characters, and narratives based on player preferences and behaviors.",
    technologyUsed: [
      "Unity",
      "C#",
      "Machine Learning",
      "Procedural Generation Algorithms",
      "Python",
      "GAN Models",
    ],
    similarProjects: [
      {
        name: "Ludo AI",
        link: "https://ludo.ai",
      },
      {
        name: "AI Dungeon",
        link: "https://play.aidungeon.io",
      },
    ],
    roles: [
      "Game Developer",
      "ML Engineer",
      "Narrative Designer",
      "3D Artist",
      "Game Designer",
    ],
  },
  {
    category: "Sustainable Energy",
    thesisTitle: "AI-Optimized Smart Grid Management System",
    shortDescription:
      "A platform that uses AI to predict energy demand, optimize distribution, and integrate renewable sources into the power grid more effectively.",
    technologyUsed: [
      "Python",
      "TensorFlow",
      "IoT",
      "Time Series Analysis",
      "SCADA Integration",
      "React",
    ],
    similarProjects: [
      {
        name: "AutoGrid",
        link: "https://www.auto-grid.com",
      },
      {
        name: "Stem",
        link: "https://www.stem.com",
      },
    ],
    roles: [
      "Machine Learning Engineer",
      "Energy Systems Engineer",
      "IoT Developer",
      "Frontend Developer",
      "Data Scientist",
    ],
  },
  {
    category: "Natural Language Processing",
    thesisTitle: "Multilingual Customer Support Automation",
    shortDescription:
      "An NLP platform that handles customer service inquiries in multiple languages, routing complex issues to human agents with appropriate context.",
    technologyUsed: [
      "Python",
      "BERT",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
    ],
    roles: [
      "NLP Engineer",
      "Machine Learning Engineer",
      "Backend Developer",
      "Frontend Developer",
      "DevOps Engineer",
      "Product Manager",
      "UX/UI Designer",
    ],
    similarProjects: [
      {
        name: "Ada",
        link: "https://www.ada.cx",
      },
      {
        name: "Kore.ai",
        link: "https://kore.ai",
      },
    ],
  },
];
