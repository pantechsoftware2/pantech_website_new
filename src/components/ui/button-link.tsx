import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "light" | "dark" | "outline";
  arrow?: boolean;
};

export function ButtonLink({
  children,
  className = "",
  variant = "light",
  arrow = true,
  ...props
}: Props) {
  return (
    <Link {...props} className={`button button--${variant} ${className}`}>
      {children}
      {arrow && <ArrowRight size={15} aria-hidden="true" />}
    </Link>
  );
}
