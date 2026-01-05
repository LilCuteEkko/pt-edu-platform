import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Activity,
    Brain,
    AlertTriangle,
    User,
    AlignJustify,
    Zap,
    Info,
    Bone,
    Circle,
    RotateCw,
    Footprints,
    Eye,
    ShieldAlert,
    Heart
} from 'lucide-react';
import PathologyDeepDive from './PathologyDeepDive';

const iconMap = {
    'Brain': Brain,
    'Activity': Activity,
    'AlertTriangle': AlertTriangle,
    'User': User,
    'AlignJustify': AlignJustify, // Resembles spine/levels
    'Zap': Zap,             // Impact/trauma
    'Info': Info,
    'Bone': Bone,
    'Circle': Circle,
    'RotateCw': RotateCw,
    'Footprints': Footprints,
    'Eye': Eye,
    'ShieldAlert': ShieldAlert,
    'Heart': Heart
};

const PathologyGrid = ({ pathologies }) => {
    const [selectedPathology, setSelectedPathology] = useState(null);

    return (
        <>
            <div className="pathology-grid">
                {pathologies.map((pathology, index) => {
                    const Icon = iconMap[pathology.icon] || Info;
                    const hasDetails = !!pathology.details;

                    return (
                        <motion.div
                            key={pathology.id}
                            className={`pathology-card ${hasDetails ? 'clickable' : ''}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            onClick={() => hasDetails && setSelectedPathology(pathology)}
                        >
                            <div className="card-header">
                                <div className="icon-wrapper">
                                    <Icon size={24} />
                                </div>
                                <div className="header-text">
                                    <h3>{pathology.name}</h3>
                                    {pathology.acronym && <span className="acronym">{pathology.acronym}</span>}
                                </div>
                            </div>

                            <p className="description">{pathology.description}</p>

                            <div className="key-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {pathology.keyFeatures.slice(0, 3).map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                    {pathology.keyFeatures.length > 3 &&
                                        <li className="more-indicator">+{pathology.keyFeatures.length - 3} more...</li>
                                    }
                                </ul>
                            </div>

                            <div className="pt-intervention">
                                <h4>PT Intervention:</h4>
                                <p>{pathology.ptIntervention}</p>
                            </div>

                            {hasDetails && (
                                <div className="click-hint">Click for Deep Dive</div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedPathology && (
                    <PathologyDeepDive
                        pathology={selectedPathology}
                        onClose={() => setSelectedPathology(null)}
                    />
                )}
            </AnimatePresence>

            <style>{`
                .pathology-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .pathology-card {
                    background: var(--color-surface);
                    border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                    box-shadow: var(--shadow-sm);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    transition: box-shadow 0.2s;
                    position: relative;
                }
                .pathology-card.clickable {
                    cursor: pointer;
                    border-color: var(--color-secondary);
                }
                .pathology-card.clickable:hover {
                    box-shadow: var(--shadow-md);
                    border-color: var(--color-primary);
                }
                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 0.5rem;
                }
                .icon-wrapper {
                    background: var(--color-primary-light);
                    color: var(--color-primary);
                    padding: 0.75rem;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .header-text h3 {
                    margin: 0;
                    font-size: 1.1rem;
                    line-height: 1.2;
                    color: var(--color-text);
                }
                .acronym {
                    font-size: 0.8rem;
                    color: var(--color-text-muted);
                    font-weight: 600;
                    background: color-mix(in srgb, var(--color-text), transparent 95%);
                    padding: 0.1rem 0.4rem;
                    border-radius: 4px;
                    margin-top: 0.25rem;
                    display: inline-block;
                }
                .description {
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                    line-height: 1.5;
                    margin: 0;
                }
                .key-features {
                    background: color-mix(in srgb, var(--color-surface), var(--color-text) 3%);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                }
                .key-features h4 {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    color: var(--color-text-muted);
                    margin: 0 0 0.5rem 0;
                    letter-spacing: 0.05em;
                }
                .key-features ul {
                    margin: 0;
                    padding-left: 1.2rem;
                    font-size: 0.9rem;
                    color: var(--color-text);
                }
                .key-features li {
                    margin-bottom: 0.25rem;
                }
                .more-indicator {
                    list-style: none;
                    color: var(--color-text-muted);
                    font-style: italic;
                    font-size: 0.8rem;
                    margin-left: -1rem;
                    margin-top: 0.5rem;
                }
                .pt-intervention {
                    margin-top: auto;
                    padding-top: 1rem;
                    border-top: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                }
                .pt-intervention h4 {
                    font-size: 0.85rem;
                    color: var(--color-secondary);
                    margin: 0 0 0.25rem 0;
                }
                .pt-intervention p {
                    margin: 0;
                    font-size: 0.9rem;
                    color: var(--color-text);
                    font-weight: 500;
                }
            `}</style>
        </>
    );
};

export default PathologyGrid;
