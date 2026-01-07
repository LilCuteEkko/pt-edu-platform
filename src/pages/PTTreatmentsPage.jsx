import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Activity } from 'lucide-react';
import ModalitiesSection from '../components/treatments/ModalitiesSection';
import ExercisesSection from '../components/treatments/ExercisesSection';

const PTTreatmentsPage = () => {
    const [activeTab, setActiveTab] = useState('modalities');

    return (
        <div className="pt-treatments-page" style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Physical Therapy Treatments
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                    Explore comprehensive guides on therapeutic modalities and exercise interventions.
                </p>
            </div>

            {/* Tab Navigation */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '3rem'
            }}>
                <button
                    onClick={() => setActiveTab('modalities')}
                    style={{
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        background: activeTab === 'modalities' ? 'var(--color-primary)' : 'var(--color-surface)',
                        color: activeTab === 'modalities' ? 'white' : 'var(--color-text)',
                        border: '1px solid var(--color-border)',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.2s',
                        boxShadow: activeTab === 'modalities' ? '0 4px 12px rgba(var(--color-primary-rgb), 0.3)' : 'none'
                    }}
                >
                    <Zap size={20} />
                    Modalities
                </button>
                <button
                    onClick={() => setActiveTab('exercises')}
                    style={{
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        background: activeTab === 'exercises' ? 'var(--color-primary)' : 'var(--color-surface)',
                        color: activeTab === 'exercises' ? 'white' : 'var(--color-text)',
                        border: '1px solid var(--color-border)',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.2s',
                        boxShadow: activeTab === 'exercises' ? '0 4px 12px rgba(var(--color-primary-rgb), 0.3)' : 'none'
                    }}
                >
                    <Activity size={20} />
                    Therapeutic Exercises
                </button>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === 'modalities' ? <ModalitiesSection /> : <ExercisesSection />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PTTreatmentsPage;
