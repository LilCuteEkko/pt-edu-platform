
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
    },
    // Spine & Craniovertebral
    {
        id: 'iv-joints',
        name: 'Intervertebral (IV) Joints',
        type: 'Symphysis (Cartilaginous)',
        articulation: 'Vertebral bodies connected by Intervertebral Disc (IVD).',
        movements: [
            'Shock absorption',
            'Mobility: Compression, Distraction, Tilt',
            'Limits: Height ratio determines mobility (Cervical most, Thoracic least relative).'
        ],
        clinicalNotes: 'Disc components: Annulus Fibrosus (outer rings, tensile strength), Nucleus Pulposus (inner gel, hydrophilic). No disc C0-C1, C1-C2. Herniation common (Posterolateral). Degeneration = less H20.'
    },
    {
        id: 'facet-joints',
        name: 'Zygapophyseal (Facet) Joints',
        type: 'Plane (Synovial)',
        articulation: 'Superior & Inferior Articular Processes of adjacent vertebrae.',
        movements: [
            'Gliding (Opening/Closing)',
            'Guide and limit motion based on planar orientation.',
            'Cervical: 45° (All motions)',
            'Thoracic: Frontal (Rotation/SB)',
            'Lumbar: Sagittal (Flex/Ext)'
        ],
        clinicalNotes: 'Weight bearing in Cervical/Lumbar. Spondylosis (OA). Stenosis of IV foramen from osteophytes. Meniscoids can get entrapped.'
    },
    {
        id: 'uncovertebral-joints',
        name: 'Uncovertebral Joints (Joints of Luschka)',
        type: 'Pseudo-joint (Synovial-like)',
        articulation: 'Uncinate processes C3-C7.',
        movements: [
            'Guide flexion/extension',
            'Limit lateral flexion'
        ],
        clinicalNotes: 'Develop clefts (fissures) with age. Site of bone spur formation affecting nerve roots.'
    },
    {
        id: 'ao-joint',
        name: 'Atlanto-Occipital (OA) Joint',
        type: 'Condyloid (Synovial)',
        articulation: 'Occipital condyles + C1 Superior Facets.',
        movements: [
            'Flexion/Extension ("Yes" nod)',
            'Slight lateral flexion'
        ],
        clinicalNotes: 'C0-C1. Convex occiput on concave atlas.'
    },
    {
        id: 'aa-joint',
        name: 'Atlanto-Axial (AA) Joint',
        type: 'Pivot / Plane (Synovial)',
        articulation: 'Median: Dens + C1 Arch (Pivot). Lateral: C1 Inf Facets + C2 Sup Facets (Plane).',
        movements: [
            'Rotation (50% of cervical rotation) ("No" shake)',
            'Screw-home mechanism (vertical vertical displacement)'
        ],
        clinicalNotes: 'Dens Held by Transverse Ligament. Instability in RA / Down Syndrome.'
    },
    {
        id: 'si-joint',
        name: 'Sacroiliac (SI) Joint',
        type: 'Compound (Synovial Ant / Syndesmosis Post)',
        articulation: 'Auricular surface of Sacrum + Ilium.',
        movements: [
            'Nutration (Sacral flexion)',
            'Counternutation (Sacral extension)'
        ],
        clinicalNotes: 'Transfers weight from spine to LE. Form/Force closure stability.'
    }
];
