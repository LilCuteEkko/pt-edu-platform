import { Building2, Stethoscope, Home, Briefcase, GraduationCap, Users } from 'lucide-react';

export const ptSettings = [
    {
        id: 'snf',
        title: 'Skilled Nursing Facility (SNF)',
        description: 'Long-term care facilities providing 24-hour nursing and rehabilitative services.',
        icon: 'Building2',
        overview: 'Therapists in SNFs work with elderly patients who require extended rehabilitation after a hospital stay but are not yet ready to return home.',
        population: 'Geriatric, Post-surgical (hip/knee replacements), CVA (Stroke), Deconditioning.',
        keyFeatures: [
            'Length of Stay: Weeks to months.',
            'Productivity pressures can be high (RUG levels/PDPM).',
            'Focus on functional mobility and ADLs.',
            'Interdisciplinary team approach (OT, SLP, Nursing).'
        ],
        pros: ['Long-term patient relationships', 'Autonomy in treatment planning', 'Good compensation'],
        cons: ['High productivity demands', 'Documentation burden', 'Emotionally taxing (end-of-life care)']
    },
    {
        id: 'acute',
        title: 'Acute Care (Hospital)',
        description: 'Inpatient hospital setting focusing on medical stability and discharge planning.',
        icon: 'Stethoscope',
        overview: 'Fast-paced environment where PTs assess safety for discharge. Treatments are short and focused on early mobilization.',
        population: 'Post-op, Trauma, ICU, Cardiac, Neurological emergencies.',
        keyFeatures: [
            'Length of Stay: Days (3-5 days avg).',
            'Primary Goal: Discharge Planning (Home vs. Rehab vs. SNF).',
            'Heavy emphasis on chart review and lab values.',
            'Early mobilization to prevent deconditioning.'
        ],
        pros: ['Fast-paced and dynamic', 'Medical complexity', 'Team collaboration with MDs/RNs'],
        cons: ['Physically demanding (transfers)', 'Short patient interaction', 'Weekends/Holiday shifts often required']
    },
    {
        id: 'ipr',
        title: 'Inpatient Rehab (IPR)',
        description: 'Intensive rehabilitation facility for patients who can tolerate 3 hours of therapy per day.',
        icon: 'Users',
        overview: 'A bridge between acute care and home. Patients must be medically stable but require intensive therapy.',
        population: 'CVA, TBI, Spinal Cord Injury, Major Multi-trauma.',
        keyFeatures: [
            'Requirement: Patient MUST tolerate 3 hours of therapy/day (PT/OT/SLP combined).',
            'Length of Stay: 1-3 weeks.',
            'Focus on maximizing independence and return to community.',
            'Specialized equipment availability (Body Weight Support, Robotics).'
        ],
        pros: ['High-level neurological rehab', 'Visible patient progress', 'Specialized skill development'],
        cons: ['Physically demanding', 'Strict documentation restrictions (FIM/Care Tool scores)', 'High energy required']
    },
    {
        id: 'home-health',
        title: 'Home Health',
        description: 'Therapy services provided in the patient\'s home.',
        icon: 'Home',
        overview: 'For patients who are "homebound" and cannot access outpatient clinics easily.',
        population: 'Geriatric, Post-op total joints, Fall risk, CHF/COPD management.',
        keyFeatures: [
            'Environment: Patient\'s actual living environment.',
            'Focus: Safety, transfers, home med management.',
            'Autonomy: Solo clinician in the field.',
            'Documentation: Often done at home/in car (OASIS).'
        ],
        pros: ['Flexibility/Autonomy', 'Higher pay', 'Real-world functional training'],
        cons: ['Driving/Wear on car', 'Unpredictable home environments', 'Isolated (less mentorship)', 'OASIS documentation is extensive']
    },
    {
        id: 'travel',
        title: 'Travel Physical Therapy',
        description: 'Short-term contracts (typically 13 weeks) filling staffing needs across the country.',
        icon: 'Briefcase',
        overview: 'Therapists travel to different cities/states to work in various settings.',
        population: 'Varies by setting (Outpatient, SNF, Home Health, etc.).',
        keyFeatures: [
            'Contract Duration: 13 weeks standard.',
            'Pay: Higher than permanent staff (tax-free stipends).',
            'Licensure: Must manage licenses in multiple states (Compact License helps).',
            'Adaptability: Minimal orientation, hit the ground running.'
        ],
        pros: ['Adventure/Travel', 'High income potential', 'Avoid office politics', 'Variety of experience'],
        cons: ['Lack of stability', 'Constant moving/finding housing', 'No paid time off (usually)', 'Loneliness']
    },
    {
        id: 'outpatient',
        title: 'Outpatient Orthopedics',
        description: 'Clinic-based setting for musculoskeletal injuries.',
        icon: 'GraduationCap',
        overview: 'The most common setting. Patients travel to the clinic for diagnosis-specific treatment.',
        population: 'Sports injuries, Chronic pain, Post-op ortho, Work comp.',
        keyFeatures: [
            'Schedule: Fixed appointments (e.g., every 30-60 mins).',
            'Modalities + Manual Therapy + Exercise.',
            'High volume of patients.',
            'Marketing/Building caseload often required.'
        ],
        pros: ['Musculoskeletal expertise', 'Clean environment', 'Regular hours (mostly)', 'Sports medicine opportunities'],
        cons: ['Double-booking/High volume', 'Burnout risk', 'Documentation can pile up', 'Salary ceiling lower than Home Health/SNF']
    }
];
