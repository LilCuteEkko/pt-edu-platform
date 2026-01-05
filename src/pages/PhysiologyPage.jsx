import { physiologyTopics } from '../data/physiology';
import TopicCard from '../components/TopicCard';

const PhysiologyPage = () => {
    return (
        <div className="physiology-page container">
            <div className="page-header">
                <h1>Physiology Systems</h1>
                <p>Core physiological principles essential for clinical practice.</p>
            </div>

            <div className="topics-grid">
                {physiologyTopics.map(topic => (
                    <TopicCard key={topic.id} topic={topic} />
                ))}
            </div>

            <style>{`
        .physiology-page {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .page-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        .page-header p {
          color: var(--color-text-muted);
          margin-top: 0.5rem;
        }
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
      `}</style>
        </div>
    );
};

export default PhysiologyPage;
