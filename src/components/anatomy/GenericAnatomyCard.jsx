import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './AnatomyCard.css';

const GenericAnatomyCard = ({
    title,
    subtitle,
    category,
    color = 'var(--color-primary)',
    image,
    children,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Dynamic style for the specific card color
    const cardStyle = {
        '--card-color': color,
        '--card-bg-subtle': `color-mix(in srgb, ${color} 10%, transparent)`
    };

    return (
        <motion.div
            layout
            className={`anatomy-card ${isOpen ? 'open' : ''} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={cardStyle}
        >
            <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="header-text">
                    <span className="category-badge">{category}</span>
                    <h3>{title}</h3>
                    {subtitle && <span className="subtitle" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'block', marginTop: '0.2rem' }}>{subtitle}</span>}
                </div>
                <button className="toggle-btn">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="card-content"
                    >
                        {image && (
                            <div className="card-image-container">
                                <img src={image} alt={title} className="card-image" />
                            </div>
                        )}

                        {/* Render specific card details here */}
                        {children}

                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default GenericAnatomyCard;
