import musclePlaceholderImg from '../assets/muscles/placeholder.png';

export const nerves = [
    // Brachial Plexus Structure
    {
        id: 'brachial-plexus-roots',
        name: 'Brachial Plexus: Roots',
        category: 'Upper Limb (Plexus)',
        type: 'Plexus Structure',
        origin: 'Ventral rami of spinal nerves C5-T1.',
        course: 'Pass between Anterior and Middle Scalene muscles.',
        branches: [
            'Dorsal Scapular Nerve (C5): Pierces middle scalene; supplies Levator Scapulae & Rhomboids.',
            'Long Thoracic Nerve (C5-C7): Supplies Serratus Anterior.'
        ],
        clinicalNotes: 'Roots merge to form Trunks.'
    },
    {
        id: 'brachial-plexus-trunks',
        name: 'Brachial Plexus: Trunks',
        category: 'Upper Limb (Plexus)',
        type: 'Plexus Structure',
        origin: 'Formed by merging of Roots.',
        course: 'Superior (C5-C6), Middle (C7), Inferior (C8-T1).',
        branches: [
            'Nerve to Subclavius (Superior Trunk): Supplies Subclavius.',
            'Suprascapular Nerve (Superior Trunk): Passes through scapular notch; supplies Supraspinatus & Infraspinatus.'
        ],
        clinicalNotes: 'Each trunk divides into Anterior and Posterior divisions.'
    },
    {
        id: 'brachial-plexus-divisions',
        name: 'Brachial Plexus: Divisions',
        category: 'Upper Limb (Plexus)',
        type: 'Plexus Structure',
        origin: 'Trunks divide into Anterior and Posterior divisions.',
        course: 'Anterior divisions supply flexor compartments detailed below. Posterior divisions supply extensor compartments.',
        branches: [],
        clinicalNotes: 'No branches directly from divisions. Divisions merge to form Cords.'
    },
    {
        id: 'brachial-plexus-cords',
        name: 'Brachial Plexus: Cords',
        category: 'Upper Limb (Plexus)',
        type: 'Plexus Structure',
        origin: 'Formed by merging of Divisions. Named by relationship to Axillary Artery.',
        course: 'Lateral, Medial, and Posterior Cords.',
        branches: [
            'Lateral Cord: Lateral Pectoral n., Musculocutaneous n., Lateral root of Median n.',
            'Medial Cord: Medial Pectoral n., Medial Brachial Cutaneous n., Medial Antebrachial Cutaneous n., Ulnar n., Medial root of Median n.',
            'Posterior Cord: Upper Subscapular n., Thoracodorsal n., Lower Subscapular n., Axillary n., Radial n.'
        ],
        clinicalNotes: 'Cords divide/merge to form the major peripheral nerves/branches.'
    },

    // Peripheral Nerves
    {
        id: 'axillary-nerve',
        name: 'Axillary Nerve',
        category: 'Upper Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Posterior Cord (C5, C6).',
        course: 'Exits Axilla through Quadrangular Space (with Posterior Circumflex Humeral artery).',
        innervation: [
            'Motor: Deltoid, Teres Minor.',
            'Sensory: Superior Lateral Brachial Cutaneous nerve (Skin over Deltoid).'
        ],
        clinicalNotes: 'Vulnerable to injury in shoulder dislocations or surgical neck fractures of humerus.'
    },
    {
        id: 'musculocutaneous-nerve',
        name: 'Musculocutaneous Nerve',
        category: 'Upper Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Lateral Cord (C5, C6, C7).',
        course: 'Pierces Coracobrachialis. Travels between Biceps Brachii and Brachialis.',
        innervation: [
            'Motor: Coracobrachialis, Biceps Brachii, Brachialis.',
            'Sensory: Lateral Cutaneous nerve of the forearm (Skin anastomoses).'
        ],
        clinicalNotes: 'Supplies the anterior compartment of the arm.'
    },
    {
        id: 'radial-nerve',
        name: 'Radial Nerve',
        category: 'Upper Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Posterior Cord (C5-T1).',
        course: 'Posterior to brachial artery. Enters forearm anterior to Lateral Epicondyle. Divides into Deep (pierces Supinator -> PIN) and Superficial branches.',
        innervation: [
            'Motor (Arm): Triceps Brachii, Anconeus.',
            'Motor (Forearm - Deep Branch): ECRB, Supinator.',
            'Motor (Forearm - PIN): Extensor Digitorum, EDM, ECU, APL, EPB, EPL, Extensor Indicis.',
            'Sensory (Superficial Branch): Lateral dorsum of hand (digits 1-3.5) EXCEPT fingertips.'
        ],
        clinicalNotes: 'Deep branch pierces Supinator. Superficial branch passes through Anatomical Snuffbox roof. Wrist Drop (Radial n. injury).'
    },
    {
        id: 'median-nerve',
        name: 'Median Nerve',
        category: 'Upper Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Lateral and Medial Cords (C6-T1).',
        course: 'Cubital Fossa -> Forearm -> Carpal Tunnel (Deep to Flexor Retinaculum). Gives off Palmar Cutaneous branch (superficial to retinaculum) before tunnel.',
        innervation: [
            'Motor (Forearm): Ant Compartment (except FCU/medial FDP).',
            'Motor (Hand - Recurrent Branch): Thenar Muscles (APB, FPB, OP).',
            'Motor (Hand - Digital Branches): Lumbricals 1 & 2.',
            'Sensory: Lateral palm (via Palmar Cutaneous) & digits 1-3.5 (via Digital Branches).'
        ],
        clinicalNotes: 'Carpal Tunnel Syndrome (spares palm sensation due to Palmar branch). Recurrent branch "Million Dollar Nerve" injury.'
    },
    {
        id: 'ulnar-nerve',
        name: 'Ulnar Nerve',
        category: 'Upper Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Medial Cord (C8, T1).',
        course: 'Cubital Tunnel -> Forearm -> Guyon\'s Canal (Pisiform/Hamate hook). Divides into Superficial and Deep branches in hand.',
        innervation: [
            'Motor (Forearm): FCU, Medial 1/2 FDP.',
            'Motor (Hand - Deep Branch): Hypothenar, Adductor Pollicis, Interossei, Lumbricals 3&4.',
            'Motor (Hand - Superficial Branch): Palmaris Brevis.',
            'Sensory: Medial hand (Palmar/Dorsal Cutaneous branches) & digits 4.5-5.'
        ],
        clinicalNotes: 'Guyon\'s Canal Syndrome (Handlebar Palsy). Claw Hand deformity. Froment\'s Sign.'
    },
    {
        id: 'long-thoracic-nerve',
        name: 'Long Thoracic Nerve',
        category: 'Upper Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Roots C5, C6, C7.',
        course: 'Runs along the lateral thoracic wall on Serratus Anterior.',
        innervation: ['Serratus Anterior.'],
        clinicalNotes: 'Injury leads to Winging of the Scapula.'
    },
    {
        id: 'thoracodorsal-nerve',
        name: 'Thoracodorsal Nerve',
        category: 'Upper Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Posterior Cord (C6, C7, C8).',
        course: 'Descends along posterior axillary wall.',
        innervation: ['Latissimus Dorsi.'],
        clinicalNotes: '"Handcuff muscle" nerve.'
    },

    // Lumbosacral Plexus
    {
        id: 'lumbar-plexus',
        name: 'Lumbar Plexus',
        category: 'Pelvis & Lower Limb (Plexus)',
        type: 'Plexus Structure',
        origin: 'Anterior Rami L1-L4.',
        course: 'Forms within Psoas Major muscle.',
        branches: [
            'Iliohypogastric (L1): Cutaneous gluteal/hypogastric.',
            'Ilioinguinal (L1): Cutaneous genitalia/motor abdominal.',
            'Genitofemoral (L1-L2): Cremasteric reflex/sensory.',
            'Lat. Femoral Cutaneous (L2-L3): Sensory anterolateral thigh.',
            'Femoral (L2-L4 - Post Div): Hip flexors/Knee extensors.',
            'Obturator (L2-L4 - Ant Div): Hip Adductors.'
        ],
        clinicalNotes: 'Embedded in Psoas. L4 branch joins Sacral Plexus.'
    },
    {
        id: 'femoral-nerve',
        name: 'Femoral Nerve',
        category: 'Pelvis & Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Lumbar Plexus (Post. Div. L2, L3, L4).',
        course: 'Deep to Inguinal Ligament (NAVEL - Nerve Lateral to Artery).',
        innervation: [
            'Motor: Iliacus, Pectineus, Sartorius, Quadriceps (Rectus Fem, Vastus Group).',
            'Sensory: Anterior thigh, Medial leg/foot (Saphenous nerve).'
        ],
        clinicalNotes: 'Largest branch of Lumbar Plexus.'
    },
    {
        id: 'obturator-nerve',
        name: 'Obturator Nerve',
        category: 'Pelvis & Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Lumbar Plexus (Ant. Div. L2, L3, L4).',
        course: 'Obturator Canal.',
        innervation: [
            'Motor: Obturator Externus, Adductor Longus/Brevis/Magnus, Gracilis.',
            'Sensory: Medial thigh.'
        ],
        clinicalNotes: 'Vulnerable in pelvic surgeries.'
    },
    {
        id: 'sacral-plexus',
        name: 'Sacral Plexus',
        category: 'Pelvis & Lower Limb (Plexus)',
        type: 'Plexus Structure',
        origin: 'Lumbosacral Trunk (L4-L5) & Ant. Rami S1-S4.',
        course: 'Exits pelvis via Greater Sciatic Foramen (mostly).',
        branches: [
            'Sciatic (L4-S3): Tibial & Common Fibular components.',
            'Superior Gluteal (L4-S1): Sup to Piriformis.',
            'Inferior Gluteal (L5-S2): Inf to Piriformis.',
            'Pudendal (S2-S4): Perineum.',
            'Post. Femoral Cutaneous (S1-S3).'
        ],
        clinicalNotes: 'Supplies buttocks, posterior thigh, and all leg/foot.'
    },
    {
        id: 'sciatic-nerve',
        name: 'Sciatic Nerve',
        category: 'Pelvis & Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Sacral Plexus (L4-S3).',
        course: 'Greater Sciatic Foramen (Inf to Piriformis). Ends proximal to popliteal fossa.',
        innervation: [
            'Motor: Hamstrings (Biceps Femoris, Semitendinosus, Semimembranosus), Adductor Magnus (Post part).',
            'Sensory: Leg/Foot via branches.'
        ],
        clinicalNotes: 'Largest nerve in body. Splits into Tibial & Common Fibular.'
    },
    {
        id: 'pudendal-nerve',
        name: 'Pudendal Nerve',
        category: 'Pelvis & Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Sacral Plexus (S2-S4).',
        course: 'Exits Greater Sciatic Foramen -> Enters Lesser Sciatic Foramen -> Pudendal Canal.',
        innervation: [
            'Motor: Muscles of Perineum, Levator Ani, Ext. Anal/Urethral Sphincters.',
            'Sensory: External Genitalia, Perineum.'
        ],
        clinicalNotes: 'Pudendal block for childbirth. "S2, 3, 4 keeps the ___ off the floor".'
    },
    {
        id: 'superior-gluteal-nerve',
        name: 'Superior Gluteal Nerve',
        category: 'Pelvis & Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Sacral Plexus (L4-S1).',
        course: 'Exits Greater Sciatic Foramen superior to Piriformis.',
        innervation: [
            'Motor: Gluteus Medius, Gluteus Minimus, Tensor Fasciae Latae.'
        ],
        clinicalNotes: 'Injury causes Trendelenburg sign (contralateral hip drop).'
    },
    {
        id: 'inferior-gluteal-nerve',
        name: 'Inferior Gluteal Nerve',
        category: 'Pelvis & Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Sacral Plexus (L5-S2).',
        course: 'Exits Greater Sciatic Foramen inferior to Piriformis.',
        innervation: [
            'Motor: Gluteus Maximus.'
        ],
        clinicalNotes: 'Injury causes difficulty in rising from sitting position (glute max lurch).'
    },
    {
        id: 'posterior-femoral-cutaneous-nerve',
        name: 'Posterior Femoral Cutaneous Nerve',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Sacral Plexus (S1-S3).',
        course: 'Exits GSF inferior to Piriformis. Runs deep to Glute Max, then subfascial down posterior thigh.',
        innervation: [
            'Sensory: Posterior Thigh, Popliteal Fossa, Proximal Leg.',
            'Branches: Inferior Cluneal (Inf buttock), Perineal branches.'
        ],
        clinicalNotes: 'Supplies more skin than any other cutaneous nerve. Pain referred here in sciatica.'
    },
    {
        id: 'nerve-to-obturator-internus',
        name: 'Nerve to Obturator Internus',
        category: 'Pelvis & Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Sacral Plexus (L5-S2).',
        course: 'Exits GSF, enters LSF.',
        innervation: [
            'Motor: Obturator Internus, Superior Gemellus.',
            'Sensory: Hip Joint.'
        ],
        clinicalNotes: 'Small motor nerve.'
    },
    {
        id: 'nerve-to-quadratus-femoris',
        name: 'Nerve to Quadratus Femoris',
        category: 'Pelvis & Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Sacral Plexus (L4-S1).',
        course: 'Exits GSF deep to Sciatic Nerve.',
        innervation: [
            'Motor: Quadratus Femoris, Inferior Gemellus.',
            'Sensory: Hip Joint.'
        ],
        clinicalNotes: 'Small motor nerve.'
    },
    {
        id: 'superior-cluneal-nerves',
        name: 'Superior Cluneal Nerves',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Dorsal Rami L1-L3.',
        course: 'Cross Iliac Crest.',
        innervation: [
            'Sensory: Superior Buttock (down to greater trochanter).'
        ],
        clinicalNotes: 'Can be entrapped at iliac crest.'
    },
    {
        id: 'middle-cluneal-nerves',
        name: 'Middle Cluneal Nerves',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Dorsal Rami S1-S3.',
        course: 'Exit via dorsal sacral foramina.',
        innervation: [
            'Sensory: Skin over Sacrum and adjacent buttock.'
        ],
        clinicalNotes: ''
    },
    // Lower Limb (Cutaneous)
    {
        id: 'lateral-femoral-cutaneous-nerve',
        name: 'Lateral Femoral Cutaneous Nerve',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Lumbar Plexus (L2, L3).',
        course: 'Passes deep to inguinal ligament, medial to ASIS.',
        innervation: [
            'Sensory: Lateral thigh.'
        ],
        clinicalNotes: 'Compression causes Meralgia Paresthetica (skinny jeans syndrome).'
    },
    {
        id: 'ilioinguinal-nerve',
        name: 'Ilioinguinal Nerve',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Lumbar Plexus (L1).',
        course: 'Traverses inguinal canal.',
        innervation: [
            'Sensory: Medial femoral triangle, Genitalia.',
            'Motor: Internal Oblique/Transverse Abdominis.'
        ],
        clinicalNotes: 'Risk of injury during hernia repair.'
    },
    {
        id: 'genitofemoral-nerve',
        name: 'Genitofemoral Nerve',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Lumbar Plexus (L1, L2).',
        course: 'Pierces Psoas Major. Divides into Genital and Femoral branches.',
        innervation: [
            'Sensory: Lateral femoral triangle (Femoral branch), Scrotum/Labia (Genital branch).',
            'Motor: Cremaster muscle (Genital branch).'
        ],
        clinicalNotes: 'Cremasteric Reflex (L1).'
    },
    {
        id: 'anterior-femoral-cutaneous-nerves',
        name: 'Anterior Femoral Cutaneous Nerves',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Femoral Nerve (L2-L4).',
        course: 'Pierce deep fascia of thigh.',
        innervation: [
            'Sensory: Anterior Thigh (Medial and Lateral groups).'
        ],
        clinicalNotes: 'Supply sensation down to the knee.'
    },
    {
        id: 'saphenous-nerve',
        name: 'Saphenous Nerve',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Femoral Nerve.',
        course: 'Adductor Canal -> Medial Knee -> Medial Leg/Foot.',
        innervation: [
            'Sensory: Medial leg and foot (arch).'
        ],
        clinicalNotes: 'No motor function. Subject to entrapment in adductor canal or injury in vein stripping.'
    },
    {
        id: 'tibial-nerve-popliteal',
        name: 'Tibial Nerve (Popliteal Fossa)',
        category: 'Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Sciatic Nerve (L4-S3).',
        course: 'Most superficial structure in Popliteal Fossa (N-V-A). Bisects fossa vertically.',
        innervation: [
            'Motor: Gastrocnemius, Soleus, Plantaris, Popliteus.',
            'Sensory: Medial Sural Cutaneous (Posterior Calf).'
        ],
        clinicalNotes: 'Genicular branches accompany arteries.'
    },
    {
        id: 'common-fibular-nerve-popliteal',
        name: 'Common Fibular Nerve (Popliteal Fossa)',
        category: 'Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Sciatic Nerve (L4-S2).',
        course: 'Follows medial border of Biceps Femoris. Winds around neck of Fibula.',
        innervation: [
            'Sensory: Lateral Sural Cutaneous (Lateral Calf).'
        ],
        clinicalNotes: 'Vulnerable at fibular neck (Foot drop).'
    },
    {
        id: 'sural-nerve',
        name: 'Sural Nerve',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Medial Sural Cutaneous (Tibial) + Sural Communicating Branch (Common Fibular).',
        course: 'Descends with Small Saphenous Vein behind Lateral Malleolus.',
        innervation: [
            'Sensory: Distal 1/3 of posterior leg, Lateral ankle/foot.'
        ],
        clinicalNotes: 'Nerve grafts.'
    },
    {
        id: 'tibial-nerve-leg',
        name: 'Tibial Nerve (Leg)',
        category: 'Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'continuation of Tibial Nerve.',
        course: 'Deep to Soleus, superficial to Tibialis Post/FDL. Passes through Tarsal Tunnel.',
        innervation: [
            'Motor: Tibialis Posterior, FDL, FHL.',
            'Sensory: Heel (Medial Calcaneal branches), Sole of Foot (Medial/Lateral Plantar).'
        ],
        clinicalNotes: 'Tarsal Tunnel Syndrome (compression behind medial malleolus).'
    },
    {
        id: 'deep-fibular-nerve',
        name: 'Deep Fibular (Peroneal) Nerve',
        category: 'Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Common Fibular Nerve (at Fibular Neck).',
        course: 'Anterior Compartment (with Anterior Tibial Artery).',
        innervation: [
            'Motor: Tibialis Anterior, EDL, EHL, Fibularis Tertius, EDB, EHB (foot).',
            'Sensory: Web space between 1st and 2nd toes.'
        ],
        clinicalNotes: 'Injury results in Foot Drop (Steppage Gait). Compartment Syndrome.'
    },
    {
        id: 'superficial-fibular-nerve',
        name: 'Superficial Fibular (Peroneal) Nerve',
        category: 'Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Common Fibular Nerve (at Fibular Neck).',
        course: 'Lateral Compartment. Becomes subcutaneous in distal 1/3 of leg.',
        innervation: [
            'Motor: Fibularis Longus, Fibularis Brevis.',
            'Sensory: Distal anterior leg and Dorsum of foot (except web space 1-2).'
        ],
        clinicalNotes: ' vulnerable to entrapment where it pierces fascia.'
    },
    {
        id: 'medial-plantar-nerve',
        name: 'Medial Plantar Nerve',
        category: 'Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Tibial Nerve (Larger Terminal Branch).',
        course: 'Runs with Medial Plantar Artery.',
        innervation: [
            'Motor: Abductor Hallucis, FDB, FHB, 1st Lumbrical.',
            'Sensory: Medial 3.5 digits (Plantar surface).'
        ],
        clinicalNotes: 'Compresses in Tarsal Tunnel. "LAFF" muscles (Lumbrical 1, Abd Hallucis, FDB, FHB).'
    },
    {
        id: 'lateral-plantar-nerve',
        name: 'Lateral Plantar Nerve',
        category: 'Lower Limb (Peripheral)',
        type: 'Peripheral Nerve',
        origin: 'Tibial Nerve (Smaller Terminal Branch).',
        course: 'Runs with Lateral Plantar Artery.',
        innervation: [
            'Motor: Quadratus Plantae, Abd Digiti Minimi, Add Hallucis, Interossei, Lumbricals 2-4.',
            'Sensory: Lateral 1.5 digits (Plantar surface).'
        ],
        clinicalNotes: 'Supplies most intrinsics (like Ulnar nerve in hand).'
    },
    {
        id: 'medial-calcaneal-nerve',
        name: 'Medial Calcaneal Nerve',
        category: 'Lower Limb (Cutaneous)',
        type: 'Peripheral Nerve',
        origin: 'Tibial Nerve (proximal to flexor retinaculum).',
        course: 'Pierces flexor retinaculum.',
        innervation: [
            'Sensory: Plantar aspect of heel.'
        ],
        clinicalNotes: 'Heel pain context.'
    }
];
