/* ==========================================================================
   BCA PrepMaster - Core Engine (Nepal Universities Entrance & Admin Portal)
   ========================================================================== */

// --- 1. DEFAULT COMPREHENSIVE QUESTION BANK ---
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
        subject: "Mathematics",
        question: "If 6 is subtracted from the cube of a number and the result is 21, what is the number?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "x³ - 6 = 21 => x³ = 27 => x = ∛27 = 3."
    },
    {
        id: 1016,
        univ: "TU",
        subject: "Mathematics",
        question: "If the product of two consecutive even numbers is 288, what are the numbers?",
        options: ["14, 12", "14, 16", "16, 18", "22, 24"],
        correct: 2,
        explanation: "16 * 18 = 288."
    },
    {
        id: 1017,
        univ: "TU",
        subject: "Mathematics",
        question: "If 6p + 6q = 36, what is the average value of p and q?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "6(p + q) = 36 => p + q = 6. Average = (p + q) / 2 = 6 / 2 = 3."
    },
    {
        id: 1018,
        univ: "TU",
        subject: "Mathematics",
        question: "What is the slope of the line 2x - 4y = 9?",
        options: ["1", "1/2", "2", "3"],
        correct: 1,
        explanation: "4y = 2x - 9 => y = (1/2)x - (9/4). Slope m = 1/2."
    },
    {
        id: 1019,
        univ: "TU",
        subject: "Computer & IT",
        question: "When did the new constitution of Nepal 'Nepal Ko Sambidhan' come into effect?",
        options: ["2072 Ashoj 4", "2072 Ashoj 3", "2072 Ashoj 2", "2072 Ashoj 1"],
        correct: 1,
        explanation: "The Constitution of Nepal was promulgated on 2072 Ashoj 3 (September 20, 2015)."
    },
    {
        id: 1020,
        univ: "TU",
        subject: "Computer & IT",
        question: "Who is known as the 'Father of Computer'?",
        options: ["Charles Babbage", "Bill Gates", "Mark Zuckerberg", "John von Neumann"],
        correct: 0,
        explanation: "Charles Babbage conceptualized and invented the first mechanical computer (Analytical Engine)."
    },
    {
        id: 1021,
        univ: "TU",
        subject: "Computer & IT",
        question: "Which of the following is NOT an output device?",
        options: ["OCR", "Plotter", "Monitor", "Printer"],
        correct: 0,
        explanation: "OCR (Optical Character Reader) is an input device used to convert scanned text into machine-encoded text."
    },
    {
        id: 1022,
        univ: "TU",
        subject: "Computer & IT",
        question: "How many bits are equal to one Byte?",
        options: ["4", "16", "8", "32"],
        correct: 2,
        explanation: "1 Byte = 8 bits."
    },
    {
        id: 1023,
        univ: "TU",
        subject: "Computer & IT",
        question: "In computer terminology, what does 'OS' stand for?",
        options: ["Order Significance", "Open Software", "Operating System", "Optical Sensor"],
        correct: 2,
        explanation: "OS stands for Operating System."
    },
    {
        id: 1024,
        univ: "TU",
        subject: "Computer & IT",
        question: "Which of the following is NOT a part of the internet?",
        options: ["WWW", "E-mail", "CDROM", "HTTP"],
        correct: 2,
        explanation: "CDROM is an offline physical optical storage media, not part of internet protocols."
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
        question: "Evaluate the limit: lim (x -> 0) [sin(3x) / x]",
        options: ["0", "1", "3", "Undefined"],
        correct: 2,
        explanation: "Using the standard limit lim(θ->0) sin(kθ)/θ = k, lim (x->0) sin(3x)/x = 3."
    },
    {
        id: 2004,
        univ: "KU",
        subject: "Computer & IT",
        question: "Which binary number is equivalent to decimal number 25?",
        options: ["11001", "10101", "11100", "10011"],
        correct: 0,
        explanation: "25 in binary is 16 + 8 + 1 = 11001₂."
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
        question: "Choose the correct antonym of 'BENEVOLENT':",
        options: ["Kind", "Malevolent", "Generous", "Sympathetic"],
        correct: 1,
        explanation: "Benevolent means well-meaning and kindly; malevolent means wishing evil to others."
    },

    // --- PURBANCHAL UNIVERSITY QUESTIONS ---
    {
        id: 4001,
        univ: "Purbanchal",
        subject: "Computer & IT",
        question: "What is the primary function of an Operating System?",
        options: [
            "Resource Management & Process Control",
            "Compiling source code to binary",
            "Designing database schemas",
            "Protecting hardware against physical damage"
        ],
        correct: 0,
        explanation: "An Operating System manages computer hardware, system memory, CPU cycles, and provides services for computer programs."
    },
    {
        id: 4002,
        univ: "Purbanchal",
        subject: "Mathematics",
        question: "If sin θ = 3/5, what is the value of cos θ (assuming θ is an acute angle)?",
        options: ["4/5", "3/4", "5/4", "5/3"],
        correct: 0,
        explanation: "Using Pythagorean identity: cos θ = √(1 - sin² θ) = √(1 - 9/25) = √(16/25) = 4/5."
    },
    {
        id: 4003,
        univ: "Purbanchal",
        subject: "English",
        question: "Find the synonym for 'METICULOUS':",
        options: ["Careless", "Thorough & Precise", "Rapid", "Obsolete"],
        correct: 1,
        explanation: "Meticulous means showing great attention to detail; very careful and precise."
    },
    {
        id: 4004,
        univ: "Purbanchal",
        subject: "Computer & IT",
        question: "Which layer of the OSI Model handles IP Addressing and Routing?",
        options: ["Data Link Layer", "Network Layer", "Transport Layer", "Application Layer"],
        correct: 1,
        explanation: "The Network Layer (Layer 3) handles IP addressing, packet forwarding, and routing."
    }
];

