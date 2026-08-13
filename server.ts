import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy initialize Gemini client with required headers
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Intelligent local CV answers fallback in English
function generateLocalCVAnswer(message: string): string {
  const query = message.toLowerCase().trim();

  // Projects queries
  if (
    query.includes("project") ||
    query.includes("build") ||
    query.includes("work") ||
    query.includes("hungerstation") ||
    query.includes("cs50") ||
    query.includes("game") ||
    query.includes("مشروع") ||
    query.includes("مشاريع") ||
    query.includes("اعمال") ||
    query.includes("أعمال") ||
    query.includes("برمج") ||
    query.includes("سوى")
  ) {
    return `🚀 Thamer Almaqhawi's Key Projects:

1. 🏢 Internal Employee Navigation Platform (HungerStation):
   • An internal office spatial navigation web application designed for locating desks, meeting rooms, and colleagues across office floors.
   • Developed the backend REST APIs using Node.js & Express; demoed live before 300+ employees and executive leadership.

2. 🤖 City Prediction AI Model (Harvard CS50AI Capstone):
   • A probabilistic machine learning model in Python utilizing Bayesian Networks to predict user city origins from unstructured activity logs.
   • Harvard University-certified capstone project.

3. 🎟 Full-Stack Event Booking Platform:
   • A robust ticketing platform built with C++, C#, and SQL featuring transactional safety to prevent concurrent double-bookings.

4. 🎮 Online Games Platform:
   • Multiplayer server platforms built with custom Lua/Java scripts and SQL databases, actively supporting a 2,600+ member community.

Would you like more technical details on any of these projects?`;
  }

  // Education / Scores / KFUPM
  if (
    query.includes("education") ||
    query.includes("kfupm") ||
    query.includes("university") ||
    query.includes("school") ||
    query.includes("sat") ||
    query.includes("ielts") ||
    query.includes("score") ||
    query.includes("gpa") ||
    query.includes("جامعة") ||
    query.includes("البترول") ||
    query.includes("دراسة") ||
    query.includes("معدل") ||
    query.includes("شهادة") ||
    query.includes("شهادات") ||
    query.includes("هارفارد") ||
    query.includes("درجات")
  ) {
    return `🎓 Academic Background & Certifications:

• 🏛 University: B.S. in Computer Science @ King Fahd University of Petroleum & Minerals (KFUPM) — Expected Graduation: June 2030.
• 🏫 High School: Saud Al-Faisal Secondary School with a 98.86% GPA.
• 📊 SAT International: 1510 / 1600 (Perfect 800/800 Math Score).
• 🌐 IELTS Academic: Overall 7.5 / 9.0 Band score.
• 📜 Harvard University Certifications:
   - Harvard CS50x: Introduction to Computer Science (Nov 2025)
   - Harvard CS50AI: Introduction to Artificial Intelligence with Python (Dec 2025)`;
  }

  // Experience / Jobs / Internships
  if (
    query.includes("experience") ||
    query.includes("intern") ||
    query.includes("job") ||
    query.includes("club") ||
    query.includes("bayswater") ||
    query.includes("water") ||
    query.includes("leadership") ||
    query.includes("خبرة") ||
    query.includes("تدريب") ||
    query.includes("وظيفة")
  ) {
    return `💼 Work Experience & Leadership:

1. 🏢 Technology Job Shadowing Intern @ HungerStation (2026 – Present):
   • Engineered backend services for the spatial office navigation platform and presented the system to 300+ attendees.

2. 💻 Founder & Leader — Programming Club (2024 – 2025):
   • Mentored 36 students in core algorithms and data structures; secured 2nd place in Academic Teams.

3. 💧 Co-Founder & Accountant @ Community Water Initiative (2021 – 2024):
   • Managed logistics, budgets, and distribution of 2,500+ weekly water supplies.

4. 🇬🇧 Student Ambassador @ Bayswater Institute, UK (Sep – Dec 2023):
   • Represented the institute during the UK academic exchange and guided international peers.`;
  }

  // Skills / Tech stack
  if (
    query.includes("skill") ||
    query.includes("language") ||
    query.includes("stack") ||
    query.includes("python") ||
    query.includes("c++") ||
    query.includes("sql") ||
    query.includes("مهار") ||
    query.includes("تقني")
  ) {
    return `🛠 Technical Skills & Toolbox:

• Programming Languages: Python, C, C++, JavaScript, SQL, Lua, Java.
• Frameworks & Tools: Node.js, Express, Flask, React, Git, RESTful APIs, Tailwind CSS.
• Core Interests: Artificial Intelligence & ML, Backend Systems, Distributed Architecture, and Software Engineering.`;
  }

  // Contact / Socials
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("linkedin") ||
    query.includes("reach") ||
    query.includes("phone") ||
    query.includes("cv") ||
    query.includes("resume") ||
    query.includes("hire") ||
    query.includes("تواصل") ||
    query.includes("ايميل")
  ) {
    return `📬 Contact Details:

• ✉️ Email: thamer5800@gmail.com
• 📱 Phone: +966 50 185 8513
• 💼 LinkedIn: https://linkedin.com/in/thamer-almaqhawi
• 📍 Location: Dhahran & Riyadh, Saudi Arabia`;
  }

  // General Intro fallback
  return `Hello! I am Thamer Almaqhawi's AI Assistant. Thamer is a Computer Science student at King Fahd University of Petroleum & Minerals (KFUPM), passionate about software engineering, backend architecture, and AI.

You can ask me about:
• 🚀 His Projects (HungerStation app, Harvard CS50AI Model, Ticket Platform)
• 🎓 Academic journey @ KFUPM & Standardized Scores (1510 SAT with perfect 800 Math)
• 💼 Experience at HungerStation & Leadership
• 📬 How to reach, hire, or connect with him

What would you like to know?`;
}

