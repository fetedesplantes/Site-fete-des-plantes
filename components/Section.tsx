import React from "react";
import Container from "./Container";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={["py-10 md:py-16", className].join(" ")}>
      <Container>{children}</Container>
    </section>
  );
}