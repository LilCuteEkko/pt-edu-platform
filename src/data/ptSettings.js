import { Building2, Stethoscope, Home, Briefcase, GraduationCap, Users } from 'lucide-react';

export const ptSettings = [
    {
        id: 'snf',
        title: 'Skilled Nursing Facility (SNF)',
        description: 'The "Trenches" of Rehabilitation. Medically complex tracking between hospital and home.',
        icon: 'Building2',
        overview: 'Skilled Nursing Facilities (SNFs) are where the rubber meets the road. It is arguably the most medically complex environment outside of the acute care hospital. You are the gatekeeper between a hospital bed and home, managing patients who are not yet safe to return to their prior environment.',
        population: 'Geriatric (85+), Post-CVA, TKA/THA, Pneumonia, CHF Exacerbation, Stage 3 CKD, Mild Dementia.',
        keyFeatures: [
            'Length of Stay: Weeks to months (20-100 days).',
            'High Medical Complexity: Must manage labs (INR, Troponins) and vitals.',
            'Discharge Planning is the primary pressure point.',
            'Productivity pressures are high (85-90%).'
        ],
        pros: [
            'Autonomy: You are the musculoskeletal expert on-site.',
            'Complexity: You will use every ounce of your physiology knowledge.',
            'Relationships: You become family to long-term residents.',
            'Pay: Generally higher than Outpatient/Acute to offset burnout.'
        ],
        cons: [
            'Productivity: 85-90% expectation is a daily grind.',
            'Documentation Burden: Point of Service (POS) is intense and audited.',
            'PDPM Pressures: Concurrent and Group therapy to save costs.',
            'Equipment Scarcity: Often fighting for shared resources.'
        ],
        detailedSections: [
            {
                title: 'The SNF Environment: Two Worlds in One',
                items: [
                    {
                        subtitle: 'Sub-Acute Rehab (Medicare Part A)',
                        text: 'These are patients fresh out of the hospital (post-CVA, TKA/THA, pneumonia, CHF). They are here for short-term, intensive rehab (often 5-7 days/week) with the goal of returning home.'
                    },
                    {
                        subtitle: 'Long-Term Care (Medicare Part B)',
                        text: 'Residents who make the facility their home. Your role is "skilled preservation of function" or addressing new declines, such as falls or UTIs that cause weakness.'
                    }
                ]
            },
            {
                title: 'Core Responsibilities',
                items: [
                    {
                        subtitle: '1. The "Detective" Evaluation',
                        text: 'You are evaluating complex patients (e.g., 85yo with CHF, COPD, and dementia who broke a hip). You must establish Medical Stability (labs/vitals) and establish Prior Level of Function (PLOF) to justify the need for skilled care.'
                    },
                    {
                        subtitle: '2. Functional Maintenance Programs (FMP)',
                        text: 'You design restorative programs for nursing staff (e.g., walking to bathroom). Documenting staff training is crucial to prove the "skill" was transferred.'
                    },
                    {
                        subtitle: '3. Discharge Planning (The Hardest Part)',
                        text: 'You are the primary decision-maker on safety. Balancing family wishes ("Mom wants to go home") with safety realities ("Mom needs 24hr care") requires mediation skills.'
                    }
                ]
            },
            {
                title: 'Clinical Specialties & Skills',
                items: [
                    {
                        subtitle: 'Wound Care & Positioning',
                        text: 'Expertise in pressure relief is mandatory. You must know how to bridge sacral wounds and position heels to prevent breakdown.'
                    },
                    {
                        subtitle: 'Dementia Care',
                        text: 'Techniques like Spaced Retrieval and Errorless Learning are essential. "Invitations" work better than "commands".'
                    },
                    {
                        subtitle: 'Cardiopulmonary',
                        text: 'Managing energy conservation for COPD/Heart Failure. Monitoring O2 sats and adjusting liter flow (with orders) is daily routine.'
                    }
                ]
            }
        ],
        insiderTips: {
            title: "Dave's Insider Info",
            tips: [
                {
                    title: 'PDPM (Patient Driven Payment Model)',
                    text: 'Gone are the days of volume-based "RUGs". Reimbursement is now value-based, driven by clinical complexity and outcomes. Accurate coding of "Section GG" (functional scores) on admission is critical for the facility to get paid.'
                },
                {
                    title: 'The "Skill" Argument',
                    text: 'Simply walking a patient is not skilled (a nurse can do that). Your note must say WHY you were there. Bad: "Walked 50ft". Good: "Gait training 50ft with tactile cues to pelvis for weight shift, addressing antalgic pattern".'
                },
                {
                    title: 'Safe Patient Handling',
                    text: 'You will save or break your back in a SNF. Master the mechanical lifts (Sit-to-Stand vs Hoyer) and know exactly which patients are appropriate for each.'
                },
                {
                    title: 'The "Med B" Cut',
                    text: 'When a long-term resident falls, you pick them up under Part B. Creativity is tested here—doing functional therapeutic exercise (sit-to-stands, bed mobility) with frail, low-tolerance patients.'
                }
            ]
        }
    },
    {
        id: 'acute',
        title: 'Acute Care (Hospital)',
        description: 'The "Triage and Move" Setting. Medical stability and discharge planning at rapid pace.',
        icon: 'Stethoscope',
        overview: 'You are working in a hospital. The pace is rapid. Patients are admitted, treated, and discharged sometimes within 24-48 hours. Your primary goal isn\'t "rehab" in the traditional sense—it is Discharge Planning. The hospital wants the bed back. Your job is to determine: Is this person safe to go home? If not, where do they go?',
        population: 'Post-Op (Ortho/General), Stroke (CVA), Trauma, ICU (Vent/ECMO), Cardiac (MI/CHF).',
        keyFeatures: [
            'Length of Stay: Short (24-48 hours to ~5 days).',
            'Primary Focus: Discharge Safety & Disposition.',
            'Line Management: IVs, Foleys, Chest Tubes, Wound Vacs.',
            'Early Mobilization: Walking vented patients to prevent atrophy.'
        ],
        pros: [
            'Medical Knowledge: You see rare pathology and acute presentations daily.',
            'Teamwork: Real-time collaboration with MDs and RNs.',
            'Variety: Treating a 20yo athlete and a 90yo stroke patient in the same hour.',
            'Work-Life Balance: When you clock out, you are done.'
        ],
        cons: [
            'Physical Toll: "Dead weight" transfers and max assist.',
            'Bodily Fluids: Blood, vomit, C-Diff are common.',
            'Pressure: Admin pushes for discharge before you might feel ready.',
            'Emotional Toll: Seeing people on the worst day of their lives.'
        ],
        detailedSections: [
            {
                title: 'Core Responsibilities',
                items: [
                    {
                        subtitle: '1. The "Medical" Evaluation',
                        text: 'You are often the first to mobilize a patient after catastrophic events. Chart Review is life—scanning for DVT, orthostatic vitals, fractures, and hemoglobin. You must master "spaghetti management" (lines/tubes) without pulling anything out.'
                    },
                    {
                        subtitle: '2. Discharge Recommendations (The Golden Ticket)',
                        text: 'You hold the keys to the next step. Home (Independent)? Home Health (needs check-in)? SNF (too weak for home)? Or Inpatient Rehab (tolerate 3hrs/day)?'
                    },
                    {
                        subtitle: '3. Early Mobilization (ICU)',
                        text: 'A specialty within a specialty. Walking patients on ventilators/ECMO to fight "ICU Acquired Weakness". Every day in bed is 2-5% muscle mass lost.'
                    }
                ]
            },
        ],
        insiderTips: {
            title: "Dave's Insider Info",
            tips: [
                {
                    title: 'Lab Logic',
                    text: 'In Acute, labs dictate your day. Hgb < 8? Check symptoms (possible transfusion). INR > 4-5? High bleed risk (no aggressive stretching). Troponins trending up? Active heart damage (do not touch). Trending down? Usually safe to mobilize.'
                },
                {
                    title: 'The Discharge "Algorithm"',
                    text: 'Know the rules. The "3-Hour Rule": To qualify for Inpatient Rehab (IRF), a patient MUST tolerate 3 hours of therapy/day. If they fatigue after 10 mins sitting edge-of-bed, insurance will deny IRF (they go to SNF).'
                },
                {
                    title: '"Swoop and Scoop" Efficiency',
                    text: 'You have 15-20 mins. Walk in, assess cognition, check vitals, sit them up. Dizzy? Lay down, done. Good? Stand and walk. Sit down. Recommendations made. Move on.'
                },
                {
                    title: 'Contraindications & Precautions',
                    text: 'You are the safety police. Sternal (Open Heart): No pushing/pulling >10lbs. Spinal (BLT): No Bending, Lifting, Twisting. Weight Bearing: NWB, TTWB, WBAT. Messing this up can ruin a surgery.'
                }
            ]
        }
    },
    {
        id: 'ipr',
        title: 'Inpatient Rehab (IPR)',
        description: '"Rehab Bootcamp". The Navy SEALs of recovery. Intensive restoration.',
        icon: 'Users',
        overview: 'Welcome to "Rehab Bootcamp." Inpatient Rehabilitation Facilities (IRF) are where you go to work, not rest. If Acute is survival and SNF is maintenance, IRF is about Intensive Restoration. We take patients with life-altering events (Stroke, SCI, TBI, Amputations) and push them through 3 hours of therapy a day to get them back to life.',
        population: 'CVA, TBI, Spinal Cord Injury (SCI), Amputations, Parkinson’s, Guillain-Barré.',
        keyFeatures: [
            'The Golden Rule: 3 Hours of Therapy/Day (PT/OT/SLP).',
            'Window: rapid gains in 10-21 days.',
            'Environment: High energy, equipment-heavy (BWSTT, Exoskeletons).',
            'Team: Weekly conferences with MD, PT, OT, SLP, Nursing is mandatory.'
        ],
        pros: [
            'Resources: Best equipment (Unweighting systems, Bioness, expansive gyms).',
            'Team Atmosphere: Camaraderie is unmatched; often co-treating.',
            'Visible Progress: You see miracles. People walking who were told they never would.',
            'Respect: Physiatrists (Rehab MDs) truly listen to therapy inputs.'
        ],
        cons: [
            'Physical Demand: The most demanding setting. "Max Assist" all day.',
            'Documentation Volume: Documenting every minute of the 3-hour requirement.',
            'Emotional Weight: Counseling people whose lives have been shattered.',
            'The Clock: Unforgiving schedule. You must make up missed minutes.'
        ],
        detailedSections: [
            {
                title: 'Core Responsibilities',
                items: [
                    {
                        subtitle: '1. The "3-Hour Rule"',
                        text: 'Patients must tolerate 3 hours of skilled therapy/day, 5 days/week. You have a rigid schedule ("PT at 9:00, OT at 10:30"). Creativity is required to fill 90 mins of PT for a patient who can barely sit up.'
                    },
                    {
                        subtitle: '2. Neurological Expertise',
                        text: 'Home of Neuro PT. You master the nervous system. You get the high-tech toys: Body-Weight Supported Treadmill Training (BWSTT), Exoskeletons (ReWalk), and FES bikes.'
                    },
                    {
                        subtitle: '3. Weekly Team Conference',
                        text: 'The Hot Seat. The entire team sits down weekly. You report exact progress and advocate for more time or discharge. You must be concise and data-driven.'
                    },
                    {
                        subtitle: '4. Family Training',
                        text: 'You treat the family too. "Car Transfer" training in the parking lot is a rite of passage. If the spouse can\'t safely transfer the patient, they can\'t go home.'
                    }
                ]
            }
        ],
        insiderTips: {
            title: "Dave's Insider Info",
            tips: [
                {
                    title: 'The "60% Rule"',
                    text: 'CMS requires 60% of patients have one of 13 diagnoses (Stroke, SCI, Amputation, Hip Fx, etc.) to maintain facility status. Admissions are scrutinized heavily against this list.'
                },
                {
                    title: 'Section GG Accuracy',
                    text: 'These scores drive payment groups (Case Mix). Scoring "Supervision" when they are "Contact Guard" loses the facility money and skews your effectiveness data.'
                },
                {
                    title: 'Spasticity Management',
                    text: 'You are the first to notice spasticity. You work with the MD for Botox/Baclofen and perform Serial Casting to save range of motion.'
                },
                {
                    title: 'Discharge is "Do or Die"',
                    text: 'The goal is Home. If they aren\'t progressing, insurance cuts them off. You constantly ask: "What is the ONE thing keeping them from home?" (usually stairs/toilet) and you hammer that task.'
                }
            ]
        }
    },
    {
        id: 'home-health',
        title: 'Home Health',
        description: 'The "Wild West". Contextual Rehab where textbook meets reality.',
        icon: 'Home',
        overview: 'Dave the PT here. Buckle up. You are leaving the sterile, controlled environment of the clinic and heading into the "Wild West." In the hospital, the floor is flat and the bed goes up and down. In Home Health, you are dealing with hoarding, throw rugs, energetic dogs, and dark hallways. This is Contextual Rehab—you aren\'t simulating the task; you are DOING the task in their actual life.',
        population: 'Geriatric (Homebound), Post-Op Total Joints, CHF/COPD Management, Fall Risk, Dementia.',
        keyFeatures: [
            'Environment: "Their Turf". Intimate and unpredictable.',
            'Mission: Safety and Independence (Keep them out of the hospital).',
            'Clinician Mode: You are the "eyes and ears" for the MD.',
            'Schedule: Flexible autonomy (start at 7am or 10am).'
        ],
        pros: [
            'Autonomy: You are your own boss on the road.',
            'Pay: Usually higher to compensate for travel/"hassle".',
            'Real Impact: Teaching someone to shower in their own bathroom.',
            'One-on-One: No double booking. 60 mins dedicated to one patient.'
        ],
        cons: [
            'The OASIS Burden: Start of Care documentation is massive.',
            'Driving: Traffic, weather, and parking are part of the job.',
            'Isolation: No coworkers in the hallway to bounce ideas off.',
            'Environment: Cigarette smoke, cat litter, sanitation issues.'
        ],
        detailedSections: [
            {
                title: 'Core Responsibilities',
                items: [
                    {
                        subtitle: '1. The OASIS (The Beast)',
                        text: 'You live by the OASIS (Outcome and Assessment Information Set). It determines payment and quality. You aren\'t just checking ROM; you are grading ability to groom, dress, and answer the phone. It is tedious but paints the total picture.'
                    },
                    {
                        subtitle: '2. Medication Reconciliation ("The Detective")',
                        text: 'You ask "Show me your bottles." You will find expired meds from 1998 mixed with new heart pills, or double-dosing generic/brand names. You are the first line of defense against med errors.'
                    },
                    {
                        subtitle: '3. Home Safety & Adaptation',
                        text: 'You are an architectural consultant. Identifying trip hazards (cords, rugs) and ordering DME (commode, tub bench, grab bars). This makes the difference between aging in place or a nursing home.'
                    },
                    {
                        subtitle: '4. Vital Signs Monitoring',
                        text: 'You are often the only clinician seeing them. You check BP, pulse ox, temp, and edema. If BP is 200/110, YOU make the call to the MD or ER.'
                    }
                ]
            }
        ],
        insiderTips: {
            title: "Dave's Insider Info",
            tips: [
                {
                    title: '"Homebound" Status (The Golden Rule)',
                    text: 'To qualify for Medicare Part A, leaving home must require "taxing and considerable effort." Trap: If you document "went to lunch with family," Medicare denies payment. You must prove confinement.'
                },
                {
                    title: 'The "Bag Technique"',
                    text: 'Infection control ritual. Clean side vs Dirty side. Barrier down before bag touches table. Hand wash before opening. Never put dirty equipment back in without cleaning. Drilled into you.'
                },
                {
                    title: 'Creativity is King (MacGyver PT)',
                    text: 'No gym? Use soup cans for weights. Kitchen counter for balance. Basement stairs for step training. Hallway for walk tests. You have to improvise.'
                },
                {
                    title: 'Case Management Hub',
                    text: 'You are the quarterback. Coordinating with OT for shower chairs, SLP for swallowing, and the Nurse for wound care. You run the show.'
                }
            ]
        }
    },
    {
        id: 'travel',
        title: 'Travel Therapy',
        description: 'The "Mercenary". 13-week contracts, high pay, and maximum adaptability.',
        icon: 'Briefcase',
        overview: 'Pack your bags. Travel Therapy isn\'t a clinical setting; it\'s a lifestyle. You are the "Mercenary" of the rehab world. You parachute into a facility that is drowning, fix the staffing crisis, make great money, and vanish to the next adventure 13 weeks later. This is the realm of Adaptability.',
        population: 'Varies by contract (SNF, Acute, Outpatient, Schools, Home Health).',
        keyFeatures: [
            'Lifestyle: The Nomad. New city every 3 months.',
            'Mission: Plug the staffing hole instantly.',
            'Expectation: Zero orientation. Be good, fast.',
            'Money: Tax-free stipends (housing/meals).'
        ],
        pros: [
            'The Money: Tax-free stipends often double perm pay.',
            'Adventure: Ski in Colorado, surf in California. Live on vacation.',
            'Freedom: Want 2 months off to backpack Europe? Just don\'t sign.',
            'Politics-Free: You don\'t care about the 5-year strategic plan.'
        ],
        cons: [
            'Instability: Contracts get cancelled on Day 1.',
            'Loneliness: Hard to build deep roots in 13 weeks.',
            'No Mentorship: Dangerous for new grads. You are on an island.',
            'Housing Stress: Finding short-term rentals that allow pets is a job.'
        ],
        detailedSections: [
            {
                title: 'Core Responsibilities',
                items: [
                    {
                        subtitle: '1. Instant Competence',
                        text: 'Perm jobs get 4 weeks orientation. Travelers get 1 day. You don\'t ask "How do I treat a stroke?"; you ask "Where is the bathroom and what is the login?"'
                    },
                    {
                        subtitle: '2. EMR Polyglot',
                        text: 'You master every system. Epic, Casamba, Rehab Optima, Paper. You have to learn the software instantly so you don\'t fall behind.'
                    },
                    {
                        subtitle: '3. "The Floater"',
                        text: 'You get the weekends, holidays, and difficult patients. The perm staff has seniority; you are there to take the load off. Thick skin is required.'
                    },
                    {
                        subtitle: '4. Logistics Manager',
                        text: 'You are your own HR. Managing state licenses, TB tests, physicals, drug screens, and credentialing for the next job while working the current one.'
                    }
                ]
            }
        ],
        insiderTips: {
            title: "Dave's Insider Info",
            tips: [
                {
                    title: 'The "Tax Home" Rule',
                    text: 'The most misunderstood rule. To legally take tax-free stipends, you MUST duplicate expenses (pay rent at home AND at travel location). Living in a van without a tax home makes you an "Itinerant Worker" (fully taxable).'
                },
                {
                    title: 'The PT Compact',
                    text: 'A game changer. If your home state is a Compact state, you can get privileges to work in ~30 other states instantly without full licensure applications.'
                },
                {
                    title: 'Recruiter Relations',
                    text: 'They are salespeople. They make money on the spread. Always ask for the "Bill Rate" (shows you know the game) and negotiate.'
                },
                {
                    title: 'The "Bait and Switch" Protection',
                    text: 'Sign for "Outpatient" but get floated to "SNF"? Protect yourself with a "Guaranteed Hours" clause and specific setting stipulations in your contract.'
                }
            ]
        }
    },
    {
        id: 'outpatient',
        title: 'Outpatient Orthopedics',
        description: 'The "Clinic". Optimization, Restoration, and the hustle of Sports Medicine.',
        icon: 'GraduationCap',
        overview: 'Outpatient Orthopedics is what the general public thinks of when they hear "Physical Therapy." This is the realm of sports injuries, chronic back pain, post-op shoulders, and weekend warriors. Unlike Acute Care (survival) or SNF (function), Outpatient is about Optimization. You are taking someone who is hurting and getting them back to 100%.',
        population: 'Sports Injuries, Chronic Pain (LBP/Neck), Post-Op Ortho (ACL, Rotator Cuff), Weekend Warriors.',
        keyFeatures: [
            'Schedule: Rhythm-based (every 30-45 mins).',
            'Focus: Biomechanics, Manual Therapy, Exercise Dosage.',
            'Vibe: Energetic, social, gym-like setting.',
            'Mission: Half mechanic, half coach, half therapist.'
        ],
        pros: [
            'Outcomes: Watching patients return to sport/life is unmatched satisfaction.',
            'Relationships: Building rapport over weeks/months of treatment.',
            'Active Setting: You are on your feet, demonstrating, and moving.',
            'Mastery: You become a wizard at anatomy and kinesiology.'
        ],
        cons: [
            'The "Mill" Mentality: Double/Triple booking in corporate clinics.',
            'Documentation Lag: Notes often bleed into "Pajama Time".',
            'Cancellations: Productivity tanks if patients no-show.',
            'Repetition: treating 15 "Low Back Pain" cases in a week can be monotonous.'
        ],
        detailedSections: [
            {
                title: 'Core Responsibilities',
                items: [
                    {
                        subtitle: '1. The Biomechanical Evaluation',
                        text: 'Anatomy knowledge shines here. Special Tests (Lachman’s, Neer’s) rule pathology in/out. Precision goniometry matters—surgeons want to know if that knee is 115° or 120°.'
                    },
                    {
                        subtitle: '2. Manual Therapy ("Laying on of Hands")',
                        text: 'Patients expect this. Joint Mobs (Maitland/Kaltenborn), Soft Tissue Work, Dry Needling. The goal is to modulate pain to create a window for exercise.'
                    },
                    {
                        subtitle: '3. Exercise Prescription (Dosage Scientist)',
                        text: 'You aren\'t just counting to 10. You manage Progressive Overload (Isometric → Concentric → Eccentric → Plyometric) and constant form correction ("Knees out", "Chest up").'
                    }
                ]
            }
        ],
        insiderTips: {
            title: "Dave's Insider Info",
            tips: [
                {
                    title: 'The "Buy-In" (Sales)',
                    text: 'Patients can quit anytime. You must sell the plan. Connect boring rehab to their passion. Bad: "Do clamshells." Good: "These clamshells stabilize your hip so your knee doesn\'t cave when you run that 5K."'
                },
                {
                    title: 'Pain Science (The Brain Game)',
                    text: 'Hurt ≠ Harm. You will see agony with transparent MRIs. You must educate patients that chronic pain is often a brain output (Central Sensitization), not just tissue damage.'
                },
                {
                    title: 'Direct Access Red Flags',
                    text: 'In many states, you are the primary screener. You must catch Red Flags. "Back pain" could be a kidney infection or AAA. If it doesn\'t fit the pattern, refer out immediately.'
                },
                {
                    title: 'Flow Management (The Dance)',
                    text: 'If double-booked, you are a conductor. Manual on Pt A while Pt B warms up. Set Pt B up with exercise, check Pt A\'s form. Multitasking is a survival skill.'
                }
            ]
        }
    }
];
