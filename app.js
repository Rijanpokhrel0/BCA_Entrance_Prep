/* ==========================================================================
   BCA PrepMaster - Core Engine (Nepal Universities Entrance & Light Theme)
   ========================================================================== */

// --- 1. DEFAULT QUESTION BANK WITH UNIVERSITY TAGS ---
const defaultQuestions = [
    // --- TRIBHUVAN UNIVERSITY (TU) MODEL QUESTIONS ---
    {
        id: 1001,
        univ: "TU",
        subject: "English",
        question: "The danger of volcanoes .............. not to be taken lightly.",
        options: ["must", "might", "has", "have"],
        correct: 0,
        explanation: "Must indicates strong obligation/necessity: 'must not be taken lightly'."
    },
    {
        id: 1002,
        univ: "TU",
        subject: "English",
        question: "Ramesh ................ here for the last seven years.",
        options: ["worked", "is working", "has worked", "works"],
        correct: 2,
        explanation: "Present perfect tense 'has worked' is used with time expressions like 'for the last seven years'."
    },
    {
        id: 1003,
        univ: "TU",
        subject: "English",
        question: "Supply the correct tag: 'Let us go, ..............'",
        options: ["shall we?", "will we?", "do we?", "don't we?"],
        correct: 0,
        explanation: "Imperative sentences beginning with 'Let us' take 'shall we?' as question tag."
    },
    {
        id: 1004,
        univ: "TU",
        subject: "English",
        question: "Two ladies had ............. hand bags stolen at the Kathmandu Mall.",
        options: ["its", "her", "their", "they"],
        correct: 2,
        explanation: "Plural subject 'Two ladies' requires plural possessive pronoun 'their'."
    },
    {
        id: 1005,
        univ: "TU",
        subject: "English",
        question: "Sincere people abide ............. their promise.",
        options: ["by", "of", "at", "on"],
        correct: 0,
        explanation: "The idiom is 'abide by' meaning to accept or act in accordance with a rule or promise."
    },
    {
        id: 1006,
        univ: "TU",
        subject: "English",
        question: "The new manager will ............ his position on August 30.",
        options: ["take off", "take out", "take over", "take after"],
        correct: 2,
        explanation: "'Take over' means to assume control or responsibility of a position."
    },
    {
        id: 1007,
        univ: "TU",
        subject: "English",
        question: "Choose the correct meaning of 'A Lion's share':",
        options: ["No share at all", "Greater share of a thing", "Very small part", "Little profit"],
        correct: 1,
        explanation: "'A lion's share' refers to the major or largest portion of something."
    },
    {
        id: 1008,
        univ: "TU",
        subject: "English",
        question: "Neither of them ............ a problem.",
        options: ["anticipate", "anticipates", "have anticipated", "are anticipating"],
        correct: 1,
        explanation: "'Neither' is singular and takes a singular verb ('anticipates')."
    },
    {
        id: 1009,
        univ: "TU",
        subject: "English",
        question: "Choose the correct passive voice: 'We celebrate Democracy Day on Falgun seven.'",
        options: [
            "Democracy Day is celebrated on Falgun seven by us.",
            "Democracy Day was celebrated on Falgun seven by us.",
            "Democracy Day has been celebrated on Falgun seven by us.",
            "Democracy Day had been celebrated on Falgun seven by us."
        ],
        correct: 0,
        explanation: "Simple present tense in active voice changes to 'is + past participle' in passive voice."
    },
    {
        id: 1010,
        univ: "TU",
        subject: "English",
        question: "That which cannot be divided is called:",
        options: ["Indelible", "Indivisible", "Insoluble", "Indefensible"],
        correct: 1,
        explanation: "Indivisible means unable to be divided into separate parts."
    },
    {
        id: 1011,
        univ: "TU",
        subject: "Mathematics",
        question: "A number divided by 10 gives a remainder 7. If the same number is divided by 5, what will be the remainder?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "Number N = 10k + 7. Divided by 5: (10k + 7)/5 = 2k + 1 with remainder 2 (7 mod 5 = 2)."
    },
    {
        id: 1012,
        univ: "TU",
        subject: "Mathematics",
        question: "Which value of 'n' gives a negative result for (n² - 15)?",
        options: ["7", "5", "3", "4"],
        correct: 2,
        explanation: "For n = 3: 3² - 15 = 9 - 15 = -6 (negative)."
    },
    {
        id: 1013,
        univ: "TU",
        subject: "Mathematics",
        question: "If 'n' is an integer, which of the following expressions must always be even?",
        options: ["n(n + 1)", "n² + 1", "n(n + 2)", "n(n + 4)"],
        correct: 0,
        explanation: "n(n+1) is the product of two consecutive integers, one of which must be even. Hence, the product is always even."
    },
    {
        id: 1014,
        univ: "TU",
        subject: "Mathematics",
        question: "What is the sum of the first five prime numbers?",
        options: ["18", "25", "26", "28"],
        correct: 3,
        explanation: "First 5 prime numbers: 2 + 3 + 5 + 7 + 11 = 28."
    },
    {
        id: 1015,
        univ: "TU",
        subject: "Computer & IT",
        question: "When did the new constitution of Nepal 'Nepal Ko Sambidhan' come into effect?",
        options: ["2072 Ashoj 4", "2072 Ashoj 3", "2072 Ashoj 2", "2072 Ashoj 1"],
        correct: 1,
        explanation: "The Constitution of Nepal was promulgated on 2072 Ashoj 3 (September 20, 2015)."
    },
    {
        id: 1016,
        univ: "TU",
        subject: "Computer & IT",
        question: "Who is known as the 'Father of Computer'?",
        options: ["Charles Babbage", "Bill Gates", "Mark Zuckerberg", "John von Neumann"],
        correct: 0,
        explanation: "Charles Babbage conceptualized and invented the first mechanical computer (Analytical Engine)."
    },

    // --- KATHMANDU UNIVERSITY (KU) KUCAT PATTERN QUESTIONS ---
    {
        id: 2001,
        univ: "KU",
        subject: "Mathematics",
        question: "What is the derivative of f(x) = x · ln(x) with respect to x?",
        options: ["ln(x) + 1", "1/x", "ln(x)", "x + 1"],
        correct: 0,
        explanation: "Using Product Rule d/dx [u·v] = u'v + uv': (1)·ln(x) + x·(1/x) = ln(x) + 1."
    },
    {
        id: 2002,
        univ: "KU",
        subject: "Computer & IT",
        question: "In Boolean Algebra, what is the simplified form of expression A + A·B?",
        options: ["A", "B", "A + B", "A·B"],
        correct: 0,
        explanation: "By Absorption Law: A + A·B = A(1 + B) = A(1) = A."
    },
    {
        id: 2003,
        univ: "KU",
        subject: "Mathematics",
        question: "If a matrix A has determinant |A| = 5, what is the determinant of 2A for a 3x3 matrix?",
        options: ["10", "20", "40", "80"],
        correct: 2,
        explanation: "For an n x n matrix, |k A| = kⁿ |A|. Here n=3, so |2A| = 2³ · 5 = 8 · 5 = 40."
    },
    {
        id: 2004,
        univ: "KU",
        subject: "English",
        question: "Choose the word closest in meaning to 'EPHEMERAL':",
        options: ["Eternal", "Transient / Short-lived", "Substantial", "Mysterious"],
        correct: 1,
        explanation: "Ephemeral means lasting for a very short time (transient)."
    },

    // --- POKHARA UNIVERSITY (PU) QUESTIONS ---
    {
        id: 3001,
        univ: "PU",
        subject: "Computer & IT",
        question: "Which data structure uses the LIFO (Last In First Out) principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correct: 1,
        explanation: "Stack uses LIFO order where the last inserted element is removed first."
    },
    {
        id: 3002,
        univ: "PU",
        subject: "Mathematics",
        question: "Find the mean of the first 10 natural numbers.",
        options: ["5", "5.5", "6", "10"],
        correct: 1,
        explanation: "Sum = n(n+1)/2 = 10(11)/2 = 55. Mean = 55 / 10 = 5.5."
    },
    {
        id: 3003,
        univ: "PU",
        subject: "English",
        question: "Pick out the correct antonym of 'OPTIMISTIC':",
        options: ["Hopeful", "Pessimistic", "Positive", "Confident"],
        correct: 1,
        explanation: "Pessimistic is the exact antonym of Optimistic."
    },

    // --- PURBANCHAL UNIVERSITY QUESTIONS ---
    {
        id: 4001,
        univ: "Purbanchal",
        subject: "Computer & IT",
        question: "What type of IP address is 192.168.1.1?",
        options: ["Public Class A", "Private Class C", "Multicast Class D", "Loopback Address"],
        correct: 1,
        explanation: "192.168.x.x falls in the IPv4 Private Class C address range."
    },
    {
        id: 4002,
        univ: "Purbanchal",
        subject: "Mathematics",
        question: "What is the value of log₁₀(1000)?",
        options: ["1", "2", "3", "10"],
        correct: 2,
        explanation: "10³ = 1000, so log₁₀(1000) = 3."
    }
];

