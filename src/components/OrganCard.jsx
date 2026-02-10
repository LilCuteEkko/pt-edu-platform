import GenericAnatomyCard from './anatomy/GenericAnatomyCard';

const OrganCard = ({ organ }) => {
  return (
    <GenericAnatomyCard
      title={organ.name}
      category={organ.system}
      color="var(--color-accent)" // Green/Teal
      image={organ.imageUrl}
    >
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

      <style>{`
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
          font-weight: 700;
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
    </GenericAnatomyCard>
  );
};

export default OrganCard;

