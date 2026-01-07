import { ArrowLeft } from 'lucide-react';
import { physiologyTopics } from '../../data/physiology';
import TopicCard from '../TopicCard';

const PhysiologySection = ({ onBack }) => {
    return (
        <div className="physiology-section">
            <div className="section-header">
                <button onClick={onBack} className="back-btn">
                    <ArrowLeft size={20} />
                    Back to A&P
                </button>
                <h1>Physiology Systems</h1>
                <p>Core physiological principles essential for clinical practice.</p>
            </div>

            <div className="topics-grid">
                {physiologyTopics.map(topic => (
                    <TopicCard key={topic.id} topic={topic} />
                ))}
            </div>

            <style>{`
        .physiology-section {
          padding-top: 1rem;
          padding-bottom: 4rem;
        }
        .section-header {
          margin-bottom: 3rem;
          text-align: center;
          position: relative;
        }
        .back-btn {
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: none;
            border: none;
            color: var(--color-primary);
            font-weight: 500;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: var(--radius-md);
            transition: background 0.2s;
        }
        .back-btn:hover {
            background: color-mix(in srgb, var(--color-primary), transparent 90%);
        }
        .section-header h1 {
            margin-top: 0.5rem;
        }
        .section-header p {
          color: var(--color-text-muted);
          margin-top: 0.5rem;
        }
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        @media (max-width: 600px) {
            .back-btn {
                position: static;
                margin-bottom: 1rem;
            }
        }
      `}</style>
        </div>
    );
};

export default PhysiologySection;
