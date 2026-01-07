import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Dumbbell, Activity, Shield, Zap, Move } from 'lucide-react';
import { exerciseTopics } from '../../data/exercises';

const iconMap = {
    Dumbbell,
    Activity,
    Shield,
    Zap,
    Move
};

const ExercisesSection = () => {
    const [activeTopic, setActiveTopic] = useState(exerciseTopics[0]);
    const IconComponent = iconMap[activeTopic.icon] || Activity;

    return (
        <div className="exercises-section" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem', alignItems: 'start', minHeight: '600px' }}>

            {/* Sidebar Navigation */}
            <div style={{
                background: 'var(--color-surface)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                position: 'sticky',
                top: '20px'
            }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Categories
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exerciseTopics.map((topic) => {
                        const TopicIcon = iconMap[topic.icon] || Activity;
                        const isActive = activeTopic.id === topic.id;

                        return (
                            <button
                                key={topic.id}
                                onClick={() => setActiveTopic(topic)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    background: isActive ? 'var(--color-primary)' : 'transparent',
                                    color: isActive ? 'white' : 'var(--color-text)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.2s',
                                    fontWeight: isActive ? 600 : 400
                                }}
                            >
                                <TopicIcon size={20} />
                                <span style={{ flex: 1 }}>{topic.title}</span>
                                {isActive && <ChevronRight size={16} />}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content */}
            <div style={{ minHeight: '600px' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTopic.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                padding: '1rem',
                                background: 'rgba(var(--color-primary-rgb), 0.1)',
                                borderRadius: '12px',
                                color: 'var(--color-primary)'
                            }}>
                                <IconComponent size={32} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{activeTopic.title}</h2>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>{activeTopic.description}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {activeTopic.subtopics.map((subtopic) => (
                                <div
                                    key={subtopic.id}
                                    style={{
                                        background: 'var(--color-surface)',
                                        borderRadius: '16px',
                                        padding: '2rem',
                                        border: '1px solid var(--color-border)',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)' }}>{subtopic.title}</h3>
                                        <span style={{
                                            fontSize: '0.875rem',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '99px',
                                            background: 'var(--color-background)',
                                            border: '1px solid var(--color-border)',
                                            color: 'var(--color-text-muted)'
                                        }}>
                                            {subtopic.id.toUpperCase()}
                                        </span>
                                    </div>

                                    <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
                                        {subtopic.introduction}
                                    </p>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                                            Core Concepts / Exercises
                                        </h4>
                                        <ul style={{ display: 'grid', gap: '0.75rem' }}>
                                            {subtopic.content.map((item, idx) => (
                                                <li key={idx} style={{
                                                    display: 'flex',
                                                    gap: '0.75rem',
                                                    lineHeight: '1.6'
                                                }}>
                                                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {subtopic.clinicalRelevance && (
                                        <div style={{
                                            marginTop: '1.5rem',
                                            background: 'rgba(var(--color-accent-rgb), 0.1)',
                                            padding: '1rem 1.5rem',
                                            borderRadius: '8px',
                                            borderLeft: '4px solid var(--color-accent)',
                                            display: 'flex',
                                            gap: '1rem'
                                        }}>
                                            <Activity size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                                            <div>
                                                <h4 style={{ color: 'var(--color-accent)', fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.9rem' }}>CLINICAL PEARL</h4>
                                                <p style={{ fontSize: '0.95rem' }}>{subtopic.clinicalRelevance}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ExercisesSection;
