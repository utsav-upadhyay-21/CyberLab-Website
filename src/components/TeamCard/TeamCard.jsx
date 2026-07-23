export function TeamCard({ member }) {
  return (
    <div className="border-2 border-foreground p-6 transition-colors duration-100 hover:bg-foreground hover:text-background group">
      <div className="w-full aspect-square bg-muted group-hover:bg-background/10 mb-4 flex items-center justify-center border-2 border-foreground">
        <span className="font-display text-4xl font-bold opacity-30">
          {member.name.split(" ").map((n) => n[0]).join("")}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight mb-1">
        {member.name}
      </h3>
      <p className="font-mono text-xs tracking-widest uppercase opacity-60">
        {member.position}
      </p>
    </div>
  )
}
