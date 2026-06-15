interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        hover ? "glow-hover hover:scale-[1.02]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
