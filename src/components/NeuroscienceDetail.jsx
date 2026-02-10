import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Activity, Brain } from 'lucide-react'; // Added Brain icon
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveBrain from './InteractiveBrain';
import PathologyGrid from './PathologyGrid';

import './NeuroscienceDetail.css';

const ContentRenderer = ({ content }) => {
    if (!content) return null;

    return (
        <div className="content-body">
            {content.map((block, i) => {
                // Handle legacy string content (fallback)
                if (typeof block === 'string') {
                    return <p key={i} className="legacy-text">{block}</p>;
                }

                // Handle Structured Content
                if (block.type === 'section') {
                    return (
                        <div key={i} className="content-section">
                            {block.title && <h3 className="section-title">{block.title}</h3>}
                            <ul className="modern-list">
                                {block.items.map((item, j) => {
                                    // Simple parser for **Bold**
                                    const parts = item.split(/(\*\*.*?\*\*)/g);
                                    return (
                                        <li key={j}>
                                            {parts.map((part, k) => {
                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                    return <strong key={k}>{part.slice(2, -2)}</strong>;
                                                }
                                                return part;
                                            })}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                }

                // Simple Text Block
                if (block.type === 'text') {
                    return <p key={i} className="section-text">{block.value}</p>;
                }

                return null;
            })}
        </div>
    );
};

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

                                    <ContentRenderer content={activeSubtopic.content} />

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

        </div>
    );
};

export default NeuroscienceDetail;
