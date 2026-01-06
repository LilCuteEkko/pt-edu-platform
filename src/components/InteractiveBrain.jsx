import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import brainDiagramImg from '../assets/neuromuscular/remixed-brain.png';

const InteractiveBrain = ({ lobes }) => {
    const [selectedLobe, setSelectedLobe] = useState(null);
    const [hoveredLobe, setHoveredLobe] = useState(null);

    // Approximate SVG paths for standard brain lateral view
    // Adjusted for a 800x600 viewBox
    // SVG paths adjusted for 1024x1024 square image
    // Coordinates refined to be tighter to the lobes to avoid overlap
    const lobePaths = {
        frontal: "M 180,520 C 150,350 250,180 500,160 L 520,450 L 350,580 Z",
        parietal: "M 500,160 C 700,150 850,220 860,420 L 680,500 L 520,450 Z",
        temporal: "M 350,580 L 520,450 L 680,500 L 700,650 C 600,750 400,750 350,580 Z",
        occipital: "M 860,420 C 920,480 920,620 800,680 L 700,650 L 680,500 Z",
        cerebellum: "M 620,700 L 800,680 C 800,820 620,820 580,750 Z",
        brainstem: "M 500,680 L 600,680 L 570,920 L 510,920 Z"
    };

    // Label positions (percentage based)
    const labelPositions = {
        frontal: { top: '35%', left: '30%' },
        parietal: { top: '25%', left: '65%' },
        temporal: { top: '65%', left: '50%' },
        occipital: { top: '55%', left: '85%' },
        cerebellum: { top: '80%', left: '72%' },
        brainstem: { top: '88%', left: '53%' }
    };

    const getLobeId = (id) => {
        // Map data IDs to path keys if necessary
        if (id.includes('frontal')) return 'frontal';
        if (id.includes('parietal')) return 'parietal';
        if (id.includes('temporal')) return 'temporal';
        if (id.includes('occipital')) return 'occipital';
        if (id.includes('cerebellum')) return 'cerebellum';
        if (id.includes('brainstem')) return 'brainstem';
        return id;
    };

    const handleLobeClick = (lobe) => {
        setSelectedLobe(lobe);
    };

    return (
        <div className="interactive-brain-wrapper" style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div className="brain-column" style={{ flex: '0 0 auto', width: '100%', maxWidth: '450px', position: 'relative' }}>
                <div className="brain-container" style={{ position: 'relative', width: '100%' }}>
                    <img
                        src={brainDiagramImg}
                        alt="Interactive Brain Anatomy"
                        style={{ width: '100%', display: 'block', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }}
                    />

                    <svg
                        viewBox="0 0 1024 1024"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                    >
                        {lobes && lobes.map((lobe) => {
                            const pathKey = getLobeId(lobe.id);
                            const pathData = lobePaths[pathKey];

                            if (!pathData) return null;

                            const isSelected = selectedLobe?.id === lobe.id;
                            const isHovered = hoveredLobe === lobe.id;

                            return (
                                <motion.path
                                    key={lobe.id}
                                    d={pathData}
                                    fill={isSelected ? "rgba(255, 255, 255, 0.4)" : isHovered ? "rgba(255, 255, 255, 0.2)" : "transparent"}
                                    stroke={isSelected || isHovered ? "rgba(255, 255, 255, 0.9)" : "transparent"}
                                    strokeWidth={isSelected ? "5" : isHovered ? "3" : "0"}
                                    onClick={() => handleLobeClick(lobe)}
                                    onMouseEnter={() => setHoveredLobe(lobe.id)}
                                    onMouseLeave={() => setHoveredLobe(null)}
                                    style={{ cursor: 'pointer', pointerEvents: 'auto', transition: 'fill 0.3s' }}
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        scale: isHovered ? 1.05 : 1,
                                        filter: isHovered ? "drop-shadow(0px 0px 8px rgba(255,255,255,0.5))" : "none"
                                    }}
                                />
                            );
                        })}
                    </svg>

                    {/* Static Labels */}
                    {lobes && lobes.map((lobe) => {
                        const pos = labelPositions[getLobeId(lobe.id)];
                        if (!pos) return null;
                        return (
                            <div
                                key={`label-${lobe.id}`}
                                style={{
                                    position: 'absolute',
                                    top: pos.top,
                                    left: pos.left,
                                    transform: 'translate(-50%, -50%)',
                                    background: 'rgba(0,0,0,0.6)',
                                    color: 'white',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    pointerEvents: 'none',
                                    whiteSpace: 'nowrap',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                                }}
                            >
                                {lobe.name.split(' ')[0]}
                                {/* Only show first word (Frontal, Parietal) to keep it clean, except Brainstem */}
                            </div>
                        );
                    })}

                    {/* Hover Label */}
                    <AnimatePresence>
                        {hoveredLobe && !selectedLobe && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'rgba(0,0,0,0.8)',
                                    color: 'white',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    pointerEvents: 'none',
                                    whiteSpace: 'nowrap',
                                    zIndex: 10
                                }}
                            >
                                {lobes.find(l => l.id === hoveredLobe)?.name || 'View Details'}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    Select a colored region to learn more.
                </p>
            </div>

            <div className="details-column" style={{ flex: '1', minWidth: '300px' }}>
                <AnimatePresence mode="wait">
                    {selectedLobe ? (
                        <motion.div
                            key={selectedLobe.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="lobe-details"
                            style={{
                                padding: '2rem',
                                background: 'var(--color-surface)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--color-border)',
                                boxShadow: 'var(--shadow-md)',
                                height: '100%',
                                maxHeight: '600px',
                                overflowY: 'auto'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                                <h3 style={{ margin: 0, fontSize: '1.75rem', color: 'var(--color-primary)' }}>{selectedLobe.name}</h3>
                                <button
                                    onClick={() => setSelectedLobe(null)}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
                                    aria-label="Close details"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            <div className="lobe-content">
                                {/* Sub-Regions (New) */}
                                {selectedLobe.subRegions && (
                                    <section style={{ marginBottom: '2rem' }}>
                                        <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                                            Key Functional Areas
                                        </h4>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                            {selectedLobe.subRegions.map((region, idx) => (
                                                <div key={idx} style={{ background: 'var(--color-bg-secondary)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
                                                    <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{region.name}</strong>
                                                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{region.func}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* Functions (Existing) */}
                                <section style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)' }}></span>
                                        Physiological Functions
                                    </h4>
                                    <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--color-text)' }}>
                                        {selectedLobe.functions}
                                    </p>
                                </section>

                                {/* Vascular Supply (New) */}
                                {selectedLobe.vascularSupply && (
                                    <section style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', background: '#f0fdf4', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #bbf7d0' }}>
                                        <div style={{ color: '#166534' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#15803d', fontWeight: '700', margin: 0 }}>Vascular Supply</h4>
                                            <p style={{ margin: 0, color: '#14532d', fontWeight: '500' }}>{selectedLobe.vascularSupply}</p>
                                        </div>
                                    </section>
                                )}

                                {/* Pathology (Existing) */}
                                {selectedLobe.damage && (
                                    <section style={{ marginBottom: '2rem', background: 'var(--color-danger-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-danger)' }}>
                                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--color-danger)', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                            Pathology & Clinical Relevance
                                        </h4>
                                        <div style={{ color: 'var(--color-text)', lineHeight: '1.5' }}>
                                            {selectedLobe.damage}
                                        </div>
                                    </section>
                                )}

                                {/* Rehab Focus (New) */}
                                {selectedLobe.rehabFocus && (
                                    <section>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--color-secondary)', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                            PT Rehabilitation Focus
                                        </h4>
                                        <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #bfdbfe', color: '#1e3a8a' }}>
                                            {selectedLobe.rehabFocus}
                                        </div>
                                    </section>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <div style={{
                            height: '100%',
                            minHeight: '400px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--color-surface-muted)',
                            backgroundColor: '#f8fafc',
                            borderRadius: 'var(--radius-lg)',
                            border: '2px dashed var(--color-border)',
                            padding: '3rem',
                            textAlign: 'center',
                            opacity: 0.7
                        }}>
                            <div style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                </svg>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Explore the Brain</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Click on any brain lobe on the left to view its detailed functions and clinical relevance.</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default InteractiveBrain;
