import GenericAnatomyCard from './anatomy/GenericAnatomyCard';

const VeinCard = ({ vein }) => {
    return (
        <GenericAnatomyCard
            title={vein.name}
            category="Vein"
            color="#3B82F6"
            // VeinCard did not have imageUrl prop originally, can be added if data has it
            image={vein.imageUrl}
        >
            <div className="detail-row">
                <strong>Drainage:</strong>
                <p>{vein.drainage}</p>
            </div>

            <div className="detail-row">
                <strong>Course:</strong>
                <p>{vein.course}</p>
            </div>

            {vein.tributaries && vein.tributaries.length > 0 && (
                <div className="detail-row">
                    <strong>Tributaries:</strong>
                    <ul className="detail-list">
                        {vein.tributaries.map((tributary, index) => (
                            <li key={index}>{tributary}</li>
                        ))}
                    </ul>
                </div>
            )}

            {vein.clinicalNotes && (
                <div className="detail-row clinical">
                    <strong>Clinical Notes:</strong>
                    <p>{vein.clinicalNotes}</p>
                </div>
            )}
        </GenericAnatomyCard>
    );
};

export default VeinCard;
