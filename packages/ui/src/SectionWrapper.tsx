import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
