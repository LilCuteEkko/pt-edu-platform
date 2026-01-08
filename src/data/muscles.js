import pectoralisMajorImg from '../assets/muscles/placeholder.png';
import pectoralisMinorImg from '../assets/muscles/placeholder.png';
import serratusAnteriorImg from '../assets/muscles/placeholder.png';
import subclaviusImg from '../assets/muscles/placeholder.png';
import trapeziusImg from '../assets/muscles/upper-trapezius.png';
import latissimusDorsiImg from '../assets/muscles/placeholder.png';
import levatorScapulaeImg from '../assets/muscles/levator-scapulae.png';
import rhomboidMajorImg from '../assets/muscles/placeholder.png';
import rhomboidMinorImg from '../assets/muscles/placeholder.png';
import deltoidImg from '../assets/muscles/deltoid.png';
import teresMajorImg from '../assets/muscles/teres-major.png';
import supraspinatusImg from '../assets/muscles/supraspinatus.png';
import infraspinatusImg from '../assets/muscles/infraspinatus.png';
import teresMinorImg from '../assets/muscles/teres-minor.png';
import subscapularisImg from '../assets/muscles/subscapularis.png';
import bicepsBrachiiImg from '../assets/muscles/biceps-brachii.png';
import brachialisImg from '../assets/muscles/brachialis.png';
import coracobrachialisImg from '../assets/muscles/coracobrachialis.png';
import tricepsBrachiiImg from '../assets/muscles/triceps-brachii.png';
import anconeusImg from '../assets/muscles/anconeus.png';
import pronatorTeresImg from '../assets/muscles/pronator-teres.png';
import fcrImg from '../assets/muscles/flexor-carpi-radialis.png';
import palmarisLongusImg from '../assets/muscles/palmaris-longus.png';
import fcuImg from '../assets/muscles/flexor-carpi-ulnaris.png';
import fdsImg from '../assets/muscles/flexor-digitorum-superficialis.png';
import fdpImg from '../assets/muscles/flexor-digitorum-profundus.png';
import fplImg from '../assets/muscles/flexor-pollicis-longus.png';
import brachioradialisImg from '../assets/muscles/brachioradialis.png';
import ecrlImg from '../assets/muscles/extensor-carpi-radialis-longus.png';
import extensorDigitorumImg from '../assets/muscles/extensor-digitorum.png';
import supinatorImg from '../assets/muscles/supinator.png';
import musclePlaceholderImg from '../assets/muscles/placeholder.png';
import thenarImg from '../assets/muscles/thenar-muscles.png';
import hypothenarImg from '../assets/muscles/hypothenar-muscles.png';
import lumbricalsImg from '../assets/muscles/lumbricals.png';
import interosseiImg from '../assets/muscles/interossei.png';
import adductorPollicisImg from '../assets/muscles/adductor-pollicis.png';
import gluteusMaximusImg from '../assets/muscles/gluteus-maximus.png';
import gluteusMediusImg from '../assets/muscles/gluteus-medius.png';
import piriformisImg from '../assets/muscles/piriformis.png';
import rectusFemorisImg from '../assets/muscles/rectus-femoris.png';
import sartoriusImg from '../assets/muscles/sartorius.png';
import bicepsFemorisImg from '../assets/muscles/biceps-femoris.png';
import adductorMagnusImg from '../assets/muscles/adductor-magnus.png';
import tibialisAnteriorImg from '../assets/muscles/tibialis-anterior.png';
import gastrocnemiusImg from '../assets/muscles/gastrocnemius.png';
import fibularisLongusImg from '../assets/muscles/fibularis-longus.png';


