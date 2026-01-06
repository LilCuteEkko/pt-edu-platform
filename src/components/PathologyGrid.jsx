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
                    {['Condition Cards', 'Anatomy', 'Special Tests', 'Red Flags', 'Function & ROM'].map(tab => (
                        activeContent[tab === 'Condition Cards' ? 'pathologyInfo' : (tab === 'Function & ROM' ? 'function' : (tab === 'Special Tests' ? 'specialTests' : (tab === 'Red Flags' ? 'redFlags' : 'anatomy')))] || tab === 'Condition Cards' ? (
                            <button
                                key={tab}
                                className={`sub-tab-btn ${subTab === tab ? 'active' : ''}`}
                                onClick={() => setSubTab(tab)}
                            >
                                {tab}
                            </button>
                        ) : null
                    ))}
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
            `}</style>
        </>
    );
};

export default PathologyGrid;