// --- 2. DEFAULT FLASHCARDS ---
const defaultFlashcards = [
    { category: "CS", term: "RAM vs ROM", definition: "RAM is volatile (temporary fast memory for active tasks). ROM is non-volatile (permanent firmware memory for boot-up)." },
    { category: "CS", term: "De Morgan's Laws", definition: "(A + B)' = A' · B' and (A · B)' = A' + B'. Essential for Boolean logic and digital gate simplification." },
    { category: "Math", term: "Quadratic Formula", definition: "x = [-b ± √(b² - 4ac)] / (2a). Discriminant D = b² - 4ac determines nature of roots." },
    { category: "Math", term: "Logarithm Rules", definition: "log(ab) = log a + log b | log(a/b) = log a - log b | log(aⁿ) = n · log a." },
    { category: "English", term: "Subject-Verb Agreement", definition: "Singular subjects take singular verbs. Phrases like 'along with', 'as well as' do not change the subject number." }
];

// --- 3. UNIVERSITY DETAILS PORTAL DATA ---
const universityPortals = {
    TU: {
        name: "Tribhuvan University (TU)",
        fullTitle: "BCA Entrance Examination (Faculty of Humanities & Social Sciences)",
        marks: "100 Marks (100 MCQs)",
        duration: "2 Hours (120 Minutes)",
        breakdown: [
            "Basic Mathematics (40 Marks)",
            "English & Grammar (40 Marks)",
            "Computer Science & General Knowledge (20 Marks)"
        ],
        criteria: "Minimum D+ grade in all subjects of Class 11 and 12 with CGPA 2.0 or higher.",
        tips: "Focus heavily on Class 11/12 basic algebra, set theory, prepositions, and fundamental computer concepts."
    },
    KU: {
        name: "Kathmandu University (KU)",
        fullTitle: "KUCAT / School of Science & Engineering Aptitude Test",
        marks: "100 Marks (Computerized Test)",
        duration: "1.5 Hours (90 Minutes)",
        breakdown: [
            "Advanced Mathematics & Calculus (35%)",
            "Computer Science & Boolean Logic (35%)",
            "English Proficiency & Analytical Reasoning (30%)"
        ],
        criteria: "Minimum 52% aggregate in +2 Science/Management with Mathematics background.",
        tips: "KU entrance tests problem-solving speed, calculus derivatives, logic gates, and comprehension."
    },
    PU: {
        name: "Pokhara University (PU)",
        fullTitle: "BCA / BIT Entrance Examination",
        marks: "100 Marks",
        duration: "2 Hours (120 Minutes)",
        breakdown: [
            "Mathematics & Statistics (40 Marks)",
            "English & Vocabulary (30 Marks)",
            "Computer Fundamentals & General Awareness (30 Marks)"
        ],
        criteria: "Minimum C grade in +2/PCL or equivalent.",
        tips: "Strong grasp on matrices, probability, data structures basics, and current IT awareness."
    },
    Purbanchal: {
        name: "Purbanchal University",
        fullTitle: "BCA / BIT Entrance Test",
        marks: "100 Marks",
        duration: "2 Hours",
        breakdown: [
            "Mathematics (40 Marks)",
            "English (30 Marks)",
            "Computer & Logic (30 Marks)"
        ],
        criteria: "Minimum 45% or C Grade in +2 level.",
        tips: "Practice basic computer networking, operating systems, and high school algebra."
    },
    Others: {
        name: "Other Universities & Foreign Affiliated Colleges",
        fullTitle: "Lincoln, Mid-Western, Far-Western, & UK Affiliated Entrance Tests",
        marks: "100 Marks",
        duration: "1.5 to 2 Hours",
        breakdown: [
            "English Communication & Essay Writing (40%)",
            "Logical Reasoning & Quantitative Aptitude (40%)",
            "Basic Computer Concepts & Interview (20%)"
        ],
        criteria: "Minimum Pass Grade in +2 / A-Levels.",
        tips: "Brush up on English fluency, logical reasoning puzzles, and basic computer terminology."
    }
};

