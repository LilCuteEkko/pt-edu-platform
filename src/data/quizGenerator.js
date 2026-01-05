import { muscles } from './muscles';
import { physiologyTopics } from './physiology';

// Helper to extract all pathologies from the nested structure
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

export const generateQuiz = (numQuestions = 5, mode = 'muscles') => {
    const questions = [];
    const usedIds = new Set();

    // Select Source Data based on Mode
    const sourceData = mode === 'pathology' ? getAllPathologies() : muscles;
    const count = sourceData.length;

    if (count < 4) return []; // Safety check

    while (questions.length < numQuestions) {
        // Random Selection
        const randomItem = sourceData[Math.floor(Math.random() * count)];

        // Avoid duplicates
        if (usedIds.has(randomItem.id)) continue;
        usedIds.add(randomItem.id);

        // Select Distractors
        const distractors = sourceData
            .filter(item => item.id !== randomItem.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        let questionText = '';
        let correctAnswer = '';
        let options = [];
        let explanation = '';

        if (mode === 'muscles') {
            // --- MUSCLE MODES ---
            const qType = Math.floor(Math.random() * 4);
            switch (qType) {
                case 0: // Std: Nerve
                    questionText = `Which nerve innervates the ${randomItem.name}?`;
                    correctAnswer = randomItem.nerve;
                    options = [randomItem.nerve, ...distractors.map(d => d.nerve)];
                    explanation = `Correct! The ${randomItem.name} is innervated by ${randomItem.nerve}.`;
                    break;
                case 1: // Std: Action
                    questionText = `What is the primary action of the ${randomItem.name}?`;
                    correctAnswer = randomItem.action;
                    options = [randomItem.action, ...distractors.map(d => d.action)];
                    explanation = `Correct! ${randomItem.name} acts to ${randomItem.action.toLowerCase()}.`;
                    break;
                case 2: // Rev: Nerve
                    questionText = `Which muscle is innervated by the ${randomItem.nerve}?`;
                    correctAnswer = randomItem.name;
                    options = [randomItem.name, ...distractors.map(d => d.name)];
                    explanation = `Correct! The ${randomItem.nerve} innervates the ${randomItem.name}.`;
                    break;
                case 3: // Rev: Action
                    questionText = `Which muscle performs the action: "${randomItem.action}"?`;
                    correctAnswer = randomItem.name;
                    options = [randomItem.name, ...distractors.map(d => d.name)];
                    explanation = `Correct! ${randomItem.name} acts to ${randomItem.action.toLowerCase()}.`;
                    break;
            }
        } else {
            // --- PATHOLOGY MODES ---
            // 0: Identify by Feature, 1: Identify Key Feature of Condition, 2: Acronyms (if avail)
            let pType = Math.floor(Math.random() * 2);
            // Check for acronym compatibility
            if (randomItem.acronym && Math.random() > 0.7) pType = 2;

            switch (pType) {
                case 0: // Identify Condition by Feature
                    // Pick a random key feature
                    const feature = randomItem.keyFeatures[Math.floor(Math.random() * randomItem.keyFeatures.length)];
                    questionText = `Which condition is characterized by: "${feature}"?`;
                    correctAnswer = randomItem.name;
                    options = [randomItem.name, ...distractors.map(d => d.name)];
                    explanation = `Correct! "${feature}" is a hallmark sign of ${randomItem.name}${randomItem.acronym ? ` (${randomItem.acronym})` : ''}.`;
                    break;
                case 1: // Identify Feature of Condition
                    const targetFeature1 = randomItem.keyFeatures[0]; // Pick first for simplicity/correctness in distractor generation logic needs care, simplified here:
                    // actually, let's flip it. "Which of these is a key feature of X?"
                    const correctFeature = randomItem.keyFeatures[Math.floor(Math.random() * randomItem.keyFeatures.length)];
                    questionText = `Which of the following is a key feature of ${randomItem.name}?`;
                    correctAnswer = correctFeature;
                    // Distractors need to implement keyFeatures to work. All pathologies do.
                    // We pick a random feature from each distractor
                    options = [correctFeature, ...distractors.map(d => d.keyFeatures[0])];
                    explanation = `Correct! ${randomItem.name} is associated with ${correctFeature}.`;
                    break;
                case 2: // Acronym
                    questionText = `What does the acronym "${randomItem.acronym}" stand for?`;
                    correctAnswer = randomItem.name;
                    options = [randomItem.name, ...distractors.map(d => d.name)];
                    explanation = `Correct! ${randomItem.acronym} stands for ${randomItem.name}.`;
                    break;
            }
        }

        // Shuffle options
        options = options.sort(() => 0.5 - Math.random());

        questions.push({
            id: questions.length + 1,
            text: questionText,
            correctAnswer,
            options,
            explanation
        });
    }

    return questions;
};
