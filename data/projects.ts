export type GroupId = 'data-finance' | 'applied-math' | 'productivity' | 'game-theory' | 'internship';

export interface Project {
    id: string;
    title: string;
    group: GroupId;
    description: string;
    problem: string;
    solution: string;
    techStack: string[];
    architecture?: {
        diagram?: string;
        description: string;
    };
    database?: {
        schema?: string;
        endpoints: Array<{ method: string; path: string; description: string }>;
    };
    ml?: {
        model: string;
        trainingData: string;
        metrics: Record<string, string | number>;
        inferenceLatency: string;
    };
    screenshots: string[];
    demoUrl?: string;
    repoUrl: string;
    deploymentBadges?: string[];
    timeline: {
        semester: string;
        month: string;
        milestones: string[];
    };
    resumeBullet: string;
}

export interface Group {
    id: GroupId;
    title: string;
    description: string;
    techStack: string[];
    progress: { mvp: boolean; v1: boolean; v2: boolean };
    thumbnail: string;
}

export const groups: Record<GroupId, Group> = {
    'data-finance': {
        id: 'data-finance',
        title: 'Data & Finance',
        description: 'Voice-driven finance analytics with Monte Carlo retirement projections and NLP2SQL.',
        techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
        progress: { mvp: true, v1: true, v2: false },
        thumbnail: '/images/finance-thumb.jpg',
    },
    'applied-math': {
        id: 'applied-math',
        title: 'Applied Math',
        description: 'Bayesian particle-filter heatmap and matrix-based image processing toolkit.',
        techStack: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
        progress: { mvp: true, v1: true, v2: true },
        thumbnail: '/images/math-thumb.jpg',
    },
    'productivity': {
        id: 'productivity',
        title: 'Productivity Tools',
        description: 'Integrated learning platform with SRS, resume evaluator, and chess trainer.',
        techStack: ['Next.js', 'PWA', 'TensorFlow.js'],
        progress: { mvp: true, v1: true, v2: false },
        thumbnail: '/images/prod-thumb.jpg',
    },
    'game-theory': {
        id: 'game-theory',
        title: 'Game Theory',
        description: 'Multi-agent market simulation and RL training pipelines for game agents.',
        techStack: ['Python', 'PyTorch', 'Reinforcement Learning'],
        progress: { mvp: true, v1: false, v2: false },
        thumbnail: '/images/game-thumb.jpg',
    },
    'internship': {
        id: 'internship',
        title: 'Internship & Class Projects',
        description: 'Sensor telemetry platform and flight routing simulator.',
        techStack: ['C++', 'IoT', 'MQTT', 'TimescaleDB'],
        progress: { mvp: true, v1: true, v2: true },
        thumbnail: '/images/intern-thumb.jpg',
    },
};

