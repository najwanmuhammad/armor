"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";

export interface PortableTextRendererProps {
  content: PortableTextBlock[];
  /**
   * Fungsi untuk mengkonversi Sanity image ke URL.
   * Di-pass dari app supaya packages/ui tidak bergantung ke Sanity client manapun.
   * Contoh penggunaan di app:
   *   <PortableTextRenderer
   *     content={konten}
   *     getImageUrl={(src) => urlFor(src).width(900).url()}
   *     getBlurUrl={(src) => urlFor(src).width(20).quality(20).blur(10).url()}
   *   />
   */
  getImageUrl?: (source: unknown) => string;
  getBlurUrl?: (source: unknown) => string;
  /** Warna heading h2, default forest green */
  headingColor?: string;
  /** Warna link, default biru laut */
  linkColor?: string;
}

export default function PortableTextRenderer({
  content,
  getImageUrl,
  getBlurUrl,
  headingColor = "#2D5016",
  linkColor = "#1B6B8A",
}: PortableTextRendererProps) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p style={{ marginBottom: "1rem", color: "#4a4a45", lineHeight: 1.7 }}>
          {children}
        </p>
      ),
      h2: ({ children }) => (
        <h2
          style={{
            fontSize: "1.5rem",
            color: headingColor,
            marginTop: "2rem",
            marginBottom: "0.75rem",
            lineHeight: 1.25,
          }}
        >
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3
          style={{
            fontSize: "1.25rem",
            color: "#1a1a18",
            marginTop: "1.5rem",
            marginBottom: "0.5rem",
            lineHeight: 1.25,
          }}
        >
          {children}
        </h3>
      ),
      blockquote: ({ children }) => (
        <blockquote
          style={{
            borderLeft: `4px solid ${linkColor}`,
            paddingLeft: "1rem",
            margin: "1.5rem 0",
            color: "#7a7a75",
            fontStyle: "italic",
          }}
        >
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li style={{ marginBottom: "0.375rem", color: "#4a4a45" }}>
          {children}
        </li>
      ),
      number: ({ children }) => (
        <li style={{ marginBottom: "0.375rem", color: "#4a4a45" }}>
          {children}
        </li>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong style={{ fontWeight: 600, color: "#1a1a18" }}>
          {children}
        </strong>
      ),
      em: ({ children }) => <em>{children}</em>,
      link: ({ value, children }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: linkColor, textDecoration: "underline" }}
        >
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset || !getImageUrl) return null;
        const imageUrl = getImageUrl(value);
        const blurUrl = getBlurUrl?.(value);
        return (
          <figure style={{ margin: "1.5rem 0" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={imageUrl}
                alt={value.caption ?? ""}
                fill
                style={{ objectFit: "cover" }}
                placeholder={blurUrl ? "blur" : "empty"}
                blurDataURL={blurUrl}
              />
            </div>
            {value.caption && (
              <figcaption
                style={{
                  textAlign: "center",
                  fontSize: "0.8125rem",
                  color: "#7a7a75",
                  marginTop: "0.5rem",
                }}
              >
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
  };

  return <PortableText value={content} components={components} />;
}
