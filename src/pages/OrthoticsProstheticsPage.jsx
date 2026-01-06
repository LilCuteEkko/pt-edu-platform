import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Activity, ChevronRight, AlertTriangle } from 'lucide-react';
import { orthoticsProstheticsData } from '../data/orthoticsProsthetics';
import PathologyGrid from '../components/PathologyGrid';

const OrthoticsProstheticsPage = () => {
    const [activeTab, setActiveTab] = useState('prosthetics');
    const [subTab, setSubTab] = useState(0);

    // Reset sub-tab when main tab changes
    React.useEffect(() => {
        setSubTab(0);
    }, [activeTab]);

    const activeData = orthoticsProstheticsData[activeTab];

    return (
        <div className="op-page">
            <header className="op-header">
                <h1>Orthotics & Prosthetics</h1>
                <p>Comprehensive guide to device management, biomechanics, and rehabilitation.</p>
            </header>

            <div className="op-tabs">
                <button
                    className={`op-tab-btn ${activeTab === 'prosthetics' ? 'active' : ''}`}
                    onClick={() => setActiveTab('prosthetics')}
                >
                    <Activity size={20} /> Prosthetics
                </button>
                <button
                    className={`op-tab-btn ${activeTab === 'orthotics' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orthotics')}
                >
                    <Layers size={20} /> Orthotics
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="op-content"
                >
                    <div className="section-intro">
                        <h2>{activeData.title}</h2>
                        <p>{activeData.introduction}</p>
                    </div>

                    {activeData.subtopics.length > 1 && (
                        <div className="sub-tabs-cont">
                            {activeData.subtopics.map((topic, index) => (
                                <button
                                    key={topic.id}
                                    className={`sub-tab-pill ${subTab === index ? 'active' : ''}`}
                                    onClick={() => setSubTab(index)}
                                >
                                    {topic.title}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="subtopics-grid">
                        {/* Only render the ACTIVE subtopic */}
                        {(() => {
                            const topic = activeData.subtopics[subTab];
                            if (!topic) return null;

                            return (
                                <motion.div
                                    key={topic.id}
                                    className="subtopic-card"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3>{topic.title}</h3>

                                    {topic.image && (
                                        <div className="topic-image-container">
                                            <img src={topic.image} alt={topic.title} className="topic-image" loading="lazy" />
                                        </div>
                                    )}

                                    {topic.content && topic.content.length > 0 && (
                                        <ul className="content-list">
                                            {topic.content.map((item, i) => (
                                                <li key={i}><ChevronRight size={16} className="bullet-icon" /> {item}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {topic.clinicalRelevance && (
                                        <div className="clinical-alert">
                                            <AlertTriangle size={18} />
                                            <p><strong>Clinical Relevance:</strong> {topic.clinicalRelevance}</p>
                                        </div>
                                    )}

                                    {topic.tables && topic.tables.map((table, tIdx) => (
                                        <div key={tIdx} className="op-table-wrapper">
                                            <h4>{table.title}</h4>
                                            <table className="op-table">
                                                <thead>
                                                    <tr>
                                                        {table.headers.map(h => <th key={h}>{h}</th>)}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {table.rows.map((row, rIdx) => (
                                                        <tr key={rIdx}>
                                                            {row.map((cell, cIdx) => <td key={cIdx}>{cell}</td>)}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}

                                    {topic.pathologies && (
                                        <div className="embedded-grid">
                                            <PathologyGrid pathologies={topic.pathologies} />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })()}
                    </div>
                </motion.div>
            </AnimatePresence>

            <style>{`
                .op-page {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                }
                .op-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }
                .op-header h1 {
                    font-size: 2.5rem;
                    color: var(--color-primary);
                    margin-bottom: 0.5rem;
                }
                .op-header p {
                    color: var(--color-text-muted);
                    font-size: 1.1rem;
                }
                
                .op-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }
                .op-tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 2rem;
                    border-radius: 999px;
                    border: none;
                    background: var(--color-surface);
                    color: var(--color-text-muted);
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: var(--shadow-sm);
                }
                .op-tab-btn.active {
                    background: var(--color-primary);
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md);
                }

                .sub-tabs-cont {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                }
                .sub-tab-pill {
                    padding: 0.5rem 1.25rem;
                    border-radius: 99px;
                    border: 1px solid var(--color-border);
                    background: var(--color-surface);
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .sub-tab-pill:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                .sub-tab-pill.active {
                    background: var(--color-primary-light);
                    color: var(--color-primary);
                    border-color: var(--color-primary);
                    font-weight: 600;
                }

                .section-intro {
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--color-border);
                }
                .section-intro h2 {
                    color: var(--color-secondary);
                    margin-bottom: 0.5rem;
                }

                .subtopics-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }
                .subtopic-card {
                    background: var(--color-surface);
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--color-border);
                    box-shadow: var(--shadow-sm);
                }
                .subtopic-card h3 {
                    color: var(--color-text);
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                    border-left: 4px solid var(--color-secondary);
                    padding-left: 1rem;
                }

                .topic-image-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 2rem;
                    background: white;
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border: 1px solid var(--color-border);
                }
                .topic-image {
                    max-width: 100%;
                    height: auto;
                    max-height: 400px;
                    object-fit: contain;
                }

                .content-list {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 1.5rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1rem;
                }
                .content-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    line-height: 1.5;
                    color: var(--color-text);
                }
                .bullet-icon {
                    color: var(--color-primary);
                    flex-shrink: 0;
                    margin-top: 0.2rem;
                }

                .clinical-alert {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    background: color-mix(in srgb, var(--color-secondary), transparent 90%);
                    border: 1px solid color-mix(in srgb, var(--color-secondary), transparent 70%);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    color: var(--color-text);
                    margin-bottom: 1.5rem;
                }
                .clinical-alert svg {
                    color: var(--color-secondary);
                    flex-shrink: 0;
                    margin-top: 0.2rem;
                }

                .op-table-wrapper {
                    margin-top: 1.5rem;
                    overflow-x: auto;
                }
                .op-table-wrapper h4 {
                    margin-bottom: 0.5rem;
                    color: var(--color-text-muted);
                }
                .op-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.9rem;
                }
                .op-table th, .op-table td {
                    padding: 0.75rem;
                    border: 1px solid var(--color-border);
                    text-align: left;
                }
                .op-table th {
                    background: var(--color-background);
                    font-weight: 600;
                    color: var(--color-text);
                }
                .op-table tr:nth-child(even) {
                    background: color-mix(in srgb, var(--color-surface), var(--color-background) 50%);
                }

                .embedded-grid {
                    margin-top: 1rem;
                }
            `}</style>
        </div>
    );
};

export default OrthoticsProstheticsPage;