// --- 4. APP STATE ---
let state = {
    questions: [],
    flashcards: [],
    currentView: 'dashboard',
    theme: 'light', // LIGHT THEME DEFAULT
    userStats: {
        answered: 0,
        correct: 0,
        streak: 1,
        xp: 150,
        mockExamsDone: 0,
        subjectStats: {
            "Mathematics": { attempted: 0, correct: 0 },
            "English": { attempted: 0, correct: 0 },
            "Computer & IT": { attempted: 0, correct: 0 }
        }
    },
    practice: {
        filteredQuestions: [],
        currentIndex: 0,
        selectedOption: null,
        mode: 'practice',
        subject: 'All',
        univ: 'All'
    },
    mock: {
        active: false,
        questions: [],
        currentIndex: 0,
        userAnswers: {},
        timeRemaining: 7200,
        timerInterval: null,
        targetUniv: 'TU'
    }
};

// --- 5. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadStateFromStorage();
    initNavigation();
    initThemeToggle();
    initUniversityPortals();
    initPracticeMode();
    initMockExamMode();
    initImportModule();
    initQuestionBank();
    initFlashcards();
    updateUI();
});

function loadStateFromStorage() {
    const savedTheme = localStorage.getItem('bca_theme') || 'light';
    setTheme(savedTheme);

    const savedQuestions = localStorage.getItem('bca_questions');
    if (savedQuestions) {
        try {
            state.questions = JSON.parse(savedQuestions);
        } catch (e) {
            state.questions = [...defaultQuestions];
        }
    } else {
        state.questions = [...defaultQuestions];
    }

    const savedStats = localStorage.getItem('bca_user_stats');
    if (savedStats) {
        try {
            state.userStats = { ...state.userStats, ...JSON.parse(savedStats) };
        } catch (e) {}
    }

    state.flashcards = [...defaultFlashcards];
}

