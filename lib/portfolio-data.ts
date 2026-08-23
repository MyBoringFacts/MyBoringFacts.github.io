export type Accent = "orange" | "blue" | "lime";

export type Expertise = {
  code: string;
  title: string;
  summary: string;
  detail: string;
  tools: string[];
  proof: string;
  accent: Accent;
};

export type Project = {
  slug: string;
  index: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  period: string;
  metric: string;
  metricLabel: string;
  accent: Accent;
  stack: string[];
  challenge: string;
  approach: string;
  architecture: Array<{ label: string; detail: string }>;
  results: string[];
  lessons: string;
};

export const site = {
  name: "Thadoe Hein",
  role: "AI Engineer",
  email: "thadoe.work@gmail.com",
  linkedin: "https://www.linkedin.com/in/thadoe/",
  github: "https://github.com/MyBoringFacts",
  resume: "/thadoe-hein-resume.pdf",
};

export const expertise: Expertise[] = [
  {
    code: "01",
    title: "Production RAG",
    summary: "Grounded knowledge systems designed beyond the chatbot demo.",
    detail: "I build the full retrieval loop: ingestion, chunking, indexing, ranking, citations, evaluation, and production observability.",
    tools: ["LangChain", "Vector DB", "OpenAI", "Python"],
    proof: "Document intelligence platform shipped as a production system.",
    accent: "orange",
  },
  {
    code: "02",
    title: "Computer Vision",
    summary: "Visual pipelines that turn difficult media into useful data.",
    detail: "From detection and OCR to embedding search, I shape models around real inputs, latency constraints, and measurable accuracy.",
    tools: ["YOLOv11", "OpenCV", "Azure AI", "Qdrant"],
    proof: "0.93 text detection accuracy on real-world Thai receipts.",
    accent: "lime",
  },
  {
    code: "03",
    title: "ML Systems",
    summary: "Reproducible pipelines from raw data to a dependable endpoint.",
    detail: "I connect experimentation to delivery through versioned data flows, model serving, APIs, monitoring, and failure-aware workflows.",
    tools: ["Python", "PyTorch", "REST APIs", "CI/CD"],
    proof: "End-to-end pipelines spanning training, serving, and monitoring.",
    accent: "blue",
  },
  {
    code: "04",
    title: "Evaluation",
    summary: "Quality made visible through evidence, not intuition.",
    detail: "I define practical evaluation sets and track accuracy, retrieval quality, latency, and regressions against the product goal.",
    tools: ["EM / F1", "Retrieval metrics", "Benchmarks", "Tracing"],
    proof: "Reproducible transformer evaluation and systematic tuning.",
    accent: "blue",
  },
  {
    code: "05",
    title: "AI Infrastructure",
    summary: "Scalable delivery with cost and reliability designed in.",
    detail: "I deploy AI workloads across managed and containerized infrastructure, then optimize the expensive paths instead of guessing.",
    tools: ["AWS", "Docker", "GCP", "Qdrant"],
    proof: "90% faster video processing across a scalable AWS architecture.",
    accent: "orange",
  },
  {
    code: "06",
    title: "Product Thinking",
    summary: "Technical decisions anchored to useful human outcomes.",
    detail: "I translate ambiguous needs into testable systems, communicate tradeoffs clearly, and measure the workflow—not only the model.",
    tools: ["Discovery", "Prototyping", "Metrics", "Iteration"],
    proof: "AI automation that turned multi-hour workflows into minutes.",
    accent: "lime",
  },
];

