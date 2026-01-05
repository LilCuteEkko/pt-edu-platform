import { useState } from 'react';
import { motion } from 'framer-motion';

const HeartValvesVisualizer = () => {
    const [isSystole, setIsSystole] = useState(true);

    return (
        <div className="heart-visualizer">
            <div className="visual-container">
                <svg viewBox="0 0 300 300" className="heart-svg">
                    {/* Basic Heart Outline */}
                    <path d="M150,280 C250,250 280,150 280,100 C280,50 240,20 200,20 C170,20 150,40 150,60 C150,40 130,20 100,20 C60,20 20,50 20,100 C20,150 50,250 150,280 Z"
                        fill="#ffe4e6" stroke="#e11d48" strokeWidth="4" />

                    {/* Septum */}
                    <path d="M150,60 L150,260" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2" />

                    {/* Chambers Labels */}
                    <text x="80" y="80" textAnchor="middle" fill="currentColor" className="text-muted" fontSize="12" opacity="0.7">Right Atrium</text>
                    <text x="220" y="80" textAnchor="middle" fill="currentColor" className="text-muted" fontSize="12" opacity="0.7">Left Atrium</text>
                    <text x="80" y="200" textAnchor="middle" fill="currentColor" className="text-muted" fontSize="12" opacity="0.7">Right Ventricle</text>
                    <text x="220" y="200" textAnchor="middle" fill="currentColor" className="text-muted" fontSize="12" opacity="0.7">Left Ventricle</text>

                    {/* AV Valves (Tricuspid & Mitral) - Open in Diastole, Closed in Systole */}
                    <motion.g animate={{ opacity: isSystole ? 1 : 0.5 }}>
                        {/* Closed State (Systole) */}
                        <path d="M90,130 L110,130" stroke="#be123c" strokeWidth="4" opacity={isSystole ? 1 : 0} />
                        <path d="M190,130 L210,130" stroke="#be123c" strokeWidth="4" opacity={isSystole ? 1 : 0} />

                        {/* Open State (Diastole) */}
                        <path d="M90,130 L85,150 M110,130 L115,150" stroke="#be123c" strokeWidth="4" opacity={isSystole ? 0 : 1} />
                        <path d="M190,130 L185,150 M210,130 L215,150" stroke="#be123c" strokeWidth="4" opacity={isSystole ? 0 : 1} />
                    </motion.g>

                    {/* Semilunar Valves (Pulmonary & Aortic) - Open in Systole, Closed in Diastole */}
                    <motion.g animate={{ opacity: isSystole ? 1 : 0.5 }}>
                        {/* Open State (Systole) */}
                        <path d="M130,160 L130,140 M170,160 L170,140" stroke="#be123c" strokeWidth="4" opacity={isSystole ? 1 : 0} />

                        {/* Closed State (Diastole) */}
                        <path d="M130,160 L140,160" stroke="#be123c" strokeWidth="4" opacity={isSystole ? 0 : 1} />
                        <path d="M160,160 L170,160" stroke="#be123c" strokeWidth="4" opacity={isSystole ? 0 : 1} />
                    </motion.g>

                    {/* Blood Flow Arrows */}
                    <motion.path
                        d={isSystole ? "M200,200 L170,140" : "M220,100 L220,180"}
                        stroke="#3b82f6" strokeWidth="3" fill="none"
                        markerEnd="url(#arrowhead)"
                        animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                    </defs>

                </svg>
            </div>

            <div className="controls">
                <div className="toggle-group">
                    <button
                        className={`toggle-btn ${isSystole ? 'active' : ''}`}
                        onClick={() => setIsSystole(true)}
                    >
                        Systole (Pumping)
                    </button>
                    <button
                        className={`toggle-btn ${!isSystole ? 'active' : ''}`}
                        onClick={() => setIsSystole(false)}
                    >
                        Diastole (Filling)
                    </button>
                </div>

                <div className="status-panel">
                    <div className="status-item">
                        <span className="label">Ventricles:</span>
                        <span className="value">{isSystole ? 'Contracting' : 'Relaxing'}</span>
                    </div>
                    <div className="status-item">
                        <span className="label">AV Valves (Mitral/Tri):</span>
                        <span className="value highlight">{isSystole ? 'CLOSED (S1 Sound)' : 'OPEN'}</span>
                    </div>
                    <div className="status-item">
                        <span className="label">Semilunar Valves:</span>
                        <span className="value highlight">{isSystole ? 'OPEN' : 'CLOSED (S2 Sound)'}</span>
                    </div>
                </div>
            </div>

            <style>{`
                .heart-visualizer {
                    background: var(--color-surface);
                    border: 1px solid #e2e8f0;
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    box-shadow: var(--shadow-sm);
                }
                .visual-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 2rem;
                }
                .heart-svg {
                    width: 250px;
                    height: 250px;
                }
                .toggle-group {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    justify-content: center;
                }
                .toggle-btn {
                    padding: 0.75rem 1.5rem;
                    border-radius: 99px;
                    border: 2px solid #e2e8f0;
                    background: white;
                    color: var(--color-text-muted);
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .toggle-btn.active {
                    border-color: #e11d48;
                    background: color-mix(in srgb, var(--color-surface), #e11d48 10%);
                    color: #e11d48;
                }
                .status-panel {
                    background: color-mix(in srgb, var(--color-surface), var(--color-text) 5%);
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                }
                .status-item {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.75rem;
                    border-bottom: 1px solid #e2e8f0;
                    padding-bottom: 0.5rem;
                }
                .status-item:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                }
                .label {
                    color: var(--color-text-muted);
                }
                .value {
                    font-weight: 600;
                    color: var(--color-text);
                }
                .value.highlight {
                    color: #e11d48;
                }
            `}</style>
        </div>
    );
};

export default HeartValvesVisualizer;
