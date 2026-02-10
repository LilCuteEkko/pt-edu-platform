import GenericAnatomyCard from './anatomy/GenericAnatomyCard';

const JointCard = ({ joint }) => {
    return (
        <GenericAnatomyCard
            title={joint.name}
            category={joint.type}
            color="var(--color-secondary)" // Greenish from original styles is mapped to secondary usually or specific hex
            className="joint-card-custom"
        >
            <div className="detail-row">
                <strong>Articulation:</strong>
                <p>{joint.articulation}</p>
            </div>

            <div className="detail-row">
                <strong>Movements:</strong>
                <ul className="detail-list">
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

            {/* Custom Styles for Joint Mobilization Table since it is unique to JointCard */}
            <style>{`
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
        </GenericAnatomyCard>
    );
};

export default JointCard;

