export const pharmacologyData = [
    // NSAIDs
    {
        id: 'nsaids-ibuprofen',
        name: 'Ibuprofen (Advil/Motrin)',
        category: 'NSAIDs',
        description: 'Non-steroidal anti-inflammatory drug used for pain, inflammation, and fever.',
        keyFeatures: [
            'Inhibits COX-1 and COX-2 enzymes',
            'Reduces prostaglandin synthesis',
            'Short half-life (requires freq dosing)'
        ],
        ptIntervention: 'Monitor for GI upset/pain. increased risk of bleeding. May mask fever/pain during evaluation.',
        icon: 'Pill',
        details: {
            overview: 'Traditional NSAID. First-line for many musculoskeletal conditions (sprains, strains, OA).',
            anatomy: ['Target: Cyclooxygenase (COX) enzymes in tissues.'],
            physiology: ['Blocks conversion of Arachidonic Acid to Prostaglandins (pain/inflammation mediators).'],
            sideEffects: ['GI bleeding/ulcers', 'Renal toxicity', 'Increased BP'],
            ptImplications: [
                'Watch for signs of GI bleed (dark stool, stomach pain).',
                'Can raise blood pressure - monitor HTN patients.'
            ]
        }
    },
    {
        id: 'nsaids-celebrex',
        name: 'Celecoxib (Celebrex)',
        category: 'NSAIDs',
        description: 'COX-2 selective NSAID. spared COX-1 (stomach protection).',
        keyFeatures: [
            'Selective COX-2 inhibitor',
            'Lower risk of GI ulcers',
            'Sulfa drug derivative'
        ],
        ptIntervention: 'Safer for GI, but higher cardiovascular risk (clotting). Monitor for cardiac signs.',
        icon: 'Pill',
        details: {
            overview: 'Prescribed for patients at high risk of GI ulcers who need chronic anti-inflammatory therapy (e.g., RA, OA).',
            anatomy: ['Target: COX-2 enzyme (induced at sites of inflammation).'],
            physiology: ['Inhibits inflammation pain without blocking gastric mucosal protection (COX-1).'],
            sideEffects: ['Cardiovascular events (MI/Stroke)', 'Kidney impairment'],
            ptImplications: [
                'Contraindicated post-CABG.',
                'Monitor for signs of DVT/PE or chest pain.'
            ]
        }
    },

    // Opioids
    {
        id: 'opioid-morphine',
        name: 'Morphine',
        category: 'Opioids',
        description: 'Strong opioid agonist for severe acute or chronic pain.',
        keyFeatures: [
            'Mu-receptor agonist',
            'Gold standard for severe pain',
            'High addiction potential'
        ],
        ptIntervention: 'High fall risk (dizziness/sedation). Respiratory depression. Schedule PT at peak effect for pain control if needed, or avoid if too sedated.',
        icon: 'Pill',
        details: {
            overview: 'Used for severe pain (post-op, trauma, cancer).',
            anatomy: ['Target: Mu-opioid receptors in CNS and PNS.'],
            physiology: ['Hyperpolarizes neurons, blocking nociceptive transmission.'],
            sideEffects: ['Respiratory depression', 'Constipation', 'Sedation', 'Orthostatic hypotension'],
            ptImplications: [
                'Orthostatic hypotension - transition positions slowly.',
                'Respiratory depression - monitor O2 sats.',
                'Constipation - encourage mobility and hydration.'
            ]
        }
    },
    {
        id: 'opioid-oxycodone',
        name: 'Oxycodone (OxyContin)',
        category: 'Opioids',
        description: 'Semi-synthetic opioid. Often combined with Acetaminophen (Percocet).',
        keyFeatures: [
            'Oral formulation common',
            'Moderate to severe pain',
            'High abuse potential'
        ],
        ptIntervention: 'Fall precautions. Monitor for "breakthrough pain" if on extended release.',
        icon: 'Pill',
        details: {
            overview: 'Common post-surgical analgesic.',
            anatomy: ['Target: Mu-opioid receptors.'],
            physiology: ['Alters pain perception and emotional response to pain.'],
            sideEffects: ['Drowsiness', 'Nausea', 'Confusion'],
            ptImplications: [
                'Ensure patient is alert enough to participate safely.',
                'Be aware of timing (immediate vs extended release).'
            ]
        }
    },

    // Muscle Relaxants
    {
        id: 'relaxant-flexeril',
        name: 'Cyclobenzaprine (Flexeril)',
        category: 'Muscle Relaxants',
        description: 'Centrally acting skeletal muscle relaxant.',
        keyFeatures: [
            'Reduces tonic somatic motor activity',
            'Structurally related to TCAs',
            'Used for acute spasms'
        ],
        ptIntervention: 'Significant sedation. High fall risk. Avoid heavy resistance training if coordination impaired.',
        icon: 'Pill',
        details: {
            overview: 'Adjunct to rest and PT for relief of muscle spasm associated with acute, painful musculoskeletal conditions.',
            anatomy: ['Target: Brainstem (not muscle directly).'],
            physiology: ['Reduces gamma- and alpha-motor neuron activity.'],
            sideEffects: ['Drowsiness', 'Dry mouth', 'Dizziness'],
            ptImplications: [
                'Guarding/Spasm reduction may unmask underlying instability.',
                'Patient transfers may be compromised due to sedation.'
            ]
        }
    },
    {
        id: 'relaxant-baclofen',
        name: 'Baclofen (Lioresal)',
        category: 'Muscle Relaxants',
        description: 'GABA-B agonist used specifically for SPASTICITY (CP, MS, SCI).',
        keyFeatures: [
            'GABA agonist',
            'Crosses blood-brain barrier',
            'Intrathecal pump option'
        ],
        ptIntervention: 'Monitor for withdrawal (seizures/hallucinations) if pump fails. Hypotonia (weakness) can occur.',
        icon: 'Pill',
        details: {
            overview: 'Gold standard for spinal cord origin spasticity.',
            anatomy: ['Target: GABA-B receptors in spinal cord.'],
            physiology: ['Inhibits monosynaptic and polysynaptic reflexes.'],
            sideEffects: ['Hypotonia', 'Drowsiness', 'Weakness'],
            ptImplications: [
                'Sudden withdrawal is a MEDICAL EMERGENCY (Hyperthermia, spasticity, rhabdo).',
                'May reduce functional spasticity needed for transfers (e.g., extensor tone).'
            ]
        }
    },

    // Anticoagulants
    {
        id: 'anticoag-warfarin',
        name: 'Warfarin (Coumadin)',
        category: 'Anticoagulants',
        description: 'Vitamin K antagonist. Long-term prophylaxis of thrombosis.',
        keyFeatures: [
            'Inhibits Vit K dependent factors (II, VII, IX, X)',
            'Requires INR monitoring',
            'Slow onset/offset'
        ],
        ptIntervention: 'HIGH BLEED RISK. Cautious with manual therapy/massage. Fall prevention is critical (Intracranial hemorrhage risk).',
        icon: 'Pill',
        details: {
            overview: 'Used for A-Fib, DVT/PE treatment, artificial valves.',
            anatomy: ['Target: Liver synthesis of clotting factors.'],
            physiology: ['Prevents activation of Vitamin K.'],
            sideEffects: ['Bleeding (Ecchymosis, Hematuria)', 'Purple Toe Syndrome'],
            ptImplications: [
                'Check INR: 2.0-3.0 Therapeutic. >3.5 Risk of bleed -> modify activity. >5.0 Hold PT.',
                'Avoid deep tissue massage.'
            ]
        }
    },
    {
        id: 'anticoag-eliquis',
        name: 'Apixaban (Eliquis)',
        category: 'Anticoagulants',
        description: 'Direct Factor Xa inhibitor (DOAC).',
        keyFeatures: [
            'No INR monitoring needed',
            'Rapid onset',
            'Renal clearance'
        ],
        ptIntervention: 'Bleeding risk still present but less "volatile" than Warfarin. Fall precautions remain.',
        icon: 'Pill',
        details: {
            overview: 'Modern alternative to Warfarin for non-valvular A-Fib and DVT/PE.',
            anatomy: ['Target: Factor Xa in coagulation cascade.'],
            physiology: ['Directly inhibits conversion of Prothrombin to Thrombin.'],
            sideEffects: ['Bleeding'],
            ptImplications: [
                'Easier management than Warfarin but no easy antidote in emergencies.',
                'Observe for excessive bruising.'
            ]
        }
    },

    // Cardiovascular
    {
        id: 'cv-betablocker',
        name: 'Beta Blockers (-olol)',
        category: 'Cardiovascular',
        description: 'Blocks epinephrine effects. Metoprolol, Atenolol.',
        keyFeatures: [
            'Decreases HR and Contractility',
            'Lowers BP',
            'Bronchoconstriction (non-selective)'
        ],
        ptIntervention: 'BLUNTED HR RESPONSE. HR will not rise linearly with exercise. Use RPE (Borg Scale) to gauge intensity.',
        icon: 'Pill',
        details: {
            overview: 'Used for HTN, Angina, Heart Failure, Arrhythmias.',
            anatomy: ['Target: Beta-1 (Heart) and Beta-2 (Lungs) receptors.'],
            physiology: ['Sympathetic antagonist.'],
            sideEffects: ['Bradycardia', 'Fatigue', 'Orthostatic Hypotension', 'Masks Hypoglycemia'],
            ptImplications: [
                'RPE is King.',
                'Long cool-down needed to prevent venous pooling.',
                'Watch for orthostasis.'
            ]
        }
    },
    {
        id: 'cv-ace',
        name: 'ACE Inhibitors (-pril)',
        category: 'Cardiovascular',
        description: 'Lisinopril, Enalapril. Vasodilators.',
        keyFeatures: [
            'Blocks Angiotensin I -> II',
            'Dry Cough (common)',
            'Renal protective (Diabetes)'
        ],
        ptIntervention: 'Orthostatic Hypotension risk. Get up slowly.',
        icon: 'Pill',
        details: {
            overview: 'First line for HTN and Heart Failure.',
            anatomy: ['Target: ACE enzyme (Lung endothelium).'],
            physiology: ['Prevents vasoconstriction and aldosterone release.'],
            sideEffects: ['Dry hacking cough', 'Hyperkalemia', 'Angioedema (swelling lips/tongue) - EMREGENCY'],
            ptImplications: [
                'Monitor BP with position changes.',
                'Dizziness is common.'
            ]
        }
    },

    // Corticosteroids
    {
        id: 'steroid-prednisone',
        name: 'Prednisone',
        category: 'Corticosteroids',
        description: 'Potent anti-inflammatory and immunosuppressant.',
        keyFeatures: [
            'Mimics cortisol',
            'Catabolic (breaks down tissue)',
            'Systemic effects'
        ],
        ptIntervention: 'Tendon weakness (rupture risk). Osteoporosis risk (fractures). Muscle wasting (proximal). Immuno-compromised.',
        icon: 'Pill',
        details: {
            overview: 'Used for autoimmune flares (RA, Lupus), Asthma, acute inflammation.',
            anatomy: ['Target: Nuclear receptors in nearly all cells.'],
            physiology: ['Suppress gene expression of inflammatory cytokines.'],
            sideEffects: ['Hyperglycemia', 'Moon face', 'Osteoporosis', 'Mood swings', 'Insomnia'],
            ptImplications: [
                'Protect bones/tendons - avoid high impact or heavy loads if chronic use.',
                'Infection control PPE.',
                'Check blood sugar if diabetic.'
            ]
        }
    }
];
