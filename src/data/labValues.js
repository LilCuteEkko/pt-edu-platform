export const labCategories = [
    'Hematology',
    'Chemistry',
    'Coagulation',
    'Cardiac & Metabolic',
    'Inflammation'
];

export const labValues = [
    // --- HEMATOLOGY ---
    {
        id: 'hgb',
        name: 'Hemoglobin (Hgb)',
        category: 'Hematology',
        normalRange: 'Male: 14-17.4 g/dL | Female: 12-16 g/dL',
        criticalValues: '< 5-7 g/dL or > 20 g/dL',
        significance: 'Oxygen carrying capacity. Low levels = poor endurance.',
        implications: [
            { label: 'Low (< 8 g/dL)', value: 'Precautions: Essential activities only. Fall risk due to dizziness/orthostasis.' },
            { label: 'Low (8-10 g/dL)', value: 'Precaution: Decreased exercise tolerance. Monitor vitals (HR/SpO2).' },
            { label: 'Contraindication', value: 'Generally < 8 g/dL (varies by facility/symptoms). Transfusion often triggered < 7.' }
        ],
        symptoms: 'Fatigue, tachycardia, shortness of breath on exertion, pallor.'
    },
    {
        id: 'hct',
        name: 'Hematocrit (Hct)',
        category: 'Hematology',
        normalRange: 'Male: 42-52% | Female: 37-47%',
        criticalValues: '< 15-20% or > 60%',
        significance: '% of blood volume that is RBCs. "Viscosity" of blood.',
        implications: [
            { label: 'Low (< 25%)', value: 'Precautions: Light ADLs only. High fatigue.' },
            { label: 'Low (25-30%)', value: 'Light exercise permitted. Resistive exercise may be poorly tolerated.' }
        ],
        symptoms: 'Weakness, dyspnea, chills, dizziness.'
    },
    {
        id: 'wbc',
        name: 'White Blood Cells (WBC)',
        category: 'Hematology',
        normalRange: '5.0 - 10.0 x10^9/L',
        criticalValues: '< 2.5 or > 30.0 x10^9/L',
        significance: 'Immune status.',
        implications: [
            { label: 'Neutropenia (< 1.5 absolute)', value: 'Neutropenic Precautions: Mask, hand hygiene. Risk of severe infection.' },
            { label: 'Leukocytosis (> 11.0)', value: 'Infection/Inflammation. Monitor for fever. Decreased endurance.' },
            { label: 'Contraindication', value: 'WBC < 5.0 with Fever (> 101.5°F).' }
        ],
        symptoms: 'Fever, lethargy, malaise.'
    },

    // --- COAGULATION (Updated from User Image) ---
    {
        id: 'plt',
        name: 'Platelets (Plt)',
        category: 'Coagulation',
        normalRange: '150 - 400 x 10^9/L (150k - 400k)',
        criticalValues: '< 20 k/uL or > 1,000 k/uL',
        significance: 'Clotting ability.',
        implications: [
            { label: '< 20k', value: 'Contraindication: NO exercise (ADLs only). Major bleed risk.' },
            { label: '20k - 50k', value: 'Light exercise (walking). NO resistance/Valsalva.' },
            { label: '50k - 150k', value: 'Resistive exercise permitted with care.' },
            { label: 'Mean Platelet Vol', value: '7.4 - 10.4 fL' }
        ],
        symptoms: 'Petechiae (dots), Ecchymosis (bruising), bleeding gums.'
    },
    {
        id: 'inr',
        name: 'INR',
        category: 'Coagulation',
        normalRange: '0.8 - 1.2',
        criticalValues: '> 5.0',
        significance: 'Standardized clotting time (Warfarin monitoring).',
        implications: [
            { label: 'Therapeutic (Warfarin)', value: '2.0 - 3.0 (Std) | 3.0 - 4.0 (Mech Valves)' },
            { label: '> 4.0', value: 'Precaution: No resistive exercise. Evaluation only.' },
            { label: '> 5.0', value: 'Contraindication: Bed rest likely. High bleed risk.' }
        ],
        symptoms: 'Spontaneous bleeding, bruising.'
    },
    {
        id: 'pt',
        name: 'Prothrombin Time (PT)',
        category: 'Coagulation',
        normalRange: '11 - 13 seconds',
        criticalValues: '> 20 seconds',
        significance: 'Extrinsic pathway clotting time.',
        implications: [
            { label: 'Therapeutic', value: '1.5 - 2.0x Control Value' },
            { label: '> 20s', value: 'Precaution: Increased bleeding risk. Modify manual handling.' }
        ],
        symptoms: 'Bleeding, bruising.'
    },
    {
        id: 'aptt',
        name: 'aPTT (Activated Partial Thromboplastin Time)',
        category: 'Coagulation',
        normalRange: '30 - 40 seconds',
        criticalValues: '> 70 seconds',
        significance: 'Intrinsic pathway (Heparin monitoring).',
        implications: [
            { label: 'Therapeutic', value: '1.5 - 2.5x Control (60 - 80s)' },
            { label: 'Critical (> 70s)', value: 'Contraindication: High risk of spontaneous bleed.' }
        ],
        symptoms: 'Hemorrhage risk.'
    },
    {
        id: 'fibrinogen',
        name: 'Fibrinogen',
        category: 'Coagulation',
        normalRange: '200 - 400 mg/dL',
        criticalValues: '< 100 mg/dL',
        significance: 'Protein precursor to fibrin (clotting).',
        implications: [
            { label: 'Low (< 100)', value: 'High risk of bleeding. Caution with transfers/falls.' }
        ],
        symptoms: 'Excessive bleeding.'
    },
    {
        id: 'd-dimer',
        name: 'D-Dimer',
        category: 'Coagulation',
        normalRange: '< 0.4 mcg/mL',
        criticalValues: 'Elevated levels (> 0.5)',
        significance: 'Fibrin degradation product. DVT/PE screen.',
        implications: [
            { label: 'Elevated', value: 'Suspicion of DVT/PE. HOLD PT if new/untreated until imaged.' },
            { label: "Well's Criteria", value: 'Use to risk stratify DVT probability.' }
        ],
        symptoms: 'Calf pain/redness (DVT). CP/SOB (PE).'
    },

    // --- CHEMISTRY ---
    {
        id: 'na',
        name: 'Sodium (Na+)',
        category: 'Chemistry',
        normalRange: '134 - 142 mEq/L',
        criticalValues: '< 120 or > 160',
        significance: 'Determine fluid vol & nerve conduction.',
        implications: [
            { label: 'Hyponatremia (< 130)', value: 'Confusion, lethargy, cramps. Fall risk!' },
            { label: 'Hypernatremia (> 145)', value: 'Thirst, agitation, hyperreflexia.' }
        ],
        symptoms: 'Mental status changes.'
    },
    {
        id: 'k',
        name: 'Potassium (K+)',
        category: 'Chemistry',
        normalRange: '3.7 - 5.1 mEq/L',
        criticalValues: '< 2.5 or > 6.2',
        significance: 'Cardiac rhythm & muscle contraction.',
        implications: [
            { label: 'Hypo (< 3.5)', value: 'Weakness, cramps, EKG changes (flat T). Arrhythmia risk.' },
            { label: 'Hyper (> 5.5)', value: 'Contraindication: Risk of cardiac arrest (Peaked T). Hold PT.' }
        ],
        symptoms: 'Palpitations, weakness.'
    },
    {
        id: 'calcium',
        name: 'Calcium (Ca)',
        category: 'Chemistry',
        normalRange: '8.6 - 10.3 mg/dL',
        criticalValues: '< 6.0 or > 13.0',
        significance: 'Muscle contraction, bone health.',
        implications: [
            { label: 'Hypocalcemia', value: 'Tetany (muscle spasm), Trousseau/Chvostek signs. Seizure risk.' },
            { label: 'Hypercalcemia', value: 'Flaccidity, lethargy, arrhythmias.' }
        ],
        symptoms: 'Spasms vs Weakness.'
    },
    {
        id: 'magnesium',
        name: 'Magnesium (Mg)',
        category: 'Chemistry',
        normalRange: '1.7 - 2.2 mg/dL',
        criticalValues: '< 1.0 or > 5.0',
        significance: 'Neuromuscular excitability.',
        implications: [
            { label: 'Hypomagnesemia', value: 'Tremors, ventricular arrhythmias (Torsades). High seizure risk.' },
            { label: 'Hypermagnesemia', value: 'Hyporeflexia, weakness, respiratory depression.' }
        ],
        symptoms: 'High excitability (Low Mg) or lethargy (High Mg).'
    },
    {
        id: 'bun',
        name: 'BUN (Blood Urea Nitrogen)',
        category: 'Chemistry',
        normalRange: '6 - 20 mg/dL',
        criticalValues: '> 100 mg/dL',
        significance: 'Renal function & Hydration.',
        implications: [
            { label: 'Elevated', value: 'Indicates renal failure or dehydration. Patient may be confused/fatigued.' },
            { label: 'Uremic Frost', value: 'Severe skin deposits in failure.' }
        ],
        symptoms: 'Confusion, disorientation.'
    },
    {
        id: 'creatinine',
        name: 'Creatinine (Cr)',
        category: 'Chemistry',
        normalRange: '0.6 - 1.3 mg/dL',
        criticalValues: '> 4.0 mg/dL',
        significance: 'Gold standard for renal function.',
        implications: [
            { label: 'Rising levels', value: 'Acute Kidney Injury (AKI). Fatigue, muscle wasting common.' },
            { label: 'Dialysis', value: 'Coordinate PT around dialysis sched. (Fatigued post-treatment).' }
        ],
        symptoms: 'Edema, fatigue.'
    },
    {
        id: 'glucose',
        name: 'Glucose (Fasting)',
        category: 'Chemistry',
        normalRange: '70 - 100 mg/dL',
        criticalValues: '< 60 or > 300',
        significance: 'Fuel for tissues.',
        implications: [
            { label: 'Hypo (< 70)', value: 'Contraindication: Treat immediately (15g carb). Fall risk.' },
            { label: 'Hyper (> 250)', value: 'Precaution: Encourage water. No HIIT. Check ketones if > 300.' }
        ],
        symptoms: 'Shakey/Sweaty (Hypo). Thirst/Polyuria (Hyper).'
    },

    // --- CARDIAC & METABOLIC ---
    {
        id: 'troponin',
        name: 'Troponin',
        category: 'Cardiac & Metabolic',
        normalRange: '< 0.03 ng/mL',
        criticalValues: 'Any new elevation',
        significance: 'Myocardial Infarction marker.',
        implications: [
            { label: 'Rising', value: 'Contraindication: Active ischemia. HOLD PT.' },
            { label: 'Downtrending', value: 'If enzymes peaking/falling, may resume gentle mobilization.' }
        ],
        symptoms: 'Chest pain, SOB.'
    },
    {
        id: 'ck',
        name: 'CK / CPA (Creatine Kinase)',
        category: 'Cardiac & Metabolic',
        normalRange: '30 - 170 U/L',
        criticalValues: '> 10,000 (Rhabdo risk)',
        significance: 'Muscle damage marker.',
        implications: [
            { label: 'Elevated', value: 'Indicates muscle tissue breakdown (Rhabdomyolysis). hydration critical.' },
            { label: 'Post-Fall', value: 'Watch for AKI due to myoglobin clogging kidneys.' }
        ],
        symptoms: 'Dark (tea colored) urine, muscle soreness.'
    },
    {
        id: 'hba1c',
        name: 'HbA1c',
        category: 'Cardiac & Metabolic',
        normalRange: '< 5.7%',
        criticalValues: '> 6.5% (Diabetes)',
        significance: '3-month average glucose control.',
        implications: [
            { label: '> 8.0%', value: 'Poor control. Wound healing significantly impaired. Neuropathy risk.' }
        ],
        symptoms: 'Delayed healing.'
    },

    // --- INFLAMMATION ---
    {
        id: 'esr',
        name: 'ESR (Sed Rate)',
        category: 'Inflammation',
        normalRange: '0 - 20 mm/hr',
        criticalValues: 'N/A (Non-specific)',
        significance: 'Chronic inflammation/infection.',
        implications: [
            { label: 'Elevated', value: 'Systemic inflammation (RA, Osteomyelitis). fatigue likely.' }
        ],
        symptoms: 'Malaise.'
    },
    {
        id: 'crp',
        name: 'CRP (C-Reactive Protein)',
        category: 'Inflammation',
        normalRange: '< 1.0 mg/dL',
        criticalValues: '> 10 mg/dL (Significant)',
        significance: 'Acute inflammation.',
        implications: [
            { label: 'Post-Op', value: 'Should peak ~Day 2-3 then fall. Rising > Day 3 = Infection risk?' }
        ],
        symptoms: 'Fever, localized redness.'
    }
];
