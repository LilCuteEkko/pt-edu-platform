import dryNeedlingImg from '../assets/modalities/dry-needling.png';
import estimImg from '../assets/modalities/estim.png';
// import heatImg from '../assets/modalities/heat.png';
// import coldImg from '../assets/modalities/cold.png';

export const modalities = [
    {
        id: 'cryotherapy',
        title: 'Cryotherapy (Cold)',
        category: 'Thermal',
        description: 'Use of cold to induce physiological responses that decrease bleeding and acute inflammation following injury.',
        indications: [
            'Acute Inflammation/ swelling',
            'Acute Pain',
            'Muscle Spasm',
            'Myofascial Pain Syndrome',
            'Post-Surgical swelling/pain'
        ],
        contraindications: [
            'Cold Urticaria (Hives)',
            'Cryoglobulinemia',
            'Raynaud’s Phenomenon',
            'Paroxysmal Cold Hemoglobinuria',
            'Regenerating Peripheral Nerves',
            'Compromised Circulation'
        ],
        mechanism: 'Vasoconstriction, decreased metabolic rate (secondary hypoxic injury prevention), decreased nerve conduction velocity (analgesia), and reduced muscle spindle activity.',
        content: `
      ### Deep Dive
      Cryotherapy is the use of cold modalities for therapeutic purposes. It is most effective in the first 24-48 hours after acute injury.

      #### Physiological Effects
      - Hemodynamic: Vasoconstriction of cutaneous vessels. Cold stimulates free nerve endings -> smooth muscle contraction. *Hunting Response (Lewis)*: Vasodilation may occur if tissue temp < 50°F (<10°C) to prevent tissue damage (cyclic warming/cooling).
      - Metabolic: Decreases tissue metabolism and vasoactive agents (histamine/kinins), reducing inflammation.
      - Neuromuscular:
        - Elevates pain threshold (Analgesia). Skin temp of 56.5°F (13.6°C) is sufficient for local analgesia.
        - Decreases nerve conduction velocity (A-delta fibers affected first).
        - Reduces spasticity by decreasing gamma-motoneuron activity and afferent spindle discharge.
      - Muscle Performance: Short cooling may increase isometric force; long cooling (>10 min) decreases performance.

      #### Application Methods & Parameters
      - Ice Packs: Good for larger areas. Duration: 20-30 min. (Longer for adipose tissue).
      - Ice Massage: For small areas (tendon, bursa, trigger point). Duration: 5-10 min.
        - *Sensory Stages*: Intense Cold -> Burning -> Aching -> Numbness (Analgesia).
      - Cold Compression: Adds hydrostatic pressure to reduce edema.
      - Vapocoolant Spray: "Spray and Stretch". Cools skin via evaporation to reduce motor neuron activity before stretching.

      #### Clinical Pearls
      - Adipose Tissue: Acts as an insulator. Muscle under 1cm of fat takes 10 min to drop 12.5°F; under 3-4cm takes 60 min.
      - Exercise: Avoid vigorous exercise immediately after cooling (stiffness/analgesia risk).
      - Post-Trauma: "PRICES" (Protection, Rest, Ice, Compression, Elevation, Stabilization).
    `
    },
    {
        id: 'thermotherapy',
        title: 'Thermotherapy (Heat)',
        category: 'Thermal',
        description: 'Application of heat to promote relaxation, pain relief, and tissue extensibility.',
        indications: [
            'Decreased ROM / Stiffness',
            'Subacute/Chronic Pain',
            'Muscle Guarding/Spasm',
            'Preparation for Stretching',
            'Dysmenorrhea'
        ],
        contraindications: [
            'Acute Inflammation (first 24-48h)',
            'Recent Hemorrhage',
            'Malignancy',
            'Impaired Sensation',
            'Vascular Disease/Insufficiency',
            'Infection'
        ],
        mechanism: 'Vasodilation, increased metabolic rate, increased collagen extensibility, and pain gating.',
        content: `
      ### Deep Dive
      Thermotherapy aims to raise tissue temperature to 104°F - 113°F (40°C - 45°C) to achieve therapeutic effects.

      #### Physiological Effects
      - Metabolic: Metabolic rate increases 2-3x for every 10°C rise. enhancing healing nutrients/oxygen.
      - Vascular: Vasodilation via axon reflex, chemical mediators (histamine/prostaglandins), and spinal reflexes.
      - Connective Tissue: Heat decreases viscosity and increases elasticity. *Plastic deformation* (permanent elongation) is easier when heat is combined with stretch.
      - Pain/Muscle Spasm:
        - Pain Gating (A-beta fiber stimulation).
        - Reduces muscle spindle firing (inhibits Type II afferents) -> breaks "Pain-Spasm-Pain" cycle.

      #### Application Methods
      - Moist Hot Packs (MHP): Kept at 158°F - 167°F. Require 6-8 layers of toweling. Treatment: 15-20 min. Do not let patient lie on top of pack.
      - Paraffin Wax: Dip & Wrap (most common) or Dip & Re-immerse. Good for distal extremities (hands/feet). Lubricates skin.
      - Fluidotherapy: Dry heat convection. Allows active exercise during heating. High sensory stimulation (desensitization).
      - Electric Heating Pads/Wraps: Continuous low-level heat (up to 8 hours).

      #### Clinical Pearls
      - Wet vs. Dry: Moist heat penetrates slightly deeper than dry heat.
      - Fat Insulation: Individuals with more adipose tissue may risk surface burns as fat insulates deeper tissues, trapping heat in the skin.
      - Fine Motor: Heat improves fine motor tasks (unlike cold).
    `
    },
    {
        id: 'ultrasound',
        title: 'Ultrasound (US)',
        category: 'Thermal',
        description: 'High-frequency acoustic waves used for deep heating and non-thermal tissue healing.',
        indications: [
            'Soft Tissue Shortening (Thermal)',
            'Pain Control',
            'Dermal Ulcers/Wounds',
            'Tendon/Ligament Injuries',
            'Resorption of Calcium Deposits'
        ],
        contraindications: [
            'Pregnancy (Abdomen/Back)',
            'Malignancy',
            'Active Bleeding',
            'Myositis Ossificans',
            'DVT',
            'Pacemaker (Local)',
            'Epiphysis in Children'
        ],
        mechanism: 'Thermal: Conversion of kinetic energy to heat. Non-thermal: Cavitation and Acoustic Streaming.',
        content: `
      ### Deep Dive
      Therapeutic Ultrasound uses sound waves (0.75 - 3.3 MHz) to treat musculoskeletal conditions.

      #### Parameters
      - Frequency:
        - 1 MHz: Deep tissues (up to 5 cm).
        - 3 MHz: Superficial tissues (1-2 cm).
      - Duty Cycle:
        - 100% (Continuous): Thermal effects (Heating).
        - 20% (Pulsed): Non-thermal effects (Healing/Inflammation).
      - Intensity:
        - 1.5 - 2.0 W/cm² for 1 MHz.
        - 0.5 - 1.0 W/cm² for 3 MHz.
      - Duration: Typically 5-10 minutes per area (Area should be 2-3x size of ERA).

      #### Physiological Effects
      - Thermal: Vigorously heats deep collagen-rich tissues (tendons, ligaments, capsules). *Vigorous heating = increase of 7°F (4°C)*.
      - Non-Thermal:
        - Cavitation: Formation and oscillation of gas bubbles.
        - Acoustic Streaming: Movement of fluids along cell membranes, altering permeability and increasing protein synthesis.

      #### Clinical Evidence
      - Strong Evidence: Carpal Tunnel, Calcific Tendinitis, Back Pain.
      - Conflicting/Weak: Wound healing, Soft tissue extensibility without stretch.
      - Danger: Moving too slow/stationary creates "Hot Spots" (Periosteal burns).
    `
    },
    {
        id: 'diathermy',
        title: 'Diathermy (SWD/MWD)',
        category: 'Electromagnetic',
        description: 'Deep heating using electromagnetic waves (Shortwave or Microwave). Heats larger areas than Ultrasound.',
        indications: [
            'Pain Relief (Large areas)',
            'Muscle Spasms',
            'Joint Stiffness (Hip/Knee/Shoulder)',
            'Edema (PEMF/Non-thermal)'
        ],
        contraindications: [
            'Metal Implants/Jewelry',
            'Pacemakers',
            'Pregnancy',
            'Malignancy',
            'Growth Plates'
        ],
        mechanism: 'Friction caused by eddy currents (Inductive) or electric field resistance (Capacitive).',
        content: `
      ### Deep Dive
      Diathermy produces electromagnetic waves (Radio or Microwave frequency) to heat tissues 3-5 cm deep. It heats larger areas than ultrasound.

      #### Types
      - Shortwave Diathermy (SWD): Most common (27.12 MHz).
        - Capacitive (Electric Field): Plates. Heats fat and skin > muscle.
        - Inductive (Magnetic Field): Drums/Coils. Creates eddy currents. Heats muscle and synovial fluid > fat.
      - Pulsed SWD (PSWD): Bursts of energy. Can be non-thermal or thermal depending on average power.
      - Microwave Diathermy (MWD): Uses magnetron. Higher frequency, less depth.

      #### Dosage Guide
      - Dose I: Non-thermal (Acute injuries).
      - Dose II: Mild perception of heat.
      - Dose III: Moderate heat.
      - Dose IV: Vigorous heat (Chronic conditions, stretching).

      #### Clinical Pearls
      - Metal: REMOVE ALL METAL. Electromagnetic fields heat metal rapidly, causing burns!
      - Advantages: Heats deeper than hot packs and larger area than ultrasound.
    `
    },
    {
        id: 'lasers',
        title: 'Lasers & Light Therapy',
        category: 'Electromagnetic',
        description: 'Use of light (Laser, LED) for photobiostimulation to promote tissue repair and reduce pain.',
        indications: [
            'Wound Healing',
            'Chronic Inflammation',
            'Lymphedema',
            'Pain Management (Arthritis)',
            'Carpal Tunnel'
        ],
        contraindications: [
            'Direct Eye Exposure (Retinal damage)',
            'Malignancy',
            'Pregnancy (over abdomen)',
            'Thyroid Gland'
        ],
        mechanism: 'Photobiostimulation: Chromophores (mitochondria) absorb light -> increased ATP production -> enhanced tissue repair.',
        content: `
      ### Deep Dive
      Light Therapy uses Low-Level Laser Therapy (LLLT) or High-Intensity Laser Therapy (HILT).

      #### Physics
      - Monochromatic: Single wavelength (color).
      - Coherent: Waves are in phase (Lasers only).
      - Collimated: Directional beam (Lasers only).

      #### Physiological Effects
      - Mitochondrial Activation: Absorbed by cytochromes -> Increases ATP synthesis.
      - Inflammation: Increases vasodilation (via NO release), reduces PGE2.
      - Pain: Increases beta-endorphins, decreases bradykinin.

      #### Classifications
      - Class 3b: < 500 mW. Used for therapy (LLLT). "Cold Laser". Eye protection required.
      - Class 4: > 500 mW. HILT. Thermal effects possible. Eye protection required.

      #### LEDs vs. Lasers
      - LEDs are non-coherent and not monochromatic. They treat larger superficial areas but with less energy density than lasers.
    `
    },
    {
        id: 'hydrotherapy',
        title: 'Hydrotherapy',
        category: 'Mechanical',
        description: 'Use of water for therapeutic purposes (Whirlpools, Aquatic Pools).',
        indications: [
            'Wound Care (Debridement)',
            'Edema Control (Hydrostatic Pressure)',
            'Unloading Weight-bearing joints',
            'Muscle Weakness'
        ],
        contraindications: [
            'Incontinence',
            'Open Wounds (for pools)',
            'Uncontrolled Seizures',
            'Severe Cardiac/Pulmonary Disease'
        ],
        mechanism: 'Buoyancy, Hydrostatic Pressure, Viscosity, and Thermal effects.',
        content: `
      ### Deep Dive
      Hydrotherapy leverages the physical properties of water for rehab.

      #### Physical Properties
      - Buoyancy (Archimedes\' Principle): Upward force. Unloads joints.
        - Neck depth: 10% weight bearing.
        - Xiphoid depth: 33% weight bearing.
        - ASIS depth: 50% weight bearing.
      - Hydrostatic Pressure (Pascal\'s Law): Pressure increases with depth. Aids venous return and edema reduction.
      - Viscosity: Drag force. Resistance increases with speed of movement.
      - Hydrodynamics: Turbine creates turbulence (whirlpool) for mechanical debridement.

      #### Clinical Applications
      - Whirlpools: Warm (stiffness) or Cold (acute pain). *Note*: PLWS (Pulsed Lavage) has largely replaced whirlpools for wound care due to infection risk.
      - Aquatic Therapy: Gait training, core strengthening, balance.
      - Contraindication Alert: Do not put patients with incontinence or open wounds in a shared pool!
    `
    },
    {
        id: 'traction',
        title: 'Spinal Traction',
        category: 'Mechanical',
        description: 'Application of decompressive forces to the spine to separate vertebrae and relieve nerve root compression.',
        indications: [
            'Disc Herniation/Bulge',
            'Nerve Root Impingement',
            'Joint Hypomobility',
            'Paraspinal Muscle Spasm'
        ],
        contraindications: [
            'Acute Trauma (Whiplash)',
            'Osteoporosis/Osteopenia',
            'Joint Hypermobility/Instability',
            'Pregnancy (Lumbar)',
            'Spinal Fusion (Recent)'
        ],
        mechanism: 'Separates vertebral bodies, widens intervertebral foramen, reduces intradiscal pressure (suction effect on disc).',
        content: `
      ### Deep Dive
      Traction mechanically distracts the spine. Can be Manual or Mechanical.

      #### Cervical Traction
      - Position: Supine (preferred).
      - Angle: 20-30° flexion for lower cervical; 0-5° for upper cervical.
      - Force:
        - Initial: 8-10 lbs.
        - Distraction: 20-30 lbs (or 7% body weight).
        - *Do not exceed 30 lbs generally.*

      #### Lumbar Traction
      - Position: Supine (flexed hip/knee usually preferred) or Prone.
      - Force:
        - Initial: 30-40 lbs.
        - Distraction: 50% of body weight required for separation.
      - *Rebound Effect*: Symptoms may increase after traction stops -> Keep patient supine for a few mins before rising.

      #### Modes
      - Static: Continuous pull. Good for acute disc bulge or muscle stretch.
      - Intermittent: On/Off cycle (e.g., 30s/10s). Good for joint mobilization and comfort.
    `
    },
    {
        id: 'compression',
        title: 'Compression Therapy',
        category: 'Mechanical',
        description: 'Application of external pressure to control edema and improve circulation.',
        indications: [
            'Edema (Venous/Lymphatic)',
            'Venous Stasis Ulcers',
            'DVT Prevention',
            'Residual Limb Shaping'
        ],
        contraindications: [
            'Acute DVT (Risk of embolus)',
            'Acute Pulmonary Edema (CHF)',
            'Acute Infection',
            'Arterial Revascularization'
        ],
        mechanism: 'Increases external hydrostatic pressure to oppose fluid outflow and facilitate venous/lymphatic return.',
        content: `
      ### Deep Dive
      Compression balances the Starling forces at the capillary bed to reduce interstitial fluid.

      #### Types
      - Static: Bandages (Short-stretch vs Long-stretch), Garments (Stockings).
      - Intermittent Pneumatic Compression (IPC): Pump and sleeve.
        - *Edema/DVT/Ulcer*: 30-80 mmHg (Do not exceed diastolic BP).
        - *Lymphedema*: 30-60 mmHg.

      #### Clinical Pearls
      - Short-Stretch Bandages: High working pressure (during muscle pump), Low resting pressure. Safe for lymphedema.
      - Long-Stretch (Ace): High resting pressure. Can be dangerous for arterial compromised patients at rest.
      - Contraindication: NEVER pump an acute DVT -> Pulmonary Embolism risk.
    `
    },
    {
        id: 'estim',
        title: 'Electrical Stimulation (E-STIM)',
        imageUrl: estimImg,
        category: 'Electrical',
        description: 'The use of electrical currents to depolarize nerves for pain control or muscle contraction.',
        indications: [
            'Pain Control (TENS)',
            'Muscle Re-education (NMES)',
            'Edema Reduction',
            'Wound Healing',
            'Drug Delivery (Iontophoresis)'
        ],
        contraindications: [
            'Pacemaker/ICD',
            'Carotid Sinus',
            'Pregnancy (Trunk)',
            'Thrombosis'
        ],
        mechanism: 'Depolarization of peripheral nerves. Gate Control Theory (Sensory) or Opiate Release (Motor).',
        content: `
      ### Deep Dive
      Electrotherapy uses current (flow of electrons) to stimulate nerve fibers.

      #### Key Terms
      - Cathode: Negative pole (attracts + ions). Depolarizes nerve easier.
      - Anode: Positive pole (attracts - ions).
      - Pulse Duration: Width of the pulse. Short (<150µs) for Sensory; Long (>200µs) for Motor.

      #### TENS (Pain Control)
      - Conventional (High Rate):
        - Freq: 80-100 Hz. Width: 100-150 µs.
        - Mech: Gate Control (A-beta fibers block A-delta/C fibers).
        - Duration: As needed (during activity).
      - Acupuncture (Low Rate):
        - Freq: 1-4 Hz. Width: 200+ µs (Motor twitch).
        - Mech: Endogenous Opiate Release (Endorphins).
        - Duration: 20-30 min (Long lasting effect).

      #### NMES (Muscle Strengthening)
      - Goal: Full muscle contraction (tetany).
      - Freq: 35-50 Hz.
      - Duty Cycle: 1:5 ratio (e.g., 10s ON / 50s OFF) recommended to prevent fatigue.
      - Uses: Post-op quads, foot drop (FES).

      #### Iontophoresis
      - Use of DC current to drive medication (Dexamethasone, Lidocaine).
      - *Rule*: "Like repels Like". Put negative drug on negative electrode (Cathode).
    `
    },
    {
        id: 'dry-needling',
        title: 'Dry Needling',
        imageUrl: dryNeedlingImg,
        category: 'Invasive',
        description: 'A skilled intervention that uses a thin filiform needle to penetrate the skin and stimulate underlying myofascial trigger points.',
        indications: [
            'Myofascial Trigger Points',
            'Muscle Spasms',
            'Reduced Range of Motion',
            'Chronic Pain Syndromes'
        ],
        contraindications: [
            'Needle Phobia',
            'Bleeding Disorders',
            'Local Infection',
            'First Trimester Pregnancy (local)'
        ],
        mechanism: 'Mechanical disruption of the dysfunctional motor endplate, eliciting a Local Twitch Response (LTR).',
        content: `
      ### Deep Dive
      Dry needling (DN) targets the dysfunctional motor endplate.

      #### Theoretical Framework
      - Trigger Point Model: Direct treatment to elicit Local Twitch Response (LTR).
      - Radiculopathy Model: Treating spinal segments.

      #### Techniques
      - Pistoning: Fast entry/exit to elicit LTR.
      - Static Insertion: C-fiber inhibition.
      - Electric DN: Intramuscular electrical stimulation.
    `
    },
    {
        id: 'manual-therapy',
        title: 'Manual Therapy',
        category: 'Manual',
        description: 'Skilled hand movements intended to improve tissue extensibility, increase ROM, and modulate pain.',
        indications: [
            'Joint Hypomobility',
            'Soft Tissue Restriction',
            'Pain',
            'Adhesions'
        ],
        contraindications: [
            'Acute Inflammation',
            'Fracture',
            'Advanced Osteoporosis'
        ],
        mechanism: 'Mechanical stimulus to tissues and neurophysiological pain modulation.',
        content: `
      ### Deep Dive
      #### Techniques
      - Soft Tissue Mobilization (STM): Effleurage, Petrissage, Cross-Friction.
      - Myofascial Release (MFR): Sustained low-load pressure.
      - Joint Mobilization: Graded oscillations (Maitland Grades I-IV) to treat pain (I-II) or stiffness (III-IV).
      - Lymphatic Drainage: Light pressure to promote lymph flow.
    `
    },
    {
        id: 'manipulations',
        title: 'Joint Manipulation (HVT)',
        category: 'Manual',
        description: 'High Velocity, Low Amplitude (HVLA) thrust directed at a joint.',
        indications: [
            'Segmental Joint Hypomobility',
            'Acute "Locked" Joint',
            'Neurophysiological Reset'
        ],
        contraindications: [
            'Osteoporosis',
            'Ligamentous Instability',
            'Cancer/Metastasis',
            'Patient Fear'
        ],
        mechanism: 'Gaps joint surfaces, stretches capsule, neurophysiological reset. "Pop" = Tribonucleation.',
        content: `
      ### Deep Dive
      Manipulation is a Grade V mobilization.

      #### The "Pop" (Cavitation)
      - Tribonucleation: Nitrogen gas released from solution due to pressure drop.
      - Refractory Period: ~20 mins for gas to dissolve.

      #### Lumbar Prediction Rule (Flynn)
      1. Symptoms < 16 days.
      2. No symptoms distal to knee.
      3. FABQ work < 19.
      4. Hip Internal Rotation > 35°.
      5. Hypomobility.
    `
    },
    {
        id: 'vibration',
        title: 'Vibration Therapy',
        category: 'Mechanical',
        description: 'Use of mechanical vibration to stimulate muscles and blood flow.',
        indications: [
            'Neuromuscular performance',
            'Warm-up/Priming',
            'Bone Density',
            'Pain modulation'
        ],
        contraindications: [
            'Pregnancy',
            'Kidney Stones',
            'Acute Thrombosis',
            'Fresh Surgical Wounds'
        ],
        mechanism: 'Tonic Vibration Reflex (TVR) - stimulates muscle spindles.',
        content: `
      ### Deep Dive
      Vibration uses specific frequencies to target tissues.

      #### Parameters
      - 20-30 Hz: Relaxation, recovery.
      - 30-50 Hz: Muscle activation, strength.

      #### Mechanisms
      - TVR: Rapid stretching stimulates Ia afferents causing reflex contraction.
      - Bone Density: Simulates gravity loading (Wolff's Law).
    `
    }
];