function saveStateToStorage() {
    localStorage.setItem('bca_questions', JSON.stringify(state.questions));
    localStorage.setItem('bca_user_stats', JSON.stringify(state.userStats));
    localStorage.setItem('bca_theme', state.theme);
}

// --- 6. THEME TOGGLE ENGINE ---
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggleBtn');
    themeBtn.addEventListener('click', () => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        showToast(`Switched to ${newTheme.toUpperCase()} Mode`, "info");
    });
}

function setTheme(themeName) {
    state.theme = themeName;
    const label = document.getElementById('themeToggleLabel');
    const icon = document.querySelector('#themeToggleBtn i');

    if (themeName === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        if (label) label.textContent = "Light Mode";
        if (icon) icon.className = "fa-solid fa-sun text-amber";
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        if (label) label.textContent = "Dark Mode";
        if (icon) icon.className = "fa-solid fa-moon text-indigo";
    }
    saveStateToStorage();
}

// --- 7. NAVIGATION ENGINE ---
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetView = item.getAttribute('data-view');
            switchView(targetView);
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('open');
            }
        });
    });

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    document.getElementById('dashGoUniversitiesBtn')?.addEventListener('click', () => switchView('universities'));
    document.getElementById('dashImportFileBtn')?.addEventListener('click', () => switchView('import'));
    document.getElementById('dashGoToImportBtn')?.addEventListener('click', () => switchView('import'));
    document.getElementById('quickTestBtn')?.addEventListener('click', () => switchView('practice'));

    // Start University Exam Buttons from Dashboard
    document.querySelectorAll('.start-univ-exam-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const univ = e.currentTarget.getAttribute('data-univ');
            document.getElementById('mockUnivTargetSelect').value = univ;
            switchView('mocktest');
        });
    });
}

function switchView(viewName) {
    state.currentView = viewName;

    document.querySelectorAll('.nav-item').forEach(btn => {
        if (btn.getAttribute('data-view') === viewName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }

    const titles = {
        dashboard: { title: "Dashboard", sub: "Welcome back! Select your target Nepal University entrance session." },
        universities: { title: "University Portals", sub: "Explore official syllabus, criteria & entrance formats for TU, KU, & PU." },
        practice: { title: "Quick Practice Quiz", sub: "Sharpen your knowledge with instant subject questions & solutions." },
        mocktest: { title: "University Mock Exams", sub: "Simulate authentic timed entrance examinations." },
        questionbank: { title: "Interactive Question Bank", sub: "Browse, filter, and search through all entrance questions." },
        flashcards: { title: "Revision Flashcards", sub: "Flip cards for key concepts, computer terms & math formulas." },
        import: { title: "Import / Add Questions", sub: "Upload JSON/TXT files or paste question text directly." },
        analytics: { title: "Performance Analytics", sub: "Analyze subject strengths, accuracy rates & readiness." }
    };

    if (titles[viewName]) {
        document.getElementById('pageTitle').textContent = titles[viewName].title;
        document.getElementById('pageSubTitle').textContent = titles[viewName].sub;
    }

    if (viewName === 'universities') renderUniversityPortal('TU');
    if (viewName === 'practice') filterPracticeQuestions();
    if (viewName === 'questionbank') renderQuestionBank();
    if (viewName === 'flashcards') renderFlashcards();
    if (viewName === 'analytics') renderAnalytics();
}

// --- 8. UNIVERSITY PORTAL VIEW ENGINE ---
function initUniversityPortals() {
    document.querySelectorAll('.univ-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.univ-tab-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            const targetUniv = e.currentTarget.getAttribute('data-tab-univ');
            renderUniversityPortal(targetUniv);
        });
    });
}

