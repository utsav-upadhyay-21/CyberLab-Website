export const currentAffairs = [
  {
    id: 1,
    title: "Critical RCE Vulnerability in OpenSSH (CVE-2026-XXXX)",
    date: "2026-07-20",
    severity: "Critical",
    source: "NVD",
    summary:
      "A remote code execution vulnerability has been discovered in OpenSSH versions prior to 9.8. Attackers can exploit a race condition during key exchange to execute arbitrary code on the server. Patches are available.",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2026-XXXX",
  },
  {
    id: 2,
    title: "Massive Data Breach at HealthCorp Exposes 2M Records",
    date: "2026-07-18",
    severity: "High",
    source: "The Hacker News",
    summary:
      "HealthCorp confirmed a breach exposing patient records including SSNs, medical history, and insurance details. The attack leveraged a misconfigured S3 bucket. Investigation ongoing.",
    link: "https://thehackernews.com",
  },
  {
    id: 3,
    title: "New MITRE ATT&CK Framework Update (v14.1)",
    date: "2026-07-15",
    severity: "Info",
    source: "MITRE",
    summary:
      "MITRE has released ATT&CK v14.1 with new techniques for cloud-based attacks, updated mobile threat matrices, and improved detection guidance for supply chain compromises.",
    link: "https://attack.mitre.org",
  },
  {
    id: 4,
    title: "Critical Zero-Day in Palo Alto GlobalProtect Exploited in the Wild",
    date: "2026-07-12",
    severity: "Critical",
    source: "CISA",
    summary:
      "CISA warns of active exploitation of CVE-2026-12345 in Palo Alto GlobalProtect. The vulnerability allows unauthenticated remote code execution. Emergency patches have been released.",
    link: "https://www.cisa.gov",
  },
  {
    id: 5,
    title: "Ransomware Gang Targets Indian Government Agencies",
    date: "2026-07-10",
    severity: "High",
    source: "CERT-In",
    summary:
      "CERT-In has issued an advisory regarding LockBit 4.0 ransomware targeting Indian government networks through phishing campaigns impersonating DoT notifications.",
    link: "https://www.cert-in.org.in",
  },
]

export const severityColors = {
  Critical: "bg-red-600 text-white",
  High: "bg-orange-500 text-white",
  Medium: "bg-yellow-500 text-black",
  Low: "bg-blue-500 text-white",
  Info: "bg-muted text-foreground",
}
