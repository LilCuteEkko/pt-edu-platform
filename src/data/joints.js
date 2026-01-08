
export const joints = [
    {
        id: 'sc-joint',
        name: 'Sternoclavicular (SC) Joint',
        category: 'Shoulder',
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
        category: 'Shoulder',
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
        category: 'Shoulder',
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
        category: 'Shoulder',
        type: 'Functional Joint (Not a true joint)',
        articulation: 'Anterior surface of subscapularis + Posterior thoracic wall (Serratus Anterior).',
        movements: [
            'Elevation/Depression (Shrugging)',
            'Protraction/Retraction (Reaching)',
            'Upward/Downward Rotation'
        ],
        clinicalNotes: 'Scapulohumeral Rhythm: 2:1 ratio (2° GH : 1° ST). Needs ~60° upward rotation for full elevation.'
    },
    // 5. Head (TMJ & Skull)
    {
        id: 'tmj',
        name: 'Temporomandibular Joint (TMJ)',
        category: 'Head',
        type: 'Modified Hinge (Synovial)',
        articulation: 'Head of Mandibular Condyle + Mandibular Fossa/Articular Eminence of Temporal Bone.',
        movements: [
            'Depression/Elevation (Open/Close)',
            'Protrusion/Retrusion',
            'Lateral Deviation',
            'Rotation (Inferior cavity) / Translation (Superior cavity)'
        ],
        clinicalNotes: 'Discs can become displaced (Clicking/Locking). Anterior Disc Displacement with Reduction = Click. Without Reduction = Lock (limit opening) "Closed Lock". Open Lock (dislocation) = condyle stuck anterior to tubercle.'
    },
    {
        id: 'cranial-sutures',
        name: 'Cranial Sutures',
        category: 'Head',
        type: 'Suture (Fibrous)',
        articulation: 'Coronal (Frontal-Parietal), Sagittal (Parietal-Parietal), Lambdoid (Parietal-Occipital), Squamous (Temporal-Parietal).',
        movements: [
            'No active movement (Synarthrosis).'
        ],
        clinicalNotes: 'Fontanelles in infants allow for brain growth/birth.'
    },
    // 6. Pelvis
    {
        id: 'si-joint',
        name: 'Sacroiliac (SI) Joint',
        category: 'Pelvis',
        type: 'Synovial (Ant) / Syndesmosis (Post)',
        articulation: 'Auricular surfaces of Sacrum and Ilium.',
        movements: [
            'Nutation (Sacral Flexion)',
            'Counternutation (Sacral Extension)',
            'Small gliding/rotational movements'
        ],
        clinicalNotes: 'Supported by Ant/Post/Interosseous SI ligaments. Nutation increases stability (Form Closure). Dysfunction common in pregnancy.'
    },
    {
        id: 'pubic-symphysis',
        name: 'Pubic Symphysis',
        category: 'Pelvis',
        type: 'Cartilaginous (Secondary)',
        articulation: 'R/L Pubic bodies + Interpubic disc (fibrocartilage).',
        movements: [
            'Very limited mobility.',
            'expands slightly during childbirth.'
        ],
        clinicalNotes: 'Disc is thicker in females. Superior/Inferior Pubic ligaments support it.'
    },
    {
        id: 'lumbosacral-joint',
        name: 'Lumbosacral Joint (L5-S1)',
        category: 'Pelvis',
        type: 'Symphysis (Body) / Synovial (Facets)',
        articulation: 'L5 Body/S1 Body (Disc) + Facets (Zygapophyseal).',
        movements: [
            'Flexion/Extension',
            'Lateral Flexion',
            'Rotation'
        ],
        clinicalNotes: 'Supported by Iliolumbar ligament (L5 TP to Ilium). L5-S1 is most common site of spondylolisthesis.'
    },
    // 7. Lower Limb (Joints)
    {
        id: 'hip-joint',
        name: 'Hip Joint (Coxafemoral)',
        category: 'Lower Limb',
        type: 'Ball and Socket (Synovial)',
        articulation: 'Head of Femur + Acetabulum of Os Coxae (deepened by Labrum).',
        movements: [
            'Flexion/Extension',
            'Abduction/Adduction',
            'Internal (Medial) / External (Lateral) Rotation',
            'Circumduction'
        ],
        clinicalNotes: 'Very stable due to bony congruence and strong ligaments (Iliofemoral, Pubofemoral, Ischiofemoral). Foveal artery supplies head in children; Retinacular arteries (Med Circumflex) in adults (AVN risk).'
    },
    {
        id: 'knee-joint',
        name: 'Knee Joint (Tibiofemoral & Patellofemoral)',
        category: 'Lower Limb',
        type: 'Modified Hinge (Tibiofemoral) / Plane (Patellofemoral)',
        articulation: 'Femoral Condyles + Tibial Plateaus; Patella + Femoral Patellar Surface.',
        movements: [
            'Flexion/Extension',
            'Medial/Lateral Rotation (when flexed)'
        ],
        clinicalNotes: 'Screw Home Mechanism: Tibia ER on Femur (open chain) to lock in extension. Unlocked by Popliteus. Q-Angle (Lines from ASIS->Patella->Tibial Tuberosity).'
    },
    {
        id: 'proximal-tibiofibular-joint',
        name: 'Proximal Tibiofibular Joint',
        category: 'Lower Limb',
        type: 'Plane (Synovial)',
        articulation: 'Head of Fibula + Lateral Condyle of Tibia.',
        movements: [
            'Slight gliding during ankle movement.'
        ],
        clinicalNotes: 'Not part of the knee joint proper. Strengthened by Ant/Post Tibiofibular ligaments.'
    },
    {
        id: 'distal-tibiofibular-joint',
        name: 'Distal Tibiofibular Joint',
        category: 'Lower Limb',
        type: 'Fibrous (Syndesmosis)',
        articulation: 'Distal Medial Fibula + Fibular Notch of Tibia.',
        movements: [
            'Slight movement to accommodate Talus during dorsiflexion ("Mortise" spreading).'
        ],
        clinicalNotes: 'Essential for stability. High ankle sprain ("Syndesmotic Sprain") involves damage here.'
    },
    {
        id: 'ankle-joint',
        name: 'Ankle Joint (Talocrural)',
        category: 'Lower Limb',
        type: 'Synovial Hinge',
        articulation: 'Distal Tibia/Fibula (Mortise) + Talus (Trochlea).',
        movements: [
            'Dorsiflexion',
            'Plantarflexion'
        ],
        clinicalNotes: 'Stable in Dorsiflexion (widest part of Talus in Mortise). "High Ankle Sprain" involves Syndesmosis.'
    },
    {
        id: 'subtalar-joint',
        name: 'Subtalar Joint (Talocalcaneal)',
        category: 'Lower Limb',
        type: 'Synovial Plane',
        articulation: 'Talus (Posterior Calcaneal Facet) + Calcaneus (Posterior Talar Facet).',
        movements: [
            'Inversion/Eversion (Supination/Pronation components).'
        ],
        clinicalNotes: 'Anatomic Subtalar = Talocalcaneal. Surgical Subtalar = Talocalcaneal + Talocalcaneonavicular.'
    },
    {
        id: 'talocalcaneonavicular-joint',
        name: 'Talocalcaneonavicular Joint (TCN)',
        category: 'Lower Limb',
        type: 'Synovial Ball and Socket (Talonavicular part)',
        articulation: 'Talus Head + Navicular + Calcaneus (Anterior/Middle facets).',
        movements: [
            'Supination/Pronation (Triplane motion).'
        ],
        clinicalNotes: 'Keystone of movement in the foot. Spring Ligament supports it.'
    },
    {
        id: 'calcaneocuboid-joint',
        name: 'Calcaneocuboid Joint',
        category: 'Lower Limb',
        type: 'Synovial Plane (Saddle-like)',
        articulation: 'Anterior Calcaneus + Posterior Cuboid.',
        movements: [
            'Gliding (Supination/Pronation components).'
        ],
        clinicalNotes: 'Very stable. Supported by Long/Short Plantar ligaments.'
    },
    {
        id: 'transverse-tarsal-joint',
        name: 'Transverse Tarsal Joint (Chopart\'s)',
        category: 'Lower Limb',
        type: 'Compound Joint',
        articulation: 'Talonavicular + Calcaneocuboid joints.',
        movements: [
            'Midfoot Supination/Pronation.'
        ],
        clinicalNotes: 'Amputation site (Chopart\'s amputation).'
    },
    {
        id: 'tarsometatarsal-joints',
        name: 'Tarsometatarsal Joints (Lisfranc\'s)',
        category: 'Lower Limb',
        type: 'Synovial Plane',
        articulation: 'Distal Tarsals + Bases of Metatarsals.',
        movements: [
            'Gliding (very little motion).'
        ],
        clinicalNotes: 'Lisfranc Injury (fracture/dislocation) - often missed. 2nd Metatarsal is key for stability.'
    },
    {
        id: 'metatarsophalangeal-joints',
        name: 'Metatarsophalangeal Joints (MTP)',
        category: 'Lower Limb',
        type: 'Synovial Condyloid',
        articulation: 'Metatarsal Heads + Proximal Phalanges.',
        movements: [
            'Flexion/Extension',
            'Abduction/Adduction',
            'Circumduction'
        ],
        clinicalNotes: 'Gout (1st MTP). Turf Toe (Hyperextension 1st MTP). Bunions (Hallux Valgus).'
    },
    {
        id: 'interphalangeal-joints-foot',
        name: 'Interphalangeal Joints (PIP/DIP)',
        category: 'Lower Limb',
        type: 'Synovial Hinge',
        articulation: 'Phalanges (Prox/Mid/Distal).',
        movements: [
            'Flexion/Extension'
        ],
        clinicalNotes: 'Hammer Toe (PIP flexion), Claw Toe (MTP ext + IP flex), Mallet Toe (DIP flex).'
    }
];
