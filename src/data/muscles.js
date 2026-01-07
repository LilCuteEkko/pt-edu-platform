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
        origin: 'Ilium, Sacrum.',
        insertion: 'IT Band, Gluteal tuberosity.',
        nerve: 'Inf Gluteal.',
        action: 'Ext/ER thigh.',
        clinicalNotes: 'Sit to stand.',
        imageUrl: gluteusMaximusImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'gluteus-medius',
        name: 'Gluteus Medius',
        origin: 'Ilium.',
        insertion: 'Greater Trochanter.',
        nerve: 'Sup Gluteal.',
        action: 'Abd/IR thigh.',
        clinicalNotes: 'Trendelenburg.',
        imageUrl: gluteusMediusImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'piriformis',
        name: 'Piriformis',
        origin: 'Sacrum.',
        insertion: 'Greater Trochanter.',
        nerve: 'N to Piriformis.',
        action: 'ER thigh.',
        clinicalNotes: 'Sciatica.',
        imageUrl: piriformisImg,
        category: 'Lower Limb: Gluteal'
    },
    {
        id: 'rectus-femoris',
        name: 'Rectus Femoris',
        origin: 'AIIS.',
        insertion: 'Tibial Tuberosity.',
        nerve: 'Femoral.',
        action: 'Flex hip, Ext knee.',
        clinicalNotes: '',
        imageUrl: rectusFemorisImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'sartorius',
        name: 'Sartorius',
        origin: 'ASIS.',
        insertion: 'Pes Anserinus.',
        nerve: 'Femoral.',
        action: 'Flex/Abd/ER hip, Flex knee.',
        clinicalNotes: 'Tailor muscle.',
        imageUrl: sartoriusImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'biceps-femoris',
        name: 'Biceps Femoris',
        origin: 'Ischial Tuberosity/Linea Aspera.',
        insertion: 'Fibula head.',
        nerve: 'Tibial/Common Fibular.',
        action: 'Ext hip, Flex knee.',
        clinicalNotes: '',
        imageUrl: bicepsFemorisImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'adductor-magnus',
        name: 'Adductor Magnus',
        origin: 'Ischiopubic ramus.',
        insertion: 'Linea Aspera/Add Tubercle.',
        nerve: 'Obturator/Tibial.',
        action: 'Adducts.',
        clinicalNotes: '',
        imageUrl: adductorMagnusImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'iliopsoas',
        name: 'Iliopsoas',
        origin: 'L1-L5 / Iliac Fossa.',
        insertion: 'Lesser Trochanter.',
        nerve: 'Femoral.',
        action: 'Hip Flexion.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'vastus-lateralis',
        name: 'Vastus Lateralis',
        origin: 'Femur.',
        insertion: 'Tibial Tuberosity.',
        nerve: 'Femoral.',
        action: 'Knee Ext.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'vastus-medialis',
        name: 'Vastus Medialis',
        origin: 'Femur.',
        insertion: 'Tibial Tuberosity.',
        nerve: 'Femoral.',
        action: 'Knee Ext.',
        clinicalNotes: 'VMO.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'semitendinosus',
        name: 'Semitendinosus',
        origin: 'Ischial Tuberosity.',
        insertion: 'Pes Anserinus.',
        nerve: 'Tibial.',
        action: 'Ext hip, Flex knee.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Thigh'
    },
    {
        id: 'semimembranosus',
        name: 'Semimembranosus',
        origin: 'Ischial Tuberosity.',
        insertion: 'Post Tibia.',
        nerve: 'Tibial.',
        action: 'Ext hip, Flex knee.',
        clinicalNotes: '',
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
    }
];
