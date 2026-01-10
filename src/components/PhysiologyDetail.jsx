import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Activity } from 'lucide-react';
import { physiologyTopics } from '../data/physiology';
import { motion } from 'framer-motion';
// import BrainExplorer from './BrainExplorer';
import SarcomereAnimator from './SarcomereAnimator';
import HeartValvesVisualizer from './HeartValvesVisualizer';

import PathologyGrid from './PathologyGrid';
import MilestoneTracker from './MilestoneTracker';
import IntegumentaryDetail from './IntegumentaryDetail';
import NeuromuscularDetail from './NeuromuscularDetail';
// import brainDiagramImg from '../assets/neuromuscular/human-brain-anatomy.png';
import InteractiveBrain from './InteractiveBrain';
import MuscleCard from './MuscleCard';
import MilestoneTimeline from './MilestoneTimeline';
import VestibularDetail from './VestibularDetail';
import NeuroscienceDetail from './NeuroscienceDetail';

const PhysiologyDetail = () => {
  const { topicId } = useParams();
  const topic = physiologyTopics.find(t => t.id === topicId);

  if (!topic) {
    return <div className="container">Topic not found</div>;
  }

  if (topic.id === 'neuromuscular') {
    return <NeuromuscularDetail topic={topic} />;
  }

  if (topic.id === 'integumentary') {
    return <IntegumentaryDetail topic={topic} />;
  }

  if (topic.id === 'vestibular') {
    return <VestibularDetail topic={topic} />;
  }

  if (topic.id === 'neuroscience') {
    return <NeuroscienceDetail topic={topic} />;
  }

  return (
    <div className="detail-page container">
      <Link to="/physiology" className="back-link">
        <ArrowLeft size={20} /> Back to Systems
      </Link>

      <header className="detail-header">
        <h1>{topic.title}</h1>
        <p className="lead">{topic.description}</p>
      </header>

      <div className="subtopics-list">
        {console.log('Subtopics:', topic.subtopics)}
        {topic.subtopics.map((subtopic, index) => (
          <motion.div
            key={subtopic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="subtopic-section"
          >
            <h2>{subtopic.title}</h2>
            {subtopic.introduction && (
              <p className="intro-text" style={{ marginBottom: '1rem' }}>{subtopic.introduction}</p>
            )}
            {subtopic.type === 'interactive-brain' ? (
              <InteractiveBrain lobes={subtopic.lobes} />
            ) : subtopic.type === 'interactive-sarcomere' ? (
              <SarcomereAnimator />
            ) : subtopic.type === 'interactive-heart' ? (
              <HeartValvesVisualizer />

            ) : subtopic.type === 'pathology-grid' ? (
              <PathologyGrid
                pathologies={subtopic.pathologies}
                categoryContent={subtopic.categoryContent}
              />
            ) : subtopic.type === 'milestone-tracker' ? (
              <MilestoneTracker milestones={subtopic.milestones} reflexes={subtopic.reflexes} />
            ) : subtopic.type === 'milestone-timeline' ? (
              <MilestoneTimeline milestones={subtopic.milestones} />
            ) : subtopic.type === 'muscle-list' ? (
              <div className="muscle-grid">
                {subtopic.muscles.map((muscle, idx) => (
                  <MuscleCard key={idx} muscle={muscle} />
                ))}
              </div>
            ) : (
              <div className="content-card">
                {subtopic.image && (
                  <div className="subtopic-image-container" style={{ padding: '2rem', paddingBottom: '0', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={subtopic.image}
                      alt={subtopic.title}
                      style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: 'var(--radius-md)', objectFit: 'contain' }}
                    />
                  </div>
                )}
                <ul className="key-points">
                  {subtopic.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="clinical-grid">
                  <div className="clinical-box importance">
                    <div className="box-header">
                      <CheckCircle size={18} />
                      <span>Clinical Relevance</span>
                    </div>
                    <p>{subtopic.clinicalRelevance}</p>
                  </div>
                  {subtopic.pathologyConnection && (
                    <div className="clinical-box pathology">
                      <div className="box-header">
                        <Activity size={18} />
                        <span>Pathology Connection</span>
                      </div>
                      <p>{subtopic.pathologyConnection}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <style>{`
        .detail-page {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }
        .back-link:hover {
          color: var(--color-primary);
        }
        .detail-header {
          margin-bottom: 3rem;
          border-bottom: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
          padding-bottom: 2rem;
        }
        .lead {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-top: 1rem;
        }
        .subtopic-section {
          margin-bottom: 3rem;
        }
        .subtopic-section h2 {
          color: var(--color-primary);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .content-card {
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .key-points {
          padding: 2rem;
          margin: 0;
          list-style-type: none;
        }
        .key-points li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .key-points li::before {
          content: "•";
          color: var(--color-primary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        .clinical-box {
          background: var(--color-primary-light);
          padding: 1.5rem 2rem;
          border-top: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
        }
        .box-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }
        .clinical-box p {
          margin: 0;
          color: var(--color-text);
          font-weight: 500;
        }
        .muscle-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default PhysiologyDetail;
