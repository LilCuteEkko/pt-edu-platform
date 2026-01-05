import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Footprints, ArrowRight, Eye, Grip } from 'lucide-react';

const MilestoneTracker = ({ milestones, reflexes }) => {
    return (
        <div className="milestone-container">
            <div className="section-block">
                <h3><Baby className="icon-main" /> Gross Motor Milestones</h3>
                <div className="timeline">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="time-badge">{item.age}</div>
                            <div className="content">
                                <h4>{item.skill}</h4>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="section-block">
                <h3><Grip className="icon-main" /> Primitive Reflexes</h3>
                <div className="reflex-grid">
                    {reflexes.map((reflex, index) => (
                        <motion.div
                            key={index}
                            className="reflex-card"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="reflex-header">
                                <h4>{reflex.name}</h4>
                                <span className="age-pill">{reflex.age}</span>
                            </div>
                            <div className="reflex-body">
                                <div className="detail">
                                    <strong>Stimulus:</strong> {reflex.stimulus}
                                </div>
                                <div className="detail">
                                    <strong>Response:</strong> {reflex.response}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .milestone-container {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                    margin-top: 1.5rem;
                }
                .section-block h3 {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: var(--color-primary);
                    margin-bottom: 1.5rem;
                    font-size: 1.25rem;
                    border-bottom: 2px solid color-mix(in srgb, var(--color-primary), transparent 80%);
                    padding-bottom: 0.5rem;
                }
                .icon-main {
                    color: var(--color-secondary);
                }
                
                /* Timeline Styles */
                .timeline {
                    position: relative;
                    padding-left: 2rem;
                    border-left: 3px solid color-mix(in srgb, var(--color-primary), transparent 90%);
                }
                .timeline-item {
                    position: relative;
                    margin-bottom: 2rem;
                }
                .timeline-item:last-child {
                    margin-bottom: 0;
                }
                .timeline-item::before {
                    content: '';
                    position: absolute;
                    left: -2.6rem;
                    top: 0.5rem;
                    width: 1rem;
                    height: 1rem;
                    background: var(--color-surface);
                    border: 3px solid var(--color-secondary);
                    border-radius: 50%;
                    z-index: 2;
                }
                .time-badge {
                    display: inline-block;
                    background: var(--color-secondary);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 999px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
                .content h4 {
                    margin: 0 0 0.25rem 0;
                    color: var(--color-text);
                    font-size: 1.1rem;
                }
                .content p {
                    margin: 0;
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                }

                /* Reflex Grid */
                .reflex-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }
                .reflex-card {
                    background: var(--color-surface);
                    border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                    border-radius: var(--radius-md);
                    padding: 1.25rem;
                    box-shadow: var(--shadow-sm);
                }
                .reflex-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid color-mix(in srgb, var(--color-text), transparent 95%);
                }
                .reflex-header h4 {
                    margin: 0;
                    color: var(--color-text);
                }
                .age-pill {
                    font-size: 0.75rem;
                    background: color-mix(in srgb, var(--color-text), transparent 95%);
                    padding: 0.2rem 0.5rem;
                    border-radius: 4px;
                    color: var(--color-text-muted);
                    font-weight: 500;
                }
                .reflex-body {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .detail {
                    font-size: 0.9rem;
                    line-height: 1.4;
                    color: var(--color-text); /* Ensure visibility in dark mode */
                }
                .detail strong {
                    color: var(--color-secondary);
                    margin-right: 0.5rem;
                }
            `}</style>
        </div>
    );
};

export default MilestoneTracker;
