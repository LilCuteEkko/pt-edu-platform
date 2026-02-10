import GenericAnatomyCard from './anatomy/GenericAnatomyCard';

const NerveCard = ({ nerve }) => {
    return (
        <GenericAnatomyCard
            title={nerve.number ? `CN ${nerve.number} - ${nerve.name}` : nerve.name}
            category={nerve.type}
            color="#EAB308" // Yellow
        // No image logic in original, add if needed: image={nerve.imageUrl}
        >
            {nerve.function && (
                <div className="detail-row">
                    <strong>Function:</strong>
                    <p>{nerve.function}</p>
                </div>
            )}

            {nerve.origin && (
                <div className="detail-row">
                    <strong>Origin:</strong>
                    <p>{nerve.origin}</p>
                </div>
            )}

            {nerve.course && (
                <div className="detail-row">
                    <strong>Course:</strong>
                    <p>{nerve.course}</p>
                </div>
            )}

            {nerve.branches && nerve.branches.length > 0 && (
                <div className="detail-row">
                    <strong>Branches:</strong>
                    <ul className="detail-list">
                        {nerve.branches.map((branch, index) => (
                            <li key={index}>{branch}</li>
                        ))}
                    </ul>
                </div>
            )}

            {nerve.innervation && nerve.innervation.length > 0 && (
                <div className="detail-row">
                    <strong>Innervation:</strong>
                    <ul className="detail-list">
                        {nerve.innervation.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {nerve.test && (
                <div className="detail-row">
                    <strong>Testing:</strong>
                    <p>{nerve.test}</p>
                </div>
            )}

            {nerve.pathology && (
                <div className="detail-row">
                    <strong>Pathology:</strong>
                    <p>{nerve.pathology}</p>
                </div>
            )}

            {nerve.clinicalNotes && (
                <div className="detail-row clinical">
                    <strong>Clinical Notes:</strong>
                    <p>{nerve.clinicalNotes}</p>
                </div>
            )}

            {nerve.ptRelevance && (
                <div className="detail-row clinical">
                    <strong>PT Relevance:</strong>
                    <p>{nerve.ptRelevance}</p>
                </div>
            )}
        </GenericAnatomyCard>
    );
};

export default NerveCard;

