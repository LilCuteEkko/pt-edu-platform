import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, AlertTriangle, Zap, Thermometer, Hand, Hammer, Activity } from 'lucide-react'; // Simulating likely icons
import { modalities } from '../data/modalities';

const ModalitiesPage = () => {
    const [selectedModality, setSelectedModality] = useState(modalities[0]);

    return (
        <div className="modalities-page container" style={{ display: 'flex', gap: '2rem', padding: '2rem 0', minHeight: '80vh' }}>

            {/* Sidebar Navigation */}
            <div className="modalities-sidebar" style={{ width: '300px', flexShrink: 0 }}>
                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>PT Modalities</h2>
                <div className="modality-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {modalities.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedModality(item)}
                            style={{
                                textAlign: 'left',
                                padding: '1rem',
                                borderRadius: '8px',
                                background: selectedModality.id === item.id ? 'var(--color-primary)' : 'var(--color-surface)',
                                color: selectedModality.id === item.id ? 'white' : 'var(--color-text)',
                                border: '1px solid var(--color-border)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <span>{item.title}</span>
                            {selectedModality.id === item.id && <ChevronRight size={16} />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="modality-content" style={{ flex: 1, background: 'var(--color-surface)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedModality.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                background: 'var(--color-secondary)',
                                color: 'var(--color-primary)',
                                borderRadius: '99px',
                                fontSize: '0.85rem',
                                fontWeight: 600
                            }}>
                                {selectedModality.category}
                            </span>
                        </div>

                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {selectedModality.title}
                        </h1>

                        {selectedModality.imageUrl && (
                            <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                                <img src={selectedModality.imageUrl} alt={selectedModality.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        )}

                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                            {selectedModality.description}
                        </p>

                        <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div className="info-card" style={{ background: 'rgba(var(--color-surface-rgb), 0.5)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981' }}>
                                    <Activity size={20} /> Indications
                                </h3>
                                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {selectedModality.indications.map((ind, i) => (
                                        <li key={i}>{ind}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="info-card" style={{ background: 'rgba(var(--color-surface-rgb), 0.5)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444' }}>
                                    <AlertTriangle size={20} /> Contraindications
                                </h3>
                                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {selectedModality.contraindications.map((con, i) => (
                                        <li key={i}>{con}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-background)', borderRadius: '8px', marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Mechanism of Action</h3>
                            <p>{selectedModality.mechanism}</p>
                        </div>

                        {/* Markdown-like content rendering */}
                        <div className="deep-dive" style={{ lineHeight: '1.7' }}>
                            {selectedModality.content.split('\n').map((line, i) => {
                                const cleanLine = line.trim();
                                if (cleanLine.startsWith('### ')) return <h3 key={i} style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>{cleanLine.replace('### ', '')}</h3>
                                if (cleanLine.startsWith('#### ')) return <h4 key={i} style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>{cleanLine.replace('#### ', '')}</h4>
                                if (cleanLine.startsWith('- ')) return <li key={i} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}><strong>{cleanLine.replace('- ', '').split(':')[0]}:</strong>{cleanLine.replace('- ', '').split(':')[1] || ''}</li>
                                if (cleanLine === '') return <br key={i} />;
                                return <p key={i} style={{ marginBottom: '0.5rem' }}>{cleanLine}</p>
                            })}
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ModalitiesPage;
