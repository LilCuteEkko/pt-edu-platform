import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skull, Activity } from 'lucide-react';
import AnatomySection from '../components/anatomy/AnatomySection';
import PhysiologySection from '../components/physiology/PhysiologySection';

const AnatomyPhysiologyPage = () => {
    const [view, setView] = useState('landing'); // 'landing', 'anatomy', 'physiology'

    return (
        <div className="ap-page container">
            <AnimatePresence mode="wait">
                {view === 'landing' && (
                    <motion.div
                        key="landing"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="ap-landing"
                    >
                        <div className="landing-header">
                            <h1>Anatomy & Physiology</h1>
                            <p>Select a discipline to begin exploring.</p>
                        </div>

                        <div className="cards-container">
                            <div className="selection-card anatomy" onClick={() => setView('anatomy')}>
                                <div className="icon-wrapper">
                                    <Skull size={64} />
                                </div>
                                <h2>Anatomy</h2>
                                <p>Detailed breakdown of muscles, bones, joints, and organs.</p>
                                <span className="enter-link">Explore Anatomy &rarr;</span>
                            </div>

                            <div className="selection-card physiology" onClick={() => setView('physiology')}>
                                <div className="icon-wrapper">
                                    <Activity size={64} />
                                </div>
                                <h2>Physiology</h2>
                                <p>Core physiological systems, mechanisms, and clinical concepts.</p>
                                <span className="enter-link">Explore Physiology &rarr;</span>
                            </div>
                        </div>
                    </motion.div>
                )}

                {view === 'anatomy' && (
                    <motion.div
                        key="anatomy"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                    >
                        <AnatomySection onBack={() => setView('landing')} />
                    </motion.div>
                )}

                {view === 'physiology' && (
                    <motion.div
                        key="physiology"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                    >
                        <PhysiologySection onBack={() => setView('landing')} />
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .ap-page {
                    min-height: 80vh;
                    padding-top: 2rem;
                }
                .landing-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .landing-header h1 {
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                }
                .landing-header p {
                    color: var(--color-text-muted);
                    font-size: 1.2rem;
                }
                .cards-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 3rem;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .selection-card {
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 3rem 2rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                .selection-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--color-primary);
                }
                .icon-wrapper {
                    display: inline-flex;
                    padding: 1.5rem;
                    background: color-mix(in srgb, var(--color-primary), transparent 90%);
                    color: var(--color-primary);
                    border-radius: 50%;
                    margin-bottom: 1.5rem;
                    transition: transform 0.3s ease;
                }
                .selection-card:hover .icon-wrapper {
                    transform: scale(1.1);
                    background: var(--color-primary);
                    color: white;
                }
                .selection-card h2 {
                    font-size: 1.75rem;
                    margin-bottom: 1rem;
                }
                .selection-card p {
                    color: var(--color-text-muted);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }
                .enter-link {
                    color: var(--color-primary);
                    font-weight: 600;
                    opacity: 0;
                    transform: translateY(10px);
                    display: inline-block;
                    transition: all 0.3s ease;
                }
                .selection-card:hover .enter-link {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
        </div>
    );
};

export default AnatomyPhysiologyPage;
