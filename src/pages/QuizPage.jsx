
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateQuiz } from '../data/quizGenerator';
import { Check, X, RefreshCw, Trophy, Brain, Activity } from 'lucide-react';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // New State for Mode Selection
  const [quizMode, setQuizMode] = useState(null); // 'muscles' | 'pathology'
  const [isQuizActive, setIsQuizActive] = useState(false);

  const startQuiz = (mode) => {
    setQuizMode(mode);
    setQuestions(generateQuiz(5, mode));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    resetQuestionState();
    setIsQuizActive(true);
  };

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleOptionClick = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetQuestionState();
    } else {
      setShowResult(true);
    }
  };

  const returnToMenu = () => {
    setIsQuizActive(false);
    setQuizMode(null);
  };

  // --- MODE SELECTION SCREEN ---
  if (!isQuizActive) {
    return (
      <div className="quiz-page container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mode-selection"
        >
          <h1 className="title">Select Quiz Mode</h1>
          <p className="subtitle">Choose your area of study to begin</p>

          <div className="mode-grid">
            <button className="mode-card" onClick={() => startQuiz('muscles')}>
              <Activity size={48} className="mode-icon" />
              <h2>Muscles & Nerves</h2>
              <p>Test your knowledge on origins, insertions, actions, and innervation.</p>
            </button>

            <button className="mode-card" onClick={() => startQuiz('pathology')}>
              <Brain size={48} className="mode-icon" />
              <h2>Pathologies</h2>
              <p>Challenge yourself on signs, symptoms, and clinical features of diseases.</p>
            </button>
          </div>
        </motion.div>

        <style>{`
                .quiz-page { padding: 4rem 1rem; max-width: 900px; margin: 0 auto; }
                .title { text-align: center; font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--color-primary); }
                .subtitle { text-align: center; color: var(--color-secondary); margin-bottom: 3rem; font-size: 1.25rem; }
                
                .mode-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .mode-card {
                    background: var(--color-surface);
                    border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
                    border-radius: var(--radius-lg);
                    padding: 2.5rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                .mode-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-md);
                    border-color: var(--color-primary);
                }
                .mode-icon { color: var(--color-primary); margin-bottom: 1rem; }
                .mode-card h2 { font-size: 1.5rem; color: var(--color-text); }
                .mode-card p { color: var(--color-secondary); line-height: 1.6; }
              `}</style>
      </div>
    );
  }

  // --- RESULT SCREEN ---
  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-page container">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="result-card"
        >
          <Trophy size={64} className="trophy-icon" />
          <h1>Quiz Complete!</h1>
          <p className="mode-badge">{quizMode === 'muscles' ? 'Muscles' : 'Pathologies'}</p>
          <div className="score-display">
            <span className="score-number">{percentage}%</span>
            <span className="score-text">Score: {score} / {questions.length}</span>
          </div>
          <div className="action-buttons">
            <button onClick={() => startQuiz(quizMode)} className="restart-btn primary">
              <RefreshCw size={20} /> Try Again
            </button>
            <button onClick={returnToMenu} className="restart-btn secondary">
              Select New Mode
            </button>
          </div>
        </motion.div>

        <style>{`
          .quiz-page { padding: 4rem 1rem; text-align: center; }
          .result-card {
            background: var(--color-surface);
            padding: 3rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
          }
          .trophy-icon { color: var(--color-accent); margin-bottom: 1.5rem; }
          .mode-badge { 
              background: var(--color-background); 
              padding: 0.25rem 0.75rem; 
              border-radius: 99px; 
              display: inline-block;
              font-size: 0.875rem;
              color: var(--color-secondary);
              margin-bottom: 1rem;
          }
          .score-display {
            margin: 2rem 0;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .score-number { font-size: 4rem; font-weight: 800; color: var(--color-primary); }
          .action-buttons { display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; }
          .restart-btn {
            border: none;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            font-size: 1rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: transform 0.2s;
            cursor: pointer;
          }
          .restart-btn.primary { background: var(--color-primary); color: white; }
          .restart-btn.secondary { background: var(--color-surface); border: 1px solid var(--color-text); color: var(--color-text); opacity: 0.7; }
          .restart-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-sm); }
        `}</style>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-page container">
      <div className="progress-header">
        <button className="back-link" onClick={returnToMenu}>← Exit Quiz</button>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="question-card"
        >
          <h2 className="question-text">{currentQuestion.text}</h2>

          <div className="options-grid">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === currentQuestion.correctAnswer;

              let btnClass = 'option-btn';
              if (isAnswered) {
                if (isCorrect) btnClass += ' correct';
                else if (isSelected) btnClass += ' wrong';
                else btnClass += ' disabled';
              }

              return (
                <button
                  key={idx}
                  className={btnClass}
                  onClick={() => handleOptionClick(option)}
                  disabled={isAnswered}
                >
                  {option}
                  {isAnswered && isCorrect && <Check size={20} />}
                  {isAnswered && isSelected && !isCorrect && <X size={20} />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="feedback-section"
            >
              <p className="explanation">
                {selectedOption === currentQuestion.correctAnswer ? "Correct!" : "Incorrect."} {currentQuestion.explanation}
              </p>
              <button className="next-btn" onClick={nextQuestion}>
                {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <style>{`
        .quiz-page { padding: 2rem 1rem; max-width: 800px; margin: 0 auto; }
        .progress-header { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem; }
        .back-link { background: none; border: none; color: var(--color-secondary); cursor: pointer; text-align: left; padding: 0; font-size: 0.9rem; }
        .progress-bar {
          height: 6px;
          background: color-mix(in srgb, var(--color-text), transparent 90%);
          border-radius: 99px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--color-primary);
          transition: width 0.3s ease;
        }
        .question-card {
          background: var(--color-surface);
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
        }
        .question-text {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--color-text);
        }
        .options-grid {
          display: grid;
          gap: 1rem;
        }
        .option-btn {
          padding: 1.25rem;
          text-align: left;
          background: color-mix(in srgb, var(--color-surface), var(--color-text) 2%);
          border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
          border-radius: var(--radius-md);
          font-size: 1rem;
          color: var(--color-text);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s;
        }
        .option-btn:not(:disabled):hover {
          background: color-mix(in srgb, var(--color-surface), var(--color-text) 5%);
          border-color: var(--color-primary);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }
        .option-btn.correct {
          background: color-mix(in srgb, #10b981, transparent 90%);
          border-color: #10b981;
          color: #10b981;
        }
        .option-btn.wrong {
          background: color-mix(in srgb, #ef4444, transparent 90%);
          border-color: #ef4444;
          color: #ef4444;
        }
        .option-btn.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .feedback-section {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
        .explanation {
          font-size: 1.125rem;
          color: var(--color-secondary);
        }
        .next-btn {
          background: var(--color-primary);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: var(--radius-md);
          font-weight: 500;
          font-size: 1rem;
        }
        .next-btn:hover {
          background: var(--color-secondary);
        }
      `}</style>
    </div>
  );
};

export default QuizPage;
