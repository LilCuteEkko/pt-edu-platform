import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const JointCard = ({ joint }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            className={`joint-card ${isOpen ? 'open' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="header-text">
                    <span className="category-badge">{joint.type}</span>
                    <h3>{joint.name}</h3>
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
                            <strong>Articulation:</strong>
                            <p>{joint.articulation}</p>
                        </div>

                        <div className="detail-row">
                            <strong>Movements:</strong>
                            <ul className="movement-list">
                                {joint.movements.map((move, index) => (
                                    <li key={index}>{move}</li>
                                ))}
                            </ul>
                        </div>

                        {joint.clinicalNotes && (
                            <div className="detail-row clinical">
                                <strong>Clinical Notes:</strong>
                                <p>{joint.clinicalNotes}</p>
                            </div>
                        )}

                        {joint.mobilization && (
                            <div className="detail-row mobilization">
                                <div className="mob-header">
                                    <strong>Joint Mobilization</strong>
                                </div>
                                <div className="mob-grid">
                                    <div className="mob-item">
                                        <span className="label">Rule:</span>
                                        <span className="value">{joint.mobilization.rule}</span>
                                    </div>
                                    <div className="mob-item">
                                        <span className="label">Open Pack:</span>
                                        <span className="value">{joint.mobilization.openPack}</span>
                                    </div>
                                </div>
                                {joint.mobilization.glides && (
                                    <div className="glides-list">
                                        <strong>Glides:</strong>
                                        <ul>
                                            {joint.mobilization.glides.map((glide, idx) => (
                                                <li key={idx}>
                                                    <span className="glide-name">{glide.direction}</span>
                                                    <span className="glide-separator">→</span>
                                                    <span className="glide-effect">{glide.effect}</span>
                                                    {glide.notes && <span className="glide-notes"> ({glide.notes})</span>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .joint-card {
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--color-border);
        }
        .joint-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }
        .joint-card.open {
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
            color: var(--color-secondary);
            background: rgba(16, 185, 129, 0.1); /* Greenish tint for joints */
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
        .movement-list {
            margin: 0;
            padding-left: 1.25rem;
            color: var(--color-text);
        }
        .movement-list li {
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

        /* Mobilization Styles */
        .detail-row.mobilization {
            margin-top: 1rem;
            padding: 0;
            background-color: color-mix(in srgb, var(--color-info) 5%, transparent);
            border-radius: var(--radius-md);
            border: 1px solid color-mix(in srgb, var(--color-info) 20%, transparent);
            overflow: hidden;
        }
        .mob-header {
            background-color: color-mix(in srgb, var(--color-info) 10%, transparent);
            padding: 0.75rem 1rem;
            border-bottom: 1px solid color-mix(in srgb, var(--color-info) 20%, transparent);
        }
        .mob-header strong {
            color: var(--color-info);
            margin: 0 !important;
            font-size: 0.9rem !important;
        }
        .mob-grid {
            padding: 1rem;
            display: grid;
            gap: 0.75rem;
            background: rgba(255, 255, 255, 0.5);
        }
        :global(.dark) .mob-grid {
            background: rgba(0, 0, 0, 0.2);
        }
        .mob-item {
            display: flex;
            gap: 0.5rem;
            font-size: 0.9rem;
        }
        .mob-item .label {
            font-weight: 600;
            color: var(--color-text-muted);
            min-width: 80px;
        }
        .mob-item .value {
            color: var(--color-text);
        }
        .glides-list {
            padding: 0 1rem 1rem 1rem;
            background: rgba(255, 255, 255, 0.5);
        }
        :global(.dark) .glides-list {
            background: rgba(0, 0, 0, 0.2);
        }
        .glides-list strong {
            display: block;
            margin: 0.5rem 0 0.5rem 0;
            font-size: 0.85rem !important;
            color: var(--color-text-muted) !important;
        }
        .glides-list ul {
            margin: 0;
            padding-left: 0;
            list-style: none;
        }
        .glides-list li {
            font-size: 0.9rem;
            padding: 0.35rem 0;
            border-bottom: 1px dashed var(--color-border);
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            align-items: center;
        }
        .glides-list li:last-child {
            border-bottom: none;
        }
        .glide-name {
            font-weight: 600;
            color: var(--color-primary);
        }
        .glide-separator {
            color: var(--color-text-muted);
        }
        .glide-notes {
            color: var(--color-text-muted);
            font-style: italic;
            font-size: 0.85rem;
        }
      `}</style>
        </motion.div>
    );
};

export default JointCard;
