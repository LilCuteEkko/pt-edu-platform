export const arteries = [
    // Head & Neck
    {
        id: 'common-carotid-artery',
        name: 'Common Carotid Artery',
        category: 'Head & Neck',
        source: 'Right: Brachiocephalic Trunk. Left: Aortic Arch.',
        course: 'Ascends in carotid sheath to C4, divides into Internal and External Carotid Arteries.',
        branches: [
            'Internal Carotid Artery (ICA)',
            'External Carotid Artery (ECA)'
        ],
        clinicalNotes: 'Carotid pulse palpable in neck. Site of atherosclerotic plaque (Carotid Endarterectomy).'
    },
    {
        id: 'external-carotid-artery',
        name: 'External Carotid Artery (ECA)',
        category: 'Head & Neck',
        source: 'Common Carotid Artery.',
        course: 'Supplies structures external to the cranium (Face, Scalp, Neck, Meninges).',
        branches: [
            'Superior Thyroid',
            'Ascending Pharyngeal',
            'Lingual',
            'Facial (Face supply)',
            'Occipital',
            'Posterior Auricular',
            'Maxillary (Deep face/meninges)',
            'Superficial Temporal (Scalp)'
        ],
        clinicalNotes: 'Maxillary branch gives off Middle Meningeal Artery (Epidural Hematoma). "Mnemonic: Some Anatomists Like Freaking Out Poor Medical Students".'
    },
    {
        id: 'internal-carotid-artery',
        name: 'Internal Carotid Artery (ICA)',
        category: 'Head & Neck',
        source: 'Common Carotid Artery.',
        course: 'Enters skull via Carotid Canal. Supplies Brain and Orbit.',
        branches: [
            'Ophthalmic Artery (Orbit/Eye)',
            'Anterior Cerebral Artery (ACA)',
            'Middle Cerebral Artery (MCA)',
            'Posterior Communicating Artery'
        ],
        clinicalNotes: 'Major stroke vessel (MCA stroke = Contralateral hemiparesis/hemisensory loss).'
    },
    {
        id: 'vertebral-artery', // Overwriting/Updating existing reference if any, or just reinforcing
        name: 'Vertebral Artery',
        category: 'Head & Neck',
        source: 'Subclavian Artery.',
        course: 'Ascends through Transverse Foramina (C6-C1). Enters skull via Foramen Magnum. Merges to form Basilar Artery.',
        branches: [
            'Posterior Inferior Cerebellar Artery (PICA)',
            'Anterior Spinal Artery'
        ],
        clinicalNotes: 'VBI (Vertebrobasilar Insufficiency). Tested with Vertebral Artery Test (Extension + Rotation).'
    },

    // Upper Limb
    {
        id: 'subclavian-artery',
        name: 'Subclavian Artery',
        category: 'Upper Limb',
        source: 'Right: Brachiocephalic Trunk. Left: Aortic Arch.',
        course: 'Begins at SC joint (Right) or Arch (Left). Becomes Axillary Artery at lateral border of 1st Rib.',
        branches: [
            'Vertebral Artery',
            'Internal Thoracic Artery',
            'Thyrocervical Trunk (Suprascapular, Transverse Cervical)',
            'Costocervical Trunk',
            'Dorsal Scapular Artery'
        ],
        clinicalNotes: 'Main blood supply to the upper limb.'
    },
    {
        id: 'axillary-artery',
        name: 'Axillary Artery',
        category: 'Upper Limb',
        source: 'Subclavian Artery.',
        course: 'Begins at lateral border of 1st Rib. Ends at inferior border of Teres Major. Divided into 3 parts by Pectoralis Minor.',
        branches: [
            '1st Part (1 branch): Superior Thoracic Artery.',
            '2nd Part (2 branches): Thoraco-acromial Artery, Lateral Thoracic Artery.',
            '3rd Part (3 branches): Subscapular Artery, Ant. Circumflex Humeral, Post. Circumflex Humeral.'
        ],
        clinicalNotes: 'Anterior/Posterior Circumflex arteries wrap around surgical neck of humerus (anastomose).'
    },
    {
        id: 'brachial-artery',
        name: 'Brachial Artery',
        category: 'Upper Limb',
        source: 'Axillary Artery.',
        course: 'Begins at inferior border of Teres Major. Travels medial to humerus. Ends in Cubital Fossa by dividing into Radial and Ulnar Arteries.',
        branches: [
            'Deep Artery of Arm (Profunda Brachii): Accompanies Radial Nerve in radial groove.',
            'Superior Ulnar Collateral Artery.',
            'Inferior Ulnar Collateral Artery.'
        ],
        clinicalNotes: 'Primary pressure point for controlling hemorrhage in the arm. Blood pressure measurement site.'
    },
    {
        id: 'radial-artery',
        name: 'Radial Artery',
        category: 'Upper Limb',
        source: 'Brachial Artery.',
        course: 'Runs along lateral forearm (with Superficial Radial Nerve).',
        branches: [
            'Radial Recurrent Artery',
            'Palmar Carpal Arch',
            'Superficial Palmar Arch (completes it)',
            'Deep Palmar Arch (forms it - Main supply to thumb/index)'
        ],
        clinicalNotes: 'Passes through Anatomical Snuffbox to form Deep Arch. Pulse palpable lateral to FCR.'
    },
    {
        id: 'ulnar-artery',
        name: 'Ulnar Artery',
        category: 'Upper Limb',
        source: 'Brachial Artery.',
        course: 'Runs along medial forearm (with Ulnar Nerve).',
        branches: [
            'Ulnar Recurrent Arteries',
            'Common Interosseous',
            'Superficial Palmar Arch (forms it - Main supply to fingers)',
            'Deep Palmar Arch (completes it)'
        ],
        clinicalNotes: 'Enters hand superficial to Flexor Retinaculum (Guyon\'s Canal). FCR pulse is key.'
    },
    {
        id: 'scapular-anastomoses',
        name: 'Scapular Anastomoses',
        category: 'Upper Limb',
        source: 'Subclavian and Axillary branches.',
        course: 'Network forming collateral circulation around the scapula.',
        branches: [
            'Suprascapular Artery (from Subclavian)',
            'Dorsal Scapular Artery (from Subclavian)',
            'Circumflex Scapular Artery (from Subscapular/Axillary)'
        ],
        clinicalNotes: 'Allows blood to reach the arm if the flow through the Axillary artery is compromised (e.g., ligation).'
    },

    // Pelvis
    {
        id: 'common-iliac-artery',
        name: 'Common Iliac Artery',
        category: 'Pelvis',
        source: 'Abdominal Aorta (L4 level).',
        course: 'Divides into Internal and External Iliac Arteries at SI joint.',
        branches: [
            'Internal Iliac Artery',
            'External Iliac Artery'
        ],
        clinicalNotes: 'Terminal branches of the Aorta.'
    },
    {
        id: 'external-iliac-artery',
        name: 'External Iliac Artery',
        category: 'Pelvis',
        source: 'Common Iliac Artery.',
        course: 'Runs along medial border of Psoas Major. Exits pelvis deep to Inguinal Ligament to become Femoral Artery.',
        branches: [
            'Inferior Epigastric Artery',
            'Deep Circumflex Iliac Artery'
        ],
        clinicalNotes: 'Main blood supply to the lower limb.'
    },
    {
        id: 'internal-iliac-artery',
        name: 'Internal Iliac Artery',
        category: 'Pelvis',
        source: 'Common Iliac Artery.',
        course: 'Descends into pelvis. Divides into Anterior and Posterior divisions.',
        branches: [
            'Post: Iliolumbar, Lateral Sacral, Superior Gluteal.',
            'Ant: Obturator, Inf Gluteal, Umbilical, Uterine/Vaginal, Sup/Inf Vesical, Middle Rectal, Internal Pudendal.'
        ],
        clinicalNotes: 'Major supply to pelvic viscera and gluteal region.'
    },
    {
        id: 'superior-gluteal-artery',
        name: 'Superior Gluteal Artery',
        category: 'Pelvis',
        source: 'Internal Iliac (Posterior Div).',
        course: 'Exits Greater Sciatic Foramen (Superior to Piriformis).',
        branches: [
            'Superficial Branch (Glute max)',
            'Deep Branch (Glute med/min)'
        ],
        clinicalNotes: 'Largest branch of Internal Iliac.'
    },
    {
        id: 'inferior-gluteal-artery',
        name: 'Inferior Gluteal Artery',
        category: 'Pelvis',
        source: 'Internal Iliac (Anterior Div).',
        course: 'Exits Greater Sciatic Foramen (Inferior to Piriformis).',
        branches: [
            'Muscular branches to Glute Max, Hamstrings.',
            'Cruciate Anastomosis.'
        ],
        clinicalNotes: 'Anastomoses with Femoral artery branches.'
    },
    {
        id: 'internal-pudendal-artery',
        name: 'Internal Pudendal Artery',
        category: 'Pelvis',
        source: 'Internal Iliac (Anterior Div).',
        course: 'Exits GSF (Inf to Piriformis) -> Enters LSF -> Pudendal Canal.',
        branches: [
            'Inferior Rectal',
            'Perineal',
            'Dorsal/Deep arteries of Penis/Clitoris'
        ],
        clinicalNotes: 'Primary blood supply to Perineum and External Genitalia.'
    },
    {
        id: 'obturator-artery',
        name: 'Obturator Artery',
        category: 'Pelvis',
        source: 'Internal Iliac (Anterior Div).',
        course: 'Runs on lateral pelvic wall to Obturator Canal.',
        branches: [
            'Acetabular branch (to femoral head)'
        ],
        clinicalNotes: 'Acetabular branch is crucial for Femoral Head blood supply in children.'
    },
    // Lower Limb
    {
        id: 'femoral-artery',
        name: 'Femoral Artery',
        category: 'Lower Limb',
        source: 'External Iliac Artery (distal to Inguinal Ligament).',
        course: 'Descends through Femoral Triangle -> Adductor Canal -> Adductor Hiatus (becomes Popliteal).',
        branches: [
            'Superficial Epigastric',
            'Superficial Circumflex Iliac',
            'Superficial External Pudendal',
            'Deep External Pudendal',
            'Deep Femoral (Profunda Femoris)',
            'Descending Genicular'
        ],
        clinicalNotes: 'Primary blood supply to Lower Limb. Palpable in Femoral Triangle (NAVEL: Vein-Artery-Nerve).'
    },
    {
        id: 'deep-femoral-artery',
        name: 'Deep Femoral Artery (Profunda Femoris)',
        category: 'Lower Limb',
        source: 'Femoral Artery (Lateral side).',
        course: 'Runs deep between Pectineus and Adductor Longus. Descends behind Adductor Longus.',
        branches: [
            'Lateral Circumflex Femoral (Ascending, Transverse, Descending)',
            'Medial Circumflex Femoral',
            'Perforating Arteries (1-3 + termination)'
        ],
        clinicalNotes: 'Major supply to Thigh muscles (Hamstrings via perforators, Quads via Lat Circumflex).'
    },
    {
        id: 'medial-circumflex-femoral-artery',
        name: 'Medial Circumflex Femoral Artery',
        category: 'Lower Limb',
        source: 'Deep Femoral Artery (usually).',
        course: 'Passes medially and posteriorly between Pectineus and Iliopsoas.',
        branches: [
            'Ascending, Transverse, Acetabular branches'
        ],
        clinicalNotes: 'Primary blood supply to the Head and Neck of Femur (Retinacular arteries). Damage leads to AVN.'
    },
    {
        id: 'lateral-circumflex-femoral-artery',
        name: 'Lateral Circumflex Femoral Artery',
        category: 'Lower Limb',
        source: 'Deep Femoral Artery (usually).',
        course: 'Passes laterally deep to Sartorius and Rectus Femoris.',
        branches: [
            'Ascending (anastomoses with Sup Gluteal)',
            'Transverse (Cruciate Anastomosis)',
            'Descending (Knee anastomosis)'
        ],
        clinicalNotes: 'Supplies anterior thigh/gluteal region.'
    },
    {
        id: 'popliteal-artery',
        name: 'Popliteal Artery',
        category: 'Lower Limb',
        source: 'Femoral Artery (after Adductor Hiatus).',
        course: 'Deepest structure in Popliteal Fossa. Divides into Anterior/Posterior Tibial Arteries at Popliteus.',
        branches: [
            'Superior Medial/Lateral Genicular',
            'Middle Genicular (Cruciates/Synovium)',
            'Inferior Medial/Lateral Genicular',
            'Sural Arteries (to Gastrocnemius)'
        ],
        clinicalNotes: 'Genicular anastomosis provides collateral circulation. Susceptible to entrapment/aneurysm.'
    },
    {
        id: 'anterior-tibial-artery',
        name: 'Anterior Tibial Artery',
        category: 'Lower Limb',
        source: 'Popliteal Artery (Terminal Branch).',
        course: 'Passes superior to Interosseous Membrane -> Anterior Compartment -> Ankle.',
        branches: [
            'Anterior/Posterior Tibial Recurrent (Knee)',
            'Muscular branches (Anterior compartment)',
            'Anterior Medial/Lateral Malleolar',
            'Dorsalis Pedis (continuation)'
        ],
        clinicalNotes: 'Injury causes Compartment Syndrome (Anterior). Pulse felt lateral to EHL tendon.'
    },
    {
        id: 'posterior-tibial-artery',
        name: 'Posterior Tibial Artery',
        category: 'Lower Limb',
        source: 'Popliteal Artery (Terminal Branch - larger).',
        course: 'Deep Posterior Compartment (with Tibial Nerve). Passes posterior to Medial Malleolus (Tarsal Tunnel).',
        branches: [
            'Fibular Artery',
            'Nutrient Artery to Tibia (largest nutrient artery)',
            'Medial/Lateral Plantar Arteries (Terminal)'
        ],
        clinicalNotes: 'Main blood supply to foot. Pulse felt posterior to Medial Malleolus.'
    },
    {
        id: 'fibular-artery',
        name: 'Fibular (Peroneal) Artery',
        category: 'Lower Limb',
        source: 'Posterior Tibial Artery.',
        course: 'Descends in Deep Posterior Compartment (near Fibula).',
        branches: [
            'Nutrient Artery to Fibula',
            'Perforating branches (supply Lateral Compartment)',
            'Lateral Calcaneal'
        ],
        clinicalNotes: 'Supplies Lateral Compartment muscles (since no artery exists there).'
    },
    {
        id: 'dorsalis-pedis-artery',
        name: 'Dorsalis Pedis Artery',
        category: 'Lower Limb',
        source: 'Anterior Tibial Artery (distal to Extensor Retinaculum).',
        course: 'Runs on dorsum of foot between EHL and EDL tendons.',
        branches: [
            'Lateral Tarsal Artery (Deep to EDB)',
            'Arcuate Artery (Metatarsal branches)',
            'Deep Plantar Artery (joins Deep Plantar Arch)'
        ],
        clinicalNotes: 'Pulse palpated on dorsum of foot (Lateral to EHL). Deep Plantar joins Lateral Plantar to form Arch.'
    },
    {
        id: 'medial-plantar-artery',
        name: 'Medial Plantar Artery',
        category: 'Lower Limb',
        source: 'Posterior Tibial Artery (Smaller terminal branch).',
        course: 'Runs medially on sole of foot.',
        branches: [
            'Plantar Digital Arteries (to Medial 1.5 toes)',
            'Contributes to Deep Plantar Arch (minor)'
        ],
        clinicalNotes: 'Supplies muscles of great toe.'
    },
    {
        id: 'lateral-plantar-artery',
        name: 'Lateral Plantar Artery',
        category: 'Lower Limb',
        source: 'Posterior Tibial Artery (Larger terminal branch).',
        course: 'Runs obliquely to base of 5th metatarsal, then medially.',
        branches: [
            'Deep Plantar Arch (forms with Deep Plantar Artery)',
            'Plantar Metatarsal Arteries'
        ],
        clinicalNotes: 'Major supply to deep foot muscles. Forms the Deep Plantar Arch.'
    }
];
