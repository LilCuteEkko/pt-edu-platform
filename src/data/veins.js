import internalJugularVeinImg from '../assets/veins/internal-jugular-vein.png';
import externalJugularVeinImg from '../assets/veins/external-jugular-vein.png';
import anteriorJugularVeinImg from '../assets/veins/anterior-jugular-vein.png';
import brachiocephalicVeinImg from '../assets/veins/brachiocephalic-vein.png';
import subclavianVeinImg from '../assets/veins/subclavian-vein.png';

export const veins = [
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
