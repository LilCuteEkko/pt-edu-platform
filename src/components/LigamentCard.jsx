import React from 'react';
import { motion } from 'framer-motion';

const LigamentCard = ({ ligament, onClick }) => {
    return (
        <motion.div
            layoutId={`card-${ligament.id}`}
            onClick={onClick}
            className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
            whileHover={{ y: -5 }}
        >
            <div className="h-48 overflow-hidden bg-gray-900 relative">
                <img
                    src={ligament.imageUrl}
                    alt={ligament.name}
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-400/10 px-2 py-1 rounded">
                        {ligament.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">{ligament.name}</h3>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Attachments</h4>
                    <p className="text-gray-300 text-sm">{ligament.attachments}</p>
                </div>

                <div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Function</h4>
                    <p className="text-gray-300 text-sm">{ligament.function}</p>
                </div>

                {ligament.clinicalNotes && (
                    <div className="pt-2 border-t border-gray-700">
                        <h4 className="text-red-400 text-xs uppercase tracking-wider font-semibold mb-1">Clinical Notes</h4>
                        <p className="text-gray-300 text-sm italic">{ligament.clinicalNotes}</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default LigamentCard;
