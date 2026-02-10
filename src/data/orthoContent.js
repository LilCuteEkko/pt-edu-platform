export const headNeckContent = {
    pathologyInfo: true,
    anatomy: {
        bones: [
            { name: 'Cervical Vertebrae (C1-C7)', description: 'C1 (Atlas) and C2 (Axis) allow for specialized rotation. C3-C7 are typical vertebrae.' },
            { name: 'Skull', description: 'Occiput articulates with Atlas (C0-C1). Temporomandibular Joint (TMJ).' },
            { name: 'Hyoid', description: 'Floating bone, attachment for anterior neck muscles.' }
        ],
        joints: [
            { name: 'Atlanto-Occipital (AO) Joint', description: 'C0-C1. Primary movement: Flexion/Extension ("Yes" nod).' },
            { name: 'Atlanto-Axial (AA) Joint', description: 'C1-C2. Primary movement: Rotation ("No" shake).' },
            { name: 'Facet Joints (Z-joints)', description: 'C2-C7. Oriented 45° to allow flexion, extension, lateral flexion, and rotation.' },
            { name: 'Temporomandibular Joint (TMJ)', description: 'Hinge and gliding joint. Disc allows complex jaw movement.' }
        ],
        muscles: {
            rotatorCuff: [], // Recycled structure
            other: [
                { name: 'Sternocleidomastoid (SCM)', action: 'Contralateral rot, ipsilateral SB, b/l flexion' },
                { name: 'Upper Trapezius', action: 'Extension, ipsilateral SB, contralateral rot' },
                { name: 'Scalenes (Ant/Mid/Post)', action: 'Rib elevation (breathing), lateral flexion' },
                { name: 'Levator Scapulae', action: 'Scapular elevation, ipsilateral neck SB' },
                { name: 'Suboccipitals', action: 'Fine head control, extension, rotation' },
                { name: 'Deep Neck Flexors', action: 'Chin tuck, cervical stabilization' }
            ]
        },
        neurovascular: {
            nerves: ['Cervical Plexus (C1-C4)', 'Brachial Plexus Roots (C5-T1)', 'Greater Occipital Nerve'],
            vascular: ['Vertebral Arteries (pass through transverse foramen)', 'Carotid Arteries']
        }
    },
    function: {
        biomechanics: [
            'Coupled Motion: Side bending and rotation occur to the same side in lower C-spine (C2-C7).',
            'Upper Cervical (C0-C2): Accounts for ~50% of total neck rotation and distinct mechanics.',
            'Discs: Provide shock absorption and mobility; no disc between C0-C1 or C1-C2.'
        ],
        rom: [
            { movement: 'Flexion', value: '0-45°' },
            { movement: 'Extension', value: '0-45°' },
            { movement: 'Lateral Flexion', value: '0-45°' },
            { movement: 'Rotation', value: '0-60°' }
        ],
        commonConditions: [
            { category: 'Mechanical', conditions: 'Cervical Radiculopathy, Facet Dysfunction' },
            { category: 'Traumatic', conditions: 'Whiplash (WAD), Fractures' },
            { category: 'Headache', conditions: 'Cervicogenic, Tension, Migraine' },
            { category: 'Degenerative', conditions: 'Cervical Spondylosis, Stenosis' },
            { category: 'TMJ', conditions: 'TMD, Disc displacement' }
        ]
    },
    specialTests: [
        {
            category: 'Radiculopathy (Cluster)', tests: [
                { name: 'Spurling\'s Test', purpose: 'Nerve Root Compression', positive: 'Radiating pain to arm' },
                { name: 'Distraction Test', purpose: 'Radiculopathy Relief', positive: 'Reduction of symptoms' },
                { name: 'Upper Limb Tension Tests (ULTT)', purpose: 'Neural Tension', positive: 'Reproduction of symptoms' }
            ]
        },
        {
            category: 'Instability', tests: [
                { name: 'Sharp-Purser', purpose: 'Transverse Ligament Integrity', positive: 'C1 reduction/clunk/relief' },
                { name: 'Alar Ligament Test', purpose: 'Alar Ligament', positive: 'Delay in C2 movement with SB' }
            ]
        },
        {
            category: 'Thoracic Outlet', tests: [
                { name: 'Adson\'s', purpose: 'Scalene Impingement', positive: 'Loss of pulse' },
                { name: 'Roos Test', purpose: 'TOS', positive: 'Heaviness/weakness/numbness' }
            ]
        }
    ]
};

export const elbowContent = {
    pathologyInfo: true,
    anatomy: {
        bones: [
            { name: 'Humerus', description: 'Distal end features Medial/Lateral Epicondyles, Trochlea, Capitulum.' },
            { name: 'Ulna', description: 'Medial forearm bone. Olecranon process forms "elbow tip".' },
            { name: 'Radius', description: 'Lateral forearm bone. Radial head rotates for pronation/supination.' }
        ],
        joints: [
            { name: 'Humeroulnar Joint', description: 'Hinge joint. Primary flexion/extension.' },
            { name: 'Humeroradial Joint', description: 'Gliding/Hinge. Flexion/extension + rotation.' },
            { name: 'Proximal Radioulnar Joint', description: 'Pivot joint. Pronation/Supination.' }
        ],
        muscles: {
            rotatorCuff: [],
            other: [
                { name: 'Biceps Brachii', action: 'Flexion, Supination' },
                { name: 'Brachialis', action: 'Primary flexor' },
                { name: 'Brachioradialis', action: 'Flexion (neutral)' },
                { name: 'Triceps Brachii', action: 'Extension' },
                { name: 'Common Extensor Origin', action: 'Lateral Epicondyle (Wrist extensors)' },
                { name: 'Common Flexor Origin', action: 'Medial Epicondyle (Wrist flexors)' }
            ]
        },
        neurovascular: {
            nerves: ['Ulnar Nerve (Cubital Tunnel)', 'Radial Nerve', 'Median Nerve'],
            vascular: ['Brachial Artery bifurcates into Radial and Ulnar Arteries at cubital fossa']
        }
    },
    function: {
        biomechanics: [
            'Carrying Angle: Normal valgus angulation (Men: 5-10°, Women: 10-15°).',
            'Stability: Highly conforming bony joint (ulnohumeral) + strong ligamentous support.'
        ],
        rom: [
            { movement: 'Flexion', value: '0-150°' },
            { movement: 'Extension', value: '0°' },
            { movement: 'Supination', value: '0-80°' },
            { movement: 'Pronation', value: '0-80°' }
        ],
        commonConditions: [
            { category: 'Tendinopathy', conditions: 'Lateral Epicondylitis (Tennis Elbow), Medial Epicondylitis (Golfer\'s Elbow)' },
            { category: 'Nerve', conditions: 'Cubital Tunnel Syndrome (Ulnar), Pronator Teres Syndrome (Median)' },
            { category: 'Traumatic', conditions: 'Distal Humerus Fx, Radial Head Fx, Dislocations' },
            { category: 'Pediatric', conditions: 'Nursemaid\'s Elbow, Little League Elbow' }
        ]
    },
    specialTests: [
        {
            category: 'Tendinopathy', tests: [
                { name: 'Cozen\'s Test', purpose: 'Lateral Epicondylitis', positive: 'Pain at Lat Epi with resisted wrist ext/RD' },
                { name: 'Mill\'s Test', purpose: 'Lat Epicondylitis', positive: 'Pain with passive stretch' },
                { name: 'Golfer\'s Elbow Test', purpose: 'Medial Epicondylitis', positive: 'Pain at Med Epi with resisted wrist flex' }
            ]
        },
        {
            category: 'Ligamentous', tests: [
                { name: 'Valgus Stress', purpose: 'UCL/MCL', positive: 'Laxity/Pain' },
                { name: 'Varus Stress', purpose: 'LCL/RCL', positive: 'Laxity/Pain' }
            ]
        },
        {
            category: 'Neurological', tests: [
                { name: 'Tinel\'s at Elbow', purpose: 'Ulnar Nerve', positive: 'Tingling down ulnar distribution' },
                { name: 'Elbow Flexion Test', purpose: 'Cubital Tunnel', positive: 'Numbness/tingling in ulnar digits' }
            ]
        }
    ]
};