// --- 2. DEFAULT REVISION FLASHCARDS ---
const defaultFlashcards = [
    { id: 1, category: "CS", term: "OSI Model Layers", definition: "7 Layers: Physical, Data Link, Network, Transport, Session, Presentation, Application." },
    { id: 2, category: "CS", term: "CPU Components", definition: "ALU (Arithmetic Logic Unit), CU (Control Unit), and Registers." },
    { id: 3, category: "CS", term: "Stack Data Structure", definition: "LIFO (Last In First Out) system. Primary operations: Push and Pop." },
    { id: 4, category: "Math", term: "Pythagorean Identity", definition: "sin²(θ) + cos²(θ) = 1, 1 + tan²(θ) = sec²(θ)." },
    { id: 5, category: "Math", term: "Derivative of x^n", definition: "d/dx [x^n] = n · x^(n-1)." },
    { id: 6, category: "English", term: "Active vs Passive Voice", definition: "Active: Subject performs action. Passive: Object receives action (be + past participle)." }
];

// --- 3. UNIVERSITY PORTALS INFORMATION ---
const universityInfo = {
    TU: {
        name: "Tribhuvan University (TU)",
        fullTitle: "Faculty of Humanities and Social Sciences (FOHSS) BCA Entrance",
        marks: "100 Marks (100 MCQs)",
        duration: "2 Hours",
        breakdown: [
            "Mathematics (40 Marks - High School Algebra, Geometry, Sets)",
            "English (40 Marks - Grammar, Vocabulary, Comprehension)",
            "Computer & General Knowledge (20 Marks)"
        ],
        criteria: "Minimum D+ grade in all subjects of Grade 11 & 12 or CGPA 2.0.",
        tips: "Focus heavily on English grammar rules, basic calculus, and fundamental computer concepts."
    },
    KU: {
        name: "Kathmandu University (KU)",
        fullTitle: "KUCAT - School of Science / Engineering",
        marks: "100 Marks",
        duration: "1.5 Hours",
        breakdown: [
            "Advanced Mathematics & Logic (50 Marks)",
            "English Proficiency & Analytical Writing (30 Marks)",
            "Computer Science Concepts (20 Marks)"
        ],
        criteria: "Minimum 50% aggregate score or Grade C in +2 Science/Management with Math.",
        tips: "Practice logic puzzles, boolean matrix, logarithm properties, and calculus derivatives."
    },
    PU: {
        name: "Pokhara University (PU)",
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
    Purbanchal: {
        name: "Purbanchal University",
        fullTitle: "BCA / BIT Entrance Examination",
        marks: "100 Marks",
        duration: "2 Hours",
        breakdown: [
            "Mathematics (40 Marks)",
            "English (30 Marks)",
            "Computer Fundamentals & GK (30 Marks)"
        ],
        criteria: "Minimum Pass Grade (Second Division) in +2 / Intermediate level.",
        tips: "Revise IT fundamentals, basic matrix operations, and active/passive grammar."
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

// --- 4. GLOBAL APP STATE ---
let state = {
    questions: [],
    flashcards: [],
    currentView: 'dashboard',
    theme: 'light',
    isAdmin: false, // Default role: Student (Admin features hidden)
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

// --- 5. APP INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadStateFromStorage();
    initNavigation();
    initThemeToggle();
    initAdminModule();
    initUniversityPortals();
    initPracticeMode();
    initMockExamMode();
    initImportModule();
    initQuestionBank();
    initFlashcards();
    initGlobalSearch();
    
    // Initial display renders
    filterPracticeQuestions();
    renderQuestionBank();
    renderFlashcards();
    updateUI();
    updateAdminUI();
});

function loadStateFromStorage() {
    const savedTheme = localStorage.getItem('bca_theme') || 'light';
    setTheme(savedTheme);

    const savedQuestions = localStorage.getItem('bca_questions');
    if (savedQuestions) {
        try {
            const parsed = JSON.parse(savedQuestions);
            if (Array.isArray(parsed) && parsed.length > 0) {
                state.questions = parsed;
            } else {
                state.questions = [...defaultQuestions];
            }
        } catch (e) {
            state.questions = [...defaultQuestions];
        }
    } else {
        state.questions = [...defaultQuestions];
    }

    // Ensure all questions have univ property
    state.questions.forEach((q, idx) => {
        if (!q.univ) q.univ = "TU";
        if (!q.id) q.id = 1000 + idx;
    });

    const savedStats = localStorage.getItem('bca_user_stats');
    if (savedStats) {
        try {
            state.userStats = { ...state.userStats, ...JSON.parse(savedStats) };
        } catch (e) {}
    }

    state.flashcards = [...defaultFlashcards];

    const savedAdmin = localStorage.getItem('bca_is_admin');
    state.isAdmin = (savedAdmin === 'true');
}

function saveStateToStorage() {
    localStorage.setItem('bca_questions', JSON.stringify(state.questions));
    localStorage.setItem('bca_user_stats', JSON.stringify(state.userStats));
    localStorage.setItem('bca_theme', state.theme);
    localStorage.setItem('bca_is_admin', state.isAdmin ? 'true' : 'false');
}

// --- 6. THEME TOGGLE ENGINE ---
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;
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
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebar = document.getElementById('sidebar');

    function openMobileSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeMobileSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeMobileSidebar);

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetView = item.getAttribute('data-view');
            switchView(targetView);
            closeMobileSidebar();
        });
    });

    document.getElementById('dashGoUniversitiesBtn')?.addEventListener('click', () => switchView('universities'));
    document.getElementById('dashImportFileBtn')?.addEventListener('click', () => switchView('import'));
    document.getElementById('dashGoToImportBtn')?.addEventListener('click', () => switchView('import'));
    document.getElementById('quickTestBtn')?.addEventListener('click', () => switchView('practice'));

    document.querySelectorAll('.start-univ-exam-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const univ = e.currentTarget.getAttribute('data-univ');
            const selectEl = document.getElementById('mockUnivTargetSelect');
            if (selectEl) selectEl.value = univ;
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
        dashboard: { title: "Dashboard", sub: "Select your target Nepal University entrance session." },
        universities: { title: "University Portals", sub: "Explore official syllabus, criteria & entrance formats for TU, KU, & PU." },
        practice: { title: "Quick Practice Quiz", sub: "Sharpen your knowledge with instant subject questions & solutions." },
        mocktest: { title: "University Mock Exams", sub: "Simulate authentic timed entrance examinations." },
        questionbank: { title: "Interactive Question Bank", sub: "Browse, filter, and search through all entrance questions." },
        flashcards: { title: "Revision Flashcards", sub: "Flip cards for key concepts, computer terms & math formulas." },
        import: { title: "Import / Add Questions (Admin)", sub: "Upload JSON/TXT files or paste question text directly." },
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

// --- 8. ADMIN ROLE & MODAL MANAGEMENT ---
function initAdminModule() {
    const adminToggleBtn = document.getElementById('adminToggleBtn');
    const adminLoginModal = document.getElementById('adminLoginModal');
    const closeAdminLoginModal = document.getElementById('closeAdminLoginModal');
    const cancelAdminLoginBtn = document.getElementById('cancelAdminLoginBtn');
    const submitAdminLoginBtn = document.getElementById('submitAdminLoginBtn');
    const adminPasscodeInput = document.getElementById('adminPasscodeInput');

    // Admin Question Modal elements
    const adminQbankBar = document.getElementById('adminQbankBar');
    const adminAddQBtn = document.getElementById('adminAddQBtn');
    const adminQuestionModal = document.getElementById('adminQuestionModal');
    const closeAdminQModal = document.getElementById('closeAdminQModal');
    const cancelAdminQBtn = document.getElementById('cancelAdminQBtn');
    const saveAdminQBtn = document.getElementById('saveAdminQBtn');

    if (adminToggleBtn) {
        adminToggleBtn.addEventListener('click', () => {
            if (state.isAdmin) {
                // Logout from admin
                state.isAdmin = false;
                saveStateToStorage();
                updateAdminUI();
                showToast("Switched back to Student Mode.", "info");
                if (state.currentView === 'import') switchView('dashboard');
            } else {
                // Open login modal
                adminPasscodeInput.value = '';
                adminLoginModal.classList.remove('hidden');
                adminPasscodeInput.focus();
            }
        });
    }

    const hideAdminLoginModal = () => adminLoginModal.classList.add('hidden');
    if (closeAdminLoginModal) closeAdminLoginModal.addEventListener('click', hideAdminLoginModal);
    if (cancelAdminLoginBtn) cancelAdminLoginBtn.addEventListener('click', hideAdminLoginModal);

    if (submitAdminLoginBtn) {
        submitAdminLoginBtn.addEventListener('click', () => {
            const pwd = adminPasscodeInput.value.trim();
            if (pwd === 'admin123' || pwd === 'admin') {
                state.isAdmin = true;
                saveStateToStorage();
                updateAdminUI();
                hideAdminLoginModal();
                showToast("Admin Mode Unlocked! You can now add, edit, and manage questions.", "success");
            } else {
                showToast("Incorrect passcode! Use default passcode 'admin123'", "error");
            }
        });
    }

    if (adminPasscodeInput) {
        adminPasscodeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') submitAdminLoginBtn.click();
        });
    }

    // Question Add/Edit Modal Handlers
    if (adminAddQBtn) {
        adminAddQBtn.addEventListener('click', () => openAdminQModal());
    }

    const hideAdminQModal = () => adminQuestionModal.classList.add('hidden');
    if (closeAdminQModal) closeAdminQModal.addEventListener('click', hideAdminQModal);
    if (cancelAdminQBtn) cancelAdminQBtn.addEventListener('click', hideAdminQModal);

    if (saveAdminQBtn) {
        saveAdminQBtn.addEventListener('click', (e) => {
            e.preventDefault();
            saveAdminQuestionForm();
        });
    }
}

