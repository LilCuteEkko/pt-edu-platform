
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
    // 8. Head (Neurocranium)
    {
        id: 'frontal-bone',
        name: 'Frontal Bone',
        category: 'Head (Neurocranium)',
        description: 'Forms the forehead and roof of the orbits.',
        landmarks: [
            'Glabella: Smooth area between eyebrows.',
            'Supraorbital Notch/Foramen: Transmission of Supraorbital nerve (V1).',
            'Coronal Suture: Junction with Parietal bones.'
        ],
        articulations: [
            'Parietal bones (Coronal suture)',
            'Sphenoid, Ethmoid, Nasal, Zygomatic, Lacrimal, Maxilla'
        ],
        clinicalNotes: 'Fracture may involve frontal sinus.'
    },
    {
        id: 'parietal-bone',
        name: 'Parietal Bone',
        category: 'Head (Neurocranium)',
        description: 'Forms the superior and lateral walls of the cranium.',
        landmarks: [
            'Sagittal Suture: Midline union of R/L Parietals.',
            'Coronal Suture: Anterior union with Frontal.',
            'Lambdoid Suture: Posterior union with Occipital.',
            'Squamous Suture: Lateral union with Temporal.'
        ],
        articulations: [
            'Frontal, Occipital, Temporal, Sphenoid, Contralateral Parietal'
        ],
        clinicalNotes: 'Pterion (junction of Frontal, Parietal, Temporal, Sphenoid) is weak point; Middle Meningeal Artery runs beneath.'
    },
    {
        id: 'occipital-bone',
        name: 'Occipital Bone',
        category: 'Head (Neurocranium)',
        description: 'Forms the posterior skull and base of the cranium.',
        landmarks: [
            'Foramen Magnum: Passage for Spinal Cord/Medulla, CN XI spinal roots, Vertebral arteries.',
            'Occipital Condyles: Articulate with Atlas (C1).',
            'External Occipital Protuberance (EOP): Attachment for Trapezius/Nuchal Ligament.',
            'Hypoglossal Canal: Passage for CN XII.',
            'Jugular Foramen: Passage for CN IX, X, XI.'
        ],
        articulations: [
            'Parietal, Temporal, Sphenoid, Atlas (C1)'
        ],
        clinicalNotes: 'Basilar skull fractures can be life-threatening.'
    },
    {
        id: 'temporal-bone',
        name: 'Temporal Bone',
        category: 'Head (Neurocranium)',
        description: 'Forms the inferolateral skull. Contains hearing/balance apparatus.',
        landmarks: [
            'Mastoid Process: Attachment for SCM.',
            'Styloid Process: Attachment for stylohyoid/styloglossus.',
            'Zygomatic Process: Forms Zygomatic Arch.',
            'External Acoustic Meatus: Ear canal.',
            'Mandibular Fossa: TMJ articulation.',
            'Carotid Canal: Passage for Internal Carotid Artery.',
            'Stylomastoid Foramen: Exit for Facial Nerve (CN VII).'
        ],
        articulations: [
            'Parietal, Occipital, Sphenoid, Zygomatic, Mandible'
        ],
        clinicalNotes: 'Mastoiditis can spread to middle ear/brain. Bell\'s Palsy often involves inflammation near stylomastoid foramen.'
    },
    {
        id: 'sphenoid-bone',
        name: 'Sphenoid Bone',
        category: 'Head (Neurocranium)',
        description: 'Keystone bone at the base of the skull. "Bat-shaped".',
        landmarks: [
            'Sella Turcica: Houses Pituitary Gland.',
            'Greater & Lesser Wings.',
            'Pterygoid Processes (Med/Lat): Muscle attachments.',
            'Optic Canal: CN II.',
            'Superior Orbital Fissure: CN III, IV, VI, V1.',
            'Foramen Rotundum: V2.',
            'Foramen Ovale: V3.'
        ],
        articulations: [
            'Articulates with almost every other cranial bone.'
        ],
        clinicalNotes: 'Pituitary tumors expand into Sella Turcica, compressing Optic Chiasm (Visual field deficits).'
    },
    {
        id: 'ethmoid-bone',
        name: 'Ethmoid Bone',
        category: 'Head (Neurocranium)',
        description: 'Located between orbits; forms roof of nasal cavity.',
        landmarks: [
            'Cribriform Plate: Olfactory nerve (CN I) axons pass through.',
            'Crista Galli: Attachment for Falx Cerebri.',
            'Perpendicular Plate: Forms part of Nasal Septum.',
            'Superior & Middle Nasal Conchae.'
        ],
        articulations: [
            'Frontal, Sphenoid, Nasal, Maxilla, Lacrimal, Palatine, Vomer'
        ],
        clinicalNotes: 'Fracture of cribriform plate can cause CSF rhinorrhea and ansomia.'
    },
    // 9. Head (Face)
    {
        id: 'zygomatic-bone',
        name: 'Zygomatic Bone',
        category: 'Head (Face)',
        description: 'Cheekbone.',
        landmarks: [
            'Temporal Process: Forms Zygomatic Arch with Temporal bone.'
        ],
        articulations: [
            'Frontal, Sphenoid, Temporal, Maxilla'
        ],
        clinicalNotes: 'Tripod fracture (Zygomaticomaxillary complex fracture).'
    },
    {
        id: 'maxilla',
        name: 'Maxilla',
        category: 'Head (Face)',
        description: 'Upper jaw. Fusion of two bones.',
        landmarks: [
            'Alveolar Process: Holds upper teeth.',
            'Palatine Process: Anterior Hard Palate.',
            'Infraorbital Foramen: Infraorbital nerve (V2).',
            'Maxillary Sinus.'
        ],
        articulations: [
            'Frontal, Ethmoid, Nasal, Zygomatic, Lacrimal, Inf. Nasal Concha, Palatine, Vomer'
        ],
        clinicalNotes: 'Le Fort fractures.'
    },
    {
        id: 'mandible',
        name: 'Mandible',
        category: 'Head (Face)',
        description: 'Lower jaw. Largest/strongest facial bone.',
        landmarks: [
            'Condylar Process: Head articulates with Temporal bone (TMJ).',
            'Coronoid Process: Attachment for Temporalis.',
            'Ramus & Angle.',
            'Mental Foramen: Mental nerve (V3 branch).',
            'Mandibular Foramen (Medial): Inferior Alveolar nerve (V3).'
        ],
        articulations: [
            'Temporal Bone (TMJ)'
        ],
        clinicalNotes: 'Fractures often occur at two sites (contragencoup). Inferior Alveolar nerve block for dentistry.'
    },
    {
        id: 'nasal-bone',
        name: 'Nasal Bone',
        category: 'Head (Face)',
        description: 'Bridge of the nose.',
        landmarks: [],
        articulations: [
            'Frontal, Maxilla, Ethmoid'
        ],
        clinicalNotes: 'Most commonly fractured facial bone.'
    },
    {
        id: 'lacrimal-bone',
        name: 'Lacrimal Bone',
        category: 'Head (Face)',
        description: 'Smallest cranial bone. Medial wall of orbit.',
        landmarks: [
            'Lacrimal Fossa: For Lacrimal Sac.'
        ],
        articulations: [
            'Frontal, Ethmoid, Maxilla, Inf. Nasal Concha'
        ],
        clinicalNotes: ''
    },
    {
        id: 'vomer',
        name: 'Vomer',
        category: 'Head (Face)',
        description: 'Inferior/Posterior part of Nasal Septum.',
        landmarks: [],
        articulations: [
            'Sphenoid, Ethmoid, Maxilla, Palatine'
        ],
        clinicalNotes: ''
    },
    {
        id: 'palatine-bone',
        name: 'Palatine Bone',
        category: 'Head (Face)',
        description: 'L-shaped bone. Posterior Hard Palate.',
        landmarks: [
            'Horizontal Plate: Posterior Hard Palate.'
        ],
        articulations: [
            'Sphenoid, Ethmoid, Maxilla, Vomer, Inf. Nasal Concha'
        ],
        clinicalNotes: ''
    },
    {
        id: 'inferior-nasal-concha',
        name: 'Inferior Nasal Concha',
        category: 'Head (Face)',
        description: 'Separate bone (unlike Sup/Mid conchae of Ethmoid). Lateral nasal wall.',
        landmarks: [],
        articulations: [
            'Ethmoid, Maxilla, Lacrimal, Palatine'
        ],
        clinicalNotes: ''
    },
    // 10. Pelvis
    {
        id: 'os-coxae',
        name: 'Os Coxae (Hip Bone)',
        category: 'Pelvis',
        description: 'Large irregular bone formed by fusion of Ilium, Ischium, and Pubis. Connects axial skeleton to lower limb.',
        landmarks: [
            'ASIS (Anterior Superior Iliac Spine): Origin of Sartorius/TFL.',
            'AIIS (Anterior Inferior Iliac Spine): Origin of Rectus Femoris.',
            'PSIS (Posterior Superior Iliac Spine): Skin dimple (S2 level).',
            'Iliac Crest: "Hands on hips".',
            'Gluteal Lines (Posterior, Anterior, Inferior): Muscle attachments on external Ilium.',
            'Ischial Tuberosity: "Sit bone", Hamstring origin.',
            'Ischial Spine: Separates Greater/Lesser Sciatic Notches.',
            'Acetabulum: Hip joint socket.',
            'Obturator Foramen: Covered by membrane.',
            'Pubic Symphysis: Anterior connection.'
        ],
        articulations: [
            'Sacrum (SI Joint)',
            'Femur (Hip Joint)',
            'Pubis (Pubic Symphysis)'
        ],
        clinicalNotes: 'Fractures can bleed heavily. Pelvic Inlet geometry differs by sex (Gynecoid vs Android).'
    },
    {
        id: 'sacrum',
        name: 'Sacrum',
        category: 'Pelvis',
        description: 'Triangular bone at base of spine (5 fused vertebrae).',
        landmarks: [
            'Promontory: Anterior sup. edge of S1 body.',
            'Ala: Wings lateral to promontory.',
            'Sacral Foramina (Ant/Post): Exit for sacral nerves.',
            'Auricular Surface: Articulates with Ilium.',
            'Sacral Hiatus: Inferior opening of spiral canal.'
        ],
        articulations: [
            'L5 (Lumbosacral)',
            'Ilium (SI Joint)',
            'Coccyx'
        ],
        clinicalNotes: 'Cauda Equina syndrome.'
    },
    {
        id: 'coccyx',
        name: 'Coccyx (Tailbone)',
        category: 'Pelvis',
        description: 'Small triangular bone (3-5 fused vertebrae).',
        landmarks: [],
        articulations: [
            'Sacrum'
        ],
        clinicalNotes: 'Coccydynia (pain in tailbone).'
    },
    {
        id: 'femur',
        name: 'Femur',
        category: 'Lower Limb',
        description: 'Longest and strongest bone in the body. Thigh bone.',
        landmarks: [
            'Head: Articulates with Acetabulum. Contains Fovea (ligament attachment).',
            'Neck: Connects head to shaft. Common fracture site (Garden Classification).',
            'Greater Trochanter: Attachment for Gluteals, Piriformis, etc.',
            'Lesser Trochanter: Attachment for Iliopsoas.',
            'Intertrochanteric Line (Ant) / Crest (Post).',
            'Linea Aspera (Post): Medial/Lateral lips for muscle attachment.',
            'Gluteal Tuberosity: Glute Max attachment.',
            'Pectineal Line: Pectineus attachment.',
            'Distal: Medial/Lateral Condyles & Epicondyles.',
            'Adductor Tubercle: Adductor Magnus attachment.',
            'Patellar Surface: Smooth anterior articular surface.',
            'Intercondylar Fossa (Notch): Posterior depression (Cruciates).',
            'Popliteal Surface: Posterior distal shaft (floor of popliteal fossa).'
        ],
        articulations: [
            'Acetabulum (Hip Joint)',
            'Tibia (Knee Joint)',
            'Patella (Patellofemoral Joint)'
        ],
        clinicalNotes: 'Neck/Shaft Angle: ~125°. Anteversion: ~12-15° (Males ~7°, Females ~12°). Fractures: Neck (Intracapsular - risk of AVN), Intertrochanteric (Extracapsular).'
    },
    {
        id: 'patella',
        name: 'Patella',
        category: 'Lower Limb',
        description: 'Largest sesamoid bone (within Quadriceps tendon).',
        landmarks: [
            'Base: Superior border (Quadriceps attachment).',
            'Apex: Inferior pole (Patellar Ligament attachment).',
            'Articular Facets (Post): Medial, Lateral, Odd facet.',
            'Vertical Ridge: Separates Medial/Lateral facets.'
        ],
        articulations: [
            'Femur (Patellofemoral Joint)'
        ],
        clinicalNotes: 'Increases leverage of Quads. Dislocates laterally. Chondromalacia Patellae (softening of cartilage).'
    },
    {
        id: 'tibia',
        name: 'Tibia',
        category: 'Lower Limb',
        description: 'Medial and larger leg bone. Main weight-bearing bone.',
        landmarks: [
            'Medial/Lateral Condyles (Plateaus): Articulate with Femur.',
            'Intercondylar Eminence (Tibial Spine): Cruciate attachment. Includes Medial/Lateral Intercondylar Tubercles.',
            'Tibial Tuberosity: Patellar Ligament attachment.',
            'Gerdy\'s Tubercle: IT Band attachment (Lateral).',
            'Soleal Line (Post): Soleus origin.',
            'Anterior Border: "Shin" (subcutaneous).',
            'Medial Malleolus (Distal): Ankle stability.',
            'Plafond: Distal articular surface for Talus.'
        ],
        articulations: [
            'Femur (Knee)',
            'Fibula (Prox/Distal Tibiofibular)',
            'Talus (Ankle)'
        ],
        clinicalNotes: 'Osgood-Schlatter disease (apophysitis of tibial tuberosity). Shin splints common on anterior border.'
    },
    {
        id: 'fibula',
        name: 'Fibula',
        category: 'Lower Limb',
        description: 'Lateral leg bone. Minimal weight-bearing. Stability.',
        landmarks: [
            'Head: Apex (Styloid process). Biceps Femoris/LCL attachment.',
            'Neck: Common Fibular Nerve winds around.',
            'Shaft: Muscle attachments (Peroneals, Flexors, Extensors).',
            'Lateral Malleolus (Distal): Posterior groove for Peroneals.'
        ],
        articulations: [
            'Tibia (Prox/Distal)',
            'Talus (Ankle)'
        ],
        clinicalNotes: 'Common Fibular Nerve injury at neck (Foot Drop). Often harvested for bone grafts.'
    },
    {
        id: 'fabella',
        name: 'Fabella',
        category: 'Lower Limb',
        description: 'Sesamoid bone in lateral head of Gastrocnemius (3-5% population).',
        landmarks: [],
        articulations: [
            'Femur (Posterior Lateral Condyle)'
        ],
        clinicalNotes: 'Can be mistaken for a loose body or osteophyte.'
    },
    {
        id: 'talus',
        name: 'Talus (Ankle Bone)',
        category: 'Lower Limb: Foot (Tarsal)',
        description: 'Keystone of the medial longitudinal arch. No muscular attachments.',
        landmarks: [
            'Trochlea (Dome): Superior articular surface (for Tibia/Fibula).',
            'Head: Articulates with Navicular.',
            'Posterior Process: Lateral/Medial tubercles (groove for FHL).',
            'Groove for FHL: Posterior surface.'
        ],
        articulations: [
            'Tibia (Ankle)',
            'Fibula (Ankle)',
            'Calcaneus (Subtalar)',
            'Navicular (Talonavicular)'
        ],
        clinicalNotes: 'Avascular necrosis risk (neck fractures). "Rocker" of the ankle.'
    },
    {
        id: 'calcaneus',
        name: 'Calcaneus (Heel Bone)',
        category: 'Lower Limb: Foot (Tarsal)',
        description: 'Largest tarsal bone. Transmits body weight to ground.',
        landmarks: [
            'Sustentaculum Tali (Medial): Shelf for Talus. Groove for FHL inferiorly.',
            'Calcaneal Tuberosity: Posterior prominence (Achilles attachment).',
            'Peroneal Trochlea: Lateral separation for Peroneal tendons.',
            'Medial/Lateral Tubercles (Plantarily): Origin of intrinsic muscles.'
        ],
        articulations: [
            'Talus (Subtalar)',
            'Cuboid (Calcaneocuboid)'
        ],
        clinicalNotes: 'Calcaneal spurs. Sever\'s disease (apophysitis). Stress fractures (Marines).'
    },
    {
        id: 'navicular',
        name: 'Navicular',
        category: 'Lower Limb: Foot (Tarsal)',
        description: 'Boat-shaped bone on medial side.',
        landmarks: [
            'Tuberosity: Medial prominence (Tibialis Posterior attachment).',
        ],
        articulations: [
            'Talus (Proximal)',
            'Cuneiforms (Distal)'
        ],
        clinicalNotes: 'Kohler\'s disease (AVN in children). Accessory Navicular.'
    },
    {
        id: 'cuboid',
        name: 'Cuboid',
        category: 'Lower Limb: Foot (Tarsal)',
        description: 'Cube-shaped bone on lateral side.',
        landmarks: [
            'Groove for Fibularis Longus (Plantar surface).',
            'Tuberosity.'
        ],
        articulations: [
            'Calcaneus (Proximal)',
            'Lateral Cuneiform (Medial)',
            'Metatarsals 4-5 (Distal)'
        ],
        clinicalNotes: 'Maintains lateral longitudinal arch.'
    },
    {
        id: 'cuneiforms',
        name: 'Cuneiforms (Medial, Intermediate, Lateral)',
        category: 'Lower Limb: Foot (Tarsal)',
        description: 'Wedge-shaped bones. Medial (1st), Intermediate (2nd), Lateral (3rd).',
        landmarks: [
            'Transverse Arch contributors.'
        ],
        articulations: [
            'Navicular (Proximal)',
            'Metatarsals 1-3 (Distal)',
            'Cuboid (Lateral to Lateral Cuneiform)'
        ],
        clinicalNotes: 'Medial Cuneiform is largest. Key for transverse arch.'
    },
    {
        id: 'metatarsals',
        name: 'Metatarsals (1-5)',
        category: 'Lower Limb: Foot',
        description: '5 long bones of forefoot. 1st is shortest/thickest. 2nd is longest.',
        landmarks: [
            'Base (Proximal)',
            'Shaft',
            'Head (Distal)',
            'Tuberosity of 5th Metatarsal (Fibularis Brevis attachment).'
        ],
        articulations: [
            'Tarsals (Tarsometatarsal/Lisfranc)',
            'Phalanges (MTP)'
        ],
        clinicalNotes: 'Jones Fracture (base of 5th). March Fracture (stress fx of 2nd/3rd). Gout (1st MTP).'
    },
    {
        id: 'phalanges-foot',
        name: 'Phalanges (Foot)',
        category: 'Lower Limb: Foot',
        description: '14 bones. Great toe (Hallux) has 2 (Prox/Distal). Others have 3 (Prox/Mid/Distal).',
        landmarks: [
            'Base, Shaft, Head.'
        ],
        articulations: [
            'Metatarsals (MTP)',
            'Interphalangeal (PIP, DIP)'
        ],
        clinicalNotes: 'Turf toe (hyperextension of 1st MTP).'
    },
    {
        id: 'a-bunch-of-sesamoids', // Keeping consistent with previous style, though typically distinct
        name: 'Sesamoids (1st MTP)',
        category: 'Lower Limb: Foot',
        description: 'Two sesamoids (Medial/Tibial and Lateral/Fibular) within FHB tendon.',
        landmarks: [],
        articulations: [
            'Head of 1st Metatarsal (Plantar surface)'
        ],
        clinicalNotes: 'Protect FHL tendon. Increase leverage of FHB. Sesamoiditis.'
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
    },
    // Thoracic Cage
    {
        id: 'sternum',
        name: 'Sternum',
        category: 'Thoracic Cage',
        description: 'Breastbone. Anterior anchor of thoracic cage.',
        landmarks: [
            'Manubrium: Superior part. Suprasternal/Jugular Notch.',
            'Sternal Angle (Angle of Louis): Manubrium/Body junction (T4 level). Rib 2 attachment.',
            'Body: Long middle part. Articulates with Ribs 2-7.',
            'Xiphoid Process: Inferior tip (T10 level). Cartilaginous until 40s.'
        ],
        articulations: [
            'Clavicle (SC Joint)',
            'Ribs 1-7 (Coastal Cartilages)'
        ],
        clinicalNotes: 'Sternal Angle is key landmark for finding 2nd rib and counting ribs. CPR compressions overlap body.'
    },
    {
        id: 'typical-ribs',
        name: 'Typical Ribs (3-9)',
        category: 'Thoracic Cage',
        description: 'Curved flat bones forming lateral walls.',
        landmarks: [
            'Head: 2 Facets (articulate with sup/inf vertebrae).',
            'Neck: Between head and tubercle.',
            'Tubercle: Articulates with TP of same number vertebrae.',
            'Shaft (Body): Thin, flat, curved.',
            'Costal Groove: Inferior internal border (protects Intercostal N/A/V).'
        ],
        articulations: [
            'Vertebral Bodies (Costovertebral)',
            'Transverse Processes (Costotransverse)',
            'Sternum (Costochondral/Sternocostal)'
        ],
        clinicalNotes: 'Fractures can puncture lungs (Pneumothorax). Neurovascular bundle lies in Costal Groove (inferior).'
    },
    {
        id: 'atypical-ribs',
        name: 'Atypical Ribs (1, 2, 10-12)',
        category: 'Thoracic Cage',
        description: 'Ribs with unique features.',
        landmarks: [
            'Rib 1: Shortest/Broadest. 1 Facet on head. Scalene Tubercle (Ant Scalene). Grooves for Subclavian A/V.',
            'Rib 2: Tuberosity for Serratus Anterior. 2 Facets.',
            'Rib 10: 1 Facet on head.',
            'Rib 11-12: Floating. 1 Facet. No Neck/Tubercle.'
        ],
        articulations: [
            'T1 (Rib 1), T2 (Rib 2), T10-12 (Ribs 10-12).'
        ],
        clinicalNotes: 'Rib 1 fracture indicates severe trauma (hard to break).'
    }
];
