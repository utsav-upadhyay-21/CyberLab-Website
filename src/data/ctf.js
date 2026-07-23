export const upcomingCTFs = [
  {
    id: 1,
    name: "CyberQuest '26",
    date: "2026-08-12",
    platform: "CTFd (Online)",
    difficulty: "Beginner",
    duration: "3 hours",
    teams: "1-4 members",
    registrationLink: "mailto:aegis@rvitm.edu.in?subject=CTF%20Registration",
    description:
      "Internal orientation CTF for new AEGIS members. Categories: Web, Crypto, Forensics, Miscellaneous.",
  },
  {
    id: 2,
    name: "National Collegiate Cyber Defense Challenge",
    date: "2026-09-15",
    platform: "Offline @ RVITM",
    difficulty: "Intermediate",
    duration: "6 hours",
    teams: "3-5 members",
    registrationLink: "mailto:aegis@rvitm.edu.in?subject=NCCDC%20Registration",
    description:
      "Inter-college CTF competition. Defend a network while attacking other teams. Prizes for top 3.",
  },
  {
    id: 3,
    name: "PicoCTF 2026",
    date: "2026-09-20",
    platform: "PicoCTF (Online)",
    difficulty: "Beginner - Intermediate",
    duration: "2 weeks",
    teams: "Individual",
    registrationLink: "https://picoctf.org",
    description:
      "CMU's annual beginner-friendly CTF. Great for learning fundamentals. Categories: Binary Exploitation, Web Exploitation, Cryptography, Forensics, Reverse Engineering.",
  },
  {
    id: 4,
    name: "HackTheBox University CTF",
    date: "2026-10-05",
    platform: "HackTheBox (Online)",
    difficulty: "Intermediate - Advanced",
    duration: "48 hours",
    teams: "1-5 members",
    registrationLink: "https://www.hackthebox.com",
    description:
      "University-exclusive CTF on HackTheBox. Challenging real-world scenarios. Team participation strongly recommended.",
  },
]

export const difficultyColors = {
  Beginner: "bg-green-600 text-white",
  Intermediate: "bg-yellow-600 text-black",
  Advanced: "bg-red-600 text-white",
  "Beginner - Intermediate": "bg-green-600 text-white",
  "Intermediate - Advanced": "bg-red-600 text-white",
}
