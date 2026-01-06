import React from 'react';
import { motion } from 'framer-motion';

const MilestoneAnimator = ({ milestoneId, color = "#0e7490" }) => {
    // Shared configuration matching "Cute Baby" Reference
    // Thicker lines, rounder shapes
    const strokeWidth = 6;
    const black = "#1e293b"; // Dark slate for outlines to match drawing style

    // Animation Variants
    const variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    // Reusable stylized parts
    const BabyHead = ({ x, y, rotate = 0 }) => (
        <motion.g transform={`translate(${x}, ${y}) rotate(${rotate})`}>
            {/* Outline Head */}
            <circle cx="0" cy="0" r="35" fill="white" stroke={black} strokeWidth={strokeWidth} />
            {/* Hair Curl */}
            <path d="M -5 -35 Q 0 -45 10 -35 Q 15 -30 10 -25" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />
            {/* Eyes (Happy Closed Arcs) */}
            <path d="M -15 -5 Q -10 -15 -5 -5" fill="none" stroke={black} strokeWidth={4} strokeLinecap="round" />
            <path d="M 5 -5 Q 10 -15 15 -5" fill="none" stroke={black} strokeWidth={4} strokeLinecap="round" />
            {/* Mouth */}
            <path d="M -5 10 Q 0 15 5 10" fill="none" stroke={black} strokeWidth={4} strokeLinecap="round" />
        </motion.g>
    );

    const renderContent = () => {
        switch (milestoneId) {
            case 'prone':
                return (
                    <motion.g
                        initial={{ y: 0 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        {/* Floor */}
                        <line x1="20" y1="180" x2="180" y2="180" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />

                        {/* Body (Oval-ish) */}
                        <ellipse cx="90" cy="160" rx="40" ry="25" fill="white" stroke={black} strokeWidth={strokeWidth} />
                        {/* Diaper Line */}
                        <path d="M 90 135 Q 100 160 90 185" fill="none" stroke={black} strokeWidth={3} />

                        {/* Arm pushing up */}
                        <path d="M 120 150 Q 140 160 140 180" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Leg kicking up */}
                        <path d="M 50 160 Q 30 150 20 130" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Head Lifting Up */}
                        <BabyHead x={130} y={120} rotate={-10} />
                    </motion.g>
                );

            case 'rolling':
                return (
                    <motion.g
                        animate={{ rotate: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        style={{ originX: "100px", originY: "140px" }}
                    >
                        {/* Body (Rounder for rolling) */}
                        <circle cx="100" cy="140" r="35" fill="white" stroke={black} strokeWidth={strokeWidth} />
                        {/* Diaper */}
                        <path d="M 70 140 Q 100 170 130 140" fill="none" stroke={black} strokeWidth={3} />

                        {/* Legs in air */}
                        <path d="M 80 160 Q 60 180 50 170" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />
                        <path d="M 120 160 Q 140 180 150 170" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Arms Reaching */}
                        <path d="M 70 120 Q 50 100 60 90" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />
                        <path d="M 130 120 Q 150 100 140 90" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Head Tucked */}
                        <BabyHead x={100} y={90} rotate={0} />
                    </motion.g>
                );

            case 'sitting':
                return (
                    <motion.g
                        initial={{ scaleY: 0.98 }}
                        animate={{ scaleY: 1.02 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        style={{ originY: "180px" }}
                    >
                        {/* Floor */}
                        <line x1="40" y1="180" x2="160" y2="180" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />

                        {/* Legs (Spread) */}
                        <path d="M 70 170 Q 60 180 50 170" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />
                        <path d="M 130 170 Q 140 180 150 170" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Body (Pear shape) */}
                        <path d="M 80 170 Q 70 120 100 120 Q 130 120 120 170" fill="white" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        {/* Diaper */}
                        <path d="M 80 160 Q 100 180 120 160" fill="none" stroke={black} strokeWidth={3} />

                        {/* Arms (Propping/Balance) */}
                        <path d="M 85 140 L 65 170" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />
                        <path d="M 115 140 L 135 170" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Head */}
                        <BabyHead x={100} y={100} rotate={0} />
                    </motion.g>
                );

            case 'crawling': // Matches reference image
                return (
                    <motion.g
                        animate={{ x: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    >
                        {/* Floor */}
                        <line x1="20" y1="180" x2="180" y2="180" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />

                        {/* Back Leg */}
                        <path d="M 40 170 Q 40 140 70 140" fill="none" stroke="white" strokeWidth={strokeWidth + 2} strokeLinecap="round" /> {/* Mask */}
                        <path d="M 40 170 Q 40 140 70 140" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Body (Horizontal Oval) */}
                        <ellipse cx="100" cy="140" rx="35" ry="25" fill="white" stroke={black} strokeWidth={strokeWidth} />
                        {/* Diaper Band */}
                        <path d="M 85 118 Q 90 140 85 162" fill="none" stroke={black} strokeWidth={3} />

                        {/* Front Arm (Planted) */}
                        <path d="M 125 150 Q 135 170 145 180" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Head (Big, Happy) */}
                        <BabyHead x={140} y={100} rotate={-10} />

                        {/* Back Leg (Knee down) */}
                        <path d="M 60 150 Q 70 180 90 180" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />
                    </motion.g>
                );

            case 'standing':
                return (
                    <motion.g
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        style={{ originX: "100px", originY: "180px" }}
                    >
                        {/* Floor */}
                        <line x1="40" y1="180" x2="160" y2="180" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                        {/* Support Surface to hold */}
                        <path d="M 140 180 L 140 100 L 170 100" stroke="#94a3b8" strokeWidth={4} fill="none" />

                        {/* Legs */}
                        <path d="M 85 180 L 90 140" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />
                        <path d="M 105 180 L 100 140" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Body */}
                        <rect x="80" y="100" width="30" height="45" rx="10" fill="white" stroke={black} strokeWidth={strokeWidth} />
                        {/* Diaper */}
                        <path d="M 80 130 H 110" stroke={black} strokeWidth={2} />

                        {/* Arms (Holding Support) */}
                        <path d="M 105 110 L 140 100" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Head */}
                        <BabyHead x={95} y={80} rotate={0} />
                    </motion.g>
                );

            case 'walking':
                return (
                    <motion.g
                        animate={{ y: [0, -5, 0], x: [-2, 2, -2] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    >
                        {/* Floor */}
                        <line x1="20" y1="180" x2="180" y2="180" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />

                        {/* Legs (Stepping) */}
                        <motion.path
                            d="M 90 180 L 95 140"
                            stroke={black} strokeWidth={strokeWidth} strokeLinecap="round"
                            animate={{ d: ["M 90 180 L 95 140", "M 80 170 L 95 140", "M 90 180 L 95 140"] }}
                        />
                        <motion.path
                            d="M 110 180 L 105 140"
                            stroke={black} strokeWidth={strokeWidth} strokeLinecap="round"
                            animate={{ d: ["M 110 170 L 105 140", "M 120 180 L 105 140", "M 110 170 L 105 140"] }}
                            transition={{ delay: 0.75 }}
                        />

                        {/* Body */}
                        <rect x="85" y="100" width="30" height="45" rx="10" fill="white" stroke={black} strokeWidth={strokeWidth} />

                        {/* High Guard Arms */}
                        <path d="M 85 110 L 65 90" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />
                        <path d="M 115 110 L 135 90" fill="none" stroke={black} strokeWidth={strokeWidth} strokeLinecap="round" />

                        {/* Head */}
                        <BabyHead x={100} y={80} rotate={0} />
                    </motion.g>
                );

            default:
                return null;
        }
    };

    return (
        <motion.svg
            viewBox="0 0 200 200"
            width="100%"
            height="100%"
            initial="hidden"
            animate="visible"
            variants={variants}
            style={{ overflow: 'visible' }}
        >
            {renderContent()}
        </motion.svg>
    );
};

export default MilestoneAnimator;