function updateAdminUI() {
    const adminToggleBtn = document.getElementById('adminToggleBtn');
    const adminToggleIcon = document.getElementById('adminToggleIcon');
    const adminToggleText = document.getElementById('adminToggleText');
    const adminElements = document.querySelectorAll('.admin-only-element');
    const adminNavs = document.querySelectorAll('.admin-only-nav');

    if (state.isAdmin) {
        if (adminToggleBtn) adminToggleBtn.classList.add('active-admin');
        if (adminToggleIcon) adminToggleIcon.className = "fa-solid fa-user-shield text-gold";
        if (adminToggleText) adminToggleText.textContent = "Admin Active (Exit)";

        adminElements.forEach(el => el.classList.remove('hidden'));
        adminNavs.forEach(nav => nav.classList.remove('hidden'));
    } else {
        if (adminToggleBtn) adminToggleBtn.classList.remove('active-admin');
        if (adminToggleIcon) adminToggleIcon.className = "fa-solid fa-lock";
        if (adminToggleText) adminToggleText.textContent = "Admin Mode";

        adminElements.forEach(el => el.classList.add('hidden'));
        adminNavs.forEach(nav => nav.classList.add('hidden'));
    }

    renderQuestionBank();
}

function openAdminQModal(questionObj = null) {
    const modal = document.getElementById('adminQuestionModal');
    const title = document.getElementById('adminQModalTitle');
    const editIdInput = document.getElementById('editQuestionId');
    const univInput = document.getElementById('qUnivInput');
    const subjectInput = document.getElementById('qSubjectInput');
    const textInput = document.getElementById('qTextInput');
    const optA = document.getElementById('optA');
    const optB = document.getElementById('optB');
    const optC = document.getElementById('optC');
    const optD = document.getElementById('optD');
    const correctSelect = document.getElementById('correctOptSelect');
    const expInput = document.getElementById('qExplanationInput');

    if (questionObj) {
        title.innerHTML = `<i class="fa-solid fa-pen-to-square text-emerald"></i> Edit Question (ID #${questionObj.id})`;
        editIdInput.value = questionObj.id;
        univInput.value = questionObj.univ || 'TU';
        subjectInput.value = questionObj.subject || 'English';
        textInput.value = questionObj.question;
        optA.value = questionObj.options[0] || '';
        optB.value = questionObj.options[1] || '';
        optC.value = questionObj.options[2] || '';
        optD.value = questionObj.options[3] || '';
        correctSelect.value = questionObj.correct !== undefined ? questionObj.correct : 0;
        expInput.value = questionObj.explanation || '';
    } else {
        title.innerHTML = `<i class="fa-solid fa-plus-circle text-emerald"></i> Add New Entrance Question`;
        editIdInput.value = '';
        document.getElementById('adminQForm').reset();
    }

    modal.classList.remove('hidden');
}

