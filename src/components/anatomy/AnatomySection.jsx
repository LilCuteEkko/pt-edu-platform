import { useState, useMemo, useEffect } from 'react';
import { Search, ArrowLeft, Loader2 } from 'lucide-react';
import MuscleCard from '../MuscleCard';
import OrganCard from '../OrganCard';
import BoneCard from '../BoneCard';
import JointCard from '../JointCard';
import NerveCard from '../NerveCard';
import ArteryCard from '../ArteryCard';
import TendonCard from '../TendonCard';
import LigamentCard from '../LigamentCard';
import VeinCard from '../VeinCard';

// Map tabs to their data file paths and export names
const DATA_loader = {
    muscles: () => import('../../data/muscles').then(m => m.muscles),
    bones: () => import('../../data/bones').then(m => m.bones),
    joints: () => import('../../data/joints').then(m => m.joints),
    organs: () => import('../../data/organs').then(m => m.organs),
    nerves: () => import('../../data/nerves').then(m => m.nerves),
    arteries: () => import('../../data/arteries').then(m => m.arteries),
    veins: () => import('../../data/veins').then(m => m.veins),
    tendons: () => import('../../data/tendons').then(m => m.tendons),
    ligaments: () => import('../../data/ligaments').then(m => m.ligaments),
};

const AnatomySection = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('muscles');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // State for dynamic data
    const [currentData, setCurrentData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Dynamic Data Loading
    const dataCache = useMemo(() => new Map(), []); // Persist cache across renders

    useEffect(() => {
        let isMounted = true;
        setIsLoading(true);
        setCurrentData([]); // Clear prev data

        const loadData = async () => {
            try {
                // Check cache first
                if (dataCache.has(activeTab)) {
                    if (isMounted) {
                        setCurrentData(dataCache.get(activeTab));
                        setIsLoading(false);
                    }
                    return;
                }

                const loader = DATA_loader[activeTab];
                if (!loader) {
                    console.error(`No loader for tab: ${activeTab}`);
                    if (isMounted) setIsLoading(false);
                    return;
                }

                const rawData = await loader();

                // Defensive Deduplication
                const uniqueItems = [];
                const seenIds = new Set();

                if (Array.isArray(rawData)) {
                    rawData.forEach(item => {
                        if (!seenIds.has(item.id)) {
                            seenIds.add(item.id);
                            uniqueItems.push(item);
                        }
                    });
                }

                if (isMounted) {
                    // Update Cache
                    dataCache.set(activeTab, uniqueItems);
                    setCurrentData(uniqueItems);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Failed to load anatomy data:", error);
                if (isMounted) setIsLoading(false);
            }
        };

        loadData();

        return () => { isMounted = false; };
    }, [activeTab, dataCache]);

    // Filter logic key selection
    const categoryKey = useMemo(() => {
        if (activeTab === 'muscles' || activeTab === 'bones') return 'category';
        if (activeTab === 'joints') return 'type';
        if (activeTab === 'organs') return 'system';
        if (activeTab === 'nerves') return 'type';
        if (activeTab === 'tendons' || activeTab === 'ligaments') return 'category';
        if (activeTab === 'veins') return 'category';
        if (activeTab === 'arteries') return 'source';
        return 'category';
    }, [activeTab]);

    // Get unique categories
    const categories = useMemo(() => {
        if (!currentData || currentData.length === 0) return [];
        const values = currentData.map(item => item[categoryKey] || 'General');
        const uniqueCats = ['All', ...new Set(values)];
        return uniqueCats.sort();
    }, [currentData, categoryKey]);

    // Reset category when tab changes logic has been moved to rendering or can be kept here
    // Note: If we change tabs, currentData clears, triggering this to empty, then repopulates.
    // Ideally we reset filter on tab change.
    useEffect(() => {
        setSelectedCategory('All');
        setSearchTerm('');
    }, [activeTab]);

    const filteredItems = useMemo(() => {
        if (!currentData) return [];
        return currentData.filter(item => {
            const matchName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const itemCategory = item[categoryKey] || 'General';
            const matchCategory = selectedCategory === 'All' || itemCategory === selectedCategory;
            return matchName && matchCategory;
        });
    }, [searchTerm, selectedCategory, currentData, categoryKey]);

    return (
        <div className="anatomy-section">
            <div className="section-header">
                <button onClick={onBack} className="back-btn">
                    <ArrowLeft size={20} />
                    Back to A&P
                </button>
                <h1>Anatomy Dashboard</h1>
                <p>Explore detailed breakdown of human anatomy.</p>

                <div className="tab-switcher">
                    <button
                        className={`tab-btn ${activeTab === 'muscles' ? 'active' : ''}`}
                        onClick={() => setActiveTab('muscles')}
                    >
                        Muscles
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'bones' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bones')}
                    >
                        Bones
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'joints' ? 'active' : ''}`}
                        onClick={() => setActiveTab('joints')}
                    >
                        Joints
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'nerves' ? 'active' : ''}`}
                        onClick={() => setActiveTab('nerves')}
                    >
                        Nerves
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'arteries' ? 'active' : ''}`}
                        onClick={() => setActiveTab('arteries')}
                    >
                        Arteries
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'veins' ? 'active' : ''}`}
                        onClick={() => setActiveTab('veins')}
                    >
                        Veins
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'tendons' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tendons')}
                    >
                        Tendons
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'ligaments' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ligaments')}
                    >
                        Ligaments
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'organs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('organs')}
                    >
                        Organs
                    </button>
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
                {isLoading ? (
                    <div className="loading-state">
                        <Loader2 className="animate-spin" size={48} color="var(--color-primary)" />
                        <p>Loading anatomy data...</p>
                    </div>
                ) : filteredItems.length > 0 ? (
                    filteredItems.map(item => {
                        if (activeTab === 'muscles') return <MuscleCard key={item.id} muscle={item} />;
                        if (activeTab === 'bones') return <BoneCard key={item.id} bone={item} />;
                        if (activeTab === 'joints') return <JointCard key={item.id} joint={item} />;
                        if (activeTab === 'nerves') return <NerveCard key={item.id} nerve={item} />;
                        if (activeTab === 'arteries') return <ArteryCard key={item.id} artery={item} />;
                        if (activeTab === 'veins') return <VeinCard key={item.id} vein={item} />;
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
        .anatomy-section {
          padding-top: 1rem;
          padding-bottom: 4rem;
        }
        .section-header {
          margin-bottom: 2rem;
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
        .loading-state {
            grid-column: 1 / -1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4rem;
            color: var(--color-text-muted);
            gap: 1rem;
        }
        .animate-spin {
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @media (max-width: 600px) {
            .back-btn {
                position: static;
                margin-bottom: 1rem;
            }
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

export default AnatomySection;
