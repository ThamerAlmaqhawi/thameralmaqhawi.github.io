export function getClientAIResponse(message: string): string {
  const query = message.toLowerCase().trim();

  // Projects queries
  if (
    query.includes("project") ||
    query.includes("build") ||
    query.includes("hungerstation") ||
    query.includes("cs50") ||
    query.includes("bayesian") ||
    query.includes("ticket") ||
    query.includes("event") ||
    query.includes("game") ||
    query.includes("مشاريع") ||
    query.includes("مشروع") ||
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
    query.includes("sat") ||
    query.includes("ielts") ||
    query.includes("harvard") ||
    query.includes("gpa") ||
    query.includes("school") ||
    query.includes("جامعة") ||
    query.includes("بترول") ||
    query.includes("دراسة") ||
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
    query.includes("work") ||
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
    query.includes("social") ||
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
