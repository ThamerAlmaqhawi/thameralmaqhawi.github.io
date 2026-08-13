import { Project, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "THAMER ALMAQHAWI",
  role: "CS STUDENT / KFUPM",
  tagline: "CODE WITH CURIOSITY. BUILD WITH PURPOSE.",
  welcomeBadge: "WELCOME, I’M THAMER.",
  university: "Computer Science student at KFUPM.",
  location: "Riyadh & Dhahran, Saudi Arabia",
  phone: "+966 50 185 8513",
  motto: "Code. Build. Debug. Repeat.",
  codeSnippet: "if (!works) debug();",
  email: "thamer5800@gmail.com",
  linkedin: "https://linkedin.com/in/thamer-almaqhawi",
  profileImage: "https://framerusercontent.com/images/WsudyA8NRYG6gSFAuZegrfUpw.png?width=1086&height=1448",
  contactTitle: "Let’s build something useful.",
  contactCopy: "I’m interested in practical technology, thoughtful communities, and ambitious ideas worth shipping.",
  
  // Full CV Data
  education: [
    {
      institution: "King Fahd University of Petroleum & Minerals (KFUPM)",
      degree: "B.S. in Computer Science",
      period: "EXPECTED JUN 2030",
      details: "Top tier engineering university in Dhahran, Saudi Arabia."
    },
    {
      institution: "Saud Al-Faisal Secondary School",
      degree: "High School Diploma",
      gpa: "98.86%",
      period: "JUN 2026",
      scores: [
        "SAT: 1510/1600 (800/800 Math)",
        "IELTS Academic: 7.5/9.0"
      ]
    }
  ],
  skills: {
    languages: ["Python", "C", "C++", "JavaScript", "SQL", "Lua", "Java"],
    technologies: ["Node.js", "Express", "Flask", "HTML/CSS", "Git", "REST APIs", "React"],
    areas: ["Artificial Intelligence", "Full-Stack Development", "Backend Architecture", "Probabilistic Modeling"]
  },
  certifications: [
    {
      issuer: "Harvard University",
      title: "CS50x — Introduction to Computer Science",
      date: "NOV 2025"
    },
    {
      issuer: "Harvard University",
      title: "CS50AI — Introduction to AI with Python",
      date: "DEC 2025"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "hungerstation-nav",
    number: "01",
    badge: "01 / INTERNAL PRODUCT",
    title: "Internal Employee Navigation Platform",
    description: "Developed an internal web application for navigating office spaces through room locations, images, and room information. Contributed to backend development using Node.js with a cross-functional team.",
    longDescription: "An enterprise interior navigation tool designed for HungerStation headquarters. It maps floor plans, room capacities, employee seating, and meeting room availability into an interactive, lightning-fast web dashboard.",
    technologies: ["NODE.JS", "BACKEND", "HUNGERSTATION", "EXPRESS", "REST API"],
    features: [
      "Interactive room location lookup with high-res spatial imagery",
      "Employee seating search and office department mapping",
      "RESTful backend API serving real-time room status",
      "Presented to 300+ employees and executive leadership"
    ],
    codeSnippet: `// Internal Navigation API Route Sample
app.get('/api/v1/rooms/:id', async (req, res) => {
  const room = await RoomDatabase.findById(req.params.id);
  if (!room) return res.status(404).json({ error: 'Room not found' });
  return res.json({ 
    id: room.id, 
    name: room.name, 
    floor: room.floor, 
    coordinates: room.coords, 
    occupants: room.currentOccupants 
  });
});`
  },
  {
    id: "cs50ai-city-pred",
    number: "02",
    badge: "02 / AI MODEL",
    title: "City Prediction AI Model",
    description: "Built a probabilistic AI model that predicts a user’s city from behavioral data as the final project for Harvard’s CS50AI course.",
    longDescription: "A machine learning pipeline applying Bayesian Networks and Markov Decision Processes to classify probabilistic user geographic distributions based on activity logs, temporal trends, and behavioral patterns.",
    technologies: ["AI", "PYTHON", "PROBABILITY", "CS50AI", "MACHINE LEARNING"],
    features: [
      "Bayesian probabilistic estimation for location inference",
      "Feature engineering from unstructured behavioral logs",
      "High accuracy prediction benchmark across global dataset",
      "Developed as the capstone project for Harvard CS50AI"
    ],
    codeSnippet: `import pomegranate as pg

# Bayesian Network definition for City Prediction
def build_city_prob_model(user_behavior):
    time_dist = pg.DiscreteDistribution({'morning': 0.3, 'evening': 0.7})
    city_node = pg.Node(time_dist, name="city_prediction")
    model = pg.BayesianNetwork("CS50AI City Predictor")
    model.add_state(city_node)
    model.bake()
    return model.predict_proba(user_behavior)`
  },
  {
    id: "event-booking",
    number: "03",
    badge: "03 / FULL-STACK BUILD",
    title: "Full-Stack Event Booking Platform",
    description: "Designed and built a full-stack web application for browsing and booking events, with user authentication, database-backed listings, and a complete booking workflow.",
    longDescription: "A high-performance event management and ticketing platform featuring user authentication, interactive seating select, instant reservation processing, and automated receipt generation.",
    technologies: ["C++", "C#", "FULL-STACK", "SQL", "NETWORKING"],
    features: [
      "User authentication and encrypted multi-role session management",
      "Dynamic event directory with category filtering and seat pickers",
      "Transaction safety and concurrent booking prevention",
      "Optimized query execution for high throughput"
    ],
    codeSnippet: `// Event Booking Logic C# Backend snippet
public class BookingService {
    public async Task<BookingResult> ProcessBookingAsync(int userId, int eventId, int seatNumber) {
        using var transaction = await _db.Database.BeginTransactionAsync();
        var isAvailable = await _db.Seats.AnyAsync(s => s.EventId == eventId && s.Number == seatNumber && !s.IsBooked);
        if (!isAvailable) return BookingResult.Failed("Seat unavailable");
        
        await _db.Bookings.AddAsync(new Booking { UserId = userId, EventId = eventId, SeatNumber = seatNumber });
        await _db.SaveChangesAsync();
        await transaction.CommitAsync();
        return BookingResult.Success();
    }
}`
  },
  {
    id: "games-community",
    number: "04",
    badge: "04 / COMMUNITY PLATFORM",
    title: "Online Games Platform",
    description: "Developed and managed online platforms with SQL databases and custom scripts, while growing and leading a community of 2,600+ members.",
    longDescription: "An expansive multiplayer gaming architecture integrating custom player inventory systems, real-time sync with SQL databases, custom Lua server scripts, and community management.",
    technologies: ["SQL", "SCRIPTS", "LUA", "HTML", "CSS", "JAVA"],
    features: [
      "Scaled and sustained an active gaming community of 2,600+ members",
      "Custom server-side Lua & Java game mechanics scripting",
      "SQL database administration for user records and game stats",
      "Web interface for community leaderboards and updates"
    ],
    codeSnippet: `-- Custom Lua Server Game Script
RegisterServerEvent("community:savePlayerData")
AddEventHandler("community:savePlayerData", function(playerId, data)
    local query = "UPDATE users SET score = @score, last_login = NOW() WHERE id = @id"
    exports.ghmattimysql:execute(query, {
        ['@score'] = data.score,
        ['@id'] = playerId
    }, function(affectedRows)
        print("Updated stats for player: " .. playerId)
    end)
end)`
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Technology Job Shadowing Intern",
    organization: "HungerStation",
    description: "Built an internal web app for locating rooms and roles, then presented the backend to 300+ attendees including senior leadership.",
    date: "2026 — PRESENT",
    isCurrent: true,
    highlights: [
      "Architected Node.js backend endpoints for spatial office navigation",
      "Collaborated with cross-functional engineering teams",
      "Delivered live demonstration to 300+ staff members and executive leadership"
    ]
  },
  {
    id: "exp-2",
    role: "Founder & Leader — Programming Club",
    organization: "Academic Student Organization",
    description: "Led hands-on coding workshops for 36 students and guided the team to a 2nd-place Academic Teams finish.",
    date: "2024 — 2025",
    highlights: [
      "Designed curriculum for Python, data structures, and algorithms",
      "Mentored 36 computer science and engineering students",
      "Achieved 2nd place in national competitive academic challenge"
    ]
  },
  {
    id: "exp-3",
    role: "Co-Founder & Accountant — Community Water Initiative",
    organization: "Social Impact Project",
    description: "Co-founded a water distribution initiative delivering 2,500+ bottles weekly while managing finance, logistics, and volunteers.",
    date: "2021 — 2024",
    highlights: [
      "Distributed over 2,500+ water bottles every week to local communities",
      "Managed project accounting, budget allocation, and supply chain logistics",
      "Coordinated volunteer teams for field distribution"
    ]
  },
  {
    id: "exp-4",
    role: "Student Ambassador — Bayswater Institute",
    organization: "Bayswater Institute, UK",
    description: "Supported institute events, guided students, and represented the institute as an official student ambassador during a study program in the UK.",
    date: "SEP 2023 — DEC 2023",
    highlights: [
      "Represented Bayswater Institute during study abroad program in the UK",
      "Guided incoming international students through academic onboarding",
      "Facilitated campus events and cross-cultural workshops"
    ]
  }
];
