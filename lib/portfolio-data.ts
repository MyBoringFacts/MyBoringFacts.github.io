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
    summary: "Document tools that retrieve context before they try to answer.",
    detail: "I have worked across the full retrieval loop: parsing files, chunking text, caching embeddings, retrieving context, generating an answer, and learning from user feedback.",
    tools: ["ChromaDB", "Firebase", "Google PaLM", "Python"],
    proof: "Built Chat with Your Files with PDF, DOCX, and TXT ingestion, persistent vector search, conversation history, and feedback.",
    accent: "orange",
  },
  {
    code: "02",
    title: "Computer Vision",
    summary: "Models that make sense of messy videos, receipts, and images.",
    detail: "I like the practical side of computer vision: collecting imperfect data, reducing labeling work, tuning the model, and designing the interface around what it gets wrong.",
    tools: ["YOLOv11", "ArcFace", "Azure AI", "OpenCV"],
    proof: "Reached 0.93 text detection accuracy on Thai receipts and built selfie-based retrieval across event footage.",
    accent: "lime",
  },
  {
    code: "03",
    title: "ML Systems",
    summary: "The less glamorous work that makes a model usable.",
    detail: "I connect experiments to the rest of the product through data pipelines, APIs, model serving, monitoring, and clear failure states.",
    tools: ["Python", "PyTorch", "REST APIs", "CI/CD"],
    proof: "Built end-to-end flows for video indexing, Burmese QA training, document retrieval, and model evaluation.",
    accent: "blue",
  },
  {
    code: "04",
    title: "Evaluation",
    summary: "Looking closely at where a model helps—and where it guesses.",
    detail: "I use quantitative metrics when they fit, then inspect real outputs for the things a score misses: hallucination, language mixing, awkward phrasing, and confusing user experiences.",
    tools: ["ROUGE", "EM / F1", "Ablations", "Manual review"],
    proof: "Evaluated a Burmese mT5 QA model on 1,700 examples and manually analyzed correct, paraphrased, and hallucinated answers.",
    accent: "blue",
  },
  {
    code: "05",
    title: "AI Infrastructure",
    summary: "Keeping AI workloads fast, observable, and affordable.",
    detail: "I deploy across managed and containerized infrastructure, watch the expensive paths, and improve the bottleneck instead of assuming the model is the problem.",
    tools: ["AWS", "Docker", "GCP", "Qdrant"],
    proof: "Reduced video processing time by 90% and cut AI costs by about 30% through pipeline and model choices.",
    accent: "orange",
  },
  {
    code: "06",
    title: "Product Thinking",
    summary: "Making the difficult parts clear to the person using the system.",
    detail: "I enjoy working through ambiguous requirements, testing a small version, and refining the flow around real user friction—not only model performance.",
    tools: ["Discovery", "Prototyping", "Teaching", "Iteration"],
    proof: "Added face selection, progress states, friendly errors, and timestamp controls after testing the event-video search flow.",
    accent: "lime",
  },
];