export const muscles = [
    // 0. Head & Face
    // Facial Expression (CN VII)
    {
        id: 'occipitofrontalis',
        name: 'Occipitofrontalis',
        origin: 'Epicranial Aponeurosis.',
        insertion: 'Skin of forehead and eyebrows.',
        nerve: 'Facial Nerve (CN VII).',
        action: 'Elevates eyebrows, wrinkles forehead.',
        clinicalNotes: 'Frontal belly surprises, Occipital belly retracts scalp.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Facial Expression)'
    },
    {
        id: 'orbicularis-oculi',
        name: 'Orbicularis Oculi',
        origin: 'Medial orbital margin.',
        insertion: 'Skin around orbit.',
        nerve: 'Facial Nerve (CN VII).',
        action: 'Closes eyelids (Palpebral: gently; Orbital: tightly).',
        clinicalNotes: 'Loss of function risks corneal abrasion (cannot close eye).',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Facial Expression)'
    },
    {
        id: 'nasalis',
        name: 'Nasalis',
        origin: 'Maxilla.',
        insertion: 'Nasal bone/cartilage.',
        nerve: 'Facial Nerve (CN VII).',
        action: 'Flares nostrils (Alar part), Compresses nasal aperture (Transverse part).',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Facial Expression)'
    },
    {
        id: 'levator-labii-superioris',
        name: 'Levator Labii Superioris',
        origin: 'Maxilla/Zygomatic bone.',
        insertion: 'Upper lip.',
        nerve: 'Facial Nerve (CN VII).',
        action: 'Elevates upper lip, flares nostril.',
        clinicalNotes: '"Snarl" muscle.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Facial Expression)'
    },
    {
        id: 'orbicularis-oris',
        name: 'Orbicularis Oris',
        origin: 'Maxilla and Mandible.',
        insertion: 'Skin associated with lips.',
        nerve: 'Facial Nerve (CN VII).',
        action: 'Compresses/Protrudes lips (Kissing/Whistling).',
        clinicalNotes: 'First sphincter of the GI tract.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Facial Expression)'
    },
    {
        id: 'mentalis',
        name: 'Mentalis',
        origin: 'Mandible (incisive fossa).',
        insertion: 'Skin of chin.',
        nerve: 'Facial Nerve (CN VII).',
        action: 'Elevates/Protrudes lower lip (Pouting).',
        clinicalNotes: '"Pouting muscle".',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Facial Expression)'
    },
    {
        id: 'buccinator',
        name: 'Buccinator',
        origin: 'Mandible/Maxilla alveolar processes.',
        insertion: 'Orbicularis Oris.',
        nerve: 'Facial Nerve (CN VII).',
        action: 'Presses cheek against teeth (blowing/sucking). Keeps food on occlusal surface.',
        clinicalNotes: 'Pierced by Parotid Duct.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Facial Expression)'
    },

    // Mastication (CN V3)
    {
        id: 'temporalis',
        name: 'Temporalis',
        origin: 'Temporal fossa.',
        insertion: 'Coronoid process of Mandible.',
        nerve: 'Trigeminal Nerve (V3 - Mandibular).',
        action: 'Elevates mandible (close jaw); Retracts mandible (posterior fibers).',
        clinicalNotes: 'Palpate when clenching teeth.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Mastication)'
    },
    {
        id: 'masseter',
        name: 'Masseter',
        origin: 'Zygomatic Arch.',
        insertion: 'Ramus/Angle of Mandible.',
        nerve: 'Trigeminal Nerve (V3 - Mandibular).',
        action: 'Elevates mandible; Protrudes mandible.',
        clinicalNotes: 'Strongest muscle of mastication.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Mastication)'
    },
    {
        id: 'medial-pterygoid',
        name: 'Medial Pterygoid',
        origin: 'Pterygoid plate (Sphenoid).',
        insertion: 'Medial surface of Mandibular Angle.',
        nerve: 'Trigeminal Nerve (V3 - Mandibular).',
        action: 'Elevates mandible; Protrusion; Contralateral lateral deviation.',
        clinicalNotes: 'Forms "sling" with Masseter.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Mastication)'
    },
    {
        id: 'lateral-pterygoid',
        name: 'Lateral Pterygoid',
        origin: 'Pterygoid plate/Greater Wing (Sphenoid).',
        insertion: 'Condyle of Mandible (Neck) & TMJ Disc.',
        nerve: 'Trigeminal Nerve (V3 - Mandibular).',
        action: 'Protrusion; Depression (Opening); Contralateral lateral deviation.',
        clinicalNotes: 'Only muscle of mastication that OPENS the mouth. Inserts into TMJ disc.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Mastication)'
    },

    // Eye Muscles (CN III, IV, VI)
    {
        id: 'superior-rectus',
        name: 'Superior Rectus',
        origin: 'Common Tendinous Ring.',
        insertion: 'Superior Sclera.',
        nerve: 'Oculomotor (CN III).',
        action: 'Elevation, Adduction.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Eye)'
    },
    {
        id: 'inferior-rectus',
        name: 'Inferior Rectus',
        origin: 'Common Tendinous Ring.',
        insertion: 'Inferior Sclera.',
        nerve: 'Oculomotor (CN III).',
        action: 'Depression, Adduction.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Eye)'
    },
    {
        id: 'medial-rectus',
        name: 'Medial Rectus',
        origin: 'Common Tendinous Ring.',
        insertion: 'Medial Sclera.',
        nerve: 'Oculomotor (CN III).',
        action: 'Adduction.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Eye)'
    },
    {
        id: 'lateral-rectus',
        name: 'Lateral Rectus',
        origin: 'Common Tendinous Ring.',
        insertion: 'Lateral Sclera.',
        nerve: 'Abducens (CN VI).',
        action: 'Abduction.',
        clinicalNotes: 'LR6 (Lateral Rectus supplied by CN 6).',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Eye)'
    },
    {
        id: 'superior-oblique',
        name: 'Superior Oblique',
        origin: 'Sphenoid bone.',
        insertion: 'Sclera (via Trochlea).',
        nerve: 'Trochlear (CN IV).',
        action: 'Depression, Abduction, Intorsion.',
        clinicalNotes: 'SO4 (Superior Oblique supplied by CN 4). "Down and Out" action.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Eye)'
    },
    {
        id: 'inferior-oblique',
        name: 'Inferior Oblique',
        origin: 'Orbital floor (maxilla).',
        insertion: 'Lateral Sclera.',
        nerve: 'Oculomotor (CN III).',
        action: 'Elevation, Abduction, Extorsion.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Eye)'
    },
    {
        id: 'levator-palpebrae',
        name: 'Levator Palpebrae Superioris',
        origin: 'Sphenoid (Lesser Wing).',
        insertion: 'Superior Tarsal Plate/Skin of eyelid.',
        nerve: 'Oculomotor (CN III).',
        action: 'Elevates upper eyelid.',
        clinicalNotes: 'Ptosis if damaged.',
        imageUrl: musclePlaceholderImg,
        category: 'Head (Eye)'
    },

    // 7. Pelvis & Perineum
    {
        id: 'obturator-internus',
        name: 'Obturator Internus',
        origin: 'Pelvic surface of Ilium, Ischium, & Obturator membrane.',
        insertion: 'Greater Trochanter of Femur (medial surface).',
        nerve: 'Nerve to Obturator Internus (L5, S1, S2).',
        action: 'External Rotation of extended thigh; Abduction of flexed thigh.',
        clinicalNotes: 'Leaves pelvis via Lesser Sciatic Foramen. Supported by Gemelli muscles.',
        imageUrl: musclePlaceholderImg,
        category: 'Pelvis & Perineum'
    },
    {
        id: 'piriformis',
        name: 'Piriformis',
        origin: 'Anterior Sacrum, Sacrotuberous Ligament.',
        insertion: 'Superior Border of Greater Trochanter.',
        nerve: 'Nerve to Piriformis (L5, S1, S2).',
        action: 'ER extended thigh, Abducts flexed thigh. Steadies femoral head.',
        clinicalNotes: 'Key landmark: Superior Gluteal N/A exit superior layout; Sciatic/Inf Gluteal exit inferiorly. Piriformis Syndrome.',
        imageUrl: piriformisImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'levator-ani',
        name: 'Levator Ani Group',
        origin: 'Body of Pubis, Obturator Fascia (Tendinous Arch), Ischial Spine.',
        insertion: 'Perineal body, Coccyx, Anococcygeal ligament, Walls of prostate/vagina, Rectum.',
        nerve: 'Nerve to Levator Ani (S3-S4); Inferior Rectal/Perineal branches (pudendal).',
        action: 'Supports pelvic viscera; Resists intra-abdominal pressure; Controls urination/defecation.',
        clinicalNotes: 'Includes: Pubococcygeus, Puborectalis ("slings" rectum), Iliococcygeus. Weakness = Prolapse/Incontinence.',
        imageUrl: musclePlaceholderImg,
        category: 'Pelvis & Perineum'
    },
    {
        id: 'coccygeus',
        name: 'Coccygeus (Ischiococcygeus)',
        origin: 'Ischial Spine.',
        insertion: 'Inferior sacrum and Coccyx.',
        nerve: 'Branches of S4-S5.',
        action: 'Supports pelvic viscera; Flexes Coccyx.',
        clinicalNotes: 'Posterior part of Pelvic Diaphragm.',
        imageUrl: musclePlaceholderImg,
        category: 'Pelvis & Perineum'
    },

    // 1. Pectoral Region
    {
        id: 'pectoralis-major',
        name: 'Pectoralis Major',
        origin: 'Clavicular head: med 1/2 clavicle. Sternocostal: sternum, sup 6 costal cartilages.',
        insertion: 'Lat lip intertubercular groove.',
        nerve: 'Lat & Med Pectoral (C5-T1).',
        action: 'Add, IR, Flex (clavicular), Ext (sternocostal).',
        clinicalNotes: 'Test clavicular vs sternal heads separately.',
        imageUrl: pectoralisMajorImg,
        category: 'Pectoral Region'
    },
    {
        id: 'pectoralis-minor',
        name: 'Pectoralis Minor',
        origin: 'Ribs 3-5.',
        insertion: 'Coracoid process.',
        nerve: 'Med Pectoral (C8-T1).',
        action: 'Stabilize scapula (inf/ant).',
        clinicalNotes: 'Landmark for axillary artery parts.',
        imageUrl: pectoralisMinorImg,
        category: 'Pectoral Region'
    },
    {
        id: 'subclavius',
        name: 'Subclavius',
        origin: '1st rib/cartilage.',
        insertion: 'Inf surface mid 1/3 clavicle.',
        nerve: 'N. to Subclavius (C5-C6).',
        action: 'Anchor/depress clavicle.',
        clinicalNotes: 'Protects vessels if clavicle breaks.',
        imageUrl: subclaviusImg,
        category: 'Pectoral Region'
    },
    {
        id: 'serratus-anterior',
        name: 'Serratus Anterior',
        origin: 'Ribs 1-8.',
        insertion: 'Medial border scapula (ant surface).',
        nerve: 'Long Thoracic (C5-C7).',
        action: 'Protract, Rotate scapula (up).',
        clinicalNotes: 'Winging of scapula.',
        imageUrl: serratusAnteriorImg,
        category: 'Pectoral Region'
    },

    // 2. Superficial Back
    {
        id: 'trapezius',
        name: 'Trapezius',
        origin: 'Occipital, Nuchal lig, C7-T12 SPs.',
        insertion: 'Lat 1/3 clavicle, acromion, scapular spine.',
        nerve: 'CN XI (Accessory).',
        action: 'Elevate, Retract, Depress, Rotate scapula (up).',
        clinicalNotes: 'Test strength by shrugging.',
        imageUrl: trapeziusImg,
        category: 'Superficial Back'
    },
    {
        id: 'latissimus-dorsi',
        name: 'Latissimus Dorsi',
        origin: 'T7-T12 SPs, Iliac crest, Ribs 9-12.',
        insertion: 'Floor intertubercular groove.',
        nerve: 'Thoracodorsal (C6-C8).',
        action: 'Ext, Add, IR humerus (climbing).',
        clinicalNotes: 'Handcuff muscle.',
        imageUrl: latissimusDorsiImg,
        category: 'Superficial Back'
    },
    {
        id: 'levator-scapulae',
        name: 'Levator Scapulae',
        origin: 'C1-C4 TPs.',
        insertion: 'Medial border scapula (sup angle).',
        nerve: 'Dorsal Scapular (C5) & C3-4.',
        action: 'Elevate, Rotate scapula (down).',
        clinicalNotes: 'Stiff neck common.',
        imageUrl: levatorScapulaeImg,
        category: 'Superficial Back'
    },
    {
        id: 'rhomboid-major',
        name: 'Rhomboid Major',
        origin: 'T2-T5 SPs.',
        insertion: 'Medial border scapula (inf to spine).',
        nerve: 'Dorsal Scapular (C4-C5).',
        action: 'Retract, Rotate scapula (down).',
        clinicalNotes: '',
        imageUrl: rhomboidMajorImg,
        category: 'Superficial Back'
    },
    {
        id: 'rhomboid-minor',
        name: 'Rhomboid Minor',
        origin: 'Nuchal lig, C7-T1 SPs.',
        insertion: 'Medial border scapula (spine root).',
        nerve: 'Dorsal Scapular (C4-C5).',
        action: 'Retract, Rotate scapula (down).',
        clinicalNotes: '',
        imageUrl: rhomboidMinorImg,
        category: 'Superficial Back'
    },

    // 3. Shoulder (Scapulohumeral)
    {
        id: 'deltoid',
        name: 'Deltoid',
        origin: 'Lat 1/3 clavicle, Acromion, Scapular spine.',
        insertion: 'Deltoid tuberosity.',
        nerve: 'Axillary (C5-C6).',
        action: 'Abd (after 15 deg), Flex/IR (ant), Ext/ER (post).',
        clinicalNotes: 'Axillary nerve risk in surgical neck fx.',
        imageUrl: deltoidImg,
        category: 'Shoulder'
    },
    {
        id: 'teres-major',
        name: 'Teres Major',
        origin: 'Inf angle scapula (post).',
        insertion: 'Med lip intertubercular groove.',
        nerve: 'Lower Subscapular (C5-C6).',
        action: 'Add, IR humerus.',
        clinicalNotes: 'Lady between two majors.',
        imageUrl: teresMajorImg,
        category: 'Shoulder'
    },
    {
        id: 'supraspinatus',
        name: 'Supraspinatus',
        origin: 'Supraspinous fossa.',
        insertion: 'Greater tubercle (sup).',
        nerve: 'Suprascapular (C4-C6).',
        action: 'Initiate Abd (0-15 deg).',
        clinicalNotes: 'Most common RC tear.',
        imageUrl: supraspinatusImg,
        category: 'Shoulder'
    },
    {
        id: 'infraspinatus',
        name: 'Infraspinatus',
        origin: 'Infraspinous fossa.',
        insertion: 'Greater tubercle (mid).',
        nerve: 'Suprascapular (C5-C6).',
        action: 'ER humerus.',
        clinicalNotes: 'Rotator cuff.',
        imageUrl: infraspinatusImg,
        category: 'Shoulder'
    },
    {
        id: 'teres-minor',
        name: 'Teres Minor',
        origin: 'Lat border scapula (mid).',
        insertion: 'Greater tubercle (inf).',
        nerve: 'Axillary (C5-C6).',
        action: 'ER humerus.',
        clinicalNotes: 'Rotator cuff.',
        imageUrl: teresMinorImg,
        category: 'Shoulder'
    },
    {
        id: 'subscapularis',
        name: 'Subscapularis',
        origin: 'Subscapular fossa.',
        insertion: 'Lesser tubercle.',
        nerve: 'Upper & Lower Subscapular (C5-C7).',
        action: 'IR humerus.',
        clinicalNotes: 'Rotator cuff (only anterior one).',
        imageUrl: subscapularisImg,
        category: 'Shoulder'
    },

    // 4. Arm (Anterior)
    {
        id: 'biceps-brachii',
        name: 'Biceps Brachii',
        origin: 'Short: Coracoid. Long: Supraglenoid tubercle.',
        insertion: 'Radial tuberosity, Bicipital aponeurosis.',
        nerve: 'Musculocutaneous nerve (C5-C7)',
        action: 'Supinates forearm; Flexes elbow; Short head resists dislocation.',
        clinicalNotes: 'Popeye deformity (Long head rupture). Bicipital aponeurosis protects structures in cubital fossa.',
        imageUrl: bicepsBrachiiImg,
        category: 'Arm'
    },
    {
        id: 'brachialis',
        name: 'Brachialis',
        origin: 'Distal 1/2 ant humerus.',
        insertion: 'Coronoid process/Tuberosity of ulna.',
        nerve: 'Musculocutaneous nerve (C5, C6)',
        action: 'Primary elbow flexor (all positions).',
        clinicalNotes: '"Workhorse" of elbow flexion. Floor of cubital fossa.',
        imageUrl: brachialisImg,
        category: 'Arm'
    },
    {
        id: 'coracobrachialis',
        name: 'Coracobrachialis',
        origin: 'Tip of coracoid process.',
        insertion: 'Middle 1/3 medial humerus.',
        nerve: 'Musculocutaneous nerve (C5-C7)',
        action: 'Flexes and Adducts arm; resists dislocation of shoulder.',
        clinicalNotes: 'Musculocutaneous nerve pierces through coracobrachialis.',
        imageUrl: coracobrachialisImg,
        category: 'Arm'
    },

    // 5. Arm (Posterior)
    {
        id: 'triceps-brachii',
        name: 'Triceps Brachii',
        origin: 'Long: Infraglenoid tubercle. Lat: Post humerus (sup). Med: Post humerus (inf).',
        insertion: 'Olecranon process.',
        nerve: 'Radial nerve (C6, C7, C8)',
        action: 'Extends elbow; Long head extends shoulder/resists dislocation.',
        clinicalNotes: 'Radial nerve travels in spiral groove with deep artery.',
        imageUrl: tricepsBrachiiImg,
        category: 'Arm'
    },
    {
        id: 'anconeus',
        name: 'Anconeus',
        origin: 'Lat epicondyle.',
        insertion: 'Lat Olecranon/Post ulna.',
        nerve: 'Radial nerve (C7, C8)',
        action: 'Assists extension; Stabilizes elbow; Abducts Ulna during pronation.',
        clinicalNotes: 'Dynamic stabilizer.',
        imageUrl: anconeusImg,
        category: 'Arm'
    },

    // 6. Forearm & Hand
    {
        id: 'pronator-teres',
        name: 'Pronator Teres',
        origin: 'Medial epicondyle (Humeral head) & Coronoid process of ulna (Ulnar head).',
        insertion: 'Middle of lateral surface of radius.',
        nerve: 'Median nerve (C6, C7)',
        action: 'Pronates forearm; Flexes elbow.',
        clinicalNotes: 'Median nerve passes between the two heads of Pronator Teres. Forms medial border of Cubital Fossa. Pronator Syndrome.',
        imageUrl: pronatorTeresImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-carpi-radialis',
        name: 'Flexor Carpi Radialis',
        origin: 'Medial epicondyle of humerus.',
        insertion: 'Base of 2nd metacarpal.',
        nerve: 'Median nerve (C6, C7)',
        action: 'Flexion and Radial deviation of hand/wrist.',
        clinicalNotes: 'Radial artery lies lateral, Median nerve lies medial to FCR tendon at wrist. Palpate easily w/ flexed wrist.',
        imageUrl: fcrImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'palmaris-longus',
        name: 'Palmaris Longus',
        origin: 'Medial epicondyle of humerus.',
        insertion: 'Palmar aponeurosis & distal half of flexor retinaculum.',
        nerve: 'Median nerve (C7, C8)',
        action: 'Assists with hand/wrist flexion; Tightens palmar aponeurosis.',
        clinicalNotes: 'Absent in 10-20% of population. Median nerve located lateral to tendon at wrist. Tendon passes superficial to flexor retinaculum.',
        imageUrl: palmarisLongusImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-carpi-ulnaris',
        name: 'Flexor Carpi Ulnaris',
        origin: 'Medial epicondyle (Humeral head) & Olecranon/Posterior border of ulna (Ulnar head).',
        insertion: 'Pisiform, Hook of Hamate, Base of 5th metacarpal.',
        nerve: 'Ulnar nerve (C8, T1)',
        action: 'Flexion and Ulnar deviation of hand/wrist.',
        clinicalNotes: 'Ulnar nerve passes between two heads (Cubital Tunnel). Ulnar nerve/artery lateral to FCU tendon at wrist.',
        imageUrl: fcuImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-digitorum-superficialis',
        name: 'Flexor Digitorum Superficialis',
        origin: 'Medial epicondyle, Ulnar collateral lig, Coronoid process (Humeral head); Superior anterior radius (Radial head).',
        insertion: 'Bodies of middle phalanges of digits 2-5.',
        nerve: 'Median nerve (C7, C8, T1)',
        action: 'Flexion of PIP joints; Assists flexion of MCP joints.',
        clinicalNotes: 'Median nerve and Ulnar artery pass between the two heads. Tendons enclosed in carpal tunnel. "Splits" to let FDP pass.',
        imageUrl: fdsImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-digitorum-profundus',
        name: 'Flexor Digitorum Profundus',
        origin: 'Proximal 3/4 of medial/anterior ulna & interosseous membrane.',
        insertion: 'Bases of distal phalanges of medial four digits.',
        nerve: 'Medial part: Ulnar (C8, T1). Lateral part: AIN of Median (C8, T1).',
        action: 'Flexes DIP joints; Assists wrist flexion ("curls fingers").',
        clinicalNotes: 'Tendons pass deep to FDS. Jersey Finger.',
        imageUrl: fdpImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-pollicis-longus',
        name: 'Flexor Pollicis Longus',
        origin: 'Anterior surface of radius & adjacent interosseous membrane.',
        insertion: 'Base of distal phalanx of thumb.',
        nerve: 'AIN branch of Median nerve (C8, T1)',
        action: 'Flexes IP joint of thumb; Assists MCP flexion.',
        clinicalNotes: 'MMT: Stabilize proximal phalanx to test.',
        imageUrl: fplImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'pronator-quadratus',
        name: 'Pronator Quadratus',
        origin: 'Distal 1/4 of ulna.',
        insertion: 'Distal 1/4 of radius.',
        nerve: 'AIN branch of Median nerve (C8, T1)',
        action: 'Pronates forearm; Stabilizes distal radioulnar joint.',
        clinicalNotes: 'Deepest muscle. Cannot be palpated. Test with elbow flexed to isolate from Teres.',
        imageUrl: musclePlaceholderImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'brachioradialis',
        name: 'Brachioradialis',
        origin: 'Proximal 2/3 of lateral supracondylar ridge of humerus.',
        insertion: 'Lateral surface of distal radius.',
        nerve: 'Radial nerve (C5, C6)',
        action: 'Flexes elbow/forearm (neutral position).',
        clinicalNotes: 'Exception: Posterior muscle that acts as flexor. Lateral border of Cubital Fossa.',
        imageUrl: brachioradialisImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-carpi-radialis-longus',
        name: 'Extensor Carpi Radialis Longus',
        origin: 'Lateral supracondylar ridge of humerus.',
        insertion: 'Base of 2nd metacarpal.',
        nerve: 'Radial nerve (C6, C7, C8)',
        action: 'Extension & Radial deviation of wrist/hand.',
        clinicalNotes: 'Tendon travels deep to "outcropping" muscles.',
        imageUrl: ecrlImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-carpi-radialis-brevis',
        name: 'Extensor Carpi Radialis Brevis',
        origin: 'Lateral epicondyle of humerus.',
        insertion: 'Base of 3rd metacarpal.',
        nerve: 'Deep Branch of Radial nerve (C6, C7, C8)',
        action: 'Extension & Radial deviation of wrist/hand.',
        clinicalNotes: 'Tennis Elbow (Lateral Epicondylitis) common site.',
        imageUrl: musclePlaceholderImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-digitorum',
        name: 'Extensor Digitorum',
        origin: 'Lateral epicondyle of humerus.',
        insertion: 'Extensor expansions of digits 2-5.',
        nerve: 'PIN (Posterior Interosseous branch) of Radial nerve (C6, C7, C8)',
        action: 'Extension of digits 2-5 (MCP & IP); Assists wrist extension.',
        clinicalNotes: 'Common Extensor Tendon connection.',
        imageUrl: extensorDigitorumImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-digiti-minimi',
        name: 'Extensor Digiti Minimi',
        origin: 'Lateral epicondyle of humerus.',
        insertion: 'Extensor expansion of 5th digit.',
        nerve: 'PIN (Posterior Interosseous branch) of Radial nerve (C6, C7, C8)',
        action: 'Extension of 5th digit (MCP & IP).',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-carpi-ulnaris',
        name: 'Extensor Carpi Ulnaris',
        origin: 'Lateral epicondyle & Posterior border of ulna.',
        insertion: 'Base of 5th metacarpal.',
        nerve: 'PIN (Posterior Interosseous branch) of Radial nerve (C6, C7, C8)',
        action: 'Extension & Ulnar deviation of wrist/hand.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'supinator',
        name: 'Supinator',
        origin: 'Lateral epicondyle, Radial collateral lig, Annular lig, Ulna crest.',
        insertion: 'Proximal 1/3 Radius (Posterolateral & Anterior surface).',
        nerve: 'Deep Branch of Radial nerve (C5, C6)',
        action: 'Supinates forearm.',
        clinicalNotes: 'Deep branch of Radial nerve passes through Supinator -> becomes PIN.',
        imageUrl: supinatorImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-indicis',
        name: 'Extensor Indicis',
        origin: 'Posterior surface of ulna & interosseous membrane.',
        insertion: 'Extensor expansion of 2nd digit.',
        nerve: 'PIN (Radial) (C6, C7, C8)',
        action: 'Extension of 2nd digit.',
        clinicalNotes: 'Deep muscle.',
        imageUrl: musclePlaceholderImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'abductor-pollicis-longus',
        name: 'Abductor Pollicis Longus',
        origin: 'Posterior surfaces of Ulna, Radius, Interosseous membrane.',
        insertion: 'Base of 1st metacarpal.',
        nerve: 'PIN (Radial) (C6, C7, C8)',
        action: 'Abducts & Extends thumb (CMC).',
        clinicalNotes: 'Outcropping muscle.',
        imageUrl: musclePlaceholderImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-pollicis-brevis',
        name: 'Extensor Pollicis Brevis',
        origin: 'Posterior Radius & Interosseous membrane.',
        insertion: 'Base of proximal phalanx of 1st digit.',
        nerve: 'PIN (Radial) (C6, C7, C8)',
        action: 'Extends MCP joint of thumb; Extends CMC.',
        clinicalNotes: 'Outcropping muscle.',
        imageUrl: musclePlaceholderImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-pollicis-longus',
        name: 'Extensor Pollicis Longus',
        origin: 'Posterior middle 1/3 of Ulna & Interosseous membrane.',
        insertion: 'Base of distal phalanx of 1st digit.',
        nerve: 'PIN (Radial) (C6, C7, C8)',
        action: 'Extends IP joint of thumb; Extends MCP & CMC.',
        clinicalNotes: 'Outcropping muscle. " Anatomical Snuffbox" medial border.',
        imageUrl: musclePlaceholderImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'thenar-muscles',
        name: 'Thenar Group',
        origin: 'Carpals (Scaphoid, Trapezium) & Flexor Retinaculum.',
        insertion: 'Thumb (Proximal Phalanx/Metacarpal).',
        nerve: 'Median nerve (Recurrent Branch) (C8, T1)',
        action: 'APB: Abducts; FPB: Flexes; OP: Opposes thumb.',
        clinicalNotes: 'Ape Hand deformity (Median n. injury). FPB deep head often Ulnar innervated.',
        imageUrl: thenarImg,
        category: 'Hand'
    },
    {
        id: 'abductor-pollicis-brevis',
        name: 'Abductor Pollicis Brevis',
        origin: 'Flexor retinaculum, Scaphoid, Trapezium.',
        insertion: 'Base of proximal phalanx of thumb.',
        nerve: 'Median nerve (Recurrent Branch) (C8, T1)',
        action: 'Abducts thumb; Assists opposition.',
        clinicalNotes: 'Part of Thenar Eminence.',
        imageUrl: musclePlaceholderImg,
        category: 'Hand'
    },
    {
        id: 'flexor-pollicis-brevis',
        name: 'Flexor Pollicis Brevis',
        origin: 'Flexor retinaculum & Trapezium.',
        insertion: 'Base of proximal phalanx of thumb.',
        nerve: 'Median nerve (Recurrent Branch). Deep head: Ulnar nerve.',
        action: 'Flexes thumb (MCP).',
        clinicalNotes: 'Dual innervation common.',
        imageUrl: musclePlaceholderImg,
        category: 'Hand'
    },
    {
        id: 'opponens-pollicis',
        name: 'Opponens Pollicis',
        origin: 'Flexor retinaculum & Trapezium.',
        insertion: 'Lateral side of 1st Metacarpal.',
        nerve: 'Median nerve (Recurrent Branch) (C8, T1)',
        action: 'Opposes thumb (Rotates MC medially).',
        clinicalNotes: 'Deep to APB.',
        imageUrl: musclePlaceholderImg,
        category: 'Hand'
    },
    {
        id: 'hypothenar-muscles',
        name: 'Hypothenar Group',
        origin: 'Carpals (Pisiform, Hamate) & Flexor Retinaculum.',
        insertion: '5th Digit.',
        nerve: 'Ulnar nerve (Deep Branch) (C8, T1)',
        action: 'ADM: Abducts; FDMB: Flexes; ODM: Opposes 5th digit.',
        clinicalNotes: 'Hypothenar Eminence. Palmaris Brevis overlies this region (skin wrinkler).',
        imageUrl: hypothenarImg,
        category: 'Hand'
    },
    {
        id: 'abductor-digiti-minimi',
        name: 'Abductor Digiti Minimi',
        origin: 'Pisiform.',
        insertion: 'Base of proximal phalanx of 5th digit.',
        nerve: 'Ulnar nerve (C8, T1)',
        action: 'Abducts 5th digit.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Hand'
    },
    {
        id: 'flexor-digiti-minimi-brevis',
        name: 'Flexor Digiti Minimi Brevis',
        origin: 'Hook of Hamate & Flexor Retinaculum.',
        insertion: 'Base of proximal phalanx of 5th digit.',
        nerve: 'Ulnar nerve (C8, T1)',
        action: 'Flexes 5th digit (MCP).',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Hand'
    },
    {
        id: 'opponens-digiti-minimi',
        name: 'Opponens Digiti Minimi',
        origin: 'Hook of Hamate & Flexor Retinaculum.',
        insertion: 'Medial border of 5th Metacarpal.',
        nerve: 'Ulnar nerve (C8, T1)',
        action: 'Opposes 5th digit.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Hand'
    },
    {
        id: 'palmaris-brevis',
        name: 'Palmaris Brevis',
        origin: 'Flexor Retinaculum / Palmar Aponeurosis.',
        insertion: 'Skin of medial palm.',
        nerve: 'Ulnar nerve (Superficial Branch).',
        action: 'Wrinkles skin of hypothenar eminence; Deepens palmar hollow.',
        clinicalNotes: 'Subcutaneous muscle. NOT in hypothenar compartment.',
        imageUrl: musclePlaceholderImg,
        category: 'Hand'
    },
    {
        id: 'lumbricals',
        name: 'Lumbricals',
        origin: 'Tendons of FDP.',
        insertion: 'Lateral bands of Extensor Expansions (digits 2-5).',
        nerve: '1 & 2: Median nerve. 3 & 4: Ulnar nerve.',
        action: 'Flex MCP joints; Extend IP joints.',
        clinicalNotes: 'Intrinsic Plus position (Tabletop). 1/2 Unipennate, 3/4 Bipennate.',
        imageUrl: lumbricalsImg,
        category: 'Hand'
    },
    {
        id: 'interossei',
        name: 'Interossei (Dorsal & Palmar)',
        origin: 'Metacarpals.',
        insertion: 'Proximal phalanges & Extensor Expansions.',
        nerve: 'Ulnar nerve (Deep Branch) (C8, T1)',
        action: 'DAB: Dorsal Abduct; PAD: Palmar Adduct.',
        clinicalNotes: '4 Dorsal, 3 Palmar. Fine finger movements.',
        imageUrl: interosseiImg,
        category: 'Hand'
    },
    {
        id: 'adductor-pollicis',
        name: 'Adductor Pollicis',
        origin: 'Oblique head: Capitate/2-3 MC bases. Transverse head: 3rd MC shaft.',
        insertion: 'Base of proximal phalanx of thumb.',
        nerve: 'Ulnar nerve (Deep Branch) (C8, T1)',
        action: 'Adducts thumb toward midline of hand.',
        clinicalNotes: 'Froment\'s Sign (tests Ulnar n. via Adductor Pollicis vs FPL).',
        imageUrl: adductorPollicisImg,
        category: 'Hand'
    },

    // 7. Lower Limb (Preserved)
    {
        id: 'gluteus-maximus',
        name: 'Gluteus Maximus',
        origin: 'Ilium posterior to posterior gluteal line, dorsal sacrum/coccyx, sacrotuberous ligament.',
        insertion: 'Iliotibial Tract (primary), Gluteal Tuberosity of Femur.',
        nerve: 'Inferior Gluteal (L5, S1, S2).',
        action: 'Extends thigh (esp. from flexion), Lateral Rotation, Abduction (sup), Adduction (inf). Steadies thigh for standing.',
        clinicalNotes: 'Sit to stand muscle. Bursae: Trochanteric, Ischial, Gluteofemoral.',
        imageUrl: gluteusMaximusImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'gluteus-medius',
        name: 'Gluteus Medius',
        origin: 'External Ilium between Anterior and Posterior Gluteal Lines.',
        insertion: 'Lateral surface of Greater Trochanter.',
        nerve: 'Superior Gluteal (L4, L5, S1).',
        action: 'Abducts & Medially Rotates thigh. Pelvic stability (prevents Trendelenburg).',
        clinicalNotes: 'Trendelenburg Sign: Pelvis drops on contralateral side when standing on one leg.',
        imageUrl: gluteusMediusImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'gluteus-minimus',
        name: 'Gluteus Minimus',
        origin: 'External Ilium between Anterior and Inferior Gluteal Lines.',
        insertion: 'Anterior surface of Greater Trochanter.',
        nerve: 'Superior Gluteal (L4, L5, S1).',
        action: 'Abducts & Medially Rotates thigh. Pelvic stability.',
        clinicalNotes: 'Deep to Medius. Works synergistically with it.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Gluteal'
    },

    {
        id: 'rectus-femoris',
        name: 'Rectus Femoris',
        origin: 'Direct Head: AIIS. Reflected Head: Ilium superior to acetabulum.',
        insertion: 'Base of patella -> Tibial Tuberosity (via Patellar Ligament).',
        nerve: 'Femoral (L2, L3, L4).',
        action: 'Extends knee; Flexes hip.',
        clinicalNotes: 'Only Quad muscle that crosses the hip. "Kicking muscle".',
        imageUrl: rectusFemorisImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'sartorius',
        name: 'Sartorius',
        origin: 'ASIS & superior part of notch inferior to it.',
        insertion: 'Superior part of medial surface of tibia (Pes Anserine).',
        nerve: 'Femoral (L2, L3).',
        action: 'Flexes, Abducts, ER thigh; Flexes knee.',
        clinicalNotes: 'Longest muscle in body. "Tailor\'s muscle" (cross-legged sitting). SGT FOT (Sartorius, Gracilis, SemiT).',
        imageUrl: sartoriusImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'biceps-femoris',
        name: 'Biceps Femoris',
        origin: 'Long Head: Ischial Tuberosity. Short Head: Linea Aspera/Lat Supracondylar Line.',
        insertion: 'Head of Fibula (tendon split by LCL).',
        nerve: 'Long Head: Tibial (L5-S3). Short Head: Common Fibular (L5-S2).',
        action: 'Flexes knee, Laterally Rotates leg (flexed knee). Long Head extends hip.',
        clinicalNotes: 'Short head is the only hamstring part not innervated by Tibial nerve and does not cross hip.',
        imageUrl: bicepsFemorisImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'adductor-magnus',
        name: 'Adductor Magnus',
        origin: 'Adductor part: Inf pubic ramus, Ischial ramus. Hamstring part: Ischial Tuberosity.',
        insertion: 'Adductor part: Gluteal tuberosity, Linea Aspera, Medial Supracondylar line. Hamstring part: Adductor Tubercle.',
        nerve: 'Adductor part: Obturator (Post Div L2-L4). Hamstring part: Tibial (L4, L5).',
        action: 'Adducts thigh. Adductor part: Flexes thigh. Hamstring part: Extends thigh.',
        clinicalNotes: 'Adductor Hiatus allows femoral vessels to pass through to popliteal fossa.',
        imageUrl: adductorMagnusImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'iliopsoas',
        name: 'Iliopsoas',
        origin: 'Psoas Major: T12-L5 vertebrae/discs. Iliacus: Iliac Fossa/Crest/Sacrum.',
        insertion: 'Lesser Trochanter of Femur.',
        nerve: 'Femoral (L2-L4) for Iliacus; Ventral Rami (L1-L3) for Psoas.',
        action: 'Chief Flexor of thigh at hip. Postural stabilizer.',
        clinicalNotes: 'Psoas abscess can track down to inguinal region. Psoas Minor (absent in 40%) attaches to Pectineal Line.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'vastus-lateralis',
        name: 'Vastus Lateralis',
        origin: 'Greater Trochanter, Lateral lip of Linea Aspera.',
        insertion: 'Base of Patella -> Tibial Tuberosity.',
        nerve: 'Femoral (L2, L3, L4).',
        action: 'Extends knee.',
        clinicalNotes: 'Largest component of Quadriceps.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'vastus-medialis',
        name: 'Vastus Medialis',
        origin: 'Intertrochanteric line, Medial lip of Linea Aspera.',
        insertion: 'Base of Patella -> Tibial Tuberosity.',
        nerve: 'Femoral (L2, L3, L4).',
        action: 'Extends knee.',
        clinicalNotes: 'VMO (Vastus Medialis Obliquus) fibers help prevent lateral patellar tracking.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'semitendinosus',
        name: 'Semitendinosus',
        origin: 'Ischial Tuberosity.',
        insertion: 'Medial surface of Superior Tibia (Pes Anserine).',
        nerve: 'Tibial (L5, S1, S2).',
        action: 'Extends thigh; Flexes leg & Medially Rotates leg (flexed knee).',
        clinicalNotes: 'Part of Pes Anserine (S-G-T).',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'semimembranosus',
        name: 'Semimembranosus',
        origin: 'Ischial Tuberosity.',
        insertion: 'Posterior Medial Tibial Condyle (Oblique Popliteal Ligament).',
        nerve: 'Tibial (L5, S1, S2).',
        action: 'Extends thigh; Flexes leg & Medially Rotates leg (flexed knee).',
        clinicalNotes: 'Deep to Semitendinosus. Membrane-like tendon.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'tibialis-anterior',
        name: 'Tibialis Anterior',
        origin: 'Lat Tibia.',
        insertion: 'Med Cuneiform/1st Met.',
        nerve: 'Deep Fibular.',
        action: 'DF/Inv.',
        clinicalNotes: 'Foot drop.',
        imageUrl: tibialisAnteriorImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'gastrocnemius',
        name: 'Gastrocnemius',
        origin: 'Femur condyles.',
        insertion: 'Calcaneus.',
        nerve: 'Tibial.',
        action: 'PF/Knee flex.',
        clinicalNotes: '',
        imageUrl: gastrocnemiusImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'soleus',
        name: 'Soleus',
        origin: 'Tibia/Fibula.',
        insertion: 'Calcaneus.',
        nerve: 'Tibial.',
        action: 'PF.',
        clinicalNotes: 'Postural.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'fibularis-longus',
        name: 'Fibularis Longus',
        origin: 'Fibula.',
        insertion: '1st Met/Cuneiform.',
        nerve: 'Sup Fibular.',
        action: 'Ev/PF.',
        clinicalNotes: '',
        imageUrl: fibularisLongusImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'tibialis-posterior',
        name: 'Tibialis Posterior',
        origin: 'Tib/Fib.',
        insertion: 'Navicular/Mets.',
        nerve: 'Tibial.',
        action: 'Inv/PF.',
        clinicalNotes: 'Shin splints.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'erector-spinae',
        name: 'Erector Spinae',
        origin: 'Sacrum/Ilium.',
        insertion: 'Ribs/Vertebrae.',
        nerve: 'Dorsal rami.',
        action: 'Ext/Lat Flex spine.',
        clinicalNotes: 'I Love Spine.',
        imageUrl: musclePlaceholderImg,
        category: 'Back'
    },
    {
        id: 'quadratus-lumborum',
        name: 'Quadratus Lumborum',
        origin: 'Iliac crest.',
        insertion: '12th rib/L1-L4.',
        nerve: 'Ventral rami.',
        action: 'Ext/Lat Flex spine.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Back'
    },
    // New Module 9a Additions
    {
        id: 'vastus-intermedius',
        name: 'Vastus Intermedius',
        origin: 'Anterior and Lateral surfaces of femoral shaft.',
        insertion: 'Base of Patella -> Tibial Tuberosity.',
        nerve: 'Femoral (L2, L3, L4).',
        action: 'Extends knee.',
        clinicalNotes: 'Deep to Rectus Femoris.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'tensor-fasciae-latae',
        name: 'Tensor Fasciae Latae',
        origin: 'ASIS & Anterior Iliac Crest.',
        insertion: 'Iliotibial Tract (to Gerdy\'s Tubercle of Tibia).',
        nerve: 'Superior Gluteal (L4, L5, S1).',
        action: 'Abducts, Medially Rotates, Flexes thigh; Steadies trunk.',
        clinicalNotes: 'Synergist with Iliopsoas/Rectus Fem. Tightness contributes to IT Band Syndrome.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'articularis-genu',
        name: 'Articularis Genu',
        origin: 'Anterior surface of distal femur.',
        insertion: 'Synovial membrane of knee joint.',
        nerve: 'Femoral (L2, L3, L4).',
        action: 'Pulls synovial capsule superiorly during extension to prevent pinching.',
        clinicalNotes: 'Deep to Vastus Intermedius.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'pectineus',
        name: 'Pectineus',
        origin: 'Superior Ramus of Pubis (Pecten Pubis).',
        insertion: 'Pectineal Line of Femur.',
        nerve: 'Femoral (L2-L4); sometimes Acc. Obturator.',
        action: 'Adducts and Flexes thigh; assists Medial Rotation.',
        clinicalNotes: 'Transitional muscle between anterior and medial compartments.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'adductor-longus',
        name: 'Adductor Longus',
        origin: 'Body of Pubis inferior to pubic crest.',
        insertion: 'Middle 1/3 of Linea Aspera.',
        nerve: 'Obturator (Ant Div L2-L4).',
        action: 'Adducts thigh.',
        clinicalNotes: 'Most anterior of the adductor group. Forms medial border of Femoral Triangle.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'adductor-brevis',
        name: 'Adductor Brevis',
        origin: 'Body and Inferior Ramus of Pubis.',
        insertion: 'Pectineal Line and proximal Linea Aspera.',
        nerve: 'Obturator (Ant Div L2-L4).',
        action: 'Adducts thigh; some flexion.',
        clinicalNotes: 'Obturator nerve splits into Anterior/Posterior divisions around this muscle.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'gracilis',
        name: 'Gracilis',
        origin: 'Body and Inferior Ramus of Pubis.',
        insertion: 'Superior Medial Tibia (Pes Anserine).',
        nerve: 'Obturator (Ant Div L2-L4).',
        action: 'Adducts thigh; Flexes and Medially Rotates leg.',
        clinicalNotes: 'Most medial muscle of thigh. "Graceful" muscle. Often used for muscle grafts.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'obturator-externus',
        name: 'Obturator Externus',
        origin: 'Margins of Obturator Foramen & Membrane.',
        insertion: 'Trochanteric Fossa of Femur.',
        nerve: 'Obturator (Post Div L3, L4).',
        action: 'Laterally Rotates thigh; Steadies femoral head.',
        clinicalNotes: 'Deep to Pectineus. Passes inferior to femoral head.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    // Module 9b: Deep Rotators & Others
    {
        id: 'obturator-internus',
        name: 'Obturator Internus',
        origin: 'Pelvic surface of Obturator Membrane & surrounding bones.',
        insertion: 'Medial surface of Greater Trochanter (Trochanteric Fossa).',
        nerve: 'Nerve to Obturator Internus (L5, S1, S2).',
        action: 'ER extended thigh, Abducts flexed thigh. Steadies femoral head.',
        clinicalNotes: 'Exits pelvis via Lesser Sciatic Foramen.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'superior-gemellus',
        name: 'Superior Gemellus',
        origin: 'Ischial Spine.',
        insertion: 'Blends with Obturator Internus tendon to Greater Trochanter.',
        nerve: 'Nerve to Obturator Internus (L5, S1, S2).',
        action: 'ER extended thigh, Abducts flexed thigh. Steadies femoral head.',
        clinicalNotes: 'Triceps Coxae (with Obturator Internus and Inferior Gemellus).',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'inferior-gemellus',
        name: 'Inferior Gemellus',
        origin: 'Ischial Tuberosity.',
        insertion: 'Blends with Obturator Internus tendon to Greater Trochanter.',
        nerve: 'Nerve to Quadratus Femoris (L4, L5, S1).',
        action: 'ER extended thigh, Abducts flexed thigh. Steadies femoral head.',
        clinicalNotes: 'Triceps Coxae.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'quadratus-femoris',
        name: 'Quadratus Femoris',
        origin: 'Lateral border of Ischial Tuberosity.',
        insertion: 'Quadrate Tubercle (Intertrochanteric Crest).',
        nerve: 'Nerve to Quadratus Femoris (L4, L5, S1).',
        action: 'Laterally Rotates thigh; Steadies femoral head.',
        clinicalNotes: 'Short rectangular muscle inferior to Gemelli/Obturator Internus.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Gluteal'
    },
    // Module 10: Popliteal Fossa Muscles
    {
        id: 'popliteus',
        name: 'Popliteus',
        origin: 'Lateral surface of Lateral Condyle of Femur & Lateral Meniscus.',
        insertion: 'Posterior surface of Tibia superior to Soleal Line.',
        nerve: 'Tibial (L4, L5, S1).',
        action: 'Unlocks extended knee (IR tibia open chain, ER femur closed chain). Weak flexion.',
        clinicalNotes: '"Key to the knee". Deep to LCL.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'plantaris',
        name: 'Plantaris',
        origin: 'Lateral Supracondylar Ridge of Femur.',
        insertion: 'Posterior Calcaneus (medial to Achilles tendon).',
        nerve: 'Tibial (L5, S1).',
        action: 'Weak knee flexion, ankle plantarflexion. Proprioception.',
        clinicalNotes: '"Newcomer\'s Muscle". Long tendon used for grafts. Absent in ~10%.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'gastrocnemius',
        name: 'Gastrocnemius',
        origin: 'Medial Head: Posterior Medial Femoral Condyle. Lateral Head: Lateral Femoral Condyle.',
        insertion: 'Calcaneus via Calcaneal (Achilles) Tendon.',
        nerve: 'Tibial (S1, S2).',
        action: 'Plantarflexes foot; Flexes knee.',
        clinicalNotes: 'Crosses two joints. Power muscle for jumping/running. High density of fast-twitch fibers.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'soleus',
        name: 'Soleus',
        origin: 'Posterior Fibular Head, Soleal Line of Tibia, Interosseous Membrane.',
        insertion: 'Calcaneus via Calcaneal (Achilles) Tendon.',
        nerve: 'Tibial (S1, S2).',
        action: 'Plantarflexes ankle (independent of knee position). Steadies leg on foot.',
        clinicalNotes: 'Workhorse of plantarflexion. High density of slow-twitch fibers (postural).',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    // Anterior Compartment
    {
        id: 'tibialis-anterior',
        name: 'Tibialis Anterior',
        origin: 'Lateral Tibial Condyle, Proximal 1/2 Lateral Tibia, Interosseous Membrane.',
        insertion: 'Medial Cuneiform, Base of 1st Metatarsal.',
        nerve: 'Deep Fibular (L4, L5).',
        action: 'Dorsiflexes ankle, Inverts foot.',
        clinicalNotes: 'Common source of Shin Splints. Drop foot if paralyzed.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'extensor-digitorum-longus',
        name: 'Extensor Digitorum Longus',
        origin: 'Lateral Tibial Condyle, Proximal 3/4 Fibula, Interosseous Membrane.',
        insertion: 'Middle/Distal Phalanges of digits 2-5.',
        nerve: 'Deep Fibular (L5, S1).',
        action: 'Extends digits 2-5, Dorsiflexes ankle.',
        clinicalNotes: 'Tendons form extensor expansion on toes.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'extensor-hallucis-longus',
        name: 'Extensor Hallucis Longus',
        origin: 'Middle Anterior Fibula, Interosseous Membrane.',
        insertion: 'Base of Distal Phalanx of Great Toe.',
        nerve: 'Deep Fibular (L5, S1).',
        action: 'Extends Great Toe, Dorsiflexes ankle.',
        clinicalNotes: 'Test L5 nerve root function.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'fibularis-tertius',
        name: 'Fibularis (Peroneus) Tertius',
        origin: 'Distal 1/3 Anterior Fibula.',
        insertion: 'Dorsum of Base of 5th Metatarsal.',
        nerve: 'Deep Fibular (L5, S1).',
        action: 'Dorsiflexes ankle, Everts foot.',
        clinicalNotes: 'Absent in ~10-18% of population.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    // Lateral Compartment
    {
        id: 'fibularis-longus',
        name: 'Fibularis (Peroneus) Longus',
        origin: 'Head and Superior 2/3 Lateral Fibula.',
        insertion: 'Base of 1st Metatarsal, Medial Cuneiform (plantar surface).',
        nerve: 'Superficial Fibular (L5, S1, S2).',
        action: 'Everts foot, Weak Plantarflexion. Supports Transverse Arch.',
        clinicalNotes: 'Tendon travels deep in foot (cuboid groove).',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'fibularis-brevis',
        name: 'Fibularis (Peroneus) Brevis',
        origin: 'Inferior 2/3 Lateral Fibula.',
        insertion: 'Tuberosity of Base of 5th Metatarsal.',
        nerve: 'Superficial Fibular (L5, S1, S2).',
        action: 'Everts foot, Weak Plantarflexion.',
        clinicalNotes: 'Common avulsion fracture site (Jones Fracture/Dancer\'s Fracture mimic).',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    // Deep Posterior Compartment
    {
        id: 'tibialis-posterior',
        name: 'Tibialis Posterior',
        origin: 'Interosseous Membrane, Posterior Tibia/Fibula.',
        insertion: 'Navicular Tuberosity, Cuneiforms, Cuboid, Bases of Mets 2-4.',
        nerve: 'Tibial (L4, L5).',
        action: 'Plantarflexes ankle, Inverts foot. Supports Medial Longitudinal Arch.',
        clinicalNotes: 'Deepest muscle. Tendon passes posterior to Medial Malleolus ("Tom").',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'flexor-digitorum-longus',
        name: 'Flexor Digitorum Longus',
        origin: 'Posterior Tibia inferior to Soleal Line.',
        insertion: 'Bases of Distal Phalanges of digits 2-5.',
        nerve: 'Tibial (S2, S3).',
        action: 'Flexes digits 2-5, Plantarflexes ankle.',
        clinicalNotes: 'Crosses over TP tendon. Passes posterior to MM ("Dick").',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'flexor-hallucis-longus',
        name: 'Flexor Hallucis Longus',
        origin: 'Inferior 2/3 Posterior Fibula.',
        insertion: 'Base of Distal Phalanx of Great Toe.',
        nerve: 'Tibial (L5, S1, S2).',
        action: 'Flexes Great Toe, Weak Plantarflexion.',
        clinicalNotes: 'Powerful "push-off" muscle. Passes posterior to MM ("Harry").',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Leg'
    },
    // Foot: Dorsal Intrinsic
    {
        id: 'extensor-hallucis-brevis',
        name: 'Extensor Hallucis Brevis',
        origin: 'Dorsal Calcaneus.',
        insertion: 'Proximal Phalanx of Great Toe.',
        nerve: 'Deep Fibular (L5, S1).',
        action: 'Extends Proximal Phalanx of Great Toe.',
        clinicalNotes: 'Intrinsic dorsal muscle.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Dorsal)'
    },
    {
        id: 'extensor-digitorum-brevis',
        name: 'Extensor Digitorum Brevis',
        origin: 'Dorsal/Lateral Calcaneus.',
        insertion: 'Tendons of EDL (toes 2-4).',
        nerve: 'Deep Fibular (L4, L5, S1).',
        action: 'Extends Proximal Phalanges of toes 2-4.',
        clinicalNotes: 'Often bruised when objects dropped on foot.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Dorsal)'
    },
    // Foot: Plantar Layer 1
    {
        id: 'abductor-hallucis',
        name: 'Abductor Hallucis',
        origin: 'Medial Tubercle of Calcaneus, Flexor Retinaculum.',
        insertion: 'Medial side of Base of Proximal Phalanx of 1st Digit.',
        nerve: 'Medial Plantar (S2, S3).',
        action: 'Abducts and Flexes Great Toe.',
        clinicalNotes: 'First layer (superficial).',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 1)'
    },
    {
        id: 'flexor-digitorum-brevis',
        name: 'Flexor Digitorum Brevis',
        origin: 'Medial Tubercle of Calcaneus, Plantar Aponeurosis.',
        insertion: 'Middle Phalanges of digits 2-5.',
        nerve: 'Medial Plantar (S2, S3).',
        action: 'Flexes digits 2-5 (PIP and MTP).',
        clinicalNotes: 'Equivalent to FDS in hand.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 1)'
    },
    {
        id: 'abductor-digiti-minimi-foot',
        name: 'Abductor Digiti Minimi (Foot)',
        origin: 'Medial/Lateral Tubercles of Calcaneus.',
        insertion: 'Lateral side of Base of Proximal Phalanx of 5th Digit.',
        nerve: 'Lateral Plantar (S2, S3).',
        action: 'Abducts and Flexes 5th Digit.',
        clinicalNotes: 'Most lateral muscle.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 1)'
    },
    // Foot: Plantar Layer 2
    {
        id: 'quadratus-plantae',
        name: 'Quadratus Plantae',
        origin: 'Medial/Lateral surfaces of Calcaneus.',
        insertion: 'Tendon of FDL.',
        nerve: 'Lateral Plantar (S2, S3).',
        action: 'Assists FDL involution, straightens pull of FDL.',
        clinicalNotes: 'Prevents diagonal pull of FDL.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 2)'
    },
    {
        id: 'lumbricals-foot',
        name: 'Lumbricals (Foot)',
        origin: 'Tendons of FDL.',
        insertion: 'Extensor hoods of lateral 4 digits.',
        nerve: '1st: Medial Plantar. 2-4: Lateral Plantar (S2, S3).',
        action: 'Flex MTP, Extend PIP/DIP.',
        clinicalNotes: '"Bye-bye" muscles.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 2)'
    },
    // Foot: Plantar Layer 3
    {
        id: 'flexor-hallucis-brevis',
        name: 'Flexor Hallucis Brevis',
        origin: 'Cuboid, Lateral Cuneiform.',
        insertion: 'Proximal Phalanx of Great Toe (Both sides via sesamoids).',
        nerve: 'Medial Plantar (S2, S3).',
        action: 'Flexes MTP of Great Toe.',
        clinicalNotes: 'Contains two sesamoids in its tendons.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 3)'
    },
    {
        id: 'adductor-hallucis',
        name: 'Adductor Hallucis',
        origin: 'Oblique: Bases of Mets 2-4. Transverse: Ligaments of MTP joints.',
        insertion: 'Lateral side of Base of Proximal Phalanx of 1st Digit.',
        nerve: 'Lateral Plantar (S2, S3).',
        action: 'Adducts Great Toe.',
        clinicalNotes: 'Maintains Transverse Arch. "7" shape.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 3)'
    },
    {
        id: 'flexor-digiti-minimi-foot',
        name: 'Flexor Digiti Minimi (Foot)',
        origin: 'Base of 5th Metatarsal.',
        insertion: 'Proximal Phalanx of 5th Digit.',
        nerve: 'Lateral Plantar (S2, S3).',
        action: 'Flexes MTP of 5th Digit.',
        clinicalNotes: 'No "Brevis" in name (unlike hand), just FDM.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 3)'
    },
    // Foot: Plantar Layer 4
    {
        id: 'plantar-interossei',
        name: 'Plantar Interossei (3)',
        origin: 'Medial sides of Metatarsals 3-5.',
        insertion: 'Medial sides of Proximal Phalanges 3-5.',
        nerve: 'Lateral Plantar (S2, S3).',
        action: 'Adduct digits 3-5 (PAD).',
        clinicalNotes: '3 muscles.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 4)'
    },
    {
        id: 'dorsal-interossei-foot',
        name: 'Dorsal Interossei (Foot) (4)',
        origin: 'Adjacent sides of Metatarsals 1-5.',
        insertion: 'Proximal Phalanges (2nd digit has 2, others lateral).',
        nerve: 'Lateral Plantar (S2, S3).',
        action: 'Abduct digits 2-4 (DAB).',
        clinicalNotes: '4 muscles. Axis of foot is 2nd digit.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot (Plantar Layer 4)'
    }
];
