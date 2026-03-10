import Link from "next/link";
import { ReactNode } from "react";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium shadow-soft transition active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-terracotta/50";
  const styles =
    variant === "primary"
      ? "bg-terracotta text-forest hover:bg-terracotta2"
      : "bg-sand text-forest hover:bg-stone";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}