export const wristHandContent = {
    pathologyInfo: true,
    anatomy: {
        bones: [
            { name: 'Carpals (8)', description: 'Proximal: Scaphoid (Snuffbox), Lunate, Triquetrum, Pisiform. Distal: Trapezium, Trapezoid, Capitate, Hamate.' },
            { name: 'Metacarpals (5)', description: 'Framework of palm. 1st MC (Thumb) is most mobile.' },
            { name: 'Phalanges (14)', description: 'Proximal, Middle, Distal (Thumb has only Prox/Distal).' }
        ],
        joints: [
            { name: 'Radiocarpal', description: 'Radius-Scaphoid/Lunate. Primary wrist flex/ext/dev.' },
            { name: 'Midcarpal', description: 'Between proximal & distal rows. Essential for full ROM.' },
            { name: 'Carpometacarpal (CMC)', description: '1st CMC (Saddle) allows opposition. 2nd-5th stable.' },
            { name: 'MCP/PIP/DIP', description: 'Hinge joints of fingers (MCP allows abd/add too).' }
        ],
        muscles: {
            rotatorCuff: [],
            other: [],
            extrinsic: [
                { name: 'Flexor Carpi Radialis/Ulnaris', action: 'Wrist Flexion, Dev' },
                { name: 'Flexor Digitorum Sup/Prof', action: 'Finger Flexion (PIP/DIP)' },
                { name: 'Flexor Pollicis Longus', action: 'Thumb Flexion' },
                { name: 'Extensor Carpi Radialis/Ulnaris', action: 'Wrist Extension, Dev' },
                { name: 'Extensor Digitorum', action: 'Finger Extension' },
                { name: 'Abductor Pollicis Longus', action: 'Thumb Abduction' },
                { name: 'Extensor Pollicis Long/Brev', action: 'Thumb Extension' }
            ],
            intrinsic: [
                { name: 'Thenar Group', action: 'Thumb Abd/Flex/Oppose (Median N except Add)' },
                { name: 'Hypothenar Group', action: 'Pinky Abd/Flex/Oppose (Ulnar N)' },
                { name: 'Lumbricals', action: 'Flex MCP, Extend IPs' },
                { name: 'Interossei (Palmar/Dorsal)', action: 'Add (PAD) / Abd (DAB)' }
            ]
        },
        neurovascular: {
            nerves: [
                'Median: Carpal Tunnel. Sensory: Thumb-Ring(1/2). Motor: Thenar, Lat Lumbricals.',
                'Ulnar: Guyon\'s Canal. Sensory: Ring(1/2)-Pinky. Motor: Intrinsics, Adductor Pollicis.',
                'Radial: Dorsal sensory. Motor: Extensors.'
            ],
            vascular: ['Radial Artery (Deep Arch)', 'Ulnar Artery (Superficial Arch)']
        }
    },
    function: {
        biomechanics: [
            'Dart Thrower\'s Motion: Most functional wrist movement (Ext/Rad Dev -> Flex/Ulnar Dev).',
            'Grip Types: Power (Hammer), Precision (Needle), Hook (Briefcase), Spherical.',
            'Thumb Opposition: Rotation at 1st CMC is key to dexterity.'
        ],
        rom: [
            { movement: 'Flexion', value: '0-80°' },
            { movement: 'Extension', value: '0-70°' },
            { movement: 'Radial Deviation', value: '0-20°' },
            { movement: 'Ulnar Deviation', value: '0-30°' },
            { movement: 'Supination/Pronation', value: '0-80°' }
        ],
        commonConditions: [
            { category: 'Traumatic', conditions: 'Colles\' Fx, Scaphoid Fx, Boxer\'s Fx, Gamekeeper\'s Thumb' },
            { category: 'Nerve', conditions: 'Carpal Tunnel, Cubital Tunnel, Guyon\'s Canal' },
            { category: 'Tendon', conditions: 'De Quervain\'s, Trigger Finger' },
            { category: 'Arthritis', conditions: '1st CMC OA, Rheumatoid Arthritis' },
            { category: 'Soft Tissue', conditions: 'Dupuytren\'s, Ganglion Cyst' }
        ]
    },
    specialTests: [
        {
            category: 'Nerve Compression', tests: [
                { name: 'Phalen\'s', purpose: 'Carpal Tunnel', positive: 'Tingling in median dist.' },
                { name: 'Tinel\'s (Wrist)', purpose: 'Median N irritability', positive: 'Tingling' },
                { name: 'Durkan\'s', purpose: 'Carpal Tunnel (Compression)', positive: 'Symptoms reproduced' },
                { name: 'Froment\'s Sign', purpose: 'Ulnar N Palsy', positive: 'Thumb IP flexion during pinch' }
            ]
        },
        {
            category: 'Tendon/Ligament', tests: [
                { name: 'Finkelstein\'s', purpose: 'De Quervain\'s', positive: 'Pain 1st dorsal compartment' },
                { name: 'UCL Stress', purpose: 'Gamekeeper\'s Thumb', positive: 'Laxity >30° or pain' },
                { name: 'Watson\'s Shift', purpose: 'Scapholunate Instability', positive: 'Painful clunk' },
                { name: 'TFCC Load', purpose: 'TFCC Tear', positive: 'Clicking/Pain w/ compression + deviation' }
            ]
        },
        {
            category: 'Arthritis/Other', tests: [
                { name: 'Thumb Grind', purpose: 'CMC OA', positive: 'Pain/Crepitus' },
                { name: 'Allen Test', purpose: 'Vascular Patency', positive: 'Delayed flushing' },
                { name: 'Bunnel-Littler', purpose: 'Intrinsic Tightness', positive: 'PIP flex limited w/ MCP ext' }
            ]
        }
    ]
};

export const thoracicRibsContent = {
    pathologyInfo: true,
    anatomy: {
        bones: [
            { name: 'Thoracic Vertebrae (T1-T12)', description: 'Articulate with ribs. Limited mobility due to rib cage.' },
            { name: 'Ribs (1-12)', description: 'True (1-7), False (8-10), Floating (11-12).' },
            { name: 'Sternum', description: 'Manubrium, Body, Xiphoid Process.' }
        ],
        joints: [
            { name: 'Costovertebral', description: 'Rib head to vertebral body.' },
            { name: 'Costotransverse', description: 'Rib tubercle to transverse process.' },
            { name: 'Costochondral', description: 'Rib to cartilage.' },
            { name: 'Sternocostal', description: 'Cartilage to sternum.' }
        ],
        muscles: {
            rotatorCuff: [],
            other: [
                { name: 'Intercostals', action: 'Respiration' },
                { name: 'Erector Spinae', action: 'Extension' },
                { name: 'Diaphragm', action: 'Primary muscle of inspiration' },
                { name: 'Rhomboids/Traps', action: 'Scapular attachment to T-spine' }
            ]
        },
        neurovascular: {
            nerves: ['Intercostal Nerves'],
            vascular: ['Aorta, Azygos Vein']
        }
    },
    function: {
        biomechanics: [
            'Pump Handle Motion: Ribs 1-6 apply A-P expansion.',
            'Bucket Handle Motion: Ribs 7-10 apply Lateral expansion.',
            'Stability: Provides stable base for C-spine and L-spine and protection for organs.'
        ],
        rom: [
            { movement: 'Flexion', value: '20-45°' },
            { movement: 'Extension', value: '25-45°' },
            { movement: 'Lateral Flexion', value: '20-40°' },
            { movement: 'Rotation', value: '35-50°' }
        ],
        commonConditions: [
            { category: 'Structural', conditions: 'Scoliosis, Kyphosis (Scheuermann\'s)' },
            { category: 'Joint', conditions: 'Costochondritis, Rib Hypomobility' },
            { category: 'Traumatic', conditions: 'Rib Fractures, Compression Fractures' },
            { category: 'Muscle', conditions: 'Postural Strain, T4 Syndrome' }
        ]
    },
    specialTests: [
        {
            category: 'Scoliosis', tests: [
                { name: 'Adam\'s Forward Bend', purpose: 'Scoliosis Screening', positive: 'Rib hump asymmetry' }
            ]
        },
        {
            category: 'Thoracic Outlet', tests: [
                { name: 'Roos', purpose: 'TOS', positive: 'Symptoms reproduction' },
                { name: 'Adson\'s', purpose: 'Scalene involvement', positive: 'Pulse loss' }
            ]
        },
        {
            category: 'Neural', tests: [
                { name: 'Slump Test', purpose: 'Dural Tension', positive: 'Symptom reproduction' }
            ]
        }
    ]
};

