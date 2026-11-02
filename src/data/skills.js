/**
 * Skills Data Configuration
 * 
 * Accurately represents current technical capabilities across disciplines.
 * Edit, add, or reorganize categories and items here.
 */

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, user-friendly interfaces with modern web standards.",
    icon: "code",
    skills: [
      { name: "React", status: "Active Focus", description: "Component architecture, hooks, state management, and SPA flows." },
      { name: "JavaScript (ES6+)", status: "Core Stack", description: "DOM manipulation, asynchronous programming, modern ES features." },
      { name: "HTML5 & CSS3", status: "Core Stack", description: "Semantic markup, modern flexbox, CSS grid, and responsive layouts." },
      { name: "Responsive Design", status: "Core Stack", description: "Mobile-first development, media queries, and fluid typography." },
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Architecting reliable server-side business logic and APIs.",
    icon: "server",
    skills: [
      { name: "Python", status: "Core Stack", description: "Object-oriented programming, scripting, data handling, and automation." },
      { name: "Django", status: "Core Stack", description: "Models, views, ORM, authentication, admin dashboard, and business logic." },
      { name: "RESTful APIs", status: "Core Stack", description: "API design, serialization, endpoint routing, and client integration." },
      { name: "Backend Architecture", status: "Core Stack", description: "CRUD operations, transaction management, and service layers." },
    ]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Creating cross-platform mobile experiences for Android and iOS.",
    icon: "mobile",
    skills: [
      { name: "Flutter", status: "Core Stack", description: "Widget trees, stateful/stateless components, responsive screen layouts." },
      { name: "Dart", status: "Core Stack", description: "Object-oriented language, async futures/streams, and strong typing." },
      { name: "Mobile UI / UX", status: "Core Stack", description: "Material & Cupertino designs, navigation routers, and local asset handling." },
      { name: "Device Integration", status: "Core Stack", description: "Barcode scanning flows, location triggers, and native device interactions." },
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Management",
    description: "Designing structured schemas and writing dependable queries.",
    icon: "database",
    skills: [
      { name: "SQL", status: "Core Stack", description: "Queries, joins, indexing fundamentals, aggregations, and data integrity." },
      { name: "Relational Modeling", status: "Core Stack", description: "Entity relationships (1:1, 1:N, N:M), foreign keys, normalization." },
      { name: "PostgreSQL & SQLite", status: "Core Stack", description: "Production and lightweight development database environments." },
      { name: "Django ORM", status: "Core Stack", description: "Database migrations, queryset optimization, and model relations." },
    ]
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    description: "An area of active learning, research, and future specialization.",
    icon: "brain",
    skills: [
      { name: "Core ML Concepts", status: "Active Learning", description: "Foundations of supervised learning, classification, and data pipelines." },
      { name: "LLM API Integration", status: "Active Exploration", description: "Integrating intelligent reasoning and assistive chat into software." },
      { name: "OCR & Document Parsing", status: "Applied Project", description: "Extracting invoice text and structured data for business workflows." },
      { name: "Applied AI Workflows", status: "Future Specialization", description: "Building practical AI features for real-world enterprise utility." },
    ]
  },
  {
    id: "tools",
    title: "Tools & Engineering Workflow",
    description: "Tools and practices used for collaborative software delivery.",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", status: "Core Stack", description: "Version control, branching strategies, and project tracking." },
      { name: "Vite", status: "Core Stack", description: "Modern frontend tooling and lightning-fast developer server." },
      { name: "Postman", status: "Core Stack", description: "API testing, request debugging, and backend endpoint validation." },
      { name: "Command Line / Linux", status: "Core Stack", description: "Shell scripting, environment setup, and system utilities." },
    ]
  }
];
