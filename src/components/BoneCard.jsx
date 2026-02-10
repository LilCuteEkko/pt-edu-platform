import GenericAnatomyCard from './anatomy/GenericAnatomyCard';

const BoneCard = ({ bone }) => {
    return (
        <GenericAnatomyCard
            title={bone.name}
            category={bone.category}
            color="var(--color-secondary)"
        // No image prop used in original BoneCard, strictly speaking, 
        // but if desired in future it can be added.
        >
            <div className="detail-row">
                <strong>Description:</strong>
                <p>{bone.description}</p>
            </div>

            <div className="detail-row">
                <strong>Landmarks:</strong>
                <ul className="detail-list">
                    {bone.landmarks.map((landmark, index) => (
                        <li key={index}>{landmark}</li>
                    ))}
                </ul>
            </div>

            <div className="detail-row">
                <strong>Articulations:</strong>
                <ul className="detail-list">
                    {bone.articulations.map((joint, index) => (
                        <li key={index}>{joint}</li>
                    ))}
                </ul>
            </div>

            {bone.clinicalNotes && (
                <div className="detail-row clinical">
                    <strong>Clinical Notes:</strong>
                    <p>{bone.clinicalNotes}</p>
                </div>
            )}
        </GenericAnatomyCard>
    );
};

export default BoneCard;
