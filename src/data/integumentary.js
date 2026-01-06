export const integumentaryData = {
    overview: {
        title: "The Integumentary System",
        description: "The skin is the largest organ of the body, serving as a critical barrier and sensory interface.",
        functions: [
            { title: "Protection", description: "Barrier against pathogens, UV radiation, and dehydration." },
            { title: "Sensation", description: "Nerve endings for touch, pain, pressure, and temperature." },
            { title: "Thermoregulation", description: "Sweat glands and blood vessel dilation/constriction regulate body heat." },
            { title: "Metabolism", description: "Vitamin D synthesis via UV light exposure." },
            { title: "Excretion", description: "Elimination of waste products through sweat." }
        ],
        layers: [
            {
                name: "Epidermis",
                description: "Outermost, avascular layer made of keratinocytes.",
                relevance: "Protects against infection. Regenerates every ~28 days."
            },
            {
                name: "Dermis",
                description: "Middle, vascular layer with collagen, elastin, nerve endings, and glands.",
                relevance: "Essential for wound healing. Houses blood supply and structural proteins."
            },
            {
                name: "Hypodermis",
                description: "Subcutaneous tissue made of fat and connective tissue.",
                relevance: "Provides cushioning, insulation, and deep blood supply. Deep wounds involving this layer are severe."
            }
        ]
    },
    conditions: [
        {
            id: 'pressure-injury',
            name: "Pressure Injuries (Decubitus Ulcers)",
            causes: "Prolonged pressure, friction, shear, moisture.",
            commonSites: "Sacrum, heels, ischial tuberosities, kidneys, occiput.",
            staging: [
                { stage: "Stage 1", features: "Non-blanchable erythema, intact skin.", ptRole: "Relieve pressure, skin checks, education." },
                { stage: "Stage 2", features: "Partial-thickness loss (dermis exposed), red/pink bed.", ptRole: "Moist dressings, repositioning." },
                { stage: "Stage 3", features: "Full-thickness loss, visible adipose (fat).", ptRole: "Debridement referral, pressure relief, advanced dressings." },
                { stage: "Stage 4", features: "Exposed muscle, tendon, or bone.", ptRole: "Surgical consult likely. Avoid shear/friction." },
                { stage: "Unstageable", features: "Eschar/slough obscures wound bed.", ptRole: "Requires debridement to stage." }
            ]
        },
        {
            id: 'dfu',
            name: "Diabetic Foot Ulcers (DFU)",
            causes: "Neuropathy (loss of sensation) + Ischemia (poor flow).",
            wagnerGrade: [
                { grade: "0", desc: "No open lesion, pre-ulcerative." },
                { grade: "1", desc: "Superficial ulcer, full-thickness." },
                { grade: "2", desc: "Deep ulcer to tendon/bone." },
                { grade: "3", desc: "Abscess or Osteomyelitis." },
                { grade: "4", desc: "Gangrene of forefoot." },
                { grade: "5", desc: "Gangrene of entire foot." }
            ],
            ptRole: "Offloading (Total Contact Casting), Gait training, Foot inspections."
        },
        {
            id: 'venous-arterial',
            name: "Venous vs. Arterial Ulcers",
            causes: "Venous Insufficiency (Valve failure) vs Arterial Insufficiency (PAD/Atherosclerosis).",
            comparison: [
                { feature: "Location", venous: "Medial Malleolus, 'Gater' area", arterial: "Toes, Dorsum of foot, Lateral Malleolus" },
                { feature: "Appearance", venous: "Shallow, irregular borders, wet/weeping", arterial: "Deep, punched-out, dry, pale/necrotic" },
                { feature: "Pain", venous: "Mild-Moderate, achy. Improved w/ elevation", arterial: "Severe, Intermittent Claudication. Worse w/ elevation" },
                { feature: "Exudate", venous: "Heavy", arterial: "Minimal to None" },
                { feature: "Skin", venous: "Hemosiderin staining (brown), warm, thick", arterial: "Pale, shiny, hairless, cool, thin" },
                { feature: "Pulses", venous: "Normal", arterial: "Decreased or Absent" },
                { feature: "Edema", venous: "Present (often pitting)", arterial: "Minimal" }
            ],
            ptRole: "Venous: Compression (Unna boot), Elevation. Arterial: NO Compression, Dangle legs, Walking program (to tolerance)."
        },
        {
            id: 'burns',
            name: "Burns",
            classification: [
                { degree: "Superficial (1st)", layer: "Epidermis", features: "Red, dry, no blisters (Sunburn). Heals 3-7 days." },
                { degree: "Superficial Partial (2nd)", layer: "Epidermis + Upper Dermis", features: "Blisters, wet, pink, very painful. Heals 7-21 days." },
                { degree: "Deep Partial (2nd)", layer: "Epidermis + Deep Dermis", features: "Red/White, broken blisters, less painful (nerve damage). Risk of scarring." },
                { degree: "Full Thickness (3rd)", layer: "Through Dermis", features: "Leathery, dry, eschar, insensate. Skin graft required." },
                { degree: "Subdermal (4th)", layer: "Involves Muscle/Bone", features: "Charred, mummified. Amputation/Flap often needed." }
            ],
            ruleOfNines: [
                { region: "Head & Neck", adult: "9%" },
                { region: "Anterior Trunk", adult: "18%" },
                { region: "Posterior Trunk", adult: "18%" },
                { region: "Arms", adult: "9% each (4.5% front/back)" },
                { region: "Legs", adult: "18% each (9% front/back)" },
                { region: "Perineum", adult: "1%" }
            ],
            ptRole: "Positioning (Anti-contracture), Splinting, Early Ambulation, Scar Management (Massage/Compression)."
        }
    ],
    woundCare: {
        dressings: [
            { type: "Hydrocolloids", use: "Stage 2-3, Autolytic debridement.", note: "Occlusive. Don't use on infected wounds." },
            { type: "Hydrogels", use: "Dry wounds, Burns.", note: "Adds moisture. Needs secondary dressing." },
            { type: "Foams", use: "Moderate-Heavy exudate.", note: "Absorbent & cushioning." },
            { type: "Alginates", use: "Heavy exudate, Packing deep wounds.", note: "Derived from seaweed. Highly absorbent." },
            { type: "Films", use: "Stage 1, friction reduction.", note: "Allows inspection. No absorption." },
            { type: "Silver/Iodine", use: "Infected wounds.", note: "Antimicrobial. Short term use." }
        ],
        debridement: [
            { method: "Autolytic", desc: "Body's enzymes digests slough.", correct: "Hydrocolloids/Hydrogels." },
            { method: "Enzymatic", desc: "Chemical breakdown (Santyl).", correct: "Use on necrotic tissue only." },
            { method: "Sharp", desc: "Scalpel/Scissors removal.", correct: "Quickest method. PT scope varies by state." },
            { method: "Mechanical", desc: "Wet-to-dry (outdated) or pulsed lavage.", correct: "Can damage healthy tissue." }
        ],
        topicals: [
            { name: "Silver Sulfadiazine", use: "Burns (Broad spectrum)." },
            { name: "Mupirocin", use: "MRSA infections." },
            { name: "Santyl", use: "Enzymatic debridement." }
        ]
    },
    documentation: {
        soapTemplate: {
            s: "Patient pain level (0-10), dressing condition upon arrival.",
            o: "L x W x D (cm). Bed % (Gran/Slough/Eschar). Exudate (Amt/Type). Odor. Periwound.",
            a: "Status (Improving/Stable/Declining). Assessment of dressing efficacy.",
            p: "New dressing choice. Positioning schedule. Education provided."
        },
        infectionSigns: [
            "Erythema (spreading redness)",
            "Warmth (calor)",
            "Edema (swelling)",
            "Purulent/Malodorous drainage",
            "Fever/Systemic signs"
        ]
    }
};
