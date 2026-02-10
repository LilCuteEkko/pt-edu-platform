import GenericAnatomyCard from './anatomy/GenericAnatomyCard';

const LigamentCard = ({ ligament }) => {
    return (
        <GenericAnatomyCard
            title={ligament.name}
            category={ligament.category}
            color="#60a5fa" // Blue-400 (using same as Tendon for consistency, or standard primary)
            image={ligament.imageUrl}
        >
            <div className="detail-row">
                <strong>Attachments:</strong>
                <p>{ligament.attachments}</p>
            </div>

            <div className="detail-row">
                <strong>Function:</strong>
                <p>{ligament.function}</p>
            </div>

            {ligament.clinicalNotes && (
                <div className="detail-row clinical">
                    <strong>Clinical Notes:</strong>
                    <p>{ligament.clinicalNotes}</p>
                </div>
            )}
        </GenericAnatomyCard>
    );
};

export default LigamentCard;

