import React from 'react';
import { motion } from 'framer-motion';

const LigamentCard = ({ ligament, onClick }) => {
    return (
        <motion.div
            layoutId={`card-${ligament.id}`}
            onClick={onClick}
            className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all h-full flex flex-col"
            whileHover={{ y: -5 }}
        >


            <div className="p-4 flex-1 flex flex-col gap-3">
                <div className="border-b border-gray-700 pb-2">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-400/10 px-2 py-1 rounded inline-block mb-1">
                        {ligament.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">{ligament.name}</h3>
                </div>

                <div className="space-y-3">
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
            </div>
        </motion.div>
    );
};

export default LigamentCard;