export const projects: Project[] = [
    {
        id: 'finance-dashboard',
        title: 'Personal Finance Dashboard',
        group: 'data-finance',
        description: 'A full-stack personal finance application with AI-powered insights, retirement planning, and voice-enabled analytics.',
        problem: 'Managing personal finances across multiple accounts is difficult, and existing tools lack customizable retirement projections or natural language interaction.',
        solution: 'Built a centralized dashboard that aggregates transactions, categorizes them using ML, and provides voice-activated insights and Monte Carlo simulations for retirement planning.',
        techStack: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
        architecture: {
            description: 'Microservices architecture with a Node.js API gateway, Python ML service for categorization and simulations, and React frontend.',
        },
        database: {
            endpoints: [
                { method: 'POST', path: '/api/upload', description: 'Upload and parse CSV transaction files' },
                { method: 'GET', path: '/api/dashboard/summary', description: 'Retrieve aggregated financial metrics' },
                { method: 'POST', path: '/simulate/monte-carlo', description: 'Run retirement simulations (ML Service)' },
            ],
        },
        ml: {
            model: 'Keyword-based Classifier + Random Forest (planned)',
            trainingData: 'Synthetic transaction dataset (10k+ records)',
            metrics: { accuracy: '94%', f1Score: '0.92' },
            inferenceLatency: '15ms',
        },
        screenshots: [],
        repoUrl: 'https://github.com/yourusername/finance-dashboard',
        demoUrl: 'https://finance-demo.yourdomain.com',
        timeline: {
            semester: 'Fall 2024',
            month: 'November',
            milestones: ['MVP Release', 'Voice Integration', 'Dockerization'],
        },
        resumeBullet: 'Built voice-driven finance analytics with Monte Carlo retirement projections and NLP2SQL; handled 10k+ synthetic transactions and integrated STT/TTS.',
    },
    {
        id: 'math-toolkit',
        title: 'Bayesian Particle Filter & Image Toolkit',
        group: 'applied-math',
        description: 'A comprehensive mathematical toolkit featuring Bayesian particle-filter heatmaps, matrix-based image processing with FFT visualization, and cryptography demonstrations.',
        problem: 'Visualizing complex mathematical concepts like Bayesian filtering and FFT in real-time is computationally expensive and often lacks intuitive UI for educational purposes.',
        solution: 'Developed an optimized Python/NumPy toolkit with interactive visualizations for particle filters and image processing algorithms, demonstrating complex math concepts in real-time.',
        techStack: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'OpenCV'],
        architecture: {
            description: 'Modular Python library with separate modules for filtering, image processing, and visualization. Uses vectorization for high-performance matrix operations.',
        },
        ml: {
            model: 'Bayesian Particle Filter',
            trainingData: 'N/A (Probabilistic Model)',
            metrics: { convergenceRate: '98%', trackingError: '<2px' },
            inferenceLatency: '5ms',
        },
        screenshots: [],
        repoUrl: 'https://github.com/yourusername/math-toolkit',
        timeline: {
            semester: 'Spring 2024',
            month: 'April',
            milestones: ['Core Matrix Engine', 'FFT Visualization', 'Particle Filter Demo'],
        },
        resumeBullet: 'Developed a Bayesian particle-filter heatmap and matrix-based image processing toolkit with FFT visualization and cryptography demonstrations.',
    },
    {
        id: 'productivity-suite',
        title: 'Integrated Learning Platform',
        group: 'productivity',
        description: 'An all-in-one productivity suite featuring a 7-stage Spaced Repetition System (SRS), TTS pause control, ATS resume evaluator, and chess trainer.',
        problem: 'Learning tools are often fragmented. Students need a unified platform that combines memorization (SRS), skill acquisition (chess), and career prep (resume evaluation).',
        solution: 'Built an offline-first PWA that integrates multiple productivity tools. Features a custom SRS algorithm, browser-based TTS control, and an AI-powered resume scorer.',
        techStack: ['Next.js', 'PWA', 'TensorFlow.js', 'IndexedDB', 'Web Speech API'],
        architecture: {
            description: 'Client-side heavy PWA architecture using IndexedDB for offline storage and service workers for caching. AI models run in-browser via TensorFlow.js.',
        },
        database: {
            endpoints: [
                { method: 'POST', path: '/api/sync', description: 'Sync local PWA data to cloud' },
                { method: 'POST', path: '/api/resume/score', description: 'Evaluate resume against job description' },
            ],
        },
        screenshots: [],
        repoUrl: 'https://github.com/yourusername/productivity-suite',
        demoUrl: 'https://prod-suite.yourdomain.com',
        timeline: {
            semester: 'Fall 2023',
            month: 'December',
            milestones: ['PWA Offline Mode', 'SRS Algorithm', 'Chess Engine Integration'],
        },
        resumeBullet: 'Designed an integrated learning platform (7-stage SRS, TTS pause, ATS resume evaluator, chess trainer) demonstrated with offline PWA support.',
    },
    {
        id: 'market-sim',
        title: 'Multi-Agent Market Simulation',
        group: 'game-theory',
        description: 'A complex simulation environment for training Reinforcement Learning agents in market dynamics, featuring promoter roles and behavioral experiments.',
        problem: 'Understanding emergent market behaviors and agent interactions in mixed-incentive environments requires complex simulation capabilities not found in standard RL environments.',
        solution: 'Implemented a multi-agent environment where RL agents compete and cooperate. Includes a "promoter" role to influence market dynamics and tools to analyze behavioral shifts.',
        techStack: ['Python', 'PyTorch', 'OpenAI Gym', 'Pandas', 'Seaborn'],
        architecture: {
            description: 'Custom OpenAI Gym environment with multi-agent support. Agents are trained using PPO (Proximal Policy Optimization) and evaluated on cooperative metrics.',
        },
        ml: {
            model: 'Multi-Agent PPO',
            trainingData: 'Self-play Simulation Steps (1M+)',
            metrics: { averageReward: '15.4', nashEquilibriumDist: '0.05' },
            inferenceLatency: '2ms',
        },
        screenshots: [],
        repoUrl: 'https://github.com/yourusername/market-sim',
        timeline: {
            semester: 'Spring 2023',
            month: 'May',
            milestones: ['Environment Design', 'Agent Training Pipeline', 'Behavior Analysis'],
        },
        resumeBullet: 'Implemented multi-agent market simulation and RL training pipelines for game agents; included promoter role and behavioral experiments.',
    },
    {
        id: 'iot-telemetry',
        title: 'IoT Sensor Telemetry & Flight Sim',
        group: 'internship',
        description: 'A high-throughput sensor telemetry platform using ESP32 and MQTT, coupled with a flight routing simulator for path optimization.',
        problem: 'Real-time monitoring of distributed sensors requires low-latency data ingestion, while flight routing needs complex optimization algorithms to minimize fuel and time.',
        solution: 'Delivered a hardware-software solution using ESP32 microcontrollers sending data via MQTT to a TimescaleDB instance. Built a separate flight simulator with A* pathfinding.',
        techStack: ['C++', 'ESP32', 'MQTT', 'TimescaleDB', 'Grafana', 'Python'],
        architecture: {
            description: 'IoT edge devices (ESP32) publish to Mosquitto broker. Telegraf agent ingests to TimescaleDB. Grafana provides real-time dashboards.',
        },
        database: {
            endpoints: [
                { method: 'PUB', path: 'sensors/+/telemetry', description: 'MQTT Topic for sensor data' },
                { method: 'GET', path: '/api/routes/optimize', description: 'Calculate optimal flight path' },
            ],
        },
        screenshots: [],
        repoUrl: 'https://github.com/yourusername/iot-platform',
        timeline: {
            semester: 'Summer 2023',
            month: 'August',
            milestones: ['Hardware Prototype', 'MQTT Pipeline', 'Dashboard Launch'],
        },
        resumeBullet: 'Delivered sensor telemetry platform (ESP32 + MQTT + TimescaleDB) and a flight routing simulator with optimization and alerting.',
    },
];
