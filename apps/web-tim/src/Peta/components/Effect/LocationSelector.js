export default function LocationSelector({ locations, activeId, onSelect, onReset, islandTarget, onSelectIsland }) {
    return (
        <nav className="loc-navbar">
            <div className="loc-navbar__links">
                {islandTarget && (
                    <button
                        className={`loc-nav-link${activeId === islandTarget.id ? " loc-nav-link--active" : ""}`}
                        onClick={() => onSelectIsland(islandTarget)}
                    >
                        {islandTarget.name}
                    </button>
                )}
                <button
                    className={`loc-nav-link${!activeId ? " loc-nav-link--active" : ""}`}
                    onClick={onReset}
                >
                    Lihat Semua
                </button>
                {locations.map((loc) => (
                    <button
                        key={loc.id}
                        className={`loc-nav-link${activeId === loc.id ? " loc-nav-link--active" : ""}`}
                        onClick={() => onSelect(loc)}
                    >
                        {loc.name}
                    </button>
                ))}
            </div>
        </nav>
    );
}
