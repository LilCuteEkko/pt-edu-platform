import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, AlertTriangle, Activity, Clipboard, ArrowLeft, Bandage } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntegumentaryDetail = ({ topic }) => {
    // Default to the first subtopic if available
    const [activeTab, setActiveTab] = useState(topic.subtopics[0]?.id || '');

    if (!topic) return <div>Loading...</div>;

    // Helper to get icon for tab
    const getIcon = (id) => {
        switch (id) {
            case 'wound-assessment': return Clipboard;
            case 'pathologies-integ': return AlertTriangle;
            case 'wound-dressings': return Bandage;
            case 'pt-management-integ': return Activity;
            default: return Layers;
        }
    };

    const renderAssessment = (subtopic) => (
        <div className="subtopic-content">
            <p className="lead-text">{subtopic.introduction}</p>

            {/* Standard Content List */}
            <div className="info-grid">
                <div className="content-card">
                    <h3>Key Assessment Parameters</h3>
                    <ul className="params-list">
                        {subtopic.content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Clinical Relevance Box */}
                {subtopic.clinicalRelevance && (
                    <div className="clinical-box importance">
                        <h4>Clinical Relevance</h4>
                        <p>{subtopic.clinicalRelevance}</p>
                    </div>
                )}
            </div>

            {/* Images */}
            {subtopic.images && (
                <div className="images-section">
                    {subtopic.images.map((img, idx) => (
                        <div key={idx} className="image-card">
                            <img src={img.url} alt={img.caption} />
                            <p className="caption">{img.caption}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Tables */}
            {subtopic.tables && subtopic.tables.map((table, idx) => (
                <div key={idx} className="table-container">
                    <h3>{table.title}</h3>
                    <div className="table-responsive">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    {table.headers.map((h, i) => <th key={i}>{h}</th>)}
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
                </div>
            ))}
        </div>
    );

    const renderDressings = (subtopic) => (
        <div className="subtopic-content">
            <div className="intro-section">
                <p>{subtopic.introduction}</p>
                <div className="clinical-box tip">
                    <p>{subtopic.clinicalRelevance}</p>
                </div>
            </div>

            {/* Content (Golden Rules) */}
            <ul className="key-points">
                {subtopic.content.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>

            <div className="dressings-grid">
                {subtopic.dressingTypes?.map((dressing, idx) => (
                    <div key={idx} className="dressing-card">
                        <div className="dressing-header">
                            <img src={dressing.icon} alt={dressing.name} className="dressing-icon" />
                            <h3>{dressing.name}</h3>
                        </div>
                        <p className="dressing-desc">{dressing.description}</p>

                        <div className="dressing-details">
                            <div className="detail-row indications">
                                <strong>Indications:</strong>
                                <span>{dressing.indications}</span>
                            </div>
                            <div className="detail-row contraindications">
                                <strong>Contraindications:</strong>
                                <span>{dressing.contraindications}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPathologies = (subtopic) => (
        <div className="subtopic-content">
            <p>{subtopic.introduction}</p>

            {/* Comparison Visuals */}
            {subtopic.visuals?.map((vis, idx) => (
                vis.type === 'comparison' && (
                    <div key={idx} className="comparison-visuals">
                        {vis.items.map((item, i) => (
                            <div key={i} className="visual-item">
                                <img src={item.img} alt={item.label} />
                                <h4>{item.label}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                )
            ))}

            {/* Tables */}
            {subtopic.tables?.map((table, idx) => (
                <div key={idx} className="table-container">
                    <h3>{table.title}</h3>
                    <div className="table-responsive">
                        <table className="data-table compact">
                            <thead>
                                <tr>
                                    {table.headers.map((h, i) => <th key={i}>{h}</th>)}
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
                </div>
            ))}
        </div>
    );

    const renderManagement = (subtopic) => (
        <div className="subtopic-content">
            <p>{subtopic.introduction}</p>

            <div className="content-card">
                <h3>Interventions</h3>
                <ul className="key-points">
                    {subtopic.content.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
            </div>

            <h3 style={{ marginTop: '2rem' }}>Modality Guide</h3>
            <div className="modalities-grid">
                {subtopic.modalityGuide?.map((mod, idx) => (
                    <div key={idx} className="modality-card">
                        <h4>{mod.name}</h4>
                        <p>{mod.use}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderContent = (tabId) => {
        const subtopic = topic.subtopics.find(s => s.id === tabId);
        if (!subtopic) return null;

        switch (tabId) {
            case 'wound-assessment': return renderAssessment(subtopic);
            case 'wound-dressings': return renderDressings(subtopic);
            case 'pathologies-integ': return renderPathologies(subtopic);
            case 'pt-management-integ': return renderManagement(subtopic);
            default: return renderAssessment(subtopic); // Fallback
        }
    };

    return (
        <div className="integumentary-page container">
            <Link to="/physiology" className="back-link">
                <ArrowLeft size={20} /> Back to Systems
            </Link>

            <header className="detail-header">
                <h1>{topic.title}</h1>
                <p className="lead">{topic.description}</p>
            </header>

            {/* Dynamic Tabs */}
            <div className="category-tabs">
                {topic.subtopics.map(sub => {
                    const Icon = getIcon(sub.id);
                    return (
                        <button
                            key={sub.id}
                            className={`tab-btn ${activeTab === sub.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(sub.id)}
                        >
                            <Icon size={18} />
                            {sub.title}
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="content-area">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {renderContent(activeTab)}
                    </motion.div>
                </AnimatePresence>
            </div>

            <style>{`
                .integumentary-page {
                    padding-top: 3rem;
                    padding-bottom: 5rem;
                }
                .detail-header {
                    margin-bottom: 3rem;
                    border-bottom: 1px solid var(--color-border);
                    padding-bottom: 2rem;
                }
                .detail-header h1 {
                    color: var(--color-primary);
                    margin-bottom: 0.75rem;
                    font-size: 2.5rem;
                    letter-spacing: -0.025em;
                }
                .lead {
                    font-size: 1.25rem;
                    color: var(--color-text-muted);
                    line-height: 1.7;
                    max-width: 800px;
                }

                /* Tab Navigation */
                .category-tabs {
                    display: flex;
                    gap: 1rem;
                    border-bottom: 1px solid var(--color-border);
                    margin-bottom: 3rem;
                    overflow-x: auto;
                    padding-bottom: 2px;
                }
                .tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 1.5rem;
                    background: transparent;
                    border: none;
                    border-bottom: 3px solid transparent;
                    color: var(--color-text-muted);
                    font-weight: 600;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.2s ease;
                    font-size: 1rem;
                }
                .tab-btn:hover {
                    color: var(--color-primary);
                    background: var(--color-surface-hover);
                }
                .tab-btn.active {
                    color: var(--color-primary);
                    border-bottom-color: var(--color-primary);
                }

                /* Layout & Typography */
                .subtopic-content {
                    animation: fadeIn 0.4s ease-out;
                }
                .lead-text {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: var(--color-text);
                    margin-bottom: 2rem;
                    max-width: 900px;
                }
                h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: var(--color-text);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                /* Cards & Grids */
                .content-card {
                    background: var(--color-surface);
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    box-shadow: var(--shadow-md);
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .content-card:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-lg);
                }

                .info-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 2rem;
                    margin-bottom: 3rem;
                }
                @media (max-width: 900px) {
                    .info-grid { grid-template-columns: 1fr; }
                }

                /* Lists */
                .params-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .params-list li {
                    padding: 0.75rem 0;
                    border-bottom: 1px solid var(--color-border);
                    display: flex;
                    align-items: flex-start;
                }
                .params-list li:last-child { border-bottom: none; }
                .params-list li::before {
                    content: "•";
                    color: var(--color-primary);
                    font-weight: bold;
                    margin-right: 0.75rem;
                    font-size: 1.25rem;
                    line-height: 1;
                }

                /* Clinical Boxes */
                .clinical-box {
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                    border-left: 4px solid var(--color-primary);
                    background: var(--color-primary-light);
                }
                .clinical-box h4 {
                    color: var(--color-primary);
                    margin: 0 0 0.5rem 0;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .clinical-box p { margin: 0; color: var(--color-text); }
                
                /* Images Grid */
                .images-section {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    margin: 3rem 0;
                }
                .image-card {
                    background: var(--color-surface);
                    padding: 1rem;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-sm);
                    text-align: center;
                }
                .image-card img {
                    max-width: 100%;
                    height: auto;
                    border-radius: var(--radius-md);
                    margin-bottom: 1rem;
                }
                .caption {
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                    font-style: italic;
                }

                /* Modern Tables */
                .table-container {
                    margin: 3rem 0;
                    background: var(--color-surface);
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-md);
                    overflow: hidden;
                    border: 1px solid var(--color-border);
                }
                .table-container h3 {
                    background: var(--color-bg);
                    padding: 1.25rem 2rem;
                    margin: 0;
                    font-size: 1.1rem;
                    border-bottom: 1px solid var(--color-border);
                }
                .data-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .data-table th {
                    background: var(--color-bg);
                    color: var(--color-text-muted);
                    font-weight: 600;
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    letter-spacing: 0.05em;
                    padding: 1rem 2rem;
                    text-align: left;
                }
                .data-table td {
                    padding: 1.25rem 2rem;
                    border-top: 1px solid var(--color-border);
                    color: var(--color-text);
                }
                .data-table tr:hover td {
                    background: var(--color-primary-light);
                }

                /* Dressing Cards */
                .dressings-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }
                .dressing-card {
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                .dressing-card:hover {
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    transform: translateY(-4px);
                    border-color: var(--color-primary);
                }
                .dressing-icon {
                    width: 72px;
                    height: 72px;
                    object-fit: contain;
                    margin-bottom: 1.5rem;
                    border-radius: 12px; /* Soften the white box edges */
                    background: white; /* Ensure consistent background if transparent */
                    padding: 4px;
                }
                .dressing-card h3 {
                    margin-bottom: 0.75rem;
                    color: var(--color-primary);
                    font-size: 1.5rem; /* Larger header */
                    line-height: 1.2;
                }
                .dressing-desc {
                    color: var(--color-text-muted);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                    font-size: 1rem;
                    flex-grow: 1; /* Push details to bottom */
                }
                .dressing-details {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem; /* More space between rows */
                    font-size: 0.95rem; /* Slightly larger text */
                    padding-top: 1.5rem;
                    border-top: 1px solid var(--color-border);
                }
                .detail-row {
                    display: grid;
                    grid-template-columns: 140px 1fr; /* Increased from 120px to avoid collision */
                    gap: 1rem;
                    align-items: baseline; /* Align text properly */
                }
                .detail-row strong {
                    color: var(--color-text); /* Ensure contrast */
                    font-weight: 600;
                    font-size: 0.9rem;
                    letter-spacing: 0.02em;
                }
                .indications span { 
                    color: var(--color-success, #10b981); 
                    font-weight: 500;
                    line-height: 1.5;
                    display: block;
                }
                .contraindications span { 
                    color: var(--color-danger); 
                    font-weight: 500;
                    line-height: 1.5;
                    display: block;
                }

                /* Comparisons */
                .comparison-visuals {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin: 3rem 0;
                }
                .visual-item {
                    background: var(--color-surface);
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-md);
                    text-align: center;
                    border: 1px solid var(--color-border);
                }
                .visual-item img {
                    height: 180px;
                    margin-bottom: 1.5rem;
                }
                .visual-item h4 {
                    color: var(--color-primary);
                    margin-bottom: 0.5rem;
                    font-size: 1.25rem;
                }

                /* Animations */
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default IntegumentaryDetail;
