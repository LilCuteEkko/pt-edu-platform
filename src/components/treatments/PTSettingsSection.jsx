import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Building2, Stethoscope, Home, Briefcase, GraduationCap, Users } from 'lucide-react';
import { ptSettings } from '../../data/ptSettings';

const iconMap = {
    Building2,
    Stethoscope,
    Home,
    Briefcase,
    GraduationCap,
    Users
};

const PTSettingsSection = () => {
    const [selectedSetting, setSelectedSetting] = useState(ptSettings[0]);
    const IconComponent = iconMap[selectedSetting.icon] || Building2;

    return (
        <div className="pt-settings-section" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem', alignItems: 'start', minHeight: '600px' }}>

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
                    Clinical Settings
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {ptSettings.map((setting) => {
                        const SettingIcon = iconMap[setting.icon] || Building2;
                        const isActive = selectedSetting.id === setting.id;

                        return (
                            <button
                                key={setting.id}
                                onClick={() => setSelectedSetting(setting)}
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
                                <SettingIcon size={20} />
                                <span style={{ flex: 1 }}>{setting.title}</span>
                                {isActive && <ChevronRight size={16} />}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content Area */}
            <div style={{ minHeight: '600px' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedSetting.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                padding: '1rem',
                                background: 'rgba(var(--color-primary-rgb), 0.1)',
                                borderRadius: '12px',
                                color: 'var(--color-primary)'
                            }}>
                                <IconComponent size={40} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1.1 }}>{selectedSetting.title}</h2>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>{selectedSetting.description}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                            {/* Overview Section */}
                            <div style={{
                                background: 'var(--color-surface)',
                                borderRadius: '16px',
                                padding: '2rem',
                                border: '1px solid var(--color-border)'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Overview</h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    {selectedSetting.overview}
                                </p>

                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Target Population</h4>
                                <p style={{ marginBottom: '1.5rem' }}>{selectedSetting.population}</p>

                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Key Features</h4>
                                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {selectedSetting.keyFeatures.map((feature, idx) => (
                                        <li key={idx} style={{ listStyleType: 'disc' }}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pros/Cons Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(16, 185, 129, 0.2)'
                                }}>
                                    <h3 style={{ color: '#10b981', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Pros
                                    </h3>
                                    <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {selectedSetting.pros.map((pro, idx) => (
                                            <li key={idx}>{pro}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(239, 68, 68, 0.2)'
                                }}>
                                    <h3 style={{ color: '#ef4444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Cons
                                    </h3>
                                    <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {selectedSetting.cons.map((con, idx) => (
                                            <li key={idx}>{con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Detailed Sections (Responsibilities, Specialties, etc.) */}
                            {selectedSetting.detailedSections && selectedSetting.detailedSections.map((section, idx) => (
                                <div key={idx} style={{
                                    background: 'var(--color-surface)',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    border: '1px solid var(--color-border)'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>{section.title}</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {section.items.map((item, i) => (
                                            <div key={i}>
                                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                                                    {item.subtitle}
                                                </h4>
                                                <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Insider Tips Section */}
                            {selectedSetting.insiderTips && (
                                <div style={{
                                    background: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    color: 'white',
                                    boxShadow: '0 10px 20px rgba(67, 56, 202, 0.2)'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <Briefcase size={28} />
                                        {selectedSetting.insiderTips.title || "Insider Info"}
                                    </h3>
                                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                                        {selectedSetting.insiderTips.tips.map((tip, idx) => (
                                            <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>
                                                    {tip.title}
                                                </h4>
                                                <p style={{ lineHeight: '1.6', opacity: 0.9 }}>{tip.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PTSettingsSection;
