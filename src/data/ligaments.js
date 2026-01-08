import musclePlaceholderImg from '../assets/muscles/placeholder.png';
import uclImg from '../assets/ligaments/ulnar-collateral-ligament.png';
import rclImg from '../assets/ligaments/radial-collateral-ligament.png';
import annularImg from '../assets/ligaments/annular-ligament.png';
import tfccImg from '../assets/ligaments/tfcc.png';
import scapholunateImg from '../assets/ligaments/scapholunate-ligament.png';
import palmarRadiocarpalImg from '../assets/ligaments/palmar-radiocarpal.png';
import dorsalRadiocarpalImg from '../assets/ligaments/dorsal-radiocarpal.png';
import allImg from '../assets/ligaments/all.png';
import pllImg from '../assets/ligaments/pll.png';
import ligFlavumImg from '../assets/ligaments/ligamentum-flavum.png';
import interspinousImg from '../assets/ligaments/interspinous-ligament.png';
import alarImg from '../assets/ligaments/alar-ligaments.png';
import cruciateImg from '../assets/ligaments/cruciate-ligament.png';
import tectorialImg from '../assets/ligaments/tectorial-membrane.png';
import apicalImg from '../assets/ligaments/apical-ligament.png';
import intertransverseImg from '../assets/ligaments/intertransverse-ligament.png';
import supraspinousImg from '../assets/ligaments/supraspinous-ligament.png';
import nuchalImg from '../assets/ligaments/nuchal-ligament.png';