export const lumbarPelvicContent = {
    pathologyInfo: true,
    anatomy: {
        bones: [
            { name: 'Lumbar Vertebrae (L1-L5)', description: 'Large bodies for weight bearing.' },
            { name: 'Sacrum', description: 'Fused S1-S5.' },
            { name: 'Pelvis (Innominate)', description: 'Ilium, Ischium, Pubis.' },
            { name: 'Coccyx', description: 'Tailbone.' }
        ],
        joints: [
            { name: 'Facet Joints', description: 'Sagittal plane orientation (L1-L5) facilitates Flex/Ext.' },
            { name: 'Intervertebral Discs', description: 'Nucleus pulposus + Annulus fibrosus.' },
            { name: 'Sacroiliac Joint (SIJ)', description: 'Stable force transfer joint between spine and lower extremities.' },
            { name: 'Pubic Symphysis', description: 'Cartilaginous joint.' }
        ],
        muscles: {
            rotatorCuff: [],
            other: [
                { name: 'Erector Spinae', action: 'Extension' },
                { name: 'Multifidus', action: 'Segmental stability' },
                { name: 'Quadratus Lumborum', action: 'Lat flex, hip hiking' },
                { name: 'Psoas Major', action: 'Hip Flexion, lumbar stabilizer' },
                { name: 'Rectus/Obliques/TA', action: 'Core stability, flexion, rotation' }
            ]
        },
        neurovascular: {
            nerves: ['Lumbar Plexus', 'Sacral Plexus', 'Sciatic Nerve'],
            vascular: ['Abdominal Aorta bifurcates to Common Iliacs']
        }
    },
    function: {
        biomechanics: [
            'Lumbopelvic Rhythm: Coordinated movement between L-spine and hips during bending.',
            'Nutations/Counternutation: Sacral movements relative to ilium.',
            'Core Stability: Cylinder of muscular support (Diaphragm, Pelvic Floor, TA, Multifidus).'
        ],
        rom: [
            { movement: 'Flexion', value: '40-60°' },
            { movement: 'Extension', value: '20-35°' },
            { movement: 'Lateral Flexion', value: '15-20°' },
            { movement: 'Rotation', value: '3-18° (Limited)' }
        ],
        commonConditions: [
            { category: 'Disc', conditions: 'Herniation (HNP), DDD' },
            { category: 'Stenosis', conditions: 'Central Canal, Lateral Recess' },
            { category: 'Structural', conditions: 'Spondylolisthesis, Spondylolysis' },
            { category: 'SIJ', conditions: 'SIJ Dysfunction, Sacroiliitis' }
        ]
    },
    specialTests: [
        {
            category: 'Neurological', tests: [
                { name: 'Straight Leg Raise (SLR)', purpose: 'Lumbar Radiculopathy (Herniation)', positive: 'Radiating pain <70°' },
                { name: 'Crossed SLR', purpose: 'Large Herniation', positive: 'Pain in affected leg when lifting unaffected' },
                { name: 'Slump Test', purpose: 'Dural Tension', positive: 'Symptoms' }
            ]
        },
        {
            category: 'SIJ Cluster (Laslett\'s)', tests: [
                { name: 'Distraction', purpose: 'SIJ Pain', positive: 'Pain' },
                { name: 'Compression', purpose: 'SIJ Pain', positive: 'Pain' },
                { name: 'Thigh Thrust', purpose: 'SIJ Pain', positive: 'Pain' },
                { name: 'Sacral Thrust', purpose: 'SIJ Pain', positive: 'Pain' },
                { name: 'Gaenslen\'s', purpose: 'SIJ Pain', positive: 'Pain' }
            ]
        }
    ]
};

