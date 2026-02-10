import GenericAnatomyCard from './anatomy/GenericAnatomyCard';

const ArteryCard = ({ artery }) => {
    return (
        <GenericAnatomyCard
            title={artery.name}
            category="Artery"
            color="#EF4444" // Red
            image={artery.imageUrl}
        >
            <div className="detail-row">
                <strong>Source:</strong>
                <p>{artery.source}</p>
            </div>

            <div className="detail-row">
                <strong>Course:</strong>
                <p>{artery.course}</p>
            </div>

            {artery.branches && artery.branches.length > 0 && (
                <div className="detail-row">
                    <strong>Branches:</strong>
                    <ul className="detail-list">
                        {artery.branches.map((branch, index) => (
                            <li key={index}>{branch}</li>
                        ))}
                    </ul>
                </div>
            )}

            {artery.clinicalNotes && (
                <div className="detail-row clinical">
                    <strong>Clinical Notes:</strong>
                    <p>{artery.clinicalNotes}</p>
                </div>
            )}
        </GenericAnatomyCard>
    );
};

export default ArteryCard;

