import { motion } from 'framer-motion';
import { ArrowRight, Brain, Heart, Bone, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  'Brain': Brain,
  'Heart': Heart,
  'Bone': Bone,
  'Activity': Activity
};

const TopicCard = ({ topic }) => {
  const Icon = iconMap[topic.icon] || Activity;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="topic-card"
    >
      <div className="icon-wrapper">
        <Icon size={32} />
      </div>
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <Link to={`/physiology/${topic.id}`} className="learn-more">
        Explore Topics <ArrowRight size={16} />
      </Link>

      <style>{`
        .topic-card {
          background: var(--color-surface);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid #e2e8f0;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
          transition: box-shadow 0.2s;
        }
        .topic-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary-light);
        }
        .icon-wrapper {
          width: 3rem;
          height: 3rem;
          background: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-bottom: 0.5rem;
        }
        .topic-card h3 {
          font-size: 1.5rem;
          color: var(--color-text);
        }
        .topic-card p {
          color: var(--color-text-muted);
          flex-grow: 1;
        }
        .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
          font-weight: 500;
          margin-top: auto;
        }
        .learn-more:hover {
          gap: 0.75rem;
        }
      `}</style>
    </motion.div>
  );
};

export default TopicCard;
