import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Pause } from 'lucide-react';

const SarcomereAnimator = () => {
    const [contractionLevel, setContractionLevel] = useState(0); // 0 to 100
    const [isPlaying, setIsPlaying] = useState(false);

    // Animation loop logic could go here, but manual slider is often better for learning

    return (
        <div className="sarcomere-animator">
            <div className="animation-container">
                <svg viewBox="0 0 600 300" className="sarcomere-svg">
                    <defs>
                        <pattern id="actinPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="5" cy="5" r="2" fill="#ef4444" />
                        </pattern>
                        <pattern id="myosinPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="5" cy="5" r="2" fill="#eab308" />
                        </pattern>
                    </defs>

                    {/* Z-Lines (The boundaries) */}
                    <motion.rect
                        x={10 + (contractionLevel * 1.5)} y="20" width="10" height="260" fill="#334155"
                        animate={{ x: 10 + (contractionLevel * 1.5) }}
                    />
                    <motion.rect
                        x={580 - (contractionLevel * 1.5)} y="20" width="10" height="260" fill="#334155"
                        animate={{ x: 580 - (contractionLevel * 1.5) }}
                    />
                    <text x="50" y="40" fill="currentColor" className="text-muted" fontSize="12">Z-Line</text>
                    <text x="520" y="40" fill="currentColor" className="text-muted" fontSize="12">Z-Line</text>

                    {/* Thin Filaments (Actin) - Attached to Z-Lines */}
                    <motion.g animate={{ x: contractionLevel * 1.5 }}>
                        {[60, 100, 140, 180, 220].map((y, i) => (
                            <rect key={`actin-left-${i}`} x="20" y={y} width="200" height="4" fill="#ef4444" rx="2" />
                        ))}
                    </motion.g>
                    <motion.g animate={{ x: -(contractionLevel * 1.5) }}>
                        {[60, 100, 140, 180, 220].map((y, i) => (
                            <rect key={`actin-right-${i}`} x="380" y={y} width="200" height="4" fill="#ef4444" rx="2" />
                        ))}
                    </motion.g>

                    {/* Thick Filaments (Myosin) - Centered (M-Line) */}
                    <g transform="translate(0, 0)">
                        {[80, 120, 160, 200].map((y, i) => (
                            <rect key={`myosin-${i}`} x="200" y={y} width="200" height="8" fill="#eab308" rx="4" />
                        ))}
                        {/* Myosin Heads (simplified) */}
                        {[80, 120, 160, 200].map((y, i) => (
                            <g key={`heads-${i}`}>
                                <motion.path
                                    d={`M220,${y} L210,${y - 15}`}
                                    stroke="#eab308" strokeWidth="3" fill="none"
                                    animate={{ rotate: contractionLevel > 10 ? -45 : 0 }}
                                />
                                <motion.path
                                    d={`M380,${y} L390,${y - 15}`}
                                    stroke="#eab308" strokeWidth="3" fill="none"
                                    animate={{ rotate: contractionLevel > 10 ? 45 : 0 }}
                                />
                            </g>
                        ))}
                    </g>

                    {/* H-Zone Label */}
                    <text x="300" y="280" textAnchor="middle" fill="currentColor" className="text-muted" fontSize="14">
                        {contractionLevel > 80 ? "H-Zone Disappears" : "H-Zone"}
                    </text>
                </svg>
            </div>

            <div className="controls">
                <div className="control-header">
                    <h4>Contraction Control</h4>
                    <span>{contractionLevel}%</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={contractionLevel}
                    onChange={(e) => setContractionLevel(parseInt(e.target.value))}
                    className="slider"
                />
                <p className="explanation">
                    As calcium binds to troponin, myosin heads pull actin filaments inward, shortening the sarcomere (Z-lines move closer).
                </p>
            </div>

            <style>{`
                .sarcomere-animator {
                    background: var(--color-surface);
                    border: 1px solid #e2e8f0;
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                    box-shadow: var(--shadow-sm);
                }
                .animation-container {
                    background: color-mix(in srgb, var(--color-surface), var(--color-text) 5%);
                    border-radius: var(--radius-md);
                    margin-bottom: 1.5rem;
                    overflow: hidden;
                }
                .control-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                    color: var(--color-primary);
                }
                .slider {
                    width: 100%;
                    margin-bottom: 1rem;
                    accent-color: var(--color-primary);
                }
                .explanation {
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                    margin: 0;
                    background: color-mix(in srgb, var(--color-surface), var(--color-primary) 10%);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border-left: 3px solid var(--color-primary);
                }
            `}</style>
        </div>
    );
};

export default SarcomereAnimator;
