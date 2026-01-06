import { muscles } from './muscles';
import { physiologyTopics } from './physiology';

// Helper to extract all pathologies from the nested structure (Legacy/Fallback)
const getAllPathologies = () => {
    const pathologies = [];
    physiologyTopics.forEach(topic => {
        topic.subtopics.forEach(sub => {
            if (sub.pathologies) {
                pathologies.push(...sub.pathologies);
            }
        });
    });
    return pathologies;
};

export const generateQuiz = (numQuestions = 5, mode = 'muscles', difficulty = 'medium') => {
    const questions = [];
    const usedIds = new Set();
    const isMuscleMode = mode === 'muscles';

    // 1. Determine Source Data
    let sourceData = [];

    if (isMuscleMode) {
        sourceData = muscles;
    } else {
        // Mode is assumed to be a topic ID (e.g., 'neuromuscular', 'cardiopulmonary', 'integumentary')
        const topic = physiologyTopics.find(t => t.id === mode);

        if (topic) {
            topic.subtopics.forEach(sub => {
                // Feature 1: Pathologies
                if (sub.pathologies) {
                    sourceData.push(...sub.pathologies.map(p => ({ ...p, type: 'pathology', sourceSubtopic: sub.title })));
                }

                // Feature 2: Brain Lobes (Neuromuscular)
                if (sub.lobes) {
                    sourceData.push(...sub.lobes.map(l => ({
                        id: `lobe-${l.id}`,
                        name: l.name,
                        type: 'brain-lobe',
                        functions: l.functions,
                        damage: l.damage,
                        vascularSupply: l.vascularSupply
                    })));
                }

                // Feature 3: Dressing Types (Integumentary)
                if (sub.dressingTypes) {
                    sourceData.push(...sub.dressingTypes.map(d => ({
                        id: `dressing-${d.name.replace(/\s+/g, '-')}`,
                        name: d.name,
                        type: 'dressing',
                        indications: d.indications,
                        contraindications: d.contraindications,
                        description: d.description
                    })));
                }

                // Feature 4: Modality Guide (Integumentary)
                if (sub.modalityGuide) {
                    sourceData.push(...sub.modalityGuide.map(m => ({
                        id: `modality-${m.name.replace(/\s+/g, '-')}`,
                        name: m.name,
                        type: 'modality',
                        use: m.use
                    })));
                }
            });
        }

        // Fallback: If no structured data found, try generic pathology fetch if mode was 'pathology'
        if (sourceData.length === 0 && mode === 'pathology') {
            sourceData = getAllPathologies().map(p => ({ ...p, type: 'pathology' }));
        }
    }

    const count = sourceData.length;
    if (count < 4) return []; // Require minimum items for distractors

    // 2. Generate Questions
    while (questions.length < numQuestions) {
        // Random Selection
        const randomItem = sourceData[Math.floor(Math.random() * count)];

        // Avoid duplicates
        if (usedIds.has(randomItem.id)) continue;
        usedIds.add(randomItem.id);

        // Select Distractors (Must be same type for fairness)
        const distractors = sourceData
            .filter(item => item.id !== randomItem.id && item.type === randomItem.type)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        // If not enough same-type distractors (rare), fill with any from same topic
        if (distractors.length < 3) {
            const others = sourceData
                .filter(item => item.id !== randomItem.id && !distractors.includes(item))
                .slice(0, 3 - distractors.length);
            distractors.push(...others);
        }

        let questionText = '';
        let correctAnswer = '';
        let options = [];
        let explanation = '';

        if (isMuscleMode) {
            // Difficulty Logic:
            let allowedTypes = [];
            if (difficulty === 'easy') allowedTypes = [0, 1]; // Direct
            else if (difficulty === 'hard') allowedTypes = [2, 3]; // Reverse
            else allowedTypes = [0, 1, 2, 3]; // Mixed

            const qType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];

            switch (qType) {
                case 0: // Std: Nerve
                    questionText = `Which nerve innervates the ${randomItem.name}?`;
                    correctAnswer = randomItem.nerve;
                    options = [randomItem.nerve, ...distractors.map(d => d.nerve)];
                    explanation = `The ${randomItem.name} is innervated by ${randomItem.nerve}.`;
                    break;
                case 1: // Std: Action
                    questionText = `What is the primary action of the ${randomItem.name}?`;
                    correctAnswer = randomItem.action;
                    options = [randomItem.action, ...distractors.map(d => d.action)];
                    explanation = `${randomItem.name} acts to ${randomItem.action.toLowerCase()}.`;
                    break;
                case 2: // Rev: Nerve
                    questionText = `Which muscle is innervated by the ${randomItem.nerve}?`;
                    correctAnswer = randomItem.name;
                    options = [randomItem.name, ...distractors.map(d => d.name)];
                    explanation = `The ${randomItem.nerve} innervates the ${randomItem.name}.`;
                    break;
                case 3: // Rev: Action
                    questionText = `Which muscle performs the action: "${randomItem.action}"?`;
                    correctAnswer = randomItem.name;
                    options = [randomItem.name, ...distractors.map(d => d.name)];
                    explanation = `${randomItem.name} acts to ${randomItem.action.toLowerCase()}.`;
                    break;
            }
        } else {
            // --- GENERIC / SYSTEM MODES ---

            if (randomItem.type === 'pathology') {
                // Pathology Question Logic
                let allowedTypes = [];
                if (difficulty === 'easy') allowedTypes = [1];
                else if (difficulty === 'hard') allowedTypes = [0, 2];
                else allowedTypes = [0, 1, 2];

                let pType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
                if (pType === 2 && !randomItem.acronym) pType = 0;

                switch (pType) {
                    case 0: // Identify Condition by Feature
                        const feature = randomItem.keyFeatures[Math.floor(Math.random() * randomItem.keyFeatures.length)];
                        questionText = `Which condition is characterized by: "${feature}"?`;
                        correctAnswer = randomItem.name;
                        options = [randomItem.name, ...distractors.map(d => d.name)];
                        explanation = `"${feature}" is a hallmark sign of ${randomItem.name}${randomItem.acronym ? ` (${randomItem.acronym})` : ''}.`;
                        break;
                    case 1: // Identify Feature of Condition
                        const correctFeature = randomItem.keyFeatures[Math.floor(Math.random() * randomItem.keyFeatures.length)];
                        questionText = `Which of the following is a key feature of ${randomItem.name}?`;
                        correctAnswer = correctFeature;
                        options = [correctFeature, ...distractors.map(d => d.keyFeatures ? d.keyFeatures[0] : 'None')]; // Safety
                        explanation = `${randomItem.name} is associated with ${correctFeature}.`;
                        break;
                    case 2: // Acronym
                        questionText = `What does the acronym "${randomItem.acronym}" stand for?`;
                        correctAnswer = randomItem.name;
                        options = [randomItem.name, ...distractors.map(d => d.name)];
                        explanation = `${randomItem.acronym} stands for ${randomItem.name}.`;
                        break;
                }
            } else if (randomItem.type === 'brain-lobe') {
                // Brain Lobe Logic
                const type = Math.random() > 0.5 ? 'function' : 'damage';
                if (type === 'function') {
                    questionText = `Which brain lobe is primarily responsible for: ${randomItem.functions.split(',')[0]}?`;
                    correctAnswer = randomItem.name;
                    explanation = `The ${randomItem.name} handles ${randomItem.functions}.`;
                } else {
                    questionText = `Damage to which lobe is likely to cause: ${randomItem.damage.split('.')[0]}?`;
                    correctAnswer = randomItem.name;
                    explanation = `The ${randomItem.name} is associated with these deficits.`;
                }
                options = [randomItem.name, ...distractors.map(d => d.name)];
            } else if (randomItem.type === 'dressing') {
                // Dressing Logic
                const dType = Math.floor(Math.random() * 3);
                if (dType === 0) {
                    questionText = `Which dressing is indicated for: ${randomItem.indications}?`;
                    correctAnswer = randomItem.name;
                    explanation = `${randomItem.name} is indicated for ${randomItem.indications}.`;
                } else if (dType === 1) {
                    questionText = `Which dressing is CONTRAINDICATED for: ${randomItem.contraindications}?`;
                    correctAnswer = randomItem.name;
                    explanation = `${randomItem.name} should not be used for ${randomItem.contraindications}.`;
                } else {
                    questionText = `Which dressing matches this description: "${randomItem.description}"?`;
                    correctAnswer = randomItem.name;
                    explanation = `${randomItem.name}: ${randomItem.description}`;
                }
                options = [randomItem.name, ...distractors.map(d => d.name)];
            } else if (randomItem.type === 'modality') {
                // Modality Logic
                questionText = `Which modality is used for: "${randomItem.use}"?`;
                correctAnswer = randomItem.name;
                explanation = `${randomItem.name} is used for ${randomItem.use}.`;
                options = [randomItem.name, ...distractors.map(d => d.name)];
            }
        }

        // Shuffle options and Push
        if (questionText) {
            options = options.sort(() => 0.5 - Math.random());
            questions.push({
                id: questions.length + 1,
                text: questionText,
                correctAnswer,
                options,
                explanation
            });
        }
    }

    return questions;
};
