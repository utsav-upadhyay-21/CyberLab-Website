export const events = [
  {
    id: 1,
    title: "Introduction to Network Security",
    date: "2026-08-05",
    time: "2:00 PM - 4:00 PM",
    type: "Workshop",
    location: "Lab 301, RVITM",
    description:
      "Hands-on workshop covering network fundamentals, packet analysis with Wireshark, and basic firewall configuration. Open to all skill levels.",
    registrationLink: "mailto:aegis@rvitm.edu.in?subject=Workshop%20Registration",
    capacity: "40 seats",
  },
  {
    id: 2,
    title: "Capture The Flag — Orientation Round",
    date: "2026-08-12",
    time: "10:00 AM - 1:00 PM",
    type: "CTF",
    location: "Online (CTFd)",
    description:
      "Beginner-friendly CTF to introduce new members to problem-solving in cybersecurity. Categories: Web, Crypto, Forensics, Misc.",
    registrationLink: "mailto:aegis@rvitm.edu.in?subject=CTF%20Registration",
    capacity: "60 teams",
  },
  {
    id: 3,
    title: "Web Application Security Deep Dive",
    date: "2026-08-20",
    time: "3:00 PM - 5:30 PM",
    type: "Workshop",
    location: "Lab 301, RVITM",
    description:
      "OWASP Top 10 walkthrough with live demos. SQL injection, XSS, SSRF, and authentication bypass using DVWA and HackTheBox challenges.",
    registrationLink: "mailto:aegis@rvitm.edu.in?subject=WebSec%20Registration",
    capacity: "40 seats",
  },
  {
    id: 4,
    title: "Guest Talk: Career in Cybersecurity",
    date: "2026-09-01",
    time: "4:00 PM - 5:30 PM",
    type: "Talk",
    location: "Seminar Hall, RVITM",
    description:
      "Industry professionals share their journey, day-to-day roles, certifications roadmap, and hiring trends in cybersecurity.",
    registrationLink: "mailto:aegis@rvitm.edu.in?subject=Talk%20Registration",
    capacity: "100 seats",
  },
  {
    id: 5,
    title: "Linux & Bash Fundamentals",
    date: "2026-09-10",
    time: "2:00 PM - 4:00 PM",
    type: "Workshop",
    location: "Lab 301, RVITM",
    description:
      "Essential Linux commands, file system navigation, shell scripting basics, and privilege escalation concepts. Bring your laptop.",
    registrationLink: "mailto:aegis@rvitm.edu.in?subject=Linux%20Workshop",
    capacity: "40 seats",
  },
]

export const eventTypes = {
  Workshop: "border-foreground",
  CTF: "bg-foreground text-background",
  Talk: "border-muted-foreground",
  Meetup: "border-foreground",
}
