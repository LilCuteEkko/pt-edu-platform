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
                        function: 'Voluntary movement (Primary Motor Cortex), Executive function, Personality, Broca\'s Area (Motor Speech).',
                        ptRelevance: 'Middle Cerebral Artery (MCA) strokes often affect this region, causing contralateral hemiparesis (Face/Arm > Leg) and expressive aphasia.'
                    },
                    {
                        id: 'parietal',
                        name: 'Parietal Lobe',
                        function: 'Sensation (Primary Somatosensory Cortex), spatial awareness, proprioception.',
                        ptRelevance: 'Lesions lead to sensation loss and Hemineglect (ignoring one side of space/body), complicating rehab.'
                    },
                    {
                        id: 'temporal',
                        name: 'Temporal Lobe',
                        function: 'Hearing (Auditory Cortex), Memory (Hippocampus), Wernicke\'s Area (Language Comprehension).',
                        ptRelevance: 'Wernicke\'s Aphasia: Patient speaks fluently but words lack meaning ("Word Salad"). Memory deficits impact learning new exercises.'
                    },
                    {
                        id: 'occipital',
                        name: 'Occipital Lobe',
                        function: 'Visual processing (Visual Cortex).',
                        ptRelevance: 'Cortical blindness or visual field cuts (Homonymous Hemianopsia) can increase fall risk and affect balance.'
                    },
                    {
                        id: 'cerebellum',
                        name: 'Cerebellum',
                        function: 'Coordination, Balance, Motor Learning, Fine motor control.',
                        ptRelevance: 'Cerebellar strokes cause Ataxia, Dysmetria (overshooting), and intention tremors. Balance training is critical.'
                    },
                    {
                        id: 'brainstem',
                        name: 'Brainstem',
                        function: 'Vital functions (Heart rate, Breathing), Alertness (Reticular formation), Cranial Nerve nuclei.',
                        ptRelevance: 'Strokes here can be fatal or cause "Locked-In Syndrome". Affects basic arousal and autonomic stability.'
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
                        icon: 'Bone'
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
                        icon: 'AlertTriangle'
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
                        icon: 'Activity'
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
                        icon: 'Circle' // Placeholder, will update map
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
                        icon: 'RotateCw' // Placeholder
                    },
                    {
                        id: 'plantar-fasciitis',
                        name: 'Plantar Fasciitis',
                        description: 'Inflammation of the plantar fascia insertion at the medial calcaneal tubercle. Overuse injury.',
                        keyFeatures: [
                            'Sharp heel pain with first steps in morning',
                            'Pain improves with movement but worsens with prolonged standing',
                            'Tenderness at medial calcaneus',
                            'Tight gastroc/soleus complex'
                        ],
                        ptIntervention: 'Calf stretching, plantar fascia stretching, manual therapy (STM), night splints, intrinsics strengthening.',
                        icon: 'Footprints' // Placeholder
                    }
                ]
            },
            {
                id: 'sliding-filament',
                title: 'Sliding Filament Theory',
                introduction: 'The mechanism by which muscles contract. It involves the sliding of actin filaments over myosin filaments, shortening the sarcomere.',
                type: 'interactive-sarcomere', // Enable animator
                content: [
                    'Excitation-Contraction Coupling: AP travels down T-tubules, releasing Ca2+ from Sarcoplasmic Reticulum.',
                    'Active Site Exposure: Ca2+ binds to Troponin C. Tropomyosin shifts, exposing myosin-binding sites on Actin.',
                    'Cross-Bridge Formation: Energized Myosin heads bind to Actin.',
                    'Power Stroke: ADP + Pi release causes Myosin head to pivot, pulling Actin toward M-line (Shortening).',
                    'Detachment: New ATP binds Myosin, causing it to detach from Actin.',
                    'Re-cocking: ATP hydrolysis (ATP -> ADP + Pi) re-cocks the Myosin head for the next cycle.'
                ],
                clinicalRelevance: 'Muscle Cramps: Caused by involuntary, sustained contraction, often due to electrolyte imbalance or fatigue.',
                pathologyConnection: 'Rigor Mortis: Post-mortem lack of ATP prevents myosin detachment, leaving muscles in a fixed state of contraction.'
            }
        ]
    },
    {
        id: 'cardiopulmonary',
        title: 'Cardiopulmonary Physiology',
        description: 'The essential systems for delivering oxygen to tissues and removing carbon dioxide.',
        icon: 'Heart',
        subtopics: [
            {
                id: 'cardiac-cycle',
                title: 'The Cardiac Cycle',
                introduction: 'The sequence of mechanical and electrical events that repeat with every heartbeat. Includes Systole (Contraction) and Diastole (Relaxation).',
                type: 'interactive-heart', // Enable visualizer
                content: [
                    'Atrial Systole: Atria contract, pushing final 20% of blood into ventricles ("Atrial Kick").',
                    'Isovolumetric Contraction: Ventricles contract, AV valves close (S1 "Lub"), pressure rises but volume stays same.',
                    'Rapid Ejection: Semilunar valves open, blood is ejected into Aorta/Pulmonary Artery.',
                    'Isovolumetric Relaxation: Ventricles relax, Semilunar valves close (S2 "Dub").',
                    'Rapid Filling: AV valves open, blood passively fills ventricles (80% of filling).'
                ],
                clinicalRelevance: 'Heart Failure (HFrEF): The heart cannot pump with enough force (systolic dysfunction), reducing Ejection Fraction (<40%).',
                pathologyConnection: 'Aortic Stenosis: Narrowing of the aortic valve obstructs flow, causing a systolic murmur and hypertrophy.'
            },
            {
                id: 'conduction-system',
                title: 'Electrical Conduction System',
                introduction: 'The pathway of electrical signals that coordinate heart beats.',
                content: [
                    'SA Node: The "Pacemaker" (60-100 bpm). Initiates impulse in right atrium.',
                    'AV Node: Delays the signal (~0.1s) to allow atria to fully contract before ventricles.',
                    'Bundle of His: Transmits signal to the ventricles.',
                    'Purkinje Fibers: Rapidly distribute signal to ventricular walls for synchronized contraction.'
                ],
                clinicalRelevance: 'Arrhythmias: Atrial Fibrillation (chaotic atrial signals) or Heart Block (disrupted signal at AV node).',
                pathologyConnection: 'Myocardial Infarction: Blockage of coronary arteries kills heart tissue, potentially disrupting these conduction pathways.'
            },
            {
                id: 'cp-pathologies',
                title: 'Cardiopulmonary Pathologies',
                introduction: 'Common conditions affecting the heart and lungs that require specialized rehabilitation strategies.',
                type: 'pathology-grid',
                clinicalRelevance: 'Vital sign monitoring and understanding endurance limitations are paramount for safety.',
                pathologyConnection: 'Includes Obstructive/Restrictive lung diseases and Cardiac pump dysfunction.',
                pathologies: [
                    {
                        id: 'copd',
                        name: 'Chronic Obstructive Pulmonary Disease',
                        acronym: 'COPD',
                        icon: 'Activity', // Using Activity (suggesting breath/endurance) as placeholder
                        description: 'A group of lung diseases (Emphysema, Chronic Bronchitis) that block airflow and make it difficult to breathe.',
                        keyFeatures: [
                            'Dyspnea on exertion (DOE)',
                            'Barrel Chest (Hyperinflation)',
                            'Pursed-lip breathing (PLB) posture',
                            'Chronic cough / Sputum production'
                        ],
                        ptIntervention: 'Energy conservation, Pursed-lip breathing, Aerobic endurance training, Thoracic mobility.',
                        details: {
                            overview: 'COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs. It is typically caused by long-term exposure to irritating gases usually from cigarette smoke.',
                            anatomy: [
                                'Bronchioles: Inflammation and excess mucus (Chronic Bronchitis).',
                                'Alveoli: Destruction of air sacs reduces surface area for gas exchange (Emphysema).',
                                'Diaphragm: Flattened due to hyperinflation, making it mechanically less efficient.'
                            ],
                            physiology: [
                                'Air Trapping: Loss of elastic recoil means air gets trapped in lungs during expiration.',
                                'V/Q Mismatch: Poor ventilation leads to Hypoxemia (low O2) and Hypercapnia (high CO2).'
                            ],
                            stats: [
                                { label: 'Prevalence', value: '3rd leading cause of death worldwide' },
                                { label: 'Types', value: 'Blue Bloater (Bronchitis) vs Pink Puffer (Emphysema)' }
                            ],
                            medications: [
                                { name: 'Bronchodilators', mechanism: 'Beta-agonists/Anticholinergics', effect: 'Opens airways (Albuterol, Spiriva).' },
                                { name: 'Corticosteroids', mechanism: 'Anti-inflammatory', effect: 'Reduces swelling (Flovent).' }
                            ],
                            medicalInterventions: [
                                'Oxygen Therapy: To maintain SaO2 > 88-90%.',
                                'Lung Volume Reduction Surgery: Removing damaged tissue.'
                            ],
                            ptManagement: [
                                { stage: 'Education', focus: 'Breathing: Teaching Pursed-Lip Breathing (PLB) and Diaphragmatic breathing.' },
                                { stage: 'Exercise', focus: 'Endurance: Walking programs/cycling to improve aerobic capacity.' },
                                { stage: 'Clearance', focus: 'Hygiene: ACBT (Active Cycle of Breathing) for secretion clearance.' }
                            ]
                        }
                    },
                    {
                        id: 'hf',
                        name: 'Heart Failure',
                        acronym: 'CHF',
                        icon: 'Heart',
                        description: 'A chronic condition in which the heart doesn\'t pump blood as well as it should. Can be Left or Right sided.',
                        keyFeatures: [
                            'Dyspnea / Orthopnea (SOB lying flat)',
                            'Peripheral Edema (Right sided)',
                            'Fatigue / Weakness',
                            'Weight gain (fluid retention)'
                        ],
                        ptIntervention: 'Monitoring vitals (daily weights), interval training, energy conservation. Watch for decompensation signs.',
                        details: {
                            overview: 'Heart Failure is a chronic, progressive condition in which the heart muscle is unable to pump enough blood to meet the body\'s needs for blood and oxygen.',
                            anatomy: [
                                'Left Ventricle: Hypertrophy (stiff) or Dilation (weak).',
                                'Valves: Regurgitation often complicates the condition.',
                                'Lungs: Left-sided failure causes backup into lungs (Pulmonary Edema).'
                            ],
                            physiology: [
                                'Frank-Starling Law: Fails. Stretching the heart no longer increases contractility.',
                                'RAAS Activation: Kidneys retain water/salt to boost pressure, worsening volume overload.'
                            ],
                            stats: [
                                { label: 'Classifications', value: 'HFrEF (Systolic) vs HFpEF (Diastolic)' },
                                { label: 'Hospitalization', value: '#1 cause for adults >65' }
                            ],
                            medications: [
                                { name: 'ACE Inhibitors', mechanism: 'Vasodilator', effect: 'Reduces afterload (Lisinopril).' },
                                { name: 'Beta Blockers', mechanism: 'Sympathetic blocker', effect: 'Reduces heart rate/workload (Metoprolol).' },
                                { name: 'Diuretics', mechanism: 'Water pill', effect: 'Reduces fluid overload (Lasix).' }
                            ],
                            medicalInterventions: [
                                'LVAD: Left Ventricular Assist Device (pump) for end-stage failure.',
                                'AICD: Implantable defibrillator for arrhythmias.'
                            ],
                            ptManagement: [
                                { stage: 'Monitoring', focus: 'Safety: Check weight daily (>2lbs/day is red flag). Monitor BP/HR.' },
                                { stage: 'Activity', focus: 'Conditioning: Low-level aerobic intervals. Warm-up/Cool-down is critical.' },
                                { stage: 'Education', focus: 'Lifestyle: Sodium restriction, fluid restriction.' }
                            ]
                        }
                    },
                    {
                        id: 'mi',
                        name: 'Myocardial Infarction',
                        acronym: 'MI',
                        icon: 'AlertTriangle',
                        description: 'A heart attack. Blood flow to the heart muscle is abruptly cut off, causing tissue death.',
                        keyFeatures: [
                            'Chest pain/pressure (Angina)',
                            'Radiating pain (Left arm, jaw)',
                            'Shortness of breath (SOB)',
                            'Diaphoresis (Sweating) / Nausea'
                        ],
                        ptIntervention: 'Cardiac Rehab (Phase I-III). Progressive mobilization, sternal precautions (if CABG), lifestyle modification.',
                        details: {
                            overview: 'A myocardial infarction (MI), commonly known as a heart attack, occurs when blood flow decreases or stops to a part of the heart, causing damage to the heart muscle.',
                            anatomy: [
                                'Coronary Arteries: LAD (Widowmaker), RCA, Circumflex.',
                                'Myocardium: Tissue death leads to scar formation (non-contractile).'
                            ],
                            physiology: [
                                'Atherosclerosis: Plaque rupture triggers clot formation.',
                                'Ischemia vs Infarct: Ischemia is reversible (Angina), Infarct is permanent necrosis.'
                            ],
                            stats: [
                                { label: 'Timing', value: 'Time is Muscle (90 min door-to-balloon goal)' },
                                { label: 'Types', value: 'STEMI (Full thickness) vs NSTEMI' }
                            ],
                            medications: [
                                { name: 'Nitroglycerin', mechanism: 'Vasodilator', effect: 'Relieves Angina.' },
                                { name: 'Antiplatelets', mechanism: 'Clot prevention', effect: 'Aspirin/Brilinta.' },
                                { name: 'Morphine', mechanism: 'Analgesic', effect: 'Pain and anxiety relief (MONA protocol).' }
                            ],
                            medicalInterventions: [
                                'PCI (Stent): Percutaneous Coronary Intervention to open artery.',
                                'CABG: Coronary Artery Bypass Graft (Open heart surgery).'
                            ],
                            ptManagement: [
                                { stage: 'Phase I (Inpatient)', focus: 'Mobility: METs 1-3. Ambulation, stairs, education on Sternal Precautions.' },
                                { stage: 'Phase II (Outpatient)', focus: 'Conditioning: Monitored aerobic exercise (ECG), risk factor modification.' },
                                { stage: 'Phase III', focus: 'Maintenance: Lifelong fitness independence.' }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        id: 'pediatrics',
        title: 'Pediatric Physical Therapy',
        description: 'Management of congenital, developmental, and neuromuscular disorders in infants and children.',
        icon: 'Baby',
        subtopics: [
            {
                id: 'peds-pathologies',
                title: 'Pediatric Pathologies',
                introduction: 'Common congenital and developmental conditions requiring early intervention and long-term management.',
                type: 'pathology-grid',
                clinicalRelevance: 'Family-centered care and play-based therapy are essential for compliance and outcomes.',
                pathologyConnection: 'Early intervention takes advantage of high neuroplasticity during development.',
                pathologies: [
                    {
                        id: 'cp',
                        name: 'Cerebral Palsy',
                        acronym: 'CP',
                        description: 'A group of non-progressive disorders of movement and posture caused by damage to the developing brain.',
                        keyFeatures: [
                            'Spastic (Motor Cortex), Dyskinetic (Basal Ganglia), or Ataxic (Cerebellum)',
                            'Abnormal muscle tone (Hyper/Hypotonia)',
                            'Persistence of primitive reflexes',
                            'Gait abnormalities (e.g., Scissoring, Crouch gait)'
                        ],
                        ptIntervention: 'Spasticity management (stretching, positioning), strengthening, gait training, adaptive equipment, constraint-induced movement therapy (CIMT).',
                        icon: 'Brain',
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
                        description: 'Neural tube defect where the spinal column doesnt close completely. Myelomeningocele is the most severe form.',
                        keyFeatures: [
                            'Motor/Sensory loss below lesion level',
                            'Hydrocephalus (Arnold-Chiari II malformation)',
                            'Neurogenic bladder/bowel',
                            'Latex allergy is common'
                        ],
                        ptIntervention: 'Prescription of orthotics (AFOs, HKAFOs), wheelchair mobility, standing frames for bone density, skin care education.',
                        icon: 'AlignJustify',
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
                        description: 'X-linked recessive genetic disorder causing progressive muscle degeneration and weakness due to lack of dystrophin.',
                        keyFeatures: [
                            'Gowers\' Sign (walking hands up legs to stand)',
                            'Pseudohypertrophy of calves',
                            'Proximal weakness > Distal',
                            'Loss of ambulation by early teens'
                        ],
                        ptIntervention: 'Submaximal exercise (avoid eccentric fatigue), respiratory care, stretching to prevent contractures, mobility preservation.',
                        icon: 'Activity',
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
                        description: 'Shortening of the Sternocleidomastoid (SCM) muscle, causing a lateral tilt and rotation of the head.',
                        keyFeatures: [
                            'Head tilted TO the tight side, rotated AWAY',
                            'Plagiocephaly (flat head) often associated',
                            'Palpable mass in SCM',
                            'Decreased cervical ROM'
                        ],
                        ptIntervention: 'Passive stretching of SCM, strengthening of contralateral side, positioning, tummy time, helmet therapy if plagiocephaly persists.',
                        icon: 'User',
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
                    }
                ]
            },
            {
                id: 'developmental-milestones',
                title: 'Developmental Milestones',
                introduction: 'Key gross motor skills acquired during the first year of life.',
                type: 'milestone-tracker',
                content: [], // Handled by component
                milestones: [
                    { age: '2-3 Months', skill: 'Prone on Elbows', description: 'Lifts head 90°, takes weight on forearms.' },
                    { age: '4-5 Months', skill: 'Rolling', description: 'Rolls prone to supine, then supine to prone. Feet to mouth.' },
                    { age: '6-7 Months', skill: 'Independent Sitting', description: 'Sits without support, protective extension forward.' },
                    { age: '8-9 Months', skill: 'Creeping & Crawling', description: 'Quadruped position, pulls to stand.' },
                    { age: '10-11 Months', skill: 'Cruising', description: 'Walks holding onto furniture. Stands independently.' },
                    { age: '12-15 Months', skill: 'Independent Walking', description: 'Walks without support, creeps up stairs.' }
                ],
                reflexes: [
                    { name: 'Moro', stimulus: 'Sudden head drop', response: 'Arms abduct/extend then adduct', age: '0-4 mo' },
                    { name: 'ATNR', stimulus: 'Head turn to side', response: 'Face side extend, Skull side flex ("Fencer")', age: '0-6 mo' },
                    { name: 'STNR', stimulus: 'Neck flexion/extension', response: 'Flex: Arms flex/Legs extend. Ext: Arms ext/Legs flex', age: '6-8 mo' },
                    { name: 'Palmar Grasp', stimulus: 'Pressure on palm', response: 'Finger flexion', age: '0-4 mo' },
                    { name: 'Plantar Grasp', stimulus: 'Pressure on ball of foot', response: 'Toe flexion', age: '0-9 mo' }
                ]
            }
        ]
    }
];