export const hipContent = {
    pathologyInfo: true,
    anatomy: {
        bones: [
            { name: 'Femur', description: 'Head, Neck, Greater/Lesser Trochanters.' },
            { name: 'Acetabulum', description: 'Socket of pelvis (Ilium, Ischium, Pubis).' }
        ],
        joints: [
            { name: 'Femoroacetabular Joint', description: 'Ball and socket. Deep, stable, 3 DOFs.' },
            { name: 'Labrum', description: 'Fibrocartilage rim deepening the socket.' }
        ],
        muscles: {
            rotatorCuff: [],
            other: [
                { name: 'Glute Max', action: 'Extension, ER' },
                { name: 'Glute Med/Min', action: 'Abduction, Stability' },
                { name: 'Iliopsoas', action: 'Flexion' },
                { name: 'Adductor Group', action: 'Adduction' },
                { name: 'Hamstrings', action: 'Extension' },
                { name: 'Deep Rotators (Piriformis etc)', action: 'ER' }
            ]
        },
        neurovascular: {
            nerves: ['Sciatic', 'Femoral', 'Obturator', 'Gluteal Nerves'],
            vascular: ['Femoral Artery', 'Circumflex Arteries (supply femoral head)']
        }
    },
    function: {
        biomechanics: [
            'Trendelenburg Sign: Weakness of Glute Med causing contralateral pelvic drop.',
            'Hip-Spine Connection: Lack of hip extension often compensated by lumbar extension.'
        ],
        rom: [
            { movement: 'Flexion', value: '0-120°' },
            { movement: 'Extension', value: '0-20°' },
            { movement: 'Abduction', value: '0-45°' },
            { movement: 'Adduction', value: '0-30°' },
            { movement: 'Internal Rotation', value: '0-45°' },
            { movement: 'External Rotation', value: '0-45°' }
        ],
        commonConditions: [
            { category: 'Joint', conditions: 'OA, FAI (Cam/Pincer), Labral Tear' },
            { category: 'Soft Tissue', conditions: 'Trochanteric Bursitis, Piriformis Syndrome' },
            { category: 'Pediatric', conditions: 'LCP, SCFE, Dysplasia' },
            { category: 'Trauma', conditions: 'Hip Fracture, Dislocation' }
        ]
    },
    specialTests: [
        {
            category: 'Intra-Articular', tests: [
                { name: 'FABER (Patrick\'s)', purpose: 'Hip/SIJ pathology', positive: 'Pain or limited ROM' },
                { name: 'FADIR', purpose: 'FAI / Labral Tear', positive: 'Pain/Click' },
                { name: 'Scour Test', purpose: 'OA / Labral', positive: 'Clicking/Grinding/Pain' }
            ]
        },
        {
            category: 'Muscle/soft Tissue', tests: [
                { name: 'Thomas Test', purpose: 'Hip Flexor Tightness', positive: 'Leg rises off table' },
                { name: 'Ober\'s Test', purpose: 'IT Band limitation', positive: 'Leg stays elevated' },
                { name: 'Trendelenburg', purpose: 'Glute Med Weakness', positive: 'Pelvic drop' }
            ]
        }
    ],
    clinicalEvaluation: {
        classification: {
            title: 'I. Classification: The "Big Three" Patterns',
            patterns: [
                {
                    name: '1. Capsular Pattern',
                    type: 'Joint Pathology (OA, Adhesive Capsulitis)',
                    signs: ['Primary Loss: Flexion & IR', 'Secondary Loss: Abduction', 'Preserved: Extension & Adduction'],
                    tip: 'Stiffness in BOTH Flexion + IR = Joint Surface Issue.'
                },
                {
                    name: '2. Non-Capsular Pattern',
                    type: 'Mechanical Block (Loose Body, Labral Flap)',
                    signs: ['Limitation does not follow capsular proportions', 'Springy end-feel', 'Locking/Catching history'],
                    tip: 'Sudden sharp pain or "getting stuck".'
                },
                {
                    name: '3. Extra-Articular',
                    type: 'The "Imposters" (Tendinopathy, Nerve, Bursa)',
                    signs: ['Full but painful ROM', 'Pain reproduced by specific muscle/tendon tests', 'No passive restriction'],
                    tip: 'Use specific screens below to differentiate.'
                }
            ]
        },
        extraArticularDetails: {
            title: 'II. Imposter Screens (Extra-Articular)',
            conditions: [
                { name: 'GTPS (Lateral Pain)', test: 'Single Leg Stance (30s) or Resisted External Derotation.' },
                { name: 'Deep Gluteal (Buttock)', test: 'Seated Piriformis Stretch or Active Piriformis Test.' },
                { name: 'Ischiofemoral (Deep Buttock)', test: 'Long Stride Walking Test or IFI Test (Ext/Add).' },
                { name: 'Snapping Hip', test: 'Dynamic Flex/Ext/Rot (Internal) or Side-lying Flex/Ext (External).' }
            ]
        },
        postOpScreen: {
            title: 'III. Post-Op Screen (HO)',
            context: 'For stalled recovery in post-op users.',
            redFlags: ['Progressive stiffness despite rehab', 'Persistent night pain', 'Local swelling/erythema/fever']
        },
        history: {
            layers: [
                { name: 'Osseous', description: 'Bone (Stress Fx, OA)' },
                { name: 'Capsulolabral', description: 'Joint Capsule/Labrum (Instability, FAI)' },
                { name: 'Musculotendinous', description: 'Muscle/Tendon (Strain, Tendinopathy)' },
                { name: 'Neurovascular', description: 'Nerve/Vessel (Sciatica, DVT)' }
            ],
            symptoms: [
                { location: 'Groin (Inguinal)', meaning: 'Suggests Intra-articular pathology (OA, Labral). Characteristics: "C-Sign" (Cup hand above trochanter).' },
                { location: 'Lateral (Trochanteric)', meaning: 'Extra-articular (Bursitis, Glute Med) or Intra-articular.' },
                { location: 'Posterior (Buttock)', meaning: 'Lumbar Spine referral vs Deep Gluteal Syndrome (Piriformis).' },
                { location: 'Mechanical Symptoms', meaning: 'Clicking, Catching, Locking (Labral Tear, Loose body).' }
            ]
        },
        examination: [
            {
                phase: 'Phase 1: Standing',
                steps: [
                    { name: '1. Gait Analysis', description: 'Observe for Antalgic gait (short stance) or Trendelenburg (abductor lurch). Check foot progression angle.' },
                    { name: '2. Single Leg Stance', description: 'Hold 6s. Positive: Pelvic drop (Trendelenburg) or shift (Compensated) -> Abductor weakness.' },
                    { name: '3. Inspection', description: 'Iliac crest height (Leg Length Discrepancy), Scoliosis, General Laxity (Thumb/Elbow).' }
                ]
            },
            {
                phase: 'Phase 2: Seated',
                steps: [
                    { name: '4. Neurovascular/Reflex', description: 'DTRs (L4-Patellar, S1-Achilles), Distal Pulses, Dermatomes.' },
                    { name: '5. Seated ROM', description: 'Internal/External Rotation at 90° flexion. Loss of IR is a key sign of OA/FAI.' }
                ]
            },
            {
                phase: 'Phase 3: Supine',
                steps: [
                    { name: '6. Palpation', description: 'Abdomen (Hernia), Adductor Tubercle (Tendinopathy).' },
                    { name: '7. Passive ROM', description: 'Flex (observe for ER deviation), Abd, Add.' },
                    { name: '8. Thomas Test', description: 'Hip Flexor Tightness. Hold knee to chest -> Does straight leg rise?' },
                    { name: '9. DIRI', description: 'Dynamic Internal Rotatory Impingement. Flex/Add -> IR. Positive: Anterior FAI/Pain.' },
                    { name: '10. DEXRIT', description: 'Dynamic External Rotatory Impingement. Flex -> Abd/ER. Positive: Instability/Post FAI.' },
                    { name: '11. FADDIR', description: 'Flex/Add/IR. "The Impingement Test". Positive: Labral/FAI pain.' },
                    { name: '12. FABER', description: 'Flex/Abd/ER (Figure-4). Groin pain = Hip. Posterior pain = SIJ.' },
                    { name: '13. Dial Test (Laxity)', description: 'Passive IR roll -> Release. Rebound >45° = Capsular Laxity.' }
                ]
            },
            {
                phase: 'Phase 4: Lateral',
                steps: [
                    { name: '14. Lateral Palpation', description: 'Greater Trochanter, Glute Med Insertion, Sciatic Notch.' },
                    { name: '15. Strength Testing', description: 'Abduction (Glute Med). Test with knee flexed to isolate from TFL.' },
                    { name: '16. Passive Adduction', description: 'Ober\'s Test (TFL vs Glute contracture).' },
                    { name: '17. Lat Rim Impingement', description: 'Abd/ER -> Move Flex to Ext. Positive: Ant Instability/Apprehension.' },
                    { name: '18. Post Rim Impingement', description: 'Ext/Abd/ER. Positive: Posterior pain (Post FAI).' },
                    { name: '19. Apprehension Test', description: 'Ext/ER + Anterior Force. Positive: Sensation of subluxation.' }
                ]
            },
            {
                phase: 'Phase 5: Prone',
                steps: [
                    { name: '20. Ely\'s Test', description: 'Rectus Femoris tightess. Heel to buttock -> Hip hikes.' },
                    { name: '21. Craig\'s Test', description: 'Femoral Anteversion. Palpate trochanter while rotating. Normal 8-15° IR.' }
                ]
            }
        ],
        pathologyCorrelation: [
            { pathology: 'Labral Tear (Anterior)', findings: 'Groin pain, +FADDIR, +DIRI, Loss of IR' },
            { pathology: 'FAI (Cam/Pincer)', findings: '+FADDIR, +DIRI, +DEXRIT, "C-Sign" pain' },
            { pathology: 'Hip Instability/Laxity', findings: '+Dial Test, +Apprehension Test, +DEXRIT, Hypermobility' },
            { pathology: 'Gluteal Tendinopathy', findings: 'Lateral pain, +Resisted Abduction, Tender Trochanter' },
            { pathology: 'Ischiofemoral Impingement', findings: '+Posterior Rim Impingement, Pain with long strides' }
        ],
        safetyScreening: {
            redFlags: [
                { name: 'Sign of the Buttock', description: 'Limited SLR, Limited Hip Flexion, Empty End Feel -> Tumor/Infection.' },
                { name: 'Fracture Screen', description: 'Patellar-Pubic Percussion Test. History of trauma/steroids.' }
            ],
            wellsCriteria: {
                title: 'Wells Criteria for DVT',
                items: [
                    'Active cancer (+1)',
                    'Paralysis/Immobilization (+1)',
                    'Bedridden >3 days (+1)',
                    'Localized tenderness (+1)',
                    'Entire leg swelling (+1)',
                    'Calf swelling >3cm (+1)',
                    'Pitting Edema (+1)',
                    'Collateral superficial veins (+1)',
                    'Alt diagnosis likely (-2)'
                ],
                scoring: '0: Low, 1-2: Moderate, ≥3: High Probability'
            }
        }
    },
    cpg: {
        oaProtocol: {
            title: 'Hip Osteoarthritis (OA)',
            population: '>50 years, Stiffness, "Start-up" pain.',
            criteria: [
                { name: 'Cluster 1', stats: 'Sn 86%, Sp 75%', items: ['Hip pain', 'IR < 15°', 'Flexion ≤ 115°'] },
                { name: 'Cluster 2', stats: 'If IR ≥ 15°', items: ['Pain with IR', 'Morning Stiffness ≤ 60 min', 'Age > 50'] }
            ],
            performanceMeasures: ['30s Chair Stand (Power)', '4-Square Step Test (Balance)', 'TUG (Mobility)', '6-Minute Walk Test (Endurance)'],
            outcomeMeasures: ['WOMAC (Gold Standard)', 'HOOS (QoL)', 'LEFS (Function)']
        },
        nonArthriticProtocol: {
            title: 'Non-Arthritic Hip Pain',
            population: 'Younger, Active, FAI/Labral.',
            diagnoses: [
                { name: 'FAI (Femoroacetabular Impingement)', signs: 'Anterior groin pain, "C-Sign", Cam/Pincer morphology. Pain with FADDIR.' },
                { name: 'Labral Tear', signs: 'Clicking, Locking, Catching. +FADDIR or Fabers.' },
                { name: 'Instability / Dysplasia', signs: 'Global laxity, +Dial Test, +Apprehension. Shallow acetabulum.' }
            ],
            examTests: ['Scour Test (Intra-articular)', 'FADDIR (Rule OUT)', 'FABER (Rule IN)', 'Log Roll (Laxity)'],
            outcomeMeasures: ['HAGOS (Young/Active)', 'iHOT-33 (Sports)', 'HOS (Arthroscopy/FAI)']
        },
        fractureProtocol: {
            title: 'Hip Fracture (Post-Op)',
            population: 'Older Adults, Trauma, Fall Risk.',
            screening: ['Delirium Assessment (Grade A)', 'Pain Management (Grade A)', 'Anemia/Hydration check'],
            performanceMeasures: ['Gait Speed (e.g. 4m walk)', 'Cumulated Ambulation Score (CAS)', 'TUG (Fall Risk)']
        }
    },
    treatment: {
        triage: {
            title: 'I. Functional Triage (Quick Scan)',
            tests: [
                { name: '1. Functional Squat', action: 'Deep squat, hands overhead.', sign: 'Fail + Stiffness → Mobility Track.\nFail + Shaking → Stability Track.' },
                { name: '2. Single Leg Step Down', action: 'Slow step off box.', sign: 'Valgus (Knee In) or Hip Drop → Stability/Motor Control Issue.' },
                { name: '3. PASSIVE vs ACTIVE', action: 'Compare ROMs.', sign: 'Ltd Active + Normal Passive → Stability.\nLtd Active + Ltd Passive → Mobility.' }
            ]
        },
        mobility: {
            title: 'II. The Mobility Track (Stiffness)',
            context: 'For Capsular Patterns, FAI, or OA restrictions.',
            techniques: [
                { name: 'Hip Flexion MWM', purpose: 'Anterior Pinch', action: 'Lateral distraction belt + Deep Lunge/Rocking.' },
                { name: 'Internal Rotation MWM', purpose: 'Rotation Deficit', action: 'Distraction + Active Internal Rotation in Lunge.' },
                { name: '3D Hip Flexor Stretch', purpose: 'Psoas Restrictions', action: 'Half-kneeling: Posterior Tilt + Glide + SB/Rot away.' }
            ]
        },
        stability: {
            title: 'III. The Stability Track (Weakness)',
            context: 'For Trendelenburg, Valgus, or Control deficits.',
            exercises: [
                { name: 'Clamshells', target: 'Glute Med (Post)', cue: 'Keep pelvis vertically stacked. No rolling back.' },
                { name: 'Sidelying Abduction', target: 'Glute Med (Iso)', cue: 'Lead with heel. Leg extended and internally rotated.' },
                { name: 'Single Leg Bridge', target: 'Glute Max', cue: 'Drive through heel. Keep hips level.' },
                { name: 'Quadruped Fire Hydrant', target: 'Core Integration', cue: 'Lift leg without twisting lumbar spine.' },
                { name: 'Monster Walks', target: 'Functional', cue: 'Athletic stance. constant tension. No knee cave.' }
            ]
        },
        integration: {
            title: 'IV. Advanced Integration',
            exercises: [
                { name: 'Single Leg RDL', cue: 'Hip Hinge pattern, Hamstring length + Glute stability.' },
                { name: 'Lateral Lunge', cue: 'Adductor length + Eccentric Abductor control.' }
            ]
        }
    }
};

