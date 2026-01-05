import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity, Brain, User, AlertTriangle, AlignJustify, Zap, Info, Stethoscope, Pill, BarChart, BookOpen } from 'lucide-react';

const PathologyDeepDive = ({ pathology, onClose }) => {
    const [activeTab, setActiveTab] = useState('overview');

    if (!pathology || !pathology.details) return null;

    const { details } = pathology;

    const tabs = [
        { id: 'overview', label: 'Overview', icon: BookOpen },
        { id: 'anatomy', label: 'Anatomy & Phys', icon: Brain },
        { id: 'stats', label: 'Statistics', icon: BarChart },
        { id: 'medical', label: 'Medical', icon: Pill },
        { id: 'pt', label: 'PT Management', icon: Activity },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="tab-content overview">
                        <h3>What is {pathology.acronym}?</h3>
                        <p>{details.overview}</p>
                        <div className="key-features-list">
                            <h4>Key Clinical Features</h4>
                            <ul>
                                {pathology.keyFeatures.map((kf, i) => (
                                    <li key={i}>{kf}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            case 'anatomy':
                return (
                    <div className="tab-content">
                        <div className="split-view">
                            <div className="column">
                                <h3><Brain size={18} /> Anatomy</h3>
                                <ul>{details.anatomy.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>
                            <div className="column">
                                <h3><Activity size={18} /> Physiology</h3>
                                <ul>{details.physiology.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>
                        </div>
                    </div>
                );
            case 'stats':
                return (
                    <div className="tab-content stats-grid">
                        {details.stats.map((stat, i) => (
                            <div key={i} className="stat-card">
                                <span className="stat-label">{stat.label}</span>
                                <span className="stat-value">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'medical':
                return (
                    <div className="tab-content">
                        <div className="section">
                            <h3>Pharmacology</h3>
                            <div className="med-grid">
                                {details.medications.map((med, i) => (
                                    <div key={i} className="med-card">
                                        <div className="med-name">{med.name}</div>
                                        <div className="med-detail"><strong>Mech:</strong> {med.mechanism}</div>
                                        <div className="med-detail"><strong>Effect:</strong> {med.effect}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="section">
                            <h3>Interventions</h3>
                            <ul>{details.medicalInterventions.map((int, i) => <li key={i}>{int}</li>)}</ul>
                        </div>
                    </div>
                );
            case 'pt':
                return (
                    <div className="tab-content">
                        <h3>Physical Therapy Management</h3>
                        <div className="timeline-stages">
                            {details.ptManagement.map((stage, i) => (
                                <div key={i} className="stage-item">
                                    <div className="stage-header">
                                        <span className="stage-name">{stage.stage}</span>
                                    </div>
                                    <div className="stage-focus">
                                        {stage.focus}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            className="deep-dive-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="deep-dive-modal"
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.95 }}
            >
                <div className="modal-header">
                    <div className="title-group">
                        <h2>{pathology.name}</h2>
                        <span className="badge">{pathology.acronym}</span>
                    </div>
                    <button className="close-btn" onClick={onClose}><X size={24} /></button>
                </div>

                <div className="modal-body">
                    <div className="sidebar">
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <Icon size={18} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                    <div className="content-area">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="tab-pane"
                            >
                                {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            <style>{`
                .deep-dive-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(4px);
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }
                .deep-dive-modal {
                    background: var(--color-surface);
                    width: 100%;
                    max-width: 900px;
                    height: 80vh;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-xl);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                }
                .modal-header {
                    padding: 1.5rem 2rem;
                    border-bottom: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: var(--color-surface);
                }
                .title-group {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .title-group h2 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: var(--color-primary);
                }
                .badge {
                    background: var(--color-secondary);
                    color: white;
                    padding: 0.2rem 0.6rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 700;
                }
                .close-btn {
                    background: transparent;
                    border: none;
                    color: var(--color-text-muted);
                    cursor: pointer;
                    padding: 0.25rem;
                    border-radius: 50%;
                    transition: all 0.2s;
                }
                .close-btn:hover {
                    background: color-mix(in srgb, var(--color-text), transparent 90%);
                    color: var(--color-text);
                }

                .modal-body {
                    display: flex;
                    flex: 1;
                    overflow: hidden;
                }
                .sidebar {
                    width: 200px;
                    background: color-mix(in srgb, var(--color-surface), var(--color-text) 3%);
                    border-right: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                    padding: 1rem 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }
                .tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1.5rem;
                    width: 100%;
                    border: none;
                    background: transparent;
                    color: var(--color-text-muted);
                    cursor: pointer;
                    transition: all 0.2s;
                    text-align: left;
                    font-size: 0.9rem;
                    font-weight: 500;
                }
                .tab-btn:hover {
                    color: var(--color-primary);
                    background: color-mix(in srgb, var(--color-primary), transparent 95%);
                }
                .tab-btn.active {
                    color: var(--color-primary);
                    background: color-mix(in srgb, var(--color-primary), transparent 90%);
                    border-right: 3px solid var(--color-primary);
                }
                
                .content-area {
                    flex: 1;
                    padding: 2rem;
                    overflow-y: auto;
                    background: var(--color-surface);
                }
                
                .tab-content h3 {
                    color: var(--color-text);
                    margin-bottom: 1.5rem;
                    font-size: 1.2rem;
                    border-bottom: 2px solid var(--color-accent);
                    padding-bottom: 0.5rem;
                    display: inline-block;
                }
                .tab-content p {
                    color: var(--color-text);
                    line-height: 1.6;
                }

                /* Overview */
                .key-features-list {
                    margin-top: 2rem;
                    background: var(--color-primary-light);
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                }
                .key-features-list ul {
                    margin: 0;
                    padding-left: 1.25rem;
                }
                .key-features-list li {
                    margin-bottom: 0.5rem;
                    color: var(--color-text);
                }

                /* Split View (Anatomy) */
                .split-view {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }
                .column ul {
                    padding-left: 1.25rem;
                    color: var(--color-text);
                }
                .column li {
                    margin-bottom: 0.75rem;
                }

                /* Stats Grid */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 1.5rem;
                }
                .stat-card {
                    background: color-mix(in srgb, var(--color-surface), var(--color-text) 3%);
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                    text-align: center;
                    border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                }
                .stat-label {
                    display: block;
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    letter-spacing: 0.05em;
                }
                .stat-value {
                    display: block;
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--color-primary);
                }

                /* Meds */
                .med-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 1rem;
                    margin-bottom: 2rem;
                }
                .med-card {
                    background: var(--color-surface);
                    border: 1px solid color-mix(in srgb, var(--color-text), transparent 85%);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border-left: 4px solid var(--color-secondary);
                }
                .med-name {
                    font-weight: 700;
                    color: var(--color-text);
                    margin-bottom: 0.5rem;
                }
                .med-detail {
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                }

                /* PT Stages */
                .timeline-stages {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .stage-item {
                    display: flex;
                    gap: 1.5rem;
                    align-items: flex-start;
                }
                .stage-header {
                    min-width: 120px;
                    background: var(--color-primary);
                    color: white;
                    padding: 0.5rem;
                    border-radius: 4px;
                    text-align: center;
                    font-weight: 600;
                    font-size: 0.9rem;
                }
                .stage-focus {
                    flex: 1;
                    background: color-mix(in srgb, var(--color-surface), var(--color-text) 3%);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                    color: var(--color-text);
                }
            `}</style>
        </motion.div>
    );
};

export default PathologyDeepDive;
