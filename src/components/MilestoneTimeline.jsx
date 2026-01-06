import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import MilestoneAnimator from './MilestoneAnimator';

const MilestoneTimeline = ({ milestones }) => {
    const [selectedMilestone, setSelectedMilestone] = useState(milestones[0]);

    return (
        <div className="milestone-container">
            {/* Horizontal Timeline Navigation */}
            <div className="timeline-nav-scroll">
                <div className="timeline-nav">
                    {milestones.map((milestone, index) => {
                        const isSelected = selectedMilestone.id === milestone.id || selectedMilestone.title === milestone.title;
                        return (
                            <button
                                key={index}
                                onClick={() => setSelectedMilestone(milestone)}
                                className={`timeline-node ${isSelected ? 'active' : ''}`}
                            >
                                <div className="node-circle">
                                    {isSelected && <motion.div layoutId="activeCircle" className="active-fill" />}
                                    <span className="node-number">{index + 1}</span>
                                </div>
                                <span className="node-age">{milestone.age}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedMilestone.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="milestone-content"
                >
                    <div className="milestone-visual">
                        {selectedMilestone.animationId ? (
                            <MilestoneAnimator milestoneId={selectedMilestone.animationId} />
                        ) : (
                            <motion.img
                                src={selectedMilestone.img}
                                alt={selectedMilestone.title}
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                onError={(e) => {
                                    console.error("Image failed to load:", selectedMilestone.img);
                                    e.target.style.display = 'none';
                                    e.target.parentElement.style.display = 'none'; // Hide container if image fails
                                }}
                            />
                        )}
                    </div>

                    <div className="milestone-text">
                        <div className="header">
                            <span className="age-tag">{selectedMilestone.age}</span>
                            <h2>{selectedMilestone.title}</h2>
                        </div>

                        <p className="description">{selectedMilestone.desc}</p>

                        <div className="key-points">
                            <h3>Key Motor Features</h3>
                            <ul>
                                {selectedMilestone.keyPoints.map((point, i) => (
                                    <li key={i}>
                                        <CheckCircle2 size={18} className="icon" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <style>{`
        .milestone-container {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 2rem;
        }

        .timeline-nav-scroll {
            overflow-x: auto;
            padding-bottom: 1rem;
            margin: 0 -1rem;
            padding: 0 1rem 1rem 1rem;
        }

        .timeline-nav {
            display: flex;
            gap: 2rem;
            min-width: max-content;
            padding: 0 1rem;
            position: relative;
        }
        
        /* Connecting line attempt - hard with flex gap */
        .timeline-nav::before {
            content: '';
            position: absolute;
            top: 24px;
            left: 2rem;
            right: 2rem;
            height: 2px;
            background: var(--color-border);
            z-index: 0;
        }

        .timeline-node {
            background: none;
            border: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            position: relative;
            z-index: 1;
            opacity: 0.7;
            transition: opacity 0.2s;
        }
        
        .timeline-node:hover, .timeline-node.active {
            opacity: 1;
        }

        .node-circle {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--color-surface);
            border: 2px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: var(--color-text-muted);
            position: relative;
            transition: all 0.3s;
        }
        
        .timeline-node.active .node-circle {
            border-color: var(--color-primary);
            color: white;
            transform: scale(1.1);
        }
        
        .active-fill {
            position: absolute;
            inset: 0;
            background: var(--color-primary);
            border-radius: 50%;
            z-index: -1;
        }

        .node-age {
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--color-text);
        }

        .milestone-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            background: var(--color-surface);
            padding: 2.5rem;
            border-radius: var(--radius-lg);
            border: 1px solid var(--color-border);
            box-shadow: var(--shadow-sm);
        }
        
        @media (max-width: 768px) {
            .milestone-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
        }

        .milestone-visual {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff; /* Ensure white background for transparent pngs if needed */
            border-radius: var(--radius-lg);
            padding: 2rem;
            border: 1px solid var(--color-border);
            height: 400px; /* Explicit height for SVG scaling */
            width: 100%;
            overflow: hidden;
        }
        
        .milestone-visual img {
            max-width: 100%;
            height: auto;
            max-height: 100%;
            object-fit: contain;
        }

        .milestone-text {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
        }
        
        .header h2 {
            font-size: 2rem;
            color: var(--color-text);
            margin: 0.5rem 0 0 0;
        }
        
        .age-tag {
            background: var(--color-accent);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 99px;
            font-size: 0.9rem;
            font-weight: 600;
        }
        
        .description {
            font-size: 1.125rem;
            color: var(--color-secondary);
            line-height: 1.6;
        }
        
        .key-points h3 {
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--color-text-muted);
            margin-bottom: 1rem;
        }
        
        .key-points ul {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .key-points li {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1rem;
            color: var(--color-text);
        }
        
        .key-points .icon {
            color: var(--color-primary);
        }
      `}</style>
        </div>
    );
};

export default MilestoneTimeline;