// API Routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGenAI();
    if (!ai) {
      return res.json({
        reply: generateLocalCVAnswer(message),
      });
    }

    const systemInstruction = `You are the personal AI Assistant and digital avatar for Thamer Almaqhawi (ثامر المقحوي) on his personal portfolio website.

Your goal is to answer questions from recruiters, engineers, professors, and visitors with high accuracy, intelligence, and warmth based on Thamer's official CV and LinkedIn profile.

Profile & Background:
- Full Name: Thamer Almaqhawi (ثامر المقحوي)
- Role: Computer Science Student at King Fahd University of Petroleum & Minerals (KFUPM) (Expected graduation: June 2030)
- High School: Saud Al-Faisal Secondary School with 98.86% GPA (June 2026)
- Standardized Scores:
  • SAT: 1510 / 1600 (Perfect 800/800 Math score)
  • IELTS Academic: 7.5 / 9.0 Band score
- Harvard University Certifications:
  • CS50x — Introduction to Computer Science (Nov 2025)
  • CS50AI — Introduction to Artificial Intelligence with Python (Dec 2025)
- Location: Dhahran & Riyadh, Saudi Arabia
- Email: thamer5800@gmail.com
- Phone: +966 50 185 8513
- LinkedIn: https://linkedin.com/in/thamer-almaqhawi

Projects:
1. Internal Employee Navigation Platform (HungerStation):
   - Office interior mapping web application with room locations, high-res photos, occupant search, and seating layout.
   - Built backend REST APIs in Node.js & Express; demoed live to 300+ employees and executive leadership.
2. City Prediction AI Model (Harvard CS50AI Capstone):
   - Probabilistic machine learning model in Python using Bayesian Networks predicting user city from unstructured behavioral logs.
3. Full-Stack Event Booking Platform:
   - High-throughput ticketing platform using C++, C#, and SQL with database transactions preventing concurrent double-booking.
4. Online Games Platform:
   - Managed multiplayer platforms with SQL database architecture and custom server Lua/Java scripts, serving an active 2,600+ user community.

Work Experience & Leadership:
1. Technology Job Shadowing Intern @ HungerStation (2026 – Present):
   - Backend development for spatial office navigation web app; collaboration with senior engineers; presented to 300+ attendees.
2. Founder & Leader @ Programming Club (2024 – 2025):
   - Organized algorithms workshops for 36 students; achieved 2nd place in Academic Teams.
3. Co-Founder & Accountant @ Community Water Initiative (2021 – 2024):
   - Managed finances, logistics, and volunteers delivering 2,500+ water bottles weekly to local communities.
4. Student Ambassador @ Bayswater Institute, UK (Sep – Dec 2023):
   - Represented the institute during UK study abroad program; guided incoming international students.

Technical Skills:
- Languages: Python, C, C++, JavaScript, SQL, Lua, Java, HTML/CSS.
- Frameworks & Tools: Node.js, Express, Flask, React, RESTful APIs, Git.
- Domains: Artificial Intelligence, Full-Stack Development, Backend Architecture, Probabilistic Modeling.

Behavioral Guidelines:
- Primary Language: Respond in clear, articulate, professional English by default.
- Always provide structured, clean, and concise answers with bullet points when listing projects, experiences, scores, or skills.
- Speak on behalf of Thamer or as his personal AI assistant ("Thamer is...", "I'd be glad to share that Thamer...").
- Highlight key accomplishments accurately: 1510 SAT with 800 Math, Harvard CS50 certificates, HungerStation navigation system, and KFUPM CS studies.
- Keep responses friendly, engaging, humble, and impactful.`;

    const contents = [];
    if (Array.isArray(history)) {
      for (const item of history) {
        if (item.content && item.content.length > 0) {
          contents.push({
            role: item.role === "user" ? "user" : "model",
            parts: [{ text: item.content }],
          });
        }
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text?.trim();
    return res.json({ reply: replyText || generateLocalCVAnswer(message) });
  } catch (err: any) {
    console.error("Chat API Error:", err);
    // Graceful fallback to local CV answer engine
    return res.json({ reply: generateLocalCVAnswer(req.body.message || "") });
  }
});

// Vite middleware in dev mode
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
