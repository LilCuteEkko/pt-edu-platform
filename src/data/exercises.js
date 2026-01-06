import { Dumbbell, Activity, Shield, Zap, Move } from 'lucide-react';

export const exerciseTopics = [
    {
        id: 'principles',
        title: 'Exercise Prescription Principles',
        description: 'Foundational concepts for designing effective therapeutic exercise programs.',
        icon: 'Activity',
        subtopics: [
            {
                id: 'dosage',
                title: 'Dosage & Parameters',
                introduction: 'The FITT Principle (Frequency, Intensity, Time, Type) guides prescription.',
                content: [
                    'Strength: High Load (>80% 1RM), Low Reps (1-5). Rest: 2-3 min.',
                    'Hypertrophy: Moderate Load (70-85% 1RM), Moderate Reps (6-12). Rest: 1-2 min.',
                    'Endurance: Low Load (<70% 1RM), High Reps (15+). Rest: <1 min.',
                    'Power: High Velocity, Moderate Load. Focus on speed of movement.'
                ],
                clinicalRelevance: 'Always prioritize form over load. For tissue healing, lower loads with higher repetitions (endurance) promote blood flow without over-stressing tissue.'
            },
            {
                id: 'mechanics',
                title: 'Muscle Mechanics',
                introduction: 'Understanding contraction types and their clinical utility.',
                content: [
                    'Isometric: Muscle contracts without length change. Usage: Acute phase (pain management), stability, preventing atrophy when joint motion is contraindicated.',
                    'Concentric: Muscle shortens while generating force. Usage: Functional strengthening, acceleration.',
                    'Eccentric: Muscle lengthens under tension. Usage: Deceleration, Tendinopathy rehab (Heavy Slow Resistance), generates HIGHEST force output with lowest metabolic cost.'
                ],
                clinicalRelevance: 'Eccentric control is crucial for injury prevention (e.g., hamstring strains during sprinting deceleration).'
            },
            {
                id: 'stretching',
                title: 'Stretching & Flexibility',
                introduction: 'Techniques to increase range of motion (ROM) and tissue extensibility.',
                content: [
                    'Static: Hold position for 30-60s. Best post-exercise. (Low Load Long Duration - LLLD is gold standard for contractures).',
                    'Dynamic: Moving through ROM. Best warm-up to prepare tissue.',
                    'Ballistic: Bouncing (generally contraindicated due to stretch reflex).',
                    'PNF (Proprioceptive Neuromuscular Facilitation): Contract-Relax methods utilizing autogenic inhibition (GTOs) to gain range.'
                ],
                clinicalRelevance: 'Stretch before strength? Static stretching >45s acutely decreases power output. Prioritize dynamic warm-ups pre-activity.'
            }
        ]
    },
    {
        id: 'cervical-spine',
        title: 'Cervical & Thoracic Spine',
        description: 'Stabilization and mobility exercises for the neck and upper back.',
        icon: 'Shield',
        subtopics: [
            {
                id: 'chin-tuck',
                title: 'Deep Neck Flexor Training',
                introduction: 'Chin Tucks target the Longus Colli/Capitis for cervical stability.',
                content: [
                    'Setup: Supine or sitting tall.',
                    'Action: Gently tuck chin straight back (like making a "double chin") without looking down.',
                    'Dosage: Hold 10s x 10 reps. Progress to lifting head 1 inch (Head Lift).'
                ],
                clinicalRelevance: 'Critical for "Text Neck" (Forward Head Posture) and Cervicogenic Headaches.'
            },
            {
                id: 'thoracic-ext',
                title: 'Thoracic Mobility',
                introduction: 'Addressing thoracic kyphosis to improve shoulder and neck function.',
                content: [
                    'Cat-Cow: Quadruped flex/ext.',
                    'Open Book: Sidelying rotation.',
                    'Foam Rolling: Thoracic extension (avoid lumbar hyperextension).'
                ],
                clinicalRelevance: 'Thoracic stiffness often contributes to shoulder impingement and neck pain.'
            }
        ]
    },
    {
        id: 'upper-extremity',
        title: 'Upper Extremity (Shoulder/Elbow)',
        description: 'Rotator cuff and scapular stabilization.',
        icon: 'Dumbbell',
        subtopics: [
            {
                id: 'rtc',
                title: 'Rotator Cuff Strengthening',
                introduction: 'Isolating the SITS muscles.',
                content: [
                    'Sidelying External Rotation: Targets Infraspinatus/Teres Minor.',
                    'Full Can (Scaption): Targets Supraspinatus (safer than Empty Can/Jobe).',
                    'Internal Rotation (Band): Targets Subscapularis.'
                ],
                clinicalRelevance: 'Keep thumb UP during Scaption to clear the greater tubercle under the acromion.'
            },
            {
                id: 'scapular',
                title: 'Scapular Stabilization',
                introduction: 'Proximal stability for distal mobility.',
                content: [
                    'Rows / Retraction: Rhomboids/Mid Trap.',
                    'Serratus Punch / Push-up Plus: Protraction for Serratus Anterior.',
                    'Y-T-W-I: Lower/Mid Trap activation.'
                ],
                clinicalRelevance: 'Scapular winging indicates weak Serratus Anterior (Long Thoracic Nerve).'
            }
        ]
    },
    {
        id: 'lumbar-core',
        title: 'Lumbar Spine & Core',
        description: 'Motor control and stabilization for the lower back.',
        icon: 'Shield',
        subtopics: [
            {
                id: 'ta-activation',
                title: 'Transverse Abdominis (TrA) Bracing',
                introduction: 'Fundamental core engagement.',
                content: [
                    'Abdominal Drawing-In Maneuver (ADIM): "Pull navel to spine".',
                    'Bracing: "Tighten as if about to be punched".',
                    'Tactile Cue: Palpate medial to ASIS for tension.'
                ],
                clinicalRelevance: 'TrA often has delayed firing in chronic Low Back Pain.'
            },
            {
                id: 'stabilization',
                title: 'Core Stabilization Progression',
                introduction: 'Progressive loading of the spine.',
                content: [
                    'Dead Bug: Supine, opposite arm/leg extension.',
                    'Bird Dog: Quadruped, neutral spine maintenance.',
                    'Plank: Anti-extension stability.',
                    'Pallof Press: Anti-rotation stability.'
                ],
                clinicalRelevance: 'Focus on "Neutral Spine" maintenance throughout all movements.'
            }
        ]
    },
    {
        id: 'lower-extremity',
        title: 'Lower Extremity (Hip/Knee)',
        description: 'Kinetic chain strengthening for gait and function.',
        icon: 'Move',
        subtopics: [
            {
                id: 'glutes',
                title: 'Posterior Chain / Hip',
                introduction: 'Glute Max and Medius strengthening.',
                content: [
                    'Glute Bridges: Max activation.',
                    'Clamshells / Side-lying Abduction: Glute Medius (prevents Trendelenburg).',
                    'Hip Thrusts: High load Glute Max.'
                ],
                clinicalRelevance: 'Weak Glute Medius leads to Valgus collapse at the knee (ACL risk, PFPS).'
            },
            {
                id: 'knee-quad',
                title: 'Knee Strengthening',
                introduction: 'Quad and Hamstring balance.',
                content: [
                    'Quad Sets: Isometric VMO activation (post-op).',
                    'Squats: Functional closed-chain.',
                    'Lunges: Unilateral stability.',
                    'Nordic Hamstring Curls: Eccentric hamstring (strain prevention).'
                ],
                clinicalRelevance: 'Open Chain (LAQ) puts more shear force on ACL; Closed Chain (Squat) is generally safer early post-op.'
            }
        ]
    },
    {
        id: 'ankle-foot',
        title: 'Ankle & Balance',
        description: 'Proprioception and distal strength.',
        icon: 'Zap',
        subtopics: [
            {
                id: 'calf',
                title: 'Gastroc/Soleus',
                introduction: 'Plantarflexion power.',
                content: [
                    'Heel Raises (Standing): Gastroc bias (knee straight).',
                    'Heel Raises (Seated): Soleus bias (knee bent).',
                    'Eccentric Heel Drops: Gold standard for Achilles Tendinopathy (Alfredson Protocol).'
                ],
                clinicalRelevance: 'Soleus is the "peripheral heart", crucial for venous return.'
            },
            {
                id: 'balance',
                title: 'Proprioception',
                introduction: 'Neuromuscular control.',
                content: [
                    'Single Leg Stance (SLS): Eyes open -> Eyes closed.',
                    'Star Excursion Balance Test (SEBT): Dynamic stability.',
                    'Wobble Board / Bosu: Unstable surface training.'
                ],
                clinicalRelevance: 'Ankle sprains cause significant proprioceptive loss. Retraining balance is key to preventing recurrence.'
            }
        ]
    }
];
