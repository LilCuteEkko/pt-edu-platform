import {
    headNeckContent,
    elbowContent,
    wristHandContent,
    thoracicRibsContent,
    lumbarPelvicContent,
    hipContent,
    footAnkleContent
} from './orthoContent';
import { pharmacologyData } from './pharmacology';
import hydrocolloidImg from '../assets/wound-care/hydrocolloid_dressing_1767664723782.png';
import alginateImg from '../assets/wound-care/alginate_dressing_1767664735037.png';
import foamImg from '../assets/wound-care/foam_dressing_1767664747676.png';
import hydrogelImg from '../assets/wound-care/hydrogel_dressing_1767664766906.png';
import transparentFilmImg from '../assets/wound-care/transparent_film_dressing_1767664779489.png';

// PEDIATRIC ASSETS
import babyProneImg from '../assets/pediatrics/baby_prone.png';
import babyRollingImg from '../assets/pediatrics/baby_rolling.png';
import babySittingImg from '../assets/pediatrics/baby_sitting.png';
import babyCrawlingImg from '../assets/pediatrics/baby_crawling.png';
import babyStandingImg from '../assets/pediatrics/baby_standing.png';
import babyWalkingImg from '../assets/pediatrics/baby_walking.png';
import cpGmfcsImg from '../assets/pediatrics/cp_gmfcs_schematic_1767711382942.png';
import spinaBifidaImg from '../assets/pediatrics/spina_bifida_schematic_1767711400384.png';
import gowersSignImg from '../assets/pediatrics/gowers_sign_schematic_1767711427577.png';
import torticollisImg from '../assets/pediatrics/torticollis_schematic_1767711443571.png';

// Condition Images
import lcpdImg from '../assets/pediatrics/lcpd_schematic.png';
import scfeImg from '../assets/pediatrics/scfe_schematic.png';
import erbsImg from '../assets/pediatrics/erbs_palsy_schematic.png';
import dsImg from '../assets/pediatrics/down_syndrome_schematic.png';
import oiImg from '../assets/pediatrics/oi_schematic.png';
import amcImg from '../assets/pediatrics/amc_schematic.png';

// Special Tests Assets
import barlowImg from '../assets/pediatrics/barlow_test.png';
import ortolaniImg from '../assets/pediatrics/ortolani_test.png';
import galeazziImg from '../assets/pediatrics/galeazzi_sign.png';
import adamsTestImg from '../assets/pediatrics/adams_test.png';
import thomasTestImg from '../assets/pediatrics/thomas_test.png';
import thaTestImg from '../assets/pediatrics/thigh_foot_angle.png';

import arterialUlcerImg from '../assets/wound-care/arterial_ulcer_icon_1767664793931.png';
import venousUlcerImg from '../assets/wound-care/venous_ulcer_icon_1767664807273.png';
import pressureStagingImg from '../assets/wound-care/pressure_injury_staging_1767664821212.png';

const shoulderContent = {
    pathologyInfo: true,
    anatomy: {
        bones: [
            { name: 'Humerus', description: 'The upper arm bone, which articulates with the scapula to form the glenohumeral joint.' },
            { name: 'Scapula', description: 'The shoulder blade, which provides a stable base for movement and serves as an attachment site for numerous muscles.' },
            { name: 'Clavicle', description: 'The collarbone, which connects the sternum to the scapula and provides structural support to the shoulder.' }
        ],
        joints: [
            { name: 'Glenohumeral Joint (GHJ)', description: 'Ball-and-socket joint. Allows flexion, extension, abduction, adduction, IR/ER, and circumduction.' },
            { name: 'Acromioclavicular Joint (ACJ)', description: 'Plane synovial joint between acromion and clavicle.' },
            { name: 'Sternoclavicular Joint (SCJ)', description: 'Saddle joint connecting clavicle to sternum.' },
            { name: 'Scapulothoracic Articulation', description: 'Functional connection between scapula and thoracic cage.' }
        ],
        muscles: {
            rotatorCuff: [
                { name: 'Supraspinatus', action: 'Initiates abduction (first 15°)' },
                { name: 'Infraspinatus', action: 'External rotation' },
                { name: 'Teres Minor', action: 'External rotation' },
                { name: 'Subscapularis', action: 'Internal rotation' }
            ],
            other: [
                { name: 'Deltoid', action: 'Abduction (>15°)' },
                { name: 'Pectoralis Major', action: 'IR, flexion, adduction' },
                { name: 'Pectoralis Minor', action: 'Scapular stabilization' },
                { name: 'Latissimus Dorsi', action: 'Adduction, extension, IR' },
                { name: 'Trapezius', action: 'Scapular elevation/depression/retraction' },
                { name: 'Serratus Anterior', action: 'Scapular protraction/upward rotation' },
                { name: 'Levator Scapulae', action: 'Scapular elevation' },
                { name: 'Rhomboids', action: 'Scapular retraction' }
            ]
        },
        ligaments: [
            { name: 'Coracoacromial', description: 'Prevents superior displacement of humeral head.' },
            { name: 'Coracoclavicular', description: 'Stabilizes AC joint.' },
            { name: 'Glenohumeral (Sup/Mid/Inf)', description: 'Reinforce capsule, prevent excessive movement.' },
            { name: 'Transverse Humeral', description: 'Holds long head of biceps tendon.' }
        ],
        neurovascular: {
            nerves: ['Brachial Plexus (C5-T1)', 'Axillary Nerve (Deltoid/Teres Minor)', 'Suprascapular Nerve (Supra/Infra)', 'Musculocutaneous Nerve (Biceps/Brachialis)'],
            vascular: ['Subclavian Artery', 'Axillary Artery', 'Brachial Artery']
        }
    },
    function: {
        biomechanics: [
            'Scapulohumeral Rhythm: 2:1 ratio (2° humeral elevation for every 1° scapular rotation).',
            'Force Couples: Deltoid (Upward) vs Rotator Cuff (Compress/Depress) to prevent impingement.',
            'Scapular Stability: Essential for proper GH joint mechanics.'
        ],
        rom: [
            { movement: 'Flexion', value: '0-180°' },
            { movement: 'Extension', value: '0-60°' },
            { movement: 'Abduction', value: '0-180°' },
            { movement: 'Internal Rotation', value: '0-70° (at side), 0-90° (at 90° abd)' },
            { movement: 'External Rotation', value: '0-90°' }
        ],
        commonConditions: [
            { category: 'Rotator Cuff', conditions: 'Tendinopathy, Tears, Impingement, Calcific Tendinitis' },
            { category: 'Instability', conditions: 'Anterior/Posterior/MDI, Labral Tears (SLAP/Bankart)' },
            { category: 'Impingement', conditions: 'Subacromial, Internal' },
            { category: 'Bursitis/Tendonitis', conditions: 'Subacromial Bursitis, Biceps Tendinitis' },
            { category: 'Traumatic', conditions: 'Dislocations, AC Separation, Fractures' },
            { category: 'Adhesive/Degenerative', conditions: 'Frozen Shoulder, OA, RA' },
            { category: 'Nerve', conditions: 'TOS, Suprascapular/Axillary Nerve Palsy' }
        ]
    },
    specialTests: [
        {
            category: 'Rotator Cuff', tests: [
                { name: 'Empty Can (Jobe\'s)', purpose: 'Supraspinatus', positive: 'Pain/weakness in abduction' },
                { name: 'Drop Arm', purpose: 'Full-thickness Tear', positive: 'Inability to hold arm' },
                { name: 'ER Lag Sign', purpose: 'Infraspinatus/Teres Minor', positive: 'Lag into IR' },
                { name: 'Lift-Off', purpose: 'Subscapularis', positive: 'Inability to lift hand from back' }
            ]
        },
        {
            category: 'Impingement', tests: [
                { name: 'Neer\'s', purpose: 'Subacromial Impingement', positive: 'Pain with forced flexion' },
                { name: 'Hawkins-Kennedy', purpose: 'Impingement', positive: 'Pain with passive IR' },
                { name: 'Painful Arc', purpose: 'General Impingement', positive: 'Pain 60°-120°' }
            ]
        },
        {
            category: 'Instability', tests: [
                { name: 'Apprehension/Relocation', purpose: 'Anterior Instability', positive: 'Fear/Pain / Relief' },
                { name: 'Sulcus Sign', purpose: 'MDI/Inferior Instability', positive: 'Visible dimple below acromion' },
                { name: 'Jerk Test', purpose: 'Posterior Instability', positive: 'Pain/Clunk with adduction' }
            ]
        },
        {
            category: 'Labral', tests: [
                { name: 'O\'Brien\'s', purpose: 'SLAP Lesion', positive: 'Pain IR > ER' },
                { name: 'Crank Test', purpose: 'Labral Pathology', positive: 'Clicking/Pain' },
                { name: 'Biceps Load II', purpose: 'SLAP', positive: 'Pain resisted flexion' }
            ]
        },
        {
            category: 'Other', tests: [
                { name: 'Speed\'s / Yergason\'s', purpose: 'Biceps Tendinitis', positive: 'Pain bicipital groove' },
                { name: 'Cross-Body Adduction', purpose: 'AC Joint', positive: 'Pain at AC joint' },
                { name: 'Adson\'s / Roos', purpose: 'TOS', positive: 'Pulse loss / Symptoms reproduction' }
            ]
        }
    ]
};

const kneeContent = {
    pathologyInfo: true,
    anatomy: {
        bones: [
            { name: 'Femur', description: 'Distal femur forms the femoral condyles/trochlea.' },
            { name: 'Tibia', description: 'Proximal tibia (tibial plateau) bears weight.' },
            { name: 'Fibula', description: 'Non-weight bearing, attachment site for LCL/Biceps Femoris.' },
            { name: 'Patella', description: 'Sesamoid bone acting as a fulcrum to increase quad leverage.' }
        ],
        joints: [
            { name: 'Tibiofemoral Joint (TFJ)', description: 'Modified hinge joint (double condyloid). Flexion/Extension + some rotation.' },
            { name: 'Patellofemoral Joint (PFJ)', description: 'Articulation between patella and femoral trochlea. High reaction forces.' },
            { name: 'Proximal Tibiofibular Joint', description: 'Plane synovial joint nearby.' }
        ],
        muscles: {
            quadriceps: [
                { name: 'Rectus Femoris', action: 'Knee Ext / Hip Flex' },
                { name: 'Vastus Medialis (VMO)', action: 'Extension / Patellar stability' },
                { name: 'Vastus Lateralis/Intermedius', action: 'Knee Extension' }
            ],
            hamstrings: [
                { name: 'Biceps Femoris', action: 'Flexion / ER' },
                { name: 'Semitendinosus/Membranosus', action: 'Flexion / IR' }
            ],
            other: [
                { name: 'Popliteus', action: 'Unlocks knee (IR of tibia)' },
                { name: 'Gastrocnemius', action: 'Knee Flexion / Plantarflexion' },
                { name: 'TFL/IT Band', action: 'Lateral stability' },
                { name: 'Sartorius/Gracilis', action: 'Pes Anserine group (Flexion/IR)' }
            ]
        },
        ligaments: [
            { name: 'ACL', description: 'Prevents anterior tibial translation & rotation.' },
            { name: 'PCL', description: 'Prevents posterior tibial translation.' },
            { name: 'MCL', description: 'Resists valgus stress.' },
            { name: 'LCL', description: 'Resists varus stress.' },
            { name: 'Menisci (Med/Lat)', description: 'Fibrocartilage for shock absorption & congruency.' }
        ],
        neurovascular: {
            nerves: ['Femoral Nerve (Quads)', 'Sciatic -> Tibial/Common Peroneal (Hamstrings/Lower Leg)', 'Saphenous Nerve (Sensory medial knee)'],
            vascular: ['Popliteal Artery', 'Genicular Arteries (Anastomosis)']
        }
    },
    specialTests: [
        {
            category: 'Ligamentous', tests: [
                { name: 'Lachman\'s', purpose: 'ACL (Gold Std)', positive: 'Soft end feel / translation' },
                { name: 'Anterior Drawer', purpose: 'ACL', positive: 'Excessive ant. translation' },
                { name: 'Posterior Drawer', purpose: 'PCL', positive: 'Excessive post. translation' },
                { name: 'Valgus Stress', purpose: 'MCL', positive: 'Laxity at 30° (Iso) or 0° (Combined)' },
                { name: 'Varus Stress', purpose: 'LCL', positive: 'Laxity at 30° flexion' }
            ]
        },
        {
            category: 'Meniscal', tests: [
                { name: 'McMurray\'s', purpose: 'Meniscus tear', positive: 'Click/Pain with Rot+Ext' },
                { name: 'Thessaly', purpose: 'Meniscus (func)', positive: 'Pain twisting on 1 leg' },
                { name: 'Apley\'s Compression', purpose: 'Meniscus', positive: 'Pain with compression' }
            ]
        },
        {
            category: 'Patellofemoral', tests: [
                { name: 'Patellar Apprehension', purpose: 'Patellar instability', positive: 'Contraction/Fear' },
                { name: 'Clarke\'s Sign', purpose: 'PF Pain/Chondromalacia', positive: 'Pain with quad set' },
                { name: 'Noble Compression', purpose: 'IT Band Friction', positive: 'Pain at 30° flexion' }
            ]
        }
    ],
    function: {
        biomechanics: [
            'Screw Home Mechanism: Tibia ERs (open chain) or Femur IRs (closed chain) to lock knee in full extension.',
            'Q-Angle: Angle between ASIS-MidPatella and Tibial Tuberosity. > in females.',
            'Patellar Tracking: Dependent on VMO/ITB balance and hip strength.'
        ],
        rom: [
            { movement: 'Flexion', value: '0-135° (up to 150° passive)' },
            { movement: 'Extension', value: '0° (up to 5-10° hyperextension)' },
            { movement: 'Tibial Internal Rotation', value: '10-20° (at 90° flexion)' },
            { movement: 'Tibial External Rotation', value: '30-40° (at 90° flexion)' }
        ],
        commonConditions: [
            { category: 'Ligamentous', conditions: 'ACL/PCL Hx, MCL/LCL Sprains' },
            { category: 'Meniscal', conditions: 'Traumatic Tears (Bucket handle), Degenerative' },
            { category: 'Patellofemoral', conditions: 'PFPS (Runner\'s Knee), Chondromalacia, Dislocation' },
            { category: 'Tendinopathy', conditions: 'Patellar Tendinitis (Jumper\'s Knee), Pes Anserine' },
            { category: 'Pediatric', conditions: 'Osgood-Schlatter' }
        ]
    }
};




