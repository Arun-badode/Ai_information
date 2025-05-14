const newsData = [
{
        id: "gpt-5-release",
        title: "OpenAI GPT-5 Released",
        subtitle: "Memory, multimodal input, and dynamic personalities take center stage.",
        image: "https://i.postimg.cc/1tFh88zN/bcdfe4cf5cea4d05381c03cc20ea5db3.jpg",
        date: "April 26, 2025",
        author: "John Doe",
        tags: ["OpenAI", "Language Models"],
        highlights: [
          "Memory retention allows persistent conversation context.",
          "Multimodal input: Image, text, and audio support.",
          "Custom personalities with dynamic behavior modules."
        ],
        content: `OpenAI has announced GPT-5, the latest evolution in their language model family...`,
        sources: [
          { name: "OpenAI Blog", url: "https://openai.com/blog/gpt-5" },
          { name: "TechCrunch", url: "https://techcrunch.com/gpt-5" }
        ]
      },
      
    {
      id: "midjourney-v7",
      title: "Midjourney V7 Launches",
      subtitle: "Hyper-realism and advanced text rendering redefine AI art.",
      image: "https://i.postimg.cc/zDnY5HMs/ad7686d734c12b2cb9d064d082e1ce59.jpg",
      date: "April 25, 2025",
      author: "Emily Clarke",
      tags: ["Image Gen", "Trends"],
      highlights: [
        "New rendering engine enhances photo-realism.",
        "Improved understanding of prompt text.",
        "Integration with video generation tools in roadmap."
      ],
      content: `Midjourney has officially launched version 7, setting new standards in AI-generated art. This release includes significant improvements in image fidelity and prompt interpretation, enabling artists and designers to create more accurate and expressive visuals. The team also teased early experiments with real-time rendering and animated outputs.`,
      sources: [
        { name: "Midjourney Official", url: "https://www.midjourney.com/v7" },
        { name: "AI Art Review", url: "https://aiartreview.com/midjourney-v7" }
      ]
    },
    {
      id: "deepmind-ai-chip",
      title: "Google DeepMind New AI Chip",
      subtitle: "30% reduction in training costs for large models.",
      image: "https://i.postimg.cc/mkGxCTcp/5e616fe7fee23d05c93321cd.webp",
      date: "April 24, 2025",
      author: "Sundar Mehta",
      tags: ["Industry", "Innovation"],
      highlights: [
        "DeepMind develops custom silicon optimized for transformer models.",
        "30% cost reduction and 20% faster training reported.",
        "Possible integration into Google Cloud's Vertex AI."
      ],
      content: `DeepMind has entered the AI hardware race with its own AI accelerator chip designed specifically for modern deep learning workloads. It supports high throughput matrix operations and improved energy efficiency, making it ideal for training massive transformer-based models. Google hinted at integrating this chip into its cloud offerings later this year.`,
      sources: [
        { name: "DeepMind Press", url: "https://deepmind.google/ai-chip-launch" },
        { name: "TechRadar", url: "https://techradar.com/deepmind-chip" }
      ]
    },
    {
      id: "ai-trends-2025",
      title: "AI Trends 2025",
      subtitle: "Emotional AI, autonomous agents, and hybrid models lead the charge.",
      image: "https://i.postimg.cc/KvxSYvhR/0b4fd5d5cd0393553a5c0e81499f8ca1.jpg",
      date: "April 23, 2025",
      author: "Nina Kapoor",
      tags: ["Trends", "Innovation"],
      highlights: [
        "Emotional AI to dominate personal assistants.",
        "AI agents capable of reasoning and task automation.",
        "Open-source models gaining enterprise adoption."
      ],
      content: `The AI industry is shifting toward deeply personalized and emotionally aware systems. Autonomous agents that can plan and execute multi-step tasks are becoming practical. Hybrid architectures combining symbolic reasoning with neural networks are gaining popularity. The rise of open-source LLMs is democratizing innovation across industries.`,
      sources: [
        { name: "Forbes AI", url: "https://forbes.com/ai-trends-2025" },
        { name: "AI Weekly", url: "https://aiweekly.com/trends-2025" }
      ]
    },
    {
      id: "meta-vr-headset",
      title: "Meta's New VR Headset",
      subtitle: "Comfort meets immersion in Meta's next-gen wearable.",
      image: "https://i.postimg.cc/2yCcCyLY/03a8053798de1a7c9c1bd445d9f9a67f.jpg",
      date: "April 22, 2025",
      author: "Alex Tran",
      tags: ["Tech", "Innovation"],
      highlights: [
        "Lighter design with improved ergonomics.",
        "HDR passthrough for mixed reality experiences.",
        "Longer battery life and eye-tracking sensors."
      ],
      content: `Meta has unveiled its latest VR headset, boasting significant improvements in weight distribution, display clarity, and mixed reality integration. New sensors allow for eye and face tracking, unlocking more lifelike avatar interactions. Developers are excited about the improved SDK that simplifies AR/VR app creation.`,
      sources: [
        { name: "Meta Newsroom", url: "https://about.meta.com/newsroom/vr2025" },
        { name: "The Verge", url: "https://theverge.com/meta-vr-2025" }
      ]
    }
  ];
  
  export default newsData;
  