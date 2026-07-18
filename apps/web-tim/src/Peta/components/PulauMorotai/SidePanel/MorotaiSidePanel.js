"use client";

import { useState, useMemo } from "react";

const categories = [
    {
        id: "destinasi",
        name: "Destinasi",
        count: 8,
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        color: "#0d9488",
        bgColor: "rgba(13, 148, 136, 0.15)",
    },
    {
        id: "kuliner",
        name: "Kuliner",
        count: 3,
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
        ),
        color: "#ef4444",
        bgColor: "rgba(239, 68, 68, 0.15)",
    },
    {
        id: "penginapan",
        name: "Penginapan",
        count: 2,
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        color: "#3b82f6",
        bgColor: "rgba(59, 130, 246, 0.15)",
    },
    {
        id: "produk_lokal",
        name: "Produk Lokal",
        count: 0,
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
        color: "#0d9488",
        bgColor: "rgba(13, 148, 136, 0.15)",
    },
    {
        id: "pengalaman",
        name: "Pengalaman",
        count: 3,
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        color: "#22c55e",
        bgColor: "rgba(34, 197, 94, 0.15)",
    },
    {
        id: "penting",
        name: "Penting",
        count: 2,
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        color: "#ef4444",
        bgColor: "rgba(239, 68, 68, 0.15)",
    },
];

export default function MorotaiSidePanel({ onSelectCategory, onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCategoryClick = (cat) => {
        const newActive = activeCategory === cat.id ? null : cat.id;
        setActiveCategory(newActive);
        onSelectCategory?.(newActive ? cat : null);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch?.(e.target.value);
    };

    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) return categories;
        return categories.filter((cat) =>
            cat.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <div className={`side-panel ${isCollapsed ? "side-panel--collapsed" : ""}`}>
            {/* Toggle button for mobile */}
            <button
                className="side-panel__toggle"
                onClick={() => setIsCollapsed(!isCollapsed)}
                aria-label={isCollapsed ? "Buka panel" : "Tutup panel"}
            >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isCollapsed ? (
                        <polyline points="9 18 15 12 9 6" />
                    ) : (
                        <polyline points="15 18 9 12 15 6" />
                    )}
                </svg>
            </button>

            {/* Search Bar */}
            <div className="side-panel__search">
                <div className="side-panel__search-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
                <input
                    type="text"
                    className="side-panel__search-input"
                    placeholder="Cari tempat, warung, pantai..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            {/* Category List */}
            <div className="side-panel__categories">
                {filteredCategories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`side-panel__category ${activeCategory === cat.id ? "side-panel__category--active" : ""}`}
                        onClick={() => handleCategoryClick(cat)}
                    >
                        <div
                            className="side-panel__category-icon"
                            style={{
                                color: cat.color,
                                backgroundColor: cat.bgColor,
                            }}
                        >
                            {cat.icon}
                        </div>
                        <div className="side-panel__category-info">
                            <span className="side-panel__category-name">{cat.name}</span>
                            <span className="side-panel__category-count">{cat.count} tempat</span>
                        </div>
                        <div className="side-panel__category-arrow">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>

            {/* Bottom Button */}
            <div className="side-panel__footer">
                <button className="side-panel__all-btn" onClick={() => {
                    setActiveCategory(null);
                    onSelectCategory?.(null);
                }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="21" x2="4" y2="14" />
                        <line x1="4" y1="10" x2="4" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12" y2="3" />
                        <line x1="20" y1="21" x2="20" y2="16" />
                        <line x1="20" y1="12" x2="20" y2="3" />
                        <line x1="1" y1="14" x2="7" y2="14" />
                        <line x1="9" y1="8" x2="15" y2="8" />
                        <line x1="17" y1="16" x2="23" y2="16" />
                    </svg>
                    <span>Semua tempat</span>
                </button>
            </div>
        </div>
    );
}
