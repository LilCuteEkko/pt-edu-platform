
import amputationLevelsImg from '../assets/orthotics-prosthetics/amputation_levels.png';
import vaultingImg from '../assets/orthotics-prosthetics/gait_vaulting.png';
import circumductionImg from '../assets/orthotics-prosthetics/gait_circumduction.png';
import transtibialPressureImg from '../assets/orthotics-prosthetics/transtibial_pressure.png';
import wristCockUpImg from '../assets/orthotics-prosthetics/wrist_cock_up.png';
import thumbSpicaImg from '../assets/orthotics-prosthetics/thumb_spica.png';
import restingHandImg from '../assets/orthotics-prosthetics/resting_hand_splint.png';
import malletFingerImg from '../assets/orthotics-prosthetics/mallet_finger_splint.png';
import boutonniereImg from '../assets/orthotics-prosthetics/boutonniere_splint.png';
import afoPlsImg from '../assets/orthotics-prosthetics/afo_pls.png';
import afoSolidImg from '../assets/orthotics-prosthetics/afo_solid.png';
import afoHingedImg from '../assets/orthotics-prosthetics/afo_hinged.png';
import grafoImg from '../assets/orthotics-prosthetics/grafo.png';
import kafoImg from '../assets/orthotics-prosthetics/kafo.png';
import rgoImg from '../assets/orthotics-prosthetics/rgo.png';
import lsoCorsetImg from '../assets/orthotics-prosthetics/lso_corset.png';
import tlsoBodyImg from '../assets/orthotics-prosthetics/tlso_body.png';
import jewettBraceImg from '../assets/orthotics-prosthetics/jewett_brace.png';
import haloVestImg from '../assets/orthotics-prosthetics/halo_vest.png';
import miamiJCollarImg from '../assets/orthotics-prosthetics/miami_j_collar.png';
import philadelphiaCollarImg from '../assets/orthotics-prosthetics/philadelphia_collar.png';
import softFoamCollarImg from '../assets/orthotics-prosthetics/soft_foam_collar.png';
import minervaOrthosisImg from '../assets/orthotics-prosthetics/minerva_orthosis.png';
import heelLiftImg from '../assets/orthotics-prosthetics/heel_lift.png';
import rockerBottomImg from '../assets/orthotics-prosthetics/rocker_bottom.png';
import gaitLatTrunkBendImg from '../assets/orthotics-prosthetics/gait_lat_trunk_bend.png';
import gaitAbductedImg from '../assets/orthotics-prosthetics/gait_abducted.png';
import gaitKneeInstabilityImg from '../assets/orthotics-prosthetics/gait_knee_instability.png';
import gaitTerminalImpactImg from '../assets/orthotics-prosthetics/gait_terminal_impact.png';


