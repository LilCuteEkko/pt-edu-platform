
export const bones = [
    {
        id: 'clavicle',
        name: 'Clavicle (Collarbone)',
        category: 'Shoulder Girdle',
        description: 'S-shaped bone that connects the upper extremity to the axial skeleton. Allows for optimal shoulder elevation.',
        landmarks: [
            'Sternal End: Articulates with manubrium (SC joint).',
            'Acromial End: Articulates with acromion of scapula (AC joint).',
            'Deltoid Tubercle: Attachment for anterior deltoid.',
            'Conoid Tubercle (Inferior): Attachment for conoid ligament.',
            'Trapezoid Line (Inferior): Attachment for trapezoid ligament.',
            'Subclavian Groove: Attachment for subclavius muscle.',
            'Impression for Costoclavicular Ligament.'
        ],
        articulations: [
            'Sternoclavicular (SC) Joint (Medial)',
            'Acromioclavicular (AC) Joint (Lateral)'
        ],
        clinicalNotes: 'Fractures are most common at the junction of the middle and lateral thirds. Severe OA of SC/AC joints limits function.'
    },
    {
        id: 'scapula',
        name: 'Scapula (Shoulder Blade)',
        category: 'Shoulder Girdle',
        description: 'Triangular flat bone that provides attachment for roughly 17 muscles. Must rotate upward to allow full arm abduction.',
        landmarks: [
            'Acromion: Roof of shoulder; AC joint.',
            'Coracoid Process: "Lighthouse" for PTs (Pec Minor, Short head Biceps, Coracobrachialis).',
            'Glenoid Cavity (Fossa): Socket for humeral head.',
            'Supraglenoid Tubercle: Long head of biceps origin.',
            'Infraglenoid Tubercle: Long head of triceps origin.',
            'Spine of Scapula: Separates supra/infraspinous fossae.',
            'Suprascapular Notch: Passage for suprascapular nerve.',
            'Medial, Lateral, and Superior Borders.',
            'Superior, Inferior, and Lateral Angles.'
        ],
        articulations: [
            'Glenohumeral (GH) Joint',
            'Acromioclavicular (AC) Joint',
            'Scapulothoracic Articulation (Functional)'
        ],
        clinicalNotes: 'Winging indicates Serratus Anterior weakness (Long Thoracic Nerve). Anterior tilt (Pec Minor tightness) affects posture.'
    },
    {
        id: 'humerus',
        name: 'Humerus',
        category: 'Arm',
        description: 'Long bone of the arm. Proximal end articulates with scapula; distal end with radius/ulna.',
        landmarks: [
            'Head: Articulates with glenoid.',
            'Anatomical Neck: Indentation distal to head.',
            'Surgical Neck: Common fracture site.',
            'Greater Tubercle: Attachment for Supraspinatus, Infraspinatus, Teres Minor.',
            'Lesser Tubercle: Attachment for Subscapularis.',
            'Bicipital Groove (Intertubercular Sulcus): Long head biceps tendon. PLT insert here (Pec Major-Lat lip, Lats-Floor, Teres Major-Med lip).',
            'Deltoid Tuberosity: Insertion of deltoid.',
            'Radial (Spiral) Groove: Passage for Radial nerve.',
            'Medial/Lateral Epicondyles.',
            'Trochlea & Capitulum (Distal).'
        ],
        articulations: [
            'Glenohumeral (GH) Joint',
            'Humeroulnar Joint (Elbow)',
            'Humeroradial Joint (Elbow)'
        ],
        clinicalNotes: 'Neer\'s Classification for proximal fractures (2-part, 3-part, 4-part). Radial nerve risk with mid-shaft fractures.'
    }
];
