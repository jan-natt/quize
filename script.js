 
        // Quiz questions database
        const questionsDatabase = {
            general: {
                easy: [
                    {
                        question: "What is the capital of France?",
                        answers: [
                            { text: "Berlin", correct: false },
                            { text: "Madrid", correct: false },
                            { text: "Paris", correct: true },
                            { text: "Rome", correct: false }
                        ]
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        answers: [
                            { text: "Venus", correct: false },
                            { text: "Mars", correct: true },
                            { text: "Jupiter", correct: false },
                            { text: "Saturn", correct: false }
                        ]
                    },
                    {
                        question: "What is the largest mammal in the world?",
                        answers: [
                            { text: "Elephant", correct: false },
                            { text: "Blue Whale", correct: true },
                            { text: "Giraffe", correct: false },
                            { text: "Polar Bear", correct: false }
                        ]
                    }
                ],
                medium: [
                    {
                        question: "Who painted the Mona Lisa?",
                        answers: [
                            { text: "Vincent van Gogh", correct: false },
                            { text: "Pablo Picasso", correct: false },
                            { text: "Leonardo da Vinci", correct: true },
                            { text: "Michelangelo", correct: false }
                        ]
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        answers: [
                            { text: "Go", correct: false },
                            { text: "Gd", correct: false },
                            { text: "Au", correct: true },
                            { text: "Ag", correct: false }
                        ]
                    }
                ],
                hard: [
                    {
                        question: "What is the smallest bone in the human body?",
                        answers: [
                            { text: "Stapes", correct: true },
                            { text: "Femur", correct: false },
                            { text: "Tibia", correct: false },
                            { text: "Radius", correct: false }
                        ]
                    }
                ]
            },
            geography: {
                easy: [
                    {
                        question: "What is the capital of Germany?",
                        answers: [
                            { text: "Berlin", correct: true },
                            { text: "Munich", correct: false },
                            { text: "Hamburg", correct: false },
                            { text: "Frankfurt", correct: false }
                        ]
                    },
                    {
                        question: "Which is the longest river in the world?",
                        answers: [
                            { text: "Amazon", correct: false },
                            { text: "Nile", correct: true },
                            { text: "Mississippi", correct: false },
                            { text: "Yangtze", correct: false }
                        ]
                    }
                ],
                medium: [
                    {
                        question: "Which country has the most natural lakes?",
                        answers: [
                            { text: "United States", correct: false },
                            { text: "Russia", correct: false },
                            { text: "Canada", correct: true },
                            { text: "China", correct: false }
                        ]
                    }
                ],
                hard: [
                    {
                        question: "What is the smallest country in the world?",
                        answers: [
                            { text: "Monaco", correct: false },
                            { text: "Maldives", correct: false },
                            { text: "Vatican City", correct: true },
                            { text: "San Marino", correct: false }
                        ]
                    }
                ]
            },
            history: {
                easy: [
                    {
                        question: "In which year did World War II end?",
                        answers: [
                            { text: "1943", correct: false },
                            { text: "1945", correct: true },
                            { text: "1947", correct: false },
                            { text: "1950", correct: false }
                        ]
                    }
                ],
                medium: [
                    {
                        question: "Who was the first woman to win a Nobel Prize?",
                        answers: [
                            { text: "Marie Curie", correct: true },
                            { text: "Rosa Parks", correct: false },
                            { text: "Florence Nightingale", correct: false },
                            { text: "Amelia Earhart", correct: false }
                        ]
                    }
                ],
                hard: [
                    {
                        question: "Which ancient civilization built the Machu Picchu?",
                        answers: [
                            { text: "Aztec", correct: false },
                            { text: "Maya", correct: false },
                            { text: "Inca", correct: true },
                            { text: "Olmec", correct: false }
                        ]
                    }
                ]
            },
            science: {
                easy: [
                    {
                        question: "What is H2O more commonly known as?",
                        answers: [
                            { text: "Hydrogen Peroxide", correct: false },
                            { text: "Water", correct: true },
                            { text: "Oxygen", correct: false },
                            { text: "Hydrochloric Acid", correct: false }
                        ]
                    }
                ],
                medium: [
                    {
                        question: "What is the hardest natural substance on Earth?",
                        answers: [
                            { text: "Gold", correct: false },
                            { text: "Iron", correct: false },
                            { text: "Diamond", correct: true },
                            { text: "Platinum", correct: false }
                        ]
                    }
                ],
                hard: [
                    {
                        question: "At what temperature are Celsius and Fahrenheit equal?",
                        answers: [
                            { text: "-40°", correct: true },
                            { text: "0°", correct: false },
                            { text: "32°", correct: false },
                            { text: "100°", correct: false }
                        ]
                    }
                ]
            }
        };

        // DOM Elements
        const welcomeScreen = document.getElementById('welcome-screen');
        const categoryScreen = document.getElementById('category-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const resultsScreen = document.getElementById('results-screen');
        const questionElement = document.getElementById('question');
        const answerButtonsElement = document.getElementById('answer-buttons');
        const nextButton = document.getElementById('next-button');
        const restartButton = document.getElementById('restart-button');
        const startButton = document.getElementById('start-button');
        const startQuizButton = document.getElementById('start-quiz-button');
        const scoreElement = document.getElementById('score');
        const finalScoreElement = document.getElementById('final-score');
        const totalQuestionsElement = document.getElementById('total-questions');
        const progressBar = document.getElementById('progress-bar');
        const timerElement = document.getElementById('timer');
        const feedbackElement = document.getElementById('feedback');
        const categorySelect = document.getElementById('category-select');
        const difficultyButtons = document.querySelectorAll('.difficulty-btn');

        // Quiz state variables
        let currentQuestions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let timer;
        let timeLeft = 30;
        let selectedCategory = 'general';
        let selectedDifficulty = 'easy';

        // Event Listeners
        startButton.addEventListener('click', showCategoryScreen);
        startQuizButton.addEventListener('click', startQuiz);
        nextButton.addEventListener('click', () => {
            currentQuestionIndex++;
            setNextQuestion();
        });
        restartButton.addEventListener('click', restartQuiz);
        
        // Difficulty selection
        difficultyButtons.forEach(button => {
            button.addEventListener('click', () => {
                difficultyButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                selectedDifficulty = button.dataset.difficulty;
            });
        });

        // Category selection
        categorySelect.addEventListener('change', (e) => {
            selectedCategory = e.target.value;
        });

        // Functions
        function showCategoryScreen() {
            welcomeScreen.style.display = 'none';
            categoryScreen.style.display = 'block';
        }

        function startQuiz() {
            categoryScreen.style.display = 'none';
            quizScreen.style.display = 'block';
            
            // Get questions based on selected category and difficulty
            currentQuestions = questionsDatabase[selectedCategory][selectedDifficulty];
            
            // Shuffle questions and answers
            shuffleArray(currentQuestions);
            currentQuestions.forEach(question => {
                shuffleArray(question.answers);
            });
            
            currentQuestionIndex = 0;
            score = 0;
            scoreElement.innerText = score;
            
            startGame();
        }

        function startGame() {
            resetState();
            showQuestion();
            startTimer();
        }

        function showQuestion() {
            resetState();
            let currentQuestion = currentQuestions[currentQuestionIndex];
            let questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
            
            // Update progress bar
            progressBar.style.width = `${((currentQuestionIndex) / currentQuestions.length) * 100}%`;
            
            currentQuestion.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add('btn');
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener('click', selectAnswer);
                answerButtonsElement.appendChild(button);
            });
        }

        function resetState() {
            clearInterval(timer);
            timeLeft = 30;
            timerElement.innerText = `Time: ${timeLeft}s`;
            nextButton.style.display = 'none';
            feedbackElement.style.display = 'none';
            while (answerButtonsElement.firstChild) {
                answerButtonsElement.removeChild(answerButtonsElement.firstChild);
            }
        }

        function selectAnswer(e) {
            const selectedButton = e.target;
            const correct = selectedButton.dataset.correct === 'true';
            
            // Disable all buttons after selection
            Array.from(answerButtonsElement.children).forEach(button => {
                button.disabled = true;
                if (button.dataset.correct === 'true') {
                    button.classList.add('correct');
                }
            });
            
            if (correct) {
                selectedButton.classList.add('correct');
                score++;
                scoreElement.innerText = score;
                showFeedback('Correct!', 'correct');
            } else {
                selectedButton.classList.add('incorrect');
                showFeedback('Incorrect!', 'incorrect');
            }
            
            clearInterval(timer);
            nextButton.style.display = 'block';
        }

        function showFeedback(message, type) {
            feedbackElement.innerText = message;
            feedbackElement.className = `feedback ${type}`;
            feedbackElement.style.display = 'block';
        }

        function setNextQuestion() {
            if (currentQuestionIndex < currentQuestions.length) {
                showQuestion();
                startTimer();
            } else {
                showResults();
            }
        }

        function showResults() {
            quizScreen.style.display = 'none';
            resultsScreen.style.display = 'block';
            finalScoreElement.innerText = score;
            totalQuestionsElement.innerText = currentQuestions.length;
        }

        function restartQuiz() {
            resultsScreen.style.display = 'none';
            welcomeScreen.style.display = 'block';
        }

        function startTimer() {
            timer = setInterval(() => {
                timeLeft--;
                timerElement.innerText = `Time: ${timeLeft}s`;
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    handleTimeUp();
                }
            }, 1000);
        }

        function handleTimeUp() {
            // Mark all buttons as disabled
            Array.from(answerButtonsElement.children).forEach(button => {
                button.disabled = true;
                if (button.dataset.correct === 'true') {
                    button.classList.add('correct');
                }
            });
            
            showFeedback('Time is up!', 'incorrect');
            nextButton.style.display = 'block';
        }

        // Utility function to shuffle arrays
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