function renderUniversityPortal(univKey) {
    const container = document.getElementById('univPortalContent');
    if (!container) return;

    const info = universityPortals[univKey] || universityPortals['TU'];

    container.innerHTML = `
        <div class="univ-portal-card">
            <div class="portal-head">
                <div class="univ-logo-circle ${univKey.toLowerCase()}-bg">${univKey.substring(0, 2)}</div>
                <div>
                    <h2>${info.name}</h2>
                    <p class="text-muted">${info.fullTitle}</p>
                </div>
            </div>

            <div class="portal-grid">
                <div class="portal-box">
                    <h4><i class="fa-solid fa-clock text-indigo"></i> Exam Format & Duration</h4>
                    <ul>
                        <li><strong>Total Marks:</strong> ${info.marks}</li>
                        <li><strong>Time Allowed:</strong> ${info.duration}</li>
                        <li><strong>Question Type:</strong> Multiple Choice Questions (MCQs)</li>
                    </ul>
                </div>

                <div class="portal-box">
                    <h4><i class="fa-solid fa-pie-chart text-emerald"></i> Subject Weightage</h4>
                    <ul>
                        ${info.breakdown.map(item => `<li><i class="fa-solid fa-angle-right text-emerald"></i> ${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="portal-box">
                    <h4><i class="fa-solid fa-graduation-cap text-amber"></i> Eligibility Criteria</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">${info.criteria}</p>
                </div>
            </div>

            <div class="portal-box mt-3" style="background: rgba(79, 70, 229, 0.04); border-color: rgba(79, 70, 229, 0.2);">
                <h4><i class="fa-solid fa-lightbulb text-amber"></i> Preparation Tips for ${univKey} Entrance:</h4>
                <p style="font-size: 0.9rem;">${info.tips}</p>
            </div>

            <div style="display: flex; gap: 16px; margin-top: 10px;">
                <button class="btn btn-primary btn-lg" onclick="startUnivExamFromPortal('${univKey}')">
                    <i class="fa-solid fa-play"></i> Start ${univKey} Entrance Mock Test
                </button>
            </div>
        </div>
    `;
}

window.startUnivExamFromPortal = function(univKey) {
    document.getElementById('mockUnivTargetSelect').value = univKey;
    switchView('mocktest');
};

// --- 9. PRACTICE QUIZ ENGINE ---
function initPracticeMode() {
    const univSelect = document.getElementById('practiceUnivSelect');
    const subjectSelect = document.getElementById('practiceSubjectSelect');
    const restartBtn = document.getElementById('restartPracticeBtn');
    const prevBtn = document.getElementById('prevQBtn');
    const nextBtn = document.getElementById('nextQBtn');

    univSelect.addEventListener('change', filterPracticeQuestions);
    subjectSelect.addEventListener('change', filterPracticeQuestions);
    restartBtn.addEventListener('click', filterPracticeQuestions);

    prevBtn.addEventListener('click', () => {
        if (state.practice.currentIndex > 0) {
            state.practice.currentIndex--;
            renderPracticeQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (state.practice.currentIndex < state.practice.filteredQuestions.length - 1) {
            state.practice.currentIndex++;
            renderPracticeQuestion();
        } else {
            showToast("Reached end of practice set!", "success");
        }
    });
}

function filterPracticeQuestions() {
    const selectedUniv = document.getElementById('practiceUnivSelect').value;
    const selectedSubj = document.getElementById('practiceSubjectSelect').value;

    state.practice.filteredQuestions = state.questions.filter(q => {
        const matchesUniv = (selectedUniv === 'All') || (q.univ === selectedUniv);
        const matchesSubj = (selectedSubj === 'All') || (q.subject === selectedSubj);
        return matchesUniv && matchesSubj;
    });

    if (state.practice.filteredQuestions.length === 0) {
        state.practice.filteredQuestions = [...state.questions];
    }

    state.practice.currentIndex = 0;
    renderPracticeQuestion();
}

function renderPracticeQuestion() {
    const qList = state.practice.filteredQuestions;
    const index = state.practice.currentIndex;

    if (!qList || qList.length === 0) return;

    const q = qList[index];
    state.practice.selectedOption = null;

    document.getElementById('qUnivBadge').textContent = (q.univ ? `${q.univ} Pattern` : "Nepal Pattern");
    document.getElementById('qSubjectBadge').textContent = q.subject || "General";
    document.getElementById('qIndexText').textContent = `Question ${index + 1} of ${qList.length}`;
    document.getElementById('questionText').textContent = q.question;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="opt-prefix">${letters[optIdx]}</span>
            <span class="opt-text">${escapeHtml(optText)}</span>
        `;

        btn.addEventListener('click', () => handleOptionClick(optIdx, q, btn));
        optionsContainer.appendChild(btn);
    });

    document.getElementById('explanationBox').classList.add('hidden');
    document.getElementById('explanationText').textContent = q.explanation || "No detailed explanation provided.";
    document.getElementById('prevQBtn').disabled = (index === 0);
}

function handleOptionClick(optIndex, question, btnElement) {
    if (state.practice.selectedOption !== null) return;

    state.practice.selectedOption = optIndex;
    const allOptBtns = document.querySelectorAll('#optionsContainer .option-btn');
    const isCorrect = (optIndex === question.correct);

    state.userStats.answered++;
    if (!state.userStats.subjectStats[question.subject]) {
        state.userStats.subjectStats[question.subject] = { attempted: 0, correct: 0 };
    }
    state.userStats.subjectStats[question.subject].attempted++;

    if (isCorrect) {
        btnElement.classList.add('correct');
        state.userStats.correct++;
        state.userStats.xp += 10;
        state.userStats.subjectStats[question.subject].correct++;
        showToast("Correct Answer! +10 XP", "success");
    } else {
        btnElement.classList.add('wrong');
        if (allOptBtns[question.correct]) {
            allOptBtns[question.correct].classList.add('correct');
        }
        showToast("Incorrect answer", "error");
    }

    allOptBtns.forEach(b => b.classList.add('disabled'));
    document.getElementById('explanationBox').classList.remove('hidden');
    
    saveStateToStorage();
    updateUI();
}

