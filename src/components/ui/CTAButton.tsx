import Link from "next/link";

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  children,
  href,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 ease-out cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-green-primary to-tech-purple text-white hover:shadow-lg hover:shadow-green-primary/25 hover:scale-105",
    secondary:
      "border-2 border-green-primary text-green-primary hover:bg-green-primary hover:text-white hover:shadow-lg hover:shadow-green-primary/15",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