export const orthoticsProstheticsData = {
    prosthetics: {
        title: "Prosthetics",
        introduction: "Management of limb loss involves pre-prosthetic care, prosthetic prescription, and gait training.",
        icon: "Activity",
        subtopics: [
            {
                id: 'amputation-levels',
                title: 'Amputation Levels',
                content: [
                    'Hemicorporectomy: Removal of pelvis and both LEs.',
                    'Hemipelvectomy: Removal of half of pelvis and LE.',
                    'Hip Disarticulation: Removal of LE from acetabulum.',
                    'Transfemoral (AKA): Above knee. Short residuals <35% femur length leads to abduction contracture.',
                    'Knee Disarticulation: Through knee joint. Preserves distal femoral epiphysis (good for kids).',
                    'Transtibial (BKA): Below knee. Ideal length: 20-50% of tibia. Knee flexion contracture is #1 enemy.',
                    'Syme\'s: Ankle disarticulation with heel pad attachment.',
                    'Chopart/Lisfranc: Midfoot amputations. Risk of Equinus (PF) contracture.'
                ],
                image: amputationLevelsImg,
                clinicalRelevance: "Energy Expenditure Increases: Traumatic Transtibial (+40-60%), Vascular Transtibial (+120%!), Transfemoral (+60-100%)."
            },
            {
                id: 'pre-prosthetic',
                title: 'Pre-Prosthetic Management',
                content: [
                    'Positioning (Contracture Prevention): Limit prolonged sitting. NO pillows under knees (BKA). NO pillows under back (AKA - hip flexion). Encourage prone lying.',
                    'Edema Control: Shrinkers (easiest), Ace Wrapping (Figure-8 pattern, pressure distal > proximal), Rigid Dressings (IPO/RRD - prevents trauma).',
                    'Desensitization: Friction massage, tapping, vibration, texture rubs to reduce hypersensitivity.',
                    'Strengthening: Focus on Hip Ext/Abd and Knee Ext. Core balance is critical.'
                ]
            },
            {
                id: 'pressure-areas',
                title: 'Transtibial Pressure Distribution',
                content: ['Correct fit is determined by skin checks. Redness should appear in tolerant areas (Green) and NOT in sensitive areas (Red).'],
                image: transtibialPressureImg,
                tables: [
                    {
                        title: 'Socket Fit Assessment',
                        headers: ['Pressure Tolerant (Green = OK)', 'Pressure Sensitive (Red = BAD)'],
                        rows: [
                            ['Patellar Tendon', 'Fibula Head & Neck (Peroneal N.)'],
                            ['Medial Tibial Flare', 'Distal End of Tibia/Fibula'],
                            ['Gastrocnemius Belly', 'Tibial Crest (Shin bone)'],
                            ['Shaft of Tibia/Fibula', 'Patella (Kneecap)'],
                            ['Popliteal Fossa (Gentle)', 'Hamstring Tendons']
                        ]
                    }
                ]
            },
            {
                id: 'components',
                title: 'Prosthetic Components',
                content: [],
                tables: [
                    {
                        title: 'Knee Mechanisms',
                        headers: ['Type', 'Pros', 'Cons', 'Indication'],
                        rows: [
                            ['Single Axis', 'Low maintenance, cheap.', 'Unstable (requires ms control).', 'K1/K2 (Limited).'],
                            ['Polycentric', 'Stable (moves center of gravity), shortens for sitting.', 'Complex, heavy.', 'Knee Disarticulation, weak hips.'],
                            ['Hydraulic', 'Cadence responsive (variable speed gait).', 'Heavy, expensive.', 'K3 (Active).'],
                            ['Microprocessor', 'Real-time adjustment (stumble recovery).', 'Very expensive, charging.', 'K3/K4 (Variable terrain).']
                        ]
                    },
                    {
                        title: 'Foot Mechanisms',
                        headers: ['Type', 'Features', 'Indication'],
                        rows: [
                            ['SACH', 'Solid Ankle Cushion Heel. No moving parts.', 'K1 (Transfers).'],
                            ['Single/Multi-Axis', 'Allows uneven terrain accommodation.', 'K2 (Limited Community).'],
                            ['Dynamic Response', 'Carbon fiber energy return "spring".', 'K3/K4 (High Activity).']
                        ]
                    },
                    {
                        title: 'Suspension Systems',
                        headers: ['Type', 'Description', 'Pros/Cons'],
                        rows: [
                            ['Suction', 'Valve creates seal.', 'Best proprioception. Hard to don.'],
                            ['Pin/Shuttle', 'Pin clicks into lock.', 'Audible click (secure). localized distraction.'],
                            ['Vacuum', 'Active pump removes air.', 'Maintains limb volume. Heavy.'],
                            ['Suprapatellar/Cuff', 'Strap above patella.', 'Good for short limbs. Restrictive.']
                        ]
                    }
                ]
            },
            {
                id: 'gait-deviations',
                title: 'Common Gait Deviations',
                type: 'pathology-grid',
                pathologies: [
                    {
                        id: 'vaulting',
                        name: 'Vaulting',
                        category: 'Prosthetic Gait',
                        description: 'Rising on the toe of the sound limb during swing phase of prosthetic limb.',
                        image: vaultingImg,
                        keyFeatures: ['Prosthesis too long', 'Knee won\'t flex', 'Fear of catching toe'],
                        ptIntervention: 'Assess length & suspension constraint.'
                    },
                    {
                        id: 'circumduction',
                        name: 'Circumduction',
                        category: 'Prosthetic Gait',
                        description: 'Swinging prosthesis out to the side in a semicircular arc.',
                        image: circumductionImg,
                        keyFeatures: ['Prosthesis too long', 'Locked knee', 'Weak hip flexors', 'Poor suspension'],
                        ptIntervention: 'Strengthen hip flexors, check length.'
                    },
                    {
                        id: 'lat-trunk-bend',
                        name: 'Lateral Trunk Bending',
                        category: 'Prosthetic Gait',
                        description: 'Leaning torso towards the prosthetic side during stance phase.',
                        image: gaitLatTrunkBendImg,
                        keyFeatures: ['Prosthesis too short', 'High medial wall', 'Weak Hip Abductors (+ Trendelenburg)'],
                        ptIntervention: 'Check length, Glute Med strengthening.'
                    },
                    {
                        id: 'abducted-gait',
                        name: 'Abducted Gait',
                        category: 'Prosthetic Gait',
                        description: 'Walking with the prosthesis held wide (away from midline) throughout cycle.',
                        image: gaitAbductedImg,
                        keyFeatures: ['Prosthesis too long', 'High medial wall (pain)', 'Abd Contracture', 'Insecurity'],
                        ptIntervention: 'Stretch abductors, check medial brim fit.'
                    },
                    {
                        id: 'knee-instability',
                        name: 'Knee Instability',
                        category: 'Prosthetic Gait',
                        description: 'Knee buckles into flexion during loading response.',
                        image: gaitKneeInstabilityImg,
                        keyFeatures: ['Heel too stiff (creates PF moment -> Knee Flex)', 'Knee axis too anterior', 'Weak Extensors'],
                        ptIntervention: 'Soften heel cushion, move knee posterior.'
                    },
                    {
                        id: 'terminal-impact',
                        name: 'Terminal Impact',
                        category: 'Prosthetic Gait',
                        description: 'Audible "clack" at end of swing phase as knee fully extends.',
                        image: gaitTerminalImpactImg,
                        keyFeatures: ['Insufficient knee friction', 'Extension assist too strong', 'Habit (seeking feedback)'],
                        ptIntervention: 'Adjust knee friction/resistance.'
                    }
                ]
            }
        ]
    },
    orthotics: {
        title: "Orthotics",
        introduction: "Devices applied to the body to correct deformity, improve function, or relieve pain.",
        icon: "Layers",
        subtopics: [
            {
                id: 'lower-extremity',
                title: 'Lower Extremity Orthotics',
                type: 'pathology-grid',
                clinicalRelevance: "Ground Reaction AFOs: Set in slight Plantarflexion to create extension moment at knee (stabilizes buckling). Set in Dorsiflexion to inhibit knee hyperextension.",
                pathologies: [
                    {
                        id: 'afo-pls',
                        image: afoPlsImg,
                        name: 'Posterior Leaf Spring (AFO)',
                        category: 'Ankle-Foot',
                        description: 'A flexible, narrow plastic AFO located behind the malleoli. Allows for stored energy release.',
                        keyFeatures: ['Dynamic DF assist', 'Minimal stability', 'Lightweight', 'Requires good M/L control'],
                        ptIntervention: 'Indicated for simple Drop Foot (peroneal nerve injury) with stable ankle.'
                    },
                    {
                        id: 'afo-solid',
                        image: afoSolidImg,
                        name: 'Solid Ankle AFO',
                        category: 'Ankle-Foot',
                        description: 'Rigid plastic that fully encases the malleoli to strictly limit ankle motion.',
                        keyFeatures: ['Maximal Stability', 'Blocks PF/DF & Inv/Ev', 'Prevents push-off'],
                        ptIntervention: 'Indicated for severe spasticity, ankle instability, or charcot foot.'
                    },
                    {
                        id: 'afo-hinged',
                        image: afoHingedImg,
                        name: 'Articulated (Hinged) AFO',
                        category: 'Ankle-Foot',
                        description: 'Incorporates a mechanical joint to allow sagittal motion (usually DF) while controlling inversion/eversion.',
                        keyFeatures: ['Allows natural gait progression', 'Blocks M/L motion', 'Can add DF stop'],
                        ptIntervention: 'Good for patients with voluntary DF but instability, or to block specific ranges.'
                    },
                    {
                        id: 'grafo',
                        image: grafoImg,
                        name: 'Ground Reaction AFO',
                        category: 'Ankle-Foot',
                        description: 'Anterior shell places pressure below the knee to prevent excessive knee flexion (buckling) during stance.',
                        keyFeatures: ['Knee Extension Moment', 'Posterior entry', 'Rigid ankle'],
                        ptIntervention: 'Indicated for Crouch Gait (CP) or Quad weakness. Contraindicated for Recurvatum.'
                    },
                    {
                        id: 'kafo',
                        image: kafoImg,
                        name: 'KAFO',
                        category: 'Knee-Ankle-Foot',
                        description: 'Extends from thigh to foot with knee joints. Used when knee stability cannot be controlled by AFO alone.',
                        keyFeatures: ['Controls Knee Flex/Ext/Var/Val', 'Heavy & Energy consuming', 'Locking mechanism'],
                        ptIntervention: 'Indicated for Paraplegia (T10-L2), severe genu recurvatum, or quads < 3/5.'
                    },
                    {
                        id: 'rgo',
                        image: rgoImg,
                        name: 'RGO (Reciprocating Gait)',
                        category: 'Hip-Knee-Ankle',
                        description: 'HKAFO with a cable system connecting the hips. Flexion of one hip extends the other.',
                        keyFeatures: ['Facilitates uniform gait', 'High energy cost', 'Used with crutches'],
                        ptIntervention: 'Indicated for Spina Bifida (L1-L3) or SCI for therapeutic ambulation.'
                    }
                ]
            },
            {
                id: 'upper-extremity',
                title: 'Upper Extremity Orthotics',
                type: 'pathology-grid',
                pathologies: [
                    {
                        id: 'wrist-cock-up',
                        image: wristCockUpImg,
                        name: 'Wrist Cock-Up Splint',
                        category: 'Wrist',
                        description: 'Immobilizes the wrist in neutral or slight extension (20-30°) while allowing full MP and finger flexion.',
                        keyFeatures: ['Maintains functional position', 'Allows finger dexterity', ' Prevents wrist flexion'],
                        ptIntervention: 'Indicated for Carpal Tunnel Syndrome, Radial Nerve Palsy (Wrist Drop), or wrist sprains.'
                    },
                    {
                        id: 'thumb-spica',
                        image: thumbSpicaImg,
                        name: 'Thumb Spica Splint',
                        category: 'Thumb',
                        description: 'Immobilizes the thumb CMC and MP joints. Wrist may be included (Long) or excluded (Short).',
                        keyFeatures: ['Immobilizes first ray', 'Allows finger function'],
                        ptIntervention: 'Indicated for De Quervain\'s Tenosynovitis, Scaphoid fractures, or 1st CMC arthritis.'
                    },
                    {
                        id: 'resting-hand',
                        image: restingHandImg,
                        name: 'Resting Hand Splint',
                        category: 'Hand/Wrist',
                        description: 'Positions the wrist, hand, and fingers in a functional resting position (Intrinsic Plus).',
                        keyFeatures: ['Prevents contractures', 'Reduces spasticity tone', 'Neutral alignment'],
                        ptIntervention: 'Indicated for Stroke (flaccidity/spasticity), Burns, or Rheumatoid Arthritis flare-ups.'
                    },
                    {
                        id: 'mallet-finger',
                        image: malletFingerImg,
                        name: 'Mallet Finger Splint',
                        category: 'Finger',
                        description: 'Immobilizes the DIP joint in slight hyperextension.',
                        keyFeatures: ['Must be worn 24/7 for 6-8 weeks', 'DIP extended only'],
                        ptIntervention: 'Indicated for Mallet Finger (extensor tendon avulsion).'
                    },
                    {
                        id: 'boutonniere',
                        image: boutonniereImg,
                        name: 'Boutonniere Splint',
                        category: 'Finger',
                        description: 'Block\'s PIP into extension while allowing DIP flexion.',
                        keyFeatures: ['PIP Extension', 'Free DIP movement'],
                        ptIntervention: 'Indicated for Boutonniere Deformity (central slip injury).'
                    }
                ]
            },
            {
                id: 'spinal',
                title: 'Spinal Orthotics',
                type: 'pathology-grid',
                pathologies: [
                    {
                        id: 'lso-corset',
                        image: lsoCorsetImg,
                        name: 'LSO (Corset/Chairback)',
                        category: 'Lumbar',
                        description: 'Fabric or rigid brace supporting L1-L5. Increases abdominal cavity pressure to offload discs.',
                        keyFeatures: ['Limits Lumbar Flex/Ext', 'Pain Relief', 'Proprioceptive cue'],
                        ptIntervention: 'Used for LBP, lumbar stenosis, or repetitive lifting.'
                    },
                    {
                        id: 'tlso-body',
                        image: tlsoBodyImg,
                        name: 'TLSO (Body Jacket)',
                        category: 'Thoraco-Lumbar',
                        description: 'Rigid "clamshell" plastic brace offering maximal immobilization of the thoracic and lumbar spine.',
                        keyFeatures: ['Limits ALL motion (Flex/Ext/Rot/SB)', 'Hot/Uncomfortable', 'Total contact'],
                        ptIntervention: 'Indicated for unstable fractures, post-op spinal fusion, or severe scoliosis.'
                    },
                    {
                        id: 'jewett',
                        image: jewettBraceImg,
                        name: 'Jewett / CASH Brace',
                        category: 'Hyperextension',
                        description: 'Three-point pressure system (sternum, pubis, lumbar pad) to prevent flexion.',
                        keyFeatures: ['Promotes Hyperextension', 'Open design (cooler than body jacket)'],
                        ptIntervention: 'Indicated for Anterior Compression Fractures (T10-L2).'
                    },
                    {
                        id: 'halo',
                        image: haloVestImg,
                        name: 'Halo Vest',
                        category: 'Cervical',
                        description: 'Invasive device with pins fixed into the skull attached to a thoracic vest.',
                        keyFeatures: ['Gold Standard for stability', 'Maximal Restriction', 'Invasive'],
                        ptIntervention: 'Indicated for unstable C1/C2 fractures (Jefferson/Hangman).'
                    },
                    {
                        id: 'miami-j',
                        image: miamiJCollarImg,
                        name: 'Miami J Collar',
                        category: 'Cervical (CO)',
                        description: 'Rigid two-piece collar with polyethylene shell and soft lining. Provides superior immobilization compared to other collars.',
                        keyFeatures: ['High Motion Restriction', 'Mandibular/Occipital Support', 'Tracheostomy opening'],
                        ptIntervention: 'Gold standard for stable cervical fractures, post-op fusion, or C-spine trauma. Watch for skin breakdown (chin/occiput).'
                    },
                    {
                        id: 'philadelphia',
                        image: philadelphiaCollarImg,
                        name: 'Philadelphia Collar',
                        category: 'Cervical (CO)',
                        description: 'Semi-rigid foam collar. Less restrictive than Miami J but more comfortable for short durations.',
                        keyFeatures: ['Water resistant (Shower collar)', 'Lightweight foam', 'Moderate restriction'],
                        ptIntervention: 'Often used for patient hygiene (showering) when Miami J is removed, or for soft tissue injuries.'
                    },
                    {
                        id: 'soft-collar',
                        image: softFoamCollarImg,
                        name: 'Soft Foam Collar',
                        category: 'Cervical (CO)',
                        description: 'Soft foam ring. Provides minimal mechanical stability.',
                        keyFeatures: ['Kinesthetic Reminder only', 'Comfort/Warmth', 'No structural support'],
                        ptIntervention: 'Whiplash or minor strain. Does NOT block motion. "Psychological" support.'
                    },
                    {
                        id: 'minerva',
                        image: minervaOrthosisImg,
                        name: 'Minerva / SOMI',
                        category: 'Cervical-Thoracic (CTO)',
                        description: 'Sternal-Occipital-Mandibular Immobilizer. Braces against the chest/back to block cervical motion.',
                        keyFeatures: ['Stops Flexion (C1-C5)', 'Alternative to Halo (less invasive)', 'Chest plate'],
                        ptIntervention: 'Indicated for stable C-spine fractures where Halo is not indicated but collar is insufficient.'
                    }
                ]
            },
            {
                id: 'shoe-mods',
                title: 'Shoe Modifications',
                type: 'pathology-grid',
                pathologies: [
                    {
                        id: 'heel-lift',
                        image: heelLiftImg,
                        name: 'Heel Lift',
                        category: 'Internal/External',
                        description: 'Added height to the heel.',
                        keyFeatures: ['Corrects Leg Length Discrepancy', 'Accommodates fixed Equinus'],
                        ptIntervention: 'Internal (up to 3/8 inch) vs External. Also reduces tension on Achilles.'
                    },
                    {
                        id: 'rocker-bottom',
                        image: rockerBottomImg,
                        name: 'Rocker Bottom',
                        category: 'Sole Mod',
                        description: 'Curved sole that allows the foot to roll from heel to toe without ankle motion.',
                        keyFeatures: ['Simulates push-off', 'Reduces forefoot pressure'],
                        ptIntervention: 'Indicated for Hallux Rigidus (stiff big toe) or Metatarsalgia.'
                    },
                    {
                        id: 'met-pad',
                        name: 'Metatarsal Pad',
                        category: 'Internal',
                        description: 'Soft dome placed posterior to metatarsal heads.',
                        keyFeatures: ['Transfers load to shafts', 'Spreads metatarsals'],
                        ptIntervention: 'Indicated for Metatarsalgia or Morton\'s Neuroma.'
                    },
                    {
                        id: 'cushion-heel',
                        name: 'Cushion Heel',
                        category: 'Heel Mod',
                        description: 'Soft wedge at heel to absorb shock at heel strike.',
                        keyFeatures: ['Shock absorption', 'Reduces grf'],
                        ptIntervention: 'Indicated for Plantar Fasciitis or Calcaneal Spurs.'
                    }
                ]
            }
        ]
    }
};
