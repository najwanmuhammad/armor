import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({ title, description, className = "" }: PageHeaderProps) {
  return (
    <div className={`mb-8 text-center sm:text-left ${className}`}>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h1>
      {description && <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">{description}</p>}
    </div>
  );
}

