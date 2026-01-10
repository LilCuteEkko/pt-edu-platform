
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Activity, Brain } from 'lucide-react'; // Added Brain icon
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveBrain from './InteractiveBrain';
import PathologyGrid from './PathologyGrid';

const NeuroscienceDetail = ({ topic }) => {
    const [activeTabId, setActiveTabId] = useState(topic.subtopics[0].id);
    const activeSubtopic = topic.subtopics.find(t => t.id === activeTabId);

    return (
        <div className="neuroscience-detail container">
            <Link to="/physiology" className="back-link">
                <ArrowLeft size={20} /> Back to Systems
            </Link>

            <header className="detail-header">
                <div className="header-icon-wrapper">
                    <Brain size={48} className="header-icon" />
                </div>
                <div>
                    <h1>{topic.title}</h1>
                    <p className="lead">{topic.description}</p>
                </div>
            </header>

            <div className="neuro-layout">
                {/* Sidebar / Tabs Navigation */}
                <div className="neuro-tabs">
                    <h3>Units</h3>
                    <div className="tabs-list">
                        {topic.subtopics.map((subtopic) => (
                            <button
                                key={subtopic.id}
                                className={`tab-btn ${activeTabId === subtopic.id ? 'active' : ''}`}
                                onClick={() => setActiveTabId(subtopic.id)}
                            >
                                {activeTabId === subtopic.id && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="active-indicator"
                                    />
                                )}
                                <span className="tab-text">{subtopic.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="neuro-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSubtopic.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="content-wrapper"
                        >
                            <div className="subtopic-header">
                                <h2>{activeSubtopic.title}</h2>
                                {activeSubtopic.introduction && (
                                    <p className="intro-text">{activeSubtopic.introduction}</p>
                                )}
                            </div>

                            {/* Rendering Logic based on Type */}
                            {activeSubtopic.type === 'interactive-brain' ? (
                                <div className="interactive-wrapper">
                                    <InteractiveBrain lobes={activeSubtopic.lobes} />
                                </div>
                            ) : activeSubtopic.type === 'pathology-grid' ? (
                                <PathologyGrid
                                    pathologies={activeSubtopic.pathologies}
                                    categoryContent={activeSubtopic.categoryContent}
                                />
                            ) : (
                                // Default Text Content
                                <div className="text-content-card">
                                    {activeSubtopic.image && (
                                        <div className="subtopic-image-container">
                                            <img
                                                src={activeSubtopic.image}
                                                alt={activeSubtopic.title}
                                                className="subtopic-image"
                                            />
                                        </div>
                                    )}

                                    {activeSubtopic.content && activeSubtopic.content.length > 0 && (
                                        <ul className="key-points-list">
                                            {activeSubtopic.content.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="clinical-grid">
                                        {activeSubtopic.clinicalRelevance && (
                                            <div className="clinical-box importance">
                                                <div className="box-header">
                                                    <CheckCircle size={18} />
                                                    <span>Clinical Relevance</span>
                                                </div>
                                                <p>{activeSubtopic.clinicalRelevance}</p>
                                            </div>
                                        )}
                                        {activeSubtopic.pathologyConnection && (
                                            <div className="clinical-box pathology">
                                                <div className="box-header">
                                                    <Activity size={18} />
                                                    <span>Pathology Connection</span>
                                                </div>
                                                <p>{activeSubtopic.pathologyConnection}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
        .neuroscience-detail {
            padding-top: 2rem;
            padding-bottom: 4rem;
        }
        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--color-text-muted);
            margin-bottom: 2rem;
            text-decoration: none;
            transition: color 0.2s;
        }
        .back-link:hover {
            color: var(--color-primary);
        }
        
        .detail-header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--color-border);
        }
        .header-icon-wrapper {
            background: var(--color-primary-light);
            color: var(--color-primary);
            padding: 1rem;
            border-radius: 12px;
        }
        .detail-header h1 {
            margin: 0 0 0.5rem 0;
            font-size: 2.5rem;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .lead {
            font-size: 1.2rem;
            color: var(--color-text-muted);
            margin: 0;
            max-width: 800px;
        }

        .neuro-layout {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: 3rem;
            align-items: start;
        }
        
        .neuro-tabs {
            position: sticky;
            top: 2rem;
            background: var(--color-surface);
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            border: 1px solid var(--color-border);
        }
        .neuro-tabs h3 {
            margin: 0 0 1rem 0;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--color-text-muted);
        }
        .tabs-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .tab-btn {
            position: relative;
            text-align: left;
            background: transparent;
            border: none;
            padding: 0.75rem 1rem;
            cursor: pointer;
            border-radius: 8px;
            color: var(--color-text-muted);
            font-weight: 500;
            transition: all 0.2s;
            overflow: hidden;
        }
        .tab-btn:hover {
            color: var(--color-text);
            background: var(--color-background);
        }
        .tab-btn.active {
            color: var(--color-primary);
            background: var(--color-primary-light);
            font-weight: 600;
        }
        .active-indicator {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 3px;
            background: var(--color-primary);
            border-radius: 3px;
        }
        .tab-text {
            position: relative;
            z-index: 1;
        }

        .content-wrapper {
            background: var(--color-surface);
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.03);
            border: 1px solid var(--color-border);
        }
        .subtopic-header h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: var(--color-text);
        }
        .intro-text {
            font-size: 1.1rem;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 2rem;
            border-left: 4px solid var(--color-secondary);
            padding-left: 1rem;
        }

        .text-content-card {
            
        }
        .subtopic-image-container {
            margin-bottom: 2rem;
            border-radius: 12px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            background: #f8f9fa;
            padding: 1rem;
        }
        .subtopic-image {
            max-width: 100%;
            max-height: 400px;
            object-fit: contain;
        }
        .key-points-list {
            list-style: none;
            padding: 0;
        }
        .key-points-list li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
            line-height: 1.6;
            font-size: 1.05rem;
        }
        .key-points-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--color-primary);
            font-weight: bold;
            font-size: 1.2rem;
        }

        .clinical-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 3rem;
        }
        @media (min-width: 768px) {
            .clinical-grid {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
        }
        .clinical-box {
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid transparent;
        }
        .clinical-box.importance {
            background-color: var(--color-primary-light);
            border-color: var(--color-primary-light);
        }
        .clinical-box.pathology {
            background-color: #fff5f5; /* Light Red */
            border-color: #fed7d7;
        }
        .box-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.05em;
        }
        .importance .box-header { color: var(--color-primary); }
        .pathology .box-header { color: #e53e3e; }
        .clinical-box p {
            margin: 0;
            font-size: 0.95rem;
        }

        @media (max-width: 1024px) {
            .neuro-layout {
                grid-template-columns: 1fr;
            }
            .neuro-tabs {
                position: relative;
                top: 0;
                overflow-x: auto;
                padding: 1rem;
            }
            .tabs-list {
                flex-direction: row;
                width: max-content;
            }
            .tab-btn {
                white-space: nowrap;
            }
            .active-indicator {
                top: auto;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 3px;
                background: var(--color-primary);
            }
        }
      `}</style>
        </div>
    );
};

export default NeuroscienceDetail;
