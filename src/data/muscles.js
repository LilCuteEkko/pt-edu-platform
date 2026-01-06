import bicepsImg from '../assets/muscles/biceps-brachii.png';
import deltoidImg from '../assets/muscles/deltoid.png';
import rectusFemorisImg from '../assets/muscles/rectus-femoris.png';
import supraspinatusImg from '../assets/muscles/supraspinatus.png';
import infraspinatusImg from '../assets/muscles/infraspinatus.png';
import teresMinorImg from '../assets/muscles/teres-minor.png';
import subscapularisImg from '../assets/muscles/subscapularis.png';
import teresMajorImg from '../assets/muscles/teres-major.png';
import brachialisImg from '../assets/muscles/brachialis.png';
import coracobrachialisImg from '../assets/muscles/coracobrachialis.png';
import tricepsImg from '../assets/muscles/triceps-brachii.png';
import anconeusImg from '../assets/muscles/anconeus.png';
import pronatorTeresImg from '../assets/muscles/pronator-teres.png';
import fcrImg from '../assets/muscles/flexor-carpi-radialis.png';
import palmarisLongusImg from '../assets/muscles/palmaris-longus.png';
import fcuImg from '../assets/muscles/flexor-carpi-ulnaris.png';
import fdsImg from '../assets/muscles/flexor-digitorum-superficialis.png';
import fdpImg from '../assets/muscles/flexor-digitorum-profundus.png';
import fplImg from '../assets/muscles/flexor-pollicis-longus.png';
import pronatorQuadratusImg from '../assets/muscles/pronator-quadratus.png';
import brachioradialisImg from '../assets/muscles/brachioradialis.png';
import ecrlImg from '../assets/muscles/extensor-carpi-radialis-longus.png';
import extensorDigitorumImg from '../assets/muscles/extensor-digitorum.png';
import supinatorImg from '../assets/muscles/supinator.png';
import thenarImg from '../assets/muscles/thenar-muscles.png';
import hypothenarImg from '../assets/muscles/hypothenar-muscles.png';
import lumbricalsImg from '../assets/muscles/lumbricals.png';
import interosseiImg from '../assets/muscles/interossei.png';
import adductorPollicisImg from '../assets/muscles/adductor-pollicis.png';
import gluteusMaximusImg from '../assets/muscles/gluteus-maximus.png';
import gluteusMediusImg from '../assets/muscles/gluteus-medius.png';
import piriformisImg from '../assets/muscles/piriformis.png';
import sartoriusImg from '../assets/muscles/sartorius.png';
import bicepsFemorisImg from '../assets/muscles/biceps-femoris.png';
import adductorMagnusImg from '../assets/muscles/adductor-magnus.png';
import tibialisAnteriorImg from '../assets/muscles/tibialis-anterior.png';
import gastrocnemiusImg from '../assets/muscles/gastrocnemius.png';
import fibularisLongusImg from '../assets/muscles/fibularis-longus.png';
import scmImg from '../assets/muscles/sternocleidomastoid.png';
import scalenesImg from '../assets/muscles/scalenes.png';
import upperTrapImg from '../assets/muscles/upper-trapezius.png';
import levatorImg from '../assets/muscles/levator-scapulae.png';

