import musclePlaceholderImg from '../assets/muscles/placeholder.png';

export const ligaments = [
    // Elbow Ligaments
    {
        id: 'ulnar-collateral-ligament',
        name: 'Ulnar Collateral Ligament (UCL)',
        location: 'Medial Elbow',
        attachments: 'Medial Epicondyle to Coronoid/Olecranon.',
        function: 'Resists Valgus stress.',
        clinicalNotes: 'Anterior band is strongest. "Tommy John" injury (pitchers).',
        imageUrl: musclePlaceholderImg,
        category: 'Elbow'
    },
    {
        id: 'radial-collateral-ligament',
        name: 'Radial Collateral Ligament (RCL)',
        location: 'Lateral Elbow',
        attachments: 'Lateral Epicondyle to Annular Ligament/Ulna.',
        function: 'Resists Varus stress.',
        clinicalNotes: 'Less commonly injured than UCL.',
        imageUrl: musclePlaceholderImg,
        category: 'Elbow'
    },
    {
        id: 'annular-ligament',
        name: 'Annular Ligament',
        location: 'Proximal Radioulnar Joint',
        attachments: 'Encircles Radial Head, attaches to Ulna.',
        function: 'Stabilizes PRUJ during pronation/supination. Prevents inferior distraction.',
        clinicalNotes: 'Nursemaid\'s Elbow (subluxation of radial head from ligament).',
        imageUrl: musclePlaceholderImg,
        category: 'Elbow'
    },

    // Wrist Ligaments
    {
        id: 'tfcc',
        name: 'Triangular Fibrocartilage Complex (TFCC)',
        location: 'Distal Radioulnar/Ulnocarpal Joint',
        attachments: 'Ulna to Lunate/Triquetrum.',
        function: 'Major stabilizer of DRUJ. Cushions ulnar carpal column.',
        clinicalNotes: '"Meniscus of the wrist". Peripheral tears heal better (vascular) than central.',
        imageUrl: musclePlaceholderImg,
        category: 'Wrist'
    },
    {
        id: 'scapholunate-ligament',
        name: 'Scapholunate Ligament',
        location: 'Between Scaphoid and Lunate',
        attachments: 'Scaphoid to Lunate.',
        function: 'Stabilizes proximal carpal row.',
        clinicalNotes: 'Terry Thomas sign (gap on xray). Most common carpal instability.',
        imageUrl: musclePlaceholderImg,
        category: 'Wrist'
    },
    {
        id: 'palmar-radiocarpal',
        name: 'Palmar Radiocarpal Ligaments',
        location: 'Anterior Wrist',
        attachments: 'Radius to Carpals (Capitate, Lunate, Scaphoid).',
        function: 'Limits wrist extension. Stronger than dorsal ligaments.',
        clinicalNotes: 'Follows radius during Supination.',
        imageUrl: musclePlaceholderImg,
        category: 'Wrist'
    },
    {
        id: 'dorsal-radiocarpal',
        name: 'Dorsal Radiocarpal Ligaments',
        location: 'Posterior Wrist',
        attachments: 'Radius to Carpals.',
        function: 'Limits wrist flexion.',
        clinicalNotes: 'Follows radius during Pronation.',
        imageUrl: musclePlaceholderImg,
        category: 'Wrist'
    }
];
