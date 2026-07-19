export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    content: string; // In a real app, this would be MDX or HTML
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Building a Voice-Driven Finance Dashboard',
        excerpt: 'How I integrated OpenAI Whisper and GPT-4 to create a natural language interface for personal finance analytics.',
        date: 'Nov 15, 2024',
        readTime: '5 min read',
        category: 'AI Engineering',
        slug: 'voice-driven-finance',
        content: `
      <h2>Introduction</h2>
      <p>Personal finance apps are often cluttered with charts and tables. I wanted to build something different: a dashboard you can talk to.</p>
      
      <h2>The Tech Stack</h2>
      <p>I chose a microservices architecture to handle the heavy lifting of audio processing and ML inference.</p>
      <ul>
        <li><strong>Frontend:</strong> Next.js 14 with Tailwind CSS</li>
        <li><strong>Backend:</strong> FastAPI for the ML service, Node.js for the API gateway</li>
        <li><strong>AI:</strong> OpenAI Whisper for STT, GPT-4 for intent recognition</li>
      </ul>

      <h2>Challenges</h2>
      <p>The biggest challenge was latency. Streaming audio to the backend and getting a response in real-time required optimizing the WebSocket connection and using a smaller, distilled model for initial intent classification.</p>
    `
    },
    {
        id: '2',
        title: 'Visualizing Bayesian Particle Filters',
        excerpt: 'A deep dive into the mathematics behind particle filters and how to visualize them effectively using Python and NumPy.',
        date: 'April 10, 2024',
        readTime: '8 min read',
        category: 'Applied Math',
        slug: 'bayesian-particle-filters',
        content: `
      <h2>What is a Particle Filter?</h2>
      <p>Particle filters are a set of Monte Carlo algorithms used to solve filtering problems arising in signal processing and Bayesian statistical inference.</p>

      <h2>The Visualization Challenge</h2>
      <p>Representing thousands of particles and their weights in real-time is computationally expensive. I used NumPy vectorization to speed up the calculations by 50x compared to standard Python loops.</p>
    `
    },
    {
        id: '3',
        title: 'Multi-Agent Reinforcement Learning',
        excerpt: 'Exploring emergent behaviors in market simulations using PPO and self-play mechanisms.',
        date: 'May 22, 2023',
        readTime: '6 min read',
        category: 'Game Theory',
        slug: 'multi-agent-rl',
        content: `
      <h2>Simulating Markets</h2>
      <p>Markets are complex adaptive systems. By modeling them as multi-agent environments, we can train agents to discover optimal trading strategies.</p>

      <h2>Results</h2>
      <p>Surprisingly, the agents learned to "collude" implicitly to maximize collective rewards, a phenomenon often observed in real-world oligopolies.</p>
    `
    }
];
