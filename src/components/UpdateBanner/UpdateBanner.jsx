import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { siteConfig } from "../../data/site"

export function UpdateBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const lastSeen = localStorage.getItem("rvitm-last-seen-update")
    const currentVersion = siteConfig.lastUpdated

    if (lastSeen !== currentVersion) {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem("rvitm-last-seen-update", siteConfig.lastUpdated)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-foreground text-background border-b-2 border-foreground">
      <div className="container-main flex items-center justify-between py-2">
        <p className="font-mono text-xs tracking-widest">
          Site updated on {siteConfig.lastUpdated} — check out what's new
        </p>
        <button
          onClick={dismiss}
          className="p-1 hover:opacity-60 transition-opacity"
          aria-label="Dismiss"
        >
          <X size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
