import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { labValues, labCategories } from '../data/labValues';
import { AlertTriangle, Info, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

const LabValuesPage = () => {
    const [activeCategory, setActiveCategory] = useState(labCategories[0]);
    const [expandedId, setExpandedId] = useState(null);

    const filteredLabs = labValues.filter(lab => lab.category === activeCategory);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="lab-values-page container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="header-section"
            >
                <h1>Clinical Lab Values</h1>
                <p className="subtitle">Quick reference guide for PT contraindications and precautions.</p>
            </motion.div>

            {/* Category Tabs */}
            <div className="category-tabs">
                {labCategories.map(cat => (
                    <button
                        key={cat}
                        className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => {
                            setActiveCategory(cat);
                            setExpandedId(null);
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Lab Cards Accordion */}
            <motion.div
                layout
                className="labs-grid"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredLabs.map(lab => (
                        <motion.div
                            layout
                            key={lab.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className={`lab-card ${expandedId === lab.id ? 'expanded' : ''}`}
                            onClick={() => toggleExpand(lab.id)}
                        >
                            <div className="lab-header">
                                <div className="lab-title-group">
                                    <h3>{lab.name}</h3>
                                    <span className="normal-range">Normal: {lab.normalRange}</span>
                                </div>
                                <div className="lab-icon">
                                    {expandedId === lab.id ? <ChevronUp /> : <ChevronDown />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedId === lab.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="lab-details"
                                    >
                                        <div className="detail-row critical-alert">
                                            <AlertTriangle size={18} className="icon" />
                                            <div>
                                                <strong>Critical Values:</strong>
                                                <p>{lab.criticalValues}</p>
                                            </div>
                                        </div>

                                        <div className="detail-row">
                                            <Info size={18} className="icon" />
                                            <div>
                                                <strong>Significance:</strong>
                                                <p>{lab.significance}</p>
                                            </div>
                                        </div>

                                        <div className="implications-section">
                                            <h4>PT Implications & Precautions</h4>
                                            <ul>
                                                {lab.implications.map((imp, idx) => (
                                                    <li key={idx} className={imp.label.includes('Contraindication') ? 'contraindicated' : 'precaution'}>
                                                        <strong>{imp.label}:</strong> {imp.value}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {lab.symptoms && (
                                            <div className="detail-row symptom-row">
                                                <AlertCircle size={18} className="icon" />
                                                <div>
                                                    <strong>Symptoms to Watch:</strong>
                                                    <p>{lab.symptoms}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <style>{`
                .header-section {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                .subtitle {
                    color: var(--color-text-muted);
                    font-size: 1.1rem;
                }
                .category-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                }
                .tab-btn {
                    padding: 0.75rem 1.5rem;
                    border: none;
                    background: var(--color-surface);
                    border-radius: 2rem;
                    font-weight: 500;
                    color: var(--color-text-muted);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: var(--shadow-sm);
                }
                .tab-btn.active {
                    background: var(--color-primary);
                    color: white;
                    box-shadow: var(--shadow-md);
                }
                .labs-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .lab-card {
                    background: var(--color-surface);
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                    box-shadow: var(--shadow-sm);
                    cursor: pointer;
                    border: 1px solid transparent;
                    transition: border-color 0.2s;
                    overflow: hidden;
                }
                .lab-card:hover {
                    border-color: var(--color-primary-light);
                }
                .lab-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .lab-title-group h3 {
                    margin: 0;
                    font-size: 1.2rem;
                    color: var(--color-primary);
                }
                .normal-range {
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                    font-family: monospace;
                    background: var(--color-surface-hover);
                    padding: 0.2rem 0.6rem;
                    border-radius: 4px;
                    display: inline-block;
                    margin-top: 0.4rem;
                }
                .lab-details {
                    margin-top: 1.5rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid var(--color-border);
                }
                .detail-row {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    align-items: flex-start;
                }
                .detail-row .icon {
                    margin-top: 0.2rem;
                    flex-shrink: 0;
                }
                .critical-alert {
                    background: color-mix(in srgb, var(--color-danger), transparent 90%);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border-left: 4px solid var(--color-danger);
                    color: var(--color-danger);
                }
                .critical-alert .icon {
                    color: var(--color-danger);
                }
                .symptom-row {
                    color: var(--color-secondary);
                }
                .implications-section {
                    margin-top: 1.5rem;
                }
                .implications-section h4 {
                    margin-bottom: 0.8rem;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-text-muted);
                }
                .implications-section ul {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                }
                .implications-section li {
                    padding: 0.8rem;
                    border-radius: var(--radius-md);
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
                .contraindicated {
                    background: #fef2f2;
                    border: 1px solid #fee2e2;
                    color: #991b1b;
                }
                .precaution {
                    background: #fffbeb;
                    border: 1px solid #fef3c7;
                    color: #92400e;
                }
                /* Dark mode overrides for alerts */
                @media (prefers-color-scheme: dark) {
                    .contraindicated {
                        background: rgba(153, 27, 27, 0.2);
                        border-color: rgba(153, 27, 27, 0.4);
                        color: #fca5a5;
                    }
                    .precaution {
                        background: rgba(146, 64, 14, 0.2);
                        border-color: rgba(146, 64, 14, 0.4);
                        color: #fcd34d;
                    }
                }
            `}</style>
        </div>
    );
};

export default LabValuesPage;