function saveAdminQuestionForm() {
    const editId = document.getElementById('editQuestionId').value;
    const univ = document.getElementById('qUnivInput').value;
    const subject = document.getElementById('qSubjectInput').value;
    const questionText = document.getElementById('qTextInput').value.trim();
    const optA = document.getElementById('optA').value.trim();
    const optB = document.getElementById('optB').value.trim();
    const optC = document.getElementById('optC').value.trim();
    const optD = document.getElementById('optD').value.trim();
    const correct = parseInt(document.getElementById('correctOptSelect').value, 10);
    const explanation = document.getElementById('qExplanationInput').value.trim();

    if (!questionText || !optA || !optB || !optC || !optD) {
        showToast("Please fill in all question fields and options.", "error");
        return;
    }

    const qData = {
        univ: univ,
        subject: subject,
        question: questionText,
        options: [optA, optB, optC, optD],
        correct: correct,
        explanation: explanation || "Official answer key."
    };

    if (editId) {
        // Edit existing question
        const qIndex = state.questions.findIndex(q => q.id == editId);
        if (qIndex !== -1) {
            state.questions[qIndex] = { ...state.questions[qIndex], ...qData };
            showToast(`Question #${editId} updated successfully!`, "success");
        }
    } else {
        // Create new question
        qData.id = Date.now();
        state.questions.unshift(qData);
        showToast("New question added to Question Bank!", "success");
    }

    saveStateToStorage();
    document.getElementById('adminQuestionModal').classList.add('hidden');
    
    filterPracticeQuestions();
    renderQuestionBank();
    updateUI();
}

