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
    }
];