export const kneeContent = {
    pathologyInfo: true,
    clinicalEvaluation: {
        diagnosticClusters: {
            title: 'I. Diagnostic Clusters (The "Bucket" Logic)',
            meniscus: {
                title: 'Meniscal Pathology Cluster (JOSPT 2018)',
                criteria: [
                    'History of "catching" or "locking"',
                    'Pain with forced hyperextension',
                    'Pain with maximum flexion (deep squat)',
                    'Joint Line Tenderness (JLT)',
                    'Positive McMurray’s maneuver'
                ],
                logic: '3 or more Positive Signs = High likelihood of Meniscal Tear.'
            },
            ligamentous: {
                title: 'Ligamentous "Trauma" Profiling',
                profiles: [
                    { name: 'ACL Profile', mechanism: 'Deceleration/Cutting + "Pop"', signs: 'Hemarthrosis (0-12hr), "Giving Way"', sensory: 'Heard/Felt Pop' },
                    { name: 'PCL Profile', mechanism: 'Dashboard Injury (Fall on bent knee)', signs: 'Less swelling vs ACL', sensory: 'Posterior sag' },
                    { name: 'MCL Profile', mechanism: 'Valgus Force (Lat Blow)', signs: 'Medial tearing sensation', stability: 'Valgus Laxity @ 30°' }
                ]
            }
        },
        anteriorKneePain: {
            title: 'II. Anterior Knee Pain Algorithm',
            buckets: [
                { name: 'Bucket A: PFPS', sign: '"Theater Sign" (Sitting pain) or Stairs', test: 'Eccentric Step Down Test (Pos = Ant Pain)', focus: 'Hip Strenghtening (Glute Med/Max)' },
                { name: 'Bucket B: Patellar Tendinopathy', sign: 'Inferior Pole Pain (Localized)', test: 'Decline Squat Test (Pos = Sharp Pain)', focus: 'Isometrics -> Heavy Slow Resistance' },
                { name: 'Bucket C: Hoffa’s Fat Pad', sign: 'Pain at Full Extension', test: 'Hoffa’s Test (Thumb press + violent ext)', focus: 'Avoid Hyperextension (Taping)' },
                { name: 'Bucket D: Osgood-Schlatter', sign: 'Prominent Tibial Tubercle', target: 'Adolescents (Growth Plate)', focus: 'Activity Modification' }
            ]
        },
        nerveScreen: {
            title: 'III. The "Hidden" Nerve Layer',
            nerves: [
                { name: 'Saphenous (Adductor Canal)', signs: 'Medial "burning", No weakness', screen: 'Palpate Adductor Canal', action: 'Treat Adductor (Release)' },
                { name: 'Femoral Nerve', signs: 'Ant Thigh Pain + Weakness', screen: 'Prone Knee Bend (Ely’s) / Reflex', action: 'Lumbar Screen' }
            ]
        },
        structural: {
            title: 'IV. Evidence-Based Examination (Grade A/B)',
            groups: [
                {
                    name: 'Tier 1: High Diagnostics',
                    tests: [
                        { name: 'Lachman Test', purpose: 'ACL (Gold Standard)', stats: 'Sn 85%, Sp 94%' },
                        { name: 'Posterior Drawer', purpose: 'PCL (Specific)', stats: 'Sn 90%, Sp 99%' },
                        { name: 'McMurray’s + JLT', purpose: 'Meniscus (Cluster)', stats: 'High Specificity together' }
                    ]
                },
                {
                    name: 'Tier 2: Functional (RTS)',
                    tests: [
                        { name: 'Single Leg Link Hop', purpose: 'Power/Fear', goal: 'LSI > 90%' },
                        { name: 'T-Test', purpose: 'Agility', goal: 'Speed/Control' }
                    ]
                }
            ]
        }
    },
    cpg: {
        title: 'Clinical Practice Guidelines (JOSPT 2017/18)',
        coperScreen: {
            title: 'The "Coper" Classification',
            criteria: [
                'No Knee Effusion (Swelling gone)',
                'Full Knee Extension',
                'Quad Strength Index > 70%',
                'Single Leg Hop > 80%',
                'No "Giving Way" episodes'
            ],
            implication: 'Potential Coper = May rehab without surgery initially.'
        },
        intervention: {
            strong: [
                { name: 'NMES', detail: 'Essential for Quad Re-ed (post-op). High intensity.' },
                { name: 'Neuro Re-education', detail: 'Balance/Wobble boards > Strength alone.' },
                { name: 'Eccentric Squatting', detail: 'Patellar Tendinopathy (Grade B).' }
            ],
            weak: [
                { name: 'CPM Machines', detail: 'Do NOT use. No long-term benefit.' },
                { name: 'Functional Bracing', detail: 'No evidence for preventing ACL re-injury.' }
            ]
        },
        prevention: {
            title: 'ACL Prevention Module',
            target: 'Females < 18, Soccer/Basketball',
            dosage: '20 min -- 3x/week (>30m weekly total)',
            exercises: ['Proximal Control (Clams/Planks)', 'Plyometrics (Box Jumps - No Valgus)', 'Hamstring (Nordics)'],
            check: 'Video Analysis: Drop Jump Test (Watch for Dynamic Valgus)'
        }
    },
    postOp: {
        title: 'Post-Operative Management (Red Zone)',
        complications: [
            { name: 'Cyclops Lesion', sign: 'Loss of terminal extension ("Hard Block").', action: 'Refer to Surgeon (Mechanical block).' },
            { name: 'Arthrofibrosis', sign: 'Failure to reach 90° flex by Wk 4.', action: 'Aggressive Low-Load Long-Duration stretching.' }
        ],
        rts: {
            title: 'Return to Sport (RTS) Battery',
            metrics: [
                'Limb Symmetry Index (LSI) > 90% (Quad + Hop)',
                'Quality of Movement (No Valgus Collapse)',
                'Psychological Readiness (ACL-RSI Scale)'
            ],
            note: 'Do NOT clear based on time alone (e.g. "It\'s been 9 months").'
        }
    },
    rehabGuardrails: {
        title: 'Rehab Guardrails: ACL Strain',
        dangerZone: {
            title: 'The "Danger Zone"',
            context: 'Highest ACL Strain. Avoid early.',
            exercises: ['OKC Extension (40°-0°)', 'Heavy Seated Leg Ext'],
            mechanism: 'Ant. Shear force from Quads.'
        },
        safeZone: {
            title: 'The "Safe Zone"',
            context: 'Minimal ACL Strain.',
            exercises: ['CKC (Squats/Press)', 'Hamstring Co-contraction'],
            mechanism: 'Joint Compression neutralizes shear.'
        },
        guidelines: ['Early: CKC only.', 'Late: OKC 90-45 deg only.']
    }
};