export const projects: Project[] = [
  {
    slug: "video-intelligence",
    index: "01",
    eyebrow: "Visual retrieval",
    title: "Helping people find themselves in hours of event footage.",
    shortTitle: "Find Me in the Crowd",
    summary: "Upload a selfie, search indexed event videos, and jump to the moments where that person appears.",
    period: "October 2025",
    metric: "90%",
    metricLabel: "less processing time",
    accent: "orange",
    stack: ["ArcFace", "Qdrant", "AWS", "Next.js", "PostgreSQL"],
    challenge: "After an event, finding every moment you appear in can mean scrubbing through hours of video. Faces also change with angle, lighting, occlusion, and camera quality, so a simple frame-by-frame lookup was not enough.",
    approach: "I split the work into two pipelines. Videos are indexed ahead of time with face detection, tracking, 512-dimensional ArcFace embeddings, and Qdrant. At search time, a selfie becomes a query vector and matching frames are grouped into useful video segments.",
    architecture: [
      { label: "Index", detail: "Upload and process event videos" },
      { label: "Represent", detail: "Detect, track, and embed faces" },
      { label: "Search", detail: "Compare a selfie in Qdrant" },
      { label: "Watch", detail: "Group matches and seek to timestamps" },
    ],
    results: ["Reduced video processing time by 90%", "Returned identity matches in under a second", "Added tap-to-select faces, progress states, and buffered timestamp controls"],
    lessons: "The model was only part of the project. A two-second temporal grouping gap, clearer progress feedback, and easy timestamp seeking made the search results much more useful in practice.",
  },
  {
    slug: "rag-platform",
    index: "02",
    eyebrow: "Knowledge systems",
    title: "A document assistant built around retrieval, not guessing.",
    shortTitle: "Chat with Your Files",
    summary: "A conversational document tool that parses a file, retrieves relevant passages, and carries context across follow-up questions.",
    period: "February 2025",
    metric: "3",
    metricLabel: "supported file formats",
    accent: "blue",
    stack: ["Google PaLM", "ChromaDB", "Firebase", "Streamlit", "Python"],
    challenge: "A useful document assistant has to do more than accept a prompt. It needs to handle different file types, find the right context quickly, remember the conversation, and make it possible to learn from weak answers.",
    approach: "The application extracts text from PDF, DOCX, and TXT files, breaks it into manageable chunks, caches embeddings, and stores them in ChromaDB. Queries retrieve the closest passages before Google PaLM generates a response. Firebase keeps conversation history and feedback.",
    architecture: [
      { label: "Read", detail: "Extract PDF, DOCX, or TXT content" },
      { label: "Store", detail: "Chunk, embed, cache, and index" },
      { label: "Retrieve", detail: "Find the closest document context" },
      { label: "Respond", detail: "Generate, log, and collect feedback" },
    ],
    results: ["Handled PDF, DOCX, and plain-text documents", "Reused cached embeddings instead of recomputing them", "Stored conversations and positive or negative feedback in Firebase"],
    lessons: "Building the full loop changed how I thought about RAG. Parsing, chunk size, persistence, and feedback can matter just as much as the generation model.",
  },
  {
    slug: "document-vision",
    index: "03",
    eyebrow: "Document vision",
    title: "Training receipt detection without labeling everything by hand.",
    shortTitle: "OCR & Vision Pipeline",
    summary: "A receipt-text localization pipeline that used Azure AI Vision to bootstrap annotations before fine-tuning YOLOv11.",
    period: "February 2025",
    metric: ".93",
    metricLabel: "detection accuracy",
    accent: "lime",
    stack: ["YOLOv11", "Azure AI Vision", "Python", "OpenCV"],
    challenge: "Thai receipts vary in layout, lighting, print quality, and text density. Drawing every training box by hand would have taken days before model training could even begin.",
    approach: "I used Azure AI Vision to generate structured annotations, converted them into YOLO format, reviewed the data, and fine-tuned YOLOv11 for text localization. That let me spend time on difficult examples instead of repetitive labeling.",
    architecture: [
      { label: "Collect", detail: "Diverse receipt samples" },
      { label: "Annotate", detail: "Automated labels with review" },
      { label: "Detect", detail: "Fine-tuned text localization" },
      { label: "Read", detail: "OCR and structured output" },
    ],
    results: ["50+ annotation hours saved", "0.93 text detection accuracy", "Custom YOLOv11 training workflow"],
    lessons: "The most useful automation did not remove human review. It removed the repetitive first pass, so I could focus on the samples where judgment actually mattered.",
  },
];

export const experience = [
  {
    period: "Jun—Aug 2026",
    role: "AI Engineer",
    company: "CB Bank PCL",
    detail: "Worked on an enterprise AI platform, AI-assisted document processing, data-quality standards, and technical coordination with external partners.",
    proof: "Enterprise AI · Banking",
  },
  {
    period: "Jan—Jun 2026",
    role: "Freelance Software Engineer",
    company: "SoeMindAI, Inc.",
    detail: "Built three AI products across education and recruitment, including study tools, presentation automation, and job preparation workflows.",
    proof: "3 products · ~30% lower cost",
  },
  {
    period: "Jan—Jun 2026",
    role: "AI & Machine Learning Instructor",
    company: "Kiddee Lab",
    detail: "Taught students aged 10–15, built reusable Python ML labs, and researched a vision pipeline for digitizing physical student records.",
    proof: "Research accepted at iSTEM-Ed 2026",
  },
  {
    period: "Jun—Aug 2025",
    role: "Machine Learning Engineer Intern",
    company: "Language Understanding Laboratory",
    detail: "Led a pilot to fine-tune mT5-base on a Burmese question-answering dataset and built its training and evaluation pipeline from scratch.",
    proof: "7k train · 1.7k evaluation examples",
  },
  {
    period: "Jan 2024—Oct 2025",
    role: "AI Developer",
    company: "Intelligent Systems Laboratory",
    detail: "Built NLP and RAG pipelines for low-resource languages, designed chatbot architecture, and mentored students through development and deployment.",
    proof: "Research · mentoring · delivery",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
