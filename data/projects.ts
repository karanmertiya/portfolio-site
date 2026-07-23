export type GroupId = 'research' | 'ai-tools' | 'web-dev';

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
    'research': {
        id: 'research',
        title: 'Independent Research',
        description: 'Research in efficient LLM inference, quantisation algorithms, and hardware-aware machine learning.',
        techStack: ['Python', 'C++', 'CUDA', 'PyTorch'],
        progress: { mvp: true, v1: true, v2: true },
        thumbnail: '/images/math-thumb.jpg',
    },
    'ai-tools': {
        id: 'ai-tools',
        title: 'AI & Machine Learning',
        description: 'Context-aware AI assistants, vision models, and applied ML applications.',
        techStack: ['Python', 'TypeScript', 'Node.js', 'React'],
        progress: { mvp: true, v1: true, v2: false },
        thumbnail: '/images/game-thumb.jpg',
    },
    'web-dev': {
        id: 'web-dev',
        title: 'Full Stack & Developer Tools',
        description: 'Scalable backend services, algorithmic ETL pipelines, and visual IDEs.',
        techStack: ['React', 'TypeScript', 'Flask', 'Azure'],
        progress: { mvp: true, v1: true, v2: true },
        thumbnail: '/images/finance-thumb.jpg',
    },
};

export const projects: Project[] = [
    {
        id: 'indra-bit',
        title: 'Row-Tiered Mixed-Precision Quantisation for LLMs',
        group: 'research',
        description: 'Designed & implemented Variable Bit Floating-Point (vBFP) quantisation on Llama-3-8B.',
        problem: 'Uniform quantisation for LLMs leaves significant performance and efficiency on the table, failing to account for parameter sensitivity.',
        solution: 'Engineered a global utility-threshold allocator using a two-pass histogram algorithm to distribute fractional payload bits across 7B parameters. Implemented a custom INT4 CUDA GEMV kernel with on-the-fly unpacking.',
        techStack: ['C++', 'CUDA', 'PyTorch', 'Python'],
        ml: {
            model: 'Llama-3-8B',
            trainingData: 'WikiText-2',
            metrics: { 'PPL': '5.91', 'Avg Bits': '4.12' },
            inferenceLatency: '15.5 tokens/s',
        },
        screenshots: [],
        repoUrl: 'https://github.com/karanmertiya/indra-bit',
        timeline: {
            semester: 'Spring 2025',
            month: 'March',
            milestones: ['Quantisation Algorithm', 'CUDA Kernel', 'Evaluation'],
        },
        resumeBullet: 'Achieved a WikiText-2 PPL of 5.91 at 4.12 average bits/weight, outperforming GPTQ & AWQ. Reduced VRAM usage to 5.97 GB on dual NVIDIA T4 GPUs.',
    },
    {
        id: 'extractify',
        title: 'Extractify: Algorithmic Document Extraction & Visual Mapping IDE',
        group: 'web-dev',
        description: 'Engineered a 5-step Visual ETL pipeline for heavily unstructured PDFs, eliminating manual data entry.',
        problem: 'Traditional regex-based PDF extraction fails on heavily unstructured or variable layout documents.',
        solution: 'Built an interactive React-based schema builder with dynamic context anchoring and a Structural N-gram Periodicity algorithm to autonomously isolate repeating document templates.',
        techStack: ['Python', 'React', 'Flask', 'Azure'],
        architecture: {
            description: 'Automated anomaly resolution engine for structural deviations, pre-export analytics, and transformation engine for conditional logic.',
        },
        screenshots: [],
        demoUrl: 'https://ilovecsv.xyz/',
        repoUrl: 'https://github.com/karanmertiya/extractify',
        timeline: {
            semester: 'Fall 2024',
            month: 'November',
            milestones: ['Visual ETL Pipeline', 'N-gram Algorithm', 'Anomaly Engine'],
        },
        resumeBullet: 'Achieved 100% deterministic extraction without brittle regex, featuring visual data-quality dashboards powered by Recharts.',
    },
    {
        id: 'gitchat',
        title: 'GitChat: Context-Aware Developer AI Assistant',
        group: 'ai-tools',
        description: 'Developed a full-stack AI assistant for source-code repositories using Retrieval-Augmented Generation (RAG).',
        problem: 'Developers need conversational understanding across large, multi-file codebases to efficiently debug and contribute.',
        solution: 'Built scalable backend services supporting efficient context management and semantic search for long developer conversations.',
        techStack: ['TypeScript', 'Node.js', 'React', 'RAG'],
        architecture: {
            description: 'RAG architecture combining vector embeddings with LLMs to index and query large repositories effectively.',
        },
        screenshots: [],
        demoUrl: 'https://gitchat-frontend.vercel.app/',
        repoUrl: 'https://github.com/karanmertiya/gitchat',
        timeline: {
            semester: 'Summer 2024',
            month: 'July',
            milestones: ['RAG Implementation', 'Context Management', 'Frontend Integration'],
        },
        resumeBullet: 'Built a context-aware developer assistant utilizing RAG, with scalable backend services for large multi-file codebases.',
    },
    {
        id: 'llm-karanmertiya',
        title: 'llm.karanmertiya.me',
        group: 'research',
        description: 'An ambitious project involving the deployment and serving of large language models.',
        problem: 'Self-hosting open-source LLMs typically requires complex setup and expensive hardware resources.',
        solution: 'Configured and optimized the serving infrastructure for a custom LLM deployment accessible via the web.',
        techStack: ['Python', 'PyTorch', 'LLMs', 'Docker'],
        screenshots: [],
        demoUrl: 'https://llm.karanmertiya.me/',
        repoUrl: 'https://github.com/karanmertiya',
        timeline: {
            semester: 'Spring 2024',
            month: 'April',
            milestones: ['Model Optimization', 'Infrastructure Setup', 'Deployment'],
        },
        resumeBullet: 'Ambitious LLM deployment and serving project focused on optimizing inference.',
    },
    {
        id: 'pixie-net',
        title: 'Pixie Net',
        group: 'ai-tools',
        description: 'A deployed vision model for image processing and classification tasks.',
        problem: 'Efficient edge-deployable vision models are difficult to train and optimize.',
        solution: 'Trained and deployed a lightweight vision architecture suitable for rapid inference tasks.',
        techStack: ['Python', 'Computer Vision', 'PyTorch'],
        screenshots: [],
        repoUrl: 'https://github.com/karanmertiya',
        timeline: {
            semester: 'Fall 2023',
            month: 'October',
            milestones: ['Model Training', 'Evaluation', 'Production Deployment'],
        },
        resumeBullet: 'Developed and deployed a custom vision model named Pixie Net for image processing.',
    }
];