export const footAnkleContent = {
    id: 'foot-ankle',
    title: 'Foot & Ankle Ecosystem',
    description: 'A specialized module for the complex 4-layer anatomy of the foot. Features a "6-Zone" diagnostic system, Ottawa/Bernese fracture screens, and "Anti-Gravity" biomechanical interventions.',
    pathologyInfo: true,
    clinicalEvaluation: {
        redFlags: {
            title: 'Phase 1: The Safety Gatekeeper',
            context: 'Before assessing movement, rule out fractures and vascular threats. 99% Sensitivity.',
            fracture: {
                title: 'Fracture Screening Rules',
                ottawa: {
                    name: 'Ottawa Ankle Rules (Sn ~99%)',
                    points: [
                        'Bone tenderness at posterior edge (distal 6cm) of Lateral Malleolus',
                        'Bone tenderness at posterior edge (distal 6cm) of Medial Malleolus',
                        'Bone tenderness at Base of 5th Metatarsal',
                        'Bone tenderness at Navicular',
                        'Inability to bear weight immediately AND take 4 steps now'
                    ]
                },
                bernese: {
                    name: 'Bernese Ankle Rules (Midfoot)',
                    points: [
                        'Indirect fibular stress (compressing the calf)',
                        'Direct medial malleolar stress',
                        'Compression of the midfoot/hindfoot'
                    ]
                },
                action: 'If YES to any: STOP. Refer for X-Ray.'
            },
            vascular: {
                title: 'Vascular & Compartment Screen',
                dvt: 'Wells Criteria (Calf swelling >3cm, pitting edema, tenderness along deep veins).',
                compartment: {
                    signs: ['Pain out of proportion', 'Pallor', 'Paresthesia', 'Pulselessness', 'Paralysis'],
                    test: 'Rigid/hard limb + pain with passive stretch of toes.',
                    action: 'Medical Emergency.'
                }
            }
        },
        diagnosticZones: {
            title: 'Phase 2: The "Zone of Pain" Tracks',
            context: 'Triangulate the diagnosis by location using the 6-Zone model.',
            zones: [
                {
                    zone: 'Zone 1',
                    name: 'Lateral Ankle (Rolled)',
                    pathologies: [
                        { name: 'ATFL Sprain', mechanism: 'PF + Inversion', test: 'Anterior Drawer (>3mm or clunk)', sensitivity: '78%' },
                        { name: 'CFL Sprain', mechanism: 'Inversion in Neutral', test: 'Talar Tilt >15° diff', sensitivity: '67%' },
                        { name: 'Peroneal Tendinopathy', location: 'Behind Lat. Malleolus', test: 'Pain with Resisted Eversion' },
                        { name: 'Cuboid Syndrome', symptom: '"Stone in shoe"', mechanism: 'Peroneus longus pull', test: 'Midfoot mobility/palpation' },
                        { name: 'Sinus Tarsi Syndrome', location: 'Deep "soft spot" anterior to Lat. Malleolus', symptom: 'Instability on uneven ground' }
                    ]
                },
                {
                    zone: 'Zone 2',
                    name: 'Medial Ankle (Collapse)',
                    pathologies: [
                        { name: 'Deltoid Sprain', mechanism: 'Eversion/Valgus', test: 'Eversion Stress Test' },
                        { name: 'PTTD', observation: '"Too Many Toes" Sign', test: 'Single Leg Heel Raise (Inability = Stage 2+)' },
                        { name: 'Tarsal Tunnel', symptom: 'Burning sole/medial heel', test: 'Tinel’s Sign + DF/Eversion hold' }
                    ]
                },
                {
                    zone: 'Zone 3',
                    name: 'Posterior (Achilles)',
                    pathologies: [
                        { name: 'Achilles Mid-Substance', location: '2-6cm above insertion', notes: 'Responds to Eccentrics' },
                        { name: 'Achilles Insertional', location: 'Directly on Heel', notes: 'Do NOT drop past neutral' },
                        { name: 'Achilles Rupture', test: 'Thompson Test (No PF on squeeze)', sensitivity: '96%' },
                        { name: 'Retrocalcaneal Bursitis', location: 'Deep/Superior to insertion', test: 'Two Finger Squeeze' },
                        { name: 'Sever’s Disease', profile: '8-13 y/o Active', test: 'Calcaneal Squeeze Test' }
                    ]
                },
                {
                    zone: 'Zone 4',
                    name: 'Plantar (Arch/Heel)',
                    pathologies: [
                        { name: 'Plantar Fasciitis', sign: 'First step morning pain', test: 'Windlass Test (Sn 33%, Sp 99%)', palpation: 'Medial Calcaneal Tubercle' },
                        { name: 'Heel Pad Atrophy', location: 'Central Heel', notes: 'Deep bruise feel, Age >40' }
                    ]
                },
                {
                    zone: 'Zone 5',
                    name: 'High Ankle (Forceful Bend)',
                    pathologies: [
                        { name: 'Syndesmotic Sprain', mechanism: 'DF + Ext. Rotation', test: 'Kleiger’s Test (Sn 82%)' },
                        { name: 'Anterior Impingement', symptom: 'Pinching in deep squat', test: 'Forced Dorsiflexion Test (Sn 95%)' }
                    ]
                },
                {
                    zone: 'Zone 6',
                    name: 'Forefoot (Toes)',
                    pathologies: [
                        { name: 'Metatarsalgia', location: 'Metatarsal Heads 2-3', symptom: '"Walking on marbles"' },
                        { name: 'Morton’s Neuroma', location: 'Web space 3-4', test: 'Mulder’s Click / Squeeze' },
                        { name: 'Turf Toe', mechanism: '1st MTP Hyperextension' },
                        { name: 'Hallux Rigidus', symptom: 'Stiff Big Toe (<60° ext)' },
                        { name: 'Lisfranc Injury', flag: 'RED FLAG', sign: 'Plantar Ecchymosis (Bruising bottom of foot)', mechanism: 'Axial load on PF foot' }
                    ]
                }
            ]
        },
        functional: {
            title: 'Phase 3: Biomechanical Evaluation',
            steps: [
                { name: 'Static Posture', test: 'Foot Posture Index (FPI-6)', criteria: 'Navicular Drop >10mm = Hyperpronation' },
                { name: 'Range of Motion', test: 'Knee-to-Wall Test', goal: '>10cm (Anterior pinch = Joint, Posterior pull = Muscle)' },
                { name: 'Dynamic Stability', test: 'Star Excursion (SEBT)', criteria: '<94% symmetry = Risk' }
            ]
        }
    },
    cpg: {
        ankleSprain: {
            title: 'Ankle Ligament Sprains (2013)',
            diagnosis: {
                acute: 'ICD: Sprain of Ankle (S93.4). Findings: Swelling, pain, tenderness, loss of function.',
                instability: 'ICD: Instability (M24.27). Tool: Cumberland Ankle Instability Tool (>28 no instability).'
            },
            riskFactors: {
                acute: ['History of sprain', 'No external support', 'No warm-up', 'Abnormal DF ROM'],
                instability: ['Increased talar curvature', 'No external support', 'No balance exercises after acute sprain']
            },
            interventions: [
                { grade: 'A', name: 'Early Weight Bearing', detail: 'With external support. Functional rehab > Immobilization.' },
                { grade: 'A', name: 'Manual Therapy', detail: 'Lymphatic drainage, soft tissue/joint mobs (AP talar glide).' },
                { grade: 'A', name: 'Cryotherapy', detail: 'Intermittent application to reduce pain/meds.' },
                { grade: 'A', name: 'Therapeutic Exercise', detail: 'Balance/Proprioception training in post-acute phase.' },
                { grade: 'A', name: 'Ultrasound', detail: 'STRONG EVIDENCE AGAINST.' }
            ]
        },
        achilles: {
            title: 'Achilles Tendinopathy (2010)',
            diagnosis: {
                summary: 'ICF: Pain, Stiffness, Power Deficits.',
                signs: ['Localized pain/stiffness (lessens with activity)', 'Tenderness 2-6cm proximal', 'Positive Arc Sign', 'Royal London Test']
            },
            riskFactors: [
                'Intrinsic: Abnormal DF ROM, Decreased PF strength, Pronation, Obesity, Diabetes',
                'Extrinsic: Training errors, Environmental factors, Faulty equipment'
            ],
            interventions: [
                { grade: 'A', name: 'Eccentric Loading', detail: 'Midportion tendinopathy (Alfredson).' },
                { grade: 'B', name: 'Low-Level Laser', detail: 'Decreases pain and stiffness.' },
                { grade: 'B', name: 'Iontophoresis', detail: 'Dexamethasone for pain relief.' },
                { grade: 'C', name: 'Stretching', detail: 'If limited DF ROM is present.' },
                { grade: 'C', name: 'Night Splints', detail: 'Not beneficial for pain vs Eccentric alone.' },
                { grade: 'D', name: 'Heel Lifts', detail: 'Contradictory evidence.' }
            ]
        },
        plantarFasciitis: {
            title: 'Heel Pain (2014)',
            riskFactors: ['Limited DF', 'High BMI', 'Standing Work'],
            interventions: ['Manual Therapy', 'Antipronation Taping', 'Night Splints', 'Stretching']
        }
    },
    treatment: {
        title: 'Anti-Gravity Interventions',
        context: 'Match the intervention to the tissue pathology.',
        strategies: [
            {
                type: 'Hypomobility (Stiff)',
                technique: 'Mulligan MWM',
                details: 'Belt distraction + Lunge (Clears Anterior Impingement). Gastroc/Soleus Release.'
            },
            {
                type: 'Instability (Loose)',
                technique: 'Proprioception + Strength',
                details: 'Floor SLS -> Foam -> SEBT. Peroneal Eccentrics.'
            },
            {
                type: 'Tendinopathy (Load)',
                technique: 'Alfredson Protocol',
                details: 'Mid-Substance: Heel drops off step. Insertional: Floor level only.'
            },
            {
                type: 'Fasciitis (Windlass)',
                technique: 'Rathleff Protocol',
                details: 'High-load strength (Heel raise with toes DF). Improve 1st MTP extension.'
            }
        ]
    },
    anatomy: {
        bones: [
            { name: 'Tibia/Fibula', description: 'Malleoli form the mortise.' },
            { name: 'Talus', description: 'Keystone connect leg to foot.' },
            { name: 'Calcaneus', description: 'Heel bone (Achilles insertion).' },
            { name: 'Navicular/Cuboid/Cuneiforms', description: 'Midfoot architecture.' },
            { name: 'Metatarsals/Phalanges', description: 'Forefoot propulsions.' }
        ],
        joints: [
            { name: 'Talocrural', description: 'The "Ankle". DF/PF.' },
            { name: 'Subtalar', description: 'Talus/Calcaneus. Inversion/Eversion (Steering).' },
            { name: 'Midtarsal (Chopart)', description: 'Locked in supination (lever), Unlocked in pronation (shock).' }
        ],
        muscles: {
            rotatorCuff: [],
            other: [
                { name: 'Gastroc/Soleus', action: 'Power PF (Soleus = Postural)' },
                { name: 'Posterior Tibialis', action: 'Inversion/PF. Arch support.' },
                { name: 'Peroneals (Long/Brev)', action: 'Eversion/PF. Dynamic stabilizers.' },
                { name: 'Anterior Tibialis', action: 'Dorsiflexion/Inv. Clearance.' }
            ]
        },
        neurovascular: {
            nerves: ['Tibial (Posterior)', 'Deep Peroneal (Anterior)', 'Superficial Peroneal (Lateral)'],
            vascular: ['Posterior Tibial Pulse (Medial Malleolus)', 'Dorsalis Pedis Pulse']
        }
    },
    function: {
        biomechanics: [
            'Windlass Mechanism: Big toe extension = Arch lifting = Rigid lever for push-off.',
            'Supination -> Pronation -> Supination cycle during gait.',
            'Tri-Planar Motion: Pronation = Eversion + Abduction + Dorsiflexion.'
        ],
        rom: [
            { movement: 'Dorsiflexion', value: '0-20° (Need 10° for gait)' },
            { movement: 'Plantarflexion', value: '0-50°' },
            { movement: 'Inversion', value: '0-35°' },
            { movement: 'Eversion', value: '0-15°' }
        ],
        commonConditions: [
            { category: 'Trauma', conditions: 'Lateral Sprain, Syndesmotic Sprain, Fractures' },
            { category: 'Overuse', conditions: 'Achilles Tendinopathy, Plantar Fasciitis, MTSS' },
            { category: 'Biomech', conditions: 'Pes Planus (Flat), Pes Cavus (High Arch)' }
        ]
    },
    postOp: {
        title: 'Phase 4: Post-Op & Functional Management',
        protocols: [
            {
                name: 'Ankle Ligament Repair (Brostrom)',
                timeline: {
                    early: 'Wk 0-6: Protect Inversion (Brace).',
                    late: 'Wk 6+: Proprioception. Glute Medius focus (prevent collapse).'
                }
            },
            {
                name: 'Achilles Repair',
                timeline: {
                    early: 'Avoid excessive DF stretching (protect repair).',
                    focus: 'Soleus strengthening (Bent knee heel raises).'
                }
            }
        ],
        biomechanics: {
            title: 'Biomechanical Correction (Up the Chain)',
            types: [
                { type: 'Pes Planus (Flat)', cause: 'Tight Gastroc/Soleus (forcing midfoot break) or Weak Glute Med.' },
                { type: 'Pes Cavus (High Arch)', cause: 'Poor shock absorption. Risk of stress fx/inversion.' }
            ]
        }
    },
    specialTests: [
        {
            category: 'Ankle Collateral Ligaments',
            tests: [
                { name: 'Anterior Drawer', purpose: 'ATFL Integrity', technique: '10-20° PF, Anterior pull', positive: 'Pain/Laxity >3mm', stats: 'Sn 78%, Sp 75%, +LR 3.1' },
                { name: 'Medial Talar Tilt', purpose: 'CFL Integrity', technique: 'Neutral DF, Invert Calcaneus', positive: '>15° diff vs unaffected', stats: 'Sn 67%, Sp 75%, +LR 2.7' },
                { name: 'Eversion Stress', purpose: 'Deltoid Ligament', technique: 'Neutral, Evert Calcaneus', positive: 'Pain/Gapping' }
            ]
        },
        {
            category: 'Syndesmotic (High Ankle)',
            tests: [
                { name: 'Fibular Translation', purpose: 'Syndesmosis', technique: 'Post. force on distal fibula', positive: 'Pain/Excessive Glide', stats: 'Sn 82%, Sp 88%, +LR 6.8' },
                { name: 'Kleiger’s (Ext Rotation)', purpose: 'Syndesmosis/Deltoid', technique: 'Ext Rotate in Neutral/DF', positive: 'Pain/Displacement', note: 'More reliable than squeeze' },
                { name: 'Squeeze Test', purpose: 'Syndesmosis', technique: 'Compress Tib-Fib at mid-calf', positive: 'Distal Pain', stats: 'Sn 26%, Sp 88%' }
            ]
        },
        {
            category: 'DVT Screening',
            tests: [
                { name: 'Homan’s Sign', purpose: 'DVT', note: 'DO NOT PERFORM - Low utility/risk' },
                { name: 'Wells Criteria', purpose: 'DVT Probability', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4898382/', note: 'Use Clinical Prediction Rule' }
            ]
        },
        {
            category: 'Achilles Tendon',
            tests: [
                { name: 'Thompson Test', purpose: 'Rupture', technique: 'Squeeze mid-calf prone', positive: 'No PF', stats: 'Sn 96%, Sp 93%' }
            ]
        },
        {
            category: 'Neurologic',
            tests: [
                { name: 'Tinel’s Sign', purpose: 'Tarsal Tunnel', technique: 'Tap post. tibial nerve', positive: 'Paresthesia/Zing', stats: 'Sn 58%' },
                { name: 'Web Space Tenderness', purpose: 'Morton’s Neuroma', technique: 'Pressure b/t 2nd-3rd MT', positive: 'Symptom Reproduction', stats: 'Sn 95%' },
                { name: 'Morton’s Squeeze', purpose: 'Interdigital Neuroma', technique: 'Squeeze MT heads 1-2min', positive: 'Pain/Numbness' }
            ]
        },
        {
            category: 'Impingement & Fasciitis',
            tests: [
                { name: 'Forced Dorsiflexion', purpose: 'Ant. Impingement', technique: 'Max DF + Overpressure', positive: 'Anterior Pain', stats: 'Sn 95%, Sp 88%, +LR 7.9' },
                { name: 'Windlass Test', purpose: 'Plantar Fasciitis', technique: 'Extend 1st MTP standing', positive: 'Heel Pain', stats: 'Sn 33%, Sp 99%' }
            ]
        },
        {
            category: 'Posture & Girth',
            tests: [
                { name: 'Navicular Drop', purpose: 'Hyperpronation', positive: '>10mm drop' },
                { name: 'Foot Posture Index', purpose: 'Static Posture', note: 'Assess 6 criteria (Talar head, Curves, etc.)' },
                { name: 'Figure 8 Girth', purpose: 'Swelling', note: 'Lat Mal -> Tib Ant -> Navicular -> Base 5th -> Tib Ant -> Med Mal -> Achilles -> Lat Mal' }
            ]
        },
        {
            category: 'Hypermobility & Fracture',
            tests: [
                { name: 'Beighton Scale', purpose: 'Systemic Hypermobility', criteria: 'Thumb/Pinky/Elbow/Knee/Spine', scoring: '3-4 Mod, 5-9 Severe' },
                {
                    name: 'Ottawa Ankle Rules',
                    purpose: 'Fracture Screen',
                    image: '/images/ankle/ottawa_rules.jpg',
                    criteria: 'X-ray if pain in malleolar zone AND (Bone tenderness post. edge lat/med malleolus OR Inability to bear weight). Sn ~100%.'
                },
                {
                    name: 'Bernese Ankle Rules',
                    purpose: 'Fracture Screen',
                    image: '/images/ankle/bernese_rules.png',
                    criteria: '1. Indirect fibular stress (compress mid-calf). 2. Direct medial malleolar stress. 3. Midfoot/Hindfoot compression.'
                }
            ]
        },
        {
            category: 'Performance Measures',
            tests: [
                { name: 'Star Excursion (SEBT)', purpose: 'Dynamic Balance', note: '8 directions. Key: Ant, PM, PL.' },
                { name: 'Y-Balance', purpose: 'Dynamic Balance', note: 'Ant, PM, PL. Goal: >80-90% symmetry.' },
                { name: 'Hop Tests', purpose: 'Functional Power', variants: 'Single, Triple, Crossover, 6m Timed', stats: 'Reliability .76-.92' }
            ]
        }
    ],
    differentialDiagnosis: [
        {
            category: 'Ankle Pain & Mobility Deficits (OA/Stiffness)',
            measurements: 'ROM (DF/PF), Joint Play (Talocrural/Subtalar), Weight Bearing Tolerance, 6 Minute Walk Test.',
            structures: 'Talocrural joint, Subtalar joint, Joint capsule, Articular cartilage.',
            goals: 'Restore ROM, Joint mobilization (Grades I-IV), Manage pain/inflammation, Improve gait mechanics.'
        },
        {
            category: 'Ankle Stability & Coordination (Sprain/Instability)',
            measurements: 'Anterior Drawer, Talar Tilt, Star Excursion Balance Test (SEBT), Y-Balance Test, Cumberland Ankle Instability Tool.',
            structures: 'ATFL (Ant. Talofibular Lig), CFL (Calcaneofibular Lig), PTFL, Syndesmosis (Tib-Fib Lig).',
            goals: 'Protect healing ligament, Restore proprioception/balance/neuromuscular control, Dynamic stability retraining.'
        },
        {
            category: 'Muscle Power Deficits (Achilles Tendinopathy)',
            measurements: 'Heel raise endurance (SLHR), Muscle strength (PF), Palpation tenderness (2-6cm proximal), Arc Sign.',
            structures: 'Achilles tendon (midportion vs insertional), Gastrocnemius, Soleus, Paratenon.',
            goals: 'Eccentric loading (Alfredson), Restore tendon capacity, Manage load intolerance, Address biomechanical faults.'
        },
        {
            category: 'Heel Pain (Plantar Fasciopathy)',
            measurements: 'Windlass Test, Palpation of medial calcaneal tubercle, Navicular Drop, Foot Posture Index.',
            structures: 'Plantar central fascia, Calcaneus, Intrinsic foot muscles (Abductor Hallucis), Fat pad.',
            goals: 'Reduce stress on fascia (orthotics/taping/night splints), Stretch Gastroc/Soleus, Strengthen foot intrinsics.'
        },
        {
            category: 'Radiating Pain (Tarsal Tunnel/Neural)',
            measurements: 'Tinel\'s Sign, Slump/Straight Leg Raise (biased for tibial nerve), Sensation testing (Semmes-Weinstein).',
            structures: 'Posterior Tibial Nerve, Tarsal Tunnel, Flexor Retinaculum, Medial Calcaneal Nerve.',
            goals: 'Decompress nerve (orthotics/footwear modification), Neural mobilization (flossing), Desensitization.'
        },
        {
            category: 'Lateral Ankle/Foot Pain',
            measurements: 'Palpation of peroneal tendons/cuboid, Resisted eversion, Single leg balance.',
            structures: 'Fibularis (Peroneus) Longus/Brevis, Cuboid bone, Base of 5th Metatarsal.',
            goals: 'Tendon loading/strengthening, Cuboid manipulation (whip), Improve lateral stability.'
        },
        {
            category: 'Anterior Impingement',
            measurements: 'Forced Dorsiflexion Test, ROM assessment (blocked DF with hard end feel).',
            structures: 'Anterior Tibia, Talar Neck, Anterior Capsule.',
            goals: 'Distraction manipulation, Heel lift (temp), Activity modification (avoid deep squat/lunges).'
        }
    ]
};
