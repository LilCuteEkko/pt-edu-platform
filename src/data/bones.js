
import clavicleImg from '../assets/bones/clavicle.png';
import scapulaImg from '../assets/bones/scapula.png';
import humerusImg from '../assets/bones/humerus.png';
import vertebralColumnImg from '../assets/bones/vertebral-column.png';
import cervicalVertebraeImg from '../assets/bones/cervical-vertebrae.png';

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
        clinicalNotes: 'Fractures are most common at the junction of the middle and lateral thirds. Severe OA of SC/AC joints limits function.',
        imageUrl: clavicleImg
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
        clinicalNotes: 'Winging indicates Serratus Anterior weakness (Long Thoracic Nerve). Anterior tilt (Pec Minor tightness) affects posture.',
        imageUrl: scapulaImg
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
        clinicalNotes: 'Neer\'s Classification for proximal fractures (2-part, 3-part, 4-part). Radial nerve risk with mid-shaft fractures.',
        imageUrl: humerusImg
    },
    {
        id: 'vertebral-column',
        name: 'Vertebral Column (Spine)',
        category: 'Spine',
        description: '33 vertebrae (7 Cervical, 12 Thoracic, 5 Lumbar, 5 fused Sacral, 4 fused Coccyx). 72-75 cm typical length. 1/4 length is IVD.',
        landmarks: [
            'Primary Curvatures (Kyphotic): Thoracic, Sacral.',
            'Secondary Curvatures (Lordotic): Cervical, Lumbar.',
            'Vertebral Body: Supports weight, size increases caudally.',
            'Vertebral Arch: Pedicles + Laminae.',
            'Spinous Process: Posterior projection.',
            'Transverse Process: Lateral projection.',
            'Articular Processes: Superior/Inferior facets (Zygapophyseal joints).',
            'Vertebral Foramen: Formed by body + arch (canal).',
            'Intervertebral Foramen: Exit for spinal nerves.'
        ],
        articulations: [
            'Intervertebral Joints (Symphysis)',
            'Zygapophyseal (Facet) Joints (Plane)',
            'Atlanto-Occipital (C1-Occiput)',
            'Atlanto-Axial (C1-C2)'
        ],
        clinicalNotes: 'Kyphosis (excessive thoracic), Lordosis (excessive lumbar), Scoliosis (lateral deviation). Spina Bifida (failure to fuse). Discs absorb shock (hydrophilic).',
        imageUrl: vertebralColumnImg
    },
    {
        id: 'cervical-vertebrae',
        name: 'Cervical Vertebrae (C1-C7)',
        category: 'Spine',
        description: 'Smallest vertebrae. C1 (Atlas) ring-shaped without body/SP. C2 (Axis) has Dens (Odontoid).',
        landmarks: [
            'Transverse Foramen: For Vertebral Artery.',
            'Bifid Spinous Processes (C3-C5).',
            'Uncinate Processes (Joints of Luschka).',
            'C1: Anterior/Posterior arches, lateral masses.',
            'C2: Dens (pivot for rotation).',
            'C7 (Vertebra Prominens): Long non-bifid SP.'
        ],
        articulations: [
            'Facet Orientation: Oblique (45 deg). Superior faces Up/Back. Inferior faces Down/Forward.',
        ],
        clinicalNotes: 'Most mobile region. Whiplash injuries. Vertebral artery vulnerable in transverse foramen.',
        imageUrl: cervicalVertebraeImg
    },
    {
        id: 'thoracic-vertebrae',
        name: 'Thoracic Vertebrae (T1-T12)',
        category: 'Spine',
        description: 'Heart-shaped bodies. Articulate with ribs.',
        landmarks: [
            'Costal Facets (Demifacets) on body.',
            'Transverse Costal Facets on TPs (T1-T10).',
            'Spinous Processes: Long, inferior slope (shingle effect).',
            'Vertebral Foramen: Circular, smaller.'
        ],
        articulations: [
            'Facet Orientation: Frontal plane. Superior faces Back/Up/Lat. Inferior faces Fwd/Down/Med.'
        ],
        clinicalNotes: 'Stability > Mobility (protected by ribs). Osteoporosis compression fractures common here.'
    },
    {
        id: 'lumbar-vertebrae',
        name: 'Lumbar Vertebrae (L1-L5)',
        category: 'Spine',
        description: 'Boxy, kidney-shaped bodies. Support massive weight.',
        landmarks: [
            'Spinous Processes: Short, hatchet-shaped.',
            'Mamillary Processes: On Superior Articular Processes (Multifidus attachment).',
            'Accessory Processes: Base of TPs.'
        ],
        articulations: [
            'Facet Orientation: Sagittal plane. Superior faces Med/Back. Inferior faces Lat/Fwd.'
        ],
        clinicalNotes: 'L5 fused to Sacrum = Sacralization. S1 separate = Lumbarization. Spondylolysis (Pars Intra-articularis fx/defect). Spondylolisthesis (slippage). Herniated discs common.'
    },
    {
        id: 'sacrum-coccyx',
        name: 'Sacrum & Coccyx',
        category: 'Spine',
        description: 'Sacrum: 5 fused vertebrae (wedge). Coccyx: 4 fused.',
        landmarks: [
            'Promontory: Ant edge of S1.',
            'Ala: Wings (S1).',
            'Sacral Foramina: Exit for rami.',
            'Median Sacral Crest: Fused SPs.',
            'Sacral Hiatus: S5 lamina failure to fuse.',
            'Sacral Cornu: S5 pedicles.',
            'Auricular Surface: SI Joint.',
            'Lumbosacral Angle.'
        ],
        articulations: [
            'Sacroiliac (SI) Joint',
            'Lumbosacral Joint (L5-S1)',
            'Sacrococcygeal Joint'
        ],
    },
    {
        id: 'hyoid-bone',
        name: 'Hyoid Bone (C3 Level)',
        category: 'Neck',
        description: 'U-shaped bone suspended by muscles (no bony articulations).',
        landmarks: [
            'Body: Anterior rectangular part.',
            'Greater Horns: Posterior projection.',
            'Lesser Horns: Superior projection (junction of body/greater horn).'
        ],
        articulations: [
            'None (suspended by Stylohyoid ligs and muscles).'
        ],
        clinicalNotes: 'Fractured in strangulation. Movement essential for swallowing (deglutition).'
    },
    {
        id: 'cricoid-thyroid-cartilages',
        name: 'Laryngeal Cartilages',
        category: 'Neck',
        description: 'Thyroid (C4/5) and Cricoid (C6).',
        landmarks: [
            'Laryngeal Prominence (Adam\'s Apple).',
            'Thyroid Notch (Superior).',
            'Oblique Line (Muscle attachment).',
            'Cricoid Cartilage: Complete signet ring.'
        ],
        articulations: [
            'Cricothyroid Joint (Synovial).'
        ],
        clinicalNotes: 'Cricothyrotomy site (Cricothyroid membrane). Tracheostomy usually inferior.'
    }
];
