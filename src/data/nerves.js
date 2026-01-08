import musclePlaceholderImg from '../assets/muscles/placeholder.png';

export const nerves = [
    // Brachial Plexus Structure
    {
        id: 'brachial-plexus-roots',
        name: 'Brachial Plexus: Roots',
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
        type: 'Plexus Structure',
        origin: 'Trunks divide into Anterior and Posterior divisions.',
        course: 'Anterior divisions supply flexor compartments detailed below. Posterior divisions supply extensor compartments.',
        branches: [],
        clinicalNotes: 'No branches directly from divisions. Divisions merge to form Cords.'
    },
    {
        id: 'brachial-plexus-cords',
        name: 'Brachial Plexus: Cords',
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
        type: 'Peripheral Nerve',
        origin: 'Roots C5, C6, C7.',
        course: 'Runs along the lateral thoracic wall on Serratus Anterior.',
        innervation: ['Serratus Anterior.'],
        clinicalNotes: 'Injury leads to Winging of the Scapula.'
    },
    {
        id: 'thoracodorsal-nerve',
        name: 'Thoracodorsal Nerve',
        type: 'Peripheral Nerve',
        origin: 'Posterior Cord (C6, C7, C8).',
        course: 'Descends along posterior axillary wall.',
        innervation: ['Latissimus Dorsi.'],
    },
    // Neck: Cranial Nerves
    {
        id: 'cn-x',
        name: 'Vagus Nerve (CN X)',
        type: 'Cranial Nerve',
        origin: 'Medulla.',
        course: 'Exits Jugular Foramen. Descends in Carotid Sheath (between IJV & CCA).',
        innervation: [
            'Motor: Pharynx (constrictors), Larynx (all muscles), Palate (Levator Veli Palatini).',
            'Sensory: Larynx, Pharynx, Thoracic/Abdominal Viscera.'
        ],
        clinicalNotes: 'Recurrent Laryngeal Nerve branch loops under Aorta (L) or Subclavian (R). Lesion = Hoarseness.'
    },
    {
        id: 'cn-xi',
        name: 'Spinal Accessory Nerve (CN XI)',
        type: 'Cranial Nerve',
        origin: 'Spinal Cord C1-C6.',
        course: 'Enters Foramen Magnum, Exits Jugular Foramen. Crosses Posterior Triangle.',
        innervation: [
            'Motor: Sternocleidomastoid (SCM), Trapezius.'
        ],
        clinicalNotes: 'Vulnerable in Posterior Triangle biopsy/surgery. Test: Shrug shoulders (Trap), Turn head (SCM).'
    },
    {
        id: 'cn-xii',
        name: 'Hypoglossal Nerve (CN XII)',
        type: 'Cranial Nerve',
        origin: 'Medulla.',
        course: 'Exits Hypoglossal Canal. Crosses Anterior Triangle (Submandibular/Carotid).',
        innervation: [
            'Motor: Intrinsic/Extrinsic Tongue muscles (except Palatoglossus).'
        ],
        clinicalNotes: 'Lesion: Tongue deviates TO injured side ("Lick your wounds").'
    },

    // Neck: Cervical Plexus (C1-C4)
    {
        id: 'cervical-plexus-cutaneous',
        name: 'Cervical Plexus: Cutaneous Branches',
        type: 'Plexus',
        origin: 'Ventral Rami C2-C4. Erb\'s Point (Posterior border SCM).',
        course: 'Radiate from nerve point of neck.',
        innervation: [
            'Lesser Occipital (C2): Post. scalp/ear.',
            'Greater Auricular (C2-C3): Ant. ear/parotid area.',
            'Transverse Cervical (C2-C3): Ant. neck skin.',
            'Supraclavicular (C3-C4): Shoulder/Clavicle skin.'
        ],
        clinicalNotes: 'Nerve block site at Erb\'s Point.'
    },
    {
        id: 'phrenic-nerve',
        name: 'Phrenic Nerve',
        type: 'Peripheral Nerve',
        origin: 'C3, C4, C5 ("Keeps the diaphragm alive").',
        course: 'Descends on Anterior Scalene muscle (deep to fascia). Enters thorax.',
        innervation: [
            'Motor: Diaphragm.',
            'Sensory: Pericardium, Pleura, Peritoneum.'
        ],
        clinicalNotes: 'Irritation causes shoulder pain (C3-5 dermatome referral). Located dangerously close to scalene block site.'
    },
    {
        id: 'ansa-cervicalis',
        name: 'Ansa Cervicalis',
        type: 'Peripheral Nerve',
        origin: 'Superior Root (C1-C2), Inferior Root (C2-C3). Loop.',
        course: 'Loop lies on/in Carotid Sheath.',
        innervation: [
            'Motor: Infrahyoid Muscles (Sternohyoid, Sternothyroid, Omohyoid).',
            'EXCEPTION: Thyrohyoid is C1 via Hypoglossal.'
        ],
        clinicalNotes: '"Handle of the neck".'
    }
];