export const physiologyTopics = [
    {
        id: 'neuromuscular',
        title: 'Neuromuscular Physiology',
        description: 'The complex interplay between the nervous system and muscle fibers that enables movement.',
        icon: 'Brain',
        subtopics: [
            {
                id: 'action-potential',
                title: 'Action Potential (Neural)',
                introduction: 'An action potential is a rapid sequence of changes in the voltage across a membrane. The membrane voltage, or potential, is determined at any time by the relative ratio of ions, extracellular to intracellular, and the permeability of each ion.',
                content: [
                    'Resting State: Membrane potential is ~-70mV. Na+ channels are closed.',
                    'Depolarization: Stimulus opens Na+ channels. Na+ rushes IN (influx). Potential rises to +30mV.',
                    'Repolarization: Na+ channels close. K+ channels open. K+ rushes OUT (efflux). Potential falls.',
                    'Hyperpolarization: K+ channels remain open slightly longer, potential dips below -70mV.',
                    'Refractory Period: Na+/K+ pump restores resting balance (3 Na+ out, 2 K+ in).'
                ],
                clinicalRelevance: 'Demyelinating diseases (e.g., Multiple Sclerosis) disrupt saltatory conduction, slowing signal velocity and causing motor/sensory deficits.',
                pathologyConnection: 'Guillain-Barré Syndrome: Acute inflammatory demyelinating polyneuropathy affecting the PNS.'
            },
            {
                id: 'nmj',
                title: 'Neuromuscular Junction (NMJ)',
                introduction: 'The synapse between a motor neuron and a muscle fiber. This is where the electrical signal is converted into a chemical signal to trigger contraction.',
                content: [
                    'AP arrives at the axon terminal of the motor neuron.',
                    'Voltage-gated Calcium channels open; Ca2+ moves into the terminal.',
                    'Ca2+ triggers exocytosis of synaptic vesicles containing Acetylcholine (ACh).',
                    'ACh diffuses across the synaptic cleft and binds to Nicotinic receptors on the Motor End Plate.',
                    'Na+ channels on the muscle open, causing depolarization (End Plate Potential).',
                    'ACh is broken down by Acetylcholinesterase (AChE) to stop the signal.'
                ],
                clinicalRelevance: 'Drugs like Curare block Nicotinic receptors, preventing contraction (paralysis). Botox prevents ACh release.',
                pathologyConnection: 'Myasthenia Gravis: Autoimmune antibodies attack ACh receptors at the NMJ, causing progressive weakness.'
            },
            {
                id: 'brain-anatomy',
                title: 'Interactive Brain Anatomy',
                introduction: 'Explore the major regions of the brain. Click on a lobe to learn about its function and relevance to physical therapy.',
                type: 'interactive-brain',
                content: [], // Handled by interactive component
                lobes: [
                    {
                        id: 'frontal',
                        name: 'Frontal Lobe',
                        functions: 'Voluntary movement (Primary Motor Cortex), Executive function, Personality, Broca\'s Area (Motor Speech), Planning & Sequencing.',
                        damage: 'Middle Cerebral Artery (MCA) strokes often affect the lateral aspect (Face/Arm), while Anterior Cerebral Artery (ACA) strokes affect the medial aspect (Leg). Results in contralateral hemiparesis, expressive aphasia (Broca\'s), and emotional lability.',
                        subRegions: [
                            { name: 'Prefrontal Cortex', func: 'Personality, Decision making, Impulse control' },
                            { name: 'Primary Motor Cortex', func: 'Execution of contralateral movement' },
                            { name: 'Broca\'s Area', func: 'Motor production of speech (Left Hemisphere)' },
                            { name: 'Premotor Cortex', func: 'Motor planning and trunk stability' }
                        ],
                        vascularSupply: 'ACA (Medial Surface), MCA (Lateral Surface)',
                        rehabFocus: 'Task-specific training, Dual-tasking (Cognitive-Motor), Constraint-Induced Movement Therapy (CIMT), Speech therapy collaboration.'
                    },
                    {
                        id: 'parietal',
                        name: 'Parietal Lobe',
                        functions: 'Sensation (Primary Somatosensory Cortex), Spatial awareness, Proprioception, Integration of sensory inputs.',
                        damage: 'Lesions lead to contralateral sensory loss. Right-sided lesions often cause Hemineglect (ignoring left side of space/body). Left-sided lesions may cause Agraphia, Acalculia, or Apraxia.',
                        subRegions: [
                            { name: 'Primary Somatosensory Cortex', func: 'Processing touch, pain, temp, proprioception' },
                            { name: 'Posterior Parietal Cortex', func: 'Spatial awareness and body schema' },
                            { name: 'Wernicke\'s Area (Part)', func: 'Language comprehension (Superior region)' }
                        ],
                        vascularSupply: 'ACA (Medial), MCA (Lateral)',
                        rehabFocus: 'Sensory re-education, Visual scanning strategies (Lighthouse technique), Mirror therapy, Bilateral integration.'
                    },
                    {
                        id: 'temporal',
                        name: 'Temporal Lobe',
                        functions: 'Hearing (Auditory Cortex), Memory (Hippocampus), Wernicke\'s Area (Language Comprehension), Emotion (Amygdala).',
                        damage: 'Wernicke\'s Aphasia: Fluent but meaningless speech. Memory deficits (anterograde amnesia) if Hippocampus involved. Auditory processing issues.',
                        subRegions: [
                            { name: 'Hippocampus', func: 'Formation of new long-term memories' },
                            { name: 'Amygdala', func: 'Emotional processing (Fear/Aggression)' },
                            { name: 'Primary Auditory Cortex', func: 'Processing sound' },
                            { name: 'Wernicke\'s Area', func: 'Language comprehension' }
                        ],
                        vascularSupply: 'MCA (Lateral surface), PCA (Inferior/Medial surface)',
                        rehabFocus: 'Communication strategies (simplify commands), Memory aids (journals/apps), Errorless learning techniques.'
                    },
                    {
                        id: 'occipital',
                        name: 'Occipital Lobe',
                        functions: 'Visual processing (Primary Visual Cortex).',
                        damage: 'Cortical blindness (Anton\'s Syndrome) or visual field cuts such as Contralateral Homonymous Hemianopsia. Can affect balance due to reliance on vision.',
                        subRegions: [
                            { name: 'Primary Visual Cortex (V1)', func: 'Basic visual processing' },
                            { name: 'Visual Association Areas', func: 'Interpretation of visual info (Color, Motion)' }
                        ],
                        vascularSupply: 'Posterior Cerebral Artery (PCA)',
                        rehabFocus: 'Visual scanning, environmental adaptations (lighting/contrast), fall prevention strategies.'
                    },
                    {
                        id: 'cerebellum',
                        name: 'Cerebellum',
                        functions: 'Coordination (Ataxia), Balance, Motor Learning, Fine motor control, Eye movement control.',
                        damage: 'Damage causes Ipsilateral Ataxia, Dysmetria (overshooting), Dysdiadochokinesia (impaired rapid alternating movements), and Intention Tremors.',
                        subRegions: [
                            { name: 'Vermis', func: 'Trunk stability and gait' },
                            { name: 'Hemispheres', func: 'Limb coordination' },
                            { name: 'Flocculonodular Lobe', func: 'Vestibular interaction (Balance/Eye movements)' }
                        ],
                        vascularSupply: 'SCA, AICA, PICA (Vertebrobasilar system)',
                        rehabFocus: 'Frenkel exercises, Weighted vests (for tremors), Proximal stability training, Balance/Vestibular therapy.'
                    },
                    {
                        id: 'brainstem',
                        name: 'Brainstem',
                        functions: 'Vital functions (Heart rate, Breathing), Alertness (Reticular Activating System), Cranial Nerve nuclei integration.',
                        damage: 'Strokes here are critical. Can cause "Locked-In Syndrome" (quadriplegia with preserved consciousness/eye movement). Dysphagia and Dysarthria are common.',
                        subRegions: [
                            { name: 'Midbrain', func: 'Eye movement, Auditory/Visual reflexes' },
                            { name: 'Pons', func: 'Breathing control, Relay to Cerebellum' },
                            { name: 'Medulla', func: 'HR/BP regulation, Decussation of Pyramids' }
                        ],
                        vascularSupply: 'Basilar Artery, Vertebral Arteries',
                        rehabFocus: 'Upright tolerance (tilt table), Respiratory training, Contracture prevention, Sensory stimulation (coma stim).'
                    }
                ]
            },
            {
                id: 'stroke-syndromes',
                title: 'Stroke (CVA) Syndromes',
                introduction: 'A stroke occurs when blood flow to an area of the brain is cut off. The specific deficits depend on which artery is affected.',
                type: 'pathology-grid',
                clinicalRelevance: 'Recognizing these patterns allows for rapid localization of the lesion and tailored rehabilitation strategies.',
                pathologyConnection: 'Ischemic (87%) vs. Hemorrhagic (13%). Risk factors: HTN, Diabetes, Atrial Fibrillation.',
                pathologies: [
                    {
                        id: 'mca',
                        name: 'Middle Cerebral Artery',
                        acronym: 'MCA',
                        icon: 'Brain',
                        description: 'The most common site of stroke, affecting the lateral surface of the frontal, temporal, and parietal lobes.',
                        keyFeatures: [
                            'Contralateral Hemiparesis (Face/Arm > Leg)',
                            'Contralateral Hemi-sensory loss',
                            'Aphasia (Left hemisphere)',
                            'Neglect (Right hemisphere)'
                        ],
                        ptIntervention: 'Task-oriented training, Constraint-Induced Movement Therapy (CIMT), Gait training, Speech therapy collaboration.',
                        details: {
                            overview: 'MCA strokes affect the lateral cerebral cortex. The nature of deficits depends heavily on hemispheric dominance.',
                            anatomy: [
                                'Supplies: Lateral Frontal, Temporal, and Parietal lobes.',
                                'Structures: Primary Motor/Sensory cortex (Face/Arm areas), Broca\'s, Wernicke\'s, Optic Radiations.'
                            ],
                            physiology: [
                                'Ischemia: Lack of blood flow leads to cytotoxic edema and cell death.',
                                'Penumbra: The salvageable area surrounding the core infarct is the target of acute therapy (tPA, Thrombectomy).'
                            ],
                            stats: [
                                { label: 'Frequency', value: 'Most common (approx 70% of infarcts)' },
                                { label: 'Upper Ext.', value: 'More affected than Lower Ext.' },
                                { label: 'Gaze', value: 'Deviates TOWARD the lesion' }
                            ],
                            medications: [
                                { name: 'tPA (Alteplase)', mechanism: 'Thrombolytic', effect: 'Dissolves clot (within 4.5hrs).' },
                                { name: 'Aspirin/Plavix', mechanism: 'Antiplatelet', effect: 'Prevents recurrence.' },
                                { name: 'Statins', mechanism: 'Lipid lowering', effect: 'Plaque stabilization.' }
                            ],
                            medicalInterventions: [
                                'Mechanical Thrombectomy: Large Vessel Occlusion (LVO) retrieval.',
                                'Decompressive Hemicraniectomy: For malignant MCA edema.'
                            ],
                            ptManagement: [
                                { stage: 'Acute', focus: 'Mobilization: Early mobilization (within 24-48h), positioning for hemiplegic shoulder.' },
                                { stage: 'Subacute', focus: 'Re-learning: High repetition task practice, transfer training, CIMT.' },
                                { stage: 'Chronic', focus: 'Adaptation/Maintenance: Community reintegration, fall prevention.' }
                            ]
                        }
                    },
                    {
                        id: 'aca',
                        name: 'Anterior Cerebral Artery',
                        acronym: 'ACA',
                        icon: 'Activity',
                        description: 'Affects the medial surface of the frontal and parietal lobes, impacting lower extremity motor/sensory function.',
                        keyFeatures: [
                            'Contralateral Hemiparesis (Leg > Arm)',
                            'Urinary Incontinence',
                            'Abulia (lack of will/initiative)',
                            'Personality changes'
                        ],
                        ptIntervention: 'Gait training (significant deficits), dual-task training for cognitive involvement, bladder management strategies.',
                        details: {
                            overview: 'ACA strokes are less common and affect the medial aspect of the brain. They are strongly associated with lower extremity deficits and frontal release signs.',
                            anatomy: [
                                'Supplies: Medial Frontal and Parietal lobes.',
                                'Structures: Motor/Sensory homunculus (Leg/Foot area), Prefrontal cortex, Cingulate gyrus.'
                            ],
                            physiology: [
                                'Collateral Flow: The Circle of Willis usually provides good collateral flow via the Anterior Communicating Artery, making ACA infarcts rare.'
                            ],
                            stats: [
                                { label: 'Frequency', value: '<3% of ischemic strokes' },
                                { label: 'Lower Ext.', value: 'More affected than Upper Ext.' },
                                { label: 'Cognition', value: 'Executive dysfunction common' }
                            ],
                            medications: [
                                { name: 'Anticoagulants', mechanism: 'Blood thinners', effect: 'If cardioembolic source.' },
                                { name: 'Antihypertensives', mechanism: 'BP Control', effect: 'Stroke prevention.' }
                            ],
                            medicalInterventions: [
                                'Conservative Management: Often used as thrombectomy is harder in distal ACA.'
                            ],
                            ptManagement: [
                                { stage: 'Mobility', focus: 'Gait: Focus on foot clearance and stability. Body weight support treadmill training.' },
                                { stage: 'Cognitive', focus: 'Engagement: Addressing abulia/apathy with highly stimulating activities.' },
                                { stage: 'Safety', focus: 'Impulsivity: Safety awareness training due to frontal lobe disinhibition.' }
                            ]
                        }
                    },
                    {
                        id: 'pca',
                        name: 'Posterior Cerebral Artery',
                        acronym: 'PCA',
                        icon: 'Eye',
                        description: 'Affects the occipital lobe and thalamus, primarily causing visual and sensory deficits.',
                        keyFeatures: [
                            'Contralateral Homonymous Hemianopsia',
                            'Visual Agnosia (can\'t recognize objects)',
                            'Thalamic Pain Syndrome',
                            'Memory Loss'
                        ],
                        ptIntervention: 'Visual scanning strategies, sensory re-education, environmental modification/safety.',
                        details: {
                            overview: 'PCA strokes impact the visual cortex and deep structures. While motor deficits may be mild, sensory and visual loss can be profound.',
                            anatomy: [
                                'Supplies: Occipital lobe, Inferior Temporal lobe, Thalamus.',
                                'Structures: Visual Cortex, Thalamus, Hippocampus, Midbrain.'
                            ],
                            physiology: [
                                'Visual Pathway: Lesion posterior to optic chiasm causes contralateral field cut.',
                                'Sensory Processing: Thalamic damage disrupts sensory relay.'
                            ],
                            stats: [
                                { label: 'Vision', value: 'Hallmark deficit (Field cuts)' },
                                { label: 'Pain', value: 'Central post-stroke pain is common' }
                            ],
                            medications: [
                                { name: 'Gabapentin/Lyrica', mechanism: 'Calcium channel blocker', effect: 'Treats Thalamic Pain.' },
                                { name: 'Amitriptyline', mechanism: 'TCA', effect: 'Neuropathic pain.' }
                            ],
                            medicalInterventions: [
                                'Angioplasty/Stenting: For vertebrobasilar stenosis.'
                            ],
                            ptManagement: [
                                { stage: 'Visual', focus: 'Compensation: Teaching head turning, using "Lighthouse" strategy for scanning.' },
                                { stage: 'Sensory', focus: 'Desensitization: For hypersensitivity/allodynia. Protection for sensation loss.' },
                                { stage: 'Balance', focus: 'Vestibular: Addressing dizziness/vertigo if brainstem involved.' }
                            ]
                        }
                    },
                    {
                        id: 'vertebrobasilar',
                        name: 'Vertebrobasilar Artery',
                        acronym: 'VBA',
                        icon: 'AlertTriangle',
                        description: 'Catastrophic strokes affecting the brainstem and cerebellum. Can be life-threatening.',
                        keyFeatures: [
                            'The 4 D\'s: Dizziness, Diplopia, Dysphagia, Dysarthria',
                            'Ataxia / Incoordination',
                            'Locked-In Syndrome',
                            'Crossed Signs (Face vs Body)'
                        ],
                        ptIntervention: 'Balance (Vestibular) rehab, coordination training, core stability, maximal assistance for mobility in severe cases.',
                        details: {
                            overview: 'The vertebrobasilar system supplies the brainstem and cerebellum. Occlusion here is critical as it controls vital functions and arousal.',
                            anatomy: [
                                'Supplies: Brainstem (Midbrain, Pons, Medulla), Cerebellum.',
                                'Structures: Cranial Nerve Nuclei, Reticular Formation, Cerebellar Peduncles.'
                            ],
                            physiology: [
                                'Autonomic Control: Infarcts can cause respiratory arrest or cardiac instability.',
                                'Consciousness: Reticular Activating System damage -> Coma.'
                            ],
                            stats: [
                                { label: 'Mortality', value: 'High (>80% in acute basilar occlusion)' },
                                { label: 'Presentation', value: 'Often "stuttering" TIA symptoms' }
                            ],
                            medications: [
                                { name: 'Anticoagulation', mechanism: 'Heparin/Coumadin', effect: 'Critical for large vessel thrombosis.' }
                            ],
                            medicalInterventions: [
                                'Intra-arterial Thrombolysis: Extended window for basilar occlusion.',
                                'Tracheostomy/PEG: For long-term life support.'
                            ],
                            ptManagement: [
                                { stage: 'Acute', focus: 'Prevention: Contractures, pneumonia prevention, positioning.' },
                                { stage: 'Functional', focus: 'Communication: Establishing eye-gaze systems (Locked-In). sitting balance.' },
                                { stage: 'Recovery', focus: 'Ataxia: Weighted vests, proximal stability for distal coordination.' }
                            ]
                        }
                    },
                    {
                        id: 'lacunar',
                        name: 'Lacunar Stroke',
                        acronym: 'LAc',
                        icon: 'ShieldAlert',
                        description: 'Small vessel disease strokes affecting deep penetrating arteries. Often "Pure Motor" or "Pure Sensory".',
                        keyFeatures: [
                            'Pure Motor Hemiparesis',
                            'Pure Sensory Stroke',
                            'Ataxic Hemiparesis',
                            'No cortical signs (aphasia/neglect)'
                        ],
                        ptIntervention: 'Standard hemiparetic rehab focused on specific deficits. Generally better prognosis.',
                        details: {
                            overview: 'Lacunar infarcts are small (<15mm) non-cortical strokes caused by occlusion of single penetrating branches of large cerebral arteries.',
                            anatomy: [
                                'Supplies: Deep white matter, Basal Ganglia, Pons.',
                                'Structures: Internal Capsule (Post limb = Motor), Thalamus (VPL = Sensory).'
                            ],
                            physiology: [
                                'Lipohyalinosis: Thickening of vessel walls due to Hypertension.',
                                'Microatheroma: Small plaques blocking small vessels.'
                            ],
                            stats: [
                                { label: 'Association', value: 'Chronic HTN & Diabetes' },
                                { label: 'Prognosis', value: 'Better functional recovery vs Large Vessel' }
                            ],
                            medications: [
                                { name: 'Dual Antiplatelet', mechanism: 'ASA + Plavix', effect: 'Short term prevention.' },
                                { name: 'BP Control', mechanism: 'Various', effect: 'Primary prevention of recurrence.' }
                            ],
                            medicalInterventions: [
                                'Risk Factor Management: Aggressive control of Blood Pressure and Glucose.'
                            ],
                            ptManagement: [
                                { stage: 'Rehab', focus: 'Specifics: Address the isolated deficit (e.g., pure weakness -> strengthening).' },
                                { stage: 'Prevention', focus: 'Lifestyle: Education on exercise to control HTN/Diabetes.' }
                            ]
                        }
                    }
                ]
            },
            {
                id: 'neuro-pathologies',
                title: 'Neurological Pathologies',
                introduction: 'Common neurological conditions affecting movement, sensation, and function. Understanding the pathophysiology guides the physical therapy approach.',
                type: 'pathology-grid',
                clinicalRelevance: 'Each condition presents unique progressive or non-progressive challenges requiring tailored neuro-reeducation strategies.',
                pathologyConnection: 'Includes degenerative (ALS, PD), autoimmune (GBS), developmental (ASD), and traumatic (SCI, TBI) etiologies.',
                pathologies: [
                    {
                        id: 'als',
                        name: 'Amyotrophic Lateral Sclerosis',
                        acronym: 'ALS',
                        description: 'Rapidly progressive neurodegenerative disease affecting both Upper Motor Neurons (UMN) and Lower Motor Neurons (LMN).',
                        keyFeatures: [
                            'Asymmetric weakness (distal to proximal)',
                            'UMN signs: Spasticity, hyperreflexia',
                            'LMN signs: Atrophy, fasciculations',
                            'Respiratory failure is common cause of death'
                        ],
                        ptIntervention: 'Energy conservation, maximizing function with adaptive equipment (A/E), respiratory care, range of motion (ROM) to prevent contractures.',
                        icon: 'Activity',
                        details: {
                            overview: 'Amyotrophic Lateral Sclerosis (ALS), also known as Lou Gehrig\'s Disease, is a fatal motor neuron disease characterized by the degeneration of nerve cells in the brain and spinal cord.',
                            anatomy: [
                                'Upper Motor Neurons (UMN): Betz cells in the motor cortex descend via the Corticospinal Tract. Degeneration leads to spasticity and hyperreflexia.',
                                'Lower Motor Neurons (LMN): Anterior Horn Cells in the spinal cord and motor nuclei in the brainstem. Degeneration leads to weakness, atrophy, and fasciculations.',
                                'Sparing: Oculomotor (eye movements) and Onu\'s nucleus (bowel/bladder control) are typically spared until late stages.'
                            ],
                            physiology: [
                                'Glutamate Excitotoxicity: Excess glutamate accumulates in the synaptic cleft, overstimulating neurons and causing cell death.',
                                'Oxidative Stress: Free radicals damage cellular components (mitochondria, DNA).',
                                'Protein Aggregation: Abnormal accumulation of proteins (e.g., TDP-43, SOD1) disrupts cellular function.',
                                'Neuroinflammation: Activation of microglia and astrocytes contributes to motor neuron death.'
                            ],
                            stats: [
                                { label: 'Incidence', value: '2 per 100,000' },
                                { label: 'Prevalence', value: '5-7 per 100,000' },
                                { label: 'Median Survival', value: '3-5 years (10% live >10 years)' },
                                { label: 'Age of Onset', value: '55-75 years (Sporadic)' },
                                { label: 'Gender Ratio', value: '1.5:1 (Male > Female)' }
                            ],
                            medications: [
                                { name: 'Riluzole (Rilutek)', mechanism: 'Glutamate inhibitor', effect: 'Prolongs survival by ~3 months.' },
                                { name: 'Edaravone (Radicava)', mechanism: 'Free radical scavenger', effect: 'Slows functional decline.' },
                                { name: 'Tofersen (Qalsody)', mechanism: 'SOD1 antisense oligonucleotide', effect: 'Targets specific genetic mutation (SOD1-ALS).' }
                            ],
                            medicalInterventions: [
                                'Non-Invasive Ventilation (BiPAP): Key for respiratory support as diaphragm weakens.',
                                'PEG Tube (Feeding): For dysphagia and maintaining nutrition/weight.',
                                'Tracheostomy/Ventilation: Advanced life support option if chosen by patient.'
                            ],
                            ptManagement: [
                                { stage: 'Early', focus: 'Restorative/Preventative: Aerobic/strengthening (avoid overwork fatigue), AROM, stretching.' },
                                { stage: 'Middle', focus: 'Compensatory: AFOs for foot drop, wheelchair prescription, home modifications, energy conservation.' },
                                { stage: 'Late', focus: 'Palliative: Positioning to prevent decubitus ulcers, caregiver training, passive ROM, pain management.' }
                            ]
                        }
                    },
                    {
                        id: 'asd',
                        name: 'Autism Spectrum Disorder',
                        acronym: 'ASD',
                        description: 'Developmental disorder characterized by difficulties in social interaction, communication, and restricted/repetitive patterns of behavior.',
                        keyFeatures: [
                            'Motor coordination deficits (dyspraxia)',
                            'Sensory processing differences (Hyper/Hypo)',
                            'Toe walking is common',
                            'Hypotonia'
                        ],
                        ptIntervention: 'Motor planning (obstacle courses), sensory integration, core strengthening, coordination training. Structure and routine are vital.',
                        icon: 'User',
                        details: {
                            overview: 'Autism Spectrum Disorder (ASD) is a developmental disability caused by differences in the brain. People with ASD may behave, communicate, interact, and learn in ways that are different from most other people.',
                            anatomy: [
                                'Cerebellum: Reduced Purkinje cell density, impacting motor learning and coordination.',
                                'Amygdala: Emotion processing differences.',
                                'Frontal Cortex: Early overgrowth followed by arrested growth, affecting executive function.',
                                'Connectivity: "Short-range over-connectivity, long-range under-connectivity".'
                            ],
                            physiology: [
                                'Synaptic Pruning: Deficits in normal pruning processes lead to excess synapses.',
                                'E/I Imbalance: Imbalance between Excitatory (Glutamate) and Inhibitory (GABA) signaling.',
                                'Sensory Processing: Altered neural responses to sensory stimuli (auditory, tactile).'
                            ],
                            stats: [
                                { label: 'Prevalence', value: '1 in 36 children (CDC 2023)' },
                                { label: 'Gender Ratio', value: '4:1 (Male > Female)' },
                                { label: 'Genetics', value: 'Heritability estimated at 40-80%' },
                                { label: 'Comorbidities', value: 'ADHD, Anxiety, seizures, GI issues' }
                            ],
                            medications: [
                                { name: 'Risperidone/Aripiprazole', mechanism: 'Antipsychotics', effect: 'Treats irritability and aggression.' },
                                { name: 'Stimulants', mechanism: 'Dopamine/NE reuptake inhibitors', effect: 'Focus/Attention (for ADHD comorbidity).' },
                                { name: 'SSRI', mechanism: 'Serotonin reuptake inhibitor', effect: 'Anxiety/Depression.' }
                            ],
                            medicalInterventions: [
                                'Behavioral Therapy (ABA): Standard of care for skill acquisition.',
                                'Speech Therapy: Communication and social pragmatics.',
                                'Occupational Therapy: ADLs and Sensory Integration.'
                            ],
                            ptManagement: [
                                { stage: 'Toddler', focus: 'Motor Milestones: Addressing delays in walking/crawling.' },
                                { stage: 'School Age', focus: 'Coordination/Participaton: PE skills, ball skills, bike riding, social motor play.' },
                                { stage: 'Adolescence', focus: 'Fitness/Posturer: Correction of posture, promoting lifelong physical activity.' }
                            ]
                        }
                    },
                    {
                        id: 'gbs',
                        name: 'Guillain-Barré Syndrome',
                        acronym: 'GBS',
                        description: 'Acute autoimmune destruction of myelin in the Peripheral Nervous System (PNS), often triggered by infection (e.g., Campylobacter).',
                        keyFeatures: [
                            'Symmetrical ascending weakness ("Toes to Nose")',
                            'Areflexia (loss of reflexes)',
                            'Paresthesias (stocking-glove)',
                            'Autonomic dysfunction (HR/BP lability)'
                        ],
                        ptIntervention: 'ROM maintenance, positioning, progressive strengthening ONLY after plateau phase. AVOID OVERWORK WEAKNESS.',
                        icon: 'AlertTriangle',
                        details: {
                            overview: 'Guillain-Barré Syndrome (GBS) is a rare neurological disorder in which the body\'s immune system mistakenly attacks part of its peripheral nervous system.',
                            anatomy: [
                                'Target: Peripheral Nerves (Spinal roots and peripheral nerves).',
                                'Structure: Myelin Sheath (AIDP variant) or Axon (AMAN variant).',
                                'Schwann Cells: The myelinating cells of the PNS are destroyed.'
                            ],
                            physiology: [
                                'Molecular Mimicry: Post-infection (e.g., Campylobacter jejuni, Zika), antibodies mistake nerve antigens for pathogen antigens.',
                                'Demyelination: Macrophages strip myelin, slowing or blocking saltatory conduction.',
                                'Inflammation: Lymphocytic infiltration of nerve roots.'
                            ],
                            stats: [
                                { label: 'Incidence', value: '1-2 per 100,000' },
                                { label: 'Onset', value: 'Acute (days to weeks)' },
                                { label: 'Nadira', value: 'Weakness peaks at 2-4 weeks' },
                                { label: 'Recovery', value: '85% regain functional ambulation' }
                            ],
                            medications: [
                                { name: 'IVIG', mechanism: 'Intravenous Immunoglobulin', effect: 'Neutralizes autoantibodies.' },
                                { name: 'Plasmapheresis', mechanism: 'Plasma Exchange', effect: 'Filters antibodies out of blood.' },
                                { name: 'Analgesics', mechanism: 'Various', effect: 'Neuropathic pain management (Gabapentin).' }
                            ],
                            medicalInterventions: [
                                'Intensive Care: 30% require mechanical ventilation due to respiratory failure.',
                                'Cardiac Monitoring: For autonomic instability (arrhythmias, BP swings).',
                                'DVT Prophylaxis: Due to immobility.'
                            ],
                            ptManagement: [
                                { stage: 'Acute (Ascending)', focus: 'Preservation: PROM, Positioning, Skin care, Respiratory hygiene. NO strengthening.' },
                                { stage: 'Plateau', focus: 'Maintenance: Gentle AAROM, upright tolerance, pain management.' },
                                { stage: 'Recovery (Descending)', focus: 'Restoration: Progressive strengthening (low reps/freq), functional mobility. Rule of thumb: No muscle soreness >24hrs.' }
                            ]
                        }
                    },
                    {
                        id: 'ms',
                        name: 'Multiple Sclerosis',
                        acronym: 'MS',
                        description: 'Chronic autoimmune disease of the Central Nervous System (CNS) characterized by inflammation, demyelination, and axonal damage.',
                        keyFeatures: [
                            'Optic Neuritis (pain, vision loss)',
                            'Fatigue (primary/heat-related)',
                            'Uhthoff\'s Phenomenon (heat sensitivity)',
                            'Spasticity & Ataxia'
                        ],
                        ptIntervention: 'Energy conservation (4 P\'s), cooling strategies, strengthening (sub-maximal), gait stability, spasticity management.',
                        icon: 'Activity',
                        details: {
                            overview: 'Multiple Sclerosis (MS) is an unpredictable, often disabling disease of the central nervous system that disrupts the flow of information within the brain, and between the brain and body.',
                            anatomy: [
                                'Target: Central Nervous System (Brain and Spinal Cord).',
                                'Structure: Myelin Sheath and Oligodendrocytes.',
                                'Lesions: "Plaques" often found in periventricular white matter, optic nerves, and brainstem/cerebellum.'
                            ],
                            physiology: [
                                'Autoimmune Attack: T-cells cross Blood-Brain Barrier (BBB) and attack myelin.',
                                'Demyelination: Slows or blocks nerve conduction (saltatory conduction fails).',
                                'Axonal Loss: Chronic inflammation leads to permanent neurodegeneration.',
                                'Remyelination: Possible in early stages (Shadow plaques) but fails over time.'
                            ],
                            stats: [
                                { label: 'Prevalence', value: 'Over 1 million in US' },
                                { label: 'Age of Onset', value: '20-50 years' },
                                { label: 'Gender Ratio', value: '3:1 (Female > Male)' },
                                { label: 'Geography', value: 'Higher prevalence further from equator' }
                            ],
                            medications: [
                                { name: 'Ocrelizumab (Ocrevus)', mechanism: 'Anti-CD20 (B-cell)', effect: 'DMD for Relapsing & Primary Progressive MS.' },
                                { name: 'Natalizumab (Tysabri)', mechanism: 'Alpha-4 Integrin blocker', effect: 'Prevents immune cells crossing BBB.' },
                                { name: 'Baclofen', mechanism: 'GABA-B agonist', effect: 'Manages spasticity.' }
                            ],
                            medicalInterventions: [
                                'Plasmapheresis: For acute exacerbations unresponsive to steroids.',
                                'Intrathecal Baclofen Pump: For severe spasticity management.',
                                'Botox Injections: Localized spasticity relief.'
                            ],
                            ptManagement: [
                                { stage: 'Relapsing', focus: 'Recovery: Return to baseline func, fatigue mgmt.' },
                                { stage: 'Progressive', focus: 'Compensation: Assistive devices, energy conservation, fall prevention.' },
                                { stage: 'Advanced', focus: 'Palliative: Caregiver training, transfer safety, positioning, respiratory care.' }
                            ]
                        }
                    },
                    {
                        id: 'pd',
                        name: 'Parkinson\'s Disease',
                        acronym: 'PD',
                        description: 'Progressive loss of dopamine-producing neurons in the Substantia Nigra (Basal Ganglia).',
                        keyFeatures: [
                            'TRAP: Tremor (Resting), Rigidity, Akinesia/Bradykinesia, Postural Instability',
                            'Festinating gait',
                            'Masked facies',
                            'Micrographia'
                        ],
                        ptIntervention: 'Big and Loud (LSVT), rhythmic auditory cueing for gait, rotation exercises to break rigidity, balance training.',
                        icon: 'Activity',
                        details: {
                            overview: 'Parkinson\'s Disease (PD) is a progressive nervous system disorder that affects movement. Symptoms start gradually, sometimes starting with a barely noticeable tremor in just one hand.',
                            anatomy: [
                                'Basal Ganglia: Specifically the Substantia Nigra pars compacta (SNpc).',
                                'Pathway: Degeneration affects the Direct (Go) and Indirect (No-Go) pathways of voluntary movement.',
                                'Pathology: Loss of pigmented dopaminergic neurons.'
                            ],
                            physiology: [
                                'Dopamine Depletion: >60-80% loss before motor symptoms appear.',
                                'Inhibition: Lack of dopamine leads to excessive inhibition of the Thalamus -> Hypokinesia.',
                                'Lewy Bodies: Intracellular aggregates of alpha-synuclein protein.'
                            ],
                            stats: [
                                { label: 'Prevalence', value: '1% of population >60 years' },
                                { label: 'Age of Onset', value: 'Average 60s (Early onset <50)' },
                                { label: 'Gender', value: 'Men are 1.5x more likely' },
                                { label: 'Etiology', value: 'Idiopathic (most), Genetic (LRRK2, PARK7)' }
                            ],
                            medications: [
                                { name: 'Carbodopa-Levodopa', mechanism: 'Dopamine precursor', effect: 'Replaces dopamine (Gold Standard).' },
                                { name: 'Dopamine Agonists', mechanism: 'Mimics dopamine', effect: 'Stimulates receptors directly (Requip, Mirapex).' },
                                { name: 'MAO-B Inhibitors', mechanism: 'Enzyme inhibitor', effect: 'Prevents dopamine breakdown (Selegiline).' }
                            ],
                            medicalInterventions: [
                                'Deep Brain Stimulation (DBS): Electrode implantation in STN or GPi for advanced symptoms.',
                                'Duopa Pump: Intestinal gel delivery of Levodopa.'
                            ],
                            ptManagement: [
                                { stage: 'Early', focus: 'Prevention: High-intensity exercise (neuroprotection?), Strategy training.' },
                                { stage: 'Middle', focus: 'Compensation: External Cues (visual strips, metronome) for freezing, fall prevention.' },
                                { stage: 'Late', focus: 'Palliation: Caregiver training, transfers, bed mobility, respiratory care.' }
                            ]
                        }
                    },
                    {
                        id: 'sci',
                        name: 'Spinal Cord Injury',
                        acronym: 'SCI',
                        description: 'Damage to the spinal cord causing temporary or permanent loss of function. Classified by level (C, T, L, S) and completeness (ASIA scale).',
                        keyFeatures: [
                            'Motor/Sensory loss below level of injury',
                            'Spinal Shock (initial flaccidity)',
                            'Autonomic Dysreflexia (T6 and above)',
                            'Spasticity (after shock resolves)'
                        ],
                        ptIntervention: 'Functional mobility (transfers, bed mobility), strengthening preserved muscles, locomotor training, wheelchair skills.',
                        icon: 'AlignJustify',
                        details: {
                            overview: 'Spinal Cord Injury (SCI) involves damage to any part of the spinal cord or nerves at the end of the spinal canal (cauda equina).',
                            anatomy: [
                                'Grey Matter: Central "butterfly" (cell bodies). Damage causes segmental LMN signs.',
                                'White Matter: Outer tracts (axons). Damage causes weakness/sensory loss below level (UMN signs).',
                                'Key Tracts: Corticospinal (Motor), Spinothalamic (Pain/Temp), Dorsal Column (Touch/Proprioception).'
                            ],
                            physiology: [
                                'Primary Injury: Mechanical disruption (contusion, shear, compression).',
                                'Secondary Injury: Ischemia, edema, inflammation, excitotoxicity, apoptosis (can expand lesion level).',
                                'Spinal Shock: Temporary loss of all reflex activity below injury.',
                                'Autonomic Dysreflexia: Uncontrolled sympathetic output in injuries >T6.'
                            ],
                            stats: [
                                { label: 'Incidence', value: '18,000 new cases/year (USA)' },
                                { label: 'Causes', value: 'Vehicle (38%), Falls (32%), Violence (14%)' },
                                { label: 'Gender', value: '78% Male' },
                                { label: 'Life Exp', value: 'Near normal for incomplete injuries' }
                            ],
                            medications: [
                                { name: 'Methylprednisolone', mechanism: 'Corticosteroid', effect: 'Anti-inflammatory (controversial efficacy).' },
                                { name: 'Baclofen', mechanism: 'GABA agonist', effect: 'Spasticity management.' },
                                { name: 'Anticoagulants', mechanism: 'Blood thinners', effect: 'DVT prevention.' }
                            ],
                            medicalInterventions: [
                                'Surgical Stabilization: Fusion/fixation to protect cord.',
                                'Decompression: Laminectomy to relieve pressure.',
                                'Tendin Transfers: Surgically moving tendon insertions to restore hand function.'
                            ],
                            ptManagement: [
                                { stage: 'Acute', focus: 'Respiratory care, ROM, skin integrity, acclimation to upright (orthostatic hypotension).' },
                                { stage: 'Rehab', focus: 'Compensatory skills (transfer board), wheelchair mobility, strengthening intact muscles.' },
                                { stage: 'Chronic', focus: 'Health maintenance, locomotor training (BWSTT), return to sport/work.' }
                            ]
                        }
                    },
                    {
                        id: 'tbi',
                        name: 'Traumatic Brain Injury',
                        acronym: 'TBI',
                        description: 'Brain dysfunction caused by outside force (blow, jolt, penetrating injury). Ranges from mild (concussion) to severe.',
                        keyFeatures: [
                            'Altered consciousness (GCS score)',
                            'Cognitive deficits (attention, memory)',
                            'Behavioral changes',
                            'Physical impairments (balance, strength)'
                        ],
                        ptIntervention: 'Early mobilization, task-oriented training, dual-task formatting (cognitive + motor), vestibular rehab, family education.',
                        icon: 'Zap',
                        details: {
                            overview: 'Traumatic Brain Injury (TBI) is an injury to the brain caused by an outside force, ranging from mild concussions to severe permanent brain damage.',
                            anatomy: [
                                'Focal Injury: Contusions, hematomas (Epidural, Subdural), lacerations.',
                                'Diffuse Axonal Injury (DAI): Shearing of axons due to acceleration/deceleration forces (Corpus Callosum, Brainstem).',
                                'Coup-Contrecoup: Injury at impact site and opposite side.'
                            ],
                            physiology: [
                                'Metabolic Crisis: Ionic flux, massive neurotransmitter release, energy failure.',
                                'Intracranial Pressure (ICP): Edema leads to compression and herniation.',
                                'Neuroplasticity: The brain\'s ability to reorganize itself (mechanism of TBI recovery).'
                            ],
                            stats: [
                                { label: 'Incidence', value: 'High (Falls in elderly, Sports in youth)' },
                                { label: 'Severity', value: 'Mild (GCS 13-15), Mod (9-12), Severe (3-8)' },
                                { label: 'Rancho Scale', value: 'levels I-VIII (or X) describe cognitive recovery' }
                            ],
                            medications: [
                                { name: 'Mannitol', mechanism: 'Osmotic diuretic', effect: 'Reduces Intracranial Pressure (ICP).' },
                                { name: 'Anticonvulsants', mechanism: 'Neuronal stabilizers', effect: 'Seizure prophylaxis.' },
                                { name: 'Amantadine', mechanism: 'Dopamine agonist', effect: 'Arousal/Cognition enhancement.' }
                            ],
                            medicalInterventions: [
                                'Craniotomy/Craniectomy: Removal of bone flap to allow swelling.',
                                'ICP Monitoring: Ventriculostomy.',
                                'Hypothermia Protocol: To reduce metabolic demand (neuroprotection).'
                            ],
                            ptManagement: [
                                { stage: 'Coma/Vegetative', focus: 'Sensory stimulation, ROM, positioning (Rancho I-III).' },
                                { stage: 'Confused/Agitated', focus: 'Safety, structure, automatic activities (walking) (Rancho IV).' },
                                { stage: 'Automatic/Purposeful', focus: 'Dual-task training, community reintegration, high-level balance (Rancho VII-VIII).' }
                            ]
                        }
                    }
                ]
            }
        ]
    },



    {
        id: 'musculoskeletal',
        title: 'Musculoskeletal Physiology',
        description: 'The mechanics of muscle contraction, bone metabolism, and tissue healing.',
        icon: 'Bone',
        subtopics: [
            {
                id: 'ortho-pathologies',
                title: 'Orthopedic Pathologies',
                introduction: 'Common musculoskeletal injuries and degenerative conditions managed in physical therapy. Treatment focuses on restoring range of motion, strength, and function.',
                type: 'pathology-grid',
                clinicalRelevance: 'Differentiating between traumatic, overuse, and degenerative etiologies is key to prognosis and intervention selection.',
                pathologyConnection: 'Includes joint specific pathologies (ACL, Meniscus) and systemic conditions (OA, RA).',
                categoryContent: {
                    'Shoulder': shoulderContent,
                    'Knee': kneeContent,
                    'Head & Neck': headNeckContent,
                    'Elbow': elbowContent,
                    'Wrist & Hand': wristHandContent,
                    'Thoracic & Ribs': thoracicRibsContent,
                    'Lumbar & Pelvis': lumbarPelvicContent,
                    'Hip': hipContent,
                    'Foot & Ankle': footAnkleContent
                },
                pathologies: [
                    {
                        id: 'oa',
                        name: 'Osteoarthritis',
                        acronym: 'OA',
                        description: 'Degenerative Joint Disease (DJD) characterized by breakdown of articular cartilage and underlying bone. Most common in weight-bearing joints (Knee, Hip).',
                        keyFeatures: [
                            'Morning stiffness < 30 mins',
                            'Crepitus (grating sound)',
                            'Pain worsens with activity, improves with rest',
                            'Heberden\'s (DIP) and Bouchard\'s (PIP) nodes'
                        ],
                        ptIntervention: 'Low-impact aerobic exercise (cycling/swimming), quad strengthening (KOA), weight management, manual therapy for pain/ROM.',
                        icon: 'Bone',
                        category: 'General Ortho'
                    },
                    {
                        id: 'ra',
                        name: 'Rheumatoid Arthritis',
                        acronym: 'RA',
                        description: 'Systemic autoimmune inflammatory disorder primarily affecting the synovium of small joints in a symmetrical pattern.',
                        keyFeatures: [
                            'Morning stiffness > 1 hour',
                            'Symmetrical joint involvement (MCPs, PIPs, wrists)',
                            'Systemic symptoms (fatigue, fever)',
                            'Ulnar drift, Swan-neck, Boutonnière deformities'
                        ],
                        ptIntervention: 'Joint protection strategies, energy conservation, gentle ROM during flares (avoid extensive stretching), strengthening during remission.',
                        icon: 'AlertTriangle',
                        category: 'General Ortho'
                    },
                    {
                        id: 'fracture-healing',
                        name: 'Fracture Healing',
                        description: 'Physiological process of bone repair (Hematoma -> Callus -> Remodeling).',
                        keyFeatures: [
                            'Inflammatory Phase (Hematoma)',
                            'Reparative Phase (Soft then Hard Callus)',
                            'Remodeling Phase (Wolff\'s Law)',
                            'Smoking delays healing'
                        ],
                        ptIntervention: 'Respect healing timelines, controlled loading (Wolff\'s Law), prevent contractures.',
                        icon: 'Bone',
                        category: 'General Ortho',
                        details: {
                            overview: 'Primary healing (rigid fixation) skips callus. Secondary healing (casting) involves callus formation.',
                            ptManagement: [
                                { stage: 'Immobilization', focus: 'Maintain ROM of uninjured joints. Isometrics if allowed.' },
                                { stage: 'Mobilization', focus: 'Gradual weight bearing, joint mobilization (after union).' }
                            ]
                        }
                    },
                    {
                        id: 'osteoporosis',
                        name: 'Osteoporosis',
                        description: 'Systemic skeletal disease characterized by low bone mass (T-score < -2.5).',
                        keyFeatures: [
                            'Fragility Fractures (Vertebral, Hip, Wrist)',
                            'Kyphosis ("Dowager\'s Hump")',
                            'Height loss',
                            'Silent until fracture'
                        ],
                        ptIntervention: 'Weight-bearing impact exercises, Resistance training, Fall prevention.',
                        icon: 'Activity',
                        category: 'General Ortho',
                        details: {
                            overview: 'Bone resorption exceeds formation. Osteopenia is T-score -1.0 to -2.5.',
                            ptManagement: [
                                { stage: 'Prevention', focus: 'Wolff\'s Law: Bone adapts to load. Squats/Deadlifts/Impact.' },
                                { stage: 'Precautions', focus: 'Avoid loaded flexion (e.g., crunches) due to vertebral compression risk.' }
                            ]
                        }
                    },
                    {
                        id: 'compartment-syndrome',
                        name: 'Compartment Syndrome',
                        description: 'Increased pressure within a muscle compartment compromising circulation. RED FLAG.',
                        keyFeatures: [
                            'Pain out of proportion to injury',
                            'Pallor, Paresthesia, Pulselessness',
                            'Paralysis (late sign)',
                            'Shiny tension skin'
                        ],
                        ptIntervention: 'ACUTE: IMMEDIATE MEDICAL REFERRAL (Fasciotomy).',
                        icon: 'AlertTriangle',
                        category: 'General Ortho',
                        details: {
                            overview: 'Acute is an emergency. Chronic Exertional Compartment Syndrome (CECS) is exercise-induced and managed conservatively or surgically.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Do NOT elevate (reduces perfusion pressure). Remove compression.' },
                                { stage: 'Chronic', focus: 'Gait retraining (forefoot strike), soft tissue mobilization.' }
                            ]
                        }
                    },
                    {
                        id: 'crps',
                        name: 'Complex Regional Pain Syndrome',
                        acronym: 'CRPS',
                        description: 'Chronic pain condition usually affecting a limb after injury (Type I: No nerve damage, Type II: Nerve injury).',
                        keyFeatures: [
                            'Allodynia / Hyperalgesia',
                            'Edema and sweating changes',
                            'Temperature / Color asymmetry',
                            'Trophic changes (hair/nail growth)'
                        ],
                        ptIntervention: 'Graded Motor Imagery, Desensitization, Scrubbing/Carrying (Stress Loading).',
                        icon: 'Zap',
                        category: 'General Ortho',
                        details: {
                            overview: 'Budapest Criteria used for diagnosis. Maladaptive neuroplasticity.',
                            ptManagement: [
                                { stage: 'GMI', focus: 'Steps: 1. Laterality (L/R recognition), 2. Motor Imagery, 3. Mirror Therapy.' }
                            ]
                        }
                    },
                    {
                        id: 'septic-arthritis',
                        name: 'Septic Arthritis',
                        description: 'Infection in a joint space. RED FLAG.',
                        keyFeatures: [
                            'Acute red, hot, swollen joint',
                            'Fever / Chills',
                            'Inability to bear weight',
                            'Extreme pain with movement'
                        ],
                        ptIntervention: 'IMMEDIATE MEDICAL REFERRAL.',
                        icon: 'Thermometer',
                        category: 'General Ortho',
                        details: {
                            overview: 'Rapid cartilage destruction. Most common in Knee/Hip.',
                            ptManagement: [
                                { stage: 'Post-Medical', focus: 'Gentle ROM once infection is cleared to prevent adhesions.' }
                            ]
                        }
                    },
                    {
                        id: 'fibromyalgia',
                        name: 'Fibromyalgia',
                        description: 'Chronic disorder characterized by widespread musculoskeletal pain and tenderness.',
                        keyFeatures: [
                            'Widespread Pain Index (WPI) high',
                            'Fatigue / Sleep disturbance',
                            'Cognitive dysfunction ("Fibro fog")',
                            'Central Sensitization'
                        ],
                        ptIntervention: 'Low-intensity aerobic exercise, Pacing, Pain Neuroscience Education.',
                        icon: 'User',
                        category: 'General Ortho',
                        details: {
                            overview: 'Abnormal pain processing. Not an inflammatory condition.',
                            ptManagement: [
                                { stage: 'Management', focus: '"Start low, go slow". Aquatic therapy is often well tolerated.' }
                            ]
                        }
                    },
                    {
                        id: 'acl',
                        name: 'ACL Tear',
                        acronym: 'ACL',
                        description: 'Rupture of the Anterior Cruciate Ligament in the knee, usually from non-contact pivoting/twisting or hyperextension.',
                        keyFeatures: [
                            'Audible "pop" at time of injury',
                            'Immediate swelling (hemarthrosis)',
                            'Positive Lachman\'s and Anterior Drawer tests',
                            'Instability ("giving way")'
                        ],
                        ptIntervention: 'Pre-hab (swelling control, restoring extension). Post-op: Protect graft, quadriceps strengthening, neuromuscular re-education.',
                        icon: 'Activity',
                        category: 'Knee',
                        details: {
                            overview: 'Females 2-8x more likely to tear ACL. The "Unhappy Triad" involves ACL, MCL, and Medial Meniscus.',
                            anatomy: ['ACL: Runs from lateral femoral condyle to anterior tibia.', 'Restrains anterior tibial translation.'],
                            specialTests: ['Lachman\'s', 'Anterior Drawer', 'Pivot Shift'],
                            ptManagement: [
                                { stage: 'Pre-Op', focus: '"Quiet Knee" - Reduce swelling, full extension.' },
                                { stage: 'Early Post-Op', focus: 'Protect graft (avoid open chain extension 0-45), restore extension.' },
                                { stage: 'Return to Sport', focus: 'Plyometrics, cutting mechanics, quad symmetry >90%.' }
                            ]
                        }
                    },
                    {
                        id: 'meniscus',
                        name: 'Meniscus Tear',
                        description: 'Tear in the fibrocartilage shock absorbers of the knee. Acute (twisting) or degenerative.',
                        keyFeatures: [
                            'Locking, catching, or clicking in the knee',
                            'Joint line tenderness',
                            'Pain with deep flexion or squatting',
                            'Positive McMurray\'s and Thessaly tests'
                        ],
                        ptIntervention: 'Control effusion, restore ROM, strengthen kinetic chain (glutes/quads), proprioceptive training.',
                        icon: 'Circle', // Placeholder, will update map
                        category: 'Knee',
                        details: {
                            overview: 'Outer 1/3 (Red-Red zone) has blood supply and can heal/be repaired. Inner 2/3 (White zone) usually requires meniscectomy.',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Unload joint, restore ROM, hip strength.' },
                                { stage: 'Repair Types', focus: 'Repair (Restricted WB/Flexion) vs Meniscectomy (Accelarated rehab).' }
                            ]
                        }
                    },
                    {
                        id: 'pfps',
                        name: 'Patellofemoral Pain (PFPS)',
                        acronym: 'PFPS',
                        description: 'Anterior knee pain generally caused by maltracking of the patella.',
                        keyFeatures: [
                            'Pain with stairs, squatting, sitting (Movie sign)',
                            'Retropatellar pain',
                            'Valgus collapse during movement',
                            'Weak Hips (Abductors/ERs)'
                        ],
                        ptIntervention: 'Strengthen HIPS (Glute Med/Max), VMO re-ed, Patellar taping (McConnell), Foot orthotics.',
                        icon: 'Target',
                        category: 'Knee'
                    },
                    {
                        id: 'mcl-sprain',
                        name: 'MCL Sprain',
                        description: 'Injury to the Medial Collateral Ligament from a valgus force.',
                        keyFeatures: [
                            'Medial knee pain',
                            'Mechanism: Blow to outside of knee',
                            'Positive Valgus Stress test',
                            'Stiffness'
                        ],
                        ptIntervention: 'Protection (brace), Early ROM (avoid valgus stress), strengthening.',
                        icon: 'Shield',
                        category: 'Knee'
                    },
                    {
                        id: 'patellar-tendinitis',
                        name: 'Patellar Tendinitis',
                        description: 'Overuse injury to the patellar tendon ("Jumper\'s Knee").',
                        keyFeatures: [
                            'Inferior patellar pole pain',
                            'Pain after activity (early) -> during (late)',
                            'Thickened tendon',
                            'Jumping athlete'
                        ],
                        ptIntervention: 'Eccentric squats (decline board), Isometrics for pain, Load management.',
                        icon: 'Activity',
                        category: 'Knee'
                    },
                    {
                        id: 'cervical-radiculopathy',
                        name: 'Cervical Radiculopathy',
                        description: 'Nerve root compression in the C-Spine, often C6 or C7.',
                        keyFeatures: [
                            'Pain radiating into arm/hand',
                            'Numbness/Tingling in dermatome',
                            'Weakness in myotome',
                            'Positive Spurling\'s test'
                        ],
                        ptIntervention: 'Postural re-ed, cervical retraction, nerve glides, traction (manual/mechanical).',
                        icon: 'Activity',
                        category: 'Head & Neck',
                        details: {
                            overview: 'Compression of nerve roots typically due to disc herniation or foraminal stenosis.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Unloading, gentle ROM, posture.' },
                                { stage: 'Subacute', focus: 'Nerve gliding, isometric strengthening.' }
                            ]
                        }
                    },
                    {
                        id: 'cervicogenic-headache',
                        name: 'Cervicogenic Headache',
                        description: 'Headache caused by referred pain from neck structures (bones, soft tissue) typically C1-C3.',
                        keyFeatures: [
                            'Unilateral head pain',
                            'Aggravated by neck movement/posture',
                            'Restricted cervical ROM',
                            'Ram\'s horn distribution'
                        ],
                        ptIntervention: 'Mulligan SNAGs C1-C2, Deep Neck Flexor endurance, Thoracic manipulation.',
                        icon: 'Activity',
                        category: 'Head & Neck',
                        details: {
                            overview: 'Pain perceived in the head but originating from a source in the neck (convergence of Trigeminal and Cervical afferents at TCN).',
                            anatomy: [
                                'C1-C3 Facet Joints: Most common source.',
                                'Trigeminocervical Nucleus (TCN): Mechanism of referral.',
                                'Muscles: Suboccipitals, Upper Trap, SCM trigger points.'
                            ],
                            ptManagement: [
                                { stage: 'Assessment', focus: 'Flexion-Rotation Test (C1-C2 mobility).' },
                                { stage: 'Treatment', focus: 'C1-C2 SNAGs (Self-SNAGs mainly), Postural Correction.' }
                            ]
                        }
                    },
                    {
                        id: 'whiplash-wad',
                        name: 'Whiplash (WAD)',
                        description: 'Acceleration-deceleration mechanism of energy transfer to the neck.',
                        keyFeatures: [
                            'Neck pain and stiffness',
                            'Headache / Dizziness',
                            'WAD Classification (I-IV)',
                            'Visual disturbances'
                        ],
                        ptIntervention: 'Early mobilization, Proprioceptive training (Laser), Reassurance (avoid fear-avoidance).',
                        icon: 'Activity',
                        category: 'Head & Neck',
                        details: {
                            overview: 'Most common after motor vehicle accidents. Recovery varies significantly based on psychosocial factors.',
                            stats: [
                                { label: 'Type', value: 'WAD I (Pain/Stiff), WAD II (Reduced ROM), WAD III (Neuro signs)' },
                                { label: 'Recovery', value: '50% recover fully, 30% mild pain, 20% chronic disability' }
                            ],
                            ptManagement: [
                                { stage: 'Acute (0-2wks)', focus: 'Act as usual, range of motion within tolerance.' },
                                { stage: 'Subacute', focus: 'Sensorimotor control (JPE - Joint Position Error training), Deep neck flexor activation.' }
                            ]
                        }
                    },
                    {
                        id: 'tmj-dysfunction',
                        name: 'TMJ Dysfunction',
                        acronym: 'TMD',
                        description: 'Pain and dysfunction of the muscles of mastication and the temporomandibular joints.',
                        keyFeatures: [
                            'Clicking/Popping with jaw opening',
                            'Deviation or Deflection of mandible',
                            'Limited opening (<40mm)',
                            'Temple headaches'
                        ],
                        ptIntervention: 'Rocabado 6x6 exercises, Intra-oral release, Posture correction.',
                        icon: 'MessageCircle', // Best approximation for jaw/mouth
                        category: 'Head & Neck',
                        details: {
                            overview: 'Complex interaction between the joint disc, muscles (Pterygoids/Masseter), and cervical spine posture.',
                            anatomy: [
                                'Disc Displacement with Reduction: Clicking (disc pops back on).',
                                'Disc Displacement w/o Reduction: Locking (disc blocks opening).',
                                'Muscles: Lateral Pterygoid (opens/protrudes), Temporalis/Masseter (closes).'
                            ],
                            ptManagement: [
                                { stage: 'Manual', focus: 'Lateral Pterygoid release, Joint distraction.' },
                                { stage: 'Exercise', focus: 'Controlled opening (tongue on roof of mouth), Isometrics.' }
                            ]
                        }
                    },
                    {
                        id: 'cervical-spondylosis',
                        name: 'Cervical Spondylosis',
                        description: 'Age-related wear and tear affecting the spinal disks in the neck (Osteoarthritis).',
                        keyFeatures: [
                            'Morning stiffness',
                            'Neck pain improving with movement',
                            'Possible radicular signs if severe (stenosis)',
                            'Crepitus'
                        ],
                        ptIntervention: 'Mobilization (Maitland/Kaltenborn), Traction, ROM exercises.',
                        icon: 'Activity',
                        category: 'Head & Neck',
                        details: {
                            overview: 'Degenerative cascade involving disc height loss, osteophyte formation, and facet hypertrophy.',
                            ptManagement: [
                                { stage: 'Management', focus: 'Maintain ROM, Thoracic mobility extension, Deep neck stabiliztion.' },
                                { stage: 'Education', focus: 'Postural breaks, sleeping ergonomics.' }
                            ]
                        }
                    },
                    {
                        id: 'tennis-elbow',
                        name: 'Lateral Epicondylitis',
                        acronym: 'Tennis Elbow',
                        description: 'Tendinosis of the common extensor origin (ECRB). Angiofibroblastic hyperplasia (not true inflammation).',
                        keyFeatures: [
                            'Pain at lateral epicondyle',
                            'Pain with gripping/resisted extension',
                            'Morning stiffness',
                            'Weak grip strength'
                        ],
                        ptIntervention: 'Eccentric wrist extension (Tyler Twist), Soft tissue mobilization, Ergonomic changes.',
                        icon: 'Zap',
                        category: 'Elbow',
                        details: {
                            overview: 'Overuse injury involving the Extensor Carpi Radialis Brevis (ECRB) origin.',
                            anatomy: [
                                'ECRB Tendon: Primary site of degeneration.',
                                'Lateral Epicondyle: Bony attachment site.'
                            ],
                            ptManagement: [
                                { stage: 'Acute', focus: 'Unloading (counterforce brace), Ice, Isometric extension.' },
                                { stage: 'Rehab', focus: 'Eccentric loading (Tyler Twist), Radial nerve glides.' }
                            ]
                        }
                    },
                    {
                        id: 'golfers-elbow',
                        name: 'Medial Epicondylitis',
                        acronym: 'Golfer\'s Elbow',
                        description: 'Tendinosis of the common flexor origin (FCR, Pronator Teres).',
                        keyFeatures: [
                            'Pain at medial epicondyle',
                            'Pain with resisted wrist flexion/pronation',
                            'Pain with stretching into extension',
                            'Ulnar nerve signs sometimes present'
                        ],
                        ptIntervention: 'Eccentric wrist flexion, Ulnar nerve protection, Throwing mechanics analysis.',
                        icon: 'Target',
                        category: 'Elbow',
                        details: {
                            overview: 'Less common than tennis elbow. Affects the flexor-pronator mass.',
                            ptManagement: [
                                { stage: 'Protection', focus: 'Avoid repetitive flexion/pronation. Check ulnar nerve integrity.' },
                                { stage: 'Loading', focus: 'Eccentric wrist flexion, Supination strengthening.' }
                            ]
                        }
                    },
                    {
                        id: 'cubital-tunnel',
                        name: 'Cubital Tunnel Syndrome',
                        acronym: 'Ulnar Nerve',
                        description: 'Compression or traction of the ulnar nerve at the medial elbow.',
                        keyFeatures: [
                            'Numbness/Tingling in ring and small finger',
                            'Positive Tinel\'s at elbow',
                            'Positive Elbow Flexion Test',
                            'Weakness in intrinsic hand muscles (severe)'
                        ],
                        ptIntervention: 'Nerve gliding, Night splinting (limit flexion), Elbow pad.',
                        icon: 'Shield',
                        category: 'Elbow',
                        details: {
                            overview: 'Second most common entrapment neuropathy. Nerve is vulnerable in the groove behind medial epicondyle.',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Avoid prolonged flexion (phone use, sleeping). Ulnar nerve glides.' },
                                { stage: 'Post-Op', focus: 'Gentle ROM, scar mobility (if transposition performed).' }
                            ]
                        }
                    },
                    {
                        id: 'ucl-sprain',
                        name: 'UCL Sprain',
                        acronym: 'MCL Sprain',
                        description: 'Injury to the Ulnar Collateral Ligament (Anterior Bundle) from valgus stress.',
                        keyFeatures: [
                            'Medial elbow pain',
                            'Valgus instability',
                            '"Pop" while throwing',
                            'Inability to throw with velocity'
                        ],
                        ptIntervention: 'Thrower\'s Ten program, Core/Leg strengthening, Mechanics.',
                        icon: 'Activity',
                        category: 'Elbow',
                        details: {
                            overview: 'Critical stabilizer resisting valgus force (throwing). Tommy John surgery reconstructs this.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Protect valgus stress. Full ROM.' },
                                { stage: 'Return to Throw', focus: 'Interval throwing program (after ~3-4 months conservative, 9-12 months post-op).' }
                            ]
                        }
                    },
                    {
                        id: 'olecranon-bursitis',
                        name: 'Olecranon Bursitis',
                        description: 'Inflammation of the bursa sac at the tip of the elbow.',
                        keyFeatures: [
                            'Significant "Goose Egg" swelling',
                            'Pain with direct pressure',
                            'Warmth/Redness (exclude infection)',
                            'Normal ROM usually'
                        ],
                        ptIntervention: 'Compression (sleeve), Activity modification, Padding.',
                        icon: 'Circle',
                        category: 'Elbow',
                        details: {
                            overview: 'Traumatic (fall) or Repetitive (leaning on elbows). Septic bursitis is a red flag.',
                            ptManagement: [
                                { stage: 'Management', focus: 'Donut pad, compression, avoid direct pressure. Medical drainage may be needed.' }
                            ]
                        }
                    },
                    {
                        id: 'distal-biceps-rupture',
                        name: 'Distal Biceps Rupture',
                        description: 'Complete tear of the biceps tendon at its insertion on the radius.',
                        keyFeatures: [
                            '"Popeye" deformity (muscle belly retracts)',
                            'Significant weakness in Supination',
                            'Make "Hook" test positive',
                            'Ecchymosis in antecubital fossa'
                        ],
                        ptIntervention: 'Surgical repair typically required for active individuals.',
                        icon: 'AlertTriangle',
                        category: 'Elbow',
                        details: {
                            overview: 'Common in middle-aged males lifting heavy loads. Supination strength is most affected.',
                            ptManagement: [
                                { stage: 'Post-Op', focus: 'Protect repair (hinge brace locked in extension initially). Gradual extension.' },
                                { stage: 'Strengthening', focus: 'Isometrics -> Isotonics (start with light flex/sup).' }
                            ]
                        }
                    },
                    {
                        id: 'carpal-tunnel',
                        name: 'Carpal Tunnel Syndrome',
                        acronym: 'CTS',
                        description: 'Compression of the median nerve at the wrist.',
                        keyFeatures: [
                            'Numbness in thumb/index/middle fingers',
                            'Night pain/waking up shaking hand',
                            'Thenar atrophy (severe)',
                            'Positive Phalen\'s'
                        ],
                        ptIntervention: 'Splinting (night), tendon gliding, median nerve glides.',
                        icon: 'Shield',
                        category: 'Wrist & Hand',
                        details: {
                            overview: 'Most common entrapment neuropathy. Caused by increased pressure in the carpal tunnel compressing the median nerve.',
                            anatomy: [
                                'Boundaries: Carpal bones (floor/walls) and Flexor Retinaculum (roof).',
                                'Contents: 9 Tendons (FDS x4, FDP x4, FPL) and Median Nerve.'
                            ],
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Neutral wrist splinting (night), Nerve/Tendon Glides, Ergonomics.' },
                                { stage: 'Post-Op (Release)', focus: 'Scar mobilization, desensitization, pillar pain management.' }
                            ],
                            exercises: [
                                'Tendon Glides: Hook -> Full Fist -> Tabletop -> Straight Fist.',
                                'Median Nerve Glides: Waiter\'s tip position.'
                            ]
                        }
                    },
                    {
                        id: 'scaphoid-fx',
                        name: 'Scaphoid Fracture',
                        description: 'Most common carpal bone fracture, often from FOOSH.',
                        keyFeatures: [
                            'Snuffbox tenderness',
                            'Pain with axial loading of thumb',
                            'History of fall on outstretched hand',
                            'High risk of Avascular Necrosis (AVN)'
                        ],
                        ptIntervention: 'Immobilization (Thumb Spica), gradual ROM after healing.',
                        icon: 'Bone',
                        category: 'Wrist & Hand',
                        details: {
                            overview: 'Blood supply enters distally, putting the proximal pole at risk of AVN/Non-union.',
                            ptManagement: [
                                { stage: 'Immobilization', focus: 'Thumb Spica cast (6-12 weeks). Maintain finger/shoulder ROM.' },
                                { stage: 'Post-Immobilization', focus: 'Gentle ROM (wrist/thumb), grip strengthening.' }
                            ]
                        }
                    },
                    {
                        id: 'de-quervains',
                        name: 'De Quervain\'s Tenosynovitis',
                        description: 'Stenosing tenosynovitis of the 1st dorsal compartment (APL & EPB).',
                        keyFeatures: [
                            'Pain at radial styloid (base of thumb)',
                            'Positive Finkelstein\'s test',
                            'Pain with lifting/gripping/texting'
                        ],
                        ptIntervention: 'Thumb Spica splint, activity modification, eccentric APL/EPB.',
                        icon: 'Zap',
                        category: 'Wrist & Hand',
                        details: {
                            ptManagement: [
                                { stage: 'Acute', focus: 'Splinting, Ice, NSAIDs, Avoid aggravating motions (ulnar dev + thumb flexion).' },
                                { stage: 'Rehab', focus: 'Isometric -> Eccentric strengthening of thumb extensors.' }
                            ]
                        }
                    },
                    {
                        id: 'trigger-finger',
                        name: 'Trigger Finger',
                        description: 'Stenosing tenosynovitis causing finger to lock in flexion.',
                        keyFeatures: [
                            'Locking/Catching of finger',
                            'Nodule at A1 pulley (distal palm)',
                            'Painful to straighten manually'
                        ],
                        ptIntervention: 'Splinting (MP extension), tendon gliding.',
                        icon: 'Circle',
                        category: 'Wrist & Hand',
                        details: {
                            overview: 'Inflammation of the flexor tendon sheath at the A1 pulley typically.',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Splinting MP joint in extension, avoiding repetitive gripping.' }
                            ]
                        }
                    },
                    {
                        id: 'cmc-oa',
                        name: 'Thumb CMC OA',
                        description: 'Osteoarthritis of the 1st Carpometacarpal joint (Trapezium-Metacarpal).',
                        keyFeatures: [
                            'Pain at base of thumb',
                            'Positive Grind Test',
                            'Difficulty pinching/opening jars',
                            '"Shouldering" deformity'
                        ],
                        ptIntervention: 'Joint protection, CMC splint, Thenar strengthening.',
                        icon: 'Grid',
                        category: 'Wrist & Hand',
                        details: {
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Custom CMC orthosis, "C" grip exercises, avoid pinch loading.' },
                                { stage: 'Post-Op (LRTI)', focus: 'Protect reconstruction, gradual ROM.' }
                            ]
                        }
                    },
                    {
                        id: 'scoliosis',
                        name: 'Scoliosis',
                        description: 'Lateral curvature of the spine >10 degrees with vertebral rotation.',
                        keyFeatures: [
                            'Asymmetrical shoulders/hips',
                            'Rib hump on forward bend (Adam\'s Test)',
                            '"C" or "S" curve shape',
                            'Cobb angle measurement'
                        ],
                        ptIntervention: 'Schroth method (3D correction), Core stabilization, Respiratory mechanics.',
                        icon: 'AlignJustify',
                        category: 'Thoracic & Ribs',
                        details: {
                            overview: 'Structural (fixed) vs Functional (correctable). Monitoring progression is key in adolescents.',
                            stats: [
                                { label: 'Mild', value: '10-25 degrees (Observation)' },
                                { label: 'Moderate', value: '25-45 degrees (Bracing)' },
                                { label: 'Severe', value: '>45 degrees (Surgery likely)' }
                            ],
                            ptManagement: [
                                { stage: 'Schroth', focus: 'Elongation, Derotation, Expansion breaths.' },
                                { stage: 'General', focus: 'Side planks (convex side), postural awareness.' }
                            ]
                        }
                    },
                    {
                        id: 'tos',
                        name: 'Thoracic Outlet Syndrome',
                        acronym: 'TOS',
                        description: 'Compression of the neurovascular bundle (Brachial Plexus, Subclavian A/V).',
                        keyFeatures: [
                            'Paresthesia in C8-T1 distribution (ulnar hand)',
                            'Heaviness/Fatigue in arm',
                            'Positive Roos / Adson\'s test',
                            'Vascular signs (pallor/coldness) if vascular'
                        ],
                        ptIntervention: 'Scalene/Pec Minor stretching, 1st Rib mobilization, Nerve glides.',
                        icon: 'Activity', // Neuro/Vascular
                        category: 'Thoracic & Ribs',
                        details: {
                            overview: 'Compression sites: Scalene Triangle, Costoclavicular Space, Pectoralis Minor Space.',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Open the outlet: Posture (chin tucks), breathing (diaphragmatic vs apical), muscle lengthening.' }
                            ]
                        }
                    },
                    {
                        id: 'scheuermanns',
                        name: 'Scheuermann\'s Disease',
                        description: 'Juvenile osteochondrosis leading to structural hyperkyphosis (>45°).',
                        keyFeatures: [
                            'Rigid Thoracic Kyphosis',
                            'Schmorl\'s Nodes on X-ray',
                            'Pain with extension',
                            'Tight hamstrings/pecs'
                        ],
                        ptIntervention: 'Extension exercises, Postural education, Bracing.',
                        icon: 'User', // Posture related
                        category: 'Thoracic & Ribs',
                        details: {
                            overview: 'Wedging of anterior vertebral bodies (>5° in 3 consecutive vertebrae). Distinguish from postural kyphosis.',
                            ptManagement: [
                                { stage: 'Management', focus: 'Maximize extension ROM, strengthen thoracic extensors, stretch anterior chain.' }
                            ]
                        }
                    },
                    {
                        id: 'costochondritis',
                        name: 'Costochondritis',
                        description: 'Inflammation of the costochondral junctions (usually ribs 2-5).',
                        keyFeatures: [
                            'Sharp anterior chest pain',
                            'Palpable tenderness at junction',
                            'Pain with deep breath/cough/sneezing',
                            'No swelling (vs Tietze Syndrome)'
                        ],
                        ptIntervention: 'Gentle mobility, Modalities, Breathing retraining.',
                        icon: 'Target',
                        category: 'Thoracic & Ribs',
                        details: {
                            overview: 'Benign but painful. Exclude cardiac causes. Tietze syndrome involves swelling, Costochondritis does not.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Pain control (Ice/Heat), avoid aggravating loading.' },
                                { stage: 'Recovery', focus: 'Rib expansion breathing, gentle thoracic rotation.' }
                            ]
                        }
                    },
                    {
                        id: 't4-syndrome',
                        name: 'T4 Syndrome',
                        description: 'Sympathetic reaction to hypomobility at the T4 segment (approx).',
                        keyFeatures: [
                            '"Glove" paresthesia (uni/bilateral)',
                            'Night pain',
                            'Stiff upper thoracic spine',
                            'Headaches sometimes present'
                        ],
                        ptIntervention: 'T4 mobilization/manipulation, Sympathetic slump stretching.',
                        icon: 'Zap',
                        category: 'Thoracic & Ribs',
                        details: {
                            overview: 'Autonomic nervous system involvement due to proximity of sympathetic trunk to rib heads.',
                            ptManagement: [
                                { stage: 'Manual', focus: 'T-Spine manipulation is often highly effective.' },
                                { stage: 'Exercise', focus: 'Thoracic mobility (Cat/Cow, Open books).' }
                            ]
                        }
                    },
                    {
                        id: 'rib-dysfunction',
                        name: 'Rib Dysfunction',
                        description: 'Mechanical restriction of rib movement (Structural or Torsional).',
                        keyFeatures: [
                            'Inhalation or Exhalation restriction',
                            'Localized sharp pain',
                            'Pain with breathing',
                            'Palpable asymmetry'
                        ],
                        ptIntervention: 'Muscle Energy Techniques (MET), Rib mobilization.',
                        icon: 'Layers',
                        category: 'Thoracic & Ribs',
                        details: {
                            overview: 'Key Concept: "Pump Handle" (1-6) vs "Bucket Handle" (7-10).',
                            ptManagement: [
                                { stage: 'MET', focus: 'Use respiratory muscles (Scalenes/Intercostals/Abs) to correct rib position.' }
                            ]
                        }
                    },
                    {
                        id: 'lumbar-hnp',
                        name: 'Lumbar Disc Herniation',
                        acronym: 'HNP',
                        description: 'Displacement of nucleus pulposus compressing neural structures.',
                        keyFeatures: [
                            'Back pain with radiating leg pain',
                            'Worse with flexion/sitting (posturo-lateral)',
                            'Positive SLR / Crossed SLR',
                            'Lateral shift pattern'
                        ],
                        ptIntervention: 'Extension bias (McKenzie/MDT), Core stabilization, Nerve glides.',
                        icon: 'AlertTriangle',
                        category: 'Lumbar & Pelvis',
                        details: {
                            overview: 'Most common at L4-L5 and L5-S1. Directional Preference is key to McKenzie assessment.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Centralization (reptitive extension), avoid peripheralizing positions (flexion).' },
                                { stage: 'Subacute', focus: 'Reintegration of flexion, core motor control.' }
                            ]
                        }
                    },
                    {
                        id: 'spinal-stenosis',
                        name: 'Spinal Stenosis',
                        description: 'Narrowing of the spinal canal (central) or intervertebral foramen (lateral).',
                        keyFeatures: [
                            'Neurogenic Claudication (leg pain with walking)',
                            'Relief with flexion ("Shopping Cart Sign")',
                            'Bilateral symptoms often',
                            'Age > 60 usually'
                        ],
                        ptIntervention: 'Flexion bias exercises, Hip mobility, Unloading (Aquatic).',
                        icon: 'Minimize',
                        category: 'Lumbar & Pelvis',
                        details: {
                            overview: 'Degenerative condition. Extension increases compression, Flexion opens the canal.',
                            ptManagement: [
                                { stage: 'Management', focus: 'Posterior pelvic tilts, knees to chest, hip flexor stretching (to allow upright posture without lumbar extension).' }
                            ]
                        }
                    },
                    {
                        id: 'spondylolisthesis',
                        name: 'Spondylolisthesis',
                        description: 'Anterior slippage of one vertebra on another (usually L5 on S1).',
                        keyFeatures: [
                            'Step-off deformity (palpable)',
                            'Pain with extension (standing/walking)',
                            'Tight hamstrings',
                            'Waddle gait (severe)'
                        ],
                        ptIntervention: 'Core stabilization (neutral spine), Hamstring stretching, Avoid hyperextension.',
                        icon: 'Layers',
                        category: 'Lumbar & Pelvis',
                        details: {
                            overview: 'Graded I-V. Pars defect (Spondylolysis) often precedes slippage ("Scotty Dog" fracture).',
                            ptManagement: [
                                { stage: 'Stabilization', focus: 'Deep core (TrA/Multifidus) to prevent further slippage. Avoid "Superman" type extension.' }
                            ]
                        }
                    },
                    {
                        id: 'sij-dysfunction',
                        name: 'SI Joint Dysfunction',
                        description: 'Pain originating from the Sacroiliac Joint (mechanical or inflammatory).',
                        keyFeatures: [
                            'Unilateral LB/Buttock pain (Fortin Finger)',
                            'Positive Laslett\'s Cluster (3/5 positive)',
                            'Pain with transitional movements',
                            'No centralization'
                        ],
                        ptIntervention: 'Muscle Energy Techniques (MET), SI Belt, Stabilization.',
                        icon: 'Grid',
                        category: 'Lumbar & Pelvis',
                        details: {
                            overview: 'Cluster: Distraction, Thigh Thrust, Compression, Sacral Thrust, Gaenslen\'s.',
                            ptManagement: [
                                { stage: 'Treatment', focus: 'Correct innominate rotation (Anterior/Posterior) via MET. Strengthen Glute Med/Max.' }
                            ]
                        }
                    },
                    {
                        id: 'ankylosing-spondylitis',
                        name: 'Ankylosing Spondylitis',
                        description: 'Systemic autoimmune inflammatory arthritis affecting the spine/SIJ.',
                        keyFeatures: [
                            '"Bamboo Spine" (fusion on X-ray)',
                            'Morning stiffness > 30 mins',
                            'Pain improves with activity / worse with rest',
                            'HLA-B27 positive'
                        ],
                        ptIntervention: 'Extension promotion, Chest expansion breathing, Posture.',
                        icon: 'Activity',
                        category: 'Lumbar & Pelvis',
                        details: {
                            overview: 'Progressive fusion. Goal is to fuze in a functional (upright) posture rather than kyphotic.',
                            ptManagement: [
                                { stage: 'Maintenance', focus: 'Maximize extension ROM, inspiratory muscle training, high intensity exercise is beneficial.' }
                            ]
                        }
                    },
                    {
                        id: 'cauda-equina',
                        name: 'Cauda Equina Syndrome',
                        description: 'Compression of the cauda equina nerve roots (L2-S5). RED FLAG.',
                        keyFeatures: [
                            'Saddle Anesthesia',
                            'Bowel/Bladder retention or incontinence',
                            'Severe bilateral neuro deficits',
                            'Sexual dysfunction'
                        ],
                        ptIntervention: 'EMERGENCY REFERRAL IMMEDIATE SURGERY.',
                        icon: 'AlertOctagon',
                        category: 'Lumbar & Pelvis',
                        details: {
                            overview: 'Medical Emergency. Permanent paralysis/incontinence if not decompressed within 24-48hrs.',
                            ptManagement: [
                                { stage: 'Action', focus: 'Do not treat. Refer to ER immediately.' }
                            ]
                        }
                    },
                    {
                        id: 'hip-oa',
                        name: 'Hip Osteoarthritis',
                        acronym: 'OA',
                        description: 'Degenerative joint disease of the femoroacetabular joint.',
                        keyFeatures: [
                            'Groin pain (C-sign)',
                            'Morning stiffness <60 mins',
                            'Loss of IR (<24°) and Flexion',
                            'Pain with Squatting (CPR)'
                        ],
                        ptIntervention: 'Manual therapy (Distraction/Thrust), Strengthening (Glutes/Quads), Weight loss.',
                        icon: 'Bone',
                        category: 'Hip',
                        details: {
                            overview: 'CPR for Hip OA: Squat pain, Active hip flexion lateral pain, Scour test positive, Active extension pain, IR <25 deg.',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Unload joint (cane vs side), Improve ROM/Strength.' },
                                { stage: 'Post-Op (THA)', focus: 'Precautions (Posterior: No flex>90, add, IR) vs Anterior approach.' }
                            ]
                        }
                    },
                    {
                        id: 'fai',
                        name: 'Femoroacetabular Impingement',
                        acronym: 'FAI',
                        description: 'Abnormal contact between femoral head/neck and acetabular rim.',
                        keyFeatures: [
                            'Anterior groin pain',
                            'Positive FADIR test',
                            'Pain with deep flexion/rotation',
                            '"C-Sign" hand placement'
                        ],
                        ptIntervention: 'Improve lumbo-pelvic control, Posterior capsule stretching, Activity modification.',
                        icon: 'Activity',
                        category: 'Hip',
                        details: {
                            overview: 'Types: CAM (Femoral overgrowth), Pincer (Acetabular overgrowth), or Mixed. Can lead to Labral tears.',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Avoid end-range impingement (deep squats). Glute strengthening.' },
                                { stage: 'Post-Op', focus: 'Protect labral repair if done. Gradual ROM restoration.' }
                            ]
                        }
                    },
                    {
                        id: 'gtps',
                        name: 'Greater Trochanteric Pain',
                        acronym: 'GTPS',
                        description: 'Lateral hip pain involving Glute Medius/Minimus tendinopathy or bursitis.',
                        keyFeatures: [
                            'Lateral hip pain (tender to palpation)',
                            'Pain with side-lying on affected side',
                            'Pain with single leg stance >30s',
                            'Weak hip abduction'
                        ],
                        ptIntervention: 'Isometric abduction, Load management (sleep hygiene), Glute strengthening.',
                        icon: 'Target',
                        category: 'Hip',
                        details: {
                            overview: 'Formerly "Trochanteric Bursitis", now understood as gluteal tendinopathy. Compressive load (ITB) aggravates it.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Avoid crossing legs, sleep with pillow between knees. Isometrics.' },
                                { stage: 'Rehab', focus: 'Eccentric abduction, functional loading.' }
                            ]
                        }
                    },
                    {
                        id: 'labral-tear',
                        name: 'Acetabular Labral Tear',
                        description: 'Tear of the fibrocartilage ring surrounding the hip socket.',
                        keyFeatures: [
                            'Clicking/Locking/Catching',
                            'Deep groin pain',
                            'Positive FADIR and FABER',
                            'Feeling of instability'
                        ],
                        ptIntervention: 'Neuromuscular control, Avoid pivoting under load, Core stability.',
                        icon: 'AlertTriangle',
                        category: 'Hip',
                        details: {
                            overview: 'Often associated with FAI or trauma/dysplasia. The labrum provides suction seal stability.',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Optimize movement patterns, minimize anterior hip stress.' }
                            ]
                        }
                    },
                    {
                        id: 'piriformis-syndrome',
                        name: 'Piriformis Syndrome',
                        description: 'Sciatic nerve entrapment by the piriformis muscle.',
                        keyFeatures: [
                            'Buttock pain radiating to posterior thigh',
                            'Pain with sitting/wallet in pocket',
                            'Positive FAIR test',
                            'Normal lumbar spine exam'
                        ],
                        ptIntervention: 'Piriformis stretching, Sciatic nerve glides, Glute activation.',
                        icon: 'Zap',
                        category: 'Hip',
                        details: {
                            overview: 'Deep Gluteal Syndrome. Diagnosis of exclusion usually.',
                            ptManagement: [
                                { stage: 'Treatment', focus: 'Soft tissue mobilization, Nerve mobilization, Correct pelvic alignment.' }
                            ]
                        }
                    },
                    {
                        id: 'adductor-strain',
                        name: 'Adductor Strain',
                        description: 'Strain of the adductor muscle group (Longus most common).',
                        keyFeatures: [
                            'Groin pain (medial)',
                            'Pain with sprinting/cutting',
                            'Pain with resisted adduction',
                            'Can have palpable defect'
                        ],
                        ptIntervention: 'Isometric adduction -> Eccentric loading (Copenhagen), Core stability.',
                        icon: 'Activity',
                        category: 'Hip',
                        details: {
                            overview: 'Common in "change of direction" sports (Hockey, Soccer). Known as "Groin Strain".',
                            ptManagement: [
                                { stage: 'Acute', focus: 'PRICE, gentle pain-free submax isometrics.' },
                                { stage: 'Rehab', focus: 'Copenhagen Adductor Exercise protocol is gold standard.' }
                            ]
                        }
                    },
                    {
                        id: 'ankle-sprain',
                        name: 'Lateral Ankle Sprain',
                        description: 'Inversion injury damaging ATFL (most common) then CFL ligaments.',
                        keyFeatures: [
                            'Swelling/Bruising laterally',
                            'Pain with inversion',
                            'Instability (Anterior Drawer positive)',
                            'Positive Ottawa Ankle Rules (if fx)'
                        ],
                        ptIntervention: 'RICE, Early WB, Proprioception/Balance training.',
                        icon: 'Footprints',
                        category: 'Foot & Ankle',
                        details: {
                            overview: 'ATFL resists inversion in plantarflexion. CFL resists inversion in neutral.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Protection (brace/tape), edema control, alphabet circles.' },
                                { stage: 'Subacute', focus: 'Single leg balance (eyes closed, foam), hopping/plyometrics.' }
                            ]
                        }
                    },
                    {
                        id: 'plantar-fasciitis',
                        name: 'Plantar Fasciitis',
                        description: 'Irritation/degeneration of the plantar fascia insertion at the calcaneus.',
                        keyFeatures: [
                            '"First step" morning pain (severe)',
                            'Pain at medial calcaneal tubercle',
                            'Positive Windlass test',
                            'Tight gastroc/soleus'
                        ],
                        ptIntervention: 'Stretching (Gastroc/Soleus/Fascia), Night splint, Orthotics.',
                        icon: 'Activity',
                        category: 'Foot & Ankle',
                        details: {
                            overview: 'Not just inflammatory ("-itis") but degenerative ("-osis"). Windlass mechanism support is key.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Unload (taping/orthotics), Rolling ice bottle, Night splint (keep DF).' },
                                { stage: 'Rehab', focus: 'High load strength training (plantar fascia loading).' }
                            ]
                        }
                    },
                    {
                        id: 'achilles-tendinopathy',
                        name: 'Achilles Tendinopathy',
                        description: 'Degeneration of the Achilles tendon (Midportion or Insertional).',
                        keyFeatures: [
                            'Localized thickening/nodule (midportion)',
                            'Morning stiffness',
                            'Pain with push-off/hopping',
                            'Positive Arc Sign'
                        ],
                        ptIntervention: 'Eccentric loading (Alfredson), Heavy Slow Resistance.',
                        icon: 'Zap',
                        category: 'Foot & Ankle',
                        details: {
                            overview: 'Midportion responds well to eccentrics. Insertional requires avoiding end-range DF.',
                            ptManagement: [
                                { stage: 'Midportion', focus: 'Alfredson Protocol: Eccentric heel drops (knee straight/bent).' },
                                { stage: 'Insertional', focus: 'Do NOT drop past neutral (flat floor only), avoiding compression.' }
                            ]
                        }
                    },
                    {
                        id: 'turf-toe',
                        name: 'Turf Toe',
                        description: 'Sprain of the 1st MTP joint capsule (Hyperextension injury).',
                        keyFeatures: [
                            'Pain at base of big toe',
                            'History of push-off injury on turf',
                            'Pain with passive extension',
                            'Swelling'
                        ],
                        ptIntervention: 'Rigid shoe insert (Morton\'s extension), Taping, Limit extension.',
                        icon: 'Target',
                        category: 'Foot & Ankle',
                        details: {
                            overview: 'Damage to plantar plate/sesamoids complex. Common in football.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Immobilize 1st MTP (carbon plate/boot).' },
                                { stage: 'Rehab', focus: 'Gradual extension loading, gait training.' }
                            ]
                        }
                    },
                    {
                        id: 'tarsal-tunnel',
                        name: 'Tarsal Tunnel Syndrome',
                        description: 'Compression of Posterior Tibial nerve behind medial malleolus.',
                        keyFeatures: [
                            'Burning/tingling in foot sole',
                            'Positive Tinel\'s at ankle',
                            'Worse with prolonged standing/pronation',
                            'Valgus heel common'
                        ],
                        ptIntervention: 'Orthotics (correct pronation), Nerve glides, Calf stretching.',
                        icon: 'Shield',
                        category: 'Foot & Ankle',
                        details: {
                            overview: 'Entrapment under the flexor retinaculum ("Carpal tunnel of the foot").',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Control pronation (medial post), nerve mobilization.' }
                            ]
                        }
                    },
                    {
                        id: 'lisfranc',
                        name: 'Lisfranc Injury',
                        description: 'Sprain or fracture at the Tarsometatarsal joints (Midfoot).',
                        keyFeatures: [
                            'Midfoot bruising (plantar ecchymosis)',
                            'Pain with weight bearing/push-off',
                            'Piano Key test positive',
                            'Widening of 1st-2nd metatarsal space'
                        ],
                        ptIntervention: 'NWB Cast Boot (Stable) or Surgery (Unstable).',
                        icon: 'AlertTriangle',
                        category: 'Foot & Ankle',
                        details: {
                            overview: 'Often missed. Mechanism: Axial load on plantarflexed foot. Plantar bruising is pathognomonic.',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Strict NWB (6 weeks). Progression to boot -> shoe.' }
                            ]
                        }
                    },
                    {
                        id: 'osgood-schlatter',
                        name: 'Osgood-Schlatter Disease',
                        description: 'Traction apophysitis of the tibial tuberosity in growing adolescents.',
                        keyFeatures: [
                            'Pain/bump at tibial tuberosity',
                            'Adolescent active in sports',
                            'Pain with quad contraction',
                            'Tight quads/hamstrings'
                        ],
                        ptIntervention: 'Activity modification, ice, stretching quads/hams, resolving biomechanical faults.',
                        icon: 'User',
                        category: 'Knee'
                    },
                    {
                        id: 'rtc',
                        name: 'Rotator Cuff Tear',
                        acronym: 'RCT',
                        description: 'Tear in one or more RTC tendons (Supraspinatus most common). Etiology: Traumatic or degenerative impingement.',
                        keyFeatures: [
                            'Pain with overhead activity (Painful Arc)',
                            'Night pain (sleeping on shoulder)',
                            'Weakness in abduction or external rotation',
                            'Positive Drop Arm and Empty Can tests'
                        ],
                        ptIntervention: 'Scapular stability, posture correction, RTC strengthening (begin isometrics -> isotonics), manual therapy for capsule tightness.',
                        icon: 'RotateCw', // Placeholder
                        category: 'Shoulder',
                        details: {
                            overview: 'Rotator Cuff Pathology ranges from mild tendinopathy to massive full-thickness tears. The supraspinatus is most commonly affected due to its location under the subacromial arch.',
                            anatomy: [
                                'SITS Muscles: Supraspinatus (Abduction), Infraspinatus/Teres Minor (ER), Subscapularis (IR).',
                                'Critical Zone: Avascular zone of supraspinatus tendon prone to degeneration.'
                            ],
                            specialTests: ['Empty Can', 'Drop Arm', 'ER Lag Sign', 'Neer\'s/Hawkins (for impingement)'],
                            ptManagement: [
                                { stage: 'Protection', focus: 'Avoid aggravating activities (overhead). Isometrics for pain relief.' },
                                { stage: 'Mobility', focus: 'Restore ROM (Pec release, posterior capsule stretch).' },
                                { stage: 'Strengthening', focus: 'Scapular stabilizers (Lower Trap/Serratus) and RC (Sidelying ER, Prone Ys/Ts).' }
                            ]
                        }
                    },
                    {
                        id: 'shoulder-impingement',
                        name: 'Subacromial Impingement (SAIS)',
                        acronym: 'SAIS',
                        description: 'Compression of subacromial structures (bursa, RC tendons) during overhead movement.',
                        keyFeatures: [
                            'Painful Arc (60-120 degrees)',
                            'Positive Neer\'s and Hawkins-Kennedy',
                            'Pain with overhead reaching',
                            'Forward head/rounded shoulder posture'
                        ],
                        ptIntervention: 'Posture re-education, posterior capsule mobilization, strengthening scapular retractors/upward rotators.',
                        icon: 'AlertTriangle',
                        category: 'Shoulder',
                        details: {
                            overview: 'SAIS occurs when the subacromial space is narrowed, often due to poor scapular mechanics or anatomical variance (Type I-III acromion).',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Reduce inflammation (Ice, positioning). Taping for posture.' },
                                { stage: 'Rehab', focus: 'Strengthen Serratus Anterior (upward rotation) and Lower Trap (depression) to clear acromion.' }
                            ]
                        }
                    },
                    {
                        id: 'frozen-shoulder',
                        name: 'Adhesive Capsulitis (Frozen Shoulder)',
                        acronym: 'FS',
                        description: 'Progressive restriction of GH joint capsule causing severe stiffness and pain.',
                        keyFeatures: [
                            'Capsular Pattern: ER > ABD > IR loss',
                            'Freezing, Frozen, Thawing stages',
                            'Diabetes is a major risk factor',
                            'Night pain'
                        ],
                        ptIntervention: 'Pain relief (Freezing), Aggressive mobilization (Frozen/Thawing), pulleys, wand exercises.',
                        icon: 'ShieldAlert',
                        category: 'Shoulder',
                        details: {
                            overview: 'A self-limiting condition characterized by fibrosis of the GH joint capsule. Recovery can take 1-2 years.',
                            anatomy: ['Coracohumeral ligament thickening', 'Retraction of inferior capsule'],
                            stages: ['Freezing (Painful)', 'Frozen (Stiff)', 'Thawing (Recovery)'],
                            ptManagement: [
                                { stage: 'Freezing', focus: 'Pain control. Gentle PROM (Pendulums). Avoid aggressive stretching.' },
                                { stage: 'Frozen', focus: 'Grade III/IV mobilizations (Inferior/Posterior glides) to stretch capsule.' },
                                { stage: 'Thawing', focus: 'Restore full functional ROM and strength.' }
                            ]
                        }
                    },
                    {
                        id: 'shoulder-instability',
                        name: 'Glenohumeral Instability',
                        description: 'Excessive laxity of the GH joint leading to subluxation or dislocation (usually Anterior).',
                        keyFeatures: [
                            'History of dislocation ("pop")',
                            'Positive Apprehension/Relocation tests',
                            'Bankart or Hill-Sachs lesions',
                            'Generalized laxity (Beighton score)'
                        ],
                        ptIntervention: 'Dynamic stability training (Bodyblade), rhythmic stabilization, RC strengthening.',
                        icon: 'Activity',
                        category: 'Shoulder'
                    },
                    {
                        id: 'labral-tears',
                        name: 'Labral Tears (SLAP & Bankart)',
                        description: 'Injury to the glenoid labrum. SLAP (Superior) or Bankart (Anterior/Inferior).',
                        keyFeatures: [
                            'Clicking, catching, or popping',
                            'Deep shoulder pain',
                            'Positive O\'Brien\'s (SLAP) or Crank test',
                            'History of dislocation (Bankart)'
                        ],
                        ptIntervention: 'Stabilization exercises, avoiding bicep tension (SLAP), proprioception. Post-op protocols are specific.',
                        icon: 'Target',
                        category: 'Shoulder',
                        details: {
                            overview: 'SLAP tears involve the biceps anchor. Bankart lesions are associated with anterior dislocation.',
                            ptManagement: [
                                { stage: 'Conservative', focus: 'Restore ROM, RTC strength, scapular stability.' },
                                { stage: 'Post-Op', focus: 'Protect repair (limit ER for Bankart, limit bicep load for SLAP).' }
                            ]
                        }
                    },
                    {
                        id: 'ac-separation',
                        name: 'AC Joint Separation',
                        description: 'Sprain or separation of the acromioclavicular joint, usually from landing on the shoulder tip.',
                        keyFeatures: [
                            'Pain at AC joint',
                            'Step-off deformity (severe grades)',
                            'Positive Cross-Body Adduction test',
                            'Pain with elevation > 90°'
                        ],
                        ptIntervention: 'Grade I/II: Sling, early ROM, strengthening. Grade III+: May require surgery.',
                        icon: 'Minimize2',
                        category: 'Shoulder',
                        details: {
                            overview: 'Graded I-VI based on ligament damage (AC vs Coracoclavicular).',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Immobilization, ice, pain control.' },
                                { stage: 'Rehab', focus: 'Restore ROM, strengthen deltoid/trapezius.' }
                            ]
                        }
                    },
                    {
                        id: 'thoracic-outlet',
                        name: 'Thoracic Outlet Syndrome (TOS)',
                        acronym: 'TOS',
                        description: 'Compression of brachial plexus or subclavian vessels in the thoracic outlet.',
                        keyFeatures: [
                            'Numbness/tingling in hand (ulnar dist.)',
                            'Weakness in hand muscles',
                            'Positive Adson\'s, Roos, or Wright\'s tests',
                            'Cold intolerance (vascular)'
                        ],
                        ptIntervention: 'Postural correction, stretching scalenes/pec minor, nerve gliding, first rib mobilization.',
                        icon: 'Activity', // Nerve icon?
                        category: 'Shoulder',
                        details: {
                            overview: 'Entrapment sites: Scalene triangle, Costoclavicular space, Subcoracoid space (Pec Minor).',
                            ptManagement: [
                                { stage: 'Mobility', focus: 'Stretch unequal structures (Scalenes, Pecs). Joint mob 1st rib/clavicle.' },
                                { stage: 'Postural', focus: 'Strengthen deep neck flexors, scapular retractors.' }
                            ]
                        }
                    },
                    {
                        id: 'clavicle-fracture',
                        name: 'Clavicle Fracture',
                        description: 'Break in the collarbone, most commonly in the middle third.',
                        keyFeatures: [
                            'Visible deformity/swelling',
                            'Point tenderness',
                            'Guarding (holding arm against body)',
                            'Mechanism: Fall on outstretched hand or direct blow'
                        ],
                        ptIntervention: 'Immobilization (Figure-8 brace) -> Gentle ROM -> Strengthening.',
                        icon: 'AlertOctagon',
                        category: 'Shoulder'
                    },
                    {
                        id: 'scapular-dyskinesis',
                        name: 'Scapular Dyskinesis',
                        description: 'Alteration in normal resting position or dynamic motion of the scapula.',
                        keyFeatures: [
                            'Winging (medial or lateral)',
                            'Poor scapulohumeral rhythm',
                            'Associated with shoulder pain (impingement/instability)',
                            'Tight Pec Minor / Weak Serratus Anterior'
                        ],
                        ptIntervention: 'Scapular re-education, strengthening stabilizers (Serratus, Lower Trap), stretching anterior chest.',
                        icon: 'RefreshCw',
                        category: 'Shoulder'
                    },
                    {
                        id: 'biceps-tendinitis',
                        name: 'Biceps Tendinitis',
                        description: 'Inflammation of the long head of the biceps tendon in the bicipital groove.',
                        keyFeatures: [
                            'Anterior shoulder pain',
                            'Tenderness over bicipital groove',
                            'Pain with overhead activity',
                            'Positive Speed\'s and Yergason\'s tests'
                        ],
                        ptIntervention: 'Eccentric strengthening, scapular stabilization, correcting mechanics (e.g. throwing form).',
                        icon: 'Activity',
                        category: 'Shoulder',
                        details: {
                            overview: 'Often secondary to impingement or instability. Common in overhead athletes.',
                            ptManagement: [
                                { stage: 'Acute', focus: 'Rest, Ice, NSAIDs. Avoid painful arc.' },
                                { stage: 'Rehab', focus: 'Eccentric biceps loading. Scapular re-education.' }
                            ]
                        }
                    },

                ]
            },

        ]
    },
    {
        id: 'cardiopulmonary',
        title: 'Cardiopulmonary Physiology',
        description: 'The essential systems for delivering oxygen to tissues and removing carbon dioxide.',
        icon: 'Heart',
        subtopics: [
            {
                id: 'cardiac-anatomy',
                title: 'Cardiac Anatomy & Cycle',
                introduction: 'The pump (Heart) and its electrical drive.',
                type: 'interactive-heart',
                content: [
                    'Chambers: Right Heart (Venous return -> Lungs), Left Heart (Oxygenated -> Body).',
                    'Valves: Tricuspid/Mitral (AV valves - S1 "Lub"), Pulmonic/Aortic (Semilunar - S2 "Dub").',
                    'Systole: Contraction & Ejection (1/3 of cycle).',
                    'Diastole: Relaxation & Filling (2/3 of cycle - Coronary perfusion occurs here).',
                    'Conduction: SA Node (Pacemaker) -> AV Node (Delays signal) -> Bundle of His -> Purkinje Fibers.',
                    'ECG Basics: P wave (atrial depol), QRS (ventricular depol), T wave (ventricular repol).'
                ],
                clinicalRelevance: 'Atrial Fibrillation loses "Atrial Kick" (20-30% of CO). Tachycardia shortens Diastole (risk of ischemia).',
                pathologyConnection: 'Valve Stenosis (obstruction) vs Regurgitation (backflow) causes murmurs.'
            },
            {
                id: 'hemodynamics',
                title: 'Hemodynamics & Exercise',
                introduction: 'Physics of blood flow, pressure regulation, and exercise adaptations.',
                content: [
                    'Cardiac Output (Q): HR x SV. Resting ~5L/min. Elite athletes have high SV, low HR.',
                    'Blood Pressure: Q x TPR (Resistance). Regulated by Baroreceptors (short term) and Kidneys (long term).',
                    'Oxyhemoglobin Curve: Shift Right (Bohr Effect) = Unloads O2 to tissues (Acidosis, Hyperthermia, CO2).',
                    'A-VO2 Difference: Amount of O2 extracted by tissues. Increases with exercise.'
                ],
                clinicalRelevance: 'Valsalva Maneuver increases intrathoracic pressure, dropping venous return. Contraindicated in cardiac patients.'
            },
            {
                id: 'pulmonary-mechanics',
                title: 'Pulmonary Physiology',
                introduction: 'Mechanics of breathing and gas exchange.',
                content: [
                    'Muscles of Inspiration: Diaphragm (Primary - C3,4,5), External Intercostals.',
                    'Muscles of Expiration: Passive at rest. Abdominals/Internal Intercostals during forced expiration (Cough).',
                    'Lung Volumes: Tidal Volume (TV - normal breath), Residual Volume (RV - air left after max exhale), Vital Capacity (VC - max exhale after max inhale).',
                    'V/Q Mismatch: Ratio of Ventilation (V) to Perfusion (Q). Dead Space (V without Q), Shunt (Q without V).'
                ],
                clinicalRelevance: 'Paradoxical Breathing (abdomen moves in on inhale) indicates diaphragm fatigue or paralysis.'
            },
            {
                id: 'cp-pathologies',
                title: 'Cardiopulmonary Pathologies',
                type: 'pathology-grid',
                introduction: 'Common conditions affecting the heart and lungs.',
                pathologies: [
                    // --- CARDIAC ---
                    {
                        id: 'cad', name: 'Coronary Artery Disease (CAD)', category: 'Cardiac',
                        icon: 'Heart',
                        description: 'Atherosclerosis of coronary arteries leading to reduced blood supply to the heart muscle.',
                        keyFeatures: ['Angina (Stable vs Unstable)', 'ST Depression (Ischemia)', 'Levine\'s Sign (Clenched fist to chest)'],
                        ptIntervention: 'Aerobic conditioning (Below angina threshold), Risk factor determination.',
                        details: {
                            overview: 'CAD is the narrowing or blockage of the coronary arteries, usually caused by atherosclerosis. It is the major cause of myocardial infarction.',
                            anatomy: ['LAD (Left Anterior Descending) - Supplies anterior LV.', 'RCA (Right Coronary Artery) - Supplies SA/AV nodes (arrhythmia risk).'],
                            physiology: ['Demand Ischemia: O2 demand > O2 supply.', 'Stable Angina: Predictable pattern. Unstable Angina: Unpredictable/at rest (Red Flag).'],
                            stats: [{ label: 'Prevalence', value: '#1 Killer in US' }, { label: 'Target', value: 'LDL < 100' }],
                            medications: [{ name: 'Statins', effect: 'Lower cholesterol' }, { name: 'Nitroglycerin', effect: 'Vasodilation (acute angina)' }],
                            ptManagement: [{ stage: 'Assessment', focus: 'Determine RPP (Rate Pressure Product).' }, { stage: 'Intervention', focus: 'Aerobic training 40-80% HRR. Warm-up essential.' }]
                        }
                    },
                    {
                        id: 'mi', name: 'Myocardial Infarction (MI)', category: 'Cardiac',
                        icon: 'AlertTriangle',
                        description: 'Irreversible necrosis of heart tissue due to prolonged ischemia.',
                        keyFeatures: ['STEMI (Elevated ST)', 'Elevated Troponin I/T', 'Crushing chest pain', 'Diaphoresis'],
                        ptIntervention: 'Phase I Rehab (Inpatient): Early mob (1-2 METs), Sternal precautions (if CABG).',
                        details: {
                            overview: 'An MI ("heart attack") occurs when a coronary artery is completely occluded, causing cell death.',
                            anatomy: ['Zone of Infarction (Dead)', 'Zone of Injury (Non-contractile)', 'Zone of Ischemia (Salvagable)'],
                            physiology: ['Systolic Dysfunction: Loss of pump strength.', 'Diastolic Dysfunction: Stiffness/scarring.'],
                            stats: [{ label: 'Golden Hour', value: 'Reperfusion window' }, { label: 'Complication', value: 'Arrhythmia/Sudden Death' }],
                            medications: [{ name: 'Beta Blockers', effect: 'Reduce myocardial O2 demand' }, { name: 'Antiplatelets', effect: 'Prevent clots (Aspirin/Plavix)' }],
                            ptManagement: [
                                { stage: 'Phase I', focus: 'Vitals monitoring (HR rise < 20bpm). Sternal precautions.' },
                                { stage: 'Phase II', focus: 'Outpatient monitored exercise (ECG).' },
                                { stage: 'Phase III', focus: 'Life-long maintenance.' }
                            ]
                        }
                    },
                    {
                        id: 'chf', name: 'Congestive Heart Failure', category: 'Cardiac',
                        icon: 'Activity',
                        description: 'Chronic inability of the heart to pump sufficient blood to meet metabolic needs.',
                        keyFeatures: ['L-Sided: Dyspnea/Orthopnea/S3 Heart sound', 'R-Sided: Periph Edema/JVD/Weight gain'],
                        ptIntervention: 'Energy conservation, Upright positioning, Monitoring weight gain (>3lbs/day).',
                        details: {
                            overview: 'Heart failure is a progressive condition where the heart muscle is unable to pump enough blood due to weakness (Systolic) or stiffness (Diastolic).',
                            anatomy: ['Left Ventricular Hypertrophy (LVH).', 'Dilation (enlarged chambers).'],
                            physiology: ['Compensated: RAAS activation retains fluid to boost BP.', 'Decompensated: Fluid overload causes pulmonary edema.'],
                            stats: [{ label: 'Classification', value: 'NYHA Class I-IV' }, { label: 'Marker', value: 'BNP (B-type Natriuretic Peptide)' }],
                            medications: [{ name: 'Diuretics (Lasix)', effect: 'Fluid removal' }, { name: 'ACE Inhibitors', effect: 'Vasodilation/Remodeling prevention' }],
                            ptManagement: [{ stage: 'Acute', focus: 'Upright posture, frequent rest.' }, { stage: 'Chronic', focus: 'Interval training, 6MWT assessment.' }]
                        }
                    },
                    {
                        id: 'pad', name: 'Peripheral Artery Disease', category: 'Vascular',
                        icon: 'Footprints', // Requires icon support, fallback to generic if needed
                        description: 'Atherosclerosis of the lower extremities causing reduced blood flow.',
                        keyFeatures: ['Intermittent Claudication (Pain with walking)', 'ABI < 0.90', 'Diminished pulses', 'Shiny/hairless skin'],
                        ptIntervention: 'Walking program: Walk to claudication pain (3/4), rest until subsides, repeat.',
                        details: {
                            overview: 'PAD is arterial insufficiency in the limbs. It is a strong predictor of concomitant CAD.',
                            anatomy: ['Femoral Artery', 'Popliteal Artery', 'Dorsalis Pedis (Pulse check)'],
                            physiology: ['Supply vs Demand mismatch in leg muscles.', 'Critical Limb Ischemia: Pain at rest (Advanced).'],
                            stats: [{ label: 'ABI Normal', value: '1.0 - 1.4' }, { label: 'Severe', value: 'ABI < 0.5' }],
                            medications: [{ name: 'Cilostazol', effect: 'Vasodilator/Antiplatelet' }, { name: 'Statins', effect: 'Plaque stabilization' }],
                            ptManagement: [{ stage: 'Claudication', focus: 'Walk-Rest-Walk regimen (Angiogenesis).' }, { stage: 'Wound Care', focus: 'Protect feet/inspection.' }]
                        }
                    },
                    {
                        id: 'dvt', name: 'DVT & Pulmonary Embolism', category: 'Vascular',
                        icon: 'AlertTriangle',
                        description: 'Venous thrombosis with risk of dislodging to lungs (PE).',
                        keyFeatures: ['Unilateral calf swelling', 'Redness/Warmth', 'Wells Score criteria', 'Shortness of breath (PE)'],
                        ptIntervention: 'Prevention (Ankle pumps). Once anticoagulated: Early ambulation is SAFE (does not dislodge clot).',
                        details: {
                            overview: 'Deep Vein Thrombosis is a clot in deep veins. Pulmonary Embolism is when it travels to lungs (Medical Emergency).',
                            anatomy: ['Deep Veins: Iliac, Femoral, Popliteal, Tibial.', 'Lungs: Pulmonary Artery blockage.'],
                            physiology: ['Virchow\'s Triad: Stasis, Endothelial Injury, Hypercoagulability.'],
                            stats: [{ label: 'Wells Score', value: '>2 = High Probability' }, { label: 'PE Risk', value: 'High Mortality without Tx' }],
                            medications: [{ name: 'Heparin/Lovenox', effect: 'Rapid anticoagulation' }, { name: 'Warfarin/Eliquis', effect: 'Long term Maintenance' }],
                            ptManagement: [{ stage: 'Prevention', focus: 'Compression stockings, mobility.' }, { stage: 'Acute DVT', focus: 'Mobilize AFTER anticoagulation started.' }]
                        }
                    },

                    // --- PULMONARY ---
                    {
                        id: 'copd', name: 'COPD', category: 'Pulmonary',
                        icon: 'Wind',
                        description: 'Group of diseases (Emphysema/Chronic Bronchitis) blocking airflow.',
                        keyFeatures: ['Barrel Chest', 'Pursed Lip Breathing', 'Digital Clubbing', 'Respiratory Acidosis'],
                        ptIntervention: 'Pursed Lip Breathing (PLB), Tripod position, Energy conservation.',
                        details: {
                            overview: 'COPD is characterized by irreversible airflow limitation.',
                            anatomy: ['Emphysema: Alveolar wall destruction (Pink Puffer).', 'Chronic Bronchitis: Mucus/Inflammation (Blue Bloater).'],
                            physiology: ['Air Trapping: Increased Residual Volume (RV).', 'Hypoxic Drive: Dependent on low O2 (use caution with O2 therapy).'],
                            stats: [{ label: 'FEV1/FVC', value: '< 0.70 (Diagnostic)' }, { label: 'O2 Sat', value: '88-92% Target' }],
                            medications: [{ name: 'Bronchodilators', effect: 'Albuterol/Spiriva' }, { name: 'Steroids', effect: 'Anti-inflammatory' }],
                            ptManagement: [{ stage: 'Tech', focus: 'Pursed Lip Breathing (provides internal PEEP).' }, { stage: 'Exercise', focus: 'Interval training to improve skeletal muscle usage.' }]
                        }
                    },
                    {
                        id: 'restrictive', name: 'Restrictive Lung Disease', category: 'Pulmonary',
                        icon: 'Wind',
                        description: 'Conditions preventing full lung expansion (e.g., Pulmonary Fibrosis, Scoliosis).',
                        keyFeatures: ['Rapid Shallow Breathing', 'Dry Cough', 'Decreased Lung Volumes (TLC)', 'Cyanosis'],
                        ptIntervention: 'Deep breathing (Diaphragmatic), Thoracic mobilization/stretching.',
                        details: {
                            overview: 'Restrictive diseases involve stiffness of the lung parenchyma or chest wall issues.',
                            anatomy: ['Interstitial Fibrosis (Scarring).', 'Chest Wall: Scoliosis, Obesity, Ankylosing Spondylitis.'],
                            physiology: ['Decreased Compliance (Stiff lungs).', 'Work of breathing is increased.'],
                            stats: [{ label: 'FVC', value: 'Reduced' }, { label: 'FEV1/FVC', value: 'Normal or High' }],
                            medications: [{ name: 'Anti-fibrotics', effect: 'Slow progression (IPF)' }, { name: 'O2', effect: 'Supportive' }],
                            ptManagement: [{ stage: 'Focus', focus: 'Chest expansion exercises, Posture correction.' }, { stage: 'Outcome', focus: 'Maximize functional independence.' }]
                        }
                    },
                    {
                        id: 'pneumonia', name: 'Pneumonia', category: 'Pulmonary',
                        icon: 'Activity',
                        description: 'Infection causing inflammation and fluid in alveoli.',
                        keyFeatures: ['Productive Cough (Green/Rusty)', 'Fever/Chills', 'Crackles/Rales', 'Tachycardia'],
                        ptIntervention: 'Airway clearance (Percussion/Vibration - if no abscess), Early mobilization.',
                        details: {
                            overview: 'Inflammatory condition of the lung primarily affecting alveoli filled with fluid or pus.',
                            anatomy: ['Lobar (one lobe) vs Bronchopneumonia (patchy).', 'Aspiration: Usually R Middle/Lower lobe.'],
                            physiology: ['V/Q Shunt: Perfusion without ventilation (Hypoxemia).', 'Consolidation on X-ray.'],
                            stats: [{ label: 'Type', value: 'Community Acquired vs Hospital' }, { label: 'Prevention', value: 'Vaccination/Mobility' }],
                            medications: [{ name: 'Antibiotics', effect: 'Bacterial' }, { name: 'Expectorants', effect: 'Thin mucus' }],
                            ptManagement: [{ stage: 'Acute', focus: 'Deep breathing (Incentive Spirometry).' }, { stage: 'Drainage', focus: 'Postural drainage positions.' }]
                        }
                    },
                    {
                        id: 'cf', name: 'Cystic Fibrosis', category: 'Pulmonary',
                        icon: 'Activity',
                        description: 'Genetic disorder affecting exocrine glands (thick mucus in lungs/pancreas).',
                        keyFeatures: ['Salty skin', 'Frequent infections', 'Failure to thrive', 'Positive Sweat Test'],
                        ptIntervention: 'Vigorous Airway Clearance (Vest, percussion), High intensity aerobic exercise.',
                        details: {
                            overview: 'CF is an autosomal recessive disorder mutating the CFTR protein, leading to thick, sticky mucus.',
                            anatomy: ['Lungs: Bronchiectasis (dilated airways).', 'Pancreas: Enzyme deficiency.'],
                            physiology: ['Mucus plugging -> Infection -> Scarring.', 'Malabsorption of nutrients.'],
                            stats: [{ label: 'Life Exp', value: 'Rising (~40-50s)' }, { label: 'Genetics', value: 'CFTR Mut' }],
                            medications: [{ name: 'Mucolytics', effect: 'Pulmozyme' }, { name: 'CFTR Modulators', effect: 'Trikafta (Game changer)' }],
                            ptManagement: [{ stage: 'Daily', focus: 'Airway Clearance Techniques (ACTs) mandatory.' }, { stage: 'Exercise', focus: 'Sports participation encouraged.' }]
                        }
                    },
                    {
                        id: 'asthma', name: 'Asthma', category: 'Pulmonary',
                        icon: 'Wind',
                        description: 'Chronic inflammatory airway disease with reversible obstruction.',
                        keyFeatures: ['Wheezing (Expiratory)', 'Chest tightness', 'Dyspnea', 'Night symptoms'],
                        ptIntervention: 'Education on triggers, Warm-up/Cool-down (prevent EIB), Breathing control.',
                        details: {
                            overview: 'Asthma involves airway hyper-responsiveness to triggers (allergens, cold air, exercise).',
                            anatomy: ['Bronchial smooth muscle constriction.', 'Mucosal edema.'],
                            physiology: ['Reversible Obstruction: Improves with bronchodilator.', 'Status Asthmaticus: Emergency (unrelenting).'],
                            stats: [{ label: 'Triggers', value: 'Exercise, Cold, Allergens' }, { label: 'Sounds', value: 'Wheezing' }],
                            medications: [{ name: 'Rescue Inhaler', effect: 'SABA (Albuterol)' }, { name: 'Controller', effect: 'ICS (Steroids)' }],
                            ptManagement: [{ stage: 'EIB', focus: 'Exercise Induced Bronchospasm prevention.' }, { stage: 'Attack', focus: 'Upright, PLB, Inhaler use.' }]
                        }
                    }
                ]
            },
            {
                id: 'pt-management',
                title: 'PT Management & Interventions',
                introduction: 'Specific techniques for cardiopulmonary rehabilitation.',
                content: [
                    'Pursed Lip Breathing (PLB): Increases back-pressure to keep airways open (good for COPD).',
                    'Diaphragmatic Breathing: Reduces accessory muscle use and work of breathing.',
                    'Postural Drainage: Using gravity to drain secretions. (e.g., Prone for posterior segments, Trendelenburg for lower lobes).',
                    'Auscultation Sounds: Wheezes (Asthma/COPD), Crackles/Rales (Fluid/Pneumonia/CHF), Stridor (Upper airway obstruction).'
                ],
                clinicalRelevance: 'Stop exercise if: Angina, Lightheadedness, Cyanosis, or abnormal BP response (drop in SBP >10mmHg).'
            }
        ]
    },

    {
        id: 'pharmacology',
        title: 'Pharmacology for PT',
        description: 'Common medications encountered in practice and their impact on physical therapy interventions.',
        icon: 'Pill',
        subtopics: [
            {
                id: 'med-classes',
                title: 'Common Medications',
                introduction: 'Understanding drug mechanisms and side effects is crucial for patient safety and maximizing therapeutic outcomes.',
                type: 'pathology-grid', // Reuse grid for drug cards
                clinicalRelevance: 'Medications can blunt heart rate response, increase fall risk, or mask pain during evaluation.',
                pathologyConnection: 'Drugs interact with tissue healing and systemic physiology.',
                categoryContent: {}, // Not needed for simple grid unless I want detailed tabs, which I do.
                pathologies: pharmacologyData // This will populate the grid
            }
        ]
    },
    {
        id: 'vestibular',
        title: 'Vestibular System',
        description: 'The sensory system responsible for providing our brain with information about motion, head position, and spatial orientation.',
        icon: 'Activity',
        subtopics: [
            {
                id: 'vestibular-anatomy',
                title: 'Vestibular Anatomy',
                introduction: 'The vestibular apparatus is located in the inner ear and detects linear and angular acceleration.',
                type: 'text-content',
                content: [
                    'Semicircular Canals (SCC): Detect angular acceleration (rotation). 3 canals: Anterior, Posterior, Horizontal.',
                    'Otolith Organs: Utricle and Saccule. Detect linear acceleration (gravity/translation). Contains crystals (otoconia).',
                    'Vestibulo-Ocular Reflex (VOR): Stabilizes gaze during head movement (Head moves left -> Eyes move right 1:1 ratio).',
                    'Vestibulospinal Reflex (VSR): Stabilizes body posture.'
                ]
            },
            {
                id: 'vestibular-pathologies',
                title: 'Vestibular Pathologies',
                introduction: 'Common disorders affecting the peripheral or central vestibular system, leading to vertigo, dizziness, and imbalance.',
                type: 'pathology-grid',
                clinicalRelevance: 'Differentiating between peripheral (BPPV, Neuritis) and central (Stroke, TBI) causes is the first priority in assessment (HINTS exam).',
                pathologyConnection: 'Vertigo is a symptom, not a diagnosis. Treatment relies on finding the mechanical or physiological root.',
                categoryContent: {
                    'All': {
                        pathologyInfo: true,
                        specialTests: [
                            {
                                category: 'Oculomotor / VOMs',
                                tests: [
                                    { name: 'Smooth Pursuit', purpose: 'Central Vestibular', positive: 'Saccadic (jerky) tracking' },
                                    { name: 'Saccades', purpose: 'Central Vestibular', positive: 'Overshooting (hypermetria) or undershooting' },
                                    { name: 'Convergence', purpose: 'Central / Concussion', positive: 'Near Point Convergence > 6cm' },
                                    { name: 'VOR Cancellation', purpose: 'Cerebellar function', positive: 'Saccades (inability to suppress VOR)' }
                                ]
                            },
                            {
                                category: 'VOR Function',
                                tests: [
                                    { name: 'Head Impulse Test (HIT)', purpose: 'Peripheral Hypofunction', positive: 'Corrective Saccade (refixation)' },
                                    { name: 'Dynamic Visual Acuity (DVA)', purpose: 'Vestibular function during motion', positive: 'Loss of >2 lines on eye chart' },
                                    { name: 'Head Shake Nystagmus', purpose: 'Asymmetric Vestibular Input', positive: '>3 beats of nystagmus' }
                                ]
                            },
                            {
                                category: 'Positional Testing',
                                tests: [
                                    { name: 'Dix-Hallpike', purpose: 'PC/AC BPPV', positive: 'Vertigo + Torsional/Upbeating Nystagmus' },
                                    { name: 'Supine Roll Test', purpose: 'Horizontal Canal BPPV', positive: 'Vertigo + Geotropic/Apogeotropic Nystagmus' }
                                ]
                            },
                            {
                                category: 'Spinal / Balance',
                                tests: [
                                    { name: 'Fukuda Step Test', purpose: 'Peripheral asymmetry', positive: 'Rotation >30 degrees' },
                                    { name: 'Romberg (Sharpened)', purpose: 'Somatosensory/Vestibular', positive: 'Sway or falls (Eyes Closed)' }
                                ]
                            }
                        ],
                        redFlags: [
                            {
                                category: 'HINTS Exam (Acute Vestibular Syndrome)',
                                findings: [
                                    { name: 'HI (Head Impulse)', description: 'Normal Head Impulse Test (in acute vertigo means Central/Stroke).' },
                                    { name: 'N (Nystagmus)', description: 'Direction-Changing Nystagmus (e.g., Left looking Left, Right looking Right).' },
                                    { name: 'TS (Test of Skew)', description: 'Vertical Skew Deviation (eye misalignment).' }
                                ]
                            },
                            {
                                category: 'Central Signs',
                                findings: [
                                    { name: 'The 4 D\'s', description: 'Diplopia, Dysphagia, Dysarthria, Dysmetria.' },
                                    { name: 'Vertical Nystagmus', description: 'Pure vertical nystagmus (without torsion) is always Central.' },
                                    { name: 'Ataxia', description: 'Inability to stand or walk (Peripheral vertigo patients can usually walk).' }
                                ]
                            }
                        ]
                    }
                },
                pathologies: [
                    {
                        id: 'bppv',
                        name: 'Benign Paroxysmal Positional Vertigo',
                        acronym: 'BPPV',
                        description: 'Mechanical disorder where otoconia (crystals) are displaced into the semicircular canals.',
                        keyFeatures: [
                            'Short duration vertigo (<1 min)',
                            'Positional trigger (Rolling over, looking up)',
                            'Fatigable nystagmus',
                            'Normal hearing'
                        ],
                        ptIntervention: 'Canalith Repositioning Maneuvers (Epley for PC/AC, BBQ Roll for HC). Education on post-maneuver precautions.',
                        icon: 'RotateCw',
                        category: 'Peripheral',
                        details: {
                            overview: 'Most common cause of vertigo. 90% affects Posterior Canal. Can be canalithiasis (free floating) or cupulothiasis (adhered).',
                            anatomy: [
                                'Affected Structure: Semicircular Canals (Posterior > Horizontal > Anterior).',
                                'Mechanism: Displacement of Otoconia from Utricle -> Canals.'
                            ],
                            physiology: [
                                'Gravity Sensitivity: Displaced crystals make the fluid-filled canal sensitive to gravity, causing false signals of movement.',
                                'Nystagmus: Torsional/Upbeating (Posterior), Geotropic (Horizontal).'
                            ],
                            stats: [
                                { label: 'Prevalence', value: '2.4% lifetime prevalence' },
                                { label: 'Recurrence', value: '50% within 5 years' },
                                { label: 'Age', value: 'Increases with age (avg 60s)' }
                            ],
                            medications: [
                                { name: 'Meclizine', mechanism: 'Antihistamine', effect: 'Suppresses symptoms (Not recommended for BPPV treatment).' }
                            ],
                            medicalInterventions: [
                                'None usually needed unless intractable (canal plugging surgery - rare).'
                            ],
                            ptManagement: [
                                { stage: 'Assessment', focus: 'Dix-Hallpike (Ant/Post canals) & Roll Test (Horiz canal).' },
                                { stage: 'Treatment', focus: 'Epley (Post Canal), Semont, BBQ Roll (Horiz), Gufoni.' },
                                { stage: 'Education', focus: 'Avoid potential triggers for 24h (sleeping with head up is outdated but often advised).' }
                            ]
                        }
                    },
                    {
                        id: 'uvh',
                        name: 'Unilateral Vestibular Hypofunction',
                        acronym: 'UVH',
                        description: 'Reduced function of one inner ear, often due to infection (Neuritis/Labyrinthitis).',
                        keyFeatures: [
                            'Spontaneous nystagmus (acute)',
                            'Gaze instability (oscillopsia)',
                            'Postural instability',
                            'Positive Head Impulse Test'
                        ],
                        ptIntervention: 'Gaze stabilization (VOR x1, x2), Habituation exercises (for motion sensitivity), Balance training.',
                        icon: 'AlertTriangle',
                        category: 'Peripheral',
                        details: {
                            overview: 'Sudden onset of severe vertigo lasting days, followed by chronic imbalance. Neuritis = nerve only. Labyrinthitis = nerve + hearing loss.',
                            anatomy: [
                                'Affected: Vestibular Nerve (CN VIII) or Labyrinth.',
                                'Etiology: Viral infection (Herpes Simplex), Vascular ischemia.'
                            ],
                            physiology: [
                                'Firing Rate asymmetry: Healthy side fires at tonic rate, sick side fires less -> Brain thinks head is spinning toward healthy side.',
                                'Compensation: Central nervous system adapts to recalibrate VOR.'
                            ],
                            stats: [
                                { label: 'Recovery', value: 'Good with Vestibular Rehab (VRT)' },
                                { label: 'Timeline', value: 'Acute (days) -> Chronic (weeks)' }
                            ],
                            medications: [
                                { name: 'Steroids', mechanism: 'Anti-inflammatory', effect: 'Acute management (Prednisone).' },
                                { name: 'Vestibular Suppressants', mechanism: 'Benzos/Antihistamines', effect: 'Use ONLY in acute phase (stops compensation).' }
                            ],
                            medicalInterventions: [
                                'MRI: To rule out stroke or tumor.'
                            ],
                            ptManagement: [
                                { stage: 'Adaptation', focus: 'VOR x1 viewing: Retraining the gain of the reflex.' },
                                { stage: 'Habituation', focus: 'Desensitization: Repeated exposure to provoking movements.' },
                                { stage: 'Substitution', focus: 'Sensory integration: Relying on somatosensory/visual cues.' }
                            ]
                        }
                    },
                    {
                        id: 'menieres',
                        name: 'Meniere\'s Disease',
                        acronym: 'MD',
                        description: 'Chronic disorder of the inner ear causing episodic vertigo, tinnitus, fullness, and fluctuating hearing loss.',
                        keyFeatures: [
                            'Episodic Vertigo (20min - 24hr)',
                            'Sensorineural Hearing Loss (Low freq)',
                            'Tinnitus (Roaring)',
                            'Aural Fullness'
                        ],
                        ptIntervention: 'Balance training for inter-episodic instability. VRT is NOT effective for preventing attacks, only for chronic hypofunction.',
                        icon: 'Activity',
                        category: 'Peripheral',
                        details: {
                            overview: 'Endolymphatic Hydrops: Excess fluid pressure in the inner ear. The "Glaucoma of the ear".',
                            anatomy: [
                                'Structure: Cochlear duct and Vestibular organs.',
                                'Fluid: Endolymph accumulation distends Reissner\'s membrane.'
                            ],
                            physiology: [
                                'Rupture: Membrane rupture mixes K+ rich endolymph with perilymph -> Toxic to hair cells -> Vertigo/Hearing loss.'
                            ],
                            stats: [
                                { label: 'Prevalence', value: '190 per 100,000' },
                                { label: 'Age', value: '40-60 years' },
                                { label: 'Nature', value: 'Progressive/Fluctuating' }
                            ],
                            medications: [
                                { name: 'Diuretics', mechanism: 'Reduce fluid', effect: 'HCTZ/Dyazide for maintenance.' },
                                { name: 'Betahistine', mechanism: 'Vasodilator', effect: 'Improves microcirculation (Europe/Canada).' },
                                { name: 'Intrathecal Gentamicin', mechanism: 'Ablation', effect: 'Destroys vestibular cells (chemical labyrinthectomy).' }
                            ],
                            medicalInterventions: [
                                'Low Sodium Diet: <2000mg/day.',
                                'Surgery: Endolymphatic sac decompression.'
                            ],
                            ptManagement: [
                                { stage: 'During Attack', focus: 'Safety: Fall prevention. Rest.' },
                                { stage: 'Between Attacks', focus: 'Balance: If permanent damage (hypofunction) exists.' },
                                { stage: 'Education', focus: 'Lifestyle: Sodium, Caffeine, Alcohol, Stress management.' }
                            ]
                        }
                    },
                    {
                        id: 'pppd',
                        name: 'Persistent Postural-Perceptual Dizziness',
                        acronym: '3PD',
                        description: 'Functional vestibular disorder characterized by chronic dizziness, unsteadiness, and non-spinning vertigo.',
                        keyFeatures: [
                            'Chronic dizziness > 3 months',
                            'Worse with upright posture',
                            'Worse with complex visual stimuli (grocery stores)',
                            'Worse with active motion'
                        ],
                        ptIntervention: 'Graded exposure therapy, Desensitization (Optokinetic stimulation), CBT, SSRIs.',
                        icon: 'Wind',
                        category: 'Functional',
                        details: {
                            overview: 'PPPD is a "software" problem, not "hardware". The brain fails to re-adjust after an acute vestibular event, remaining in "high alert" mode.',
                            anatomy: [
                                'Structure: Normal peripheral organs.',
                                'Network: Hyperactive visual-vestibular cortex integration.'
                            ],
                            physiology: [
                                'Visual Dependence: Over-reliance on vision for balance.',
                                'Sensory Mismatch: hypersensitivity to self-motion and visual motion.'
                            ],
                            stats: [
                                { label: 'Prevalence', value: 'Most common cause of chronic dizziness' },
                                { label: 'Trigger', value: 'Vestibular event, Panic attack, TBI' }
                            ],
                            medications: [
                                { name: 'SSRIs/SNRIs', mechanism: 'Antidepressants', effect: 'Reduces central sensory gain/anxiety.' }
                            ],
                            medicalInterventions: [
                                'CBT: Cognitive Behavioral Therapy for anxiety component.'
                            ],
                            ptManagement: [
                                { stage: 'Habituation', focus: 'Optokinetic Stimulation: Watching moving stripes/dots to reduce visual vertigo.' },
                                { stage: 'Exposure', focus: 'Graded: Slowly re-introducing complex environments (Supermarket).' },
                                { stage: 'Confidence', focus: 'Movement: Re-establishing trust in balance.' }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        id: 'integumentary',
        title: 'Integumentary System',
        description: 'Wound care management, tissue healing, and dermatological conditions relevant to Physical Therapy.',
        icon: 'Layers',
        subtopics: [
            {
                id: 'wound-assessment',
                title: 'Wound Assessment & Classification',
                introduction: 'Accurate assessment is the foundation of effective wound management. Physical Therapists must identify the etiology and stage of the wound to determine the appropriate plan of care.',
                content: [
                    'Etiology: Is it Arterial, Venous, Neuropathic (Diabetic), or Pressure-related?',
                    'Location & Size: Measure Length x Width x Depth (clock method).',
                    'Tissue Type: Viable (Granulation/Epithelial) vs Non-Viable (Slough/Eschar).',
                    'Drainage (Exudate): Amount (Scant to Copious), Color (Serous, Sanguineous, Purulent), Odor.',
                    'Periwound: Maceration, Erythema, Induration, Edema.'
                ],
                clinicalRelevance: 'Documentation must be precise. "Red, Yellow, Black" classification is a simple way to describe tissue type goals (Protect Red, Clean Yellow, Debride Black).',
                images: [
                    { url: pressureStagingImg, caption: 'Pressure Injury Staging Guide' }
                ],
                tables: [
                    {
                        title: 'Pressure Injury Staging (NPIAP)',
                        headers: ['Stage', 'Description', 'Tissue Involvement'],
                        rows: [
                            ['Stage 1', 'Non-blanchable erythema of intact skin.', 'Epidermis only.'],
                            ['Stage 2', 'Partial-thickness skin loss with exposed dermis. Blister.', 'Epidermis + Dermis.'],
                            ['Stage 3', 'Full-thickness skin loss. Adipose visible.', 'Subcutaneous fat exposed. No bone/muscle.'],
                            ['Stage 4', 'Full-thickness skin and tissue loss.', 'Exposed Fascia, Muscle, Tendon, Ligament, Cartilage, or Bone.'],
                            ['Unstageable', 'Obscured full-thickness skin and tissue loss.', 'Slough or Eschar conceals depth.'],
                            ['DTI', 'Deep Tissue Injury. Persistent non-blanchable deep red/maroon/purple.', 'Intact or non-intact skin.']
                        ]
                    },
                    {
                        title: 'Wagner Ulcer Grade Classification (Neuropathic/Diabetic)',
                        headers: ['Grade', 'Description'],
                        rows: [
                            ['0', 'Pre-ulcerative lesion; healed ulcer; bony deformity.'],
                            ['1', 'Superficial ulcer without subcutaneous tissue involvement.'],
                            ['2', 'Deep ulcer penetrating to tendon, capsule, or bone.'],
                            ['3', 'Deep ulcer with abscess, osteomyelitis, or joint sepsis.'],
                            ['4', 'Gangrene of digit/forefoot.'],
                            ['5', 'Gangrene of entire foot.']
                        ]
                    }
                ]
            },
            {
                id: 'wound-dressings',
                title: 'Wound Dressings',
                introduction: 'Choosing the right dressing depends on the wound\'s needs: Moisture balance, Bacterial control, and Protection.',
                type: 'dressing-guide',
                content: [
                    'The Golden Rule: "If it\'s wet, dry it. If it\'s dry, wet it."',
                    'Moist Wound Healing: Promotes faster re-epithelialization and reduces scarring.'
                ],
                clinicalRelevance: 'Always check for contraindications (e.g., allergies, infection status) before selecting a product.',
                dressingTypes: [
                    {
                        name: 'Hydrocolloids',
                        icon: hydrocolloidImg,
                        description: 'Wafer type dressing with gel-forming agents. Occlusive or semi-occlusive.',
                        indications: 'Partial thickness wounds, Autolytic debridement of necrosis, Mild exudate.',
                        contraindications: 'Heavy exudate (maceration risk), Infected wounds, Exposed tendon/bone.'
                    },
                    {
                        name: 'Alginates',
                        icon: alginateImg,
                        description: 'Derived from seaweed. Highly absorptive, forms a gel when in contact with exudate.',
                        indications: 'Moderate to Heavy exudate, Packing tunneling wounds, Infected wounds (can be used).',
                        contraindications: 'Dry or minimally draining wounds (will dry it out further), Exposed bone.'
                    },
                    {
                        name: 'Foams',
                        icon: foamImg,
                        description: 'Polyurethane foam. Absorptive and provides semi-occlusive environment. Cushioning.',
                        indications: 'Moderate to Heavy exudate, Protection over bony prominences, Under compression.',
                        contraindications: 'Dry wounds (unless pre-moistened), Arterial ulcers (sometimes due to drying effect).'
                    },
                    {
                        name: 'Hydrogels',
                        icon: hydrogelImg,
                        description: 'Water- or glycerin-based products. Donates moisture to the wound.',
                        indications: 'Dry wounds (Arterial), Eschar/Slough (Softens for debridement), Exposed tendon/bone (keeps moist).',
                        contraindications: 'Heavy exudate (maceration).'
                    },
                    {
                        name: 'Transparent Films',
                        icon: transparentFilmImg,
                        description: 'Thin polyurethane membrane. Waterproof but permeable to oxygen/vapor.',
                        indications: 'Stage 1 or 2 pressure ulcers, Autolytic debridement, Secondary dressing, IV sites.',
                        contraindications: 'Infected wounds, Moderate/Heavy exudate, Fragile skin (adhesive injury).'
                    }
                ]
            },
            {
                id: 'pathologies-integ',
                title: 'Common Ulcer Pathologies',
                introduction: 'Differentiating between arterial, venous, and neuropathic ulcers is critical for safe management.',
                content: [],
                visuals: [
                    {
                        type: 'comparison', items: [
                            { label: 'Arterial', img: arterialUlcerImg, desc: 'Distal toes, dorsal foot. Punched out, pale bed, painful.' },
                            { label: 'Venous', img: venousUlcerImg, desc: 'Medial malleolus, lower leg. Irregular, large, wet, hemosiderin stain.' }
                        ]
                    }
                ],
                tables: [
                    {
                        title: 'Ulcer Characteristics Comparison',
                        headers: ['Feature', 'Arterial (Ischemic)', 'Venous (Stasis)', 'Neuropathic (Diabetic)'],
                        rows: [
                            ['Location', 'Toes, dorsum of foot, lateral malleolus.', 'Medial malleolus, medial lower leg ("Gaiter area").', 'Plantat aspect of foot, metatarsal heads, toes.'],
                            ['Appearance', 'Round, "punched out", pale/necrotic bed. Minimal drainage.', 'Irregular borders, shallow, beefy red or yellow (slough). Heavy drainage.', 'Round, "punched out", callus rim. Deep.'],
                            ['Pain', 'Severe, increases with elevation (Intermittent Claudication).', 'Mild/Moderate, decreases with elevation (aching).', 'Absent (loss of protective sensation).'],
                            ['Pulses', 'Decreased or absent.', 'Normal.', 'Normal or decreased.'],
                            ['Skin Changes', 'Shiny, hairless, cool, pale/cyanotic.', 'Hemosiderin staining (brown), Edema, Lipodermatosclerosis.', 'Dry, cracked, warm, callus formation.'],
                            ['Treatment Pts', 'Revascularization. DO NOT COMPRESS if ABI < 0.5-0.8. Keep dry if gangrene.', 'Compression therapy (Unna boot). Elevation. Ambulation.', 'Off-loading (TCC), Blood sugar control, Foot care education.']
                        ]
                    }
                ]
            },
            {
                id: 'pt-management-integ',
                title: 'PT Management & Modalities',
                introduction: 'Physical Agents and direct wound care techniques can accelerate healing.',
                content: [
                    'Debridement: Removal of necrotic tissue.',
                    '- Selective: Sharps (scalpel/scissors), Enzymatic (Santyl), Autolytic (body\'s enzymes + occlusive dressing), Biologic (Maggots).',
                    '- Non-Selective: Wet-to-Dry (damages healthy tissue - largely outdated), Pulsatile Lavage with Suction (PLWS - good for tunneling/infection).',
                    'Compression Therapy: Gold standard for Venous Stasis. Contraindicated in severe PAD (ABI < 0.5) and uncompensated CHF.',
                    'Off-Loading: Total Contact Casting (TCC) is gold standard for neuropathic ulcers.'
                ],
                modalityGuide: [
                    { name: 'E-Stim (HVPC)', use: 'Promotes angiogenesis, bactericidal effect, epithelial migration. Anode (+) for epithelialization, Cathode (-) for infection/inflammation.' },
                    { name: 'Ultrasound', use: 'Low Frequency (MIST therapy): Debridement and bacterial reduction. High Frequency: Peri-wound collagen alignment.' },
                    { name: 'Negative Pressure (VAC)', use: 'Promotes granulation, removes exudate, approximates wound edges. C/I: Malignancy, Osteomyelitis, Exposed vessels.' }
                ]
            }
        ]
    },
    {
        id: 'pediatrics',
        title: 'Pediatrics',
        description: 'Developmental milestones, reflexes, and pediatric conditions.',
        icon: 'Baby', // Needs a Baby icon or similar (Smile? Users?)
        subtopics: [
            {
                id: 'developmental-milestones',
                title: 'Developmental Milestones',
                introduction: 'Gross motor development follows a predictable sequence: Cephalocaudal (Head to Toe) and Proximodistal (Center to Periphery).',
                type: 'milestone-timeline',
                content: [],
                milestones: [
                    {
                        age: '2-3 Months',
                        title: 'Prone Head Lift',
                        desc: 'Lifts head 45-90 degrees. Prop on forearms.',
                        img: babyProneImg,
                        animationId: 'prone',
                        keyPoints: ['Strengthens neck extensors', 'Visual tracking']
                    },
                    {
                        age: '4-5 Months',
                        title: 'Rolling Over',
                        desc: 'Rolls prone to supine (first), then supine to prone.',
                        img: babyRollingImg,
                        animationId: 'rolling',
                        keyPoints: ['Dissociation of head/limbs', 'Core activation']
                    },
                    {
                        age: '6-7 Months',
                        title: 'Independent Sitting',
                        desc: 'Sits without support. Hands free for play.',
                        img: babySittingImg,
                        animationId: 'sitting',
                        keyPoints: ['Righting reactions', 'Protective extension']
                    },
                    {
                        age: '8-9 Months',
                        title: 'Crawling & Creeping',
                        desc: 'Quadruped movement. Reciprocal pattern.',
                        img: babyCrawlingImg,
                        animationId: 'crawling',
                        keyPoints: ['Shoulder stability', 'Cross-lateral coordination']
                    },
                    {
                        age: '10-11 Months',
                        title: 'Pull to Stand & Cruising',
                        desc: 'Pulls up on furniture. Walks sideways holding on.',
                        img: babyStandingImg,
                        animationId: 'standing',
                        keyPoints: ['Weight shifting', 'Eccentric quadriceps control']
                    },
                    {
                        age: '12-15 Months',
                        title: 'Independent Walking',
                        desc: 'Unassisted ambulation. High guard position initially.',
                        img: babyWalkingImg,
                        animationId: 'walking',
                        keyPoints: ['Wide base of support', 'Lumbar lordosis development']
                    }
                ]
            },
            {
                id: 'reflexes',
                title: 'Primitive Reflexes',
                introduction: 'Involuntary motor responses originating in the brainstem. Integration is essential for voluntary movement.',
                content: [
                    'Rooting (0-3 mo): Head turn to touch on cheek. Relevance: Feeding. Absence = CNS depression.',
                    'Moro (0-4 mo): Extension/Abduction then Flexion/Adduction. Relevance: Asymmetry = Brachial plexus injury/Clavicle fx.',
                    'ATNR (0-6 mo): "Fencer pose". Relevance: Persistence prevents rolling and bilateral hand use.',
                    'STNR (6-8 mo): Flexion of head flexes arms/extends legs. Relevance: Persistence prevents crawling.',
                    'Palmar Grasp (0-4 mo): Finger flexion. Relevance: Persistence prevents voluntary release.'
                ],
                reflexes: [
                    {
                        name: 'Moro Reflex',
                        trigger: 'Sudden backward head drop',
                        response: 'Abduction/Extension of arms followed by flexion',
                        integration: '4-6 months',
                        relevance: 'Absence: CNS depression/injury. Asymmetry: Brachial plexus injury (Erbs) or Clavicle fx. Persistence: Delays head control & sitting balance.'
                    },
                    {
                        name: 'ATNR',
                        trigger: 'Head turned to side',
                        response: 'Face side extends, Skull side flexes ("Fencing")',
                        integration: '4-6 months',
                        relevance: 'Persistence: Prevents rolling, bringing hands to midline, and hand-mouth activities. May lead to scoliosis or hip subluxation.'
                    },
                    {
                        name: 'STNR',
                        trigger: 'Neck flexion/extension',
                        response: 'Flex: Arms flex/Legs extend. Ext: Arms ext/Legs flex',
                        integration: '8-12 months',
                        relevance: 'Persistence: Interferes with reciprocating crawling (bunny hopping instead) and sitting balance. Difficulty with visual tracking.'
                    },
                    {
                        name: 'Palmar Grasp',
                        trigger: 'Pressure on palm',
                        response: 'Finger flexion',
                        integration: '4-6 months',
                        relevance: 'Persistence: Prevents voluntary grasp/release, weight bearing on open hand (crawling), and protective extension.'
                    },
                    {
                        name: 'Plantar Grasp',
                        trigger: 'Pressure on sole of foot',
                        response: 'Toe flexion',
                        integration: '9 months',
                        relevance: 'Persistence: Interferes with standing balance, walking (toe curling), and putting on shoes.'
                    },
                    {
                        name: 'Landau',
                        trigger: 'Suspension in prone',
                        response: 'Complete extension of head, trunk, and extremities',
                        integration: '12-24 months',
                        relevance: 'Absence: Hypotonia or mental retardation. "Breaks" flexion dominance for posture.'
                    },
                    {
                        name: 'Galant',
                        trigger: 'Stroke paravertebral skin',
                        response: 'Lateral trunk flexion to stimulus side',
                        integration: '2-4 months',
                        relevance: 'Persistence: Scoliosis screening active. Interferes with sitting balance and can cause restlessness (waistband sensitivity).'
                    }
                ]
            },
            {
                id: 'pediatric-pathologies',
                title: 'Pediatric Conditions',
                introduction: 'Common pediatric pathologies affecting the neuromuscular and musculoskeletal systems.',
                type: 'pathology-grid',
                categoryContent: {
                    'All': {
                        pathologyInfo: true,
                        specialTests: [
                            {
                                category: 'Hip Dysplasia (DDH)',
                                tests: [
                                    {
                                        name: 'Barlow Maneuver',
                                        purpose: 'Test for unstable hip - Ability to dislocate.',
                                        positive: 'Palpable "clunk" as femoral head exits acetabulum.',
                                        technique: 'Adduct hip while applying posterior force.'
                                    },
                                    {
                                        name: 'Ortolani Maneuver',
                                        purpose: 'Test for hip dislocation - Ability to reduce.',
                                        positive: 'Palpable "clunk" as femoral head reduces back into acetabulum.',
                                        technique: 'Abduct hip while lifting greater trochanter anteriorly.'
                                    },
                                    {
                                        name: 'Galeazzi Sign',
                                        purpose: 'Assess for leg length discrepancy (LLD).',
                                        positive: 'One knee lower than other in hook-lying.',
                                        technique: 'Child supine, knees flexed 90°, feet flat.'
                                    }
                                ]
                            },
                            {
                                category: 'Scoliosis',
                                tests: [
                                    {
                                        name: 'Adams Forward Bend Test',
                                        purpose: 'Screening for structural scoliosis.',
                                        positive: 'Rib hump on one side (thoracic rotation).',
                                        technique: 'Child bends forward at waist, knees straight.'
                                    }
                                ]
                            }
                        ],
                        redFlags: [
                            {
                                category: 'Neurologic Signs',
                                findings: [
                                    { name: 'Shunt Dysfunction', description: 'Vomiting, headache, irritability, "sunset eyes".' },
                                    { name: 'Tethered Cord', description: 'Changes in bowel/bladder, back pain, gait changes.' }
                                ]
                            },
                            {
                                category: 'Orthopedic',
                                findings: [
                                    { name: 'Atlantoaxial Instability', description: 'Down syndrome risk. Neck pain, torticollis, hyperreflexia.' }
                                ]
                            }
                        ]
                    },
                    'Neuromuscular': { pathologyInfo: true },
                    'Musculoskeletal': { pathologyInfo: true },
                    'Genetic': { pathologyInfo: true }
                },
                pathologies: [
                    {
                        id: 'cp',
                        name: 'Cerebral Palsy',
                        acronym: 'CP',
                        category: 'Neuromuscular',
                        icon: 'Brain',
                        image: cpGmfcsImg,
                        description: 'A group of non-progressive disorders of movement and posture caused by damage to the developing brain.',
                        keyFeatures: [
                            'Spastic (Motor Cortex), Dyskinetic (Basal Ganglia), or Ataxic (Cerebellum)',
                            'Abnormal muscle tone (Hyper/Hypotonia)',
                            'Persistence of primitive reflexes',
                            'Gait abnormalities (e.g., Scissoring, Crouch gait)'
                        ],
                        ptIntervention: 'Spasticity management (stretching, positioning), strengthening, gait training, adaptive equipment, constraint-induced movement therapy (CIMT).',
                        details: {
                            overview: 'Cerebral Palsy (CP) is the most common motor disability in childhood. It is a non-progressive permanent disorder of movement and posture.',
                            anatomy: [
                                'Periventricular Leukomalacia (PVL): White matter damage (common in preemies).',
                                'Cerebral Dysgenesis: Abnormal brain development.',
                                'Intracranial Hemorrhage (IVH): Bleeding in the brain.'
                            ],
                            physiology: [
                                'Spasticity: Loss of inhibition leads to velocity-dependent resistance to stretch.',
                                'Muscle Growth: Muscles grow slower than bone, leading to contractures.',
                                'Co-contraction: Inability to isolate muscle activation.'
                            ],
                            stats: [
                                { label: 'Prevalence', value: '1 in 323 children' },
                                { label: 'GMFCS', value: 'Level I (Walks indep) to V (Total assist)' },
                                { label: 'Types', value: 'Spastic (80%), Dyskinetic, Ataxic, Mixed' }
                            ],
                            medications: [
                                { name: 'Botox', mechanism: 'Neuromuscular blocker', effect: 'Local spasticity relief (creates window for casting).' },
                                { name: 'Baclofen', mechanism: 'GABA agonist', effect: 'Systemic spasticity management (Oral or Pump).' }
                            ],
                            medicalInterventions: [
                                'SDR (Selective Dorsal Rhizotomy): Cutting sensory nerve rootlets to reduce spasticity.',
                                'Orthopedic Surgery: Tendon lengthening (e.g., Achilles), Derotational osteotomy.'
                            ],
                            ptManagement: [
                                { stage: 'Infancy', focus: 'Handling: Positioning, carrying, facilitating milestones.' },
                                { stage: 'Childhood', focus: 'Function: Mobility aids (gait trainers), orthotics (AFOs), serial casting.' },
                                { stage: 'Adolescence', focus: 'Independence: Community mobility, adaptive sports, transition planning.' }
                            ]
                        }
                    },
                    {
                        id: 'sb',
                        name: 'Spina Bifida',
                        acronym: 'SB',
                        category: 'Neuromuscular',
                        icon: 'AlignJustify',
                        image: spinaBifidaImg,
                        description: 'Neural tube defect where the spinal column doesnt close completely. Myelomeningocele is the most severe form.',
                        keyFeatures: [
                            'Motor/Sensory loss below lesion level',
                            'Hydrocephalus (Arnold-Chiari II malformation)',
                            'Neurogenic bladder/bowel',
                            'Latex allergy is common'
                        ],
                        ptIntervention: 'Prescription of orthotics (AFOs, HKAFOs), wheelchair mobility, standing frames for bone density, skin care education.',
                        details: {
                            overview: 'Spina Bifida is a neural tube defect that occurs when the spine and spinal cord do not form properly. Myelomeningocele is the most severe type.',
                            anatomy: [
                                'Vertebral Arch: Fails to fuse (L5-S1 most common).',
                                'Sac: Meninges and/or Spinal Cord protrude through the defect.',
                                'Chiari II: Cerebellum pulled into spinal canal, obstructing CSF flow (Hydrocephalus).'
                            ],
                            physiology: [
                                'Folic Acid: Deficiency in early pregnancy is specialized risk factor.',
                                'Tethered Cord: Spinal cord scar tissue limits movement, causing progressive decline.'
                            ],
                            stats: [
                                { label: 'Incidence', value: 'Reduced by folic acid fortification' },
                                { label: 'Levels', value: 'Thoracic (Wheelchair) vs Lumbar/Sacral (Walking)' },
                                { label: 'Shunt', value: 'VP Shunt required in >80% for hydrocephalus' }
                            ],
                            medications: [
                                { name: 'Anticholinergics', mechanism: 'Bladder relaxant', effect: 'Manages neurogenic bladder (Oxybutynin).' }
                            ],
                            medicalInterventions: [
                                'Fetal Surgery: Closing defect in utero (improves outcomes).',
                                'Shunt Revision: Fixing blocked VP shunts (Watch for: vomiting, headache, lethargy).'
                            ],
                            ptManagement: [
                                { stage: 'Infant', focus: 'Development: Standing frames (by age 1) for bone density/hip formation.' },
                                { stage: 'School', focus: 'Mobility: Wheelchair skills vs Ambulation (RGOs/HKAFOs usually discarded for efficiency).' },
                                { stage: 'Life', focus: 'Skin: Daily skin checks for pressure ulcers (insensate areas).' }
                            ]
                        }
                    },
                    {
                        id: 'dmd',
                        name: 'Duchenne Muscular Dystrophy',
                        acronym: 'DMD',
                        category: 'Neuromuscular',
                        icon: 'Zap',
                        image: gowersSignImg,
                        description: 'X-linked recessive genetic disorder causing progressive muscle degeneration and weakness due to lack of dystrophin.',
                        keyFeatures: [
                            'Gowers\' Sign (walking hands up legs to stand)',
                            'Pseudohypertrophy of calves',
                            'Proximal weakness > Distal',
                            'Loss of ambulation by early teens'
                        ],
                        ptIntervention: 'Submaximal exercise (avoid eccentric fatigue), respiratory care, stretching to prevent contractures, mobility preservation.',
                        details: {
                            overview: 'Duchenne Muscular Dystrophy (DMD) is a genetic disorder characterized by progressive muscle degeneration and weakness. It is caused by an absence of dystrophin, a protein that helps keep muscle cells intact.',
                            anatomy: [
                                'Target: Skeletal and Cardiac muscle.',
                                'Damage: Cell membrane (sarcolemma) becomes fragile and leaks Ca2+.',
                                'Fibrosis: Muscle tissue replaced by fat and scar tissue (Pseudohypertrophy).'
                            ],
                            physiology: [
                                'Dystrophin: Structural protein linking cytoskeleton to extracellular matrix. Shock absorber function lost.',
                                'Apoptosis: Muscle cells die and are not regenerated.'
                            ],
                            stats: [
                                { label: 'Genetics', value: 'X-Linked Recessive (Affects Males)' },
                                { label: 'Diagnosis', value: 'Age 3-5 (Gross motor delays)' },
                                { label: 'Life Exp', value: '20s-30s (Respiratory/Cardiac failure)' }
                            ],
                            medications: [
                                { name: 'Corticosteroids', mechanism: 'Prednisone/Deflazacort', effect: 'Slows decline (prolongs walking 2-3 yrs).' },
                                { name: 'Exon Skipping', mechanism: 'Genetic modifier', effect: 'Converts DMD to milder Becker-like phenotype.' }
                            ],
                            medicalInterventions: [
                                'Spinal Fusion: For severe scoliosis affecting lung function.',
                                'Ventilation: CPAP/BiPAP at night as respiratory muscles weaken.'
                            ],
                            ptManagement: [
                                { stage: 'Early', focus: 'Preservation: Submaximal activity (swimming). AVOID eccentrics (muscle damage).' },
                                { stage: 'Ambulatory', focus: 'Stretching: Gastroc/TFL to prevent contractures. Night splints.' },
                                { stage: 'Non-Ambulatory', focus: 'Respiratory: Cough assist, stacking breathing. Power mobility.' }
                            ]
                        }
                    },
                    {
                        id: 'torticollis',
                        name: 'Congenital Muscular Torticollis',
                        acronym: 'CMT',
                        category: 'Musculoskeletal',
                        icon: 'User',
                        image: torticollisImg,
                        description: 'Shortening of the Sternocleidomastoid (SCM) muscle, causing a lateral tilt and rotation of the head.',
                        keyFeatures: [
                            'Head tilted TO the tight side, rotated AWAY',
                            'Plagiocephaly (flat head) often associated',
                            'Palpable mass in SCM',
                            'Decreased cervical ROM'
                        ],
                        ptIntervention: 'Passive stretching of SCM, strengthening of contralateral side, positioning, tummy time, helmet therapy if plagiocephaly persists.',
                        details: {
                            overview: 'Congenital Muscular Torticollis (CMT) presents as a postural deformity detectable at or shortly after birth, characterized by a unilateral shortening of the SCM muscle.',
                            anatomy: [
                                'Muscle: Sternocleidomastoid (SCM).',
                                'Action: SCM flexes/side-bends same side, rotates opposite.',
                                'Presentation: Left Torticollis = Left Tilt + Right Rotation.'
                            ],
                            physiology: [
                                'Etiology: Intrauterine crowding, breech presentation, or birth trauma.',
                                'Fibrosis: Mass of fibrotic tissue may form in the muscle belly.'
                            ],
                            stats: [
                                { label: 'Incidence', value: '3rd most common newborn concern' },
                                { label: 'Association', value: 'Hip Dysplasia (refer for US)' },
                                { label: 'Plagiocephaly', value: '>80% have cranial asymmetry' }
                            ],
                            medications: [
                                { name: 'None', mechanism: 'N/A', effect: 'Primarily mechanical/conservative mgmt.' }
                            ],
                            medicalInterventions: [
                                'Surgery: SCM release (rare, only if conservative fails >1 yr).'
                            ],
                            ptManagement: [
                                { stage: 'Stretching', focus: 'Protocol: 90% success if started <6 mo. Frequent gentle stretches.' },
                                { stage: 'Positioning', focus: 'Environment: Toy placement to encourage looking to non-preferred side.' },
                                { stage: 'Tummy Time', focus: 'Strength: Cervical extension and shoulder stability.' }
                            ]
                        }
                    },
                    {
                        id: 'lcpd',
                        name: 'Legg-Calvé-Perthes Disease',
                        acronym: 'LCPD',
                        category: 'Musculoskeletal',
                        icon: 'Bone',
                        image: lcpdImg,
                        description: 'Idiopathic avascular necrosis of the femoral head in children (ages 4-8 usually).',
                        keyFeatures: [
                            'Insidious onset of limp (Trendelenburg)',
                            'Pain in hip, groin, thigh, or KNEE',
                            'Limited Abduction and Internal Rotation',
                            'Better prognosis in younger children (<6)'
                        ],
                        ptIntervention: 'Maintenance of ROM (Abduction bracing), gait training, aquatic therapy, activity modification.',
                        details: {
                            overview: 'Disruption of blood flow to the femoral head leads to bone death (necrosis), followed by resorption and remodeling due to "creeping substitution".',
                            anatomy: [
                                'Blood Supply: Medial Circumflex Femoral Artery is disrupted.',
                                'Femoral Head: Flattens (Coxa Plana) if not contained.'
                            ],
                            physiology: [
                                'Stages: 1. Initial/Necrosis, 2. Fragmentation (Highest risk of deformity), 3. Reossification, 4. Healed.',
                                'Containment: Goal is to keep femoral head deep in acetabulum to mold it spherically.'
                            ],
                            stats: [
                                { label: 'Gender', value: 'Male > Female (4:1)' },
                                { label: 'Age', value: '4-8 years most common' }
                            ],
                            ptManagement: [
                                { stage: 'Containment', focus: 'Bracing: Petrie casting or bracing in abduction ("Scottish Rite").' },
                                { stage: 'Rehab', focus: 'ROM: Aggressive AROM/PROM to prevent contracture. NWB if pain is severe.' }
                            ]
                        }
                    },
                    {
                        id: 'scfe',
                        name: 'Slipped Capital Femoral Epiphysis',
                        acronym: 'SCFE',
                        category: 'Musculoskeletal',
                        icon: 'AlertTriangle',
                        image: scfeImg,
                        description: 'Displacement of the femoral epiphysis (growth plate). The "Ice cream falls off the cone".',
                        keyFeatures: [
                            'Obese adolescent male (10-16 yrs)',
                            'Hip/Knee pain + Limp',
                            'Leg held in External Rotation',
                            'Limited Flexion and Internal Rotation'
                        ],
                        ptIntervention: 'IMMEDIATE NWB and Surgical Referral. Post-op: Gait training, ROM, strengthening.',
                        details: {
                            overview: 'Mechanical failure of the physis (growth plate). Can be Stable (can walk) or Unstable (cannot walk - higher AVN risk).',
                            anatomy: [
                                'Physis: Weakened during rapid growth spurt.',
                                'Displacement: Femoral neck moves anteriorly/superiorly; Head stays posterior/inferior.'
                            ],
                            physiology: [
                                'Endocrine: associated with Hypothyroidism or GH deficiency.',
                                'Obesity: Increased shear forces on the hip.'
                            ],
                            medicalInterventions: [
                                'Surgery: In Situ Pinning (Screw) to prevent further slip.'
                            ],
                            ptManagement: [
                                { stage: 'Pre-Op', focus: 'Safety: Crutches NWB. Do not attempt ROM assessment (risk of worsening slip).' },
                                { stage: 'Post-Op', focus: 'Recovery: WBAT (usually), regain Abduction/IR range.' }
                            ]
                        }
                    },
                    {
                        id: 'erbs-palsy',
                        name: 'Erb\'s Palsy',
                        category: 'Neuromuscular',
                        icon: 'Activity',
                        image: erbsImg,
                        description: 'Injury to the upper brachial plexus (C5-C6) often due to birth trauma (shoulder dystocia).',
                        keyFeatures: [
                            'Waiter\'s Tip Deformity (Adducted, IR, Wrist Flexed)',
                            'Paralysis of Deltoid, Biceps, Rotator Cuff',
                            'Moro reflex absent on affected side',
                            'Sensory loss in C5-C6 dermatome'
                        ],
                        ptIntervention: 'Protect limb, Sensory stimulation, Passive ROM, Facilitate active movement.',
                        details: {
                            overview: 'Obstetric Brachial Plexus Injury (OBPI). Erb\'s (C5-C6) is most common. Klumpke\'s (C8-T1) affects hand.',
                            anatomy: [
                                'C5 Root: Deltoid (Shoulder abduction), Rhomboids.',
                                'C6 Root: Biceps (Elbow flexion), Wrist extensors.'
                            ],
                            stats: [
                                { label: 'Recovery', value: '80-90% recover spontaneously in 3-6 months' },
                                { label: 'Surgery', value: 'Nerve graft if no biceps function by 3-6mo' }
                            ],
                            ptManagement: [
                                { stage: 'Acute (0-2wks)', focus: 'Protection: Pin sleeve to shirt. Avoid traction. Gentle ROM.' },
                                { stage: 'Rehab', focus: 'Activation: "Cookie" stretch (eating cookie) for Ext Rotation/Supination.' }
                            ]
                        }
                    },
                    {
                        id: 'down-syndrome',
                        name: 'Down Syndrome',
                        acronym: 'DS',
                        category: 'Genetic',
                        icon: 'User',
                        image: dsImg,
                        description: 'Trisomy 21. Genetic disorder associated with intellectual disability, hypotonia, and joint laxity.',
                        keyFeatures: [
                            'Generalized Hypotonia',
                            'Ligamentous Laxity (Hypermobile)',
                            'Delayed motor milestones',
                            'Atlantoaxial Instability (AAI) risk'
                        ],
                        ptIntervention: 'Strengthen core/proximal stabilizers, facilitate milestones, treadmill training (for walking onset), orthotics (SMOs).',
                        details: {
                            overview: 'Most common chromosomal condition. Physical Therapy focuses on stability and gross motor endurance.',
                            anatomy: [
                                'Brain: Reduced cerebellar size (balance/coordination issues).',
                                'Ligaments: Collagen defect leads to laxity (Pes Planus, Genu Recurvatum).'
                            ],
                            medicalInterventions: [
                                'Cardiology: Screen for AV Canal defects.',
                                'X-Ray: Screen for AAI before sports (Special Olympics rule).'
                            ],
                            ptManagement: [
                                { stage: 'Early', focus: 'stability: Approx function. SMOs (Surestep) often used for fast stable base.' },
                                { stage: 'School', focus: 'Fitness: Obesity prevention through active play.' }
                            ]
                        }
                    },
                    {
                        id: 'oi',
                        name: 'Osteogenesis Imperfecta',
                        acronym: 'OI',
                        category: 'Genetic',
                        icon: 'Bone',
                        image: oiImg,
                        description: 'Genetic "Brittle Bone Disease" caused by defect in Type I Collagen.',
                        keyFeatures: [
                            'Frequent fractures with minimal trauma',
                            'Blue Sclera',
                            'Bowing of long bones',
                            'Dentinogenesis imperfecta (brittle teeth)'
                        ],
                        ptIntervention: 'Safe handling education (do NOT pull limbs), Aquatic therapy, Strengthening (isometrics), Mobility aids.',
                        details: {
                            overview: 'Connective tissue disorder ranging from mild (Type I) to lethal (Type II).',
                            anatomy: [
                                'Bone: Cortical thinning and trabecular rarification.',
                                'Collagen: Type I collagen (bone/skin/tendon) is defective or reduced.'
                            ],
                            ptManagement: [
                                { stage: 'Handling', focus: 'Education: Lift from buttocks/trunk, never ankles/arms.' },
                                { stage: 'Exercise', focus: 'Aquatics: Safe environment for movement. Avoid high impact/torque.' }
                            ]
                        }
                    },
                    {
                        id: 'amc',
                        name: 'Arthrogryposis',
                        acronym: 'AMC',
                        category: 'Neuromuscular',
                        icon: 'Layers',
                        image: amcImg,
                        description: 'Arthrogryposis Multiplex Congenita. Non-progressive congenital contractures in 2+ body areas.',
                        keyFeatures: [
                            'Severe joint contractures at birth',
                            'Muscle atrophy / fibrosis',
                            'Sensation is usually INTACT',
                            'Intelligence is usually NORMAL'
                        ],
                        ptIntervention: 'Serial casting, splinting, stretching (frequent), adaptive equipment for ADLs.',
                        details: {
                            overview: 'Caused by fetal akinesia (lack of movement) in utero. The joints themselves are normal, but soft tissue is tight.',
                            anatomy: [
                                'Muscles: Replaced by fibrous/fatty tissue.',
                                'Joints: Normal structure but capsule is rigid.'
                            ],
                            ptManagement: [
                                { stage: 'Infant', focus: 'ROM: Aggressive stretching and casting (Ponseti) for clubfoot/knees.' },
                                { stage: 'Functional', focus: 'Adaptation: Since cognition is normal, focus on independence strategies.' }
                            ]
                        }
                    }
                ]
            }
        ]
    },

];
