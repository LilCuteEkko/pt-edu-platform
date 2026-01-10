import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
// import { useState } from 'react';

const TendonCard = ({ tendon, onClick }) => {
    return (
        <motion.div
            layoutId={`card-${tendon.id}`}
            onClick={onClick}
            className="tendon-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="card-image-container">
                <img
                    src={tendon.imageUrl}
                    alt={tendon.name}
                    className="card-image"
                />
                <div className="image-overlay" />
                <div className="card-header-content">
                    <span className="category-badge">
                        {tendon.category}
                    </span>
                    <h3 className="card-title">{tendon.name}</h3>
                </div>
            </div>

            <div className="card-content">
                <div className="detail-row">
                    <h4>Location</h4>
                    <p>{tendon.location}</p>
                </div>

                <div className="detail-row">
                    <h4>Contents</h4>
                    <p>{tendon.contents}</p>
                </div>

                {tendon.clinicalNotes && (
                    <div className="detail-row clinical">
                        <h4>Clinical Notes</h4>
                        <p>{tendon.clinicalNotes}</p>
                    </div>
                )}
            </div>

            <style>{`
                .tendon-card {
                    background: var(--color-surface);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-sm);
                    cursor: pointer;
                    border: 1px solid var(--color-border, #e2e8f0);
                    transition: box-shadow 0.2s;
                }
                .tendon-card:hover {
                    box-shadow: var(--shadow-md);
                    border-color: var(--color-primary);
                }
                .card-image-container {
                    height: 12rem;
                    position: relative;
                    overflow: hidden;
                    background: var(--color-secondary);
                }
                .card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.9;
                }
                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                }
                .card-header-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 1rem;
                    width: 100%;
                }
                .category-badge {
                    display: inline-block;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #60a5fa; /* Blue-400 */
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    background: rgba(96, 165, 250, 0.2);
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                    margin-bottom: 0.25rem;
                    backdrop-filter: blur(4px);
                }
                .card-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: white;
                    margin: 0;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }
                .card-content {
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .detail-row h4 {
                    color: var(--color-text-muted);
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                }
                .detail-row p {
                    color: var(--color-text);
                    font-size: 0.875rem;
                    margin: 0;
                    line-height: 1.4;
                }
                .detail-row.clinical {
                    margin-top: 0.5rem;
                    padding-top: 0.75rem;
                    border-top: 1px solid var(--color-border, #e2e8f0);
                }
                .detail-row.clinical h4 {
                    color: var(--color-danger);
                }
                .detail-row.clinical p {
                    font-style: italic;
                }
            `}</style>
        </motion.div>
    );
};

export default TendonCard;
