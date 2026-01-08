import internalJugularVeinImg from '../assets/veins/internal-jugular-vein.png';
import externalJugularVeinImg from '../assets/veins/external-jugular-vein.png';
import anteriorJugularVeinImg from '../assets/veins/anterior-jugular-vein.png';
import brachiocephalicVeinImg from '../assets/veins/brachiocephalic-vein.png';
import subclavianVeinImg from '../assets/veins/subclavian-vein.png';

export const veins = [
    // Pelvic Veins
    {
        id: 'external-iliac-vein',
        name: 'External Iliac Vein',
        category: 'Pelvis',
        tributaries: [
            'Femoral Vein (continuation)',
            'Inferior Epigastric Vein',
            'Deep Circumflex Iliac Vein'
        ],
        course: 'Ascends from inguinal ligament along the pelvic brim. Joins Internal Iliac Vein to form Common Iliac Vein.',
        drainage: 'Lower limb and anterior abdominal wall.',
        clinicalNotes: 'Valveless in 20-30% of people.'
    },
    {
        id: 'internal-iliac-vein',
        name: 'Internal Iliac Vein',
        category: 'Pelvis',
        tributaries: [
            'Superior/Inferior Gluteal',
            'Internal Pudendal',
            'Obturator',
            'Lateral Sacral',
            'Middle Rectal',
            'Vesical',
            'Uterine/Vaginal'
        ],
        course: 'Ascends from greater sciatic foramen. Joins External Iliac Vein to form Common Iliac Vein.',
        drainage: 'Pelvic viscera, gluteal region, perineum, medial thigh.',
        clinicalNotes: 'Major drainage of the pelvis.'
    },
    {
        id: 'common-iliac-vein',
        name: 'Common Iliac Vein',
        category: 'Pelvis',
        tributaries: [
            'External Iliac Vein',
            'Internal Iliac Vein',
            'Iliolumbar Vein',
            'Median Sacral Vein (Left Common Iliac usually)'
        ],
        course: 'Formed by union of Ext/Int Iliac veins. Ascends to L5 to join contralateral Common Iliac Vein to form IVC.',
        drainage: 'Pelvis and Lower Limb.',
        clinicalNotes: 'Left Common Iliac Vein is longer than the Right.'
    },
    {
        id: 'inferior-vena-cava-pelvic',
        name: 'Inferior Vena Cava (Pelvic Origin)',
        category: 'Pelvis',
        tributaries: [
            'Common Iliac Veins (Right & Left)'
        ],
        course: 'Begins at L5 by union of Common Iliac Veins. Ascends on right side of vertebral column.',
        drainage: 'All structures below the diaphragm.',
        clinicalNotes: 'Largest vein in the body. Compression (e.g., pregnancy) can cause edema/hypotension.'
    },
    {
        id: 'superior-gluteal-vein',
        name: 'Superior Gluteal Vein',
        category: 'Pelvis',
        tributaries: [
            'Venae Comitantes of Superior Gluteal Artery'
        ],
        course: 'Accompanies Superior Gluteal Artery through Greater Sciatic Foramen. Drains into Internal Iliac Vein.',
        drainage: 'Gluteal region.',
        clinicalNotes: ''
    },
    {
        id: 'inferior-gluteal-vein',
        name: 'Inferior Gluteal Vein',
        category: 'Pelvis',
        tributaries: [
            'Venae Comitantes of Inferior Gluteal Artery'
        ],
        course: 'Accompanies Inferior Gluteal Artery through Greater Sciatic Foramen. Drains into Internal Iliac Vein.',
        drainage: 'Upper posterior thigh, buttock.',
        clinicalNotes: ''
    },
    // Lower Limb
    {
        id: 'femoral-vein',
        name: 'Femoral Vein',
        category: 'Lower Limb',
        tributaries: [
            'Popliteal Vein (continuation)',
            'Great Saphenous Vein',
            'Deep Femoral Vein'
        ],
        course: 'Ascends through Adductor Hiatus -> Adductor Canal -> Femoral Triangle. Becomes External Iliac Vein at Inguinal Ligament.',
        drainage: 'Deep structures of the thigh and leg.',
        clinicalNotes: 'Located medial to Femoral Artery in Femoral Triangle. Site for central line.'
    },
    {
        id: 'great-saphenous-vein',
        name: 'Great Saphenous Vein',
        category: 'Lower Limb',
        tributaries: [
            'Dorsal Venous Arch (Medial)',
            'Accessory Saphenous Vein'
        ],
        course: 'Ascends anterior to Medial Malleolus -> Medial Leg -> Medial Thigh -> Saphenous Opening -> Femoral Vein.',
        drainage: 'Superficial tissues of medial lower limb.',
        clinicalNotes: 'Longest vein in body. Used for CABG grafts. Varicose veins common.'
    },
    {
        id: 'popliteal-vein',
        name: 'Popliteal Vein',
        category: 'Lower Limb',
        tributaries: [
            'Anterior Tibial Vein',
            'Posterior Tibial Vein',
            'Small Saphenous Vein'
        ],
        course: 'Formed by AT/PT veins. Crosses from medial to lateral of artery. Posterior to Artery. Becomes Femoral Vein at Adductor Hiatus.',
        drainage: 'Leg and Foot.',
        clinicalNotes: 'Superficial to Artery.'
    },
    {
        id: 'small-saphenous-vein',
        name: 'Small Saphenous Vein',
        category: 'Lower Limb',
        tributaries: [
            'Lateral marginal vein of foot'
        ],
        course: 'Posterior Lateral Malleolus -> Posterior Leg -> Pierces fascia -> Popliteal Vein.',
        drainage: 'Lateral foot and posterior leg.',
        clinicalNotes: 'Sural nerve accompanies it.'
    },
    {
        id: 'internal-jugular-vein',
        name: 'Internal Jugular Vein (IJV)',
        drainage: 'Brain, Face, Neck.',
        course: 'Exits Jugular Foramen. Descends in Carotid Sheath (lateral to Carotid). Joins Subclavian to form Brachiocephalic Vein.',
        clinicalNotes: 'Major site for central line placement. Deep to SCM.',
        category: 'Neck',
        imageUrl: internalJugularVeinImg
    },
    {
        id: 'external-jugular-vein',
        name: 'External Jugular Vein (EJV)',
        drainage: 'Scalp, Face.',
        course: 'Formed by Post. Auricular + Post. div of Retromandibular. Crosses SCM obliquely. Drains into Subclavian Vein.',
        clinicalNotes: 'Visible distension in CHF (Jugular Venous Distension usually refers to IJV, but EJV also distends).',
        category: 'Neck',
        imageUrl: externalJugularVeinImg
    },
    {
        id: 'anterior-jugular-vein',
        name: 'Anterior Jugular Vein',
        drainage: 'Anterior Neck.',
        course: 'Descends near midline. Drains into EJV or Subclavian. Jugular Arch connects right/left.',
        clinicalNotes: 'Risk of bleeding in tracheostomy.',
        category: 'Neck',
        imageUrl: anteriorJugularVeinImg
    },
    {
        id: 'brachiocephalic-vein',
        name: 'Brachiocephalic Vein (L & R)',
        drainage: 'Head, Neck, Upper Limb.',
        course: 'Formed by IJV + Subclavian. Left is longer/horizontal (crosses midline). Right is vertical. Merge to form SVC.',
        clinicalNotes: 'Left crosses anterior to aortic arch branches.',
        category: 'Thorax/Neck',
        imageUrl: brachiocephalicVeinImg
    },
    {
        id: 'subclavian-vein',
        name: 'Subclavian Vein',
        drainage: 'Upper Limb.',
        course: 'Continuation of Axillary Vein at 1st Rib. Anterior to Anterior Scalene (Artery is posterior).',
        clinicalNotes: 'Central line access.',
        category: 'Neck',
        imageUrl: subclavianVeinImg
    }
];