export const ligaments = [
    // Elbow Ligaments
    {
        id: 'ulnar-collateral-ligament',
        name: 'Ulnar Collateral Ligament (UCL)',
        location: 'Medial Elbow',
        attachments: 'Medial Epicondyle to Coronoid/Olecranon.',
        function: 'Resists Valgus stress.',
        clinicalNotes: 'Anterior band is strongest. "Tommy John" injury (pitchers).',
        imageUrl: uclImg,
        category: 'Elbow'
    },
    {
        id: 'radial-collateral-ligament',
        name: 'Radial Collateral Ligament (RCL)',
        location: 'Lateral Elbow',
        attachments: 'Lateral Epicondyle to Annular Ligament/Ulna.',
        function: 'Resists Varus stress.',
        clinicalNotes: 'Less commonly injured than UCL.',
        imageUrl: rclImg,
        category: 'Elbow'
    },
    {
        id: 'annular-ligament',
        name: 'Annular Ligament',
        location: 'Proximal Radioulnar Joint',
        attachments: 'Encircles Radial Head, attaches to Ulna.',
        function: 'Stabilizes PRUJ during pronation/supination. Prevents inferior distraction.',
        clinicalNotes: 'Nursemaid\'s Elbow (subluxation of radial head from ligament).',
        imageUrl: annularImg,
        category: 'Elbow'
    },

    // Wrist Ligaments
    {
        id: 'tfcc',
        name: 'Triangular Fibrocartilage Complex (TFCC)',
        location: 'Distal Radioulnar/Ulnocarpal Joint',
        attachments: 'Ulna to Lunate/Triquetrum.',
        function: 'Major stabilizer of DRUJ. Cushions ulnar carpal column.',
        clinicalNotes: '"Meniscus of the wrist". Peripheral tears heal better (vascular) than central.',
        imageUrl: tfccImg,
        category: 'Wrist'
    },
    {
        id: 'scapholunate-ligament',
        name: 'Scapholunate Ligament',
        location: 'Between Scaphoid and Lunate',
        attachments: 'Scaphoid to Lunate.',
        function: 'Stabilizes proximal carpal row.',
        clinicalNotes: 'Terry Thomas sign (gap on xray). Most common carpal instability.',
        imageUrl: scapholunateImg,
        category: 'Wrist'
    },
    {
        id: 'palmar-radiocarpal',
        name: 'Palmar Radiocarpal Ligaments',
        location: 'Anterior Wrist',
        attachments: 'Radius to Carpals (Capitate, Lunate, Scaphoid).',
        function: 'Limits wrist extension. Stronger than dorsal ligaments.',
        clinicalNotes: 'Follows radius during Supination.',
        imageUrl: palmarRadiocarpalImg,
        category: 'Wrist'
    },
    {
        id: 'dorsal-radiocarpal',
        name: 'Dorsal Radiocarpal Ligaments',
        location: 'Posterior Wrist',
        attachments: 'Radius to Carpals.',
        function: 'Limits wrist flexion.',
        clinicalNotes: 'Follows radius during Pronation.',
        imageUrl: dorsalRadiocarpalImg,
        category: 'Wrist'
    },
    // Spine
    {
        id: 'all',
        name: 'Anterior Longitudinal Ligament (ALL)',
        location: 'Anterior Vertebral Column',
        attachments: 'Occiput (Ant Foramen Magnum) to Sacrum. Anterior vertebral bodies/discs.',
        function: 'Limits Extension. Supports anterior annulus.',
        clinicalNotes: 'Wide inferiorly. Only ligament that limits extension.',
        imageUrl: allImg,
        category: 'Spine'
    },
    {
        id: 'pll',
        name: 'Posterior Longitudinal Ligament (PLL)',
        location: 'Posterior Vertebral Bodies (Inside Canal)',
        attachments: 'C2 to Sacrum. Posterior vertebral bodies/discs.',
        function: 'Limits Flexion. Supports posterior annulus.',
        clinicalNotes: 'Narrow inferiorly (L-spine) -> less support for posterolateral herniations. Continues as Tectorial Membrane.',
        imageUrl: pllImg,
        category: 'Spine'
    },
    {
        id: 'ligamentum-flavum',
        name: 'Ligamentum Flavum',
        location: 'Posterior Canal Wall',
        attachments: 'Lamina to Lamina (C2 to Sacrum).',
        function: 'Limits Flexion (smooth return). Protects disc from injury. High elastin content (yellow).',
        clinicalNotes: 'Thickens lumbar. Hypertrophy can cause stenosis.',
        imageUrl: ligFlavumImg,
        category: 'Spine'
    },
    {
        id: 'interspinous-ligament',
        name: 'Interspinous Ligament',
        location: 'Between Spinous Processes',
        attachments: 'Adjacent SPs.',
        function: 'Limits Flexion.',
        clinicalNotes: 'Thin/Membranous.',
        imageUrl: interspinousImg,
        category: 'Spine'
    },
    {
        id: 'supraspinous-ligament',
        name: 'Supraspinous Ligament',
        location: 'Tips of Spinous Processes',
        attachments: 'C7 to Sacrum tips of SPs.',
        function: 'Limits Flexion.',
        clinicalNotes: 'Cord-like. Continuous with Nuchal Ligament superiorly.',
        imageUrl: supraspinousImg,
        category: 'Spine'
    },
    {
        id: 'nuchal-ligament',
        name: 'Nuchal Ligament (Ligamentum Nuchae)',
        location: 'Posterior Neck',
        attachments: 'EOP to C7 SP. Attaches to C1 post tubercle.',
        function: 'Limits Flexion. Muscle Attachment septum.',
        clinicalNotes: 'Thickened evolution of supra/interspinous ligs for head support.',
        imageUrl: nuchalImg,
        category: 'Spine'
    },
    {
        id: 'intertransverse-ligament',
        name: 'Intertransverse Ligament',
        location: 'Between Transverse Processes',
        attachments: 'Adjacent TPs.',
        function: 'Limits Lateral Flexion.',
        clinicalNotes: 'Significant in Lumbar.',
        imageUrl: intertransverseImg,
        category: 'Spine'
    },

    // Craniovertebral (Upper Cervical)
    {
        id: 'alar-ligament',
        name: 'Alar Ligaments',
        location: 'Upper Cervical (C1-C2-Occiput)',
        attachments: 'Sides of Dens to Lateral Foramen Magnum.',
        function: 'Limits Rotation (Contralateral). Limits excessive flexion.',
        clinicalNotes: 'Check with Alar Ligament Test. Often injured in whiplash.',
        imageUrl: alarImg,
        category: 'Craniovertebral'
    },
    {
        id: 'cruciate-ligament',
        name: 'Cruciate Ligament',
        location: 'Upper Cervical (Behind Dens)',
        attachments: 'Transverse Ligament (Atlas Mass to Mass) + Sup/Inf Bands (Occiput to C2 Body).',
        function: 'Stabilizes Dens against C1 Anterior Arch. Prevents cord compression.',
        clinicalNotes: 'Transverse band is most critical. "Seatbelt" for Dens. Steele\'s Law of Thirds.',
        imageUrl: cruciateImg,
        category: 'Craniovertebral'
    },
    {
        id: 'tectorial-membrane',
        name: 'Tectorial Membrane',
        location: 'C2 to Occiput (Canal)',
        attachments: 'Continuation of PLL superiorly to Foramen Magnum.',
        function: 'Limits Flexion.',
        clinicalNotes: 'Covers the Cruciate/Alar ligaments posteriorly.',
        imageUrl: tectorialImg,
        category: 'Craniovertebral'
    },
    {
        id: 'apical-ligament',
        name: 'Apical Ligament',
        location: 'Tip of Dens',
        attachments: 'Tip of Dens to Anterior Foramen Magnum.',
        function: 'Minimal mechanical significance.',
        clinicalNotes: '',
        imageUrl: apicalImg,
        category: 'Craniovertebral'
    },

    // Pelvis
    {
        id: 'sacrotuberous-ligament',
        name: 'Sacrotuberous Ligament',
        location: 'Posterior Pelvis',
        attachments: 'Sacrum (Lateal) / PSIS / PIIS / Coccyx to Ischial Tuberosity.',
        function: 'Stabilizes SI joint (resists nutation).',
        clinicalNotes: 'Forms the boundary of the Greater and Lesser sciatic foramina. Used for muscle attachment (Glute Max, Piriformis).',
        imageUrl: musclePlaceholderImg,
        category: 'Pelvis'
    },
    {
        id: 'sacrospinous-ligament',
        name: 'Sacrospinous Ligament',
        location: 'Posterior Pelvis (Deep to Sacrotuberous)',
        attachments: 'Sacrum/Coccyx to Ischial Spine.',
        function: 'Stabilizes SI joint (resists nutation).',
        clinicalNotes: 'Separates Greater and Lesser Sciatic Foramina. Pudendal n. passes around it.',
        imageUrl: musclePlaceholderImg,
        category: 'Pelvis'
    },
    {
        id: 'iliolumbar-ligament',
        name: 'Iliolumbar Ligament',
        location: 'Lumbosacral Junction',
        attachments: 'L5 Transverse process to Iliac Crest.',
        function: 'Stabilizes L5 on S1. Prevents anterior shear.',
        clinicalNotes: 'Often strained in chronic LBP.',
        imageUrl: musclePlaceholderImg,
        category: 'Pelvis'
    },
    {
        id: 'anterior-si-ligament',
        name: 'Anterior Sacroiliac Ligaments',
        location: 'Anterior SI Joint',
        attachments: 'Anterior Sacrum to Ilium.',
        function: 'Reinforces anterior SI joint.',
        clinicalNotes: 'Weaker than posterior ligaments.',
        imageUrl: musclePlaceholderImg,
        category: 'Pelvis'
    },
    {
        id: 'posterior-si-ligament',
        name: 'Posterior Sacroiliac Ligaments',
        location: 'Posterior SI Joint',
        attachments: 'Posterior Sacrum to Ilium.',
        function: 'Major stabilizer of SI joint.',
        clinicalNotes: 'Very strong. Prevent Sacrum from falling into Ilium.',
        imageUrl: musclePlaceholderImg,
        category: 'Pelvis'
    },
    // Hip Ligaments
    {
        id: 'iliofemoral-ligament',
        name: 'Iliofemoral Ligament (Y Ligament)',
        location: 'Anterior Hip',
        attachments: 'AIIS/Acetabular Rim to Intertrochanteric Line.',
        function: 'Prevents Hyperextension. Strongest ligament in the body.',
        clinicalNotes: 'Allows for "paraplegic stance" (hanging on Y ligaments).',
        imageUrl: musclePlaceholderImg,
        category: 'Hip'
    },
    {
        id: 'pubofemoral-ligament',
        name: 'Pubofemoral Ligament',
        location: 'Anterior/Inferior Hip',
        attachments: 'Obturator Crest/Pubic Ramus to Intertrochanteric Line.',
        function: 'Prevents over-Abduction and Extension.',
        clinicalNotes: 'Reinforces the capsule inferiorly and anteriorly.',
        imageUrl: musclePlaceholderImg,
        category: 'Hip'
    },
    {
        id: 'ischiofemoral-ligament',
        name: 'Ischiofemoral Ligament',
        location: 'Posterior Hip',
        attachments: 'Acetabular Rim/Ischium spirals to Neck of Femur/Greater Trochanter.',
        function: 'Prevents Posterior Displacement and Internal Rotation. Tightens in Extension.',
        clinicalNotes: 'Weakest of the three main hip ligaments.',
        imageUrl: musclePlaceholderImg,
        category: 'Hip'
    },
    {
        id: 'ligamentum-teres',
        name: 'Ligamentum Teres (Ligament of Head of Femur)',
        location: 'Intracapsular Hip',
        attachments: 'Acetabular Notch/Transverse Ligament to Fovea Capitis.',
        function: 'Conduit for Foveal Artery (in children). Minimal mechanical stability.',
        clinicalNotes: 'Artery usually patent in children, often sclerosed in adults.',
        imageUrl: musclePlaceholderImg,
        category: 'Hip'
    },
    // Knee Ligaments
    {
        id: 'mcl',
        name: 'Medial Collateral Ligament (MCL)',
        location: 'Medial Knee',
        attachments: 'Medial Epicondyle of Femur to Medial Tibia.',
        function: 'Resists Valgus stress.',
        clinicalNotes: 'Deep fibers attach to Medial Meniscus (The ""Unhappy Triad"": ACL, MCL, Medial Meniscus).',
        imageUrl: musclePlaceholderImg,
        category: 'Knee'
    },
    {
        id: 'lcl',
        name: 'Lateral Collateral Ligament (LCL)',
        location: 'Lateral Knee',
        attachments: 'Lateral Epicondyle of Femur to Fibular Head.',
        function: 'Resists Varus stress.',
        clinicalNotes: 'Extracapsular. Not attached to Lateral Meniscus. Popliteus tendon passes deep to it.',
        imageUrl: musclePlaceholderImg,
        category: 'Knee'
    },
    {
        id: 'acl',
        name: 'Anterior Cruciate Ligament (ACL)',
        location: 'Intracapsular Knee',
        attachments: 'Medial wall of Lateral Femoral Condyle to Anterior Intercondylar Area of Tibia.',
        function: 'Prevents Anterior Tibial Translation. Resists hyperextension.',
        clinicalNotes: 'Weaker than PCL. Poor blood supply. "Anterior Drawer" / "Lachman\'s Test".',
        imageUrl: musclePlaceholderImg,
        category: 'Knee'
    },
    {
        id: 'pcl',
        name: 'Posterior Cruciate Ligament (PCL)',
        location: 'Intracapsular Knee',
        attachments: 'Lateral wall of Medial Femoral Condyle to Posterior Intercondylar Area of Tibia.',
        function: 'Prevents Posterior Tibial Translation. Resists hyperflexion.',
        clinicalNotes: 'Stronger than ACL. "Posterior Drawer Test".',
        imageUrl: musclePlaceholderImg,
        category: 'Knee'
    },
    {
        id: 'oblique-popliteal-ligament',
        name: 'Oblique Popliteal Ligament',
        location: 'Posterior Knee Capsule',
        attachments: 'Expansion of Semimembranosus tendon.',
        function: 'Stabilizes posterior capsule.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Knee'
    },
    {
        id: 'arcuate-popliteal-ligament',
        name: 'Arcuate Popliteal Ligament',
        location: 'Posterior Knee Capsule',
        attachments: 'Fibular head over Popliteus tendon.',
        function: 'Stabilizes posterior capsule.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Knee'
    },
    {
        id: 'medial-meniscus',
        name: 'Medial Meniscus',
        location: 'Tibiofemoral Joint',
        attachments: 'Tibial intercondylar area, MCL, Capsule.',
        function: 'Shock absorption, congruency. C-Shaped.',
        clinicalNotes: 'Fixed mechanism (attached to MCL) -> more prone to injury.',
        imageUrl: musclePlaceholderImg,
        category: 'Knee'
    },
    {
        id: 'lateral-meniscus',
        name: 'Lateral Meniscus',
        location: 'Tibiofemoral Joint',
        attachments: 'Tibial intercondylar area.',
        function: 'Shock absorption. Circular (O-Shaped).',
        clinicalNotes: 'Mobility -> less prone to injury. Not attached to LCL.',
        imageUrl: musclePlaceholderImg,
        category: 'Knee'
    },
    {
        id: 'superior-extensor-retinaculum',
        name: 'Superior Extensor Retinaculum',
        location: 'Anterior Distal Leg',
        attachments: 'Fibula to Tibia (proximal to malleoli).',
        function: 'Prevents bowstringing of anterior tendons.',
        clinicalNotes: 'Strong broad band.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Ankle'
    },
    {
        id: 'inferior-extensor-retinaculum',
        name: 'Inferior Extensor Retinaculum',
        location: 'Anterior Ankle',
        attachments: 'Y-shaped. Lateral Calc to Medial Malleolus/Plantar Aponeurosis.',
        function: 'Prevents bowstringing of anterior tendons.',
        clinicalNotes: 'Loops around Fibularis Tertius/EDL.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Ankle'
    },
    {
        id: 'superior-fibular-retinaculum',
        name: 'Superior Fibular (Peroneal) Retinaculum',
        location: 'Lateral Ankle',
        attachments: 'Lateral Malleolus to Calcaneus.',
        function: 'Binds Fibularis Longus/Brevis tendons to malleolus.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Ankle'
    },
    {
        id: 'inferior-fibular-retinaculum',
        name: 'Inferior Fibular (Peroneal) Retinaculum',
        location: 'Lateral Calcaneus',
        attachments: 'Calcaneus (Trochlear Process).',
        function: 'Binds Fibularis Longus/Brevis tendons.',
        clinicalNotes: '',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Ankle'
    },
    {
        id: 'flexor-retinaculum',
        name: 'Flexor Retinaculum',
        location: 'Medial Ankle',
        attachments: 'Medial Malleolus to Calcaneus.',
        function: 'Holds Tibialis Posterior, FDL, FHL, and Neurovascular bundle.',
        clinicalNotes: 'Forms Tarsal Tunnel (Tom, Dick, And Harry).',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Ankle'
    },
    // Ankle Ligaments
    {
        id: 'deltoid-ligament',
        name: 'Deltoid (Medial Collateral) Ligament',
        location: 'Medial Ankle',
        attachments: 'Medial Malleolus to Talus, Calcaneus, Navicular.',
        function: 'Resists Eversion. Stabilizes medial ankle.',
        clinicalNotes: 'Very strong. Eversion sprains are rare (avulsion fracture more likely). Parts: Tibionavicular, Tibiotalar, Tibiocalcaneal.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Ankle'
    },
    {
        id: 'lateral-collateral-ligaments-ankle',
        name: 'Lateral Collateral Ligaments (Ankle)',
        location: 'Lateral Ankle',
        attachments: 'Fibula to Talus/Calcaneus.',
        function: 'Resists Inversion.',
        clinicalNotes: 'ATFL (Anterior Talofibular) - Most commonly sprained (Inversion). CFL (Calcaneofibular). PTFL (Posterior Talofibular).',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Ankle'
    },
    // Foot Ligaments
    {
        id: 'spring-ligament',
        name: 'Spring Ligament (Plantar Calcaneonavicular)',
        location: 'Plantar Foot (Medial)',
        attachments: 'Sustentaculum Tali to Navicular.',
        function: 'Supports Head of Talus. Maintains Medial Longitudinal Arch.',
        clinicalNotes: 'Failure leads to "Flat Foot" (Pes Planus).',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot'
    },
    {
        id: 'long-plantar-ligament',
        name: 'Long Plantar Ligament',
        location: 'Plantar Foot (Lateral)',
        attachments: 'Calcaneus to Cuboid/Metatarsals.',
        function: 'Supports Lateral Longitudinal Arch.',
        clinicalNotes: 'Forms tunnel for Fibularis Longus tendon.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot'
    },
    {
        id: 'short-plantar-ligament',
        name: 'Short Plantar Ligament (Plantar Calcaneocuboid)',
        location: 'Plantar Foot (Deep)',
        attachments: 'Calcaneus to Cuboid.',
        function: 'Supports Lateral Longitudinal Arch.',
        clinicalNotes: 'Deep to Long Plantar Ligament.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot'
    },
    {
        id: 'plantar-aponeurosis',
        name: 'Plantar Aponeurosis',
        location: 'Plantar Foot (Superficial)',
        attachments: 'Calcaneus to Flexor Sheaths/MTP joints.',
        function: 'Supports all arches. Protects underlying structures.',
        clinicalNotes: 'Plantar Fasciitis (inflammation at calcaneal origin). Heel spurs.',
        imageUrl: musclePlaceholderImg,
        category: 'Lower Limb: Foot'
    }
];