export const projects: Project[] = [
  {
    slug: "video-intelligence",
    index: "01",
    eyebrow: "Visual retrieval",
    title: "Find one person in hours of footage—instantly.",
    shortTitle: "Video Intelligence",
    summary: "An embedding-based identity retrieval system built to search large video datasets without making people wait.",
    period: "October 2025",
    metric: "90%",
    metricLabel: "less processing time",
    accent: "orange",
    stack: ["Python", "AWS", "Qdrant", "Next.js", "React"],
    challenge: "Searching long videos frame by frame created an expensive, slow workflow. The system needed to detect useful frames, represent identities consistently, and return matches across a growing media collection.",
    approach: "I designed an asynchronous processing pipeline that separates ingestion from search, stores face embeddings in Qdrant, and uses scalable AWS services for compute and persistence. The interface keeps complex retrieval behavior legible to the user.",
    architecture: [
      { label: "Ingest", detail: "Video upload and job orchestration" },
      { label: "Extract", detail: "Frame sampling and face detection" },
      { label: "Embed", detail: "Identity representation" },
      { label: "Retrieve", detail: "Vector similarity search" },
    ],
    results: ["90% reduction in video processing time", "Sub-second identity search", "Scalable Lambda, ECS, and RDS architecture"],
    lessons: "The biggest gains came from redesigning the pipeline around useful work—not simply choosing a faster model. Sampling, batching, and retrieval architecture mattered as much as inference speed.",
  },
  {
    slug: "rag-platform",
    index: "02",
    eyebrow: "Knowledge systems",
    title: "Answers that can show their work.",
    shortTitle: "Document Intelligence",
    summary: "A production retrieval-augmented generation platform designed around grounded answers and repeatable document ingestion.",
    period: "February 2025",
    metric: "RAG",
    metricLabel: "shipped to production",
    accent: "blue",
    stack: ["LangChain", "OpenAI", "Vector DB", "Python"],
    challenge: "General-purpose language models could respond fluently without staying faithful to the source documents. The product needed reliable ingestion, relevant retrieval, and answers that remained grounded in private knowledge.",
    approach: "I built a modular pipeline for document parsing, chunking, embedding, retrieval, ranking, and response generation. Each stage could be evaluated independently, making quality and latency problems easier to locate.",
    architecture: [
      { label: "Parse", detail: "Normalize source documents" },
      { label: "Index", detail: "Chunk and embed knowledge" },
      { label: "Rank", detail: "Retrieve relevant context" },
      { label: "Answer", detail: "Generate grounded response" },
    ],
    results: ["Improved answer accuracy through retrieval", "Reduced latency with automated pipelines", "Higher response quality through ranking strategies"],
    lessons: "RAG quality is a systems problem. Better prompts cannot compensate for weak parsing, noisy chunks, or an evaluation set that does not represent real questions.",
  },
  {
    slug: "document-vision",
    index: "03",
    eyebrow: "Document vision",
    title: "Turn difficult receipts into reliable data.",
    shortTitle: "OCR & Vision Pipeline",
    summary: "A detection and localization pipeline tuned for noisy, real-world Thai receipts and the annotation work behind them.",
    period: "February 2025",
    metric: ".93",
    metricLabel: "detection accuracy",
    accent: "lime",
    stack: ["YOLOv11", "Azure AI Vision", "Python", "OpenCV"],
    challenge: "Receipt images varied in lighting, layout, print quality, and language. Manual annotation was slow, while generic OCR alone could not consistently preserve the spatial structure needed downstream.",
    approach: "I combined automated annotation with targeted review, fine-tuned YOLOv11 for localization, and paired detection with OCR processing. The workflow focused human effort on ambiguous samples instead of repetitive labeling.",
    architecture: [
      { label: "Collect", detail: "Diverse receipt samples" },
      { label: "Annotate", detail: "Automated labels with review" },
      { label: "Detect", detail: "Fine-tuned text localization" },
      { label: "Read", detail: "OCR and structured output" },
    ],
    results: ["50+ annotation hours saved", "0.93 text detection accuracy", "Custom YOLOv11 training workflow"],
    lessons: "Automation was most valuable as a force multiplier for careful labeling. Keeping a human review loop produced better training data without recreating the original manual workload.",
  },
];

export const experience = [
  {
    period: "2026—Present",
    role: "AI Developer · Freelance",
    company: "SoeMindAI, Inc.",
    detail: "Optimizing model costs and turning complex content workflows into reliable AI products.",
    proof: "~30% lower AI costs",
  },
  {
    period: "2025",
    role: "Machine Learning Engineer Intern",
    company: "Language Understanding Laboratory",
    detail: "Fine-tuned multilingual transformers and built reproducible evaluation pipelines.",
    proof: "mT5 · EM/F1 evaluation",
  },
  {
    period: "2024—2025",
    role: "AI Engineer Apprentice",
    company: "Intelligent Systems Laboratory",
    detail: "Deployed RAG systems, model APIs, monitoring, and end-to-end ML pipelines.",
    proof: "Research → production",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
