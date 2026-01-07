import { useState, useMemo } from 'react';
import { Search, Activity, Skull, Share2, Network, Heart } from 'lucide-react';
import MuscleCard from '../components/MuscleCard';
import OrganCard from '../components/OrganCard';
import BoneCard from '../components/BoneCard';
import JointCard from '../components/JointCard';
import NerveCard from '../components/NerveCard';
import ArteryCard from '../components/ArteryCard';
import TendonCard from '../components/TendonCard';
import LigamentCard from '../components/LigamentCard';
import { muscles } from '../data/muscles';
import { organs } from '../data/organs';
import { bones } from '../data/bones';
import { joints } from '../data/joints';
import { nerves } from '../data/nerves';
import { arteries } from '../data/arteries';
import { tendons } from '../data/tendons';
import { ligaments } from '../data/ligaments';

const AnatomyPage = () => {
  const [activeTab, setActiveTab] = useState('muscles'); // 'muscles', 'bones', 'joints', 'organs', 'nerves', 'arteries', 'tendons', 'ligaments'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const tabs = [
    { id: 'muscles', label: 'Muscles', icon: Activity },
    { id: 'bones', label: 'Bones', icon: Skull },
    { id: 'joints', label: 'Joints', icon: Share2 },
    { id: 'nerves', label: 'Nerves', icon: Network },
    { id: 'arteries', label: 'Arteries', icon: Heart },
    { id: 'tendons', label: 'Tendons', icon: Activity },
    { id: 'ligaments', label: 'Ligaments', icon: Share2 },
    { id: 'organs', label: 'Organs', icon: Heart }
  ];

  // Determine which dataset to use
  const currentData = useMemo(() => {
    switch (activeTab) {
      case 'muscles': return muscles;
      case 'bones': return bones;
      case 'joints': return joints;
      case 'nerves': return nerves;
      case 'arteries': return arteries;
      case 'tendons': return tendons;
      case 'ligaments': return ligaments;
      case 'organs': return organs;
      default: return muscles;
    }
  }, [activeTab]);

  // Get unique categories
  const categories = useMemo(() => {
    let key;
    if (activeTab === 'muscles' || activeTab === 'bones' || activeTab === 'nerves' || activeTab === 'arteries' || activeTab === 'tendons' || activeTab === 'ligaments') key = 'category';
    else if (activeTab === 'joints') key = 'type'; // Filter joints by type
    else key = 'system'; // Organs by system

    return ['All', ...new Set(currentData.map(item => item[key]))];
  }, [currentData, activeTab]);

  // Reset category when tab changes
  if (selectedCategory !== 'All' && !categories.includes(selectedCategory)) {
    setSelectedCategory('All');
  }

  const filteredItems = useMemo(() => {
    return currentData.filter(item => {
      const matchName = item.name.toLowerCase().includes(searchTerm.toLowerCase());

      let categoryKey;
      if (activeTab === 'muscles' || activeTab === 'bones' || activeTab === 'nerves' || activeTab === 'arteries' || activeTab === 'tendons' || activeTab === 'ligaments') categoryKey = 'category';
      else if (activeTab === 'joints') categoryKey = 'type';
      else categoryKey = 'system';

      const matchCategory = selectedCategory === 'All' || item[categoryKey] === selectedCategory;
      return matchName && matchCategory;
    });
  }, [searchTerm, selectedCategory, currentData, activeTab]);

  return (
    <div className="anatomy-page container">
      <div className="page-header">
        <h1>Anatomy Dashboard</h1>
        <p>Explore detailed breakdown of human anatomy.</p>

        <div className="tab-switcher">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="controls">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-wrapper">
          <label htmlFor="category-select">Filter:</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => {
            if (activeTab === 'muscles') return <MuscleCard key={item.id} muscle={item} />;
            if (activeTab === 'bones') return <BoneCard key={item.id} bone={item} />;
            if (activeTab === 'joints') return <JointCard key={item.id} joint={item} />;
            if (activeTab === 'nerves') return <NerveCard key={item.id} nerve={item} />;
            if (activeTab === 'arteries') return <ArteryCard key={item.id} artery={item} />;
            if (activeTab === 'tendons') return <TendonCard key={item.id} tendon={item} />;
            if (activeTab === 'ligaments') return <LigamentCard key={item.id} ligament={item} />;
            if (activeTab === 'organs') return <OrganCard key={item.id} organ={item} />;
            return null;
          })
        ) : (
          <div className="no-results">
            <p>No {activeTab} found matching your criteria.</p>
          </div>
        )}
      </div>

      <style>{`
        .anatomy-page {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .page-header {
          margin-bottom: 2rem;
          text-align: center;
        }
        .page-header p {
          color: var(--color-text-muted);
          margin-top: 0.5rem;
          margin-bottom: 2rem;
        }
        .tab-switcher {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          background: var(--color-surface);
          padding: 0.5rem;
          border-radius: 999px;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .tab-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 999px;
          border: none;
          background: transparent;
          color: var(--color-text-muted);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tab-btn:hover {
          color: var(--color-text);
        }
        .tab-btn.active {
          background: var(--color-primary);
          color: white;
          box-shadow: var(--shadow-sm);
        }
        .controls {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          background: var(--color-surface);
          padding: 1rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
        }
        .search-wrapper {
          position: relative;
          flex: 1;
          min-width: 280px;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
        }
        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-size: 1rem;
          font-family: inherit;
          color: var(--color-text);
          background: color-mix(in srgb, var(--color-surface), var(--color-text) 3%);
          transition: border-color 0.2s, background-color 0.2s;
        }
        .search-input:focus {
          outline: none;
          border-color: var(--color-primary);
          background: var(--color-surface);
          box-shadow: 0 0 0 3px var(--color-primary-light);
        }
        .filter-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .category-select {
          padding: 0.5rem 2rem 0.5rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--color-text);
          background-color: var(--color-surface);
          cursor: pointer;
        }
        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 3rem;
          color: var(--color-text-muted);
        }
        @media (max-width: 600px) {
            .tab-switcher {
                border-radius: var(--radius-lg);
                width: 100%;
            }
            .tab-btn {
                flex: 1 1 auto;
            }
        }
      `}</style>
    </div>
  );
};

export default AnatomyPage;
