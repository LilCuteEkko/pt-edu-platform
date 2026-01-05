import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const MuscleCard = ({ muscle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`muscle-card ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="header-text">
          <span className="category-badge">{muscle.category}</span>
          <h3>{muscle.name}</h3>
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
            {muscle.imageUrl && (
              <div className="muscle-image-container">
                <img src={muscle.imageUrl} alt={muscle.name} className="muscle-image" />
              </div>
            )}
            <div className="detail-row">
              <strong>Origin:</strong>
              <p>{muscle.origin}</p>
            </div>
            <div className="detail-row">
              <strong>Insertion:</strong>
              <p>{muscle.insertion}</p>
            </div>
            <div className="detail-row">
              <strong>Nerve:</strong>
              <p>{muscle.nerve}</p>
            </div>
            <div className="detail-row">
              <strong>Action:</strong>
              <p>{muscle.action}</p>
            </div>
            {muscle.clinicalNotes && (
              <div className="detail-row clinical">
                <strong>Clinical Notes:</strong>
                <p>{muscle.clinicalNotes}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .muscle-card {
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--color-background-alt);
        }
        .muscle-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .muscle-card.open {
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
          color: var(--color-secondary);
        }
        .category-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-primary);
          background: rgba(14, 116, 144, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 999px;
          margin-bottom: 0.5rem;
        }
        .toggle-btn {
          background: none;
          border: none;
          color: var(--color-tertiary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background 0.2s;
          display: flex;
        }
        .toggle-btn:hover {
            background: color-mix(in srgb, var(--color-surface), var(--color-text) 5%);
        }
        .card-content {
          padding: 0 1.5rem 1.5rem 1.5rem;
          border-top: 1px solid #f1f5f9;
        }
        .detail-row {
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .detail-row:last-child {
          margin-bottom: 0;
        }
        .detail-row strong {
          display: block;
          color: var(--color-tertiary);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .detail-row.clinical {
          margin-top: 1rem;
          padding: 1rem;
          background-color: var(--color-accent-light);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--color-accent);
        }
        .detail-row.clinical strong {
          color: var(--color-secondary); 
          display: block;
          margin-bottom: 0.25rem;
        }
        .detail-row.clinical p {
          margin: 0;
          color: var(--color-text); /* Key fix: Ensures text is visible in dark mode */
          font-weight: 500;
        }
        .muscle-image-container {
          margin-bottom: 1.5rem;
          margin-top: 1.5rem; /* Add spacing from top */
          border-radius: var(--radius-md);
          overflow: hidden;
          background: color-mix(in srgb, var(--color-surface), var(--color-text) 5%);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
        }
        .muscle-image {
          max-width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </motion.div>
  );
};

export default MuscleCard;
