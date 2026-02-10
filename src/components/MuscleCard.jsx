import GenericAnatomyCard from './anatomy/GenericAnatomyCard';

const MuscleCard = ({ muscle }) => {
  return (
    <GenericAnatomyCard
      title={muscle.name}
      category={muscle.category}
      color="var(--color-primary)"
      image={muscle.imageUrl}
    >
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
    </GenericAnatomyCard>
  );
};

export default MuscleCard;