// --- 10. UNIVERSITY MOCK EXAM ENGINE ---
function initMockExamMode() {
    const startBtn = document.getElementById('startFullMockExamBtn');
    const submitBtn = document.getElementById('submitExamEarlyBtn');
    const retakeBtn = document.getElementById('retakeMockBtn');

    startBtn.addEventListener('click', startMockExam);
    submitBtn.addEventListener('click', submitMockExam);
    retakeBtn.addEventListener('click', () => {
        document.getElementById('mockResultCard').classList.add('hidden');
        document.getElementById('mockWelcomeCard').classList.remove('hidden');
    });

    document.getElementById('mockPrevBtn')?.addEventListener('click', () => {
        if (state.mock.currentIndex > 0) {
            state.mock.currentIndex--;
            renderMockQuestion();
        }
    });

    document.getElementById('mockNextBtn')?.addEventListener('click', () => {
        if (state.mock.currentIndex < state.mock.questions.length - 1) {
            state.mock.currentIndex++;
            renderMockQuestion();
        }
    });
}

function startMockExam() {
    const targetUniv = document.getElementById('mockUnivTargetSelect').value;
    state.mock.targetUniv = targetUniv;
    state.mock.active = true;

    // Filter questions for target university if specified
    if (targetUniv === 'All') {
        state.mock.questions = [...state.questions];
    } else {
        const univQ = state.questions.filter(q => q.univ === targetUniv);
        state.mock.questions = univQ.length > 0 ? univQ : [...state.questions];
    }

    state.mock.currentIndex = 0;
    state.mock.userAnswers = {};

    // KU has 1.5 hr timer, others 2 hr
    state.mock.timeRemaining = (targetUniv === 'KU') ? 5400 : 7200;

    document.getElementById('mockWelcomeCard').classList.add('hidden');
    document.getElementById('mockResultCard').classList.add('hidden');
    document.getElementById('mockActiveLayout').classList.remove('hidden');

    renderMockPalette();
    renderMockQuestion();
    startMockTimer();
}

function startMockTimer() {
    clearInterval(state.mock.timerInterval);
    state.mock.timerInterval = setInterval(() => {
        state.mock.timeRemaining--;
        updateMockTimerDisplay();
        if (state.mock.timeRemaining <= 0) {
            clearInterval(state.mock.timerInterval);
            submitMockExam();
            showToast("Time expired! Exam auto-submitted.", "info");
        }
    }, 1000);
}

function updateMockTimerDisplay() {
    const hours = Math.floor(state.mock.timeRemaining / 3600);
    const mins = Math.floor((state.mock.timeRemaining % 3600) / 60);
    const secs = state.mock.timeRemaining % 60;
    const format = (n) => n.toString().padStart(2, '0');
    document.getElementById('mockTimerDisplay').textContent = `${format(hours)}:${format(mins)}:${format(secs)}`;
}

function renderMockPalette() {
    const grid = document.getElementById('paletteGrid');
    grid.innerHTML = '';

    state.mock.questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = `p-btn ${idx === state.mock.currentIndex ? 'active' : ''} ${state.mock.userAnswers[idx] !== undefined ? 'answered' : ''}`;
        btn.textContent = idx + 1;
        btn.addEventListener('click', () => {
            state.mock.currentIndex = idx;
            renderMockQuestion();
        });
        grid.appendChild(btn);
    });
}

function renderMockQuestion() {
    const q = state.mock.questions[state.mock.currentIndex];
    if (!q) return;

    document.getElementById('mockQSubject').textContent = q.subject || "General";
    document.getElementById('mockQIndexText').textContent = `Question ${state.mock.currentIndex + 1} of ${state.mock.questions.length}`;
    document.getElementById('mockQText').textContent = q.question;

    const optionsContainer = document.getElementById('mockOptionsContainer');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        const isSelected = state.mock.userAnswers[state.mock.currentIndex] === optIdx;
        btn.className = `option-btn ${isSelected ? 'selected' : ''}`;
        btn.innerHTML = `
            <span class="opt-prefix">${letters[optIdx]}</span>
            <span class="opt-text">${escapeHtml(optText)}</span>
        `;

        btn.addEventListener('click', () => {
            state.mock.userAnswers[state.mock.currentIndex] = optIdx;
            renderMockPalette();
            renderMockQuestion();
        });
        optionsContainer.appendChild(btn);
    });

    renderMockPalette();
}

function submitMockExam() {
    clearInterval(state.mock.timerInterval);
    state.mock.active = false;

    let correctCount = 0;
    let wrongCount = 0;
    let unattempted = 0;

    state.mock.questions.forEach((q, idx) => {
        const userAns = state.mock.userAnswers[idx];
        if (userAns === undefined) {
            unattempted++;
        } else if (userAns === q.correct) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    state.userStats.mockExamsDone++;
    saveStateToStorage();

    document.getElementById('mockActiveLayout').classList.add('hidden');
    document.getElementById('mockResultCard').classList.remove('hidden');

    document.getElementById('resCorrect').textContent = correctCount;
    document.getElementById('resWrong').textContent = wrongCount;
    document.getElementById('resUnanswered').textContent = unattempted;

    const total = state.mock.questions.length;
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    document.getElementById('resAccuracy').textContent = `${accuracy}%`;
    document.getElementById('mockResultScoreText').textContent = `${state.mock.targetUniv} Mock Score: ${correctCount} / ${total} Marks!`;

    updateUI();
}

// --- 11. FILE IMPORT ENGINE ---
function initImportModule() {
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');
    const parseRawBtn = document.getElementById('parseRawTextBtn');
    const rawTextArea = document.getElementById('rawTextImport');

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
        });
    });

    dropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) processImportFile(files[0]);
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) processImportFile(e.target.files[0]);
    });

    parseRawBtn.addEventListener('click', () => {
        const rawText = rawTextArea.value.trim();
        if (!rawText) {
            showImportAlert("Please paste text containing questions first.", "error");
            return;
        }
        parseRawTextQuestions(rawText);
    });
}

