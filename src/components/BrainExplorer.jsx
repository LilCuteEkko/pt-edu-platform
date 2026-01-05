import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Activity, AlertCircle } from 'lucide-react';

const BrainExplorer = ({ lobes }) => {
    const [selectedLobe, setSelectedLobe] = useState(null);
    const [hoveredLobe, setHoveredLobe] = useState(null);

    // Simplified Brain Paths (Lateral View)
    // Realistic Brain Paths (Lateral View with Gyri/Sulci)
    const paths = {
        frontal: "M130,225 C120,220 105,200 105,180 C105,160 115,140 130,120 C145,100 170,80 200,75 C230,70 260,80 280,95 C285,100 290,110 290,120 L290,220 C270,225 250,230 230,230 C200,230 160,240 130,225 Z M140,180 Q150,170 160,180 T180,180 M200,120 Q210,110 220,120 T240,120", // Added internal texture lines sketch
        parietal: "M295,98 C320,95 350,100 370,115 C390,130 405,150 410,180 C412,200 400,215 390,220 L300,220 L300,120 C298,110 295,105 295,98 Z M320,140 Q330,130 340,140 T360,140",
        occipital: "M410,180 C425,200 430,230 420,250 C410,270 390,285 370,290 L350,290 L350,230 L395,185 L410,180 Z",
        temporal: "M350,290 L350,230 L290,220 L220,220 C200,230 180,240 180,260 C180,280 210,310 250,315 C290,320 330,310 350,290 Z M220,260 Q240,270 260,260 T300,260",
        cerebellum: "M320,310 C360,310 390,330 395,350 C400,370 380,390 350,400 C320,410 290,390 280,370 C275,350 290,320 320,310 Z M300,330 L370,330 M310,350 L360,350 M320,370 L350,370", // Folia lines
        brainstem: "M250,320 C240,340 230,360 235,380 C240,400 250,420 260,425 L280,425 C290,400 295,370 280,330 L250,320 Z"
    };

    // Note: The paths above are semi-realistic "sketches" to simulate complexity without hundreds of points.
    // Ideally, these would be imported from a professionally drawn SVG, but we are procedurally approximating.
    // For a truly "wiggly" gyri look, we update the strokes to be more organic.

    // Let's refine the frontal path to be truly detailed for phase 10:
    paths.frontal = "M100,200 C80,150 120,60 250,60 C260,60 270,62 280,65 C285,67 290,80 300,110 L300,220 L180,220 C150,250 120,230 100,200 Z M130,120 C140,100 160,100 170,120 C180,140 160,160 150,150 M180,90 C200,70 220,70 230,90 C240,110 220,130 210,120";
    paths.parietal = "M280,65 C330,60 380,80 400,120 C415,150 420,180 415,200 L300,220 L300,110 C290,80 285,70 280,65 Z M330,100 C340,80 360,80 370,100 M350,130 C360,110 380,110 390,130";
    paths.temporal = "M180,220 L300,220 L350,240 L350,290 C320,320 250,320 200,300 C180,290 160,260 180,220 Z M220,250 C240,240 260,240 280,250 M300,270 C320,260 340,260 350,270";
    paths.occipital = "M415,200 C430,230 430,270 400,290 C380,300 360,300 350,290 L350,240 L415,200 Z M380,230 C390,220 400,220 410,230";
    paths.cerebellum = "M300,310 C350,305 400,320 390,360 C380,390 330,400 300,380 C280,360 270,330 300,310 Z M310,330 H360 M320,345 H350 M330,360 H345"; // Striations
    paths.brainstem = "M240,300 C220,350 230,410 250,430 L270,430 C290,400 280,320 260,300 L240,300 Z";

    const colors = {
        frontal: "#0e7490", // Cyan
        parietal: "#f59e0b", // Amber
        temporal: "#10b981", // Emerald
        occipital: "#6366f1", // Indigo
        cerebellum: "#ec4899", // Pink
        brainstem: "#64748b"  // Slate
    };

    return (
        <div className="brain-explorer">
            <div className="explorer-container">
                <div className="svg-container">
                    <svg viewBox="0 0 500 450" className="brain-svg">
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        {/* Base Outline/Shadow for depth (Optional) */}

                        {lobes.map((lobe) => (
                            <motion.path
                                key={lobe.id}
                                d={paths[lobe.id]}
                                fill={selectedLobe?.id === lobe.id ? colors[lobe.id] : "#e2e8f0"}
                                stroke="white"
                                strokeWidth="3"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    fill: selectedLobe?.id === lobe.id || hoveredLobe === lobe.id ? colors[lobe.id] : "#cbd5e1",
                                    scale: hoveredLobe === lobe.id ? 1.02 : 1
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

                        {/* Labels (simplified) */}
                        <text x="210" y="160" fill="currentColor" textAnchor="middle" fontWeight="600" fontSize="14" pointerEvents="none" style={{ opacity: 1 }}>Frontal</text>
                        <text x="340" y="120" fill="currentColor" textAnchor="middle" fontWeight="600" fontSize="14" pointerEvents="none" style={{ opacity: 1 }}>Parietal</text>
                        <text x="390" y="260" fill="currentColor" textAnchor="middle" fontWeight="600" fontSize="14" pointerEvents="none" style={{ opacity: 1 }}>Occipital</text>
                        <text x="260" y="270" fill="currentColor" textAnchor="middle" fontWeight="600" fontSize="14" pointerEvents="none" style={{ opacity: 1 }}>Temporal</text>
                        <text x="330" y="350" fill="currentColor" textAnchor="middle" fontWeight="600" fontSize="14" pointerEvents="none" style={{ opacity: 1 }}>Cerebellum</text>
                        <text x="255" y="400" fill="currentColor" textAnchor="middle" fontWeight="600" fontSize="14" pointerEvents="none" style={{ opacity: 1 }}>Brainstem</text>
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
