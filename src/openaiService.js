import OpenAI from 'openai';

// Resume content as context (extracted from PDF)
const RESUME_CONTEXT = `
Mojila alias Moch. Aji Laksono
Software Engineer
Location: Surabaya, Indonesia
Phone: +62 858 9290 9639
Email: me.mojila@gmail.com
LinkedIn: linkedin.com/in/mojila
GitHub: github.com/mojila

PROFESSIONAL SUMMARY:
Experienced Software Engineer with expertise in Go, Node.js, Rust, Dart, React, and Flutter. Skilled in building scalable backend systems, mobile applications, and web platforms. Strong background in database management (PostgreSQL, MongoDB, MySQL, Redis) and cloud technologies (GCP, AWS). Passionate about clean code, system architecture, and delivering high-quality solutions.

TECHNICAL SKILLS:
- Programming Languages: Go, Node.js, Rust, Dart, JavaScript
- Frontend: React, Flutter, HTML, CSS, Tailwind CSS
- Backend: RESTful APIs, Microservices, System Architecture
- Databases: PostgreSQL, MongoDB, MySQL, Redis
- Cloud & DevOps: Google Cloud Platform (GCP), Amazon Web Services (AWS), Docker, CI/CD
- Tools: Git, GitHub Copilot, Various development tools

WORK EXPERIENCE:

1. Deall Jobs (Remote)
   Position: Software Engineer
   Period: Recent experience
   Location: Remote
   
   Key Contributions:
   - Developed scalable backend systems using Go and Node.js
   - Built RESTful APIs and microservices architecture
   - Implemented database optimization strategies
   - Collaborated with cross-functional teams on product development
   - Maintained high code quality and testing standards

2. Machine Vision Indonesia (Surabaya)
   Position: Software Developer
   Period: Previous experience
   Location: Surabaya, Indonesia
   
   Key Contributions:
   - Developed computer vision and machine learning solutions
   - Built data processing pipelines and analytics systems
   - Implemented real-time image processing applications
   - Worked with IoT devices and sensor integration
   - Created automated testing and deployment workflows

FREELANCE PROJECTS:

1. Omni-Channel CRM for Real Estate Company
   Role: Full-Stack Developer
   Period: Freelance Project
   Location: Remote
   
   Key Features:
   - Multi-platform customer management system
   - Real-time communication channels integration
   - Advanced analytics and reporting dashboard
   - Mobile-responsive design for field agents
   - Integration with third-party real estate platforms

2. Automated Bank Transfer Verification System
   Role: Backend Developer
   Period: Freelance Project
   Location: Remote
   
   Key Features:
   - Automated transaction verification and processing
   - Secure API integration with banking systems
   - Real-time notification and alert system
   - Comprehensive audit trail and logging
   - Scalable architecture for high-volume transactions

EDUCATION & CERTIFICATIONS:
- Strong foundation in Computer Science and Software Engineering
- Continuous learning in modern technologies and best practices
- Active participation in developer communities and open-source projects

SALARY EXPECTATIONS:
- USD: $10,000 - $15,000 per month
- IDR: Rp 13,500,000 - Rp 16,000,000 per month

PERSONAL INTERESTS:
- Technology innovation and emerging trends
- Open-source contribution and community involvement
- System optimization and performance tuning
- Mentoring junior developers
- Exploring new programming languages and frameworks
`;

class OpenAIService {
  constructor() {
    this.client = null;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;

    try {
      this.client = new OpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: '<API_KEY>',
        dangerouslyAllowBrowser: true, // Note: In production, use a backend proxy
        defaultHeaders: {
          "HTTP-Referer": "https://mojila.my.id",
          "X-Title": "Mojila Portofolio",
        }
      });
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize OpenAI service:', error);
      throw error;
    }
  }

  async askQuestion(question) {
    if (!this.initialized) {
      await this.initialize();
    }

    try {
      const response = await this.client.chat.completions.create({
        model: 'deepseek/deepseek-r1:free',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant representing Mojila (Moch. Aji Laksono), a skilled Software Engineer. Use the following resume information to answer questions about Mojila's background, skills, experience, and projects. Be professional, friendly, and informative. If asked about something not in the resume, politely mention that you don't have that specific information but can discuss what's available in the resume.\n\nResume Information:\n${RESUME_CONTEXT}`
          },
          {
            role: 'user',
            content: question
          }
        ],
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new Error('Failed to get response from AI assistant');
    }
  }
}

export default new OpenAIService();