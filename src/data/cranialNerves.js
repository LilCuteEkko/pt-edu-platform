export const cranialNerves = [
    {
        id: 'cn1',
        number: 'I',
        name: 'Olfactory',
        category: 'Head & Neck',
        type: 'Sensory',
        function: 'Smell',
        test: 'Identify familiar odors (coffee, mint) with eyes closed, one nostril at a time.',
        pathology: 'Anosmia (loss of smell) - often first sign of neurodegenerative disease (PD, AD) or frontal lobe trauma.',
        ptRelevance: 'Safety implication: Inability to smell smoke or gas leaks.'
    },
    {
        id: 'cn2',
        number: 'II',
        name: 'Optic',
        category: 'Head & Neck',
        type: 'Sensory',
        function: 'Vision (Acuity and Field)',
        test: 'Snellen chart (acuity), Visual field testing (confrontation), Pupillary light reflex (sensory arm).',
        pathology: 'Visual field cuts (Homonymous hemianopsia), Blindness. MS often presents with Optic Neuritis.',
        ptRelevance: 'Significant impact on balance and fall risk. Visual compensation strategies needed.'
    },
    {
        id: 'cn3',
        number: 'III',
        name: 'Oculomotor',
        category: 'Head & Neck',
        type: 'Motor',
        function: 'Eye movement (Up, Down, Medial), Eyelid elevation, Pupil constriction.',
        test: 'H-Test (tracking), Pupillary reflex (motor arm).',
        pathology: 'Ptosis (drooping lid), "Down and Out" eye deviation, Dilated pupil (blown pupil - emergency!).',
        ptRelevance: 'Diplopia (double vision) affects depth perception and mobility.'
    },
    {
        id: 'cn4',
        number: 'IV',
        name: 'Trochlear',
        category: 'Head & Neck',
        type: 'Motor',
        function: 'Eye movement (Superior Oblique muscle - Down and In).',
        test: 'H-Test (specifically looking down and in).',
        pathology: 'Vertical diplopia, difficulty walking down stairs (eye can\'t look down/in). Patient tilts head AWAY from affected side.',
        ptRelevance: 'Stair safety is compromised.'
    },
    {
        id: 'cn5',
        number: 'V',
        name: 'Trigeminal',
        category: 'Head & Neck',
        type: 'Both',
        function: 'Sensory: Face (V1-V3). Motor: Muscles of Mastication.',
        test: 'Sensory: Light touch/pinprick on face. Motor: Clench teeth (palpate masseter/temporalis), Jaw jerk reflex.',
        pathology: 'Trigeminal Neuralgia (severe pain), mastication weakness.',
        ptRelevance: 'Impaired facial sensation affects safety (shavers, temperature).'
    },
    {
        id: 'cn6',
        number: 'VI',
        name: 'Abducens',
        category: 'Head & Neck',
        type: 'Motor',
        function: 'Eye movement (Lateral Rectus - Abduction).',
        test: 'H-Test (Look laterally).',
        pathology: 'Medial strabismus (eye turns in), Diplopia on lateral gaze.',
        ptRelevance: 'Visual scanning deficits.'
    },
    {
        id: 'cn7',
        number: 'VII',
        name: 'Facial',
        category: 'Head & Neck',
        type: 'Both',
        function: 'Motor: Facial expression. Sensory: Taste (anterior 2/3 tongue).',
        test: 'Smile, frown, puff cheeks, raise eyebrows. Taste testing.',
        pathology: 'Bell\'s Palsy (LMN - whole half of face), Stroke (UMN - lower quadrant only, forehead spared).',
        ptRelevance: 'Dysarthria (slurred speech), drooling, dry eye (corneal reflex efferent).'
    },
    {
        id: 'cn8',
        number: 'VIII',
        name: 'Vestibulocochlear',
        category: 'Head & Neck',
        type: 'Sensory',
        function: 'Hearing and Balance (Vestibular).',
        test: 'Hearing: Rub fingers, Weber/Rinne tests. Balance: Romberg, VOR (Head impulse).',
        pathology: 'Vertigo, Nystagmus, Hearing loss, Tinnitus.',
        ptRelevance: 'Major cause of dizziness and balance dysfunction. Vestibular Rehab is a key PT intervention.'
    },
    {
        id: 'cn9',
        number: 'IX',
        name: 'Glossopharyngeal',
        category: 'Head & Neck',
        type: 'Both',
        function: 'Motor: Pharynx (swallowing). Sensory: Taste (post 1/3), Gag reflex.',
        test: 'Gag reflex (sensory), Voice quality ("Ahhh").',
        pathology: 'Dysphagia (swallowing difficulty), loss of gag reflex.',
        ptRelevance: 'Aspiration risk.'
    },
    {
        id: 'cn10',
        number: 'X',
        name: 'Vagus',
        category: 'Head & Neck',
        type: 'Both',
        function: 'Motor: Pharynx/Larynx, Parasympathetic to viscera (Heart, Lungs, GI). Sensory: Viscera.',
        test: 'Gag reflex (motor), Say "Ahhh" (uvula deviation AWAY from lesion).',
        pathology: 'Hoarseness, Dysphagia, Uvula deviation, Tachycardia (loss of parasympathetic).',
        ptRelevance: 'Autonomic dysfunction, swallowing safety.'
    },
    {
        id: 'cn11',
        number: 'XI',
        name: 'Spinal Accessory',
        category: 'Head & Neck',
        type: 'Motor',
        function: 'SCM and Trapezius muscles.',
        test: 'Shrug shoulders (Traps), Turn head against resistance (SCM).',
        pathology: 'Inability to shrug, winging scapula (less common), weakness turning head.',
        ptRelevance: 'Shoulder dysfunction and neck weakness.'
    },
    {
        id: 'cn12',
        number: 'XII',
        name: 'Hypoglossal',
        category: 'Head & Neck',
        type: 'Motor',
        function: 'Tongue movement.',
        test: 'Stick out tongue.',
        pathology: 'Tongue deviates TOWARD affected side ("Lick your wounds"). Dysarthria.',
        ptRelevance: 'Speech intelligibility and swallowing (bolus manipulation).'
    }
];
