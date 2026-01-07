import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const NerveCard = ({ nerve }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            className={`nerve-card ${isOpen ? 'open' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="header-text">
                    <span className="category-badge">{nerve.type}</span>
                    <h3>{nerve.name}</h3>
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
                        <div className="detail-row">
                            <strong>Origin:</strong>
                            <p>{nerve.origin}</p>
                        </div>

                        <div className="detail-row">
                            <strong>Course:</strong>
                            <p>{nerve.course}</p>
                        </div>

                        {nerve.branches && nerve.branches.length > 0 && (
                            <div className="detail-row">
                                <strong>Branches:</strong>
                                <ul className="detail-list">
                                    {nerve.branches.map((branch, index) => (
                                        <li key={index}>{branch}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {nerve.innervation && nerve.innervation.length > 0 && (
                            <div className="detail-row">
                                <strong>Innervation:</strong>
                                <ul className="detail-list">
                                    {nerve.innervation.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {nerve.clinicalNotes && (
                            <div className="detail-row clinical">
                                <strong>Clinical Notes:</strong>
                                <p>{nerve.clinicalNotes}</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .nerve-card {
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--color-border);
        }
        .nerve-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }
        .nerve-card.open {
            border-color: var(--color-primary);
        }
        .card-header {
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            min-height: 80px;
        }
        .header-text h3 {
            margin: 0;
            font-size: 1.125rem;
            color: var(--color-text);
        }
        .category-badge {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 600;
            color: #EAB308; /* Yellow for nerves */
            background: rgba(234, 179, 8, 0.1);
            padding: 0.25rem 0.5rem;
            border-radius: 999px;
            margin-bottom: 0.5rem;
        }
        .toggle-btn {
            background: none;
            border: none;
            color: var(--color-text-muted);
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: background 0.2s;
            display: flex;
        }
        .card-content {
          padding: 0 1.5rem 1.5rem 1.5rem;
          border-top: 1px solid var(--color-border);
        }
        .detail-row {
          margin-bottom: 1rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .detail-row strong {
          display: block;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .detail-row p {
            color: var(--color-text);
        }
        .detail-list {
            margin: 0;
            padding-left: 1.25rem;
            color: var(--color-text);
        }
        .detail-list li {
            margin-bottom: 0.25rem;
        }
        .detail-row.clinical {
          margin-top: 1rem;
          padding: 1rem;
          background-color: color-mix(in srgb, var(--color-accent) 10%, transparent);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--color-accent);
        }
        .detail-row.clinical strong {
             color: var(--color-accent);
        }
        .detail-row.clinical p {
             margin: 0;
             color: var(--color-text);
             font-weight: 500;
        }
      `}</style>
        </motion.div>
    );
};

export default NerveCard;
