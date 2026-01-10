// import musclePlaceholderImg from '../assets/muscles/placeholder.png';
import dorsalCompartment1Img from '../assets/tendons/dorsal-compartment-1.png';
import dorsalCompartment2Img from '../assets/tendons/dorsal-compartment-2.png';
import dorsalCompartment3Img from '../assets/tendons/dorsal-compartment-3.png';
import dorsalCompartment4Img from '../assets/tendons/dorsal-compartment-4.png';
import dorsalCompartment5Img from '../assets/tendons/dorsal-compartment-5.png';
import dorsalCompartment6Img from '../assets/tendons/dorsal-compartment-6.png';
import flexorRetinaculumImg from '../assets/tendons/flexor-retinaculum.png';
import palmarAponeurosisImg from '../assets/tendons/palmar-aponeurosis.png';
import flexorPulleysImg from '../assets/tendons/flexor-pulleys.png';
import anatomicalSnuffboxImg from '../assets/tendons/anatomical-snuffbox.png';

export const tendons = [
    {
        id: 'dorsal-compartment-1',
        name: 'Dorsal Compartment 1',
        location: 'Lateral Wrist (Radial Styloid)',
        contents: 'Abductor Pollicis Longus (APL) & Extensor Pollicis Brevis (EPB).',
        clinicalNotes: 'De Quervain\'s Tenosynovitis (Finkelstein\'s Test). Borders Anatomical Snuffbox laterally.',
        imageUrl: dorsalCompartment1Img,
        category: 'Extensor Compartments'
    },
    {
        id: 'dorsal-compartment-2',
        name: 'Dorsal Compartment 2',
        location: 'Lateral Wrist',
        contents: 'Extensor Carpi Radialis Longus (ECRL) & Brevis (ECRB).',
        clinicalNotes: ' wrist extensors. Intersection Syndrome (where 1 crosses 2).',
        imageUrl: dorsalCompartment2Img,
        category: 'Extensor Compartments'
    },
    {
        id: 'dorsal-compartment-3',
        name: 'Dorsal Compartment 3',
        location: 'Posterior Wrist (Lister\'s Tubercle)',
        contents: 'Extensor Pollicis Longus (EPL).',
        clinicalNotes: 'Uses Lister\'s Tubercle as a pulley. Rupture common in RA or Colles fx. Medial border of Snuffbox.',
        imageUrl: dorsalCompartment3Img,
        category: 'Extensor Compartments'
    },
    {
        id: 'dorsal-compartment-4',
        name: 'Dorsal Compartment 4',
        location: 'Posterior Wrist',
        contents: 'Extensor Digitorum (ED) & Extensor Indicis (EI).',
        clinicalNotes: 'Common extensor sheath. Ganglion cysts common here.',
        imageUrl: dorsalCompartment4Img,
        category: 'Extensor Compartments'
    },
    {
        id: 'dorsal-compartment-5',
        name: 'Dorsal Compartment 5',
        location: 'Posterior Wrist',
        contents: 'Extensor Digiti Minimi (EDM).',
        clinicalNotes: 'Independent extension of little finger.',
        imageUrl: dorsalCompartment5Img,
        category: 'Extensor Compartments'
    },
    {
        id: 'dorsal-compartment-6',
        name: 'Dorsal Compartment 6',
        location: 'Medial Wrist (Ulnar Head)',
        contents: 'Extensor Carpi Ulnaris (ECU).',
        clinicalNotes: 'ECU subluxation. Snapping wrist.',
        imageUrl: dorsalCompartment6Img,
        category: 'Extensor Compartments'
    },
    {
        id: 'flexor-retinaculum',
        name: 'Flexor Retinaculum (Transverse Carpal Ligament)',
        location: 'Anterior Wrist',
        contents: 'Forms roof of Carpal Tunnel. Attachments: Scaphoid/Trapezium (Lat) to Pisiform/Hamate (Med).',
        clinicalNotes: 'Cut during Carpal Tunnel Release surgery. Median nerve acts as a "content" deep to it.',
        imageUrl: flexorRetinaculumImg,
        category: 'Flexor System'
    },
    {
        id: 'palmar-aponeurosis',
        name: 'Palmar Aponeurosis',
        location: 'Palm',
        contents: 'Apex acts as insertion for Palmaris Longus.',
        clinicalNotes: 'Dupuytren\'s Contracture (thickening/shortening).',
        imageUrl: palmarAponeurosisImg,
        category: 'Flexor System'
    },
    {
        id: 'flexor-pulleys',
        name: 'Fibrous Digital Sheaths (Pulleys)',
        location: 'Digits 2-5',
        contents: 'Annular (A1-A5) and Cruciform (C1-C3) pulleys.',
        clinicalNotes: 'Prevent "Bowstringing" of tendons. A2 and A4 are most critical. Trigger Finger (stenosis at A1).',
        imageUrl: flexorPulleysImg,
        category: 'Flexor System'
    },
    {
        id: 'anatomical-snuffbox-region',
        name: 'Anatomical Snuffbox',
        location: 'Lateral Wrist (Dorsal)',
        contents: 'Floor: Scaphoid, Trapezium. Content: Radial Artery, Cephalic Vein, Superficial Radial Nerve.',
        clinicalNotes: 'Tenderness = Scaphoid Fx. Borders: APL/EPB (Lat) and EPL (Med).',
        imageUrl: anatomicalSnuffboxImg,
        category: 'Regions'
    }
];

