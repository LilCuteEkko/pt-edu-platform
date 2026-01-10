import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Activity, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import PathologyGrid from './PathologyGrid';

const VestibularDetail = ({ topic }) => {
    const [activeTab, setActiveTab] = useState('vestib-epidemiology');

    const activeSubtopic = topic.subtopics.find(s => s.id === activeTab);

    return (
        <div className="vestibular-detail container">
            <Link to="/physiology" className="back-link">
                <ArrowLeft size={20} /> Back to Systems
            </Link>

            <header className="detail-header">
                <h1>{topic.title}</h1>
                <p className="lead">{topic.description}</p>
            </header>

            <div className="tabs-container">
                <div className="tabs-scroll">
                    {topic.subtopics.map((subtopic) => (
                        <button
                            key={subtopic.id}
                            onClick={() => setActiveTab(subtopic.id)}
                            className={`tab-btn ${activeTab === subtopic.id ? 'active' : ''}`}
                        >
                            {subtopic.title.split(':')[0]} {/* Truncate long titles for tabs */}
                        </button>
                    ))}
                </div>
            </div>

            <div className="content-area">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="tab-content"
                    >
                        {activeSubtopic && (
                            <div className="subtopic-content">
                                <h2>{activeSubtopic.title}</h2>
                                {activeSubtopic.introduction && (
                                    <p className="intro-text">{activeSubtopic.introduction}</p>
                                )}

                                {activeSubtopic.id === 'vestib-pathologies' ? (
                                    <PathologyGrid
                                        pathologies={activeSubtopic.pathologies}
                                        categoryContent={activeSubtopic.categoryContent}
                                    />
                                ) : (
                                    <div className="standard-content">
                                        <div className="content-columns">
                                            <div className="main-text">
                                                {activeSubtopic.image && (
                                                    <div className="content-image">
                                                        <img src={activeSubtopic.image} alt={activeSubtopic.title} />
                                                    </div>
                                                )}
                                                {/* Smart Content Rendering */}
                                                <div className="smart-content-grid">
                                                    {(() => {
                                                        // Process content into groups (Header + Subnodes)
                                                        const groups = [];
                                                        let currentGroup = { title: null, items: [] };

                                                        activeSubtopic.content?.forEach(item => {
                                                            const isSubItem = item.trim().startsWith('-') || item.trim().startsWith('•');
                                                            const cleanItem = item.replace(/^[\s-•]+/, '');

                                                            // Check if it's a "Title:" line (often used in this data for headings) or just a plain main point
                                                            // Logic: If it's not a sub-item, start a new group.
                                                            if (!isSubItem) {
                                                                if (currentGroup.title || currentGroup.items.length > 0) {
                                                                    groups.push(currentGroup);
                                                                }
                                                                currentGroup = { title: cleanItem, items: [] };
                                                            } else {
                                                                currentGroup.items.push(cleanItem);
                                                            }
                                                        });
                                                        // Push the last group
                                                        if (currentGroup.title || currentGroup.items.length > 0) {
                                                            groups.push(currentGroup);
                                                        }

                                                        // Fallback for flat lists (no titles found)
                                                        if (groups.length === 0 && activeSubtopic.content?.length > 0) {
                                                            return (
                                                                <div className="content-group-card">
                                                                    <ul className="group-items">
                                                                        {activeSubtopic.content.map((item, i) => (
                                                                            <li key={i}>{item}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        }

                                                        return groups.map((group, idx) => (
                                                            <div key={idx} className="content-group-card">
                                                                {group.title && (
                                                                    <div className="group-header">
                                                                        <div className="header-decoration"></div>
                                                                        <h3>{group.title}</h3>
                                                                    </div>
                                                                )}
                                                                {group.items.length > 0 && (
                                                                    <ul className="group-items">
                                                                        {group.items.map((item, i) => {
                                                                            // Bold text before colon if present
                                                                            const parts = item.split(/:(.+)/);
                                                                            return (
                                                                                <li key={i}>
                                                                                    {parts.length > 1 ? (
                                                                                        <span>
                                                                                            <strong>{parts[0]}:</strong>{parts[1]}
                                                                                        </span>
                                                                                    ) : (
                                                                                        <span>{item}</span>
                                                                                    )}
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        ));
                                                    })()}
                                                </div>
                                            </div>

                                            <div className="side-panel">
                                                {activeSubtopic.clinicalRelevance && (
                                                    <div className="info-card clinical">
                                                        <div className="card-header">
                                                            <CheckCircle size={18} />
                                                            <span>Clinical Relevance</span>
                                                        </div>
                                                        <p>{activeSubtopic.clinicalRelevance}</p>
                                                    </div>
                                                )}

                                                {/* Specialized rendering for Evaluation Strategies to make it cleaner */}
                                                {activeSubtopic.id === 'vestib-eval' && (
                                                    <div className="info-card tip">
                                                        <div className="card-header">
                                                            <Info size={18} />
                                                            <span>Examination Tip</span>
                                                        </div>
                                                        <p>Always clear the C-Spine before performing positional testing (Dix-Hallpike) to prevent vertebral artery dissection.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <style>{`
                .vestibular-detail {
                    padding-top: 2rem;
                    padding-bottom: 4rem;
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-text-muted);
                    margin-bottom: 2rem;
                    transition: color 0.2s;
                }
                .back-link:hover {
                    color: var(--color-primary);
                }
                .detail-header {
                    margin-bottom: 2rem;
                    text-align: center;
                }
                .detail-header h1 {
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .lead {
                    font-size: 1.2rem;
                    color: var(--color-text-muted);
                    max-width: 700px;
                    margin: 0 auto;
                }

                /* Tabs */
                .tabs-container {
                    margin-bottom: 2rem;
                    border-bottom: 2px solid var(--color-border);
                    position: sticky;
                    top: 0;
                    background: var(--color-background);
                    z-index: 10;
                    padding-top: 1rem;
                }
                .tabs-scroll {
                    display: flex;
                    gap: 1rem;
                    overflow-x: auto;
                    padding-bottom: 0.5rem;
                    scrollbar-width: none; /* Firefox */
                }
                .tabs-scroll::-webkit-scrollbar {
                    display: none; /* Chrome/Safari */
                }
                .tab-btn {
                    background: none;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--color-text-muted);
                    cursor: pointer;
                    white-space: nowrap;
                    border-radius: var(--radius-md) var(--radius-md) 0 0;
                    transition: all 0.2s;
                    position: relative;
                }
                .tab-btn:hover {
                    color: var(--color-primary);
                    background: var(--color-surface);
                }
                .tab-btn.active {
                    color: var(--color-primary);
                    background: color-mix(in srgb, var(--color-primary), transparent 95%);
                }
                .tab-btn.active::after {
                    content: '';
                    position: absolute;
                    bottom: -0.65rem; /* Align with container border */
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: var(--color-primary);
                    border-radius: 3px 3px 0 0;
                }

                /* Content */
                .tab-content {
                    min-height: 400px;
                }
                .content-columns {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 3rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .content-columns {
                        grid-template-columns: 1fr;
                    }
                }

                .intro-text {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: var(--color-text);
                    margin-bottom: 2rem;
                    border-left: 4px solid var(--color-primary);
                    padding-left: 1rem;
                    background: var(--color-surface);
                    padding: 1rem 1rem 1rem 1.5rem;
                    border-radius: 0 var(--radius-md) var(--radius-md) 0;
                }

                .smart-content-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .content-group-card {
                    background: var(--color-surface);
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--color-border);
                    overflow: hidden;
                    box-shadow: var(--shadow-sm);
                    transition: all 0.2s ease;
                }
                .content-group-card:hover {
                    box-shadow: var(--shadow-md);
                    transform: translateY(-2px);
                    border-color: var(--color-primary-light);
                }
                .group-header {
                    background: color-mix(in srgb, var(--color-primary), transparent 95%);
                    padding: 1rem 1.5rem;
                    border-bottom: 1px solid var(--color-border);
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .header-decoration {
                    width: 4px;
                    height: 1.5rem;
                    background: var(--color-primary);
                    border-radius: 2px;
                }
                .group-header h3 {
                    margin: 0;
                    font-size: 1.1rem;
                    color: var(--color-primary);
                    font-weight: 600;
                }
                .group-items {
                    list-style: none;
                    padding: 1.5rem;
                    margin: 0;
                }
                .group-items li {
                    margin-bottom: 0.75rem;
                    line-height: 1.6;
                    color: var(--color-text);
                    position: relative;
                    padding-left: 1.25rem;
                }
                .group-items li:last-child {
                    margin-bottom: 0;
                }
                .group-items li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--color-text-muted);
                }
                .group-items strong {
                    color: var(--color-text-strong);
                    font-weight: 600;
                    margin-right: 0.25rem;
                }

                .content-image img {
                    width: 100%;
                    border-radius: var(--radius-lg);
                    margin-bottom: 2rem;
                    border: 1px solid var(--color-border);
                    box-shadow: var(--shadow-md);
                }

                /* Side Panel Cards */
                .info-card {
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    margin-bottom: 1.5rem;
                }
                .info-card.clinical {
                    background: color-mix(in srgb, var(--color-success), transparent 90%);
                    border: 1px solid color-mix(in srgb, var(--color-success), transparent 80%);
                }
                .info-card.tip {
                    background: color-mix(in srgb, var(--color-warning), transparent 90%);
                    border: 1px solid color-mix(in srgb, var(--color-warning), transparent 80%);
                }
                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    margin-bottom: 0.75rem;
                    letter-spacing: 0.05em;
                }
                .clinical .card-header { color: var(--color-success); }
                .tip .card-header { color: var(--color-warning); }

                .info-card p {
                    margin: 0;
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
            `}</style>
        </div>
    );
};

export default VestibularDetail;