function deleteQuestion(qId) {
    if (!confirm("Are you sure you want to delete this question?")) return;
    state.questions = state.questions.filter(q => q.id != qId);
    saveStateToStorage();
    filterPracticeQuestions();
    renderQuestionBank();
    updateUI();
    showToast("Question deleted from Question Bank.", "info");
}

// --- 9. UNIVERSITY PORTAL VIEW ENGINE ---
function initUniversityPortals() {
    const tabs = document.querySelectorAll('.univ-tabs .univ-tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderUniversityPortal(e.currentTarget.getAttribute('data-tab-univ'));
        });
    });
}

function renderUniversityPortal(univKey) {
    const container = document.getElementById('univPortalContent');
    if (!container) return;

    const info = universityInfo[univKey] || universityInfo.TU;

    container.innerHTML = `
        <div class="univ-portal-card">
            <div class="portal-head">
                <div class="univ-logo-circle ${univKey.toLowerCase()}-bg">${univKey.slice(0, 2)}</div>
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

            <div style="display: flex; gap: 16px; margin-top: 16px;">
                <button class="btn btn-primary btn-lg" onclick="startUnivExamFromPortal('${univKey}')">
                    <i class="fa-solid fa-play"></i> Start ${univKey} Entrance Mock Test
                </button>
            </div>
        </div>
    `;
}

