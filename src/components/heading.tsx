import type { ReactNode } from "react";

type KickerProps = {
  children: ReactNode;
};

export function Kicker({ children }: KickerProps) {
  return <span className="text-micro uppercase tracking-kicker text-sage-deep">{children}</span>;
}

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md" | "sm";
  children: ReactNode;
  className?: string;
};

const headingSizes: Record<string, string> = {
  xl: "text-[12vw] leading-[0.95] font-semibold text-foreground sm:text-5xl md:text-6xl lg:text-[5rem]",
  lg: "text-4xl leading-[1.02] font-semibold text-foreground md:text-6xl",
  md: "text-3xl leading-[1.08] font-semibold text-foreground md:text-[2.75rem]",
  sm: "text-4xl leading-[1.02] font-semibold text-foreground md:text-5xl",
};

export function Heading({ as = "h2", size = "lg", children, className = "" }: HeadingProps) {
  const Tag = as;
  return <Tag className={`${headingSizes[size]}${className ? " " + className : ""}`}>{children}</Tag>;
}
