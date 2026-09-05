
const projectsData = [
  // 1-10: Healthcare & AI/ML
  {
    id: "med-demand",
    title: "Medicine Demand Prediction System",
    shortDescription: "Predicts the demand for medicines in pharmacies using historical sales data and machine learning.",
    description: "This project uses Machine Learning algorithms to analyze historical sales data, seasonal trends, and local demographics to predict future medicine demand. This helps pharmacies maintain optimal inventory, reduce waste, and avoid stockouts of critical drugs.",
    branches: ["CSE", "IT", "BCA", "MCA"],
    skills: ["Python", "Machine Learning", "AI", "SQL"],
    interests: ["Healthcare", "Data Science"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "Scikit-Learn", "Pandas", "Flask", "React"],
    goal: "Academic",
    features: ["Time-series forecasting", "Seasonal trend analysis", "Low stock alerts", "Dashboard"],
    innovationIdeas: ["Integrate weather data", "Predict local outbreaks"]
  },
  {
    id: "ai-health-assist",
    title: "AI Healthcare Assistant",
    shortDescription: "A smart chatbot that assesses symptoms and provides medical triage recommendations.",
    description: "An AI-powered conversational agent designed to help users identify potential medical conditions based on symptoms. Uses NLP to suggest possible diagnoses and recommend when to see a doctor.",
    branches: ["CSE", "IT", "ECE"],
    skills: ["Python", "AI", "NLP", "JavaScript"],
    interests: ["Healthcare"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 4,
    technologies: ["Python", "Transformers", "React", "Node.js"],
    goal: "Startup Idea",
    features: ["Symptom checker", "Medical APIs", "User profiles"],
    innovationIdeas: ["Multilingual support", "Voice input"]
  },
  {
    id: "disease-risk-pred",
    title: "Disease Risk Prediction System",
    shortDescription: "Predicts user's risk of chronic diseases using lifestyle and genetic markers.",
    description: "Applies predictive modeling to user-provided health data (like BMI, age, activity level, and blood test results) to estimate the risk of developing diabetes, heart disease, or hypertension.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Machine Learning", "Data Science"],
    interests: ["Healthcare", "AI"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "XGBoost", "FastAPI", "Vue.js"],
    goal: "Research",
    features: ["Risk scoring", "Health tracking", "Dietary suggestions"],
    innovationIdeas: ["Wearable data integration", "Genetic API links"]
  },
  {
    id: "med-image-analysis",
    title: "Medical Image Analysis System",
    shortDescription: "Uses Deep Learning to detect anomalies in X-Rays and MRI scans.",
    description: "A computer vision system that analyzes medical imagery such as chest X-rays to detect pneumonia or tumors, acting as a second-opinion tool for radiologists.",
    branches: ["CSE", "ECE", "MCA"],
    skills: ["Python", "Computer Vision", "Deep Learning"],
    interests: ["Healthcare", "AI"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 3,
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "React"],
    goal: "Research",
    features: ["Image segmentation", "Anomaly detection bounding boxes", "Confidence scores"],
    innovationIdeas: ["3D MRI rendering", "Federated learning for privacy"]
  },
  {
    id: "smart-hospital",
    title: "Smart Hospital Management System",
    shortDescription: "A comprehensive hospital management platform with AI-driven bed allocation.",
    description: "Modernizes hospital workflows by providing a unified SaaS platform for patient records, billing, and intelligent bed and resource allocation based on predicted patient influx.",
    branches: ["CSE", "IT", "BCA"],
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    interests: ["Healthcare", "Web / SaaS"],
    difficulty: "Intermediate",
    duration: "3 months",
    teamSize: 4,
    technologies: ["React", "Express", "PostgreSQL", "Docker"],
    goal: "Startup Idea",
    features: ["Electronic Health Records", "Smart Bed Allocation", "Billing Module"],
    innovationIdeas: ["IoT tracking for equipment", "Automated insurance claim processing"]
  },
  {
    id: "patient-appointment",
    title: "Patient Appointment Prediction System",
    shortDescription: "Predicts patient no-shows to optimize clinic scheduling.",
    description: "Analyzes historical appointment data, weather, and patient demographics to predict the likelihood of a no-show, allowing clinics to overbook optimally.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Machine Learning", "Data Science"],
    interests: ["Healthcare", "Finance"],
    difficulty: "Beginner",
    duration: "1 month",
    teamSize: 2,
    technologies: ["Python", "Scikit-Learn", "Streamlit"],
    goal: "Academic",
    features: ["No-show probability", "Automated reminders", "Schedule optimization"],
    innovationIdeas: ["Dynamic pricing based on demand", "WhatsApp API integration"]
  },
  {
    id: "drug-recommendation",
    title: "AI-Based Drug Recommendation Assistant",
    shortDescription: "Recommends generic drug alternatives based on active ingredients.",
    description: "Helps users find affordable generic alternatives to expensive branded medicines using an NLP-driven search and matching engine across pharmacological databases.",
    branches: ["CSE", "IT", "MCA"],
    skills: ["Python", "NLP", "JavaScript"],
    interests: ["Healthcare", "Social Impact"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "Spacy", "Node.js", "MongoDB"],
    goal: "Social Impact",
    features: ["Drug matching", "Price comparison", "Side-effect warnings"],
    innovationIdeas: ["Barcode scanner for pill bottles", "Pharmacy stock checking"]
  },
  {
    id: "mental-wellness",
    title: "Mental Wellness Support Assistant",
    shortDescription: "A private conversational agent offering CBT-based coping strategies.",
    description: "A mental health app that uses sentiment analysis on user journals and conversations to provide Cognitive Behavioral Therapy (CBT) exercises and track mood over time.",
    branches: ["CSE", "IT", "ECE"],
    skills: ["Python", "NLP", "React", "AI"],
    interests: ["Healthcare", "Social Impact"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 4,
    technologies: ["Python", "HuggingFace", "React Native", "Firebase"],
    goal: "Startup Idea",
    features: ["Mood tracking", "CBT chatbots", "Crisis hotline routing"],
    innovationIdeas: ["Voice sentiment analysis", "Anonymous peer-support matching"]
  },

  // 9-15: Education
  {
    id: "student-perf-pred",
    title: "Student Performance Prediction System",
    shortDescription: "Predicts student academic outcomes to identify those needing early intervention.",
    description: "Analyzes attendance, past grades, and online learning platform engagement to predict final exam scores, helping teachers provide timely support.",
    branches: ["CSE", "IT", "BCA"],
    skills: ["Python", "Machine Learning", "SQL"],
    interests: ["Education", "Data Science"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["Python", "Pandas", "Django", "Chart.js"],
    goal: "Academic",
    features: ["Risk dashboard for teachers", "Automated alerts", "Performance trend graphs"],
    innovationIdeas: ["Incorporate emotional analysis from forum posts", "Gamification of study plans"]
  },
  {
    id: "ai-study-planner",
    title: "AI Study Planner",
    shortDescription: "Generates personalized, adaptive study schedules based on deadlines.",
    description: "A smart calendar app that takes exam dates, syllabus size, and user learning speed to automatically generate and adapt a daily study schedule.",
    branches: ["CSE", "IT"],
    skills: ["JavaScript", "React", "Node.js", "AI"],
    interests: ["Education"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API"],
    goal: "Startup Idea",
    features: ["Adaptive scheduling", "Pomodoro timer", "Progress tracking"],
    innovationIdeas: ["Sync with university LMS", "Collaborative study groups"]
  },
  {
    id: "personalized-learning",
    title: "Personalized Learning Recommendation System",
    shortDescription: "Recommends courses and resources tailored to a student's learning style.",
    description: "Uses collaborative filtering and content-based recommendation to suggest articles, videos, and courses based on a student's past interactions and quiz performance.",
    branches: ["CSE", "IT", "MCA"],
    skills: ["Python", "Machine Learning", "Data Science"],
    interests: ["Education", "AI"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 4,
    technologies: ["Python", "Surprise/Scikit-learn", "React", "PostgreSQL"],
    goal: "Research",
    features: ["Resource matching", "Learning path generation", "Skill gap analysis"],
    innovationIdeas: ["Knowledge graph visualization", "Micro-learning nuggets generation"]
  },
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    shortDescription: "Parses resumes and ranks them against job descriptions using NLP.",
    description: "An automated ATS (Applicant Tracking System) that helps HR professionals by parsing resumes, extracting key skills, and scoring them against specific job descriptions to find the best matches quickly.",
    branches: ["CSE", "IT", "MCA", "BCA"],
    skills: ["Python", "NLP", "React", "Node.js"],
    interests: ["Education", "Social Impact"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "Spacy", "React", "Express", "MongoDB"],
    goal: "Startup Idea",
    features: ["PDF/Word resume parsing", "Skill extraction and matching", "Candidate ranking dashboard"],
    innovationIdeas: ["Analyze github/portfolio links automatically", "Generate interview questions based on the resume"]
  },
  {
    id: "interview-prep",
    title: "AI Interview Preparation Assistant",
    shortDescription: "Simulates technical and HR interviews using conversational AI.",
    description: "Provides mock interview sessions via text or speech, evaluating the candidate's answers for technical accuracy and communication skills, providing detailed feedback.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Generative AI", "React"],
    interests: ["Education", "AI"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 4,
    technologies: ["Python", "LangChain", "OpenAI API", "React", "WebRTC"],
    goal: "Startup Idea",
    features: ["Mock interview sessions", "Real-time feedback", "Code evaluation"],
    innovationIdeas: ["Facial expression analysis", "Speech tone analysis"]
  },
  {
    id: "plagiarism-detection",
    title: "Plagiarism Detection System",
    shortDescription: "Detects copied content in assignments using NLP and web scraping.",
    description: "Compares submitted text against a database of previous submissions and internet sources to highlight identical or heavily paraphrased content.",
    branches: ["CSE", "IT", "MCA"],
    skills: ["Python", "NLP", "Web Development"],
    interests: ["Education", "Cybersecurity"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["Python", "NLTK", "ElasticSearch", "Flask"],
    goal: "Academic",
    features: ["Cosine similarity checking", "Source highlighting", "Batch processing"],
    innovationIdeas: ["Detect AI-generated text", "Cross-language plagiarism detection"]
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance Analytics System",
    shortDescription: "Automates attendance tracking using facial recognition.",
    description: "Replaces manual roll-calls by using classroom cameras and facial recognition to log attendance automatically, accompanied by an analytics dashboard for administration.",
    branches: ["CSE", "ECE"],
    skills: ["Python", "Computer Vision", "IoT"],
    interests: ["Education", "Automation"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "OpenCV", "Face_recognition", "React"],
    goal: "Academic",
    features: ["Real-time face tracking", "Spoofing detection", "Exportable reports"],
    innovationIdeas: ["Emotion detection to gauge class engagement", "Integration with physical turnstiles"]
  },

  // 16-20: Finance / FinTech
  {
    id: "fraud-detection",
    title: "Financial Fraud Detection System",
    shortDescription: "Identifies fraudulent credit card transactions in real-time.",
    description: "Applies anomaly detection algorithms to transaction streams to flag potentially fraudulent activities based on spending patterns, location, and frequency.",
    branches: ["CSE", "IT", "MCA"],
    skills: ["Python", "Machine Learning", "Data Science"],
    interests: ["Finance", "Cybersecurity"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 3,
    technologies: ["Python", "Scikit-Learn", "Kafka", "PostgreSQL"],
    goal: "Research",
    features: ["Real-time transaction streaming", "Anomaly scoring", "Admin alert dashboard"],
    innovationIdeas: ["Graph neural networks for fraud rings", "Explainable AI (XAI) for alert justification"]
  },
  {
    id: "expense-prediction",
    title: "Personal Expense Prediction System",
    shortDescription: "Categorizes and forecasts personal expenses.",
    description: "A personal finance app that automatically categorizes bank transactions and predicts future monthly expenses to help users budget better.",
    branches: ["CSE", "IT", "BCA"],
    skills: ["JavaScript", "Python", "Machine Learning"],
    interests: ["Finance", "Web / SaaS"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["React", "Node.js", "Python (FastAPI)", "Plaid API"],
    goal: "Startup Idea",
    features: ["Transaction categorization", "Budget forecasting", "Goal tracking"],
    innovationIdeas: ["Receipt scanning OCR", "Gamified saving challenges"]
  },
  {
    id: "credit-risk",
    title: "Credit Risk Prediction System",
    shortDescription: "Evaluates loan applicant risk using alternative data.",
    description: "Determines the probability of loan default using not just credit scores, but alternative data like utility payments and employment history.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Data Science", "Machine Learning"],
    interests: ["Finance", "Data Science"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["Python", "LightGBM", "Pandas", "Streamlit"],
    goal: "Academic",
    features: ["Risk probability score", "Feature importance visualization", "Approval workflow"],
    innovationIdeas: ["Incorporate social media data ethically", "Blockchain for verifiable credentials"]
  },
  {
    id: "stock-sentiment",
    title: "Stock Market Sentiment Analyzer",
    shortDescription: "Predicts stock movements based on financial news and Twitter sentiment.",
    description: "Scrapes financial news portals and social media to gauge public sentiment about specific stocks, correlating this data with historical price movements.",
    branches: ["CSE", "IT"],
    skills: ["Python", "NLP", "Machine Learning", "Data Science"],
    interests: ["Finance", "AI"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 3,
    technologies: ["Python", "NLTK/VADER", "BeautifulSoup", "React"],
    goal: "Research",
    features: ["Real-time sentiment index", "News aggregation", "Price correlation charts"],
    innovationIdeas: ["Audio sentiment from earnings calls", "Real-time trading bot integration"]
  },
  {
    id: "ai-financial-assist",
    title: "AI Financial Assistant",
    shortDescription: "A conversational bot for personal finance advice and portfolio management.",
    description: "An LLM-powered assistant that answers questions about tax planning, investment strategies, and analyzes the user's uploaded portfolio for diversification.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Generative AI", "Web Development"],
    interests: ["Finance", "AI"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 4,
    technologies: ["Python", "LangChain", "Next.js", "Firebase"],
    goal: "Startup Idea",
    features: ["Conversational financial advice", "Portfolio analysis", "Tax calculator"],
    innovationIdeas: ["Voice-activated queries", "Integration with live brokerage APIs"]
  },

  // 21-25: Agriculture
  {
    id: "crop-disease",
    title: "Crop Disease Detection System",
    shortDescription: "Identifies plant diseases from leaf images using computer vision.",
    description: "Farmers can upload images of diseased leaves. The system uses CNNs to identify the disease and recommends appropriate pesticides and treatments.",
    branches: ["CSE", "ECE", "IT"],
    skills: ["Python", "Computer Vision", "Deep Learning"],
    interests: ["Agriculture", "Environment", "Social Impact"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "TensorFlow", "Keras", "Flutter/React Native"],
    goal: "Social Impact",
    features: ["Disease classification", "Treatment recommendations", "Offline mobile mode"],
    innovationIdeas: ["Drone imagery integration", "Community reporting map for outbreaks"]
  },
  {
    id: "smart-crop-rec",
    title: "Smart Crop Recommendation System",
    shortDescription: "Suggests the best crop to plant based on soil and weather data.",
    description: "Analyzes soil metrics (N, P, K, pH) and historical climate data to recommend the most profitable and viable crop for a specific plot of land.",
    branches: ["CSE", "IT", "Mechanical"],
    skills: ["Python", "Machine Learning", "Data Science"],
    interests: ["Agriculture", "Environment"],
    difficulty: "Beginner",
    duration: "1 month",
    teamSize: 2,
    technologies: ["Python", "Scikit-Learn", "Flask", "React"],
    goal: "Academic",
    features: ["Crop ranking", "Fertilizer suggestion", "Yield estimation"],
    innovationIdeas: ["Market price integration for profitability analysis", "Climate change projection models"]
  },
  {
    id: "agri-yield-pred",
    title: "Agriculture Yield Prediction",
    shortDescription: "Forecasts crop yields using satellite imagery and weather data.",
    description: "Combines remote sensing data (NDVI) and meteorological forecasts to predict the total yield of a farm, aiding in food security planning and supply chain management.",
    branches: ["CSE", "Civil", "IT"],
    skills: ["Python", "Data Science", "Machine Learning"],
    interests: ["Agriculture", "Data Science"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 3,
    technologies: ["Python", "GeoPandas", "Random Forest", "Vue.js"],
    goal: "Research",
    features: ["Satellite data parsing", "Yield forecasting", "Interactive maps"],
    innovationIdeas: ["Pest swarming prediction", "Integration with agricultural insurance pricing"]
  },
  {
    id: "soil-quality",
    title: "Soil Quality Prediction System",
    shortDescription: "IoT platform to monitor and predict soil degradation.",
    description: "Uses distributed IoT sensors to track soil moisture, pH, and nutrients, predicting long-term soil health and alerting farmers to degradation.",
    branches: ["ECE", "EEE", "CSE"],
    skills: ["IoT", "Hardware", "Python", "Data Science"],
    interests: ["Agriculture", "IoT"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Arduino", "Sensors", "Python", "MQTT", "Grafana"],
    goal: "Research",
    features: ["Real-time sensor dashboard", "Degradation alerts", "Historical trends"],
    innovationIdeas: ["Solar-powered sensor nodes", "Automated soil remediation suggestions"]
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation System",
    shortDescription: "Automates water pumps based on real-time soil moisture and weather.",
    description: "An IoT system that saves water by triggering irrigation only when soil moisture drops below a threshold and no rain is forecasted.",
    branches: ["ECE", "EEE", "Mechanical", "CSE"],
    skills: ["IoT", "C++", "JavaScript"],
    interests: ["Agriculture", "Environment"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Raspberry Pi", "Node.js", "React", "Weather API"],
    goal: "Social Impact",
    features: ["Automated pump control", "Water usage analytics", "Mobile remote control"],
    innovationIdeas: ["Machine learning to predict exact water needs per plant type", "Leak detection in pipes"]
  },

  // 26-30: Cybersecurity
  {
    id: "cyber-threat",
    title: "Cybersecurity Threat Detection System",
    shortDescription: "Monitors server logs to detect anomalous network behavior.",
    description: "Uses unsupervised machine learning to analyze network traffic and server logs, identifying zero-day attacks and anomalous patterns that bypass traditional firewalls.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Machine Learning", "Cybersecurity", "Networking"],
    interests: ["Cybersecurity"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 3,
    technologies: ["Python", "ElasticSearch", "Logstash", "Kibana (ELK)", "Scikit-Learn"],
    goal: "Research",
    features: ["Log ingestion", "Anomaly detection", "Threat intelligence dashboard"],
    innovationIdeas: ["Automated firewall rule updates", "Honeypot integration"]
  },
  {
    id: "phishing-detection",
    title: "Phishing Detection System",
    shortDescription: "Browser extension that identifies phishing websites in real-time.",
    description: "Analyzes URL structures, SSL certificates, and page content using NLP to warn users before they enter credentials into a phishing site.",
    branches: ["CSE", "IT", "MCA"],
    skills: ["JavaScript", "Python", "Machine Learning", "Web Development"],
    interests: ["Cybersecurity", "Social Impact"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["Python", "FastAPI", "JavaScript", "Browser Extension API"],
    goal: "Academic",
    features: ["Real-time URL scoring", "Visual warnings", "Crowdsourced reporting"],
    innovationIdeas: ["Deep learning for logo spoofing detection", "Email client integration"]
  },
  {
    id: "ids",
    title: "Network Intrusion Detection System",
    shortDescription: "Packet sniffer and analyzer for detecting malicious network traffic.",
    description: "Captures live network packets and classifies them as normal or malicious (e.g., DDoS, port scanning) using trained machine learning models.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Networking", "Cybersecurity"],
    interests: ["Cybersecurity"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 3,
    technologies: ["Python", "Scapy", "TensorFlow", "React"],
    goal: "Research",
    features: ["Live packet capture", "Traffic classification", "Alerting system"],
    innovationIdeas: ["Graph-based botnet detection", "Integration with SIEM tools"]
  },
  {
    id: "password-security",
    title: "Password Security Analyzer",
    shortDescription: "Checks password strength against breached databases and common patterns.",
    description: "A tool for enterprises to audit employee passwords by hashing and checking them against HaveIBeenPwned APIs and analyzing complexity without exposing the plaintext.",
    branches: ["CSE", "IT", "BCA"],
    skills: ["Python", "Cybersecurity", "Cryptography"],
    interests: ["Cybersecurity"],
    difficulty: "Beginner",
    duration: "1 month",
    teamSize: 2,
    technologies: ["Python", "Flask", "React", "Hashing Algorithms"],
    goal: "Academic",
    features: ["Strength scoring", "Breach checking", "Policy enforcement simulation"],
    innovationIdeas: ["Passkey/WebAuthn demonstration module", "Generate mnemonic passwords"]
  },
  {
    id: "malware-classification",
    title: "Malware Classification System",
    shortDescription: "Classifies executable files as malware or benign using static analysis.",
    description: "Extracts features from PE (Portable Executable) headers and uses machine learning to classify unknown files as ransomware, trojans, or benign software without executing them.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Machine Learning", "Cybersecurity"],
    interests: ["Cybersecurity", "AI"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 3,
    technologies: ["Python", "PEfile", "XGBoost", "Streamlit"],
    goal: "Research",
    features: ["Static feature extraction", "Family classification", "Safe sandbox reporting"],
    innovationIdeas: ["Dynamic analysis integration (behavioral)", "LLM-generated explanation of the malware's intent"]
  },

  // 31-35: E-Commerce & Business
  {
    id: "ecommerce-rec",
    title: "E-Commerce Recommendation System",
    shortDescription: "Personalized product recommendations based on user browsing and purchase history.",
    description: "Implements collaborative filtering and content-based recommendation algorithms to suggest products to users in an e-commerce platform, increasing sales and user engagement.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Machine Learning", "SQL"],
    interests: ["E-commerce", "Finance"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["Python", "Scikit-learn", "PostgreSQL", "Redis"],
    goal: "Academic",
    features: ["User-item matrix generation", "Real-time recommendation", "A/B testing"],
    innovationIdeas: ["Session-based recommendations (no login)", "Visual search recommendations"]
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    shortDescription: "Predicts which customers are likely to cancel their subscription.",
    description: "Analyzes usage logs, support tickets, and billing history to identify at-risk customers, allowing businesses to offer targeted retention discounts.",
    branches: ["CSE", "IT", "MCA"],
    skills: ["Python", "Data Science", "Machine Learning"],
    interests: ["E-commerce", "Data Science"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["Python", "Pandas", "LightGBM", "Tableau/Dash"],
    goal: "Academic",
    features: ["Churn probability scoring", "Feature impact analysis", "Retention action triggers"],
    innovationIdeas: ["Sentiment analysis of support emails as a feature", "Automated discount email dispatch"]
  },
  {
    id: "sales-forecast",
    title: "Sales Forecasting System",
    shortDescription: "Predicts future sales for retail stores using historical data.",
    description: "Uses time-series forecasting models (like ARIMA or Prophet) to predict daily/weekly sales for different products, aiding in inventory and staff planning.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Machine Learning", "Data Science"],
    interests: ["E-commerce", "Finance"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["Python", "Prophet", "Streamlit", "PostgreSQL"],
    goal: "Academic",
    features: ["Time-series forecasting", "Holiday impact modeling", "Store-level drill down"],
    innovationIdeas: ["Incorporate macroeconomic indicators", "Competitor pricing scraping"]
  },
  {
    id: "product-demand",
    title: "Product Demand Prediction",
    shortDescription: "Predicts the lifecycle demand of newly launched products.",
    description: "Uses attributes of a new product (category, price, brand) and compares them to historical launches to predict its sales trajectory over the first 6 months.",
    branches: ["CSE", "IT", "BCA"],
    skills: ["Python", "Machine Learning", "Data Science"],
    interests: ["E-commerce"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 3,
    technologies: ["Python", "TensorFlow", "React", "Flask"],
    goal: "Research",
    features: ["Lifecycle forecasting", "Clustering similar products", "Inventory optimization"],
    innovationIdeas: ["Social media hype analysis for day-1 sales", "Dynamic pricing recommendations"]
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Assistant",
    shortDescription: "Automated support bot that resolves common customer queries.",
    description: "An NLP-based chatbot integrated into an e-commerce platform that can handle order tracking, return policies, and FAQs, routing complex issues to human agents.",
    branches: ["CSE", "IT"],
    skills: ["Python", "NLP", "JavaScript", "Web Development"],
    interests: ["E-commerce", "AI"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "Dialogflow / Rasa", "Node.js", "React"],
    goal: "Startup Idea",
    features: ["Intent recognition", "Order API integration", "Human handoff"],
    innovationIdeas: ["Multilingual support", "Sentiment-based routing (angry customers to seniors)"]
  },

  // 36-40: Smart Environment & Energy
  {
    id: "smart-waste",
    title: "Smart Waste Management System",
    shortDescription: "IoT system to monitor garbage bin fill levels and optimize collection routes.",
    description: "Uses ultrasonic sensors in public bins to transmit fill levels. A central server optimizes the route for garbage trucks, saving fuel and time.",
    branches: ["ECE", "CSE", "Mechanical", "Civil"],
    skills: ["IoT", "Hardware", "Python", "Algorithms"],
    interests: ["Environment", "Smart City"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 4,
    technologies: ["Arduino", "Ultrasonic Sensors", "Python", "Google Maps API", "React"],
    goal: "Social Impact",
    features: ["Real-time fill monitoring", "Route optimization (TSP algorithm)", "Driver mobile app"],
    innovationIdeas: ["Solar-powered compactors", "AI camera to detect recyclable vs organic waste"]
  },
  {
    id: "air-quality",
    title: "Air Quality Prediction System",
    shortDescription: "Predicts AQI levels based on traffic, weather, and historical data.",
    description: "Aggregates data from various city sensors and weather forecasts to predict the Air Quality Index (AQI) for the next 48 hours, providing health warnings.",
    branches: ["CSE", "IT", "Civil"],
    skills: ["Python", "Data Science", "Machine Learning"],
    interests: ["Environment", "Smart City"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["Python", "Scikit-Learn", "FastAPI", "React Map GL"],
    goal: "Social Impact",
    features: ["AQI forecasting", "Heatmap visualization", "Push notifications for severe pollution"],
    innovationIdeas: ["Predict impact of public transport strikes on AQI", "Personalized health alerts based on user asthma data"]
  },
  {
    id: "water-quality",
    title: "Water Quality Monitoring System",
    shortDescription: "IoT network to monitor pollutants in rivers and reservoirs.",
    description: "Deploys floating IoT nodes to measure pH, turbidity, and dissolved oxygen in water bodies, transmitting data to a dashboard to detect industrial dumping.",
    branches: ["ECE", "EEE", "CSE", "Civil"],
    skills: ["IoT", "Python", "Web Development"],
    interests: ["Environment", "IoT"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["ESP32", "Water Sensors", "Node.js", "InfluxDB", "Grafana"],
    goal: "Social Impact",
    features: ["Real-time telemetry", "Contamination alerts", "Historical data export"],
    innovationIdeas: ["Machine learning to trace the source of pollution", "Blockchain for tamper-proof environmental records"]
  },
  {
    id: "energy-consumption",
    title: "Energy Consumption Prediction",
    shortDescription: "Forecasts electricity demand for smart grids.",
    description: "Uses historical usage data and weather forecasts to predict the energy demand for a neighborhood, helping utilities balance load and integrate renewable energy.",
    branches: ["EEE", "CSE", "IT"],
    skills: ["Python", "Machine Learning", "Data Science"],
    interests: ["Environment", "Smart City"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "TensorFlow", "Pandas", "React"],
    goal: "Research",
    features: ["Load forecasting", "Peak hour identification", "Renewable generation estimation"],
    innovationIdeas: ["V2G (Vehicle to Grid) optimization", "App to incentivize users to shift usage off-peak"]
  },
  {
    id: "smart-electricity",
    title: "Smart Electricity Usage Analyzer",
    shortDescription: "Disaggregates whole-house energy meter data into individual appliances.",
    description: "Uses Non-Intrusive Load Monitoring (NILM) algorithms to look at a single smart meter's data and deduce how much energy the fridge, AC, and lights are using separately.",
    branches: ["CSE", "EEE"],
    skills: ["Python", "Deep Learning", "Signal Processing"],
    interests: ["Environment", "AI"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 3,
    technologies: ["Python", "PyTorch", "React", "Flask"],
    goal: "Research",
    features: ["Appliance level breakdown", "Energy saving tips", "Anomaly detection (e.g., broken fridge)"],
    innovationIdeas: ["Integration with smart home hubs for automated shutoff", "Carbon footprint calculation"]
  },

  // 41-50: Smart City, Transportation & GenAI
  {
    id: "smart-traffic",
    title: "Smart Traffic Management System",
    shortDescription: "Uses computer vision to adjust traffic lights based on vehicle density.",
    description: "Replaces fixed timers by using CCTV camera feeds and computer vision to count vehicles and dynamically adjust traffic light timings to optimize flow.",
    branches: ["CSE", "ECE", "Civil"],
    skills: ["Python", "Computer Vision", "AI"],
    interests: ["Smart City", "Transportation"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 4,
    technologies: ["Python", "OpenCV", "YOLO", "TensorFlow"],
    goal: "Social Impact",
    features: ["Real-time vehicle counting", "Emergency vehicle preemption", "Analytics dashboard"],
    innovationIdeas: ["Pedestrian safety tracking", "V2I (Vehicle-to-Infrastructure) communication"]
  },
  {
    id: "accident-risk",
    title: "Accident Risk Prediction System",
    shortDescription: "Identifies accident-prone zones using historical and real-time data.",
    description: "Analyzes historical accident reports, road conditions, weather, and traffic speed to generate a real-time risk map for city planners and navigation apps.",
    branches: ["CSE", "Civil", "IT"],
    skills: ["Python", "Data Science", "Machine Learning"],
    interests: ["Transportation", "Smart City"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "GeoPandas", "Scikit-Learn", "React Map GL"],
    goal: "Research",
    features: ["Hotspot mapping", "Risk forecasting", "Route safety scoring"],
    innovationIdeas: ["Integration with dashcams to detect near-misses", "Real-time alerts to drivers"]
  },
  {
    id: "public-transport",
    title: "Public Transport Demand Prediction",
    shortDescription: "Predicts bus/train crowding to optimize fleet deployment.",
    description: "Uses ticketing data, weather, and local events to forecast passenger demand on specific routes, allowing transport authorities to deploy extra buses where needed.",
    branches: ["CSE", "IT", "Civil"],
    skills: ["Python", "Data Science", "Machine Learning"],
    interests: ["Transportation", "Smart City"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 2,
    technologies: ["Python", "XGBoost", "Flask", "Vue.js"],
    goal: "Academic",
    features: ["Crowd forecasting", "Route optimization", "Passenger mobile app"],
    innovationIdeas: ["Wi-Fi probe request counting for real-time crowding", "Dynamic ticket pricing"]
  },
  {
    id: "smart-parking",
    title: "Smart Parking System",
    shortDescription: "IoT/Vision based system to guide drivers to empty parking spots.",
    description: "Uses either ground sensors or overhead cameras to detect empty parking spaces in a lot and guides drivers to them via a mobile app, reducing emissions from circling.",
    branches: ["ECE", "CSE", "IT"],
    skills: ["IoT", "Computer Vision", "Web Development"],
    interests: ["Smart City", "Transportation"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Raspberry Pi", "OpenCV/Sensors", "Node.js", "React Native"],
    goal: "Startup Idea",
    features: ["Real-time availability", "Spot reservation", "Automated billing"],
    innovationIdeas: ["Find my car feature using cameras", "Dynamic pricing based on occupancy"]
  },
  {
    id: "fake-news",
    title: "Fake News Detection System",
    shortDescription: "Browser extension that analyzes articles and flags potential misinformation.",
    description: "Uses NLP to analyze the text of news articles and compare them against verified sources to determine the probability of it being fake news.",
    branches: ["CSE", "IT", "MCA"],
    skills: ["Python", "Machine Learning", "NLP", "JavaScript"],
    interests: ["Social Impact", "Cybersecurity"],
    difficulty: "Intermediate",
    duration: "1 month",
    teamSize: 2,
    technologies: ["Python", "NLTK/Spacy", "Browser Extension API", "Flask"],
    goal: "Academic",
    features: ["Real-time article analysis", "Credibility score", "Highlighting questionable claims"],
    innovationIdeas: ["Analyze images for deepfakes", "Track claim spread on social media"]
  },
  {
    id: "sentiment-platform",
    title: "Sentiment Analysis Platform",
    shortDescription: "Brand monitoring tool that analyzes social media sentiment.",
    description: "A SaaS platform for brands to track mentions across Twitter, Reddit, and news sites, using NLP to classify sentiment and detect PR crises early.",
    branches: ["CSE", "IT", "BCA"],
    skills: ["Python", "NLP", "Web Development"],
    interests: ["Web / SaaS", "AI"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "HuggingFace", "React", "Node.js"],
    goal: "Startup Idea",
    features: ["Social listening", "Sentiment classification", "Trend analytics dashboard"],
    innovationIdeas: ["Emotion classification (anger, joy, sadness)", "Automated AI response suggestions"]
  },
  {
    id: "doc-summarization",
    title: "Document Summarization Assistant",
    shortDescription: "Uses Generative AI to summarize long PDFs and research papers.",
    description: "A web app where students or professionals can upload long documents and receive concise, extractive or abstractive summaries, with the ability to chat with the document.",
    branches: ["CSE", "IT"],
    skills: ["Python", "Generative AI", "NLP", "Web Development"],
    interests: ["Education", "Productivity"],
    difficulty: "Advanced",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Python", "LangChain", "OpenAI API", "React"],
    goal: "Startup Idea",
    features: ["PDF parsing", "Abstractive summarization", "Q&A chatbot"],
    innovationIdeas: ["Generate mind maps from text", "Multi-document comparative summary"]
  },
  {
    id: "content-moderation",
    title: "AI Content Moderation System",
    shortDescription: "Automatically flags toxic text, images, and videos in online communities.",
    description: "An API service that platforms can integrate to automatically scan user-generated content for hate speech, NSFW imagery, and spam, reducing the load on human moderators.",
    branches: ["CSE", "IT", "MCA"],
    skills: ["Python", "Deep Learning", "NLP", "Computer Vision"],
    interests: ["Social Impact", "AI"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 4,
    technologies: ["Python", "TensorFlow", "Transformers", "FastAPI"],
    goal: "Research",
    features: ["Text toxicity scoring", "Image NSFW detection", "Moderator dashboard"],
    innovationIdeas: ["Context-aware moderation (sarcasm detection)", "Video frame sampling for live streams"]
  },
  {
    id: "smart-home",
    title: "Smart Home IoT Automation",
    shortDescription: "A centralized hub to control and automate diverse smart home devices.",
    description: "A local, privacy-focused home automation server that connects various sensors, lights, and appliances, allowing users to create complex automation routines without relying on the cloud.",
    branches: ["ECE", "EEE", "CSE"],
    skills: ["IoT", "Python", "Networking"],
    interests: ["IoT", "Automation"],
    difficulty: "Intermediate",
    duration: "2 months",
    teamSize: 3,
    technologies: ["Raspberry Pi", "Home Assistant / Custom Python Hub", "MQTT", "React"],
    goal: "Startup Idea",
    features: ["Device discovery", "Routine builder", "Energy monitoring", "Voice control"],
    innovationIdeas: ["Presence detection using WiFi signals", "Predictive automation based on user habits"]
  },
  {
    id: "disaster-management",
    title: "Disaster Management & Early Warning System",
    shortDescription: "Aggregates geological and weather data to provide early warnings.",
    description: "A platform that collects data from seismic sensors, river level gauges, and weather APIs to predict floods or earthquakes, sending automated SMS alerts to vulnerable populations.",
    branches: ["CSE", "IT", "ECE", "Civil"],
    skills: ["Python", "Data Science", "Web Development", "IoT"],
    interests: ["Social Impact", "Environment"],
    difficulty: "Advanced",
    duration: "3 months",
    teamSize: 4,
    technologies: ["Python", "Django", "Twilio API", "React Map GL"],
    goal: "Social Impact",
    features: ["Real-time hazard map", "SMS/WhatsApp alerts", "Resource allocation dashboard for NGOs"],
    innovationIdeas: ["Drone image analysis for post-disaster damage assessment", "Crowdsourced SOS reporting"]
  }
];

export const projects = projectsData;

export function calculateMatchScore(student, project) {
  let score = 0;
  let reasons = [];
  let missedReasons = [];

  // Priority 1: Interest / Domain Compatibility (30 points)
  let interestMatch = false;
  if (student.interests === "Any") {
    score += 15;
    interestMatch = true;
  } else if (project.interests.includes(student.interests)) {
    score += 30;
    interestMatch = true;
    reasons.push(`Perfectly aligns with your interest in ${student.interests}.`);
  } else {
    // Penalty for strong domain mismatch
    score -= 15;
    missedReasons.push(`Domain mismatch (requires interest in ${project.interests.join('/')}).`);
  }

  // Normalize student skills
  const studentSkills = student.skills.map(s => s.toLowerCase().trim());
  const projectSkills = project.skills.map(s => s.toLowerCase());
  const projectTech = project.technologies.map(t => t.toLowerCase());

  // Priority 2: Skills Compatibility (25 points)
  let matchingSkills = [];
  projectSkills.forEach(ps => {
    if (studentSkills.some(ss => ss.includes(ps) || ps.includes(ss))) {
      matchingSkills.push(ps);
    }
  });
  if (projectSkills.length > 0) {
    const skillRatio = matchingSkills.length / projectSkills.length;
    score += Math.round(skillRatio * 25);
    if (matchingSkills.length > 0) {
      reasons.push(`Utilizes your core skills like ${matchingSkills.slice(0, 2).join(', ')}.`);
    }
    if (matchingSkills.length < projectSkills.length) {
      const missing = projectSkills.filter(ps => !matchingSkills.includes(ps));
      missedReasons.push(`Requires skills you haven't listed: ${missing.slice(0, 2).join(', ')}.`);
    }
  }

  // Priority 3: Technology Compatibility (15 points)
  let matchingTech = [];
  projectTech.forEach(pt => {
    if (studentSkills.some(ss => ss.includes(pt) || pt.includes(ss))) {
      matchingTech.push(pt);
    }
  });
  if (projectTech.length > 0) {
    const techRatio = matchingTech.length / projectTech.length;
    score += Math.round(techRatio * 15);
    if (matchingTech.length > 0) {
      reasons.push(`Matches your preferred tech stack (${matchingTech.slice(0, 2).join(', ')}).`);
    }
  }

  // Priority 4: Academic Branch Compatibility (15 points)
  if (project.branches.includes(student.branch)) {
    score += 15;
    reasons.push(`Excellent fit for ${student.branch} curriculum.`);
  } else {
    missedReasons.push(`More suitable for ${project.branches.slice(0, 2).join('/')} students.`);
  }

  // Priority 5: Project Goal (5 points)
  if (project.goal === student.goal) {
    score += 5;
    reasons.push(`Aligns with your goal: ${student.goal}.`);
  }

  // Priority 6: Duration Feasibility (5 points)
  const parseDuration = (d) => parseInt(d) || 0;
  if (parseDuration(project.duration) <= parseDuration(student.duration)) {
    score += 5;
    reasons.push(`Fits within your ${student.duration} timeframe.`);
  } else {
    missedReasons.push(`Takes ${project.duration}, exceeding your ${student.duration} timeline.`);
  }

  // Priority 7: Team Size Suitability (3 points)
  if (project.teamSize <= parseInt(student.teamSize)) {
    score += 3;
  }

  // Priority 8: Difficulty Compatibility (2 points)
  const difficultyMap = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };
  const sDiff = difficultyMap[student.skillLevel] || 2;
  const pDiff = difficultyMap[project.difficulty] || 2;
  if (sDiff >= pDiff) {
    score += 2;
  } else {
    missedReasons.push(`Difficulty is ${project.difficulty}, which may be challenging for your ${student.skillLevel} level.`);
  }

  // Format final score
  let finalScore = Math.max(score, 12); // minimum base score so it doesn't look completely broken
  finalScore = Math.min(finalScore, 98); // cap at 98 for realism
  
  // Clean up duplicate reasons or limit to top 4
  reasons = [...new Set(reasons)].slice(0, 4);
  if (reasons.length === 0) {
    reasons.push("An alternative option to consider based on general compatibility.");
  }
  
  missedReasons = [...new Set(missedReasons)];

  return {
    ...project,
    matchScore: finalScore,
    matchReasons: reasons,
    missedReasons: missedReasons
  };
}

export function getRecommendations(studentProfile) {
  const scoredProjects = projects.map(p => calculateMatchScore(studentProfile, p));
  return scoredProjects.sort((a, b) => b.matchScore - a.matchScore);
}