function processImportFile(file) {
    const reader = new FileReader();
    const fileName = file.name.toLowerCase();

    reader.onload = (e) => {
        const content = e.target.result;
        if (fileName.endsWith('.json')) {
            try {
                const parsed = JSON.parse(content);
                if (Array.isArray(parsed)) {
                    addQuestionsToBank(parsed);
                    showImportAlert(`Successfully imported ${parsed.length} questions from ${file.name}!`, "success");
                } else {
                    showImportAlert("JSON file must contain an array of question objects.", "error");
                }
            } catch (err) {
                showImportAlert("Invalid JSON file formatting.", "error");
            }
        } else {
            parseRawTextQuestions(content);
        }
    };

    reader.readAsText(file);
}

function parseRawTextQuestions(rawText) {
    const defaultSubj = document.getElementById('defaultSubjectSelect').value;
    const newQuestions = [];
    const blocks = rawText.split(/(?=\b\d+[\.\)]|\bQ\d+[:\.\)])/gi);

    blocks.forEach((block, idx) => {
        if (!block.trim()) return;

        const lines = block.split('\n').map(l => l.trim()).filter(l => l);
        if (lines.length < 3) return;

        let qText = lines[0].replace(/^\d+[\.\)]\s*|^Q\d+[:\.\)]\s*/i, '');
        const options = [];
        let correctIdx = 0;
        let explanation = "";

        lines.slice(1).forEach(line => {
            if (/^[a-d][\.\)]\s*/i.test(line)) {
                options.push(line.replace(/^[a-d][\.\)]\s*/i, ''));
            } else if (/^Answer:\s*/i.test(line)) {
                const ansStr = line.replace(/^Answer:\s*/i, '').trim().toLowerCase();
                if (ansStr.startsWith('a') || ansStr === '1') correctIdx = 0;
                else if (ansStr.startsWith('b') || ansStr === '2') correctIdx = 1;
                else if (ansStr.startsWith('c') || ansStr === '3') correctIdx = 2;
                else if (ansStr.startsWith('d') || ansStr === '4') correctIdx = 3;
            } else if (/^Explanation:\s*/i.test(line)) {
                explanation = line.replace(/^Explanation:\s*/i, '');
            }
        });

        if (options.length >= 2) {
            newQuestions.push({
                id: Date.now() + idx,
                univ: "Custom",
                subject: defaultSubj,
                question: qText,
                options: options.length === 4 ? options : [...options, "None of the above", "All of the above"].slice(0, 4),
                correct: correctIdx,
                explanation: explanation || "Uploaded question."
            });
        }
    });

    if (newQuestions.length > 0) {
        addQuestionsToBank(newQuestions);
        showImportAlert(`Parsed and added ${newQuestions.length} new questions to your Question Bank!`, "success");
        document.getElementById('rawTextImport').value = '';
    } else {
        showImportAlert("Could not automatically structure questions. Make sure options are labeled (a, b, c, d).", "error");
    }
}

function addQuestionsToBank(newQuestions) {
    state.questions = [...state.questions, ...newQuestions];
    saveStateToStorage();
    updateUI();
}

function showImportAlert(msg, type) {
    const alertBox = document.getElementById('importStatusAlert');
    alertBox.className = `status-alert ${type}`;
    alertBox.textContent = msg;
    alertBox.classList.remove('hidden');
}

// --- 12. QUESTION BANK ---
function initQuestionBank() {
    document.getElementById('qbankSearchInput')?.addEventListener('input', renderQuestionBank);
    document.getElementById('qbankSubjectFilter')?.addEventListener('change', renderQuestionBank);
}

