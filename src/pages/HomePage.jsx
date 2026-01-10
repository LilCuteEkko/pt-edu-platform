import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page container">
      <div className="hero">
        <h1>Master Anatomy for Physical Therapy</h1>
        <p>A minimalist, focused resource for PT students to learn muscle origin, insertion, action, and innervation.</p>
        <Link to="/a-p" className="cta-button">Start Learning</Link>
      </div>

      <style>{`
        .home-page {
          padding-top: 4rem;
          text-align: center;
        }
        .hero {
          max-width: 600px;
          margin: 0 auto;
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero p {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
        .cta-button {
          display: inline-block;
          background: var(--color-primary);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: var(--radius-md);
          font-weight: 500;
          font-size: 1.125rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-button:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </div>
  );
};

export default HomePage;
