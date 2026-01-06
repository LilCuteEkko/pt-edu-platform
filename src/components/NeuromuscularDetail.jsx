import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Activity, Brain, AlertTriangle } from 'lucide-react';
import { cranialNerves } from '../data/cranialNerves';
// import BrainExplorer from './BrainExplorer'; // Deprecated for static image
import PathologyGrid from './PathologyGrid';
// import brainDiagramImg from '../assets/neuromuscular/human-brain-anatomy.png';
import InteractiveBrain from './InteractiveBrain';

const NeuromuscularDetail = ({ topic }) => {
    const [activeTab, setActiveTab] = useState('core');

    // Filter subtopics for the "Core" tab
    // We exclude 'stroke-syndromes' and 'neuro-pathologies' as they have their own tabs
    const coreSubtopics = topic.subtopics.filter(
        st => st.id !== 'stroke-syndromes' && st.id !== 'neuro-pathologies'
    );

    const strokeSubtopic = topic.subtopics.find(st => st.id === 'stroke-syndromes');
    const pathologySubtopic = topic.subtopics.find(st => st.id === 'neuro-pathologies');

    return (
        <div className="detail-page container">
            <Link to="/physiology" className="back-link">
                <ArrowLeft size={20} /> Back to Systems
            </Link>

            <header className="detail-header">
                <h1>{topic.title}</h1>
                <p className="lead">{topic.description}</p>

                <div className="nm-tabs">
                    <button
                        className={`nm-tab ${activeTab === 'core' ? 'active' : ''}`}
                        onClick={() => setActiveTab('core')}
                    >
                        Physiology
                    </button>
                    <button
                        className={`nm-tab ${activeTab === 'cranial-nerves' ? 'active' : ''}`}
                        onClick={() => setActiveTab('cranial-nerves')}
                    >
                        Cranial Nerves
                    </button>
                    <button
                        className={`nm-tab ${activeTab === 'stroke' ? 'active' : ''}`}
                        onClick={() => setActiveTab('stroke')}
                    >
                        Stroke (CVA)
                    </button>
                    <button
                        className={`nm-tab ${activeTab === 'pathologies' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pathologies')}
                    >
                        Pathologies
                    </button>
                </div>
            </header>

            <div className="nm-content">
                <AnimatePresence mode="wait">

                    {/* CORE PHYSIOLOGY TAB */}
                    {activeTab === 'core' && (
                        <motion.div
                            key="core"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {coreSubtopics.map((subtopic, index) => (
                                <div key={subtopic.id} className="subtopic-section">
                                    <h2>{subtopic.title}</h2>
                                    {subtopic.introduction && (
                                        <p className="intro-text" style={{ marginBottom: '1rem' }}>{subtopic.introduction}</p>
                                    )}

                                    {subtopic.type === 'interactive-brain' ? (
                                        <InteractiveBrain lobes={subtopic.lobes} />
                                    ) : (
                                        <div className="content-card">
                                            <ul className="key-points">
                                                {subtopic.content.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                            <div className="clinical-grid">
                                                <div className="clinical-box importance">
                                                    <div className="box-header">
                                                        <CheckCircle size={18} />
                                                        <span>Clinical Relevance</span>
                                                    </div>
                                                    <p>{subtopic.clinicalRelevance}</p>
                                                </div>
                                                {subtopic.pathologyConnection && (
                                                    <div className="clinical-box pathology">
                                                        <div className="box-header">
                                                            <Activity size={18} />
                                                            <span>Pathology Connection</span>
                                                        </div>
                                                        <p>{subtopic.pathologyConnection}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                    }
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* CRANIAL NERVES TAB */}
                    {activeTab === 'cranial-nerves' && (
                        <motion.div
                            key="cranial-nerves"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="subtopic-section">
                                <h2>Cranial Nerves</h2>
                                <p className="intro-text">
                                    The 12 pairs of cranial nerves emerge directly from the brain and brainstem.
                                    Screening them allows for precise localization of neurological lesions.
                                </p>
                                <div className="cn-grid">
                                    {cranialNerves.map(cn => (
                                        <div key={cn.id} className="cn-card">
                                            <div className="cn-header">
                                                <span className="cn-badge">{cn.number}</span>
                                                <h3>{cn.name}</h3>
                                                <span className={`cn-type type-${cn.type.toLowerCase()}`}>{cn.type}</span>
                                            </div>
                                            <div className="cn-body">
                                                <div className="cn-row">
                                                    <strong>Function:</strong> {cn.function}
                                                </div>
                                                <div className="cn-row">
                                                    <strong>Test:</strong> {cn.test}
                                                </div>
                                                <div className="cn-row pathology">
                                                    <strong>Pathology:</strong> {cn.pathology}
                                                </div>
                                                <div className="cn-row relevance">
                                                    <strong>PT Impact:</strong> {cn.ptRelevance}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STROKE TAB */}
                    {activeTab === 'stroke' && (
                        <motion.div
                            key="stroke"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {strokeSubtopic ? (
                                <div className="subtopic-section">
                                    <h2>{strokeSubtopic.title}</h2>
                                    <p className="intro-text">{strokeSubtopic.introduction}</p>
                                    <PathologyGrid pathologies={strokeSubtopic.pathologies} />
                                </div>
                            ) : (
                                <p>Content not found.</p>
                            )}
                        </motion.div>
                    )}

                    {/* PATHOLOGIES TAB */}
                    {activeTab === 'pathologies' && (
                        <motion.div
                            key="pathologies"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {pathologySubtopic ? (
                                <div className="subtopic-section">
                                    <h2>{pathologySubtopic.title}</h2>
                                    <p className="intro-text">{pathologySubtopic.introduction}</p>
                                    <PathologyGrid pathologies={pathologySubtopic.pathologies} />
                                </div>
                            ) : (
                                <p>Content not found.</p>
                            )}
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

            <style>{`
        .detail-page {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }
        .back-link:hover {
          color: var(--color-primary);
        }
        .detail-header {
          margin-bottom: 2rem;
          border-bottom: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
          padding-bottom: 2rem;
        }
        .lead {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        .nm-tabs {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        .nm-tab {
          padding: 0.75rem 1.5rem;
          border: none;
          background: var(--color-surface);
          color: var(--color-text-muted);
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          border: 1px solid var(--color-border);
          transition: all 0.2s;
        }
        .nm-tab.active {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }
        .nm-tab:hover:not(.active) {
            background: color-mix(in srgb, var(--color-surface), var(--color-text) 5%);
        }

        /* Reusing styles from PhysiologyDetail */
        .subtopic-section { margin-bottom: 3rem; }
        .subtopic-section h2 { color: var(--color-primary); margin-bottom: 1rem; font-size: 1.5rem; }
        .content-card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid #e2e8f0; overflow: hidden; }
        .key-points { padding: 2rem; margin: 0; list-style-type: none; }
        .key-points li { margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative; }
        .key-points li::before { content: "•"; color: var(--color-primary); position: absolute; left: 0; font-weight: bold; }
        .clinical-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .clinical-box { padding: 1.5rem 2rem; border-top: 1px solid color-mix(in srgb, var(--color-text), transparent 90%); }
        .clinical-box.importance { background: var(--color-primary-light); }
        .clinical-box.pathology { background: var(--color-danger-light); border-left: none; } /* Red accent for pathology */
        .box-header { display: flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--color-primary); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; }
        .clinical-box p { margin: 0; color: var(--color-text); font-weight: 500; }

        /* Cranial Nerve Cards */
        .cn-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .cn-card {
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          transition: transform 0.2s;
        }
        .cn-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .cn-header {
          padding: 1rem;
          background: color-mix(in srgb, var(--color-surface), var(--color-text) 3%);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .cn-badge {
          background: var(--color-text);
          color: var(--color-surface);
          font-weight: bold;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          min-width: 30px;
          text-align: center;
        }
        .cn-header h3 {
          margin: 0;
          flex: 1;
          font-size: 1.1rem;
        }
        .cn-type {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 999px;
        }
        .cn-type.type-sensory { background: #dbeafe; color: #1e40af; }
        .cn-type.type-motor { background: #fee2e2; color: #991b1b; }
        .cn-type.type-both { background: #f3e8ff; color: #6b21a8; }
        
        .cn-body { padding: 1rem; font-size: 0.95rem; }
        .cn-row { margin-bottom: 0.75rem; }
        .cn-row:last-child { margin-bottom: 0; }
        .cn-row strong { display: block; color: var(--color-text-muted); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.2rem; }
      `}</style>
        </div>
    );
};

export default NeuromuscularDetail;