function renderQuestionBank() {
    const container = document.getElementById('qbankListContainer');
    if (!container) return;

    const query = document.getElementById('qbankSearchInput')?.value.toLowerCase() || '';
    const subjFilter = document.getElementById('qbankSubjectFilter')?.value || 'All';

    let filtered = state.questions.filter(q => {
        const matchesQuery = q.question.toLowerCase().includes(query) || (q.explanation && q.explanation.toLowerCase().includes(query));
        const matchesSubj = (subjFilter === 'All') || (q.subject === subjFilter);
        return matchesQuery && matchesSubj;
    });

    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = `<div class="text-center text-muted py-5">No questions matched your search query.</div>`;
        return;
    }

    filtered.forEach((q, idx) => {
        const item = document.createElement('div');
        item.className = 'qbank-item';
        const letters = ['A', 'B', 'C', 'D'];

        let optsHTML = q.options.map((opt, oIdx) => `
            <div class="qbank-opt ${oIdx === q.correct ? 'correct-ans' : ''}">
                <strong>${letters[oIdx]}.</strong> ${escapeHtml(opt)} ${oIdx === q.correct ? '<i class="fa-solid fa-check text-emerald"></i>' : ''}
            </div>
        `).join('');

        item.innerHTML = `
            <div class="qbank-item-head">
                <div>
                    <span class="badge badge-univ">${q.univ || 'Nepal'}</span>
                    <span class="badge badge-subject">${q.subject || 'General'}</span>
                </div>
                <span class="subtext">QID: #${q.id}</span>
            </div>
            <h4 style="margin-top: 8px;">${idx + 1}. ${escapeHtml(q.question)}</h4>
            <div class="qbank-opts">${optsHTML}</div>
            <div class="subtext"><i class="fa-solid fa-lightbulb text-amber"></i> ${escapeHtml(q.explanation || 'No explanation.')}</div>
        `;
        container.appendChild(item);
    });
}

// --- 13. FLASHCARDS & ANALYTICS ---
function initFlashcards() {
    document.querySelectorAll('.category-pills .pill-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-pills .pill-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderFlashcards(e.currentTarget.getAttribute('data-fc-category'));
        });
    });
}

function renderFlashcards(category = 'All') {
    const grid = document.getElementById('flashcardsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = category === 'All' ? state.flashcards : state.flashcards.filter(f => f.category === category);

    filtered.forEach(card => {
        const fc = document.createElement('div');
        fc.className = 'flashcard';
        fc.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <h4>${escapeHtml(card.term)}</h4>
                    <span>Click to reveal definition / formula <i class="fa-solid fa-rotate"></i></span>
                </div>
                <div class="flashcard-back">
                    <p>${escapeHtml(card.definition)}</p>
                </div>
            </div>
        `;
        fc.addEventListener('click', () => {
            fc.classList.toggle('flipped');
        });
        grid.appendChild(fc);
    });
}

function renderAnalytics() {
    const mathStats = state.userStats.subjectStats["Mathematics"] || { attempted: 0, correct: 0 };
    const englishStats = state.userStats.subjectStats["English"] || { attempted: 0, correct: 0 };
    const csStats = state.userStats.subjectStats["Computer & IT"] || { attempted: 0, correct: 0 };

    const getAcc = (s) => s.attempted > 0 ? Math.round((s.correct / s.attempted) * 100) : 0;

    const mathAcc = getAcc(mathStats);
    const engAcc = getAcc(englishStats);
    const csAcc = getAcc(csStats);

    document.getElementById('mathAccuracyText').textContent = `${mathAcc}% (${mathStats.correct}/${mathStats.attempted})`;
    document.getElementById('mathAnalyticsBar').style.width = `${mathAcc}%`;

    document.getElementById('englishAccuracyText').textContent = `${engAcc}% (${englishStats.correct}/${englishStats.attempted})`;
    document.getElementById('englishAnalyticsBar').style.width = `${engAcc}%`;

    document.getElementById('csAccuracyText').textContent = `${csAcc}% (${csStats.correct}/${csStats.attempted})`;
    document.getElementById('csAnalyticsBar').style.width = `${csAcc}%`;

    const overallAcc = state.userStats.answered > 0 ? Math.round((state.userStats.correct / state.userStats.answered) * 100) : 0;
    document.getElementById('readinessScoreVal').textContent = `${overallAcc}%`;

    const feedbackEl = document.getElementById('readinessFeedbackText');
    if (state.userStats.answered < 10) {
        feedbackEl.textContent = "Attempt more questions to generate your university admission readiness rating.";
    } else if (overallAcc >= 80) {
        feedbackEl.textContent = "Outstanding preparation! High probability of securing scholarship rank in TU/KU/PU.";
    } else if (overallAcc >= 60) {
        feedbackEl.textContent = "Good progress! Focus on weak subjects to boost accuracy above 80%.";
    } else {
        feedbackEl.textContent = "Needs more revision. Practice university-specific modules regularly.";
    }
}

function updateUI() {
    document.getElementById('totalQuestionsCount').textContent = state.questions.length;
    document.getElementById('answeredCount').textContent = state.userStats.answered;
    
    const accuracy = state.userStats.answered > 0 ? Math.round((state.userStats.correct / state.userStats.answered) * 100) : 0;
    document.getElementById('accuracyRate').textContent = `${accuracy}%`;
    document.getElementById('mockExamsCompleted').textContent = state.userStats.mockExamsDone;

    document.getElementById('userStreak').textContent = `${state.userStats.streak} Day Streak`;
    document.getElementById('userTotalScore').textContent = `${state.userStats.xp} XP`;
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
        success: '<i class="fa-solid fa-circle-check text-emerald"></i>',
        error: '<i class="fa-solid fa-circle-xmark text-rose"></i>',
        info: '<i class="fa-solid fa-circle-info text-indigo"></i>'
    };

    toast.innerHTML = `${icons[type] || ''} <span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