window.startUnivExamFromPortal = function(univKey) {
    const selectEl = document.getElementById('mockUnivTargetSelect');
    if (selectEl) selectEl.value = univKey;
    switchView('mocktest');
};

// --- 10. PRACTICE QUIZ ENGINE ---
function initPracticeMode() {
    const univSelect = document.getElementById('practiceUnivSelect');
    const subjectSelect = document.getElementById('practiceSubjectSelect');
    const restartBtn = document.getElementById('restartPracticeBtn');
    const prevBtn = document.getElementById('prevQBtn');
    const nextBtn = document.getElementById('nextQBtn');

    if (univSelect) univSelect.addEventListener('change', filterPracticeQuestions);
    if (subjectSelect) subjectSelect.addEventListener('change', filterPracticeQuestions);
    if (restartBtn) restartBtn.addEventListener('click', filterPracticeQuestions);

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (state.practice.currentIndex > 0) {
                state.practice.currentIndex--;
                renderPracticeQuestion();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (state.practice.currentIndex < state.practice.filteredQuestions.length - 1) {
                state.practice.currentIndex++;
                renderPracticeQuestion();
            } else {
                showToast("Reached end of practice question set!", "success");
            }
        });
    }
}

function filterPracticeQuestions() {
    const univSelect = document.getElementById('practiceUnivSelect');
    const subjectSelect = document.getElementById('practiceSubjectSelect');

    const selectedUniv = univSelect ? univSelect.value : 'All';
    const selectedSubj = subjectSelect ? subjectSelect.value : 'All';

    state.practice.filteredQuestions = state.questions.filter(q => {
        const qUniv = q.univ || 'TU';
        const matchesUniv = (selectedUniv === 'All') || (qUniv.toUpperCase() === selectedUniv.toUpperCase());
        const matchesSubj = (selectedSubj === 'All') || (q.subject && q.subject.toUpperCase() === selectedSubj.toUpperCase());
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
    const optionsContainer = document.getElementById('optionsContainer');
    const questionTextEl = document.getElementById('questionText');

    if (!questionTextEl || !optionsContainer) return;

    if (!qList || qList.length === 0) {
        questionTextEl.textContent = "No questions available for this filter.";
        optionsContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 20px;">
                <button class="btn btn-primary" onclick="resetPracticeFilters()">Reset Filters</button>
            </div>
        `;
        return;
    }

    const q = qList[index];
    state.practice.selectedOption = null;

    document.getElementById('qUnivBadge').textContent = (q.univ ? `${q.univ} Pattern` : "Nepal Pattern");
    document.getElementById('qSubjectBadge').textContent = q.subject || "General";
    document.getElementById('qIndexText').textContent = `Question ${index + 1} of ${qList.length}`;
    questionTextEl.textContent = q.question;

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

    const expBox = document.getElementById('explanationBox');
    if (expBox) expBox.classList.add('hidden');
    const expText = document.getElementById('explanationText');
    if (expText) expText.textContent = q.explanation || "No detailed explanation provided.";

    const prevBtn = document.getElementById('prevQBtn');
    if (prevBtn) prevBtn.disabled = (index === 0);
}

window.resetPracticeFilters = function() {
    document.getElementById('practiceUnivSelect').value = 'All';
    document.getElementById('practiceSubjectSelect').value = 'All';
    filterPracticeQuestions();
};

function handleOptionClick(optIndex, question, btnElement) {
    if (state.practice.selectedOption !== null) return;

    state.practice.selectedOption = optIndex;
    const allOptBtns = document.querySelectorAll('#optionsContainer .option-btn');
    const isCorrect = (optIndex === question.correct);

    state.userStats.answered++;
    const subjKey = question.subject || "Computer & IT";
    if (!state.userStats.subjectStats[subjKey]) {
        state.userStats.subjectStats[subjKey] = { attempted: 0, correct: 0 };
    }
    state.userStats.subjectStats[subjKey].attempted++;

    if (isCorrect) {
        btnElement.classList.add('correct');
        state.userStats.correct++;
        state.userStats.xp += 10;
        state.userStats.subjectStats[subjKey].correct++;
        showToast("Correct Answer! +10 XP", "success");
    } else {
        btnElement.classList.add('wrong');
        if (allOptBtns[question.correct]) {
            allOptBtns[question.correct].classList.add('correct');
        }
        showToast("Incorrect answer", "error");
    }

    allOptBtns.forEach(b => b.classList.add('disabled'));
    const expBox = document.getElementById('explanationBox');
    if (expBox) expBox.classList.remove('hidden');

    saveStateToStorage();
    updateUI();
}

// --- 11. UNIVERSITY MOCK EXAM ENGINE ---
function initMockExamMode() {
    const startBtn = document.getElementById('startFullMockExamBtn');
    const submitBtn = document.getElementById('submitExamEarlyBtn');
    const retakeBtn = document.getElementById('retakeMockBtn');

    if (startBtn) startBtn.addEventListener('click', startMockExam);
    if (submitBtn) submitBtn.addEventListener('click', submitMockExam);
    if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
            document.getElementById('mockResultCard').classList.add('hidden');
            document.getElementById('mockWelcomeCard').classList.remove('hidden');
        });
    }

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

    if (targetUniv === 'All') {
        state.mock.questions = [...state.questions];
    } else {
        const univQ = state.questions.filter(q => (q.univ || 'TU').toUpperCase() === targetUniv.toUpperCase());
        state.mock.questions = univQ.length > 0 ? univQ : [...state.questions];
    }

    state.mock.currentIndex = 0;
    state.mock.userAnswers = {};
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
    const timerEl = document.getElementById('mockTimerDisplay');
    if (timerEl) timerEl.textContent = `${format(hours)}:${format(mins)}:${format(secs)}`;
}

function renderMockPalette() {
    const grid = document.getElementById('paletteGrid');
    if (!grid) return;
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

// --- 12. FILE IMPORT ENGINE (ADMIN ONLY) ---
function initImportModule() {
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');
    const parseRawBtn = document.getElementById('parseRawTextBtn');
    const rawTextArea = document.getElementById('rawTextImport');

    if (dropZone) {
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
    }

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) processImportFile(e.target.files[0]);
        });
    }

    if (parseRawBtn) {
        parseRawBtn.addEventListener('click', () => {
            const rawText = rawTextArea.value.trim();
            if (!rawText) {
                showImportAlert("Please paste text containing questions first.", "error");
                return;
            }
            parseRawTextQuestions(rawText);
        });
    }
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
    state.questions = [...newQuestions, ...state.questions];
    saveStateToStorage();
    filterPracticeQuestions();
    renderQuestionBank();
    updateUI();
}

function showImportAlert(msg, type) {
    const alertBox = document.getElementById('importStatusAlert');
    if (!alertBox) return;
    alertBox.className = `status-alert ${type}`;
    alertBox.textContent = msg;
    alertBox.classList.remove('hidden');
}

// --- 13. QUESTION BANK ENGINE ---
function initQuestionBank() {
    document.getElementById('qbankSearchInput')?.addEventListener('input', renderQuestionBank);
    document.getElementById('qbankSubjectFilter')?.addEventListener('change', renderQuestionBank);
}

function renderQuestionBank() {
    const container = document.getElementById('qbankListContainer');
    if (!container) return;

    const query = document.getElementById('qbankSearchInput')?.value.toLowerCase().trim() || '';
    const subjFilter = document.getElementById('qbankSubjectFilter')?.value || 'All';

    let filtered = state.questions.filter(q => {
        const matchesQuery = q.question.toLowerCase().includes(query) || 
                             (q.explanation && q.explanation.toLowerCase().includes(query)) ||
                             (q.univ && q.univ.toLowerCase().includes(query));
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

        const adminActionsHTML = state.isAdmin ? `
            <div class="qbank-actions-admin">
                <button class="btn btn-sm btn-outline" onclick="triggerEditQuestion(${q.id})">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                </button>
                <button class="btn btn-sm btn-rose" onclick="deleteQuestion(${q.id})">
                    <i class="fa-solid fa-trash"></i> Delete
                </button>
            </div>
        ` : '';

        item.innerHTML = `
            <div class="qbank-item-head">
                <div>
                    <span class="badge badge-univ">${q.univ || 'TU'}</span>
                    <span class="badge badge-subject">${q.subject || 'General'}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span class="subtext">QID: #${q.id}</span>
                    ${adminActionsHTML}
                </div>
            </div>
            <h4 style="margin-top: 8px;">${idx + 1}. ${escapeHtml(q.question)}</h4>
            <div class="qbank-opts">${optsHTML}</div>
            <div class="subtext" style="margin-top: 10px;"><i class="fa-solid fa-lightbulb text-amber"></i> ${escapeHtml(q.explanation || 'No detailed explanation provided.')}</div>
        `;
        container.appendChild(item);
    });
}

window.triggerEditQuestion = function(qId) {
    const q = state.questions.find(item => item.id == qId);
    if (q) openAdminQModal(q);
};

// --- 14. FLASHCARDS & ANALYTICS ---
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
    if (state.userStats.answered < 5) {
        feedbackEl.textContent = "Attempt more questions to generate your university admission readiness rating.";
    } else if (overallAcc >= 80) {
        feedbackEl.textContent = "Outstanding preparation! High probability of securing scholarship rank in TU/KU/PU.";
    } else if (overallAcc >= 60) {
        feedbackEl.textContent = "Good progress! Focus on weak subjects to boost accuracy above 80%.";
    } else {
        feedbackEl.textContent = "Needs more revision. Practice university-specific modules regularly.";
    }
}

// --- 15. GLOBAL HEADER SEARCH ---
function initGlobalSearch() {
    const searchInput = document.getElementById('globalSearchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (val.length > 0) {
            const qbankSearch = document.getElementById('qbankSearchInput');
            if (qbankSearch) qbankSearch.value = val;
            switchView('questionbank');
        }
    });
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
