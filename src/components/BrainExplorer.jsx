import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Activity, AlertCircle } from 'lucide-react';

const paths = {
    frontal: `
        M 120,400 
        C 100,380 90,350 95,320 
        C 80,300 75,250 90,200 
        C 100,160 130,120 180,100 
        C 230,80 300,75 350,90 
        C 380,100 400,110 420,105 
        C 425,130 415,150 420,170 
        C 430,190 410,210 415,230 
        C 420,250 400,270 405,290 
        C 410,300 415,310 410,320
        C 380,315 350,325 320,320 
        C 290,315 260,325 240,330 
        C 220,335 200,340 180,350 
        C 160,360 140,380 120,400 Z
    `,
    parietal: `
        M 420,105
        C 450,100 480,100 510,105
        C 550,110 580,120 600,140
        C 620,160 630,180 635,200
        C 620,220 600,210 590,230
        C 580,240 590,260 580,275
        C 550,270 520,265 490,270
        C 460,275 430,280 410,320
        C 415,310 410,300 405,290
        C 400,270 420,250 415,230
        C 410,210 430,190 420,170
        C 415,150 425,130 420,105 Z
    `,
    temporal: `
        M 120,400
        C 140,380 160,360 180,350
        C 200,340 220,335 240,330
        C 260,325 290,315 320,320
        C 350,325 380,315 410,320
        C 430,280 460,275 490,270
        C 520,265 550,270 580,275
        C 570,300 560,330 540,350
        C 520,380 480,400 450,405
        C 400,410 350,400 300,410
        C 250,420 200,430 150,420
        C 130,415 120,400 120,400 Z
    `,
    occipital: `
        M 635,200
        C 650,220 660,250 660,280
        C 660,310 650,340 630,360
        C 610,380 580,390 560,385
        C 560,360 550,340 540,320
        C 540,350 560,330 570,300 
        L 580,275
        C 590,260 580,240 590,230
        C 600,210 620,220 635,200 Z
    `,
    cerebellum: `
        M 450,450
        C 480,440 520,430 550,430
        C 580,430 610,440 630,460
        C 650,480 660,510 650,530
        C 640,550 610,560 580,560
        C 550,560 520,550 500,540
        C 480,530 460,510 450,490
        C 440,470 445,460 450,450 Z
    `,
    brainstem: `
        M 380,420
        C 380,420 420,410 440,460 
        C 450,490 460,520 450,550
        C 440,580 450,620 460,650 
        L 400,650
        C 390,620 380,580 390,550
        C 400,520 370,480 380,420 Z
    `
};

const colors = {
    frontal: "#ec4899", // Pink (matches reference)
    parietal: "#eab308", // Yellow (matches reference)
    temporal: "#22c55e", // Green (matches reference)
    occipital: "#6366f1", // Purple (matches reference)
    cerebellum: "#9ca3af", // Gray (matches reference)
    brainstem: "#64748b"  // Slate
};

