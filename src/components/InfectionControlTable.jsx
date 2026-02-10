import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, AlertTriangle, Wind, Droplets, Users } from 'lucide-react';

const InfectionControlTable = ({ diseases, introduction }) => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleRow = (name) => {
        if (expandedId === name) {
            setExpandedId(null);
        } else {
            setExpandedId(name);
        }
    };

    const getTypeColor = (type) => {
        if (type.includes('Airborne')) return 'bg-red-100 text-red-800 border-red-200';
        if (type.includes('Droplet')) return 'bg-blue-100 text-blue-800 border-blue-200';
        if (type.includes('Contact')) return 'bg-orange-100 text-orange-800 border-orange-200';
        return 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const getTypeIcon = (type) => {
        if (type.includes('Airborne')) return <Wind size={16} className="mr-1" />;
        if (type.includes('Droplet')) return <Droplets size={16} className="mr-1" />;
        if (type.includes('Contact')) return <Users size={16} className="mr-1" />;
        return <Shield size={16} className="mr-1" />;
    };

    return (
        <div className="infection-table-container">
            {introduction && (
                <div className="mb-6">
                    <ul className="key-points">
                        {introduction.map((point, i) => {
                            const isHeader = typeof point === 'string' && point.trim().endsWith(':');
                            const isSubItem = typeof point === 'string' && point.trim().startsWith('-');

                            if (isHeader) return <li key={i} className="content-header">{point}</li>;
                            if (isSubItem) return <li key={i} className="content-subitem">{point.replace(/^\s*-\s*/, '')}</li>;
                            return <li key={i} className="content-item">{point}</li>;
                        })}
                    </ul>
                </div>
            )}

            <div className="table-wrapper">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b-2 border-slate-200">
                            <th className="py-3 px-4 font-bold text-slate-700">Pathogen / Condition</th>
                            <th className="py-3 px-4 font-bold text-slate-700">Precautions Type</th>
                            <th className="py-3 px-4 font-bold text-slate-700">PPE Required</th>
                            <th className="py-3 px-4 w-10"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {diseases.map((disease, index) => (
                            <React.Fragment key={index}>
                                <tr
                                    className={`border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors ${expandedId === disease.name ? 'bg-slate-50' : ''}`}
                                    onClick={() => toggleRow(disease.name)}
                                >
                                    <td className="py-3 px-4 font-medium text-slate-900">{disease.name}</td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTypeColor(disease.type)}`}>
                                            {getTypeIcon(disease.type)}
                                            {disease.type}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-slate-600 text-sm">{disease.ppe}</td>
                                    <td className="py-3 px-4 text-slate-400">
                                        {expandedId === disease.name ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </td>
                                </tr>
                                {expandedId === disease.name && (
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <td colSpan="4" className="py-3 px-4 pb-4">
                                            <div className="flex items-start gap-3 text-sm text-slate-600 bg-white p-3 rounded-md border border-slate-200 shadow-sm">
                                                <AlertTriangle size={18} className="text-amber-500 mt-0.5 shrink-0" />
                                                <div>
                                                    <span className="font-semibold text-slate-800 block mb-1">Clinical Note:</span>
                                                    {disease.notes}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

            <style>{`
        .table-wrapper {
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .infection-table-container {
          margin-bottom: 2rem;
        }
      `}</style>
        </div>
    );
};

export default InfectionControlTable;
