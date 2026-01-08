export const organs = [
    {
        id: 'brain',
        name: 'Brain',
        system: 'Nervous',
        function: 'Central control of body functions, processing sensory info, cognition.',
        location: 'Cranial cavity.',
        bloodSupply: 'Internal Carotid Arteries & Vertebral Arteries (Circle of Willis).',
        innervation: 'Cranial Nerves (I-XII).',
        clinicalNotes: 'Stroke (CVA) is the primary pathology. TBI affects specific lobes based on impact.',
        details: {
            microAnatomy: [
                { term: 'Neurons', def: 'Signal transmitting cells (Axons, Dendrites, Soma).' },
                { term: 'Glia', def: 'Support cells (Astrocytes, Oligodendrocytes, Microglia).' },
                { term: 'Blood-Brain Barrier', def: 'Selective filter preventing toxin entry.' }
            ],
            physiology: {
                title: 'Action Potential',
                steps: [
                    'Resting Potential: -70mV maintained by Na+/K+ pump.',
                    'Depolarization: Na+ channels open, influx causes spike to +30mV.',
                    'Repolarization: K+ channels open, efflux restores negative charge.',
                    'Synapse: Neurotransmitters released at terminal button to next neuron.',
                    'Integration: Summation of EPSPs and IPSPs determines firing.'
                ]
            },
            pathologies: [
                { name: 'Ischemic Stroke', desc: 'Clot blocks blood flow (MCA most common).' },
                { name: 'Hemorrhagic Stroke', desc: 'Bleeding into brain tissue (HTN, Aneurysm).' },
                { name: 'Parkinson\'s Disease', desc: 'Loss of Dopamine neurons in Substantia Nigra.' }
            ]
        }
    },
    {
        id: 'heart',
        name: 'Heart',
        system: 'Cardiovascular',
        function: 'Pumps oxygenated blood to the body and deoxygenated blood to the lungs.',
        location: 'Mediastinum of the thoracic cavity, between the lungs.',
        bloodSupply: 'Coronary Arteries (Right/Left)',
        innervation: 'Vagus Nerve (Parasympathetic), Sympathetic Chain (Sympathetic)',
        clinicalNotes: 'Myocardial Infarction occurs when coronary flow is blocked. Heart Failure is the inability to pump effectively.',
        details: {
            microAnatomy: [
                { term: 'Cardiomyocytes', def: 'Striated muscle cells connected by intercalated discs.' },
                { term: 'Gap Junctions', def: 'Allow rapid electrical propagation for synchronized contraction (syncytium).' },
                { term: 'Desmosomes', def: 'Prevent cell separation during contraction.' }
            ],
            physiology: {
                title: 'The Cardiac Cycle',
                steps: [
                    'Atrial Systole: Atria contract, pushing remaining blood into ventricles.',
                    'Isovolumetric Contraction: Ventricles contract, valves close (S1 sound), pressure rises.',
                    'Ventricular Ejection: Semilunar valves open, blood ejected to Aorta/Pulmonary Artery.',
                    'Isovolumetric Relaxation: Ventricles relax, valves close (S2 sound).',
                    'Passive Filling: AV valves open, ventricles fill with blood.'
                ]
            },
            pathologies: [
                { name: 'Myocardial Infarction', desc: 'Ischemic necrosis of heart muscle due to coronary occlusion.' },
                { name: 'Atrial Fibrillation', desc: 'Disorganized atrial electrical activity causing irregular rhythm.' },
                { name: 'Congestive Heart Failure', desc: 'Pump failure leading to fluid backup (Lung/Periphery).' }
            ]
        }
    },
    {
        id: 'lungs',
        name: 'Lungs',
        system: 'Respiratory',
        function: 'Gas exchange (O2 uptake, CO2 elimination).',
        location: 'Pleural cavities of the thorax.',
        bloodSupply: 'Pulmonary Arteries (Function), Bronchial Arteries (Nutrient)',
        innervation: 'Pulmonary Plexus',
        clinicalNotes: 'Pneumonia is infection of alveoli. COPD includes Emphysema and Chronic Bronchitis.',
        details: {
            microAnatomy: [
                { term: 'Alveoli', def: 'Tiny air sacs where gas exchange occurs.' },
                { term: 'Type I Pneumocytes', def: 'Thin cells forming the structure for gas exchange.' },
                { term: 'Type II Pneumocytes', def: 'Secrete SURFACTANT to reduce surface tension.' }
            ],
            physiology: {
                title: 'Respiration Mechanism',
                steps: [
                    'Inhalation: Diaphragm contracts/descends, thoracic volume increases.',
                    'Pressure Drop: Intrapulmonary pressure becomes negative relative to atmosphere.',
                    'Air Inflow: Air rushes in to equalize pressure.',
                    'Gas Exchange: O2 diffuses into capillaries, CO2 out to alveoli.',
                    'Exhalation: Passive recoil of lungs/chest wall pushes air out.'
                ]
            },
            pathologies: [
                { name: 'COPD', desc: 'Obstructive airflow limitation (Emphysema + Chronic Bronchitis).' },
                { name: 'Pneumonia', desc: 'Infection causing fluid/pus to fill alveoli.' },
                { name: 'Pneumothorax', desc: 'Air in pleural space causing lung collapse.' }
            ]
        }
    },
    {
        id: 'liver',
        name: 'Liver',
        system: 'Digestive',
        function: 'Metabolism, detoxification, bile production, protein synthesis.',
        location: 'Right Upper Quadrant (RUQ) of abdomen.',
        bloodSupply: 'Hepatic Artery (25%), Hepatic Portal Vein (75%)',
        innervation: 'Hepatic Plexus',
        clinicalNotes: 'Cirrhosis is scarring due to chronic damage (alcohol, hepatitis). Referred pain often to the Right Shoulder.',
        details: {
            microAnatomy: [
                { term: 'Hepatocytes', def: 'Main functional cells (metabolism, bile production).' },
                { term: 'Kupffer Cells', def: 'Macrophages destroying bacteria/old RBCs.' },
                { term: 'Hepatic Triad', def: 'Portal vein, Hepatic artery, Bile duct at lobule corners.' }
            ],
            physiology: {
                title: 'Bile Pathway',
                steps: [
                    'Production: Hepatocytes secrete bile.',
                    'Canaliculi: Bile flows into tiny channels.',
                    'Ducts: Merges into Hepatic Ducts -> Common Hepatic Duct.',
                    'Storage: Diverted to Gallbladder via Cystic Duct (if sphincter closed).',
                    'Release: CCK triggers Gallbladder contraction -> Common Bile Duct -> Duodenum.'
                ]
            },
            pathologies: [
                { name: 'Cirrhosis', desc: 'Fibrosis replacing healthy tissue, causing portal hypertension.' },
                { name: 'Hepatitis', desc: 'Inflammation of liver (Viral A/B/C, Alcohol, Autoimmune).' },
                { name: 'Ascites', desc: 'Fluid accumulation in abdomen due to liver failure/low albumin.' }
            ]
        }
    },
    {
        id: 'gallbladder',
        name: 'Gallbladder',
        system: 'Digestive',
        function: 'Stores and concentrates bile produced by the liver.',
        location: 'Inferior surface of the liver (RUQ).',
        bloodSupply: 'Cystic Artery.',
        innervation: 'Celiac Plexus.',
        clinicalNotes: 'Cholecystitis (inflammation) often due to gallstones (Cholelithiasis). Referred pain to Right Scapula/Shoulder.',
        details: {
            microAnatomy: [
                { term: 'Mucosa', def: 'Simple columnar epithelium with rugae for expansion.' },
                { term: 'Muscularis', def: 'Smooth muscle layer allowing contraction.' },
                { term: 'No Submucosa', def: 'Unique feature compared to other GI organs.' }
            ],
            physiology: {
                title: 'Bile Release',
                steps: [
                    'Storage: Liver produces bile continuously; stored in GB between meals.',
                    'Concentration: GB absorbs water/ions, making bile 10x stronger.',
                    'Stimulation: Fatty food enters Duodenum -> CCK released.',
                    'Contraction: GB contracts, Sphincter of Oddi relaxes.',
                    'Ejection: Bile enters Cystic Duct -> CBD -> Duodenum to emulsify fats.'
                ]
            },
            pathologies: [
                { name: 'Cholecystitis', desc: 'Inflammation usually from stone blocking cystic duct. +Murphy\'s Sign.' },
                { name: 'Cholelithiasis', desc: 'Formation of gallstones (Cholesterol or Pigment).' },
                { name: 'Biliary Dyskinesia', desc: 'Functional motility disorder (low ejection fraction).' }
            ]
        }
    },
    {
        id: 'spleen',
        name: 'Spleen',
        system: 'Lymphatic/Cardiovascular',
        function: 'Filters blood, recycles old RBCs, stores platelets/WBCs.',
        location: 'Left Upper Quadrant (LUQ), protected by ribs 9-11.',
        bloodSupply: 'Splenic Artery (branch of Celiac Trunk).',
        innervation: 'Celiac Plexus.',
        clinicalNotes: 'Splenomegaly (enlargement) risks rupture (Kehr\'s Sign: Left Shoulder Pain). Mononucleosis is a common cause.',
        details: {
            microAnatomy: [
                { term: 'Red Pulp', def: 'Filters blood, destroys old RBCs (mechanical filtration).' },
                { term: 'White Pulp', def: 'Lymphoid tissue (T/B cells) for immune response.' },
                { term: 'Trabeculae', def: 'Connective tissue beams providing structure.' }
            ],
            physiology: {
                title: 'Blood Filtration',
                steps: [
                    'Entry: Blood enters via Splenic Artery -> Trabecular Arteries.',
                    'Immune Check: Passes through White Pulp (PALS) for antigen scanning.',
                    'Quality Control: Enters Red Pulp; Macrophages remove old/rigid RBCs.',
                    'Storage: Platelets and Monocytes stored for emergency release.',
                    'Exit: Clean blood leaves via Splenic Vein -> Portal Vein.'
                ]
            },
            pathologies: [
                { name: 'Splenic Rupture', desc: 'Medical emergency (usually blunt trauma/MVA).' },
                { name: 'Splenomegaly', desc: 'Enlargement from infection (Mono), liver disease, or cancer.' },
                { name: 'Asplenia', desc: 'Absence/Loss leads to high risk of encapsulated bacterial infections.' }
            ]
        }
    },
    {
        id: 'kidneys',
        name: 'Kidneys',
        system: 'Urinary',
        function: 'Filtration of blood, regulation of BP/electrolytes, RBC production (EPO).',
        location: 'Retroperitoneal space, T12-L3 levels.',
        bloodSupply: 'Renal Arteries',
        innervation: 'Renal Plexus',
        clinicalNotes: 'Renal failure leads to electrolyte accumulation. Kidney stones (nephrolithiasis) cause severe flank pain.',
        details: {
            microAnatomy: [
                { term: 'Nephron', def: 'Functional unit (Glomerulus + Tubules).' },
                { term: 'Glomerulus', def: 'High-pressure capillary bed for filtration.' },
                { term: 'Podocytes', def: 'Cells wrapping capillaries, forming filtration slits.' }
            ],
            physiology: {
                title: 'Urine Formation',
                steps: [
                    'Filtration: Blood pressure forces plasma into Bowman\'s Capsule.',
                    'Reabsorption: 99% of water/nutrients reclaimed in PCT/Loop/DCT.',
                    'Secretion: Wastes/Drugs actively pumped into tubules.',
                    'Concentration: Loop of Henle creates gradient; ADH controls water loss.',
                    'Excretion: Urine flows to Collecting Duct -> Calyces -> Ureter.'
                ]
            },
            pathologies: [
                { name: 'Chronic Kidney Disease (CKD)', desc: 'Gradual loss of function (Diabetes/HTN common causes).' },
                { name: 'Nephrolithiasis', desc: 'Kidney stones blocking urine flow (Colicky pain).' },
                { name: 'Pyelonephritis', desc: 'Kidney infection (High fever, flank pain, CVA tenderness).' }
            ]
        }
    },
    {
        id: 'stomach',
        name: 'Stomach',
        system: 'Digestive',
        function: 'Mechanical and chemical breakdown of food (Acid/Pepsin).',
        location: 'Left Upper Quadrant (LUQ) of abdomen.',
        bloodSupply: 'Celiac Trunk branches',
        innervation: 'Vagus Nerve',
        clinicalNotes: 'GERD is reflux of acid into esophagus. Peptic ulcers are erosions of the lining.',
        details: {
            microAnatomy: [
                { term: 'Parietal Cells', def: 'Secrete HCl and Intrinsic Factor (B12 absorption).' },
                { term: 'Chief Cells', def: 'Secrete Pepsinogen (breaks down proteins).' },
                { term: 'Rugae', def: 'Internal folds allowing expansion.' }
            ],
            physiology: {
                title: 'Digestion Phase',
                steps: [
                    'Cephalic Phase: Sight/smell of food triggers Vagus nerve -> Acid secretion.',
                    'Gastric Phase: Food enters, stretches wall -> More gastrin/acid.',
                    'Mixing: 3 muscle layers (oblique/circular/longitudinal) churn food into Chyme.',
                    'Emptying: Pyloric sphincter controls release into Duodenum.'
                ]
            },
            pathologies: [
                { name: 'GERD', desc: 'LES incompetence allowing acid reflux (Heartburn).' },
                { name: 'Peptic Ulcer Disease', desc: 'Erosion of lining (H. Pylori or NSAIDs).' },
                { name: 'Gastroparesis', desc: 'Delayed emptying (common in Diabetes).' }
            ]
        }
    },
    {
        id: 'pancreas',
        name: 'Pancreas',
        system: 'Endocrine/Digestive',
        function: 'Exocrine: Digestive enzymes. Endocrine: Insulin and Glucagon.',
        location: 'Retroperitoneal, posterior to stomach.',
        bloodSupply: 'Splenic Artery, Pancreaticoduodenal Arteries',
        innervation: 'Celiac and Superior Mesenteric Plexuses',
        clinicalNotes: 'Pancreatitis is severe inflammation. Diabetes Mellitus involves insulin deficiency/resistance.',
        details: {
            microAnatomy: [
                { term: 'Acini', def: 'Exocrine clusters secreting digestive enzymes.' },
                { term: 'Islets of Langerhans', def: 'Endocrine clusters (Alpha/Beta cells).' },
                { term: 'Beta Cells', def: 'Secrete Insulin (lowers blood sugar).' }
            ],
            physiology: {
                title: 'Glucose Regulation',
                steps: [
                    'High Blood Sugar: Beta cells release Insulin.',
                    'Insulin Effect: Cells take up glucose; Liver stores Glycogen.',
                    'Low Blood Sugar: Alpha cells release Glucagon.',
                    'Glucagon Effect: Liver breaks down Glycogen -> Glucose.',
                    'Homeostasis: Maintains physiological glucose range.'
                ]
            },
            pathologies: [
                { name: 'Type 1 Diabetes', desc: 'Autoimmune destruction of Beta cells (No insulin).' },
                { name: 'Type 2 Diabetes', desc: 'Insulin resistance + relative deficiency.' },
                { name: 'Pancreatitis', desc: 'Autodigestion by enzymes (Gallstones/Alcohol).' }
            ]
        }
    },
    {
        id: 'small_intestine',
        name: 'Small Intestine',
        system: 'Digestive',
        function: 'Primary site for digestion and nutrient absorption.',
        location: 'Abdominal cavity (central/lower).',
        bloodSupply: 'Superior Mesenteric Artery.',
        innervation: 'Superior Mesenteric Plexus.',
        clinicalNotes: 'Crohn\'s Disease often affects the Ileum. Obstruction can be due to adhesions or hernias.',
        details: {
            microAnatomy: [
                { term: 'Villi', def: 'Finger-like projections increasing surface area.' },
                { term: 'Microvilli', def: 'Brush border on epithelial cells.' },
                { term: 'Peyer\'s Patches', def: 'Lymphoid tissue in Ileum for immunity.' }
            ],
            physiology: {
                title: 'Nutrient Absorption',
                steps: [
                    'Duodenum: Mixing with bile/enzymes. Fe/Ca absorption.',
                    'Jejunum: Major absorption of sugars, amino acids, fatty acids.',
                    'Ileum: Absorption of Vitamin B12 and Bile Salts.',
                    'Motility: Segmentation (mixing) and Peristalsis (propulsion).',
                    'Ileocecal Valve: Prevents backflow from Colon.'
                ]
            },
            pathologies: [
                { name: 'Crohn\'s Disease', desc: 'Transmural inflammation (Skip lesions, autoimmune).' },
                { name: 'Celiac Disease', desc: 'Gluten intolerance leads to villous atrophy.' },
                { name: 'SBO', desc: 'Small Bowel Obstruction (vomiting, distension, no gas pass).' }
            ]
        }
    },
    {
        id: 'large_intestine',
        name: 'Large Intestine',
        system: 'Digestive',
        function: 'Water absorption, vitamin K synthesis, waste storage/elimination.',
        location: 'Periphery of abdominal cavity.',
        bloodSupply: 'Superior & Inferior Mesenteric Arteries.',
        innervation: 'Mesenteric Plexuses + Pelvic Splanchnic Nerves.',
        clinicalNotes: 'Diverticulitis (LLQ pain) and Appendicitis (RLQ pain) are common emergencies.',
        details: {
            microAnatomy: [
                { term: 'Tenial Coli', def: 'Longitudinal muscle bands creating haustra.' },
                { term: 'Goblet Cells', def: 'Abundant mucus secretion for lubrication.' },
                { term: 'Microbiome', def: 'Trillions of bacteria essential for health.' }
            ],
            physiology: {
                title: 'Waste Processing',
                steps: [
                    'Water Reclaim: Absorbs remaining 10% of water (solidifying stool).',
                    'Fermentation: Bacteria break down fiber -> Gas + Vit K/B12.',
                    'Mass Movements: Strong peristaltic waves (3-4x/day).',
                    'Defecation Reflex: Rectal stretch triggers internal sphincter relaxation.',
                    'Voluntary Control: External sphincter allows conscious hold.'
                ]
            },
            pathologies: [
                { name: 'Appendicitis', desc: 'Inflammation of appendix (McBurney\'s Point tenderness).' },
                { name: 'Diverticulitis', desc: 'Infection of pouches in sigmoid colon (LLQ pain).' },
                { name: 'Ulcerative Colitis', desc: 'Mucosal inflammation starting at rectum.' }
            ]
        }
    },
    {
        id: 'bladder',
        name: 'Bladder',
        system: 'Urinary',
        function: 'Temporary storage reservoir for urine.',
        location: 'Pelvic cavity, posterior to pubic symphysis.',
        bloodSupply: 'Vesical Arteries (from Internal Iliac).',
        innervation: 'Hypogastric (Symp), Pelvic (Para), Pudendal (Somatic).',
        clinicalNotes: 'UTIs are common (especially females). Stress Incontinence relates to pelvic floor weakness.',
        details: {
            microAnatomy: [
                { term: 'Transitional Epithelium', def: 'Urothelium that stretches (umbrella cells).' },
                { term: 'Detrusor Muscle', def: 'Smooth muscle layer of the bladder wall.' },
                { term: 'Trigone', def: 'Smooth triangular area at base (sensitive to stretch).' }
            ],
            physiology: {
                title: 'Micturition Reflex',
                steps: [
                    'Filling: Sympathetic dominance relaxes Detrusor, contracts Internal Sphincter.',
                    'Threshold: ~300-400ml stretch triggers sensory signals to S2-S4.',
                    'Reflex: Parasympathetic fires -> Detrusor contracts.',
                    'Internal Sphincter: Relaxes reflexively.',
                    'External Sphincter: Voluntary relaxation allows voiding.'
                ]
            },
            pathologies: [
                { name: 'Cystitis (UTI)', desc: 'Bladder inflammation (Urgency, Frequency, Dysuria).' },
                { name: 'Stress Incontinence', desc: 'Leakage with intra-abdominal pressure (laugh/sneeze).' },
                { name: 'Bladder Cancer', desc: 'Painless hematuria is the hallmark sign.' }
            ]
        }
    },
    {
        id: 'uterus',
        name: 'Uterus (Female)',
        system: 'Reproductive',
        function: 'Gestation and menstruation.',
        location: 'Pelvic cavity, between bladder and rectum.',
        bloodSupply: 'Uterine Arteries.',
        innervation: 'Uterovaginal Plexus.',
        clinicalNotes: 'Endometriosis causes cyclic pain. Fibroids are common benign tumors.',
        details: {
            microAnatomy: [
                { term: 'Endometrium', def: 'Inner lining, sloughs off during menses.' },
                { term: 'Myometrium', def: 'Thick smooth muscle layer.' },
                { term: 'Perimetrium', def: 'Outer serous layer.' }
            ],
            physiology: {
                title: 'Menstrual Cycle',
                steps: [
                    'Proliferative: Estrogen rebuilds endometrium.',
                    'Secretory: Progesterone prepares for potential implantation.',
                    'Menses: Drop in hormones causes shedding if no pregnancy.',
                    'Myometrial Activity: Contractions during labor (Oxytocin) or menses.'
                ]
            },
            pathologies: [
                { name: 'Endometriosis', desc: 'Ectopic endometrial tissue causing pain/adhesions.' },
                { name: 'Uterine Fibroids', desc: 'Benign smooth muscle tumors (Leiomyomas).' },
                { name: 'Prolapse', desc: 'Descent of uterus due to pelvic floor weakness.' }
            ]
        }
    },
    {
        id: 'prostate',
        name: 'Prostate (Male)',
        system: 'Reproductive',
        function: 'Secretes seminal fluid component (alkaline).',
        location: 'Inferior to bladder, surrounding urethra.',
        bloodSupply: 'Inferior Vesical Artery.',
        innervation: 'Inferior Hypogastric Plexus.',
        clinicalNotes: 'BPH is universal in aging males, causing urinary retention. Prostate cancer screening via PSA/DRE.',
        details: {
            microAnatomy: [
                { term: 'Glandular Tissue', def: 'Produces fluid.' },
                { term: 'Stromal Tissue', def: 'Smooth muscle helping expel fluid.' },
                { term: 'Zones', def: 'Peripheral (Cancer site), Transition (BPH site).' }
            ],
            physiology: {
                title: 'Ejaculation',
                steps: [
                    'Emission: Sympathetic nerves contract prostate/vesicles -> fluid mixes.',
                    'Closure: Internal urethral sphincter closes to prevent retrograde flow.',
                    'Expulsion: Somatic nerves contract pelvic, perineal muscles.',
                    'Secretion: Adds enzymes (PSA) and alkalinity to sperm.'
                ]
            },
            pathologies: [
                { name: 'BPH', desc: 'Benign Prostatic Hyperplasia (Urinary frequency/hesitancy).' },
                { name: 'Prostatitis', desc: 'Infection/Inflammation (Pelvic pain, dysuria).' },
                { name: 'Prostate Cancer', desc: 'Slow growing malignancy (often asymptomatic early).' }
            ]
        }
    },
    // Neck Viscera
    {
        id: 'thyroid',
        name: 'Thyroid Gland',
        system: 'Endocrine',
        function: 'Metabolism regulation (T3/T4) and Calcium balance (Calcitonin).',
        location: 'Anterior neck, C5-T1 vertebrae level.',
        bloodSupply: 'Superior & Inferior Thyroid Arteries.',
        innervation: 'Sympathetic (vasomotor) from Cervical Ganglia.',
        clinicalNotes: 'Goiter (enlargement). Hypo/Hyperthyroidism. Surgery risks Recurrent Laryngeal Nerve (hoarseness).',
        details: {
            microAnatomy: [
                { term: 'Follicular Cells', def: 'Produce Thyroglobulin (T3/T4 precursor).' },
                { term: 'Parafollicular (C) Cells', def: 'Secrete Calcitonin (lowers blood calcium).' }
            ],
            physiology: {
                title: 'Hormone Regulation',
                steps: [
                    'Hypothalamus: Releases TRH.',
                    'Pituitary: Releases TSH.',
                    'Thyroid: Releases T3/T4.',
                    'Effect: Increases BMR, heat production, heart rate.',
                    'Feedback: High T3/T4 inhibits TSH/TRH.'
                ]
            },
            pathologies: [
                { name: 'Graves Disease', desc: 'Autoimmune Hyperthyroidism (Exophthalmos).' },
                { name: 'Hashimoto Thyroiditis', desc: 'Autoimmune Hypothyroidism.' },
                { name: 'Goiter', desc: 'Enlarged gland (Iodine deficiency or autoimmune).' }
            ]
        }
    },
    {
        id: 'parathyroid',
        name: 'Parathyroid Glands',
        system: 'Endocrine',
        function: 'Regulate Calcium and Phosphate balance.',
        location: 'Posterior surface of Thyroid lobes (usually 4 glands).',
        bloodSupply: 'Inferior Thyroid Arteries.',
        innervation: 'Sympathetic.',
        clinicalNotes: 'Accidental removal during thyroidectomy causes Tetany (hypocalcemia).',
        details: {
            microAnatomy: [
                { term: 'Chief Cells', def: 'Secrete Parathyroid Hormone (PTH).' },
                { term: 'Oxyphil Cells', def: 'Function unclear, increase with age.' }
            ],
            physiology: {
                title: 'Calcium Homeostasis',
                steps: [
                    'Stimulus: Low blood Calcium.',
                    'Response: Release PTH.',
                    'Bone: Osteoclasts release Ca+.',
                    'Kidney: Reabsorbs Ca+, Activates Vit D.',
                    'Intestine: Absorbs Ca+ (via Vit D).',
                    'Result: Blood Calcium rises.'
                ]
            },
            pathologies: [
                { name: 'Hyperparathyroidism', desc: 'Bones, Stones, Groans, Moans (High Ca+).' },
                { name: 'Hypoparathyroidism', desc: 'Tetany, Chvostek sign, Trousseau sign (Low Ca+).' }
            ]
        }
    },
    {
        id: 'pharynx',
        name: 'Pharynx',
        system: 'Respiratory/Digestive',
        function: 'Conduit for air and food.',
        location: 'Base of skull to C6 (cricoid).',
        bloodSupply: 'Ascending Pharyngeal, Facial, Maxillary arteries.',
        innervation: 'Pharyngeal Plexus (CN IX, X).',
        clinicalNotes: 'Gag reflex (Afferent IX, Efferent X). Site of Pharyngitis (Strep throat).',
        details: {
            microAnatomy: [
                { term: 'Mucosa', def: 'Stratified squamous (Oro/Laryngo) vs Respiratory (Naso).' },
                { term: 'Muscles', def: 'Constrictors (Sup/Mid/Inf) and Longitudinal.' }
            ],
            physiology: {
                title: 'Swallowing (Deglutition)',
                steps: [
                    'Oral Phase: Voluntary bolus movement.',
                    'Pharyngeal Phase: Involuntary. Soft palate rises. Epiglottis closes larynx.',
                    'Esophageal Phase: Peristalsis moves food down.'
                ]
            },
            pathologies: [
                { name: 'Dysphagia', desc: 'Difficulty swallowing.' },
                { name: 'Pharyngeal Pouch', desc: 'Zenker\'s Diverticulum (bad breath, regurgitation).' }
            ]
        }
    },
    {
        id: 'larynx',
        name: 'Larynx (Voice Box)',
        system: 'Respiratory',
        function: 'Airway protection (sphincter) and Phonation.',
        location: 'C3-C6 vertebrae anteriorly.',
        bloodSupply: 'Superior/Inferior Laryngeal Arteries.',
        innervation: 'Superior & Recurrent Laryngeal Nerves (CN X).',
        clinicalNotes: 'Cricothyrotomy acts at C6 level. Laryngeal prominence is C4.',
        details: {
            microAnatomy: [
                { term: 'Cartilages', def: 'Thyroid, Cricoid, Epiglottis, Arytenoids.' },
                { term: 'Vocal Folds', def: 'True chords (vibrate) vs False chords (protect).' }
            ],
            physiology: {
                title: 'Phonation',
                steps: [
                    'Adduction: Arytenoids close vocal folds.',
                    'Airflow: Expiration builds subglottic pressure.',
                    'Vibration: Folds vibrate producing sound.',
                    'Pitch: Tension changed by Cricothyroid/Vocalis muscles.'
                ]
            },
            pathologies: [
                { name: 'Laryngitis', desc: 'Inflammation causing hoarseness.' },
                { name: 'Vocal Nodules', desc: 'Calluses from overuse ("Singer\'s nodes").' },
                { name: 'Laryngospasm', desc: 'Reflex closure locking airway.' }
            ]
        }
    },
    {
        id: 'trachea',
        name: 'Trachea',
        system: 'Respiratory',
        function: 'Airway conduction.',
        location: 'C6 to T4/T5 (Sternal Angle).',
        bloodSupply: 'Inferior Thyroid Artery.',
        innervation: 'Vagus / Recurrent Laryngeal.',
        clinicalNotes: 'Carina (bifurcation) is sensitive cough reflex site.',
        details: {
            microAnatomy: [
                { term: 'C-Rings', def: 'Hyaline cartilage rings (open posteriorly).' },
                { term: 'Trachealis', def: 'Smooth muscle posteriorly (allows esophageal expansion).' },
                { term: 'Mucosa', def: 'Pseudostratified ciliated epithelium (mucociliary escalator).' }
            ],
            physiology: {
                title: 'Airway Maintenance',
                steps: [
                    'Patency: Rings prevent collapse during negative pressure.',
                    'Clearance: Cilia beat mucus upward to pharynx.',
                    'Cough: High velocity expulsion of irritants.'
                ]
            },
            pathologies: [
                { name: 'Tracheomalacia', desc: 'Soft cartillage causing collapse.' },
                { name: 'Tracheitis', desc: 'Bacterial infection (croup-like but toxic).' }
            ]
        }
    },
    {
        id: 'esophagus',
        name: 'Esophagus',
        system: 'Digestive',
        function: 'Food transport to stomach.',
        location: 'C6 (Pharynx) to T11 (Cardia). Posterior to Trachea.',
        bloodSupply: 'Inf Thyroid, Aorta, L Gastric.',
        innervation: 'Esophageal Plexus (Vagus/Sympathetic).',
        clinicalNotes: 'Porto-caval anastomoses site (Esophageal Varices). Hiatal Hernia.',
        details: {
            microAnatomy: [
                { term: 'Musculature', def: 'Upper 1/3 Skeletal, Middle Mixed, Lower 1/3 Smooth.' },
                { term: 'Sphincters', def: 'UES (anatomical), LES (physiological).' }
            ],
            physiology: {
                title: 'Peristalsis',
                steps: [
                    'Primary: Wave triggered by swallow.',
                    'Secondary: Wave triggered by distension (stuck food).',
                    'Relaxation: LES relaxes ahead of wave (NO/VIP).'
                ]
            },
            pathologies: [
                { name: 'GERD', desc: 'Reflux due to weak LES.' },
                { name: 'Barrett\'s Esophagus', desc: 'Metaplasia due to chronic acid.' },
                { name: 'Esophageal Varices', desc: 'Dilated veins from portal HTN (bleed risk).' }
            ]
        }
    }
];