const BrainExplorer = ({ lobes }) => {
    const [selectedLobe, setSelectedLobe] = useState(null);
    const [hoveredLobe, setHoveredLobe] = useState(null);

    return (
        <div className="brain-explorer">
            <div className="explorer-container">
                <div className="svg-container">
                    <svg viewBox="0 0 800 700" className="brain-svg">
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            {/* Pattern for Cerebellum striations */}
                            <pattern id="striations" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                <line x1="0" y1="5" x2="10" y2="5" stroke="#6b7280" strokeWidth="0.5" />
                            </pattern>
                        </defs>

                        {/* Pointers (Lines) - Adjusted for new gyri model */}
                        <g stroke="#374151" strokeWidth="2">
                            {/* Frontal */}
                            <line x1="150" y1="180" x2="250" y2="220" />
                            {/* Parietal */}
                            <line x1="600" y1="180" x2="550" y2="180" />
                            {/* Occipital */}
                            <line x1="760" y1="365" x2="640" y2="300" />
                            {/* Temporal */}
                            <line x1="170" y1="460" x2="280" y2="380" />
                            {/* Cerebellum */}
                            <line x1="760" y1="480" x2="600" y2="480" />
                            {/* Brainstem */}
                            <line x1="380" y1="620" x2="410" y2="550" />
                        </g>

                        {lobes.map((lobe) => (
                            <motion.path
                                key={lobe.id}
                                d={paths[lobe.id]}
                                fill={selectedLobe?.id === lobe.id ? colors[lobe.id] : (lobe.id === 'cerebellum' ? "#d1d5db" : "#d1d5db")}
                                stroke="#1f2937"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    fill: selectedLobe?.id === lobe.id || hoveredLobe === lobe.id ? colors[lobe.id] : "#d1d5db",
                                    scale: hoveredLobe === lobe.id ? 1.01 : 1
                                }}
                                transition={{ duration: 0.2 }}
                                onMouseEnter={() => setHoveredLobe(lobe.id)}
                                onMouseLeave={() => setHoveredLobe(null)}
                                onClick={() => setSelectedLobe(lobe)}
                                style={{
                                    cursor: 'pointer',
                                    transformOrigin: 'center'
                                }}
                            />
                        ))}

                        {/* Cerebellum Texture Overlay (Optional detail) */}
                        <path d={paths.cerebellum} fill="url(#striations)" opacity="0.1" pointerEvents="none" />


                        {/* External Labels */}
                        <text x="150" y="170" fill="#1f2937" textAnchor="middle" fontWeight="600" fontSize="20">Frontal lobe</text>
                        <text x="600" y="170" fill="#1f2937" textAnchor="middle" fontWeight="600" fontSize="20">Parietal lobe</text>
                        <text x="770" y="365" fill="#1f2937" textAnchor="start" fontWeight="600" fontSize="20">Occipital lobe</text>
                        <text x="170" y="475" fill="#1f2937" textAnchor="middle" fontWeight="600" fontSize="20">Temporal lobe</text>
                        <text x="770" y="480" fill="#1f2937" textAnchor="start" fontWeight="600" fontSize="20">Cerebellum</text>
                        <text x="380" y="640" fill="#1f2937" textAnchor="end" fontWeight="600" fontSize="20">Spinal Cord</text>
                    </svg>
                    <p className="instruction-text">Click a region to explore</p>
                </div>

                <div className="info-panel">
                    <AnimatePresence mode="wait">
                        {selectedLobe ? (
                            <motion.div
                                key={selectedLobe.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="lobe-details"
                            >
                                <h3 style={{ color: colors[selectedLobe.id] }}>{selectedLobe.name}</h3>

                                <div className="detail-section">
                                    <h4><Brain size={16} /> Function</h4>
                                    <p>{selectedLobe.function}</p>
                                </div>

                                <div className="detail-section pt-relevance">
                                    <h4><Activity size={16} /> PT Relevance</h4>
                                    <p>{selectedLobe.ptRelevance}</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="placeholder-state"
                            >
                                <Brain size={48} color="#cbd5e1" />
                                <p>Select a brain region to view details</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
                .brain-explorer {
                    background: var(--color-surface);
                    border-radius: var(--radius-lg);
                    border: 1px solid #e2e8f0;
                    padding: 2rem;
                    box-shadow: var(--shadow-sm);
                }
                .explorer-container {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    align-items: center;
                }
                @media (min-width: 768px) {
                    .explorer-container {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                .brain-svg {
                    width: 100%;
                    max-width: 400px;
                    margin: 0 auto;
                    display: block;
                    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
                }
                .instruction-text {
                    text-align: center;
                    color: var(--color-text-muted);
                    font-size: 0.875rem;
                    margin-top: 1rem;
                }
                .info-panel {
                    background: color-mix(in srgb, var(--color-surface), var(--color-text) 5%);
                    border-radius: var(--radius-md);
                    padding: 2rem;
                    min-height: 300px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .placeholder-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    color: var(--color-text-muted);
                    gap: 1rem;
                }
                .lobe-details h3 {
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                    border-bottom: 2px solid #e2e8f0;
                    padding-bottom: 0.5rem;
                }
                .detail-section {
                    margin-bottom: 1.5rem;
                }
                .detail-section h4 {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-secondary);
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 0.5rem;
                }
                .detail-section p {
                    margin: 0;
                    line-height: 1.6;
                    color: var(--color-text);
                    font-weight: 500;
                }
                .pt-relevance {
                    background: var(--color-primary-light); /* Cyan 50 / Slate 900 */
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border-left: 4px solid var(--color-primary);
                }
                .pt-relevance h4 {
                    color: var(--color-primary);
                }
            `}</style>
        </div>
    );
};

export default BrainExplorer;
