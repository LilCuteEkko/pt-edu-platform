import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const OrganCard = ({ organ }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`organ-card ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="header-text">
          <span className="system-badge">{organ.system}</span>
          <h3>{organ.name}</h3>
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
            <div className="organ-image-container">
              {organ.imageUrl ? (
                <img src={organ.imageUrl} alt={organ.name} className="organ-image" />
              ) : (
                <div className="placeholder-image">
                  <span>Image Pending Generation</span>
                </div>
              )}
            </div>
            <div className="detail-row">
              <strong>Function:</strong>
              <p>{organ.function}</p>
            </div>
            <div className="detail-row">
              <strong>Location:</strong>
              <p>{organ.location}</p>
            </div>
            <div className="detail-row">
              <strong>Blood Supply:</strong>
              <p>{organ.bloodSupply}</p>
            </div>
            <div className="detail-row">
              <strong>Innervation:</strong>
              <p>{organ.innervation}</p>
            </div>
            {organ.clinicalNotes && (
              <div className="detail-row clinical">
                <strong>Clinical Significance:</strong>
                <p>{organ.clinicalNotes}</p>
              </div>
            )}

            {organ.details && (
              <div className="deep-dive-section">
                <h4>Microanatomy</h4>
                <div className="micro-grid">
                  {organ.details.microAnatomy.map((item, i) => (
                    <div key={i} className="micro-item">
                      <span className="term">{item.term}</span>
                      <span className="def">{item.def}</span>
                    </div>
                  ))}
                </div>

                <h4>Physiology: {organ.details.physiology.title}</h4>
                <ol className="physio-steps">
                  {organ.details.physiology.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>

                <h4>Common Pathologies</h4>
                <ul className="patho-list">
                  {organ.details.pathologies.map((patho, i) => (
                    <li key={i}>
                      <strong>{patho.name}:</strong> {patho.desc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .organ-card {
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--color-background-alt);
        }
        .organ-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .organ-card.open {
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
        .system-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-accent);
          background: rgba(16, 185, 129, 0.1); 
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
        .organ-image-container {
          margin-bottom: 1.5rem;
          margin-top: 1.5rem;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: color-mix(in srgb, var(--color-surface), var(--color-text) 5%);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .organ-image {
          max-width: 100%;
          height: auto;
          display: block;
        }
        .placeholder-image {
            color: var(--color-text-muted);
            font-size: 0.875rem;
            font-style: italic;
        }

        .deep-dive-section {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px dashed var(--color-border);
        }
        .deep-dive-section h4 {
          color: var(--color-primary);
          font-size: 0.95rem;
          margin: 1.5rem 0 0.75rem 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .deep-dive-section h4:first-child {
          margin-top: 0;
        }
        
        .micro-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        .micro-item {
          background: color-mix(in srgb, var(--color-surface), var(--color-text) 3%);
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }
        .micro-item .term {
          display: block;
          font-weight: 600;
          color: var(--color-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }
        .micro-item .def {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.3;
        }

        .physio-steps {
          margin: 0;
          padding-left: 1.5rem;
          color: var(--color-text);
        }
        .physio-steps li {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .patho-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .patho-list li {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          color: var(--color-text-muted);
          padding-left: 1rem;
          border-left: 3px solid var(--color-accent);
        }
        .patho-list strong {
          color: var(--color-text);
          margin-right: 0.5rem;
        }
      `}</style>
    </motion.div>
  );
};

export default OrganCard;
