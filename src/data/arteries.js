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
        clinicalNotes: 'Main blood supply to the upper limb.'
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
        clinicalNotes: 'Anterior/Posterior Circumflex arteries wrap around surgical neck of humerus (anastomose).'
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
        clinicalNotes: 'Primary pressure point for controlling hemorrhage in the arm. Blood pressure measurement site.'
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
        clinicalNotes: 'Passes through Anatomical Snuffbox to form Deep Arch. Pulse palpable lateral to FCR.'
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
        clinicalNotes: 'Enters hand superficial to Flexor Retinaculum (Guyon\'s Canal). FCR pulse is key.'
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
        clinicalNotes: 'Allows blood to reach the arm if the flow through the Axillary artery is compromised (e.g., ligation).'
    }
];
