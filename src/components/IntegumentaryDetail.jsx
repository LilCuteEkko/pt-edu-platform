import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { integumentaryData } from '../data/integumentary';
import { Layers, AlertTriangle, Activity, Clipboard, BookOpen, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import skinAnatomyImg from '../assets/integumentary/skin-anatomy.png';
import pressureUlcerImg from '../assets/integumentary/pressure-ulcers.png';
import ruleOfNinesImg from '../assets/integumentary/rule-of-nines.png';

const IntegumentaryDetail = ({ topic }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [expandedCondition, setExpandedCondition] = useState(null);

    const tabs = [
        { id: 'overview', label: 'Overview & Anatomy', icon: Layers },
        { id: 'conditions', label: 'Conditions', icon: AlertTriangle },
        { id: 'woundCare', label: 'Wound Care', icon: Activity },
        { id: 'documentation', label: 'Documentation', icon: Clipboard }
    ];

    const toggleCondition = (id) => {
        setExpandedCondition(expandedCondition === id ? null : id);
    };

    return (
        <div className="integumentary-page container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <Link to="/physiology" className="back-link">
                <ArrowLeft size={20} /> Back to Systems
            </Link>

            <header className="detail-header" style={{ marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--color-primary)' }}>{integumentaryData.overview.title}</h1>
                <p className="lead">{integumentaryData.overview.description}</p>
            </header>

            {/* Navigation Tabs */}
            <div className="category-tabs">
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <Icon size={18} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="content-area" style={{ marginTop: '2rem' }}>
                <AnimatePresence mode='wait'>
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="content-card" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <img src={skinAnatomyImg} alt="Skin Anatomy Layers" style={{ maxWidth: '100%', borderRadius: '8px', maxHeight: '400px' }} />
                                <p className="caption" style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>Cross-section of Skin Layers</p>
                            </div>

                            <div className="cards-grid">
                                {integumentaryData.overview.layers.map(layer => (
                                    <div key={layer.name} className="content-card">
                                        <h3>{layer.name}</h3>
                                        <p>{layer.description}</p>
                                        <div className="clinical-box importance" style={{ marginTop: '1rem' }}>
                                            <strong>Relevance:</strong> {layer.relevance}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <h3 style={{ marginTop: '2rem' }}>Functions</h3>
                            <ul className="params-list">
                                {integumentaryData.overview.functions.map((func, idx) => (
                                    <li key={idx}><strong>{func.title}:</strong> {func.description}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {activeTab === 'conditions' && (
                        <motion.div
                            key="conditions"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="labs-grid"
                        >
                            {integumentaryData.conditions.map(cond => (
                                <div key={cond.id} className="lab-card expanded">
                                    <div className="lab-header" onClick={() => toggleCondition(cond.id)} style={{ cursor: 'pointer' }}>
                                        <h3>{cond.name}</h3>
                                        {expandedCondition === cond.id ? <ChevronUp /> : <ChevronDown />}
                                    </div>
                                    <AnimatePresence>
                                        {expandedCondition === cond.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="lab-details"
                                            >
                                                {/* Only show pressure ulcer image for that specific condition */}
                                                {cond.id === 'pressure-injury' && (
                                                    <div className="image-container" style={{ margin: '1rem 0' }}>
                                                        <img src={pressureUlcerImg} alt="Pressure Ulcer Stages" style={{ width: '100%', borderRadius: '6px' }} />
                                                    </div>
                                                )}

                                                {cond.causes && <p><strong>Causes:</strong> {cond.causes}</p>}

                                                {cond.staging && (
                                                    <div className="table-responsive">
                                                        <table className="data-table">
                                                            <thead><tr><th>Stage</th><th>Features</th><th>PT Role</th></tr></thead>
                                                            <tbody>
                                                                {cond.staging.map((s, i) => (
                                                                    <tr key={i}><td>{s.stage}</td><td>{s.features}</td><td>{s.ptRole}</td></tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                                {cond.wagnerGrade && (
                                                    <ul className="key-points">
                                                        {cond.wagnerGrade.map((g, i) => <li key={i}><strong>Grade {g.grade}:</strong> {g.desc}</li>)}
                                                    </ul>
                                                )}
                                                {cond.comparison && (
                                                    <div className="table-responsive">
                                                        <table className="data-table">
                                                            <thead><tr><th>Feature</th><th>Venous</th><th>Arterial</th></tr></thead>
                                                            <tbody>
                                                                {cond.comparison.map((c, i) => (
                                                                    <tr key={i}><td><strong>{c.feature}</strong></td><td>{c.venous}</td><td>{c.arterial}</td></tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                                {cond.classification && (
                                                    <div className="table-responsive">
                                                        <table className="data-table">
                                                            <thead><tr><th>Degree</th><th>Layer</th><th>Features</th></tr></thead>
                                                            <tbody>
                                                                {cond.classification.map((c, i) => (
                                                                    <tr key={i}>
                                                                        <td><strong>{c.degree}</strong></td>
                                                                        <td>{c.layer}</td>
                                                                        <td>{c.features}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}

                                                {cond.ruleOfNines && (
                                                    <div className="content-card" style={{ marginTop: '1rem', background: 'var(--color-surface-hover)' }}>
                                                        <h4>Rule of Nines (Adult)</h4>
                                                        <div className="grid-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'center' }}>
                                                            <img src={ruleOfNinesImg} alt="Rule of Nines Chart" style={{ width: '100%', borderRadius: '6px' }} />
                                                            <ul className="params-list grid-list">
                                                                {cond.ruleOfNines.map((r, i) => (
                                                                    <li key={i}><strong>{r.region}:</strong> {r.adult}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}

                                                {cond.ptRole && <p className="clinical-relevance"><strong>PT Intervention:</strong> {cond.ptRole}</p>}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'woundCare' && (
                        <motion.div
                            key="woundCare"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <h2>Dressing Selection Guide</h2>
                            <div className="table-responsive">
                                <table className="data-table">
                                    <thead><tr><th>Type</th><th>Indications</th><th>Notes</th></tr></thead>
                                    <tbody>
                                        {integumentaryData.woundCare.dressings.map((d, i) => (
                                            <tr key={i}>
                                                <td><strong>{d.type}</strong></td>
                                                <td>{d.use}</td>
                                                <td>{d.note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2 style={{ marginTop: '2rem' }}>Debridement Methods</h2>
                            <div className="cards-grid">
                                {integumentaryData.woundCare.debridement.map(method => (
                                    <div key={method.method} className="content-card">
                                        <h4>{method.method}</h4>
                                        <p>{method.desc}</p>
                                        <small style={{ color: 'var(--color-primary)' }}>{method.correct}</small>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'documentation' && (
                        <motion.div key="doc" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <div className="content-card">
                                <h3>SOAP Note Template</h3>
                                <div className="code-block" style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', color: '#e2e8f0', fontFamily: 'monospace' }}>
                                    <p><strong style={{ color: '#60a5fa' }}>S:</strong> {integumentaryData.documentation.soapTemplate.s}</p>
                                    <p><strong style={{ color: '#60a5fa' }}>O:</strong> {integumentaryData.documentation.soapTemplate.o}</p>
                                    <p><strong style={{ color: '#60a5fa' }}>A:</strong> {integumentaryData.documentation.soapTemplate.a}</p>
                                    <p><strong style={{ color: '#60a5fa' }}>P:</strong> {integumentaryData.documentation.soapTemplate.p}</p>
                                </div>
                            </div>
                            <div className="clinical-box pathology" style={{ marginTop: '2rem' }}>
                                <h3>🚩 Signs of Infection</h3>
                                <ul>
                                    {integumentaryData.documentation.infectionSigns.map(sign => (
                                        <li key={sign}>{sign}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .data-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: var(--color-surface);
                    border-radius: 8px;
                    overflow: hidden;
                }
                .data-table th, .data-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid var(--color-border);
                }
                .data-table th {
                    background: var(--color-primary-light);
                    color: var(--color-primary);
                }
                .tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    border: none;
                    background: transparent;
                    color: var(--color-text-muted);
                    font-weight: 600;
                    cursor: pointer;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s;
                }
                .tab-btn.active {
                    color: var(--color-primary);
                    border-bottom-color: var(--color-primary);
                }
                .category-tabs {
                    display: flex;
                    overflow-x: auto;
                    border-bottom: 1px solid var(--color-border);
                    margin-bottom: 1rem;
                }
            `}</style>
        </div>
    );
};

export default IntegumentaryDetail;
