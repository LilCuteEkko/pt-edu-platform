import subclavianArteryImg from '../assets/arteries/subclavian-artery.png';
import axillaryArteryImg from '../assets/arteries/axillary-artery.png';
import brachialArteryImg from '../assets/arteries/brachial-artery.png';
import radialArteryImg from '../assets/arteries/radial-artery.png';
import ulnarArteryImg from '../assets/arteries/ulnar-artery.png';
import scapularAnastomosesImg from '../assets/arteries/scapular-anastomoses.png';
import commonCarotidArteryImg from '../assets/arteries/common-carotid-artery.png';
import internalCarotidArteryImg from '../assets/arteries/internal-carotid-artery.png';
import externalCarotidArteryImg from '../assets/arteries/external-carotid-artery.png';
import vertebralArteryImg from '../assets/arteries/vertebral-artery.png';
import thyrocervicalTrunkImg from '../assets/arteries/thyrocervical-trunk.png';

export const arteries = [
    {
        id: 'subclavian-artery',
        name: 'Subclavian Artery',
        source: 'Right: Brachiocephalic Trunk. Left: Aortic Arch.',
        course: 'Begins at SC joint (Right) or Arch (Left). Becomes Axillary Artery at lateral border of 1st Rib.',
        branches: [
            'Vertebral Artery',
            'Internal Thoracic Artery',
            'Thyrocervical Trunk (Suprascapular, Transverse Cervical)',
            'Costocervical Trunk',
            'Dorsal Scapular Artery'
        ],
        clinicalNotes: 'Main blood supply to the upper limb.',
        imageUrl: subclavianArteryImg
    },
    {
        id: 'axillary-artery',
        name: 'Axillary Artery',
        source: 'Subclavian Artery.',
        course: 'Begins at lateral border of 1st Rib. Ends at inferior border of Teres Major. Divided into 3 parts by Pectoralis Minor.',
        branches: [
            '1st Part (1 branch): Superior Thoracic Artery.',
            '2nd Part (2 branches): Thoraco-acromial Artery, Lateral Thoracic Artery.',
            '3rd Part (3 branches): Subscapular Artery, Ant. Circumflex Humeral, Post. Circumflex Humeral.'
        ],
        clinicalNotes: 'Anterior/Posterior Circumflex arteries wrap around surgical neck of humerus (anastomose).',
        imageUrl: axillaryArteryImg
    },
    {
        id: 'brachial-artery',
        name: 'Brachial Artery',
        source: 'Axillary Artery.',
        course: 'Begins at inferior border of Teres Major. Travels medial to humerus. Ends in Cubital Fossa by dividing into Radial and Ulnar Arteries.',
        branches: [
            'Deep Artery of Arm (Profunda Brachii): Accompanies Radial Nerve in radial groove.',
            'Superior Ulnar Collateral Artery.',
            'Inferior Ulnar Collateral Artery.'
        ],
        clinicalNotes: 'Primary pressure point for controlling hemorrhage in the arm. Blood pressure measurement site.',
        imageUrl: brachialArteryImg
    },
    {
        id: 'radial-artery',
        name: 'Radial Artery',
        source: 'Brachial Artery.',
        course: 'Runs along lateral forearm (with Superficial Radial Nerve).',
        branches: [
            'Radial Recurrent Artery',
            'Palmar Carpal Arch',
            'Superficial Palmar Arch (completes it)',
            'Deep Palmar Arch (forms it - Main supply to thumb/index)'
        ],
        clinicalNotes: 'Passes through Anatomical Snuffbox to form Deep Arch. Pulse palpable lateral to FCR.',
        imageUrl: radialArteryImg
    },
    {
        id: 'ulnar-artery',
        name: 'Ulnar Artery',
        source: 'Brachial Artery.',
        course: 'Runs along medial forearm (with Ulnar Nerve).',
        branches: [
            'Ulnar Recurrent Arteries',
            'Common Interosseous',
            'Superficial Palmar Arch (forms it - Main supply to fingers)',
            'Deep Palmar Arch (completes it)'
        ],
        clinicalNotes: 'Enters hand superficial to Flexor Retinaculum (Guyon\'s Canal). FCR pulse is key.',
        imageUrl: ulnarArteryImg
    },
    {
        id: 'scapular-anastomoses',
        name: 'Scapular Anastomoses',
        source: 'Subclavian and Axillary branches.',
        course: 'Network forming collateral circulation around the scapula.',
        branches: [
            'Suprascapular Artery (from Subclavian)',
            'Dorsal Scapular Artery (from Subclavian)',
            'Circumflex Scapular Artery (from Subscapular/Axillary)'
        ],
        imageUrl: scapularAnastomosesImg
    },
    // Neck: Carotid System
    {
        id: 'common-carotid-artery',
        name: 'Common Carotid Artery (CCA)',
        source: 'Right: Brachiocephalic Trunk. Left: Aortic Arch.',
        course: 'Ascends in Carotid Sheath (with IJV & Vagus). Bifurcates at Superior Thyroid Cartilage (C4).',
        branches: [
            'Internal Carotid Artery (ICA)',
            'External Carotid Artery (ECA)'
        ],
        clinicalNotes: 'Carotid Sinus (Baroreceptor) & Body (Chemoreceptor) at bifurcation. Pulse palpated anterior to SCM.',
        imageUrl: commonCarotidArteryImg
    },
    {
        id: 'internal-carotid-artery',
        name: 'Internal Carotid Artery (ICA)',
        source: 'Common Carotid Artery.',
        course: 'Ascends to Carotid Canal (Temporal bone). NO branches in neck. Supplies Brain.',
        branches: [
            'Ophthalmic Artery',
            'Anterior Cerebral Artery',
            'Middle Cerebral Artery',
            'Posterior Communicating Artery'
        ],
        clinicalNotes: 'Risk of stenosis (plaque). Carotid Endarterectomy surgery.',
        imageUrl: internalCarotidArteryImg
    },
    {
        id: 'external-carotid-artery',
        name: 'External Carotid Artery (ECA)',
        source: 'Common Carotid Artery.',
        course: 'Supplies neck, face, external skull. Terminates in Parotid Gland.',
        branches: [
            '1. Superior Thyroid Artery',
            '2. Ascending Pharyngeal Artery',
            '3. Lingual Artery',
            '4. Facial Artery',
            '5. Occipital Artery',
            '6. Posterior Auricular Artery',
            '7. Maxillary Artery (Terminal)',
            '8. Superficial Temporal Artery (Terminal)'
        ],
        clinicalNotes: 'Pulse palpated anterior to ear (Sup Temp) or at mandible angle (Facial).',
        imageUrl: externalCarotidArteryImg
    },
    {
        id: 'vertebral-artery',
        name: 'Vertebral Artery',
        source: 'Subclavian Artery (1st Part).',
        course: 'Ascends through Transverse Foramina (C6-C1). Enters Foramen Magnum. Merges to Basilar Artery.',
        branches: [
            'Spinal branches',
            'Posterior Inferior Cerebellar Artery (PICA)'
        ],
        clinicalNotes: 'Vertebrobasilar Insufficiency (VBI) - check with extension/rotation. Vulnerable at C1/C2 loop.',
        imageUrl: vertebralArteryImg
    },
    {
        id: 'thyrocervical-trunk',
        name: 'Thyrocervical Trunk',
        source: 'Subclavian Artery.',
        course: 'Short trunk.',
        branches: [
            'Inferior Thyroid Artery (Supplies thyroid/parathyroids)',
            'Suprascapular Artery',
            'Transverse Cervical Artery'
        ],
        clinicalNotes: 'Inferior thyroid artery runs near Recurrent Laryngeal Nerve.',
        imageUrl: thyrocervicalTrunkImg
    }
];
