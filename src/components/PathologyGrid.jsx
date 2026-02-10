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
    Heart,
    Pill
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
    'Heart': Heart,
    'Pill': Pill
};

const PathologyCard = React.memo(({ pathology, index, onClick }) => {
    const Icon = iconMap[pathology.icon] || Info;
    const hasDetails = !!pathology.details;

    return (
        <motion.div
            layout
            className={`pathology-card ${hasDetails ? 'clickable' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            onClick={() => hasDetails && onClick(pathology)}
        >
            <div className="card-header">
                <div className="header-left">
                    <div className="icon-wrapper">
                        <Icon size={24} />
                    </div>
                    <div className="header-text">
                        {pathology.category && (
                            <span className="category-kicker">{pathology.category}</span>
                        )}
                        <h3>{pathology.name}</h3>
                        {pathology.acronym && <span className="acronym">{pathology.acronym}</span>}
                    </div>
                </div>
            </div>

            <div className="card-image-container">
                {pathology.image ? (
                    <img src={pathology.image} alt={pathology.name} className="card-image" loading="lazy" />
                ) : (
                    <div className="placeholder-image">
                        <Icon size={48} strokeWidth={1.5} />
                    </div>
                )}
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
});

const PathologyGrid = ({ pathologies, categoryContent }) => {
    const [selectedPathology, setSelectedPathology] = useState(null);
    const [activeTab, setActiveTab] = useState('All');
    const [subTab, setSubTab] = useState('Condition Cards'); // Default to showing cards

    // Extract unique categories
    const categories = ['All', ...new Set(pathologies.map(p => p.category).filter(Boolean))];
    const hasCategories = categories.length > 2;

    // Filter pathologies
    const filteredPathologies = React.useMemo(() => {
        return activeTab === 'All'
            ? pathologies
            : pathologies.filter(p => p.category === activeTab);
    }, [activeTab, pathologies]);

    // Get content for active category
    const activeContent = categoryContent && categoryContent[activeTab];

    // Reset subtab when category changes
    React.useEffect(() => {
        setSubTab('Condition Cards');
    }, [activeTab]);

    // Configuration map for tab content keys
    const TAB_KEY_MAP = {
        'Condition Cards': 'pathologyInfo',
        'Anatomy': 'anatomy',
        'Special Tests': 'specialTests',
        'Evaluation': 'clinicalEvaluation',
        'CPG': 'cpg',
        'Treatment': 'treatment',
        'Rehab Guardrails': 'rehabGuardrails',
        'Post-Op': 'postOp',
        'Red Flags': 'redFlags',
        'Function & ROM': 'function',
        'Differential Diagnosis': 'differentialDiagnosis'
    };

    // Sub-tabs list
    const SUB_TABS = Object.keys(TAB_KEY_MAP);

    return (
        <>
            {hasCategories && (
                <div className="category-tabs">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            {/* Sub-Tabs for Active Category Content */}
            {activeContent && (
                <div className="sub-tabs-container">
                    {SUB_TABS.map(tab => {
                        const contentKey = TAB_KEY_MAP[tab];
                        // check if content exists for this tab
                        const hasContent = activeContent[contentKey] || tab === 'Condition Cards';

                        if (!hasContent) return null;

                        return (
                            <button
                                key={tab}
                                className={`sub-tab-btn ${subTab === tab ? 'active' : ''}`}
                                onClick={() => setSubTab(tab)}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>
            )}

            <AnimatePresence mode="wait">
                {subTab === 'Condition Cards' && (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="pathology-grid"
                    >
                        {filteredPathologies.map((pathology, index) => (
                            <PathologyCard
                                key={pathology.id}
                                pathology={pathology}
                                index={index}
                                onClick={setSelectedPathology}
                            />
                        ))}
                    </motion.div>
                )}

                {subTab === 'Anatomy' && activeContent?.anatomy && (
                    <motion.div
                        key="anatomy"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section"
                    >
                        <div className="detail-block">
                            <h3>{activeTab} Anatomy</h3>
                            <div className="anatomy-grid">
                                <div className="anatomy-column">
                                    <h4>Bones</h4>
                                    <ul>{activeContent.anatomy.bones.map(b => <li key={b.name}><strong>{b.name}:</strong> {b.description}</li>)}</ul>
                                </div>
                                <div className="anatomy-column">
                                    <h4>Joints</h4>
                                    <ul>{activeContent.anatomy.joints.map(j => <li key={j.name}><strong>{j.name}:</strong> {j.description}</li>)}</ul>
                                </div>
                                <div className="anatomy-column">
                                    <h4>Muscles</h4>
                                    <h5>Rotator Cuff</h5>
                                    <ul>{activeContent.anatomy.muscles.rotatorCuff.map(m => <li key={m.name}><strong>{m.name}:</strong> {m.action}</li>)}</ul>
                                    <h5>Other</h5>
                                    <ul>{activeContent.anatomy.muscles.other.map(m => <li key={m.name}><strong>{m.name}:</strong> {m.action}</li>)}</ul>
                                </div>
                                <div className="anatomy-column">
                                    <h4>Neurovascular</h4>
                                    <h5>Nerves</h5>
                                    <ul>{activeContent.anatomy.neurovascular.nerves.map(n => <li key={n}>{n}</li>)}</ul>
                                    <h5>Vascular</h5>
                                    <ul>{activeContent.anatomy.neurovascular.vascular.map(v => <li key={v}>{v}</li>)}</ul>
                                </div>
                            </div>
                        </div>
                        {/* Ligaments - Added check just in case */}
                        {activeContent.anatomy.ligaments && (
                            <div className="detail-block">
                                <h4>Ligaments & Capsule</h4>
                                <ul>{activeContent.anatomy.ligaments.map(l => <li key={l.name}><strong>{l.name}:</strong> {l.description}</li>)}</ul>
                            </div>
                        )}
                    </motion.div>
                )}

                {subTab === 'Special Tests' && activeContent?.specialTests && (
                    <motion.div
                        key="tests"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section"
                    >
                        <div className="detail-block">
                            <h3>Special Tests</h3>
                            <div className="tests-grid">
                                {activeContent.specialTests.map(group => (
                                    <div key={group.category} className="test-group">
                                        <h4>{group.category}</h4>
                                        <ul>
                                            {group.tests.map(test => (
                                                <li key={test.name} className="special-test-item">
                                                    <div className="test-header">
                                                        <strong>{test.name}</strong>
                                                        {test.purpose && <span className="test-purpose"> - {test.purpose}</span>}
                                                    </div>
                                                    {test.image && (
                                                        <div className="test-image-container">
                                                            <img src={test.image} alt={test.name} className="test-image" loading="lazy" />
                                                        </div>
                                                    )}
                                                    <div className="test-technique"><strong>Technique:</strong> {test.technique}</div>
                                                    <div className="test-positive"><strong>Positive:</strong> {test.positive}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {subTab === 'Red Flags' && activeContent?.redFlags && (
                    <motion.div
                        key="redflags"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section red-flag-section"
                    >
                        <div className="detail-block">
                            <h3 className="red-flag-header">
                                <AlertTriangle size={20} /> Red Flags & Central Signs
                            </h3>
                            <div className="tests-grid">
                                {activeContent.redFlags.map(group => (
                                    <div key={group.category} className="test-group red-flag-group">
                                        <h4>{group.category}</h4>
                                        <ul>
                                            {group.findings.map((finding, idx) => (
                                                <li key={idx}>
                                                    <strong>{finding.name}</strong>: {finding.description}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {subTab === 'Post-Op' && activeContent?.postOp && (
                    <motion.div
                        key="postOp"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section"
                    >
                        <div className="cpg-intro">
                            <h3><ShieldAlert size={20} /> {activeContent.postOp.title}</h3>
                        </div>

                        {/* Ankle Post-Op (Phase 4) */}
                        {activeContent.postOp.protocols && (
                            <div className="detail-block">
                                <h3>{activeContent.postOp.title}</h3>
                                <div className="cpg-grid">
                                    {activeContent.postOp.protocols.map((proto, i) => (
                                        <div key={i} className="cpg-card">
                                            <h4>{proto.name}</h4>
                                            <p><strong>Early:</strong> {proto.timeline.early}</p>
                                            {proto.timeline.late && <p><strong>Late:</strong> {proto.timeline.late}</p>}
                                            {proto.timeline.focus && <p style={{ color: '#059669' }}><strong>Focus:</strong> {proto.timeline.focus}</p>}
                                        </div>
                                    ))}
                                </div>
                                {activeContent.postOp.biomechanics && (
                                    <div style={{ marginTop: '2rem' }}>
                                        <h4>{activeContent.postOp.biomechanics.title}</h4>
                                        <div className="anatomy-grid" style={{ marginTop: '1rem' }}>
                                            {activeContent.postOp.biomechanics.types.map((type, i) => (
                                                <div key={i} className="exam-step">
                                                    <h5>{type.type}</h5>
                                                    <p>{type.cause}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Knee Complications (Existing) */}
                        {activeContent.postOp.complications && (
                            <div className="detail-block">
                                <h3>🚨 Red Flags: Complications</h3>
                                <div className="cpg-grid">
                                    {activeContent.postOp.complications.map((comp, i) => (
                                        <div key={i} className="cpg-card" style={{ borderLeft: '4px solid #ef4444' }}>
                                            <h4 style={{ color: '#b91c1c' }}>{comp.name}</h4>
                                            <p><strong>Sign:</strong> {comp.sign}</p>
                                            <p style={{ color: '#ef4444', fontWeight: 600, marginTop: '0.5rem' }}>Action: {comp.action}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* RTS Battery */}
                        {activeContent.postOp.rts && (
                            <div className="detail-block">
                                <h3>{activeContent.postOp.rts.title}</h3>
                                <div className="cpg-card" style={{ borderTop: '4px solid var(--color-primary)' }}>
                                    <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                                        {activeContent.postOp.rts.metrics.map((m, i) => <li key={i} style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{m}</li>)}
                                    </ul>
                                    <p style={{ fontStyle: 'italic', color: 'var(--color-primary)', fontWeight: 500 }}>Note: {activeContent.postOp.rts.note}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}

                {subTab === 'Rehab Guardrails' && activeContent?.rehabGuardrails && (
                    <motion.div
                        key="rehabGuardrails"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section"
                    >
                        <div className="cpg-intro">
                            <h3><ShieldAlert size={20} /> {activeContent.rehabGuardrails.title}</h3>
                        </div>

                        <div className="treatment-tracks-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                            {/* Danger Zone */}
                            <div className="track-column" style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '8px', border: '1px solid #fca5a5' }}>
                                <h3 className="track-title" style={{ color: '#ef4444', borderBottom: '2px solid #ef4444', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                                    {activeContent.rehabGuardrails.dangerZone.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#7f1d1d', marginBottom: '1rem', fontStyle: 'italic' }}>{activeContent.rehabGuardrails.dangerZone.context}</p>
                                <ul style={{ marginBottom: '1rem', paddingLeft: '1.2rem' }}>
                                    {activeContent.rehabGuardrails.dangerZone.exercises.map(ex => <li key={ex} style={{ color: '#b91c1c', fontWeight: 600 }}>{ex}</li>)}
                                </ul>
                                <p style={{ fontSize: '0.9rem', color: '#7f1d1d' }}><strong>Mechanism:</strong> {activeContent.rehabGuardrails.dangerZone.mechanism}</p>
                                <p style={{ fontSize: '0.9rem', color: '#991b1b', marginTop: '0.5rem', borderTop: '1px solid #fecaca', paddingTop: '0.5rem' }}>
                                    ⚠️ {activeContent.rehabGuardrails.dangerZone.comparison}
                                </p>
                            </div>

                            {/* Safe Zone */}
                            <div className="track-column" style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', border: '1px solid #86efac' }}>
                                <h3 className="track-title" style={{ color: '#10b981', borderBottom: '2px solid #10b981', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                                    {activeContent.rehabGuardrails.safeZone.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#064e3b', marginBottom: '1rem', fontStyle: 'italic' }}>{activeContent.rehabGuardrails.safeZone.context}</p>
                                <ul style={{ marginBottom: '1rem', paddingLeft: '1.2rem' }}>
                                    {activeContent.rehabGuardrails.safeZone.exercises.map(ex => <li key={ex} style={{ color: '#15803d', fontWeight: 600 }}>{ex}</li>)}
                                </ul>
                                <p style={{ fontSize: '0.9rem', color: '#064e3b' }}><strong>Mechanism:</strong> {activeContent.rehabGuardrails.safeZone.mechanism}</p>
                                {activeContent.rehabGuardrails.safeZone.note && (
                                    <p style={{ fontSize: '0.9rem', color: '#166534', marginTop: '0.5rem', borderTop: '1px solid #bbf7d0', paddingTop: '0.5rem' }}>
                                        ✅ {activeContent.rehabGuardrails.safeZone.note}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="detail-block">
                            <h3>App Recommendation Guidelines</h3>
                            <div className="cpg-card" style={{ borderLeft: '4px solid #8b5cf6' }}>
                                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                                    {activeContent.rehabGuardrails.guidelines.map((guide, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{guide}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}

                {subTab === 'Treatment' && activeContent?.treatment && (
                    <motion.div
                        key="treatment"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section"
                    >
                        {/* 0. Anti-Gravity Interventions (Foot & Ankle) */}
                        {activeContent.treatment.strategies && (
                            <div className="detail-block">
                                <h3>{activeContent.treatment.title}</h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{activeContent.treatment.context}</p>
                                <div className="cpg-grid">
                                    {activeContent.treatment.strategies.map((strat, i) => (
                                        <div key={i} className="cpg-card" style={{ borderLeft: `4px solid ${i % 2 === 0 ? '#10b981' : '#3b82f6'}` }}>
                                            <h4 style={{ color: '#111827' }}>{strat.type}</h4>
                                            <div style={{ marginTop: '0.5rem', fontWeight: 600, color: '#4b5563' }}>Technique: {strat.technique}</div>
                                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{strat.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 1. Functional Triage */}
                        <div className="detail-block">
                            <h3>{activeContent.treatment.triage.title}</h3>
                            <div className="cpg-grid">
                                {activeContent.treatment.triage.tests.map((test, i) => (
                                    <div key={i} className="cpg-card" style={{ borderTop: '4px solid #8b5cf6' }}>
                                        <h4>{test.name}</h4>
                                        <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--color-primary)' }}>{test.action}</p>
                                        <div className="step-desc" style={{ marginTop: '0.5rem', fontWeight: 500, whiteSpace: 'pre-line' }}>{test.sign}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="treatment-tracks-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                            {/* 2. Mobility Track */}
                            <div className="track-column">
                                <h3 className="track-title mobility-title" style={{ color: '#10b981', borderBottom: '2px solid #10b981', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                                    {activeContent.treatment.mobility.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{activeContent.treatment.mobility.context}</p>
                                {activeContent.treatment.mobility.techniques.map((tech, i) => (
                                    <div key={i} className="exercise-card">
                                        <div className="exercise-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{ fontWeight: 700, color: '#10b981' }}>{tech.name}</span>
                                            <span style={{ fontSize: '0.75rem', background: '#ecfdf5', color: '#047857', padding: '2px 6px', borderRadius: '4px' }}>Mobility</span>
                                        </div>
                                        <p style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}><strong>Purpose:</strong> {tech.purpose}</p>
                                        <p style={{ fontSize: '0.9rem' }}>{tech.action}</p>
                                    </div>
                                ))}
                            </div>

                            {/* 3. Stability Track */}
                            <div className="track-column">
                                <h3 className="track-title stability-title" style={{ color: '#3b82f6', borderBottom: '2px solid #3b82f6', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                                    {activeContent.treatment.stability.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{activeContent.treatment.stability.context}</p>
                                {activeContent.treatment.stability.exercises.map((ex, i) => (
                                    <div key={i} className="exercise-card">
                                        <div className="exercise-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{ fontWeight: 700, color: '#3b82f6' }}>{ex.name}</span>
                                            <span style={{ fontSize: '0.75rem', background: '#eff6ff', color: '#1d4ed8', padding: '2px 6px', borderRadius: '4px' }}>{ex.target}</span>
                                        </div>
                                        <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-text)' }}>Cue: "{ex.cue}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Integration */}
                        <div className="detail-block" style={{ marginTop: '2rem' }}>
                            <h3>{activeContent.treatment.integration.title}</h3>
                            <div className="cpg-grid">
                                {activeContent.treatment.integration.exercises.map((ex, i) => (
                                    <div key={i} className="cpg-card" style={{ borderTop: '4px solid #f59e0b' }}>
                                        <h4>{ex.name}</h4>
                                        <p style={{ fontSize: '0.9rem' }}>{ex.cue}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {subTab === 'Evaluation' && activeContent?.clinicalEvaluation && (
                    <motion.div
                        key="evaluation"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section"
                    >
                        {/* =========================================================
                            FOOT & ANKLE SPECIFIC RENDERING
                           ========================================================= */}

                        {/* 1. Foot & Ankle Red Flags (Phase 1) */}
                        {activeContent.clinicalEvaluation.redFlags && activeContent.clinicalEvaluation.redFlags.fracture && (
                            <div className="detail-block">
                                <h3><ShieldAlert size={20} color="#ef4444" style={{ marginBottom: '-4px', marginRight: '8px' }} />{activeContent.clinicalEvaluation.redFlags.title}</h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{activeContent.clinicalEvaluation.redFlags.context}</p>

                                <div className="cpg-grid">
                                    {/* Fracture Screen */}
                                    <div className="cpg-card" style={{ borderLeft: '4px solid #ef4444', backgroundColor: '#fef2f2' }}>
                                        <h4 style={{ color: '#b91c1c' }}>{activeContent.clinicalEvaluation.redFlags.fracture.title}</h4>
                                        <div style={{ marginTop: '0.5rem' }}>
                                            <strong>Ottawa Ankle Rules:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '0.5rem' }}>
                                                {activeContent.clinicalEvaluation.redFlags.fracture.ottawa.points.map((pt, i) => <li key={i}>{pt}</li>)}
                                            </ul>
                                        </div>
                                        <div style={{ marginTop: '0.5rem' }}>
                                            <strong>Bernese Rules:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '0.5rem' }}>
                                                {activeContent.clinicalEvaluation.redFlags.fracture.bernese.points.map((pt, i) => <li key={i}>{pt}</li>)}
                                            </ul>
                                        </div>
                                        <div style={{ fontWeight: 700, color: '#ef4444', marginTop: '0.5rem' }}>{activeContent.clinicalEvaluation.redFlags.fracture.action}</div>
                                    </div>

                                    {/* Vascular Screen */}
                                    <div className="cpg-card" style={{ borderLeft: '4px solid #ef4444' }}>
                                        <h4 style={{ color: '#b91c1c' }}>{activeContent.clinicalEvaluation.redFlags.vascular.title}</h4>
                                        <p><strong>DVT:</strong> {activeContent.clinicalEvaluation.redFlags.vascular.dvt}</p>
                                        <div style={{ marginTop: '1rem' }}>
                                            <strong>Compartment Syndrome:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
                                                {activeContent.clinicalEvaluation.redFlags.vascular.compartment.signs.map((s, i) => <li key={i}>{s}</li>)}
                                            </ul>
                                            <div style={{ fontStyle: 'italic' }}>Test: {activeContent.clinicalEvaluation.redFlags.vascular.compartment.test}</div>
                                            <div style={{ color: '#ef4444', fontWeight: 600, marginTop: '0.5rem' }}>{activeContent.clinicalEvaluation.redFlags.vascular.compartment.action}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 2. Diagnostic Zones (Phase 2) */}
                        {activeContent.clinicalEvaluation.diagnosticZones && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.diagnosticZones.title}</h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{activeContent.clinicalEvaluation.diagnosticZones.context}</p>
                                <div className="anatomy-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                    {activeContent.clinicalEvaluation.diagnosticZones.zones.map((zone, zIdx) => (
                                        <div key={zIdx} className="exam-step" style={{ borderLeft: '4px solid #3b82f6' }}>
                                            <div style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{zone.zone}</div>
                                            <h4 style={{ color: '#1e40af', marginTop: '0px' }}>{zone.name}</h4>

                                            {zone.pathologies.map((path, pIdx) => (
                                                <div key={pIdx} style={{ marginTop: '0.8rem', paddingBottom: '0.8rem', borderBottom: pIdx !== zone.pathologies.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                                                    <div style={{ fontWeight: 600, color: '#111827' }}>
                                                        {path.name}
                                                        {path.flag && <span style={{ marginLeft: '6px', fontSize: '0.7em', backgroundColor: '#fee2e2', color: '#b91c1c', padding: '2px 6px', borderRadius: '4px' }}>{path.flag}</span>}
                                                    </div>

                                                    {path.mechanism && <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>MOI: {path.mechanism}</div>}
                                                    {path.location && <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>Loc: {path.location}</div>}
                                                    {path.symptom && <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>Sx: {path.symptom}</div>}
                                                    {path.sign && <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>Sign: {path.sign}</div>}

                                                    {path.test && <div style={{ fontSize: '0.9rem', color: '#2563eb', marginTop: '2px' }}><strong>Test:</strong> {path.test}</div>}
                                                    {path.sensitivity && <div style={{ fontSize: '0.8rem', color: '#059669' }}>Sensitivity: {path.sensitivity}</div>}
                                                    {path.notes && <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#6b7280' }}>{path.notes}</div>}
                                                    {path.action && <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#b91c1c' }}>{path.action}</div>}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3. Functional Evaluation (Phase 3) */}
                        {activeContent.clinicalEvaluation.functional && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.functional.title}</h3>
                                <div className="cpg-grid">
                                    {activeContent.clinicalEvaluation.functional.steps.map((item, i) => (
                                        <div key={i} className="cpg-card">
                                            <h4>{item.name}</h4>
                                            <p><strong>Test:</strong> {item.test}</p>
                                            <p style={{ color: '#059669' }}><strong>Goal/Criteria:</strong> {item.criteria || item.goal}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Classification & Patterns (Big Three) */}
                        {activeContent.clinicalEvaluation.classification && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.classification.title}</h3>
                                <div className="cpg-grid" style={{ marginBottom: '1.5rem' }}>
                                    {activeContent.clinicalEvaluation.classification.patterns.map((pat, i) => (
                                        <div key={i} className="cpg-card" style={{ borderTop: i === 0 ? '4px solid #ef4444' : (i === 1 ? '4px solid #f97316' : '4px solid #3b82f6') }}>
                                            <h4>{pat.name}</h4>
                                            <span className="population-tag">{pat.type}</span>
                                            <ul style={{ marginTop: '0.5rem' }}>
                                                {pat.signs.map(sign => <li key={sign}>{sign}</li>)}
                                            </ul>
                                            <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--color-primary)', marginTop: 'auto' }}>
                                                Tip: {pat.tip}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Extra-Articular Screens (Imposters) */}
                        {activeContent.clinicalEvaluation.extraArticularDetails && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.extraArticularDetails.title}</h3>
                                <div className="anatomy-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                    {activeContent.clinicalEvaluation.extraArticularDetails.conditions.map((cond, i) => (
                                        <div key={i} className="exam-step" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-secondary)' }}>
                                            <div className="step-name" style={{ fontSize: '1rem' }}>{cond.name}</div>
                                            <div className="step-desc">Test: {cond.test}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Post-Op Screen */}
                        {activeContent.clinicalEvaluation.postOpScreen && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.postOpScreen.title}</h3>
                                <div className="safety-box">
                                    <h4>{activeContent.clinicalEvaluation.postOpScreen.context}</h4>
                                    <ul>
                                        {activeContent.clinicalEvaluation.postOpScreen.redFlags.map(rf => (
                                            <li key={rf} style={{ color: 'var(--color-danger)', fontWeight: 500 }}>{rf}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* 1. Diagnostic Clusters (Knee) */}
                        {activeContent.clinicalEvaluation.diagnosticClusters && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.diagnosticClusters.title}</h3>
                                <div className="cpg-grid" style={{ marginBottom: '2rem' }}>
                                    {/* Meniscus */}
                                    {activeContent.clinicalEvaluation.diagnosticClusters.meniscus && (
                                        <div className="cpg-card" style={{ borderLeft: '4px solid #f59e0b' }}>
                                            <h4>{activeContent.clinicalEvaluation.diagnosticClusters.meniscus.title}</h4>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                                                {activeContent.clinicalEvaluation.diagnosticClusters.meniscus.criteria.map((c, i) => <li key={i}>{c}</li>)}
                                            </ul>
                                            <p style={{ fontStyle: 'italic', color: '#b45309' }}><strong>Logic:</strong> {activeContent.clinicalEvaluation.diagnosticClusters.meniscus.logic}</p>
                                        </div>
                                    )}
                                    {/* Ligamentous Profiles */}
                                    {activeContent.clinicalEvaluation.diagnosticClusters.ligamentous && activeContent.clinicalEvaluation.diagnosticClusters.ligamentous.profiles.map((profile, i) => (
                                        <div key={i} className="cpg-card">
                                            <h4>{profile.name}</h4>
                                            <p><strong>Mechanism:</strong> {profile.mechanism}</p>
                                            <p><strong>Signs:</strong> {profile.signs}</p>
                                            {profile.sensory && <p><strong>Sensory:</strong> {profile.sensory}</p>}
                                            {profile.stability && <p><strong>Stability:</strong> {profile.stability}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 2. Anterior Knee Pain Algorithm */}
                        {activeContent.clinicalEvaluation.anteriorKneePain && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.anteriorKneePain.title}</h3>
                                <div className="anatomy-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                    {activeContent.clinicalEvaluation.anteriorKneePain.buckets.map((bucket, i) => (
                                        <div key={i} className="exam-step" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                            <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>{bucket.name}</h4>
                                            <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Sign:</strong> {bucket.sign}</div>
                                            <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Test:</strong> {bucket.test}</div>
                                            <div style={{ fontSize: '0.9rem', color: '#10b981' }}><strong>Rx Focus:</strong> {bucket.focus}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3. Nerve Screen */}
                        {activeContent.clinicalEvaluation.nerveScreen && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.nerveScreen.title}</h3>
                                <div className="anatomy-grid">
                                    {activeContent.clinicalEvaluation.nerveScreen.nerves.map((n, i) => (
                                        <div key={i} className="exam-step" style={{ borderLeft: '4px solid #8b5cf6' }}>
                                            <h4>{n.name}</h4>
                                            <p><strong>Signs:</strong> {n.signs}</p>
                                            <p><strong>Screen:</strong> {n.screen}</p>
                                            <p style={{ color: '#7c3aed' }}><strong>Action:</strong> {n.action}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 1. Mechanism of Injury Legacy Fallback */}
                        {activeContent.clinicalEvaluation.history && activeContent.clinicalEvaluation.history.scenarios && !activeContent.clinicalEvaluation.diagnosticClusters && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.history.title}</h3>
                                <div className="cpg-grid">
                                    {activeContent.clinicalEvaluation.history.scenarios.map((scenario, i) => (
                                        <div key={i} className="cpg-card">
                                            <h4 style={{ color: 'var(--color-primary)' }}>{scenario.type}</h4>
                                            <p><strong>Suspect:</strong> {scenario.suspect}</p>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{scenario.mechanism}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 2. Ligamentous Stability (Structural) */}
                        {activeContent.clinicalEvaluation.structural && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.structural.title}</h3>
                                {activeContent.clinicalEvaluation.structural.groups.map((group, i) => (
                                    <div key={i} style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{group.name}</h4>
                                        <div className="anatomy-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                            {group.tests.map((test, j) => (
                                                <div key={j} className="exam-step" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                                                        <span className="step-name">{test.name}</span>
                                                        {test.stats && <span style={{ fontSize: '0.75rem', background: '#e0f2fe', color: '#0284c7', padding: '2px 6px', borderRadius: '4px', border: '1px solid #bae6fd' }}>{test.stats}</span>}
                                                    </div>
                                                    <div className="step-desc" style={{ marginBottom: '0.25rem' }}>{test.action}</div>
                                                    <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>{test.logic}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* 3. Meniscal Pathology */}
                        {activeContent.clinicalEvaluation.meniscal && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.meniscal.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{activeContent.clinicalEvaluation.meniscal.context}</p>
                                <div className="anatomy-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                    {activeContent.clinicalEvaluation.meniscal.tests.map((test, i) => (
                                        <div key={i} className="exam-step" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: '4px solid #f97316' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                                                <span className="step-name">{test.name}</span>
                                                {test.stats && <span style={{ fontSize: '0.75rem', background: '#ffedd5', color: '#c2410c', padding: '2px 6px', borderRadius: '4px', border: '1px solid #fed7aa' }}>{test.stats}</span>}
                                            </div>
                                            <div className="step-desc" style={{ marginBottom: '0.25rem' }}>{test.action}</div>
                                            <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>{test.logic}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 4. PFPS */}
                        {activeContent.clinicalEvaluation.pfps && (
                            <div className="detail-block">
                                <h3>{activeContent.clinicalEvaluation.pfps.title}</h3>
                                <div className="anatomy-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                    {activeContent.clinicalEvaluation.pfps.tests.map((test, i) => (
                                        <div key={i} className="exam-step" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                                            <span className="step-name">{test.name}</span>
                                            <div className="step-desc" style={{ marginBottom: '0.25rem' }}>{test.action}</div>
                                            <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>{test.logic}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* History & Intake (Hip Legacy Flow - kept for fallback) */}
                        {activeContent.clinicalEvaluation.history && activeContent.clinicalEvaluation.history.layers && (
                            <div className="detail-block">
                                <h3>Patient History & Intake</h3>
                                <div className="anatomy-grid">
                                    <div className="anatomy-column">
                                        <h4>The "4 Layers" Concept</h4>
                                        <ul>
                                            {activeContent.clinicalEvaluation.history.layers.map(layer => (
                                                <li key={layer.name}><strong>{layer.name}:</strong> {layer.description}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="anatomy-column">
                                        <h4>Symptom Location</h4>
                                        <ul>
                                            {activeContent.clinicalEvaluation.history.symptoms.map(sym => (
                                                <li key={sym.location}><strong>{sym.location}:</strong> {sym.meaning}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 21-Step Exam */}
                        {activeContent.clinicalEvaluation.examination && (
                            <div className="detail-block">
                                <h3>21-Step Physical Examination</h3>
                                <div className="exam-timeline">
                                    {activeContent.clinicalEvaluation.examination.map((phase, idx) => (
                                        <div key={idx} className="exam-phase">
                                            <div className="phase-header">{phase.phase}</div>
                                            <div className="phase-steps">
                                                {phase.steps.map(step => (
                                                    <div key={step.name} className="exam-step">
                                                        <div className="step-name">{step.name}</div>
                                                        <div className="step-desc">{step.description}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Pathology Correlation */}
                        {activeContent.clinicalEvaluation.pathologyCorrelation && (
                            <div className="detail-block">
                                <h3>Pathology Correlation</h3>
                                <table className="correlation-table">
                                    <thead>
                                        <tr>
                                            <th>Pathology</th>
                                            <th>Key Positive Findings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activeContent.clinicalEvaluation.pathologyCorrelation.map((item, idx) => (
                                            <tr key={idx}>
                                                <td><strong>{item.pathology}</strong></td>
                                                <td>{item.findings}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Safety Screening */}
                        {activeContent.clinicalEvaluation.safetyScreening && (
                            <div className="detail-block">
                                <h3 style={{ color: 'var(--color-danger)', borderColor: 'var(--color-danger)' }}>
                                    <AlertTriangle size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                                    Safety Screening
                                </h3>

                                {activeContent.clinicalEvaluation.safetyScreening.wellsCriteria && (
                                    <div className="safety-box">
                                        <h4>{activeContent.clinicalEvaluation.safetyScreening.wellsCriteria.title}</h4>
                                        <div className="criteria-list">
                                            {activeContent.clinicalEvaluation.safetyScreening.wellsCriteria.items.map(i => (
                                                <span key={i} className="criteria-tag">{i}</span>
                                            ))}
                                        </div>
                                        <div className="scoring-row">
                                            <strong>Scoring:</strong> {activeContent.clinicalEvaluation.safetyScreening.wellsCriteria.scoring}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}

                {subTab === 'CPG' && activeContent?.cpg && (
                    <motion.div
                        key="cpg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section"
                    >
                        <div className="cpg-intro">
                            <h3><ShieldAlert size={20} /> Clinical Practice Guidelines (CPG)</h3>
                            <p>Evidence-based "Gold Standard" protocols.</p>
                        </div>

                        <div className="cpg-grid">
                            {/* ==================== HIP CPGs ==================== */}
                            {activeContent.cpg.oaProtocol && (
                                <>
                                    {/* Track 1: Hip OA */}
                                    <div className="cpg-card oa-track">
                                        <div className="track-header">
                                            <h4>{activeContent.cpg.oaProtocol.title}</h4>
                                            <span className="population-tag">{activeContent.cpg.oaProtocol.population}</span>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Diagnostic Criteria (Altman)</h5>
                                            {activeContent.cpg.oaProtocol.criteria.map((cluster, i) => (
                                                <div key={i} className="cluster-box">
                                                    <strong>{cluster.name}</strong> <span>({cluster.stats})</span>
                                                    <ul>
                                                        {cluster.items.map(item => <li key={item}>{item}</li>)}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Performance Measures</h5>
                                            <ul>
                                                {activeContent.cpg.oaProtocol.performanceMeasures.map(pm => <li key={pm}>{pm}</li>)}
                                            </ul>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Outcome Measures</h5>
                                            <ul>
                                                {activeContent.cpg.oaProtocol.outcomeMeasures.map(om => <li key={om}>{om}</li>)}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Track 2: Non-Arthritic */}
                                    <div className="cpg-card fai-track">
                                        <div className="track-header">
                                            <h4>{activeContent.cpg.nonArthriticProtocol.title}</h4>
                                            <span className="population-tag">{activeContent.cpg.nonArthriticProtocol.population}</span>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Key Diagnoses</h5>
                                            {activeContent.cpg.nonArthriticProtocol.diagnoses.map((dx, i) => (
                                                <div key={i} className="dx-item">
                                                    <strong>{dx.name}</strong>
                                                    <p>{dx.signs}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Special Tests (Grade B)</h5>
                                            <ul>
                                                {activeContent.cpg.nonArthriticProtocol.examTests.map(test => <li key={test}>{test}</li>)}
                                            </ul>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Outcome Measures</h5>
                                            <ul>
                                                {activeContent.cpg.nonArthriticProtocol.outcomeMeasures.map(om => <li key={om}>{om}</li>)}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Track 3: Fracture */}
                                    <div className="cpg-card fx-track">
                                        <div className="track-header">
                                            <h4>{activeContent.cpg.fractureProtocol.title}</h4>
                                            <span className="population-tag">{activeContent.cpg.fractureProtocol.population}</span>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Red Flag Screening</h5>
                                            <ul>
                                                {activeContent.cpg.fractureProtocol.screening.map(s => <li key={s}>{s}</li>)}
                                            </ul>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Performance Measures</h5>
                                            <ul>
                                                {activeContent.cpg.fractureProtocol.performanceMeasures.map(pm => <li key={pm}>{pm}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* ==================== KNEE CPGs ==================== */}
                            {activeContent.cpg.coperScreen && (
                                <>
                                    {/* 1. Coper Classification */}
                                    <div className="cpg-card" style={{ borderTop: '4px solid var(--color-success)' }}>
                                        <div className="track-header">
                                            <h4>{activeContent.cpg.coperScreen.title}</h4>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Screening Criteria</h5>
                                            <ul>{activeContent.cpg.coperScreen.criteria.map(c => <li key={c}>{c}</li>)}</ul>
                                        </div>
                                        <div style={{ marginTop: 'auto', paddingTop: '1rem', fontStyle: 'italic', color: 'var(--color-success)' }}>
                                            {activeContent.cpg.coperScreen.implication}
                                        </div>
                                    </div>

                                    {/* 2. Interventions */}
                                    <div className="cpg-card" style={{ borderTop: '4px solid var(--color-primary)' }}>
                                        <h4>Interventions (Grades A/B)</h4>
                                        <div className="cpg-section">
                                            <h5>Strong Evidence (Do This)</h5>
                                            {activeContent.cpg.intervention.strong.map((msg, i) => (
                                                <div key={i} className="cluster-box" style={{ background: 'color-mix(in srgb, var(--color-success), transparent 90%)' }}>
                                                    <strong>{msg.name}</strong>
                                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>{msg.detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Weak Evidence (Avoid/Caution)</h5>
                                            {activeContent.cpg.intervention.weak.map((msg, i) => (
                                                <div key={i} className="cluster-box" style={{ background: 'color-mix(in srgb, var(--color-danger), transparent 90%)' }}>
                                                    <strong style={{ color: 'var(--color-danger)' }}>{msg.name}</strong>
                                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>{msg.detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 3. Prevention */}
                                    <div className="cpg-card" style={{ borderTop: '4px solid var(--color-warning)' }}>
                                        <div className="track-header">
                                            <h4>{activeContent.cpg.prevention.title}</h4>
                                            <span className="population-tag">{activeContent.cpg.prevention.target}</span>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Dosage</h5>
                                            <p>{activeContent.cpg.prevention.dosage}</p>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Key Components</h5>
                                            <ul>{activeContent.cpg.prevention.exercises.map(e => <li key={e}>{e}</li>)}</ul>
                                        </div>
                                        <div style={{ marginTop: 'auto', fontWeight: 600, color: 'var(--color-warning)' }}>
                                            {activeContent.cpg.prevention.check}
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* ==================== FOOT & ANKLE CPGs ==================== */}
                            {activeContent.cpg.ankleSprain && (
                                <>
                                    {/* Ankle Sprain */}
                                    <div className="cpg-card" style={{ borderTop: '4px solid var(--color-danger)' }}>
                                        <h4>{activeContent.cpg.ankleSprain.title}</h4>
                                        <div className="cpg-section">
                                            <h5>Diagnosis</h5>
                                            {activeContent.cpg.ankleSprain.diagnosis && (
                                                <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>
                                                    <p style={{ marginBottom: '0.5rem' }}><strong>Acute:</strong> {activeContent.cpg.ankleSprain.diagnosis.acute}</p>
                                                    <p><strong>Instability:</strong> {activeContent.cpg.ankleSprain.diagnosis.instability}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Interventions (Grade A)</h5>
                                            <ul>
                                                {activeContent.cpg.ankleSprain.interventions.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                                                        <span style={{ fontWeight: 600, color: '#047857' }}>{item.name}</span>
                                                        <p style={{ margin: '0.2rem 0 0 1rem', fontSize: '0.85rem', color: '#6b7280' }}>{item.detail}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Achilles */}
                                    <div className="cpg-card" style={{ borderTop: '4px solid var(--color-warning)' }}>
                                        <h4>{activeContent.cpg.achilles.title}</h4>
                                        <div className="cpg-section">
                                            <h5>Diagnosis</h5>
                                            {activeContent.cpg.achilles.diagnosis && (
                                                <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>
                                                    <p style={{ marginBottom: '0.5rem' }}>{activeContent.cpg.achilles.diagnosis.summary}</p>
                                                    <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                                                        {activeContent.cpg.achilles.diagnosis.signs.map((sign, idx) => (
                                                            <li key={idx}>{sign}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Interventions</h5>
                                            <ul>
                                                {activeContent.cpg.achilles.interventions.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                                                        <span style={{ fontWeight: 600, color: '#b45309' }}>[{item.grade}] {item.name}</span>
                                                        <p style={{ margin: '0.2rem 0 0 1rem', fontSize: '0.85rem', color: '#6b7280' }}>{item.detail}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Plantar Fasciitis */}
                                    <div className="cpg-card" style={{ borderTop: '4px solid var(--color-primary)' }}>
                                        <h4>{activeContent.cpg.plantarFasciitis.title}</h4>
                                        <div className="cpg-section">
                                            <h5>Risk Factors</h5>
                                            <ul>{activeContent.cpg.plantarFasciitis.riskFactors.map(r => <li key={r}>{r}</li>)}</ul>
                                        </div>
                                        <div className="cpg-section">
                                            <h5>Interventions</h5>
                                            <ul>{activeContent.cpg.plantarFasciitis.interventions.map(i => <li key={i}>{i}</li>)}</ul>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}

                {subTab === 'Function & ROM' && activeContent?.function && (
                    <motion.div
                        key="function"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section"
                    >
                        <div className="detail-block">
                            <h3>Biomechanics & Function</h3>
                            <ul>{activeContent.function.biomechanics?.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                        {activeContent.function.rom && (
                            <div className="detail-block">
                                <h3>Range of Motion (ROM)</h3>
                                <div className="anatomy-grid">
                                    <div className="anatomy-column" style={{ width: '100%' }}>
                                        <ul>{activeContent.function.rom.map((r, i) => <li key={i}><strong>{r.movement}:</strong> {r.value}</li>)}</ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="detail-block">
                            <h3>Common Pathologies Overview</h3>
                            <ul>{activeContent.function.commonConditions?.map((item, i) => <li key={i}><strong>{item.category}:</strong> {item.conditions}</li>)}</ul>
                        </div>
                    </motion.div>
                )}

                {subTab === 'Differential Diagnosis' && activeContent?.differentialDiagnosis && (
                    <motion.div
                        key="differentialDiagnosis"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="category-detail-section"
                    >
                        <div className="diff-dx-grid">
                            {activeContent.differentialDiagnosis.map((item, i) => (
                                <div key={i} className="diff-dx-card">
                                    <h4 className="diff-dx-title">{item.category}</h4>
                                    <div className="diff-dx-content">
                                        <div className="diff-detail">
                                            <span className="diff-label">Objective Measures:</span>
                                            <p>{item.measurements}</p>
                                        </div>
                                        <div className="diff-detail">
                                            <span className="diff-label">Anatomical Structures:</span>
                                            <p>{item.structures}</p>
                                        </div>
                                        <div className="diff-detail">
                                            <span className="diff-label">Treatment Goals:</span>
                                            <p>{item.goals}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedPathology && (
                    <PathologyDeepDive
                        pathology={selectedPathology}
                        onClose={() => setSelectedPathology(null)}
                    />
                )}
            </AnimatePresence>

            <style>{`
                .category-tabs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                }
                .tab-btn {
                    padding: 0.5rem 1rem;
                    border-radius: 999px;
                    border: 1px solid var(--color-border);
                    background: var(--color-surface);
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .tab-btn:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                .tab-btn.active {
                    background: var(--color-primary);
                    color: white;
                    border-color: var(--color-primary);
                    box-shadow: var(--shadow-sm);
                }
                .sub-tabs-container {
                     display: flex;
                     gap: 1rem;
                     margin-bottom: 2rem;
                     padding: 0.5rem;
                     background: var(--color-surface);
                     border-radius: var(--radius-md);
                     border: 1px solid var(--color-border);
                     width: fit-content;
                }
                .sub-tab-btn {
                    background: none;
                    border: none;
                     padding: 0.5rem 1rem;
                     border-radius: var(--radius-sm);
                     color: var(--color-text-muted);
                     font-weight: 500;
                     cursor: pointer;
                     transition: all 0.2s;
                }
                .sub-tab-btn:hover {
                    color: var(--color-primary);
                    background: var(--color-background);
                }
                .sub-tab-btn.active {
                    color: var(--color-primary);
                    background: var(--color-primary-light);
                    font-weight: 600;
                }

                .test-positive {
                    display: block;
                    font-size: 0.85rem;
                    color: var(--color-secondary);
                    margin-top: 0.25rem;
                    font-style: italic;
                }
                .test-purpose {
                    color: var(--color-text-muted);
                    font-weight: normal;
                }

                .category-detail-section {
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                    box-shadow: var(--shadow-sm);
                    /* Ensure full width */
                    width: 100%;
                }
                .detail-block {
                    margin-bottom: 2rem;
                }
                .detail-block:last-child {
                    margin-bottom: 0;
                }
                .detail-block h3 {
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                    border-bottom: 2px solid var(--color-secondary);
                    display: inline-block;
                    padding-bottom: 0.25rem;
                }
                .anatomy-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }
                .anatomy-column h4 {
                    color: var(--color-secondary);
                    margin-bottom: 0.5rem;
                }
                .anatomy-column ul, .test-group ul {
                    list-style: none;
                    padding: 0;
                }
                .anatomy-column li, .test-group li {
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                    line-height: 1.4;
                }
                .tests-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                }
                .test-group {
                    background: color-mix(in srgb, var(--color-background), var(--color-surface) 50%);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                }
                .test-group h4 {
                    color: var(--color-text);
                    margin-bottom: 0.5rem;
                    border-bottom: 1px solid var(--color-border);
                    padding-bottom: 0.25rem;
                }

                .diff-dx-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .diff-dx-card {
                    background: color-mix(in srgb, var(--color-background), var(--color-surface) 50%);
                    border-radius: var(--radius-md);
                    padding: 1.25rem;
                    border-left: 4px solid var(--color-primary);
                }
                .diff-dx-title {
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                    border-bottom: 1px solid var(--color-border);
                    padding-bottom: 0.5rem;
                }
                .diff-detail {
                    margin-bottom: 0.75rem;
                }
                .diff-detail:last-child {
                    margin-bottom: 0;
                }
                .diff-label {
                    display: block;
                    font-weight: 600;
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                    margin-bottom: 0.1rem;
                }
                .diff-detail p {
                    font-size: 0.95rem;
                    line-height: 1.4;
                    margin: 0;
                    color: var(--color-text);
                }

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
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 0.25rem;
                }
                .header-left {
                    display: flex;
                    align-items: flex-start; /* Changed from center to align with new column layout */
                    gap: 0.75rem;
                    flex: 1;
                    min-width: 0; /* Important for text wrapping */
                }
                .header-text {
                    display: flex;
                    flex-direction: column;
                    gap: 0.1rem;
                    min-width: 0; /* Important for text wrapping */
                }
                .icon-wrapper {
                    background: var(--color-primary-light);
                    color: var(--color-primary);
                    padding: 0.75rem;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 0.2rem; /* Align icon visually with title block */
                }
                .header-text h3 {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.3;
                    color: var(--color-text);
                    min-height: 3.25rem;
                    display: flex;
                    align-items: center;
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
                    width: fit-content;
                }
                .category-kicker {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-primary);
                    font-weight: 700;
                }
                .card-image-container {
                    width: 100%;
                    height: 180px;
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    border: 1px solid var(--color-border);
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .card-image {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
                .placeholder-image {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: color-mix(in srgb, var(--color-background), transparent 50%);
                    color: var(--color-border);
                }
                .description {
                    font-size: 1rem;
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    margin: 0;
                    min-height: 4.8rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-align: justify;
                }
                .key-features {
                    background: color-mix(in srgb, var(--color-surface), var(--color-text) 3%);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    flex-grow: 1;
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
                    font-size: 0.95rem;
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
                    font-size: 0.95rem;
                    color: var(--color-text);
                    font-weight: 500;
                }
                .red-flag-section {
                    border-color: var(--color-danger);
                    background: var(--color-danger-light);
                }
                .red-flag-header {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-danger) !important;
                    border-bottom-color: var(--color-danger) !important;
                }
                .red-flag-group {
                    background: var(--color-surface);
                    border: 1px solid var(--color-danger);
                }
                .red-flag-group h4 {
                    color: var(--color-danger);
                }
                
                .special-test-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .test-image-container {
                    margin: 0.5rem 0;
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    border: 1px solid var(--color-border);
                    background: white;
                    display: flex;
                    justify-content: center;
                    padding: 0.5rem;
                }
                .test-image {
                    max-width: 100%;
                    height: auto;
                    max-height: 200px;
                    object-fit: contain;
                }
                .test-technique, .test-positive {
                    font-size: 0.9rem;
                    color: var(--color-text);
                    line-height: 1.4;
                }

                /* Evaluation Tab Styles */
                .exam-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    position: relative;
                    padding-left: 1rem;
                }
                .exam-timeline::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 10px;
                    bottom: 10px;
                    width: 2px;
                    background: var(--color-border);
                }
                .exam-phase {
                    position: relative;
                }
                .phase-header {
                    font-weight: 700;
                    color: var(--color-primary);
                    margin-bottom: 0.75rem;
                    background: var(--color-surface);
                    padding: 0.25rem 0;
                    display: inline-block;
                }
                .phase-steps {
                    display: grid;
                    gap: 0.75rem;
                }
                .exam-step {
                    background: color-mix(in srgb, var(--color-background), var(--color-surface) 50%);
                    padding: 0.75rem;
                    border-radius: var(--radius-sm);
                    border-left: 3px solid var(--color-primary-light);
                }
                .step-name {
                    font-weight: 600;
                    color: var(--color-text);
                    font-size: 0.95rem;
                    margin-bottom: 0.25rem;
                }
                .step-desc {
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                }

                .correlation-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.9rem;
                }
                .correlation-table th {
                    text-align: left;
                    padding: 0.75rem;
                    background: var(--color-background);
                    color: var(--color-text-muted);
                    font-weight: 600;
                    border-bottom: 2px solid var(--color-border);
                }
                .correlation-table td {
                    padding: 0.75rem;
                    border-bottom: 1px solid var(--color-border);
                    color: var(--color-text);
                    vertical-align: top;
                }
                .correlation-table tr:last-child td {
                    border-bottom: none;
                }

                .safety-box {
                    background: var(--color-danger-light);
                    border: 1px solid var(--color-danger);
                    border-radius: var(--radius-md);
                    padding: 1rem;
                }
                .safety-box h4 {
                    color: var(--color-danger);
                    margin: 0 0 1rem 0;
                    font-size: 1rem;
                }
                .criteria-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }
                .criteria-tag {
                    background: white;
                    color: var(--color-danger);
                    border: 1px solid color-mix(in srgb, var(--color-danger), transparent 70%);
                    padding: 0.25rem 0.6rem;
                    border-radius: 99px;
                    font-size: 0.85rem;
                    font-weight: 500;
                }
                .scoring-row {
                    font-size: 0.9rem;
                    color: var(--color-danger);
                    padding-top: 0.5rem;
                    border-top: 1px solid color-mix(in srgb, var(--color-danger), transparent 80%);
                }

                /* CPG Tab Styles */
                .cpg-intro {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    color: var(--color-primary);
                }
                .cpg-intro h3 {
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .cpg-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .cpg-card {
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .oa-track { border-top: 4px solid #3b82f6; }
                .fai-track { border-top: 4px solid #f97316; }
                .fx-track { border-top: 4px solid #ef4444; }

                .track-header h4 {
                    font-size: 1.1rem;
                    margin: 0 0 0.5rem 0;
                    color: var(--color-text);
                }
                .population-tag {
                    font-size: 0.8rem;
                    background: color-mix(in srgb, var(--color-text), transparent 95%);
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                    color: var(--color-text-muted);
                }
                .cpg-section h5 {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    color: var(--color-text-muted);
                    margin: 0 0 0.5rem 0;
                    border-bottom: 1px solid var(--color-border);
                    padding-bottom: 0.25rem;
                }
                .cluster-box {
                    background: color-mix(in srgb, var(--color-background), var(--color-surface) 50%);
                    padding: 0.75rem;
                    border-radius: var(--radius-sm);
                    margin-bottom: 0.75rem;
                }
                .dx-item {
                    margin-bottom: 0.75rem;
                }
                .dx-item strong {
                    color: var(--color-secondary);
                    font-size: 0.95rem;
                }
                .dx-item p {
                    margin: 0.25rem 0 0 0;
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                }
                .exercise-card {
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    padding: 1rem;
                    margin-bottom: 1rem;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                }
            `}</style>
        </>
    );
};

export default PathologyGrid;