export const muscles = [
    // 0. Neck
    {
        id: 'sternocleidomastoid',
        name: 'Sternocleidomastoid (SCM)',
        origin: 'Manubrium of sternum (sternal head) and medial clavicle (clavicular head)',
        insertion: 'Mastoid process of temporal bone and superior nuchal line',
        nerve: 'Spinal Accessory Nerve (CN XI)',
        action: 'Bilateral: Flexes neck. Unilateral: Laterally flexes to same side, Rotates to opposite side.',
        clinicalNotes: 'Spasm causes Torticollis (Wry Neck). Prominent trigger point referral pattern causes tension headaches around the eye/ear.',
        imageUrl: scmImg,
        category: 'Neck'
    },
    {
        id: 'scalenes',
        name: 'Scalenes (Ant, Mid, Post)',
        origin: 'Transverse processes of C2-C7 vertebrae',
        insertion: 'First and Second Ribs',
        nerve: 'Cervical Spinal Nerves (C3-C8)',
        action: 'Elevates first two ribs (accessory breathing). Bilateral: Flexes neck. Unilateral: Laterally flexes neck.',
        clinicalNotes: 'Hypertrophy or tightness can compress the Brachial Plexus (Thoracic Outlet Syndrome - TOS), causing arm numbness/tingling.',
        imageUrl: scalenesImg,
        category: 'Neck'
    },
    {
        id: 'upper-trapezius',
        name: 'Upper Trapezius',
        origin: 'External occipital protuberance, nuchal ligament, spinous process of C7',
        insertion: 'Lateral clavicle and acromion process',
        nerve: 'Spinal Accessory Nerve (CN XI)',
        action: 'Elevates and upwardly rotates scapula. Bilateral: Extends neck. Unilateral: Laterally flexes to same side, Rotates to opposite side.',
        clinicalNotes: 'Commonly carries stress/tension. "Upper Trap Dominance" can lead to poor scapular mechanics and impingement.',
        imageUrl: upperTrapImg,
        category: 'Neck'
    },
    {
        id: 'levator-scapulae',
        name: 'Levator Scapulae',
        origin: 'Transverse processes of C1-C4',
        insertion: 'Medial border of scapula (superior angle to spine)',
        nerve: 'Dorsal Scapular Nerve (C5) and C3-C4 roots',
        action: 'Elevates scapula and downwardly rotates glenoid cavity. Unilateral: Laterally flexes neck to same side.',
        clinicalNotes: 'Common site of "stiff neck". Tightness limits cervical rotation and can contribute to outcome scapular downward rotation syndrome.',
        imageUrl: levatorImg,
        category: 'Neck'
    },

    // 1. Shoulder Girdle & Rotator Cuff
    {
        id: 'supraspinatus',
        name: 'Supraspinatus',
        origin: 'Supraspinous fossa of scapula.',
        insertion: 'Superior facet of greater tubercle of humerus.',
        nerve: 'Suprascapular nerve (C5, C6)',
        action: 'Initiates abduction of arm (0–15°); stabilizes GH joint.',
        clinicalNotes: 'Most commonly torn rotator cuff muscle. Assess with the "Empty Can" test.',
        imageUrl: supraspinatusImg,
        category: 'Shoulder'
    },
    {
        id: 'infraspinatus',
        name: 'Infraspinatus',
        origin: 'Infraspinous fossa of scapula.',
        insertion: 'Middle facet of greater tubercle of humerus.',
        nerve: 'Suprascapular nerve (C5, C6)',
        action: 'Lateral rotation of arm; stabilizes GH joint.',
        clinicalNotes: 'Primary external rotator. Weakness may indicate C5-C6 pathology.',
        imageUrl: infraspinatusImg,
        category: 'Shoulder'
    },
    {
        id: 'teres-minor',
        name: 'Teres Minor',
        origin: 'Middle part of lateral border of scapula.',
        insertion: 'Inferior facet of greater tubercle of humerus.',
        nerve: 'Axillary nerve (C5, C6)',
        action: 'Lateral rotation of arm; stabilizes GH joint.',
        clinicalNotes: 'Innervated by the Axillary nerve, unlike the other rotator cuff muscles (Suprascapular/Subscapular).',
        imageUrl: teresMinorImg,
        category: 'Shoulder'
    },
    {
        id: 'subscapularis',
        name: 'Subscapularis',
        origin: 'Subscapular fossa (anterior surface of scapula).',
        insertion: 'Lesser tubercle of humerus.',
        nerve: 'Upper and Lower Subscapular nerves (C5, C6, C7)',
        action: 'Medial rotation of arm; stabilizes GH joint.',
        clinicalNotes: 'The only rotator cuff muscle that internally rotates. Assess with "Lift-Off" test.',
        imageUrl: subscapularisImg,
        category: 'Shoulder'
    },
    {
        id: 'deltoid',
        name: 'Deltoid',
        origin: 'Lateral third of clavicle, acromion, and spine of scapula.',
        insertion: 'Deltoid tuberosity of humerus.',
        nerve: 'Axillary nerve (C5, C6)',
        action: 'Anterior: Flexion/IR. Middle: Abduction. Posterior: Extension/ER.',
        clinicalNotes: 'Paralysis leads to inability to abduct arm past 15°. Common injection site.',
        imageUrl: deltoidImg,
        category: 'Shoulder'
    },
    {
        id: 'teres-major',
        name: 'Teres Major',
        origin: 'Posterior surface of inferior angle of scapula.',
        insertion: 'Medial lip of intertubercular sulcus of humerus.',
        nerve: 'Lower Subscapular nerve (C5, C6)',
        action: 'Adducts and medially rotates arm; extends arm from flexed position.',
        clinicalNotes: 'Often called "Lat\'s little helper" as it shares actions with Latissimus Dorsi.',
        imageUrl: teresMajorImg,
        category: 'Shoulder'
    },

    // 2. Muscles of the Arm (Brachium)
    {
        id: 'biceps-brachii',
        name: 'Biceps Brachii',
        origin: 'Short head: Coracoid process. Long head: Supraglenoid tubercle.',
        insertion: 'Radial tuberosity and bicipital aponeurosis.',
        nerve: 'Musculocutaneous nerve (C5, C6)',
        action: 'Supinates forearm and, when it is supine, flexes forearm; short head resists dislocation of shoulder.',
        clinicalNotes: 'The biceps reflex tests the C5/C6 spinal nerve roots. Rupture of the long head tendon ("Popeye deformity") is common in older adults.',
        imageUrl: bicepsImg,
        category: 'Upper Limb'
    },
    {
        id: 'brachialis',
        name: 'Brachialis',
        origin: 'Distal half of anterior surface of humerus.',
        insertion: 'Coronoid process and tuberosity of ulna.',
        nerve: 'Musculocutaneous nerve (C5, C6)',
        action: 'Primary flexor of the elbow joint (works in all positions).',
        clinicalNotes: 'The "workhorse" of elbow flexion.',
        imageUrl: brachialisImg,
        category: 'Arm'
    },
    {
        id: 'coracobrachialis',
        name: 'Coracobrachialis',
        origin: 'Tip of coracoid process of scapula.',
        insertion: 'Middle third of medial surface of humerus.',
        nerve: 'Musculocutaneous nerve (C5, C6, C7)',
        action: 'Helps flex and adduct arm.',
        clinicalNotes: 'The musculocutaneous nerve pierces this muscle. Coracoid process is the "Lighthouse" for PTs.',
        imageUrl: coracobrachialisImg,
        category: 'Arm'
    },
    {
        id: 'triceps-brachii',
        name: 'Triceps Brachii',
        origin: 'Long: Infraglenoid tubercle. Lateral/Medial: Posterior humerus.',
        insertion: 'Olecranon process of ulna.',
        nerve: 'Radial nerve (C6, C7, C8)',
        action: 'Chief extensor of elbow joint; long head extends shoulder.',
        clinicalNotes: 'Radial nerve injury in the axilla (Crutch Palsy) affects all heads.',
        imageUrl: tricepsImg,
        category: 'Arm'
    },
    {
        id: 'anconeus',
        name: 'Anconeus',
        origin: 'Lateral epicondyle of humerus.',
        insertion: 'Lateral surface of olecranon and superior part of posterior ulna.',
        nerve: 'Radial nerve (C7, C8)',
        action: 'Assists triceps in extending elbow; stabilizes elbow joint.',
        clinicalNotes: 'Provides dynamic stability to the lateral elbow.',
        imageUrl: anconeusImg,
        category: 'Arm'
    },

    // 3. Forearm: Anterior Compartment
    {
        id: 'pronator-teres',
        name: 'Pronator Teres',
        origin: 'Medial epicondyle and coronoid process of ulna.',
        insertion: 'Middle of lateral surface of radius.',
        nerve: 'Median nerve (C6, C7)',
        action: 'Pronates forearm and flexes elbow.',
        clinicalNotes: 'Common site of Median nerve compression (Pronator Syndrome).',
        imageUrl: pronatorTeresImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-carpi-radialis',
        name: 'Flexor Carpi Radialis (FCR)',
        origin: 'Medial epicondyle of humerus.',
        insertion: 'Base of 2nd metacarpal.',
        nerve: 'Median nerve (C6, C7)',
        action: 'Flexes and abducts (radial deviation) hand at wrist.',
        clinicalNotes: 'Tendon is a guide for finding the radial pulse.',
        imageUrl: fcrImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'palmaris-longus',
        name: 'Palmaris Longus',
        origin: 'Medial epicondyle of humerus.',
        insertion: 'Distal half of flexor retinaculum and palmar aponeurosis.',
        nerve: 'Median nerve (C7, C8)',
        action: 'Flexes hand at wrist and tightens palmar aponeurosis.',
        clinicalNotes: 'Absent in ~14% of population. Use for tendon grafts.',
        imageUrl: palmarisLongusImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-carpi-ulnaris',
        name: 'Flexor Carpi Ulnaris (FCU)',
        origin: 'Medial epicondyle and olecranon/posterior ulna.',
        insertion: 'Pisiform, hook of hamate, and 5th metacarpal.',
        nerve: 'Ulnar nerve (C7, C8)',
        action: 'Flexes and adducts (ulnar deviation) hand at wrist.',
        clinicalNotes: 'Ulnar nerve passes between its two heads (Cubital Tunnel).',
        imageUrl: fcuImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-digitorum-superficialis',
        name: 'Flexor Digitorum Superficialis (FDS)',
        origin: 'Medial epicondyle, coronoid process, and anterior radius.',
        insertion: 'Middle phalanges of medial four fingers.',
        nerve: 'Median nerve (C7, C8, T1)',
        action: 'Flexes proximal interphalangeal (PIP) joints.',
        clinicalNotes: 'Tested by holding other fingers in extension to isolate.',
        imageUrl: fdsImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-digitorum-profundus',
        name: 'Flexor Digitorum Profundus (FDP)',
        origin: 'Proximal 3/4 of medial and anterior surfaces of ulna.',
        insertion: 'Bases of distal phalanges of medial four fingers.',
        nerve: 'Medial part: Ulnar n. Lateral part: Anterior Interosseous n. (Median).',
        action: 'Flexes distal interphalangeal (DIP) joints.',
        clinicalNotes: 'Only muscle that can flex the DIP joints.',
        imageUrl: fdpImg,
        category: 'Forearm (Anterior)'
    },
    {
        id: 'flexor-pollicis-longus',
        name: 'Flexor Pollicis Longus (FPL)',
        origin: 'Anterior surface of radius and interosseous membrane.',
        insertion: 'Base of distal phalanx of thumb.',
        nerve: 'Anterior Interosseous nerve (from Median) (C8, T1)',
        action: 'Flexes phalanges of 1st digit (thumb).',
        clinicalNotes: 'Deficit indicates AIN syndrome (O.K. sign abnormal).',
        imageUrl: fplImg,
        category: 'Forearm (Anterior)'
    },

    // 4. Forearm: Posterior Compartment
    {
        id: 'brachioradialis',
        name: 'Brachioradialis',
        origin: 'Proximal 2/3 of lateral supracondylar ridge of humerus.',
        insertion: 'Lateral surface of distal end of radius.',
        nerve: 'Radial nerve (C5, C6, C7)',
        action: 'Flexes forearm (best in mid-prone position).',
        clinicalNotes: 'Only flexor innervated by the Radial nerve. Spared in distal PIN injuries.',
        imageUrl: brachioradialisImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-carpi-radialis-longus',
        name: 'Extensor Carpi Radialis Longus (ECRL)',
        origin: 'Lateral supracondylar ridge of humerus.',
        insertion: 'Dorsal aspect of base of 2nd metacarpal.',
        nerve: 'Radial nerve (C6, C7)',
        action: 'Extends and abducts hand at wrist.',
        clinicalNotes: 'Active during making a fist to prevent wrist flexion.',
        imageUrl: ecrlImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'extensor-digitorum',
        name: 'Extensor Digitorum',
        origin: 'Lateral epicondyle of humerus.',
        insertion: 'Extensor expansions of medial four fingers.',
        nerve: 'Posterior Interosseous nerve (C7, C8)',
        action: 'Extends medial four fingers at MCP joints.',
        clinicalNotes: 'Test for determining Radial nerve integrity.',
        imageUrl: extensorDigitorumImg,
        category: 'Forearm (Posterior)'
    },
    {
        id: 'supinator',
        name: 'Supinator',
        origin: 'Lateral epicondyle, radial collateral ligament, annular ligament.',
        insertion: 'Lateral, posterior, and anterior surfaces of proximal radius.',
        nerve: 'Deep branch of Radial nerve (C7, C8)',
        action: 'Supinates forearm.',
        clinicalNotes: 'Radial nerve passes through distinct layers (Arcade of Frohse), potential entrapment site.',
        imageUrl: supinatorImg,
        category: 'Forearm (Posterior)'
    },

    // 5. Intrinsic Hand
    {
        id: 'thenar-muscles',
        name: 'Thenar Group (APB, FPB, OP)',
        origin: 'Flexor retinaculum and carpal bones (Scaphoid, Trapezium).',
        insertion: 'Thumb (Base of proximal phalanx/1st Metacarpal).',
        nerve: 'Recurrent branch of Median nerve (C8, T1)',
        action: 'Opposition, Abduction, and Flexion of thumb.',
        clinicalNotes: 'Recurrent branch is the "Million Dollar Nerve". Compression causes "Ape Hand".',
        imageUrl: thenarImg,
        category: 'Hand'
    },
    {
        id: 'hypothenar-muscles',
        name: 'Hypothenar Group (ADM, FDMB, ODM)',
        origin: 'Flexor retinaculum and carpal bones (Pisiform, Hamate).',
        insertion: 'Little finger (Base of proximal phalanx/5th Metacarpal).',
        nerve: 'Deep branch of Ulnar nerve (C8, T1)',
        action: 'Abduction, Flexion, and Opposition of little finger.',
        clinicalNotes: 'Atrophy indicates ulnar nerve pathology (e.g., Guyon\'s Canal syndrome).',
        imageUrl: hypothenarImg,
        category: 'Hand'
    },
    {
        id: 'lumbricals',
        name: 'Lumbricals (1-4)',
        origin: 'Tendons of Flexor Digitorum Profundus.',
        insertion: 'Lateral sides of extensor expansions of digits 2-5.',
        nerve: '1-2: Median n. | 3-4: Ulnar n. (C8, T1)',
        action: 'Flex MCP joints and extend IP joints.',
        clinicalNotes: 'Function is essential for the "intrinsic plus" hand position.',
        imageUrl: lumbricalsImg,
        category: 'Hand'
    },
    {
        id: 'interossei',
        name: 'Interossei (Dorsal & Palmar)',
        origin: 'Metacarpals.',
        insertion: 'Extensor expansions and bases of proximal phalanges.',
        nerve: 'Deep branch of Ulnar nerve (C8, T1)',
        action: 'DAB: Abduct. PAD: Adduct.',
        clinicalNotes: 'Test by asking patient to spread fingers against resistance.',
        imageUrl: interosseiImg,
        category: 'Hand'
    },
    {
        id: 'adductor-pollicis',
        name: 'Adductor Pollicis',
        origin: '2nd/3rd Metacarpals and Capitate.',
        insertion: 'Base of proximal phalanx of thumb.',
        nerve: 'Deep branch of Ulnar nerve (C8, T1)',
        action: 'Adducts thumb.',
        clinicalNotes: 'Weakness leads to "Froment\'s Sign" (compensatory IP flexion via FPL).',
        imageUrl: adductorPollicisImg,
        category: 'Hand'
        // ... (Upper Limb data preserved)
    },

    // 6. Lower Limb: Gluteal Region
    {
        id: 'gluteus-maximus',
        name: 'Gluteus Maximus',
        origin: 'Ilium, sacrum, coccyx.',
        insertion: 'Iliotibial tract and gluteal tuberosity of femur.',
        nerve: 'Inferior gluteal nerve (L5, S1, S2)',
        action: 'Extends and laterally rotates thigh.',
        clinicalNotes: 'Major extensor used in standing up from a chair or climbing stairs. Gluteal gait if weak.',
        imageUrl: gluteusMaximusImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'gluteus-medius',
        name: 'Gluteus Medius',
        origin: 'Ilium (between anterior and posterior gluteal lines).',
        insertion: 'Greater trochanter of femur.',
        nerve: 'Superior gluteal nerve (L5, S1)',
        action: 'Abducts and medially rotates thigh; stabilizes pelvis.',
        clinicalNotes: 'Positive Trendelenburg sign indicates weakness (pelvis drops on opposite side).',
        imageUrl: gluteusMediusImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'piriformis',
        name: 'Piriformis',
        origin: 'Anterior surface of sacrum.',
        insertion: 'Greater trochanter of femur.',
        nerve: 'Nerve to Piriformis (S1, S2)',
        action: 'Laterally rotates thigh.',
        clinicalNotes: 'Sciatic nerve passes underneath (or through) it, causing Piriformis Syndrome.',
        imageUrl: piriformisImg,
        category: 'Lower Limb: Gluteal'
    },

    // 7. Lower Limb: Thigh
    {
        id: 'rectus-femoris',
        name: 'Rectus Femoris',
        origin: 'AIIS and Above Acetabulum.',
        insertion: 'Tibial tuberosity via patellar ligament.',
        nerve: 'Femoral nerve (L2, L3, L4)',
        action: 'Flexes thigh and extends leg.',
        clinicalNotes: 'The "Kicking Muscle". Part of Quadriceps.',
        imageUrl: rectusFemorisImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'sartorius',
        name: 'Sartorius',
        origin: 'Anterior Superior Iliac Spine (ASIS).',
        insertion: 'Proximal medial tibia (Pes Anserinus).',
        nerve: 'Femoral nerve (L2, L3)',
        action: 'Flexes, abducts, and laterally rotates thigh; flexes leg.',
        clinicalNotes: 'Longest muscle in the body. The "Tailor\'s Muscle".',
        imageUrl: sartoriusImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'biceps-femoris',
        name: 'Biceps Femoris',
        origin: 'Long: Ischial tuberosity. Short: Linea aspera.',
        insertion: 'Head of fibula.',
        nerve: 'Long: Tibial n. Short: Common Fibular n.',
        action: 'Flexes leg and extends thigh.',
        clinicalNotes: 'Lateral hamstring. Common site of strain.',
        imageUrl: bicepsFemorisImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'adductor-magnus',
        name: 'Adductor Magnus',
        origin: 'Ischiopubic ramus and ischial tuberosity.',
        insertion: 'Linea aspera and adductor tubercle.',
        nerve: 'Obturator nerve (Add part) & Tibial nerve (Hamstring part)',
        action: 'Adducts thigh. Adductor part flexes, Hamstring part extends.',
        clinicalNotes: 'A massive muscle with dual innervation.',
        imageUrl: adductorMagnusImg,
        category: 'Lower Limb: Thigh'
    },

    // 8. Lower Limb: Leg
    {
        id: 'tibialis-anterior',
        name: 'Tibialis Anterior',
        origin: 'Lateral condyle and proximal tibia.',
        insertion: 'Medial cuneiform and base of 1st metatarsal.',
        nerve: 'Deep Fibular nerve (L4, L5)',
        action: 'Dorsiflexes and inverts foot.',
        clinicalNotes: 'Weakness causes "Foot Drop".',
        imageUrl: tibialisAnteriorImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'gastrocnemius',
        name: 'Gastrocnemius',
        origin: 'Lateral and medial condyles of femur.',
        insertion: 'Calcaneus via Achilles tendon.',
        nerve: 'Tibial nerve (S1, S2)',
        action: 'Plantarflexes foot and flexes knee.',
        clinicalNotes: 'Powerful plantarflexor. Rupture feels like being "kicked in the calf".',
        imageUrl: gastrocnemiusImg,
        category: 'Lower Limb: Leg'
    },
    {
        id: 'fibularis-longus',
        name: 'Fibularis (Peroneus) Longus',
        origin: 'Proximal fibula.',
        insertion: 'Base of 1st metatarsal and medial cuneiform.',
        nerve: 'Superficial Fibular nerve (L5, S1)',
        action: 'Everts and plantarflexes foot.',
        clinicalNotes: 'Supports transverse arch of foot.',
        imageUrl: fibularisLongusImg,
        category: 'Lower Limb: Leg'
    }
];
