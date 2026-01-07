
export const joints = [
    {
        id: 'sc-joint',
        name: 'Sternoclavicular (SC) Joint',
        type: 'Saddle Joint (Synovial)',
        articulation: 'Sternal end of clavicle + Manubrium of sternum + 1st Costal Cartilage.',
        movements: [
            'Elevation/Depression',
            'Protraction/Retraction',
            'Posterior Rotation'
        ],
        clinicalNotes: 'The only "true" bony connection/joint connecting the Upper Extremity to the Trunk (Axial Skeleton).'
    },
    {
        id: 'ac-joint',
        name: 'Acromioclavicular (AC) Joint',
        type: 'Plane Joint (Synovial)',
        articulation: 'Acromial end of clavicle + Acromion of Scapula.',
        movements: [
            'Fine adjustments of scapular movement.',
            'Upward/Downward Rotation',
            'Internal/External Rotation (winging)',
            'Anterior/Posterior Tipping'
        ],
        clinicalNotes: 'AC Separation Grades: Type 1 (Sprain AC lig), Type 2 (Tear AC, Sprain CC), Type 3 (Tear AC & CC, Sup displacement), Type 4 (Post displacement), Type 5 (Subcutaneous), Type 6 (Inferior). Stabilized by AC (Sup/Inf) and Coracoclavicular (Conoid/Trapezoid) ligaments.'
    },
    {
        id: 'gh-joint',
        name: 'Glenohumeral (GH) Joint',
        type: 'Ball and Socket (Synovial)',
        articulation: 'Head of Humerus + Glenoid Fossa (deepened by Labrum).',
        movements: [
            'Flexion/Extension',
            'Abduction/Adduction',
            'Internal (Medial) / External (Lateral) Rotation'
        ],
        clinicalNotes: 'Unstable. Stabilizers: GH Ligaments (Sup, Mid, Inf), Coracohumeral Lig, Coracoacromial Arch (prevents sup displacement). Bursa: Subacromial (impingement), Subscapular. SLAP Lesions (Labrum). Transverse Humeral Ligament bridges bicipital groove.'
    },
    {
        id: 'st-joint',
        name: 'Scapulothoracic Articulation',
        type: 'Functional Joint (Not a true joint)',
        articulation: 'Anterior surface of subscapularis + Posterior thoracic wall (Serratus Anterior).',
        movements: [
            'Elevation/Depression (Shrugging)',
            'Protraction/Retraction (Reaching)',
            'Upward/Downward Rotation'
        ],
        clinicalNotes: 'Scapulohumeral Rhythm: 2:1 ratio (2° GH : 1° ST). Needs ~60° upward rotation for full elevation.'
    }
];
