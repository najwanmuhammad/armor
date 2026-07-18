import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";

export default function PhotoModal({ location, onClose }) {
    // currentSlide: 0 = video (jika ada), 1+ = foto
    // Jika tidak ada video, 0 = foto pertama
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const intervalRef = useRef(null);

    const photos = location?.photos || (location?.photo ? [location.photo] : []);
    const hasVideo = !!location?.video;

    // Total slides: video (jika ada) + foto-foto
    const totalSlides = (hasVideo ? 1 : 0) + photos.length;
    const isVideoSlide = hasVideo && currentSlide === 0;
    const photoIndex = hasVideo ? currentSlide - 1 : currentSlide;

    // Reset state saat location berubah
    useEffect(() => {
        setCurrentSlide(0);
        setIsFading(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
    }, [location?.id]);

    // Escape key handler
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("keydown", handleKey);
        };
    }, [onClose]);

    // Auto-cycle slideshow saat di foto (bukan video)
    const startAutoCycle = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (photos.length <= 1 && !hasVideo) return;

        intervalRef.current = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentSlide((prev) => {
                    const next = prev + 1;
                    // Jika sudah di slide terakhir, kembali ke slide pertama (video atau foto pertama)
                    return next >= totalSlides ? (hasVideo ? 1 : 0) : next;
                });
                setIsFading(false);
            }, 400);
        }, 4000);
    }, [photos.length, hasVideo, totalSlides]);

    // Start/stop auto-cycle berdasarkan apakah saat ini di foto
    useEffect(() => {
        if (!isVideoSlide && photos.length > 0) {
            startAutoCycle();
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isVideoSlide, startAutoCycle, photos.length]);

    // Saat video selesai, otomatis next ke foto pertama
    const handleVideoEnded = useCallback(() => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentSlide(1); // pindah ke foto pertama
            setIsFading(false);
        }, 300);
    }, []);

    // Manual navigation
    const goToSlide = useCallback((index) => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsFading(false);
        }, 300);
    }, []);

    const goPrev = useCallback(() => {
        const prev = currentSlide - 1;
        goToSlide(prev < 0 ? totalSlides - 1 : prev);
    }, [currentSlide, totalSlides, goToSlide]);

    const goNext = useCallback(() => {
        const next = currentSlide + 1;
        goToSlide(next >= totalSlides ? 0 : next);
    }, [currentSlide, totalSlides, goToSlide]);

    if (!location) return null;
    if (totalSlides === 0) return null;

    const showArrows = totalSlides > 1;

    return (
        <div className="photo-modal-backdrop" onClick={onClose}>
            <div className="photo-modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="photo-modal-close" onClick={onClose} aria-label="Tutup">✕</button>

                <div className="photo-modal-img-wrap photo-modal-slideshow">
                    {isVideoSlide ? (
                        /* ── Video Slide ── */
                        <video
                            src={location.video}
                            poster={location.photo}
                            controls
                            autoPlay
                            muted
                            playsInline
                            className={`photo-modal-img ${isFading ? "photo-modal-slide--fading" : ""}`}
                            style={{ backgroundColor: "#0f172a" }}
                            onEnded={handleVideoEnded}
                        />
                    ) : (
                        /* ── Photo Slide ── */
                        <img
                            src={photos[photoIndex]}
                            alt={`${location.name} - ${photoIndex + 1}`}
                            className={`photo-modal-img photo-modal-slide ${isFading ? "photo-modal-slide--fading" : ""}`}
                        />
                    )}

                    {/* Arrow navigation */}
                    {showArrows && (
                        <>
                            <button
                                className="photo-modal-arrow photo-modal-arrow--prev"
                                onClick={goPrev}
                                aria-label="Sebelumnya"
                            >
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                className="photo-modal-arrow photo-modal-arrow--next"
                                onClick={goNext}
                                aria-label="Berikutnya"
                            >
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Dots indicator */}
                    {totalSlides > 1 && (
                        <div className="photo-modal-dots">
                            {Array.from({ length: totalSlides }, (_, i) => (
                                <button
                                    key={i}
                                    className={`photo-modal-dot ${i === currentSlide ? "photo-modal-dot--active" : ""} ${hasVideo && i === 0 ? "photo-modal-dot--video" : ""}`}
                                    onClick={() => goToSlide(i)}
                                    aria-label={hasVideo && i === 0 ? "Video" : `Foto ${hasVideo ? i : i + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Progress bar (hanya saat di foto, bukan video) */}
                    {!isVideoSlide && photos.length > 0 && (
                        <div className="photo-modal-progress">
                            <div
                                className="photo-modal-progress-bar"
                                key={currentSlide}
                            />
                        </div>
                    )}
                </div>

                <div className="photo-modal-info">
                    <span
                        className="popup-tag"
                        style={
                            location.category === "destinasi"
                                ? { backgroundColor: "#ccfbf1", color: "#0f766e" }
                                : { backgroundColor: "#fef3c7", color: "#92400e" }
                        }
                    >
                        {location.category === "destinasi" ? "Destinasi Wisata" : "Lokasi KKN"}
                    </span>
                    <h3 className="photo-modal-title">{location.name}</h3>
                    <p className="photo-modal-desc">{location.description}</p>
                    <div className="photo-modal-links">
                        <Link href={`/detail/${location.id}`} className="photo-modal-link">
                            Lihat detail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
