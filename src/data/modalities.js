import dryNeedlingImg from '../assets/modalities/dry-needling.png';
import estimImg from '../assets/modalities/estim.png';
// import heatImg from '../assets/modalities/heat.png';
// import coldImg from '../assets/modalities/cold.png';
// ... other imports
// ... other imports

export const modalities = [
    {
        id: 'dry-needling',
        title: 'Dry Needling',
        imageUrl: dryNeedlingImg,
        category: 'Invasive',
        description: 'A skilled intervention that uses a thin filiform needle to penetrate the skin and stimulate underlying myofascial trigger points, muscular, and connective tissues.',
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
        mechanism: 'Mechanical disruption of the dysfunctional motor endplate, eliciting a Local Twitch Response (LTR) which restores muscle length and blood flow.',
        content: `
      ### Deep Dive
      Dry needling (DN) is a skilled intervention that uses a thin filiform needle to penetrate the skin and stimulate underlying myofascial trigger points, muscular, and connective tissues.

      #### Theoretical Framework
      - **Radiculopathy Model:** Treating the spinal segments innervating the painful muscle.
      - **Trigger Point Model:** Direct treatment of the taut band to elicit a Local Twitch Response (LTR).
      
      #### Key Techniques
      - **Pistoning:** Fast entry and exit to elicit LTR. Resets the muscle spindle.
      - **Static Insertion:** Leaving the needle in place for 10-20 minutes. Targets C-fiber inhibition for pain modulation.
      - **Tent & Turn:** Rotating the needle to wind connective tissue (mechanotransduction).
      - **Electric Stimulation (Internal):** Clamping electrodes to needles for deeper, more focused muscle activation than surface TENS.
      
      #### Safety & Precautions
      - **Lung Fields:** Caution when needling around the thorax (Pneumothorax risk).
      - **Neurovascular Bundles:** Avoiding major nerves and arteries (e.g., Femoral triangle).
      - **Clean Needle Technique:** Sterile field, gloves, single-use needles.
    `
    },
    {
        id: 'estim',
        title: 'Electrical Stimulation (E-STIM)',
        imageUrl: estimImg,
        category: 'Electrical',
        description: 'The use of electrical currents to generate action potentials in nerves or muscles.',
        indications: [
            'Pain Control (TENS)',
            'Muscle Re-education (NMES)',
            'Edema Reduction',
            'Wound Healing'
        ],
        contraindications: [
            'Pacemakers/ICDs',
            'Over Carotid Sinus',
            'Pregnancy (Low Back/Abdomen)',
            'Active Cancer Region'
        ],
        mechanism: 'Gate Control Theory (TENS) or direct depolarization of motor nerves (NMES) to induce contraction.',
        content: `
      ### Chattanooga Model 2863 Parameter Guide

      #### 1. Quick Reference
      - Pain Relief (TENS): 80-100 Hz (Sensory) or 1-4 Hz (Motor/Endorphin). Width 100-150µs. Continuous.
      - Muscle Re-ed (NMES): 35-50 Hz. Width 200-300µs. Ratio 10:20. Ramp 1-2s.
      - Edema (HVPC): 10-120 Hz. Width 50-100µs. Continuous.
      - Spasm Reduction: 50-80 Hz (Burst). Width 200-300µs. Ratio 10:20.

      ### Clinical Application Matrix

      #### Pain Modulation (Sensory TENS)
      - Goal: Closes pain gate / Increase endorphins
      - Waveform: Symmetric Biphasic or TENS mode
      - Frequency: 80–100 Hz (Conventional) or 1–4 Hz (Acupuncture)
      - Pulse Width: 100–150 µsec
      - Intensity: Strong sensory, no motor contraction
      - Time: 15–30 min

      #### Muscle Strengthening (NMES/Russian)
      - Goal: Increase motor recruitment & strength
      - Waveform: VMS or Russian
      - Frequency: 35–50 Hz (for tetany)
      - Pulse Width: 200–300 µsec
      - On:Off: 10s ON / 20s OFF
      - Ramp: 2 sec
      - Intensity: Visible motor contraction
      - Time: 15–20 min

      #### Edema Control (HVPC)
      - Goal: Fluid mobilization & tissue repair
      - Waveform: High-Volt Pulsed Current (HVPC)
      - Frequency: 10–120 Hz
      - Pulse Width: 50–100 µsec
      - Polarity: Negative (-) early / Positive (+) later
      - Intensity: Sensory to mild motor
      - Time: 20–30 min

      ### Parameter Definitions
      - Waveform: Shape of current. Biphasic for comfort, High Volt for edema.
      - Frequency (Hz): Pulses per sec. Low (1-10) = Twitch. High (80-120) = Sensory.
      - Pulse Width (µs): Duration. Short (50-150) = Sensory. Long (200+) = Motor.
      - Duty Cycle: On/Off ratio. Critical for NMES to prevent fatigue (e.g. 1:2 or 1:3 ratio).
      - Ramp: Smoothing the onset of current. 1-2s typical for comfort.

      ### Documentation Example
      "ESTIM via Chattanooga 2863 (NMES mode) applied to R quad @ 35 Hz, 200 µs, 10:20 duty, 2 s ramp, 20 min. Visible contraction achieved, skin integrity verified pre/q5 min/post, tolerated well."
    `
    },
    {
        id: 'heat',
        title: 'Thermotherapy (Heat)',
        category: 'Thermal',
        description: 'Application of heat to the body for pain relief and health.',
        indications: [
            'Chronic Pain',
            'Muscle Stiffness',
            'Preparation for Stretching',
            'Increased Blood Flow'
        ],
        contraindications: [
            'Acute Inflammation (first 48-72h)',
            'Impaired Sensation',
            'Malignancy',
            'Thrombophlebitis'
        ],
        mechanism: 'Vasodilation, increased nerve conduction velocity, increased metabolic rate, and increased collagen extensibility.',
        content: `
      ### Deep Dive
      Heat improves tissue extensibility. It is best used BEFORE active therapy or stretching.
      
      #### Methods
      - Moist Hot Packs: Hydrocollator packs at ~70°C. Require 6-8 layers of toweling.
      - Paraffin Wax: Dip-wrap method. Excellent for distal extremities (hands/feet).
      - Ultrasound (Thermal): Deep heat (up to 5cm). 100% duty cycle.
    `
    },
    {
        id: 'cold',
        title: 'Cryotherapy (Cold)',
        category: 'Thermal',
        description: 'Application of cold to reduce inflammation and pain.',
        indications: [
            'Acute Inflammation',
            'Acute Pain',
            'Post-Surgical Swelling',
            'Muscle Spasm'
        ],
        contraindications: [
            'Raynaud’s Phenomenon',
            'Cold Urticaria',
            'Cryoglobulinemia',
            'Regenerating Peripheral Nerves'
        ],
        mechanism: 'Vasoconstriction, decreased metabolic rate, decreased nerve conduction velocity (analgesia).',
        content: `
      ### Deep Dive
      The CBAN sequence sensation is typical: Cold -> Burning -> Aching -> Numbness.
      
      #### Methods
      - Ice Packs: Crushed ice conforms best.
      - Ice Massage: Direct application for small areas (tendons). 5-10 mins.
      - Vapocoolant Sprays: "Spray and Stretch" for myofascial trigger points.
    `
    },
    {
        id: 'manual-therapy',
        title: 'Manual Therapy',
        category: 'Manual',
        description: 'Skilled hand movements intended to improve tissue extensibility; increase range of motion; induce relaxation; mobilize or manipulate soft tissue and joints.',
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
        mechanism: 'Mechanical stimulus to tissues and neurophysiological modulation of pain (Gate Control, descending inhibition).',
        content: `
      ### 1. Soft Tissue Mobilization (STM)
      Techniques to improve tissue extensibility, reduce pain, and mobilize fascia.
      
      #### Key Techniques
      - Effleurage: Long, sweeping, gliding strokes. Used for warm-up, fluid movement, and "scanning" tissue quality.
      - Petrissage: Kneading, lifting, rolling, and squeezing. Targets deeper muscle belly to increase circulation.
      - Cross-Friction Massage (CFM): Perpendicular rubbing across fibers. Used for tendinopathies to break adhesions and stimulate collagen alignment.
      - Myofascial Release (MFR): Sustained, low-load pressure to release fascial restrictions using shear or distraction forces.
      - Trigger Point Release: Sustained ischemic compression on hyperirritable spots ("knots") for 30-90s to release tension.

      ### 2. Lymphedema Management (MLD)
      Manual Lymphatic Drainage is a specialized, light-touch technique to promote lymph flow.
      
      #### Principles of MLD
      - Pressure: Very light (30-40 mmHg). Just enough to stretch the skin, not compress muscle.
      - Sequence: "Clear Proximal to Distal". Open trunk/neck quadrants first to create a suction/siphon effect for distal fluid.
      - Strokes: Stationary circles, pump technique, scoop technique. Rhythmic and slow.
      
      #### Complete Decongestive Therapy (CDT)
      The Gold Standard. MLD is just component #1.
      1. MLD: Move fluid.
      2. Compression: Short-stretch bandages (low resting pressure, high working pressure).
      3. Skin Care: Prevent infection (cellulitis risk is high).
      4. Decongestive Exercise: Muscle pump aids flow.
      
      Contraindications: Acute infection (Cellulitis), Acute DVT, Untreated Cardiac Failure (volume overload risk).

      ### 3. Stretching Techniques
      Methods to increase muscle length and Range of Motion (ROM).

      #### Types
      - Static Stretching: Holding a position at end-range for 30s+. Best usage: Post-exercise to increase tissue length.
      - Dynamic Stretching: Controlled movement through ROM. Best usage: Pre-exercise warm-up/priming.
      - Ballistic: Bouncing at end-range. Usage: Specific sports only; high risk of injury for general pop.

      #### PNF (Proprioceptive Neuromuscular Facilitation)
      Uses neurophysiological reflexes to gain ROM.
      - Hold-Relax: Passive stretch (10s) -> Isometric contraction (6s) -> Relax -> Passive stretch further (30s).
      - Contract-Relax: Passive stretch -> Isotonic contraction (rotating limb) -> Relax -> Stretch.
      - Mechanism: Autogenic Inhibition (Golgi Tendon Organ fires -> inhibits muscle).
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
            'Patient Fear/Refusal'
        ],
        mechanism: 'Gaps the joint surfaces, stretches the capsule, and causes a neurophysiological "reset" of mechanoreceptors. Often accompanied by a "pop" (cavitation).',
        content: `
      ### Deep Dive
      Manipulation is a specialized skill requiring advanced training to perform safely and effectively.
      
      #### The "Pop" (Cavitation)
      - **Mechanism:** Tribonucleation. Sudden spacing of the joint creates a drop in pressure, causing nitrogen gas to come out of solution from the synovial fluid.
      - **Refractory Period:** The gas takes ~20 minutes to dissolve back into solution, meaning you cannot "re-pop" the same joint immediately.
      
      #### Clinical Prediction Rule (CPR) for Lumbar Manipulation
      Patients most likely to benefit from L-Spine manip (Flynn et al.):
      1. Duration of symptoms < 16 days.
      2. No symptoms distal to the knee.
      3. FABQ work subscale score < 19.
      4. At least one hip with > 35° internal rotation.
      5. Hypomobility of at least one lumbar segment.
      
      **Success Rate:** 4/5 present = 95% probability of successful outcome.
      
      #### Grading Scale (Maitland)
      - **Grade I:** Small amplitude, beginning of range (Pain).
      - **Grade II:** Large amplitude, within range (Pain).
      - **Grade III:** Large amplitude, up to limit (Stiffness).
      - **Grade IV:** Small amplitude, at limit (Stiffness).
      - **Grade V (HVT):** Small amplitude, high velocity thrust beyond the physiological limit but within anatomical barrier.
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
            'Bone Density (Whole Body Vibration)',
            'Pain modulation'
        ],
        contraindications: [
            'Pregnancy',
            'Kidney Stones',
            'Acute Thrombosis',
            'Fresh Surgical Wounds'
        ],
        mechanism: 'Tonic Vibration Reflex (TVR) - stimulates muscle spindles causing reflex contraction.',
        content: `
      ### Deep Dive
      Vibration therapy has gained popularity with optimal frequencies for different goals.
      
      #### Parameters
      - **Frequency (Hz):**
        - **20-30 Hz:** Relaxation, recovery, blood flow.
        - **30-50 Hz:** Muscle activation, potentiation, strength.
      - **Amplitude (mm):** Higher amplitude = higher G-force load on tissues.
      
      #### Mechanisms
      1. **Tonic Vibration Reflex (TVR):** Rapid muscle stretching causes reflex contraction (Ia afferent loop).
      2. **Pain Gating:** Large diameter A-beta fiber stimulation overrides pain signals.
      3. **Bone Density:** WBV (Whole Body Vibration) creates vertical loading forces, simulating gravity to stimulate osteogenesis (Wolff's Law).
    `
    }
];
