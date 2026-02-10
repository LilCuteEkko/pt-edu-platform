import GenericAnatomyCard from './anatomy/GenericAnatomyCard';

const TendonCard = ({ tendon }) => {
    return (
        <GenericAnatomyCard
            title={tendon.name}
            category={tendon.category}
            color="#60a5fa" // Blue-400
            image={tendon.imageUrl}
        >
            <div className="detail-row">
                <strong>Location:</strong>
                <p>{tendon.location}</p>
            </div>

            <div className="detail-row">
                <strong>Contents:</strong>
                <p>{tendon.contents}</p>
            </div>

            {tendon.clinicalNotes && (
                <div className="detail-row clinical">
                    <strong>Clinical Notes:</strong>
                    <p>{tendon.clinicalNotes}</p>
                </div>
            )}
        </GenericAnatomyCard>
    );
};

export default TendonCard;

