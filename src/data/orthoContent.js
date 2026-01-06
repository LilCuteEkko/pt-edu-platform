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
    ]
};

export const footAnkleContent = {
    pathologyInfo: true,
    anatomy: {
        bones: [
            { name: 'Tibia/Fibula', description: 'Malleoli form the mortise.' },
            { name: 'Talus', description: 'Connects leg to foot.' },
            { name: 'Calcaneus', description: 'Heel bone.' },
            { name: 'Tarsals', description: 'Navicular, Cuboid, Cuneiforms.' },
            { name: 'Metatarsals/Phalanges', description: 'Forefoot.' }
        ],
        joints: [
            { name: 'Talocrural', description: 'Ankle joint (DF/PF).' },
            { name: 'Subtalar', description: 'Talus/Calcaneus (Inv/Ev).' },
            { name: 'Midtarsal (Chopart)', description: 'Inv/Ev participation.' },
            { name: 'MTP/IP', description: 'Toe joints.' }
        ],
        muscles: {
            rotatorCuff: [],
            other: [
                { name: 'Gastroc/Soleus', action: 'Plantarflexion' },
                { name: 'Tibialis Anterior', action: 'Dorsiflexion, Inversion' },
                { name: 'Tibialis Posterior', action: 'Plantarflexion, Inversion (Arch support)' },
                { name: 'Peroneals (Long/Brev)', action: 'Eversion, PF' }
            ]
        },
        neurovascular: {
            nerves: ['Deep Peroneal (DF)', 'Superficial Peroneal (Ev)', 'Tibial (PF)'],
            vascular: ['Dorsalis Pedis, Posterior Tibial Artery']
        }
    },
    function: {
        biomechanics: [
            'Windlass Mechanism: Great toe extension tightens plantar fascia to stabilize arch for push-off.',
            'Supination/Pronation: Coupled motions (Inv/Add/PF vs Ev/Abd/DF).'
        ],
        rom: [
            { movement: 'Dorsiflexion', value: '0-20°' },
            { movement: 'Plantarflexion', value: '0-50°' },
            { movement: 'Inversion', value: '0-35°' },
            { movement: 'Eversion', value: '0-15°' }
        ],
        commonConditions: [
            { category: 'Ligamentous', conditions: 'Lateral Ankle Sprain (ATFL), High Ankle Sprain' },
            { category: 'Tendon', conditions: 'Achilles Tendinitis/Rupture' },
            { category: 'Fascia', conditions: 'Plantar Fasciitis' },
            { category: 'Bone', conditions: 'Stress Fractures, Hallux Valgus (Bunion)' }
        ]
    },
    specialTests: [
        {
            category: 'Ligamentous', tests: [
                { name: 'Anterior Drawer', purpose: 'ATFL Tear', positive: 'Excessive translation' },
                { name: 'Talar Tilt', purpose: 'CFL/Deltoid', positive: 'Excessive INV/EV tilt' },
                { name: 'Kleiger\'s (ER)', purpose: 'Syndesmosis (High Ankle)', positive: 'Pain' }
            ]
        },
        {
            category: 'Tendon', tests: [
                { name: 'Thompson Test', purpose: 'Achilles Rupture', positive: 'No PF with calf squeeze' }
            ]
        }
    ]
};
