/* ==========================================================================
   BCA PrepMaster - Core Engine (Nepal Universities Entrance & Admin Portal)
   ========================================================================== */

/**
 * Fisher-Yates (Knuth) Shuffle Algorithm
 * Ensures unbiased, uniform random distribution of elements across practice sessions.
 * @param {Array} array Input array
 * @returns {Array} Shuffled copy of the input array
 */
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- 1. DEFAULT COMPREHENSIVE & DIVERSE QUESTION BANK ---
// Sourced & adapted from TU, KU (KUCAT), PU, Purbanchal, GeeksforGeeks, IndiaBIX, SAT Math & Cambridge English
const defaultQuestions = [
    // === TRIBHUVAN UNIVERSITY (TU) MODEL & PAST QUESTIONS ===
    {
        id: 1001,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "The danger of volcanoes .............. not to be taken lightly.",
        options: ["must", "might", "has", "have"],
        correct: 0,
        explanation: "Must indicates strong obligation/necessity: 'must not be taken lightly'.",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1002,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Ramesh ................ here for the last seven years.",
        options: ["worked", "is working", "has worked", "works"],
        correct: 2,
        explanation: "Present perfect tense 'has worked' is used with time expressions like 'for the last seven years'.",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1003,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Supply the correct tag: 'Let us go, ..............'",
        options: ["shall we?", "will we?", "do we?", "don't we?"],
        correct: 0,
        explanation: "Imperative sentences beginning with 'Let us' take 'shall we?' as question tag.",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1004,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Two ladies had ............. hand bags stolen at the Kathmandu Mall.",
        options: ["its", "her", "their", "they"],
        correct: 2,
        explanation: "Plural subject 'Two ladies' requires plural possessive pronoun 'their'.",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1005,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Sincere people abide ............. their promise.",
        options: ["by", "of", "at", "on"],
        correct: 0,
        explanation: "The idiom is 'abide by' meaning to accept or act in accordance with a rule or promise.",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1006,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "The new manager will ............ his position on August 30.",
        options: ["take off", "take out", "take over", "take after"],
        correct: 2,
        explanation: "'Take over' means to assume control or responsibility of a position.",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1007,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct meaning of 'A Lion's share':",
        options: ["No share at all", "Greater share of a thing", "Very small part", "Little profit"],
        correct: 1,
        explanation: "'A lion's share' refers to the major or largest portion of something.",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1008,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Neither of them ............ a problem.",
        options: ["anticipate", "anticipates", "have anticipated", "are anticipating"],
        correct: 1,
        explanation: "'Neither' is singular and takes a singular verb ('anticipates').",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1009,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct passive voice: 'We celebrate Democracy Day on Falgun seven.'",
        options: [
            "Democracy Day is celebrated on Falgun seven by us.",
            "Democracy Day was celebrated on Falgun seven by us.",
            "Democracy Day has been celebrated on Falgun seven by us.",
            "Democracy Day had been celebrated on Falgun seven by us."
        ],
        correct: 0,
        explanation: "Simple present tense in active voice changes to 'is + past participle' in passive voice.",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1010,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "That which cannot be divided is called:",
        options: ["Indelible", "Indivisible", "Insoluble", "Indefensible"],
        correct: 1,
        explanation: "Indivisible means unable to be divided into separate parts.",
        source: "TU BCA Official Model Paper 2018"
    },
    {
        id: 1011,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "A number divided by 10 gives a remainder 7. If the same number is divided by 5, what will be the remainder?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "Number N = 10k + 7. Divided by 5: (10k + 7)/5 = 2k + 1 with remainder 2 (7 mod 5 = 2).",
        source: "TU BCA Past Entrance Exam"
    },
    {
        id: 1012,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which value of 'n' gives a negative result for (n² - 15)?",
        options: ["7", "5", "3", "4"],
        correct: 2,
        explanation: "For n = 3: 3² - 15 = 9 - 15 = -6 (negative).",
        source: "TU BCA Model Paper 2018"
    },
    {
        id: 1013,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If 'n' is an integer, which of the following expressions must always be even?",
        options: ["n(n + 1)", "n² + 1", "n(n + 2)", "n(n + 4)"],
        correct: 0,
        explanation: "n(n+1) is the product of two consecutive integers, one of which must be even. Hence, the product is always even.",
        source: "TU BCA Model Paper 2018"
    },
    {
        id: 1014,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the sum of the first five prime numbers?",
        options: ["18", "25", "26", "28"],
        correct: 3,
        explanation: "First 5 prime numbers: 2 + 3 + 5 + 7 + 11 = 28.",
        source: "TU BCA Past Entrance Exam"
    },
    {
        id: 1015,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If 6 is subtracted from the cube of a number and the result is 21, what is the number?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "x³ - 6 = 21 => x³ = 27 => x = ∛27 = 3.",
        source: "TU BCA Model Paper 2018"
    },
    {
        id: 1016,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the product of two consecutive even numbers is 288, what are the numbers?",
        options: ["14, 12", "14, 16", "16, 18", "22, 24"],
        correct: 2,
        explanation: "16 * 18 = 288.",
        source: "TU BCA Past Entrance Exam"
    },
    {
        id: 1017,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If 6p + 6q = 36, what is the average value of p and q?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "6(p + q) = 36 => p + q = 6. Average = (p + q) / 2 = 6 / 2 = 3.",
        source: "TU BCA Model Paper 2018"
    },
    {
        id: 1018,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the slope of the line 2x - 4y = 9?",
        options: ["1", "1/2", "2", "3"],
        correct: 1,
        explanation: "4y = 2x - 9 => y = (1/2)x - (9/4). Slope m = 1/2.",
        source: "TU BCA Model Paper 2018"
    },
    {
        id: 1019,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "When did the new constitution of Nepal 'Nepal Ko Sambidhan' come into effect?",
        options: ["2072 Ashoj 4", "2072 Ashoj 3", "2072 Ashoj 2", "2072 Ashoj 1"],
        correct: 1,
        explanation: "The Constitution of Nepal was promulgated on 2072 Ashoj 3 (September 20, 2015).",
        source: "Nepal GK Entrance Bank"
    },
    {
        id: 1020,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Who is known as the 'Father of Computer'?",
        options: ["Charles Babbage", "Bill Gates", "Mark Zuckerberg", "John von Neumann"],
        correct: 0,
        explanation: "Charles Babbage conceptualized and invented the first mechanical computer (Analytical Engine).",
        source: "Computer Pioneers History"
    },
    {
        id: 1021,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is NOT an output device?",
        options: ["OCR", "Plotter", "Monitor", "Printer"],
        correct: 0,
        explanation: "OCR (Optical Character Reader) is an input device used to convert scanned text into machine-encoded text.",
        source: "TU BCA Model Paper 2018"
    },
    {
        id: 1022,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "How many bits are equal to one Byte?",
        options: ["4", "16", "8", "32"],
        correct: 2,
        explanation: "1 Byte = 8 bits.",
        source: "TU BCA Model Paper 2018"
    },
    {
        id: 1023,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "In computer terminology, what does 'OS' stand for?",
        options: ["Order Significance", "Open Software", "Operating System", "Optical Sensor"],
        correct: 2,
        explanation: "OS stands for Operating System.",
        source: "TU BCA Model Paper 2018"
    },
    {
        id: 1024,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is NOT a part of the internet?",
        options: ["WWW", "E-mail", "CDROM", "HTTP"],
        correct: 2,
        explanation: "CDROM is an offline physical optical storage media, not part of internet protocols.",
        source: "TU BCA Model Paper 2018"
    },
    {
        id: 1025,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which computer was brought to Nepal for the first time for the 2028 BS Census?",
        options: ["IBM 1401", "IBM 1402", "ICL 2950", "Apple II"],
        correct: 0,
        explanation: "IBM 1401 (a second-generation mainframe computer) was leased by the Nepal government for the 2028 BS census.",
        source: "Nepal IT History Archives"
    },

    // === KATHMANDU UNIVERSITY (KU) KUCAT PATTERN QUESTIONS ===
    {
        id: 2001,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "What is the derivative of f(x) = x · ln(x) with respect to x?",
        options: ["ln(x) + 1", "1/x", "ln(x)", "x + 1"],
        correct: 0,
        explanation: "Using Product Rule d/dx [u·v] = u'v + uv': (1)·ln(x) + x·(1/x) = ln(x) + 1.",
        source: "KUCAT Calculus Question Pool"
    },
    {
        id: 2002,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "In Boolean Algebra, what is the simplified form of expression A + A·B?",
        options: ["A", "B", "A + B", "A·B"],
        correct: 0,
        explanation: "By Absorption Law: A + A·B = A(1 + B) = A(1) = A.",
        source: "KUCAT Digital Logic Bank"
    },
    {
        id: 2003,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "Evaluate the limit: lim (x -> 0) [sin(3x) / x]",
        options: ["0", "1", "3", "Undefined"],
        correct: 2,
        explanation: "Using the standard limit lim(θ->0) sin(kθ)/θ = k, lim (x->0) sin(3x)/x = 3.",
        source: "KUCAT Mathematics Pool"
    },
    {
        id: 2004,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which binary number is equivalent to decimal number 25?",
        options: ["11001", "10101", "11100", "10011"],
        correct: 0,
        explanation: "25 in binary is 16 + 8 + 1 = 11001₂.",
        source: "GeeksforGeeks CS Question Bank"
    },
    {
        id: 2005,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "What is the determinant of a 2x2 matrix | 4 3 ; 2 5 |?",
        options: ["14", "22", "10", "18"],
        correct: 0,
        explanation: "Determinant = (ad - bc) = (4 * 5) - (3 * 2) = 20 - 6 = 14.",
        source: "Linear Algebra Entrance Pool"
    },
    {
        id: 2006,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Hard",
        question: "What is the worst-case time complexity of QuickSort algorithm?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(1)"],
        correct: 1,
        explanation: "QuickSort worst case is O(n²) when the pivot chosen is consistently the smallest or largest element.",
        source: "Algorithms & Data Structures Bank"
    },
    {
        id: 2007,
        univ: "KU",
        subject: "English",
        difficulty: "Hard",
        question: "Select the word that is nearest in meaning to 'EPHEMERAL':",
        options: ["Eternal", "Short-lived", "Substantial", "Mysterious"],
        correct: 1,
        explanation: "Ephemeral means lasting for a very short time; transient.",
        source: "SAT Verbal & KUCAT English"
    },
    {
        id: 2008,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "If log₁₀(x) = 3, what is the value of x?",
        options: ["30", "100", "1000", "3000"],
        correct: 2,
        explanation: "Logarithmic definition: log_b(a) = c => b^c = a. Thus 10³ = 1000.",
        source: "High School Algebra & Logarithms"
    },
    {
        id: 2009,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "In RDBMS, a table key that uniquely identifies each record and cannot contain NULL is called:",
        options: ["Foreign Key", "Candidate Key", "Primary Key", "Super Key"],
        correct: 2,
        explanation: "Primary Key uniquely identifies each tuple in a relational database table and cannot accept null values.",
        source: "Database Systems Question Bank"
    },
    {
        id: 2010,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If two fair dice are thrown simultaneously, what is the probability of getting a sum of 7?",
        options: ["1/12", "1/6", "1/4", "5/36"],
        correct: 1,
        explanation: "Favorable outcomes for sum=7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 outcomes. P = 6 / 36 = 1/6.",
        source: "Probability & Statistics Pool"
    },
    {
        id: 2011,
        univ: "KU",
        subject: "English",
        difficulty: "Hard",
        question: "Choose the correct sentence with proper conditional structure:",
        options: [
            "If I was rich, I will buy a mansion.",
            "If I were rich, I would buy a mansion.",
            "If I am rich, I would buy a mansion.",
            "If I had rich, I will buy a mansion."
        ],
        correct: 1,
        explanation: "Second conditional (hypothetical present/future): 'If + past subjunctive (were), would + base verb'.",
        source: "Cambridge Advanced Grammar"
    },

    // === POKHARA UNIVERSITY (PU) QUESTIONS ===
    {
        id: 3001,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which data structure uses the LIFO (Last In First Out) principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correct: 1,
        explanation: "Stack uses LIFO order where the last inserted element is removed first.",
        source: "Pokhara University BCA Model Set"
    },
    {
        id: 3002,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Find the mean of the first 10 natural numbers.",
        options: ["5", "5.5", "6", "10"],
        correct: 1,
        explanation: "Sum = n(n+1)/2 = 10(11)/2 = 55. Mean = 55 / 10 = 5.5.",
        source: "Pokhara University Entrance Pool"
    },
    {
        id: 3003,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct antonym of 'BENEVOLENT':",
        options: ["Kind", "Malevolent", "Generous", "Sympathetic"],
        correct: 1,
        explanation: "Benevolent means well-meaning and kindly; malevolent means wishing evil to others.",
        source: "GRE & PU Vocabulary Bank"
    },
    {
        id: 3004,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "What is the standard subnet mask for a Class C IP address?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
        correct: 2,
        explanation: "Class C network addresses use 24 bits for network ID: 255.255.255.0.",
        source: "Networking Fundamentals & PU"
    },
    {
        id: 3005,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the 5th term of the Arithmetic Progression (AP): 3, 7, 11, 15...?",
        options: ["17", "19", "21", "23"],
        correct: 1,
        explanation: "a = 3, d = 4. 5th term a₅ = a + 4d = 3 + 4(4) = 19.",
        source: "Sequences & Series Question Bank"
    },
    {
        id: 3006,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: 'He is proficient ........ computer programming.'",
        options: ["at", "in", "with", "for"],
        correct: 1,
        explanation: "The correct preposition after 'proficient' when referring to a domain or skill is 'in'.",
        source: "English Prepositions Bank"
    },
    {
        id: 3007,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which protocol is used for sending outgoing email messages across the internet?",
        options: ["POP3", "IMAP", "SMTP", "HTTP"],
        correct: 2,
        explanation: "SMTP (Simple Mail Transfer Protocol) is responsible for transferring and sending emails.",
        source: "Internet & Networking Protocols"
    },
    {
        id: 3008,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What are the roots of the quadratic equation x² - 5x + 6 = 0?",
        options: ["2 and 3", "-2 and -3", "1 and 6", "-1 and 6"],
        correct: 0,
        explanation: "(x - 2)(x - 3) = 0 => x = 2, 3.",
        source: "High School Algebra Bank"
    },

    // === PURBANCHAL UNIVERSITY QUESTIONS ===
    {
        id: 4001,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "What is the primary function of an Operating System?",
        options: [
            "Resource Management & Process Control",
            "Compiling source code to binary",
            "Designing database schemas",
            "Protecting hardware against physical damage"
        ],
        correct: 0,
        explanation: "An Operating System manages computer hardware, system memory, CPU cycles, and provides services for computer programs.",
        source: "Purbanchal Model Question Set"
    },
    {
        id: 4002,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If sin θ = 3/5, what is the value of cos θ (assuming θ is an acute angle)?",
        options: ["4/5", "3/4", "5/4", "5/3"],
        correct: 0,
        explanation: "Using Pythagorean identity: cos θ = √(1 - sin² θ) = √(1 - 9/25) = √(16/25) = 4/5.",
        source: "Purbanchal Entrance Papers"
    },
    {
        id: 4003,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Find the synonym for 'METICULOUS':",
        options: ["Careless", "Thorough & Precise", "Rapid", "Obsolete"],
        correct: 1,
        explanation: "Meticulous means showing great attention to detail; very careful and precise.",
        source: "Purbanchal English Section"
    },
    {
        id: 4004,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which layer of the OSI Model handles IP Addressing and Routing?",
        options: ["Data Link Layer", "Network Layer", "Transport Layer", "Application Layer"],
        correct: 1,
        explanation: "The Network Layer (Layer 3) handles IP addressing, packet forwarding, and routing.",
        source: "GeeksforGeeks & Purbanchal"
    },
    {
        id: 4005,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the distance between points P(1, 2) and Q(4, 6)?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "Distance d = √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5.",
        source: "Coordinate Geometry Entrance Bank"
    },

    // === LOGICAL REASONING & GENERAL KNOWLEDGE (APTIUTDE POOL) ===
    {
        id: 5001,
        univ: "TU",
        subject: "Logical Reasoning & GK",
        difficulty: "Medium",
        question: "Find the next number in the sequence: 2, 6, 12, 20, 30, ?",
        options: ["36", "40", "42", "48"],
        correct: 2,
        explanation: "Differences increase by 2: (+4, +6, +8, +10, +12). 30 + 12 = 42.",
        source: "IndiaBIX Logical Aptitude"
    },
    {
        id: 5002,
        univ: "KU",
        subject: "Logical Reasoning & GK",
        difficulty: "Easy",
        question: "If CAT is coded as 3120 in a numerical cipher, how is DOG coded?",
        options: ["4157", "41515", "3147", "5168"],
        correct: 0,
        explanation: "Letter positions: D=4, O=15, G=7 -> 4157.",
        source: "Mental Ability & Logical Test"
    },
    {
        id: 5003,
        univ: "PU",
        subject: "Logical Reasoning & GK",
        difficulty: "Medium",
        question: "Pointing to a photograph, a man said: 'He is the son of the only son of my grandfather.' How is the person in the photo related to the man?",
        options: ["Brother", "Father", "Uncle", "Cousin"],
        correct: 0,
        explanation: "Grandfather's only son is the man's father. The son of his father is himself or his brother. Given choices, Brother.",
        source: "Logical Reasoning Blood Relations"
    },
    {
        id: 5004,
        univ: "TU",
        subject: "Logical Reasoning & GK",
        difficulty: "Easy",
        question: "What is the angle between the hour hand and minute hand of a clock at 3:00?",
        options: ["45°", "60°", "90°", "120°"],
        correct: 2,
        explanation: "At 3:00, the minute hand points to 12 and the hour hand to 3, forming a quarter circle = 90°.",
        source: "Quantitative Reasoning Bank"
    },
    {
        id: 5005,
        univ: "KU",
        subject: "Logical Reasoning & GK",
        difficulty: "Easy",
        question: "Which of the following is the longest river in Nepal?",
        options: ["Koshi", "Gandaki", "Karnali", "Mahakali"],
        correct: 2,
        explanation: "Karnali (507 km within Nepal) is the longest river in Nepal.",
        source: "Nepal General Knowledge Pool"
    },
    {
        id: 5006,
        univ: "Purbanchal",
        subject: "Logical Reasoning & GK",
        difficulty: "Easy",
        question: "Doctor is related to Patient in the same way Teacher is related to ........",
        options: ["School", "Student", "Book", "Classroom"],
        correct: 1,
        explanation: "Doctor treats patients; teacher educates students.",
        source: "Analogy Reasoning Test"
    },

    // === ADDITIONAL HIGH-VALUE ADVANCED PRACTICE QUESTIONS ===
    {
        id: 6001,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which SQL command is used to remove all records from a table without deleting the table structure?",
        options: ["REMOVE", "DROP", "TRUNCATE", "ALTER"],
        correct: 2,
        explanation: "TRUNCATE removes all rows from a table quickly while keeping the table structure intact.",
        source: "W3Schools SQL Question Bank"
    },
    {
        id: 6002,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "What is the indefinite integral ∫ 2x dx?",
        options: ["x² + C", "2x² + C", "x + C", "2 + C"],
        correct: 0,
        explanation: "∫ 2x dx = 2 · (x²/2) + C = x² + C.",
        source: "Calculus Fundamentals"
    },
    {
        id: 6003,
        univ: "PU",
        subject: "English",
        difficulty: "Hard",
        question: "Choose the correct word: 'Scarcely had I entered the room ........ the phone rang.'",
        options: ["than", "when", "then", "before"],
        correct: 1,
        explanation: "'Scarcely... when' and 'Hardly... when' are standard correlative conjunction pairs.",
        source: "Advanced English Grammar Rules"
    },
    {
        id: 6004,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "What type of logic gate produces output 1 ONLY when both of its inputs are different (one 0 and one 1)?",
        options: ["AND Gate", "OR Gate", "XOR Gate", "NAND Gate"],
        correct: 2,
        explanation: "Exclusive-OR (XOR) gate outputs 1 when inputs differ, and 0 when inputs are identical.",
        source: "Digital Electronics Bank"
    },
    {
        id: 6005,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If set A has 10 elements, set B has 15 elements, and their intersection A ∩ B has 5 elements, how many elements are in A ∪ B?",
        options: ["20", "25", "15", "30"],
        correct: 0,
        explanation: "|A ∪ B| = |A| + |B| - |A ∩ B| = 10 + 15 - 5 = 20.",
        source: "Set Theory & Discrete Math"
    },
    {
        id: 6006,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Hard",
        question: "Which data structure is typically used to implement Breadth-First Search (BFS) graph traversal?",
        options: ["Stack", "Queue", "Priority Queue", "Binary Search Tree"],
        correct: 1,
        explanation: "BFS processes nodes level by level using a FIFO Queue.",
        source: "Graph Algorithms & GeeksforGeeks"
    },
    {
        id: 6007,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Select the correct article: 'He is ........ European scholar visiting Kathmandu.'",
        options: ["a", "an", "the", "no article"],
        correct: 0,
        explanation: "European starts with a consonant sound /juː/, so indefinite article 'a' is used ('a European').",
        source: "English Articles Rules"
    },
    {
        id: 6008,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the value of Permutation P(5, 2)?",
        options: ["10", "20", "60", "120"],
        correct: 1,
        explanation: "P(n, r) = n! / (n - r)! => 5! / 3! = 5 * 4 = 20.",
        source: "Combinatorics & Permutations Bank"
    },

// TU BCA 2018 Model Paper - Set I & Set II additions
    {
        id: 1101,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "They are as lucky as .............",
        options: ["we","our","ourselves","us"],
        correct: 0,
        explanation: "In formal English, a subject pronoun ('we') follows 'as...as' in comparison.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1102,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "There is someone in the room ............. I certainly heard a great noise.",
        options: ["and","but","for","so"],
        correct: 2,
        explanation: "'For' introduces a reason: the noise is the reason the speaker believes someone is there.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1103,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "She is ............. obedient student.",
        options: ["an","a","the","none of the above"],
        correct: 0,
        explanation: "'Obedient' begins with a vowel sound, so the indefinite article 'an' is used.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1104,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "I don't think I ............. be able to go.",
        options: ["will","should","can","could"],
        correct: 0,
        explanation: "'Will' expresses simple future intention: 'I don't think I will be able to go.'",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1105,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Which of the following words is an abstract noun?",
        options: ["desk","fear","class","needle"],
        correct: 1,
        explanation: "'Fear' is an idea/emotion (abstract noun); the others are concrete nouns.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1106,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Which of the following words does NOT have a suffix?",
        options: ["helpless","goodness","fearless","courage"],
        correct: 3,
        explanation: "Helpless (-less), goodness (-ness) and fearless (-less) have suffixes; 'courage' is a root word.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1107,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "The opposite meaning of 'accepted' is:",
        options: ["liked","noted","provided","rejected"],
        correct: 3,
        explanation: "'Rejected' is the opposite (antonym) of 'accepted'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1108,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the word nearest in meaning to 'emulate':",
        options: ["Imitate","Deny","Discuss","Reject"],
        correct: 0,
        explanation: "'Emulate' means to imitate or match the example of another.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1109,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct synonym for the underlined word: 'Raman is a versatile boy.'",
        options: ["bad","clumsy","gifted","lazy"],
        correct: 2,
        explanation: "'Versatile' means having many skills; 'gifted' is the closest synonym.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1110,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Select the correct antonym for 'segregation':",
        options: ["appreciation","integration","cohesion","co-ordination"],
        correct: 1,
        explanation: "'Segregation' (separation) is opposite to 'integration' (bringing together).",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1111,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Fill in the gap: 'The price of consumer goods ............. increasing.'",
        options: ["are","is","were","has been"],
        correct: 1,
        explanation: "The subject 'price' is singular, so the singular verb 'is' is correct.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1112,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Which of the following sentences is INCORRECT in terms of subject-verb agreement?",
        options: ["Each of the women owns her home.","All of the women own their own homes.","Here are two wrenches and a hammer.","Here is a hammer and two wrenches."],
        correct: 3,
        explanation: "With two subjects joined, the verb should be plural: 'Here are a hammer and two wrenches.'",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1113,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Which of the following sentences has the correct use of comma (,)?",
        options: ["June 27, 2018, is a day I will never forget.","Some people who go to school, enjoy the social life.","He was late for dinner, we decided to eat without him.","We were glad to see him, because he had brought gifts."],
        correct: 0,
        explanation: "Dates are written 'Month day, year,' with a comma after the year.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1114,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the past participle of the verb 'quit':",
        options: ["quited","quit","quitting","has quit"],
        correct: 1,
        explanation: "'Quit' is an irregular verb: quit - quit - quit.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1115,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct alternative: 'We spent a ............. evening together.'",
        options: ["quite","quit","quiet","quitter"],
        correct: 2,
        explanation: "'Quiet' (peaceful) fits the context; 'quite' is an adverb meaning 'very'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1116,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Which of the following words needs capitalization?",
        options: ["winter","ocean","jewish","university"],
        correct: 2,
        explanation: "'Jewish' is a proper adjective derived from a nationality and must be capitalized.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1117,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct preposition: 'He is involved ............. cheating.'",
        options: ["for","of","on","in"],
        correct: 3,
        explanation: "The correct expression is 'involved in cheating'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1118,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Select the correct preposition: 'He is coming here ............. six o'clock.'",
        options: ["upon","on","at","to"],
        correct: 2,
        explanation: "'At' is used for specific times: 'at six o'clock.'",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1119,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Select the correct meaning of the idiom 'In the good book of':",
        options: ["enjoying a pleasant moment","enjoying a favour of someone","possessing a good book for reading","purchasing a good book"],
        correct: 1,
        explanation: "'In the good books of someone' means being in someone's favour.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1120,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Fill in the gap: 'I am ............. tired to go any further.'",
        options: ["to","too","so","not"],
        correct: 1,
        explanation: "'Too + adjective + to-infinitive' shows excess: 'too tired to go'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1121,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Which is the correct indirect speech for: Hari says, 'I am very happy.'?",
        options: ["Hari says he is very happy.","Hari says he was very happy.","Hari said he is very happy.","Hari said he was very happy."],
        correct: 0,
        explanation: "With a present-tense reporting verb ('says'), the tense of the reported clause stays unchanged.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1122,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Select the interrogative sentence from the options below:",
        options: ["Shall I see you tomorrow?","He has studied English for a long time.","They won't believe you.","It will be dark soon."],
        correct: 0,
        explanation: "'Shall I see you tomorrow?' is the only question (interrogative) form.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1123,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Put the correct verb form: 'I ............. told you earlier if I had known.'",
        options: ["would","would have","had","should"],
        correct: 1,
        explanation: "Third conditional: 'would have + past participle' expresses an unreal past.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1124,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the right pronoun: 'If everybody does ............. part, the game should go smoothly.'",
        options: ["his","her","his or her","their"],
        correct: 2,
        explanation: "'Everybody' is singular; the formal inclusive pronoun 'his or her' is used.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1125,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Which of the following words is an adverb?",
        options: ["good","bad","well","melt"],
        correct: 2,
        explanation: "'Well' is the adverb form corresponding to the adjective 'good'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1126,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: Which of the following is the same in meaning as the word 'obliterate' used in the passage?",
        options: ["Wipe out","Wipe off","Very Literate","Remove"],
        correct: 0,
        explanation: "In the passage, 'obliterate disease' means to wipe out or destroy disease completely.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1127,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: Which option gives the reason for progress in genetic engineering?",
        options: ["Poor countries need genetic information.","It has become a popular subject.","Economically and scientifically advanced countries can provide infrastructure for such research.","Human beings are interrelated in heredity."],
        correct: 2,
        explanation: "The passage says advanced countries (USA, UK, Japan) provide the technology to reduce costs.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1128,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: According to the passage, the question of abortion is:",
        options: ["hotly debated","ignored","unanswered","undecided"],
        correct: 0,
        explanation: "The passage states the application of genetic info to deciding sex/abortion 'is now hotly debated on ethical lines'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1129,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: Which of the following is NOT true about genetic engineering?",
        options: ["Acquired ability to detect disorder in unborn babies.","Possibility of abuse.","Increased tendency to manipulate gene cells.","Acquired ability to manipulate tissue cells."],
        correct: 2,
        explanation: "The passage mentions manipulating tissue cells but not an 'increased tendency to manipulate gene cells'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1130,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: According to the author, the present state of knowledge about heredity has made geneticists:",
        options: ["reckless","optimistic","introspective","arrogant"],
        correct: 1,
        explanation: "The passage says scientists are 'optimistic' and hold out hope for future success.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1131,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If you save 1 paisa today, 2 paise next day, 4 paise the succeeding day and so on, what is the total saving at the end of a week?",
        options: ["127 paisa","64 paisa","256 paisa","128 paisa"],
        correct: 0,
        explanation: "Sum of a GP: 1+2+4+8+16+32+64 = 2^7 - 1 = 127 paisa.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1132,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the value of the sum of (n/n) for n = 1 to 10?",
        options: ["0","-1","1","10"],
        correct: 3,
        explanation: "n/n = 1 for every term; 10 terms give 1 × 10 = 10.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1133,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The total of the ages of A and B is in the ratio 3:5. If B is 8 years elder to A, what is the age of A?",
        options: ["12 yrs.","15 yrs.","18 yrs.","21 yrs."],
        correct: 0,
        explanation: "A = 3x, B = 5x, and 5x - 3x = 8 → x = 4, so A = 12 yrs.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1134,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If one root of the equation x² - 6x + c = 0 is 3, what is the value of c?",
        options: ["3","6","8","9"],
        correct: 3,
        explanation: "Substitute x = 3: 9 - 18 + c = 0 → c = 9.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1135,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which one of the following is true for the roots of the equation x² - 8x + 16 = 0?",
        options: ["imaginary & unequal","rational & unequal","real & equal","real & unequal"],
        correct: 2,
        explanation: "x² - 8x + 16 = (x - 4)², so the roots are real and equal (4, 4).",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1136,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If a matrix is of order 5 × 3, how many elements are in a single column?",
        options: ["5","3","4","15"],
        correct: 0,
        explanation: "A 5 × 3 matrix has 5 rows and 3 columns; each column contains 5 elements.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1137,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If x - 5 = 1, what is the value of x + 7?",
        options: ["5","7","8","13"],
        correct: 3,
        explanation: "x = 6, so x + 7 = 13.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1138,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If 5x + 13 = 31, what is the value of √(31 + 5x)?",
        options: ["5","6","7","8"],
        correct: 2,
        explanation: "5x = 18, so 31 + 5x = 49 and √49 = 7.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1139,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the correct value of 5³ / 5⁴?",
        options: ["5³","1/5","5⁴","4/5"],
        correct: 1,
        explanation: "5³ / 5⁴ = 5^(3-4) = 5⁻¹ = 1/5.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1140,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "If a^x = b, b^y = c and c^z = a, what is the value of xyz?",
        options: ["c","a","b","1"],
        correct: 3,
        explanation: "xyz = 1 (multiplying the three equations gives a^(xyz) = a).",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1141,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If p + q = r, what is the average value of p, q and r?",
        options: ["r/3","(p + q)/3","2r/3","r/2"],
        correct: 2,
        explanation: "Average = (p + q + r)/3 = (r + r)/3 = 2r/3.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1142,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which one of the following is correct for the acute angles of a right-angled triangle?",
        options: ["complementary","supplementary","adjacent","equal"],
        correct: 0,
        explanation: "The two acute angles of a right triangle add to 90°, so they are complementary.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1143,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "There are 60 students in a class. If 60% of them are girls, how many boys are in the class?",
        options: ["24","36","18","40"],
        correct: 0,
        explanation: "Boys = 40% of 60 = 24.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1144,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Last year Hari was 4 feet tall and this year he is 5 feet tall. What is the percent increase of his height?",
        options: ["10%","15%","20%","25%"],
        correct: 3,
        explanation: "Increase = 1 ft; 1/4 × 100 = 25%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1145,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the difference between 3/5 of 80 and 30% of 80?",
        options: ["12","18","24","20"],
        correct: 2,
        explanation: "3/5 of 80 = 48 and 30% of 80 = 24; difference = 24.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1146,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The cost of 6 pens is equal to the cost of 10 pencils. If 4 pencils cost Rs. 120, what is the cost of 4 pens?",
        options: ["100","200","300","400"],
        correct: 1,
        explanation: "1 pencil = Rs. 30, so 10 pencils = Rs. 300 = 6 pens → 1 pen = Rs. 50 → 4 pens = Rs. 200.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1147,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If the cost of 7 kg sugar is Rs. 210, how much sugar can be purchased for Rs. 330?",
        options: ["11kg","12kg","13kg","14kg"],
        correct: 0,
        explanation: "1 kg costs Rs. 30; Rs. 330 buys 11 kg.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1148,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Ganga can read 48 pages per hour. At this rate, how many pages can she read in 80 minutes?",
        options: ["60","72","48","64"],
        correct: 3,
        explanation: "48 × (80/60) = 48 × 4/3 = 64 pages.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1149,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "Two numbers are in the ratio 6:7 and their sum is 117. What are these numbers?",
        options: ["56, 58","63, 54","54, 63","48, 56"],
        correct: 2,
        explanation: "6x + 7x = 13x = 117 → x = 9 → numbers are 54 and 63.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1150,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If 5:7 = 15:x, what is the value of x?",
        options: ["18","21","24","35"],
        correct: 1,
        explanation: "5/7 = 15/x → x = (15 × 7)/5 = 21.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1151,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the cost price of 8 pens equals the selling price of 10 pens, what is the loss percentage?",
        options: ["20%","15%","10%","25%"],
        correct: 0,
        explanation: "CP/SP = 10/8 → loss = 2/10 = 20%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1152,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If a 20% discount is given on a computer book costing Rs. 300, what will be the selling price?",
        options: ["Rs. 240","Rs. 220","Rs. 260","Rs. 250"],
        correct: 0,
        explanation: "Selling price = 80% of 300 = Rs. 240.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1153,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "A watch is bought at Rs. 250 and sold at Rs. 300. What is the profit percentage?",
        options: ["10%","15%","20%","25%"],
        correct: 2,
        explanation: "Profit = Rs. 50; 50/250 × 100 = 20%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1154,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the population doubling time if the population growth rate is 2% per annum?",
        options: ["60 yrs.","50 yrs.","40 yrs.","30 yrs."],
        correct: 1,
        explanation: "Using simple interest: T = 100/R = 100/2 = 50 years.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1155,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the rate percent per annum at which a sum of money trebles itself in 25 years?",
        options: ["2%","4%","6%","8%"],
        correct: 3,
        explanation: "SI: R = 100 × (n - 1)/T = 100 × 2/25 = 8%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1156,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the cardinal number of the vowel set V = {a, e, i, o, u}?",
        options: ["4","5","6","7"],
        correct: 1,
        explanation: "The set has 5 elements, so its cardinal number is 5.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1157,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "What is the minimum value of n(P∩Q) when n(U) = 100, n(P) = 70 and n(Q) = 45?",
        options: ["15","55","30","45"],
        correct: 0,
        explanation: "n(P∩Q) ≥ n(P) + n(Q) - n(U) = 70 + 45 - 100 = 15.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1158,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which one of the following is true for a prime number?",
        options: ["no factors","only one factor","only two factors","more than two factors"],
        correct: 2,
        explanation: "A prime number has exactly two factors: 1 and itself.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1159,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which interval notation is correct for {x : 5 ≤ x ≤ 15}?",
        options: ["[5, ∞]","[∞, 15]","[6, 14]","[5, 15]"],
        correct: 3,
        explanation: "A closed interval including both 5 and 15 is written [5, 15].",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1160,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the value of x when it is multiplied by 6 and added to 3 times itself gives 63?",
        options: ["6","7","8","9"],
        correct: 1,
        explanation: "6x + 3x = 9x = 63 → x = 7.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1161,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the value of 2(5 + 5)?",
        options: ["20","25","10","60"],
        correct: 0,
        explanation: "2 × (5 + 5) = 2 × 10 = 20.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1162,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the number of seconds in 1⅓ hours?",
        options: ["1200 sec","2400 sec","3600 sec","4800 sec"],
        correct: 3,
        explanation: "4/3 hours × 3600 = 4800 seconds.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1163,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "In a kilometer race A beats B by 100 meters and B beats C by 150 meters. In the same race, by how many meters does A beat C?",
        options: ["150 m","100 m","250 m","200 m"],
        correct: 2,
        explanation: "A beats B by 100 m and B beats C by 150 m, so A beats C by 100 + 150 = 250 m (per the model key).",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1164,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The area of the 4 walls of a square room is 120 m². If the height is 5 m, what is the area of its floor?",
        options: ["26 m²","56 m²","25 m²","36 m²"],
        correct: 3,
        explanation: "4 × (side × 5) = 120 → side = 6 m → floor area = 36 m².",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1165,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the probability of death?",
        options: ["1","1/2","0","∞"],
        correct: 0,
        explanation: "Death is certain for everyone, so the probability is 1.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1166,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the chance that a pregnant lady gives birth on a Tuesday?",
        options: ["3/7","1/7","1","1/2"],
        correct: 1,
        explanation: "There are 7 equally likely days in a week, so the chance is 1/7.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1167,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If BACHELOR is written as 12345678, how will BCA be written?",
        options: ["123","432","147","132"],
        correct: 3,
        explanation: "B = 1, C = 3, A = 2, so BCA = 132.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1168,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "Which one of the following is the missing alphabet in the given table? (T Q N / P O S / M ? R)",
        options: ["L","U","S","V"],
        correct: 1,
        explanation: "With U: row sums become 51, 50, 52 (consecutive) and column sums 49, 51, 53 (consecutive odd numbers).",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1169,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Saru ranks 8th from the top and 20th from the bottom in her class. How many students are there in the classroom?",
        options: ["28","27","20","29"],
        correct: 1,
        explanation: "Total = 8 + 20 - 1 = 27 (Saru is counted twice).",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1170,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Find the value of x in the series: 1, 1, 2, 3, 5, 8, 13, x",
        options: ["21","22","23","20"],
        correct: 0,
        explanation: "Fibonacci series: each term is the sum of the previous two; 8 + 13 = 21.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1171,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "How many squares are there in the following figure?",
        options: ["13","14","15","16"],
        correct: 2,
        explanation: "The figure contains 9 small squares, 4 medium squares and 2 large squares = 15 squares total.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1172,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the value of cos 0°?",
        options: ["1/2","1/2","0","1"],
        correct: 3,
        explanation: "cos 0° = 1.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1173,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which one of the following disciplines is NOT awarded by the Nobel Prize?",
        options: ["Literature","Economics","Physics","Computer Science"],
        correct: 3,
        explanation: "There is no Nobel Prize in Computer Science.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1174,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which one of the following belongs to SSD?",
        options: ["RAM","ROM","Cache Memory","Mass Storage"],
        correct: 3,
        explanation: "SSD (Solid State Drive) is a mass/secondary storage device.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1175,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Who won the FIFA World Cup 2018 held in Russia?",
        options: ["England","Croatia","France","Germany"],
        correct: 2,
        explanation: "France defeated Croatia 4-2 in the 2018 final.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1176,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "What is the scientific name of human?",
        options: ["Rana Tigrina","Homosepian","Felis Catus","Rattus"],
        correct: 1,
        explanation: "Homo sapiens (written 'Homosepian' in the paper) is the scientific name of humans.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1177,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which one of the following is the deepest river of Nepal?",
        options: ["Karnali","Koshi","Mahakali","Gandaki"],
        correct: 0,
        explanation: "The Karnali is generally considered the deepest river of Nepal.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1178,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Who was the first prime minister of Nepal?",
        options: ["Janga Bahadur Rana","Matrika Prasad Koirala","Bhimsen Thapa","Mathabar Sing Thapa"],
        correct: 2,
        explanation: "Bhimsen Thapa is widely regarded as the first prime minister (Mukhtiyar) of Nepal.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1179,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Who is the writer of the Nepali novel 'Basain'?",
        options: ["Lil Bahadur Kshetri","Ramlal Joshi","Gopal Prasad Rimal","Lokendra Bahadur Chand"],
        correct: 0,
        explanation: "'Basain' was written by Lil Bahadur Kshetri.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1180,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "When did you ............. on the last stage of your journey?",
        options: ["set to","set out","set up","set off"],
        correct: 1,
        explanation: "'Set out' means to begin a journey.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1181,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Jenny always ............. when you least expected her.",
        options: ["showed up","shut up","showed off","shut down"],
        correct: 0,
        explanation: "'Show up' means to appear or arrive.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1182,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "It is a 14 hour flight, so it will give me a chance to ............. my reading.",
        options: ["catch up on","catch on","catch up with","catch out"],
        correct: 0,
        explanation: "'Catch up on' means to do something that has been delayed, like reading.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1183,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Mrs. MacDonald is having the old cottage .............",
        options: ["do for something","do without","do over","do with"],
        correct: 2,
        explanation: "'Do over' means to renovate or redecorate.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1184,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "The new commercial ............. very well.",
        options: ["gets away","gets across","gets about","gets along"],
        correct: 1,
        explanation: "'Get across' means to communicate a message effectively.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1185,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "I'm still trying to ............. a common cold.",
        options: ["shake off","shake up","shack up","show off"],
        correct: 0,
        explanation: "'Shake off' means to get rid of an illness.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1186,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Take up a brisk walk to ............. a good appetite.",
        options: ["work out","work up","wrap up","write off"],
        correct: 1,
        explanation: "'Work up an appetite' means to develop a good appetite through activity.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1187,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'ameliorate' is:",
        options: ["finish","appreciate","improve","affluent"],
        correct: 2,
        explanation: "'Ameliorate' means to make better, i.e. improve.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1188,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Which one is the appropriate synonym of 'squalor'?",
        options: ["miser","indolent","hinder","shabby"],
        correct: 3,
        explanation: "'Squalor' means filthy, dirty and shabby condition.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1189,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Give an exact synonym of 'hallowed':",
        options: ["mellowed","sacred","decayed","mixed"],
        correct: 1,
        explanation: "'Hallowed' means holy or sacred.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1190,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "The antonym of 'cynical' is:",
        options: ["rustic","friendly","hostile","simple"],
        correct: 1,
        explanation: "'Cynical' (distrustful, mocking) is opposite to 'friendly'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1191,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Give the antonym of 'corpulent':",
        options: ["bulky","skinny","obese","fat"],
        correct: 1,
        explanation: "'Corpulent' means fat; the opposite is 'skinny'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1192,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Killing of one's sister is called .............",
        options: ["regicide","genocide","sororicide","suicide"],
        correct: 2,
        explanation: "Sororicide is the killing of one's own sister.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1193,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Killing of a snake is called:",
        options: ["apicide","avicide","herpeticide","filicide"],
        correct: 2,
        explanation: "Herpeticide is the killing of reptiles such as snakes.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1194,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Badminton is played on a court whereas boxing is played in a .............",
        options: ["court","track","ring","arena"],
        correct: 2,
        explanation: "Boxing is played in a ring.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1195,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "A nun lives in a ............. whereas a hermit lives in a .............",
        options: ["prison, sty","convent, hermitage","asylum, stable","cottage, inn"],
        correct: 1,
        explanation: "A nun lives in a convent and a hermit lives in a hermitage.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1196,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "The bell ............. but bracelets jingle.",
        options: ["tolls","jingles","whistles","rattles"],
        correct: 0,
        explanation: "'Toll' is the sound made by a bell, while bracelets 'jingle'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1197,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "What is the opposite of 'pompous'?",
        options: ["humble","rough","cheap","unique"],
        correct: 0,
        explanation: "'Pompous' (arrogant, grand) is the opposite of 'humble'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1198,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "One who abandons his religious faith is a/an .............",
        options: ["apostate","atheist","secular","credulous"],
        correct: 0,
        explanation: "An apostate abandons his religious faith.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1199,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Repetition or writing word for word is putting it .............",
        options: ["pedantic","extempore","epilogue","verbatim"],
        correct: 3,
        explanation: "'Verbatim' means word for word.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1200,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "Johnson died ............. cancer.",
        options: ["by","in","of","from"],
        correct: 2,
        explanation: "The correct preposition is 'die of' an illness: 'died of cancer.'",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1201,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "I hope you will agree ............. me on this issue.",
        options: ["to","on","with","for"],
        correct: 2,
        explanation: "'Agree with someone' is the correct collocation.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1202,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "I am angry ............. your rude manner but not angry ............. you for not helping me.",
        options: ["at, with","with, with","to, with","to, to"],
        correct: 0,
        explanation: "'Angry at' a thing/manner and 'angry with' a person.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1203,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "I know you are looking ............. a job.",
        options: ["for","at","with","by"],
        correct: 0,
        explanation: "'Look for' means to search for.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1204,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "This magazine is not useful ............. me as I have no taste in music debates.",
        options: ["to","with","for","by"],
        correct: 0,
        explanation: "The correct phrase is 'useful to someone'.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1205,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "She was fined ............. parking her car in a no parking area.",
        options: ["for","on","in","at"],
        correct: 0,
        explanation: "'Fined for' an offence is the correct expression.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1206,
        univ: "TU",
        subject: "English",
        difficulty: "Easy",
        question: "I'm interested in cricket but I'm not very good ............. it.",
        options: ["in","with","at","about"],
        correct: 2,
        explanation: "'Good at' is the correct collocation.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1207,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "What is the meaning of the phrase 'ad interim'?",
        options: ["at pleasure","at will","to the extreme","for the time being"],
        correct: 3,
        explanation: "'Ad interim' means for the time being.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1208,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "A government controlled by the rich is called:",
        options: ["oligarchy","aristocracy","plutocracy","democracy"],
        correct: 2,
        explanation: "Plutocracy is government controlled by the wealthy.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1209,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "We must be early ............. we won't get a seat.",
        options: ["otherwise","yet","however","but"],
        correct: 0,
        explanation: "'Otherwise' expresses the consequence: if not, we won't get a seat.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1210,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "'Work like a Trojan' means:",
        options: ["treats","works","watches","sleeps"],
        correct: 1,
        explanation: "'Work like a Trojan' means to work very hard.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1211,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "'Fit like a glove' means:",
        options: ["fits very well","loosely fits","matches","dresses"],
        correct: 0,
        explanation: "'Fit like a glove' means to fit perfectly.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1212,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "'Time will tell' means:",
        options: ["no time left","old fashioned ideas","whether decisions or actions in the present were right or not","future will show"],
        correct: 3,
        explanation: "'Time will tell' means the future will show the result.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1213,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "A night in the town is full of .............",
        options: ["tasks","green lights","fun and entertainment","creativity"],
        correct: 2,
        explanation: "A night out in the town is full of fun and entertainment.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1214,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "'Dressed up to the nines' means:",
        options: ["very happy spirit","dressed in one's best clothes","a routine dress","a small chance to bring good luck"],
        correct: 1,
        explanation: "'Dressed up to the nines' means wearing one's finest clothes.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1215,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: The queen got annoyed because .............",
        options: ["she had burnt her fingers.","she was not happy with the Sultan's statement about his own income.","the Sultan was busy copying the holy book.","of the Sultan's undue concern for her."],
        correct: 1,
        explanation: "The queen was annoyed when the Sultan said his income did not permit lavish spending.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1216,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: Why did Sultan Nasiruddin not use the money in the treasury for himself?",
        options: ["He was afraid that his subjects would accuse him of theft.","He had already distributed the money to the poor.","He wanted to annoy his Begum.","He was convinced that the money belonged to the people."],
        correct: 3,
        explanation: "The Sultan said the treasure was people's wealth and he was answerable to God.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1217,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: The demand of the queen was that the .............",
        options: ["Sultan should earn his own livelihood.","money in the treasury should not be distributed to the poor.","Sultan should employ a maid-servant.","Sultan should help her in her household duties."],
        correct: 2,
        explanation: "The queen asked the Sultan to employ a maid-servant.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1218,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: Why was Sultan Nasiruddin popular among his people?",
        options: ["He was devoted to the holy Koran.","He was fair to all and was full of wisdom.","He kept the treasury full of wealth.","He made his wife work like an ordinary woman."],
        correct: 1,
        explanation: "He was a wise and just ruler, kind to the poor, so everybody sang his praises.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1219,
        univ: "TU",
        subject: "English",
        difficulty: "Medium",
        question: "Passage: What forced the queen to do all the household chores?",
        options: ["The simple life style of the Sultan.","The lack of money in the treasury.","The poor working of the maid servant.","The Sultan's greed for money."],
        correct: 0,
        explanation: "The Sultan's simple lifestyle meant the queen had to do all household work.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1220,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "If the slope of the line joining (1, 2) and (k, -5) is equally inclined with both the axes, what is the value of k?",
        options: ["6","-6","3","-2"],
        correct: 1,
        explanation: "Slope = (-5 - 2)/(k - 1) = -7/(k - 1) = ±1 → k - 1 = -7 → k = -6.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1221,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the value of cot 90°?",
        options: ["3","1/2","0","1"],
        correct: 2,
        explanation: "cot 90° = cos 90°/sin 90° = 0/1 = 0.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1222,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "One card is drawn randomly from a well-shuffled pack of 52 cards. What is the probability of drawing a red queen?",
        options: ["1/26","5/6","3/4","15/36"],
        correct: 0,
        explanation: "There are 2 red queens in 52 cards → 2/52 = 1/26.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1223,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If A, B, C are subsets of a universal set U, then A - (B ∪ C) is equal to:",
        options: ["(A - B) ∪ (A - C)","(A - B) ∩ (A - C)","(A ∩ B) - (A ∩ C)","(A ∪ B) - (A ∪ C)"],
        correct: 1,
        explanation: "Set difference distributes over union: A - (B ∪ C) = (A - B) ∩ (A - C).",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1224,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "Of a group of 120 students, 90 take mathematics and 72 take statistics. If 10 students take neither subject, how many students take both?",
        options: ["50","45","52","58"],
        correct: 2,
        explanation: "Both = 90 + 72 - (120 - 10) = 162 - 110 = 52.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1225,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "-5 < x < 7 can be written in the absolute value sign as:",
        options: ["|x - 7| < 1","|x - 1| < 6","|x - 1| < 2","|x - 1| < -1"],
        correct: 1,
        explanation: "Midpoint = (7 + (-5))/2 = 1 and half-width = 6, so |x - 1| < 6.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1226,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If the relation R = {(1, 2), (2, 3), (3, 4), (4, 5)}, then its range is:",
        options: ["{2, 3, 4, 5}","{1, 2, 3, 4}","{1, 2, 3, 5}","{1, 3, 4, 5}"],
        correct: 0,
        explanation: "The range is the set of second coordinates: {2, 3, 4, 5}.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1227,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of tan 180° is equal to:",
        options: ["1","-1","0","∞"],
        correct: 2,
        explanation: "tan 180° = sin 180°/cos 180° = 0/(-1) = 0.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1228,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "1² + 2² + 3² + ... + n² is equal to:",
        options: ["n(n + 1)/2","n(n + 1)(2n + 1)/6","{n(n + 1)/2}²","None of the above"],
        correct: 1,
        explanation: "The sum of squares formula is n(n + 1)(2n + 1)/6.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1229,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If a matrix A = [[0, -2, -6], [2, 0, -5], [6, 5, 0]], then matrix A is known as:",
        options: ["Symmetric Matrix","Skew-Symmetric Matrix","Diagonal Matrix","Triangular Matrix"],
        correct: 1,
        explanation: "A is skew-symmetric because Aᵀ = -A (and its diagonal elements are zero).",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1230,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The radius of the circle x² + y² = 9 is equal to:",
        options: ["4","3","5","9"],
        correct: 1,
        explanation: "For x² + y² = r², r = √9 = 3.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1231,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of 2√128 + √162 is:",
        options: ["25√2","4√3","0","60"],
        correct: 0,
        explanation: "2√128 = 16√2 and √162 = 9√2, so the total is 25√2.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1232,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "If A = [[1, 3], [2, 1]], then the value of A² - 2A - 5I is equal to:",
        options: ["1","-1","2","0"],
        correct: 3,
        explanation: "A² = [[7, 6], [4, 7]]; then A² - 2A - 5I = [[0, 0], [0, 0]] = zero matrix.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1233,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the half of a quarter of 400?",
        options: ["200","100","50","90"],
        correct: 2,
        explanation: "Quarter of 400 = 100; half of that = 50.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1234,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Half percent, written as a decimal, is:",
        options: ["0.2","0.02","0.005","0.05"],
        correct: 2,
        explanation: "0.5% = 0.5/100 = 0.005.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1235,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The true discount on Rs. 2,562 due 4 months hence is Rs. 122. The rate percent is:",
        options: ["12%","13%","14%","15%"],
        correct: 3,
        explanation: "P = 2562 - 122 = 2440; R = (TD × 100)/(P × T) = (122 × 100)/(2440 × 1/3) = 15%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1236,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The percentage increase in the area of a rectangle, if each of its sides is increased by 20%, is:",
        options: ["40%","42%","44%","46%"],
        correct: 2,
        explanation: "New area = 1.2 × 1.2 = 1.44 times the original, i.e. a 44% increase.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1237,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "AB and CD bisect each other at O. If AD = 6 cm, BC is:",
        options: ["5.9 cm","6 cm","4.8 cm","7 cm"],
        correct: 1,
        explanation: "The diagonals bisect each other, making ABCD a parallelogram, so BC = AD = 6 cm.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1238,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The compound interest on Rs. 30,000 at 7% per annum is Rs. 4,347. The period (in years) is:",
        options: ["2","3","4","8"],
        correct: 0,
        explanation: "Amount = 34,347 = 30,000(1.07)², so n = 2 years.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1239,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "If a man were to sell his chair for Rs. 720, he would lose 25%. To gain 25%, he should sell it for:",
        options: ["Rs. 1,200","Rs. 1,000","Rs. 960","Rs. 900"],
        correct: 0,
        explanation: "CP = 720/0.75 = 960; to gain 25%, SP = 960 × 1.25 = Rs. 1,200.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1240,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "Find the percentage gain or loss when dot pens bought for Rs. 96 per dozen are sold at the rate of 10 for Rs. 90.",
        options: ["13%","20%","4%","12.5%"],
        correct: 3,
        explanation: "CP per pen = Rs. 8, SP per pen = Rs. 9; gain = 1/8 = 12.5%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1241,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the value of cos²30° - sin²30°?",
        options: ["1/2","3/2","1/3","-1/2"],
        correct: 0,
        explanation: "3/4 - 1/4 = 1/2.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1242,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "How many stones, each of area 0.16 m², are required for paving a courtyard 5.5 m long and 4.8 m wide?",
        options: ["60","100","50","165"],
        correct: 3,
        explanation: "Area = 5.5 × 4.8 = 26.4 m²; 26.4/0.16 = 165 stones.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1243,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which one is the formula for the area of an equilateral triangle?",
        options: ["(√3/4)a²","(1/2) × b × h","√(s(s-a)(s-b)(s-c))","None of these"],
        correct: 0,
        explanation: "Area of an equilateral triangle of side a is (√3/4)a².",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1244,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The commission on Rs. 5,600 at the rate of 3.5% is:",
        options: ["Rs. 196","Rs. 440","Rs. 360","Rs. 1,000"],
        correct: 0,
        explanation: "3.5% of 5,600 = 0.035 × 5600 = Rs. 196.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1245,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If the marked price is Rs. 5,800 and the discount amount is Rs. 696, the discount percent is:",
        options: ["12%","20%","5%","38%"],
        correct: 0,
        explanation: "696/5800 × 100 = 12%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1246,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "What is the tax rate if the original price is Rs. 2,000 and the selling price is Rs. 2,400?",
        options: ["20%","17.39%","35%","10%"],
        correct: 0,
        explanation: "Tax = 400; 400/2000 × 100 = 20%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1247,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The sum of the ages of a father and his son is 52 years. Eight years ago the father was eight times as old as his son. The present age of the son is:",
        options: ["10 years","20 years","12 years","15 years"],
        correct: 2,
        explanation: "Let son = s: 44 - s = 8(s - 8) → s = 12.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1248,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If 4 is subtracted from the square of a number, the result is 21. The number is:",
        options: ["5","4","6","3"],
        correct: 0,
        explanation: "x² - 4 = 21 → x² = 25 → x = 5.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1249,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The radius of the circle x² + y² - 12x - 4y = 9 is equal to:",
        options: ["18","7","10","2"],
        correct: 1,
        explanation: "Completing squares: (x - 6)² + (y - 2)² = 49, so r = 7.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1250,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "A system of linear equations will be consistent and independent if they have:",
        options: ["exactly one solution","more than one solution","no solution","none of these"],
        correct: 0,
        explanation: "Consistent and independent systems have exactly one solution.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1251,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Let a and b be two numbers on the real line. If (a, b] = {x : a < x ≤ b}, this is known as a:",
        options: ["left open interval","right open interval","closed interval","open interval"],
        correct: 0,
        explanation: "(a, b] excludes a but includes b, so it is left open.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1252,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "Let f:R→R and g:R→R be defined by f(x) = 2x² - 3 and g(x) = 3x + 2. Then the composite function g∘f(x) is:",
        options: ["9x + 8","2x + 2","2x + 1","6x² - 7"],
        correct: 3,
        explanation: "g(f(x)) = 3(2x² - 3) + 2 = 6x² - 9 + 2 = 6x² - 7.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1253,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "A square matrix A is said to be singular if its determinant is equal to:",
        options: ["1","0","-1","none of these"],
        correct: 1,
        explanation: "A singular matrix has determinant 0.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1254,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The system of equations 4x - 3y = -6 and -4x + 2y = 16 is:",
        options: ["consistent and dependent","inconsistent and independent","inconsistent and dependent","consistent and independent"],
        correct: 3,
        explanation: "Determinant = 4(2) - (-3)(-4) = -4 ≠ 0, so the system has a unique solution.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1255,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The ratio of 2 km to 600 m should be:",
        options: ["2:7","2:8","2:3","10:3"],
        correct: 3,
        explanation: "2 km = 2000 m; 2000:600 = 10:3.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1256,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "In a : b = c : d, the terms b and c are called:",
        options: ["antecedent","extreme","consequent","mean"],
        correct: 3,
        explanation: "In a proportion, the middle terms b and c are the means.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1257,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If b² - 4ac < 0, then the roots of ax² + bx + c = 0 are:",
        options: ["equal","rational","irrational","imaginary"],
        correct: 3,
        explanation: "A negative discriminant gives imaginary (complex) roots.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1258,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "A polygon having 10 sides is called:",
        options: ["decagon","heptagon","quadrilateral","hexagon"],
        correct: 0,
        explanation: "A 10-sided polygon is a decagon.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1259,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "A linear equation is also known as a:",
        options: ["simultaneous equation","second degree equation","first degree equation","zero degree equation"],
        correct: 2,
        explanation: "A linear equation is of the first degree.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1260,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Two straight lines in the same plane which never meet are called:",
        options: ["angles","transversal lines","vertex","parallel lines"],
        correct: 3,
        explanation: "Lines that never meet in the same plane are parallel.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1261,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If x⁴ - 3x + 5 is divided by 2x - 1, then the remainder is:",
        options: ["35/16","-35/16","-9","3"],
        correct: 0,
        explanation: "By the remainder theorem f(1/2) = (1/2)⁴ - 3(1/2) + 5 = 57/16; the model-paper key marks 35/16.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1262,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If A, G and H are the arithmetic, geometric and harmonic means between a and b, then A, G, H:",
        options: ["are in G.P","are in A.P","are real numbers","are in H.P"],
        correct: 0,
        explanation: "AM, GM and HM between two numbers are always in geometric progression.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1263,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "In selling an article for Rs. 76, a shopkeeper gains 52%. The gain by selling it for Rs. 74 is:",
        options: ["45%","48%","49%","50%"],
        correct: 1,
        explanation: "CP = 76/1.52 = 50; at Rs. 74 the gain is 24/50 = 48%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1264,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "Ram bought oranges at 6 for Rs. 10 and sold them at 4 for Rs. 6. Find his loss percent.",
        options: ["12%","8%","6%","10%"],
        correct: 3,
        explanation: "CP per orange = 10/6, SP per orange = 6/4 = 1.5; loss = 1/6 per orange = 10%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1265,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "Which of the following is incorrect?",
        options: ["A.M = ab","G.M = √(ab)","H.M = 2ab/(a+b)","none of these"],
        correct: 0,
        explanation: "The arithmetic mean is (a + b)/2, not ab, so statement (a) is incorrect.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1266,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "By giving a discount of 10% on the marked price of Rs. 1,100 of a mobile phone, a dealer gains 10%. The cost price is:",
        options: ["Rs. 950","Rs. 900","Rs. 1,000","Rs. 1,050"],
        correct: 1,
        explanation: "SP = 90% of 1,100 = 990; CP = 990/1.1 = Rs. 900.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1267,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Rama purchased a table for Rs. 1,260 and, due to some damage, sold it for Rs. 1,197. Find the loss percent.",
        options: ["20%","15%","10%","5%"],
        correct: 3,
        explanation: "Loss = 63; 63/1260 × 100 = 5%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1268,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "A shopkeeper purchases 11 pens for Rs. 10 and sells them at the rate of 10 for Rs. 11. The profit is:",
        options: ["18%","19%","20%","21%"],
        correct: 3,
        explanation: "CP per pen = 10/11, SP per pen = 11/10; profit = (11/10 - 10/11)/(10/11) = 21%.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1269,
        univ: "TU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If A = [[1, 0, 0], [0, 1, 0], [0, 0, 1]], then A is a:",
        options: ["unit matrix","singular matrix","symmetric matrix","all of them are true"],
        correct: 0,
        explanation: "A is the identity (unit) matrix; it is not singular.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1270,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The famous Muktinath Temple is situated in:",
        options: ["Tanahun","Makwanpur","Mustang","Gorkha"],
        correct: 2,
        explanation: "Muktinath Temple lies in Mustang district.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1271,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The longest river in the world is:",
        options: ["Nile","Ganga","Amazon","Indus"],
        correct: 0,
        explanation: "The Nile is the longest river in the world.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1272,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "What day was yesterday, if Monday is in two days?",
        options: ["Wednesday","Thursday","Friday","Saturday"],
        correct: 2,
        explanation: "If Monday is in two days, today is Saturday, so yesterday was Friday.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1273,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which district lies in State Number 3 (Bagmati Province)?",
        options: ["Helambu","Birgunj","Tanahun","Lumbini"],
        correct: 0,
        explanation: "Helambu (Sindhupalchok area) lies in Bagmati Province (State 3).",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1274,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Who won the FIFA World Cup 2018?",
        options: ["Croatia","Russia","Argentina","France"],
        correct: 3,
        explanation: "France won the FIFA World Cup 2018.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1275,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "What is the term used to ask the computer to put information in order numerically or alphabetically?",
        options: ["Crop","Report","Sort","Record"],
        correct: 2,
        explanation: "'Sort' arranges data in numerical or alphabetical order.",
        source: "TU BCA Official Model Paper 2018"
    },

    {
        id: 1276,
        univ: "TU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "How many districts are there in Nepal?",
        options: ["75","73","77","76"],
        correct: 2,
        explanation: "Nepal currently has 77 districts.",
        source: "TU BCA Official Model Paper 2018"
    },

// KU, PU, Purbanchal expansions - 500 new questions
    {
        id: 2101,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct synonym of 'PERSISTENT':",
        options: ["Temporary",
            "Determined & Continual",
            "Careless",
            "Hesitant"],
        correct: 1,
        explanation: "'Persistent' means continuing firmly; determined and refusing to give up.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2102,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "She said, \"I am going to Dhulikhel tomorrow.\" The correct indirect speech is:",
        options: ["She said that she was going to Dhulikhel the next day.",
            "She said that I am going to Dhulikhel tomorrow.",
            "She says that she was going to Dhulikhel tomorrow.",
            "She said that she has gone to Dhulikhel the next day."],
        correct: 0,
        explanation: "In indirect speech, present continuous 'am going' becomes 'was going' and 'tomorrow' becomes 'the next day'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2103,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Neither the students nor the teacher ............. aware of the new rule.",
        options: ["were",
            "are",
            "was",
            "have been"],
        correct: 2,
        explanation: "With 'neither...nor', the verb agrees with the nearest subject (the teacher) which is singular, so 'was'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2104,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Find the word that is closest in meaning to 'EQUIVOCAL':",
        options: ["Clear",
            "Ambiguous",
            "Loud",
            "Stubborn"],
        correct: 1,
        explanation: "'Equivocal' means open to more than one interpretation; ambiguous.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2105,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct article: He is ............. honest man.",
        options: ["a",
            "an",
            "the",
            "no article"],
        correct: 1,
        explanation: "'Honest' starts with a silent 'h' and a vowel sound, so 'an' is used.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2106,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "The antonym of 'BENEVOLENT' is:",
        options: ["Kind",
            "Malicious",
            "Generous",
            "Forgiving"],
        correct: 1,
        explanation: "'Benevolent' means well-meaning and kind; its opposite is malicious (intending harm).",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2107,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Fill in the blank: If I ............. rich, I would travel the world.",
        options: ["am",
            "was",
            "were",
            "will be"],
        correct: 2,
        explanation: "Second conditional uses 'were' for all persons with hypothetical present situations.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2108,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Identify the correctly spelled word:",
        options: ["Occurance",
            "Occurrence",
            "Occurence",
            "Occurrencee"],
        correct: 1,
        explanation: "'Occurrence' is spelled with double 'r' and double 'c' (occur + r + ence).",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2109,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "One who cannot be corrected is called:",
        options: ["Infallible",
            "Incorrigible",
            "Indomitable",
            "Infallible"],
        correct: 1,
        explanation: "'Incorrigible' means (of a person or habit) not able to be changed or improved.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2110,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct passive voice: \"They are building a new bridge.\"",
        options: ["A new bridge is being built by them.",
            "A new bridge is built by them.",
            "A new bridge was being built by them.",
            "A new bridge has been built by them."],
        correct: 0,
        explanation: "Present continuous passive: am/is/are + being + past participle.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2111,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'OBLIGATORY' is:",
        options: ["Optional",
            "Compulsory",
            "Casual",
            "Voluntary"],
        correct: 1,
        explanation: "'Obligatory' means required by rule or law; compulsory.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2112,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct preposition: She is very good ............. mathematics.",
        options: ["in",
            "on",
            "at",
            "with"],
        correct: 2,
        explanation: "We say 'good at' an activity or skill.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2113,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Fill in the blank: The book, as well as the pen, ............. on the table.",
        options: ["are",
            "were",
            "is",
            "have been"],
        correct: 2,
        explanation: "Phrases introduced by 'as well as' do not affect the number of the subject, so singular 'is' is used.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2114,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "What is the antonym of 'TRANQUIL'?",
        options: ["Calm",
            "Peaceful",
            "Agitated",
            "Quiet"],
        correct: 2,
        explanation: "'Tranquil' means calm and peaceful; the opposite is agitated or disturbed.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2115,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct reported speech: He said, \"I have finished my work.\"",
        options: ["He said that he has finished his work.",
            "He said that he had finished his work.",
            "He told that he finished his work.",
            "He says he had finished his work."],
        correct: 1,
        explanation: "Present perfect in direct speech becomes past perfect in indirect speech.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2116,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The idiom 'to let the cat out of the bag' means:",
        options: ["To release an animal",
            "To reveal a secret",
            "To make a mistake",
            "To buy something"],
        correct: 1,
        explanation: "The idiom means to reveal a secret, especially accidentally.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2117,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank with the correct tense: By next year, she ............. for ten years.",
        options: ["will work",
            "will have worked",
            "works",
            "has worked"],
        correct: 1,
        explanation: "Future perfect 'will have + past participle' expresses an action completed by a future time.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2118,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Which word is a synonym of 'EPHEMERAL'?",
        options: ["Eternal",
            "Short-lived",
            "Durable",
            "Permanent"],
        correct: 1,
        explanation: "'Ephemeral' means lasting for a very short time; short-lived.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2119,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct form: This is the ............. of the two books.",
        options: ["good",
            "better",
            "best",
            "well"],
        correct: 1,
        explanation: "Comparative degree 'better' is used when comparing two things.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2120,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Identify the error: \"One of my friend is coming to the party.\"",
        options: ["One of",
            "friend",
            "is coming",
            "No error"],
        correct: 1,
        explanation: "After 'one of', a plural noun is used: 'one of my friends'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2121,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'AUGMENT' is:",
        options: ["Increase",
            "Reduce",
            "Enlarge",
            "Boost"],
        correct: 1,
        explanation: "'Augment' means to increase; the opposite is reduce or diminish.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2122,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: She prevented me ............. going there.",
        options: ["to go",
            "from going",
            "for going",
            "by going"],
        correct: 1,
        explanation: "'Prevent someone from doing something' is the correct collocation.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2123,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct meaning of 'UBIQUITOUS':",
        options: ["Present everywhere",
            "Rare",
            "Hidden",
            "Powerful"],
        correct: 0,
        explanation: "'Ubiquitous' means present, appearing, or found everywhere.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2124,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Select the correct question tag: She rarely comes late, .............?",
        options: ["does she",
            "doesn't she",
            "is she",
            "isn't she"],
        correct: 0,
        explanation: "'Rarely' is a negative word, so the tag must be positive: 'does she'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2125,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "The synonym of 'MELANCHOLY' is:",
        options: ["Joyful",
            "Sad",
            "Energetic",
            "Angry"],
        correct: 1,
        explanation: "'Melancholy' means a feeling of pensive sadness; gloomy.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2126,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct order: He ............. his homework before he went out.",
        options: ["finished",
            "had finished",
            "finishes",
            "has finished"],
        correct: 1,
        explanation: "Past perfect is used for the earlier of two past actions.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2127,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Fill in the blank: I haven't seen him ............ Monday.",
        options: ["for",
            "since",
            "from",
            "at"],
        correct: 1,
        explanation: "'Since' is used with a point of time (Monday); 'for' with a duration.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2128,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Which is the correct plural form of 'criterion'?",
        options: ["criterions",
            "criteria",
            "criterion",
            "criterias"],
        correct: 1,
        explanation: "'Criterion' is Greek in origin; its plural is 'criteria'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2129,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'HINDER' is:",
        options: ["Help",
            "Obstruct",
            "Speed",
            "Allow"],
        correct: 1,
        explanation: "'Hinder' means to obstruct or delay progress.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2130,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct preposition: He is indifferent ............. praise or blame.",
        options: ["of",
            "to",
            "for",
            "with"],
        correct: 1,
        explanation: "'Indifferent to' is the correct collocation.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2131,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Complete the sentence: No sooner had he arrived ............. it started raining.",
        options: ["than",
            "then",
            "when",
            "that"],
        correct: 0,
        explanation: "'No sooner...than' is the correct correlative structure.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2132,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "The word 'CACOPHONY' means:",
        options: ["Harsh, discordant sound",
            "Sweet music",
            "Silence",
            "Rhythm"],
        correct: 0,
        explanation: "'Cacophony' is a harsh mixture of sounds.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2133,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct form: Each of the boys ............. given a prize.",
        options: ["were",
            "are",
            "was",
            "have been"],
        correct: 2,
        explanation: "'Each of' takes a singular verb: 'was'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2134,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'OBSCURE' is:",
        options: ["Clear",
            "Vague",
            "Hidden",
            "Dark"],
        correct: 0,
        explanation: "'Obscure' means not clear or difficult to understand; opposite is clear.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2135,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: It is high time we ............. this problem.",
        options: ["solve",
            "solved",
            "have solved",
            "will solve"],
        correct: 1,
        explanation: "'It is high time' is followed by past subjunctive: 'we solved'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2136,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct passive: \"Who wrote this book?\"",
        options: ["By whom was this book written?",
            "By whom this book was written?",
            "Who was this book written?",
            "Whom was this book written by?"],
        correct: 0,
        explanation: "The passive of 'who wrote' is 'by whom was ... written'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2137,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "The meaning of the idiom 'to burn the midnight oil' is:",
        options: ["To work late into the night",
            "To waste energy",
            "To light a lamp",
            "To fail an exam"],
        correct: 0,
        explanation: "The idiom means to study or work late at night.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2138,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Which word is the antonym of 'PROLIFIC'?",
        options: ["Fertile",
            "Barren",
            "Productive",
            "Fruitful"],
        correct: 1,
        explanation: "'Prolific' means producing much fruit or many works; opposite is barren.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2139,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct form of verb: The committee ............. divided in its opinion.",
        options: ["are",
            "were",
            "is",
            "have been"],
        correct: 2,
        explanation: "When the committee acts as a unit, it takes a singular verb 'is'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2140,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: He deals ............. cotton.",
        options: ["in",
            "with",
            "at",
            "on"],
        correct: 0,
        explanation: "'Deal in' means to trade in a commodity; 'deal with' means to handle.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2141,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'CONTROVERSIAL' is:",
        options: ["Settled",
            "Debatable",
            "Agreed",
            "Neutral"],
        correct: 1,
        explanation: "'Controversial' means giving rise to public disagreement; debatable.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2142,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Select the correctly punctuated sentence:",
        options: ["What a beautiful day",
            "What a beautiful day!",
            "What a beautiful day?",
            "What a beautiful day."],
        correct: 1,
        explanation: "Exclamatory sentences end with an exclamation mark.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2143,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct conjunction: Work hard ............. you may fail.",
        options: ["and",
            "or",
            "but",
            "so"],
        correct: 1,
        explanation: "'Work hard or you may fail' shows a negative result of not working hard.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2144,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "The word 'ANACHRONISM' means:",
        options: ["Something out of its proper time period",
            "A modern invention",
            "A historical document",
            "A logical error"],
        correct: 0,
        explanation: "An anachronism is something belonging to a period other than the one in which it exists.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2145,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: He is senior ............. me by two years.",
        options: ["than",
            "to",
            "from",
            "of"],
        correct: 1,
        explanation: "'Senior to' is the correct form; senior takes 'to', not 'than'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2146,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'ANCIENT' is:",
        options: ["Old",
            "Modern",
            "Aged",
            "Antique"],
        correct: 1,
        explanation: "'Ancient' refers to very old times; its opposite is modern.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2147,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct form: I wish I ............. to the concert last night.",
        options: ["went",
            "had gone",
            "go",
            "would go"],
        correct: 1,
        explanation: "Wish about a past regret uses past perfect: 'I wish I had gone'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2148,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'DILIGENT' is:",
        options: ["Lazy",
            "Hardworking",
            "Careless",
            "Slow"],
        correct: 1,
        explanation: "'Diligent' means showing care and effort in one's work; hardworking.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2149,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct word: The police ............. looking for the suspect.",
        options: ["is",
            "are",
            "was",
            "has been"],
        correct: 1,
        explanation: "'Police' is always plural in standard English usage.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2150,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Fill in the blank: He insisted ............. my paying the bill.",
        options: ["on",
            "for",
            "to",
            "about"],
        correct: 0,
        explanation: "'Insist on' is the correct collocation.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2151,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "The phrase 'to see eye to eye' means:",
        options: ["To agree",
            "To be blind",
            "To look closely",
            "To disagree strongly"],
        correct: 0,
        explanation: "'To see eye to eye' means to be in agreement.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2152,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct spelling of the word meaning 'a person who knows everything':",
        options: ["Omnipotent",
            "Omniscient",
            "Omnipresent",
            "Omnivorous"],
        correct: 1,
        explanation: "'Omniscient' means knowing everything.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2153,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Identify the error: \"Neither of the two boys were present.\"",
        options: ["Neither",
            "two boys",
            "were",
            "No error"],
        correct: 2,
        explanation: "'Neither of' takes a singular verb: 'Neither of the two boys was present.'",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2154,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'TRANSPARENT' is:",
        options: ["Clear",
            "Opaque",
            "Bright",
            "Thin"],
        correct: 1,
        explanation: "'Transparent' means allowing light to pass through; opaque blocks light.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2155,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct passive: \"People speak English all over the world.\"",
        options: ["English is spoken all over the world.",
            "English was spoken all over the world.",
            "English is being spoken all over the world.",
            "English has been spoken all over the world."],
        correct: 0,
        explanation: "Simple present passive: am/is/are + past participle.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2156,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: If you had studied hard, you ............. the exam.",
        options: ["would pass",
            "would have passed",
            "will pass",
            "pass"],
        correct: 1,
        explanation: "Third conditional: 'would have + past participle' for unreal past situations.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2157,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'FAITHFUL' is:",
        options: ["Loyal",
            "Disloyal",
            "Careless",
            "Rude"],
        correct: 0,
        explanation: "'Faithful' means remaining loyal and steadfast.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2158,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct form: The number of students ............. increased.",
        options: ["have",
            "has",
            "are",
            "were"],
        correct: 1,
        explanation: "'The number of' takes a singular verb ('has'), while 'a number of' takes plural.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2159,
        univ: "KU",
        subject: "English",
        difficulty: "Easy",
        question: "Fill in the blank: He has been suffering from fever ............. three days.",
        options: ["since",
            "for",
            "from",
            "at"],
        correct: 1,
        explanation: "'For' is used with a duration of time (three days).",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2160,
        univ: "KU",
        subject: "English",
        difficulty: "Medium",
        question: "Which sentence is grammatically correct?",
        options: ["Each students must bring his book.",
            "Each student must bring his book.",
            "Each student must bring their books.",
            "Each students must bring their books."],
        correct: 1,
        explanation: "'Each' takes a singular noun: 'each student must bring his book'.",
        source: "KUCAT English Verbal Assessment"
    },

    {
        id: 2161,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If f(x) = 2x³ - 3x² + 6, then f'(x) is:",
        options: ["6x² - 6x",
            "6x² - 6x + 6",
            "2x² - 3x",
            "6x - 6"],
        correct: 0,
        explanation: "Differentiating term by term: d/dx(2x³)=6x², d/dx(-3x²)=-6x, d/dx(6)=0.",
        source: "KUCAT Mathematics Syllabus - Differentiation"
    },

    {
        id: 2162,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of lim (sin x / x) as x → 0 is:",
        options: ["0",
            "1",
            "∞",
            "Undefined"],
        correct: 1,
        explanation: "This is a standard limit: lim (sin x / x) as x→0 equals 1.",
        source: "KUCAT Mathematics Syllabus - Limits"
    },

    {
        id: 2163,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If A = [1 2; 3 4], the determinant |A| is:",
        options: ["-2",
            "2",
            "10",
            "-10"],
        correct: 0,
        explanation: "det = (1×4) - (2×3) = 4 - 6 = -2.",
        source: "KUCAT Mathematics Syllabus - Determinants"
    },

    {
        id: 2164,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The derivative of e^(3x) with respect to x is:",
        options: ["e^(3x)",
            "3e^(3x)",
            "3e^x",
            "e^(3x)/3"],
        correct: 1,
        explanation: "Using the chain rule: d/dx e^(3x) = 3e^(3x).",
        source: "KUCAT Mathematics Syllabus - Differentiation"
    },

    {
        id: 2165,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "∫ 2x dx equals:",
        options: ["x² + c",
            "2x² + c",
            "x²",
            "2x + c"],
        correct: 0,
        explanation: "∫ 2x dx = x² + c by the power rule of integration.",
        source: "KUCAT Mathematics Syllabus - Integration"
    },

    {
        id: 2166,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "How many ways can 5 books be arranged on a shelf?",
        options: ["25",
            "60",
            "120",
            "720"],
        correct: 2,
        explanation: "5! = 5×4×3×2×1 = 120 arrangements.",
        source: "KUCAT Mathematics Syllabus - Permutation and Combination"
    },

    {
        id: 2167,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of log₂ 32 is:",
        options: ["4",
            "5",
            "16",
            "32"],
        correct: 1,
        explanation: "2⁵ = 32, so log₂ 32 = 5.",
        source: "KUCAT Mathematics Syllabus - Exponential and Logarithmic Functions"
    },

    {
        id: 2168,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The roots of the equation x² - 5x + 6 = 0 are:",
        options: ["2 and 3",
            "-2 and -3",
            "1 and 6",
            "5 and 1"],
        correct: 0,
        explanation: "x² - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or 3.",
        source: "KUCAT Mathematics Syllabus - Quadratics"
    },

    {
        id: 2169,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the mean of 5 numbers is 20, the sum of the numbers is:",
        options: ["20",
            "25",
            "100",
            "5"],
        correct: 2,
        explanation: "Sum = mean × count = 20 × 5 = 100.",
        source: "KUCAT Mathematics Syllabus - Representation of Data"
    },

    {
        id: 2170,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of (1 + i)² where i = √-1 is:",
        options: ["2i",
            "2",
            "-2i",
            "1 + i"],
        correct: 0,
        explanation: "(1 + i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i.",
        source: "KUCAT Mathematics Syllabus - Complex Numbers"
    },

    {
        id: 2171,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "A bag contains 3 red and 2 blue balls. The probability of drawing a blue ball is:",
        options: ["3/5",
            "2/5",
            "1/5",
            "2/3"],
        correct: 1,
        explanation: "Probability = 2 blue / (3+2) total = 2/5.",
        source: "KUCAT Mathematics Syllabus - Probability"
    },

    {
        id: 2172,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The gradient of the line 3x + 4y = 12 is:",
        options: ["3/4",
            "-3/4",
            "4/3",
            "-4/3"],
        correct: 1,
        explanation: "Rearrange to y = -3/4 x + 3; the slope is -3/4.",
        source: "KUCAT Mathematics Syllabus - Equation of Straight Lines"
    },

    {
        id: 2173,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If sin θ = 3/5 and θ is acute, then cos θ is:",
        options: ["4/5",
            "3/4",
            "5/4",
            "2/5"],
        correct: 0,
        explanation: "cos θ = √(1 - 9/25) = √(16/25) = 4/5.",
        source: "KUCAT Mathematics Syllabus - Trigonometry"
    },

    {
        id: 2174,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of 7! / 5! is:",
        options: ["14",
            "42",
            "2",
            "7"],
        correct: 1,
        explanation: "7!/5! = (7×6×5!)/5! = 42.",
        source: "KUCAT Mathematics Syllabus - Permutation and Combination"
    },

    {
        id: 2175,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The 10th term of the arithmetic sequence 3, 7, 11, 15, ... is:",
        options: ["39",
            "43",
            "35",
            "47"],
        correct: 0,
        explanation: "a = 3, d = 4; T10 = 3 + (10-1)×4 = 3 + 36 = 39.",
        source: "KUCAT Mathematics Syllabus - Sequences"
    },

    {
        id: 2176,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the matrices A and B are 2×2 and conformable, then (AB)' equals:",
        options: ["A'B'",
            "B'A'",
            "AB",
            "BA"],
        correct: 1,
        explanation: "The transpose of a product reverses the order: (AB)' = B'A'.",
        source: "KUCAT Mathematics Syllabus - Matrices"
    },

    {
        id: 2177,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The minimum value of f(x) = x² - 4x + 5 occurs at x =",
        options: ["2",
            "4",
            "-2",
            "5"],
        correct: 0,
        explanation: "f'(x) = 2x - 4 = 0 gives x = 2 (f'' = 2 > 0, so minimum).",
        source: "KUCAT Mathematics Syllabus - Application of Differentiation"
    },

    {
        id: 2178,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The sum of an infinite geometric series with first term 4 and common ratio 1/2 is:",
        options: ["6",
            "8",
            "10",
            "16"],
        correct: 1,
        explanation: "S∞ = a/(1-r) = 4/(1 - 1/2) = 8.",
        source: "KUCAT Mathematics Syllabus - Geometric Sequences"
    },

    {
        id: 2179,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "lim (x² - 4)/(x - 2) as x → 2 is:",
        options: ["0",
            "2",
            "4",
            "Undefined"],
        correct: 2,
        explanation: "Factor: (x-2)(x+2)/(x-2) = x+2; at x=2 the limit is 4.",
        source: "KUCAT Mathematics Syllabus - Limits"
    },

    {
        id: 2180,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If a coin is tossed twice, the probability of getting two heads is:",
        options: ["1/2",
            "1/4",
            "1/3",
            "3/4"],
        correct: 1,
        explanation: "P(HH) = (1/2) × (1/2) = 1/4.",
        source: "KUCAT Mathematics Syllabus - Probability"
    },

    {
        id: 2181,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The derivative of ln(x² + 1) is:",
        options: ["2x/(x² + 1)",
            "1/(x² + 1)",
            "2x ln(x² + 1)",
            "x/(x² + 1)"],
        correct: 0,
        explanation: "By chain rule: d/dx ln(u) = u'/u = 2x/(x² + 1).",
        source: "KUCAT Mathematics Syllabus - Differentiation"
    },

    {
        id: 2182,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of sin 30° + cos 60° is:",
        options: ["1",
            "1/2",
            "√3/2",
            "0"],
        correct: 0,
        explanation: "sin 30° = 1/2 and cos 60° = 1/2, so the sum is 1.",
        source: "KUCAT Mathematics Syllabus - Trigonometry"
    },

    {
        id: 2183,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The equation of a circle with centre (0,0) and radius 3 is:",
        options: ["x² + y² = 9",
            "x² + y² = 3",
            "x + y = 3",
            "x² - y² = 9"],
        correct: 0,
        explanation: "The standard circle equation is x² + y² = r² = 9.",
        source: "KUCAT Mathematics Syllabus - Coordinate Space"
    },

    {
        id: 2184,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "How many 3-digit numbers can be formed from the digits 1,2,3,4,5 without repetition?",
        options: ["15",
            "60",
            "125",
            "120"],
        correct: 1,
        explanation: "5P3 = 5×4×3 = 60 arrangements.",
        source: "KUCAT Mathematics Syllabus - Permutation and Combination"
    },

    {
        id: 2185,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The determinant of the 3×3 identity matrix is:",
        options: ["0",
            "1",
            "3",
            "Undefined"],
        correct: 1,
        explanation: "The determinant of any identity matrix is 1.",
        source: "KUCAT Mathematics Syllabus - Determinants"
    },

    {
        id: 2186,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If A = {1,2,3} and B = {2,3,4}, then A ∪ B is:",
        options: ["{1,2,3,4}",
            "{2,3}",
            "{1,4}",
            "{1,2,3}"],
        correct: 0,
        explanation: "The union of sets A and B contains all elements from both: {1,2,3,4}.",
        source: "KUCAT Mathematics Syllabus - Concept of Sets"
    },

    {
        id: 2187,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The value of tan 45° + cot 45° is:",
        options: ["0",
            "1",
            "2",
            "√2"],
        correct: 2,
        explanation: "tan 45° = 1 and cot 45° = 1, so the sum is 2.",
        source: "KUCAT Mathematics Syllabus - Trigonometry"
    },

    {
        id: 2188,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The variance of the data set 2, 4, 6, 8, 10 is:",
        options: ["6",
            "8",
            "10",
            "40"],
        correct: 1,
        explanation: "Mean = 6; squared deviations: 16,4,0,4,16 → sum 40, divided by n=5 gives 8.",
        source: "KUCAT Mathematics Syllabus - Measures of Spread"
    },

    {
        id: 2189,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The value of ∫₀¹ (x²) dx is:",
        options: ["1",
            "1/3",
            "1/2",
            "2/3"],
        correct: 1,
        explanation: "∫₀¹ x² dx = [x³/3]₀¹ = 1/3.",
        source: "KUCAT Mathematics Syllabus - Integration"
    },

    {
        id: 2190,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If a die is rolled once, the probability of getting an even number is:",
        options: ["1/6",
            "1/3",
            "1/2",
            "2/3"],
        correct: 2,
        explanation: "Even outcomes are 2,4,6 out of 6 → 3/6 = 1/2.",
        source: "KUCAT Mathematics Syllabus - Probability"
    },

    {
        id: 2191,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The modulus of the complex number 3 + 4i is:",
        options: ["5",
            "7",
            "25",
            "1"],
        correct: 0,
        explanation: "|3 + 4i| = √(9 + 16) = √25 = 5.",
        source: "KUCAT Mathematics Syllabus - Complex Numbers"
    },

    {
        id: 2192,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The sum of the first 20 natural numbers is:",
        options: ["190",
            "200",
            "210",
            "400"],
        correct: 2,
        explanation: "Sum = n(n+1)/2 = 20×21/2 = 210.",
        source: "KUCAT Mathematics Syllabus - Sequences"
    },

    {
        id: 2193,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The second derivative of y = x⁴ is:",
        options: ["4x³",
            "12x²",
            "4x²",
            "24x"],
        correct: 1,
        explanation: "y' = 4x³, y'' = 12x².",
        source: "KUCAT Mathematics Syllabus - Second Derivative"
    },

    {
        id: 2194,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of 2 log₁₀ 5 + log₁₀ 4 equals:",
        options: ["log₁₀ 25",
            "log₁₀ 100",
            "2",
            "log₁₀ 20"],
        correct: 1,
        explanation: "2 log 5 = log 25; log 25 + log 4 = log 100 = 2.",
        source: "KUCAT Mathematics Syllabus - Logarithms"
    },

    {
        id: 2195,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The solution set of |x - 2| = 5 is:",
        options: ["{7}",
            "{-3}",
            "{7, -3}",
            "{3, -7}"],
        correct: 2,
        explanation: "x - 2 = 5 gives x = 7; x - 2 = -5 gives x = -3.",
        source: "KUCAT Mathematics Syllabus - Modulus Function"
    },

    {
        id: 2196,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "A fair coin is tossed 3 times. The probability of getting exactly 2 heads is:",
        options: ["1/8",
            "3/8",
            "1/2",
            "1/4"],
        correct: 1,
        explanation: "3 outcomes (HHT, HTH, THH) out of 8 → 3/8.",
        source: "KUCAT Mathematics Syllabus - Probability"
    },

    {
        id: 2197,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The value of (27)^(1/3) is:",
        options: ["9",
            "3",
            "6",
            "√27"],
        correct: 1,
        explanation: "27^(1/3) is the cube root of 27 = 3.",
        source: "KUCAT Mathematics Syllabus - Surds and Indices"
    },

    {
        id: 2198,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the point (2,3) lies on the line y = mx + 1, then m equals:",
        options: ["1",
            "2",
            "3",
            "4"],
        correct: 0,
        explanation: "3 = 2m + 1 → 2m = 2 → m = 1.",
        source: "KUCAT Mathematics Syllabus - Equation of Straight Lines"
    },

    {
        id: 2199,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The turning point of y = x² - 6x + 8 is at x =",
        options: ["2",
            "3",
            "4",
            "6"],
        correct: 1,
        explanation: "y' = 2x - 6 = 0 → x = 3 (vertex of the parabola).",
        source: "KUCAT Mathematics Syllabus - Application of Differentiation"
    },

    {
        id: 2200,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The number of subsets of a set with 4 elements is:",
        options: ["8",
            "16",
            "12",
            "24"],
        correct: 1,
        explanation: "Number of subsets = 2ⁿ = 2⁴ = 16.",
        source: "KUCAT Mathematics Syllabus - Concept of Sets"
    },

    {
        id: 2201,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "∫ (3x² + 2x + 1) dx equals:",
        options: ["x³ + x² + x + c",
            "3x³ + 2x² + x + c",
            "x³ + 2x + c",
            "6x + 2 + c"],
        correct: 0,
        explanation: "Integrating term by term: x³ + x² + x + c.",
        source: "KUCAT Mathematics Syllabus - Integration"
    },

    {
        id: 2202,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If 3x + 2y = 12 and x = 2, then y equals:",
        options: ["3",
            "4",
            "6",
            "2"],
        correct: 0,
        explanation: "3(2) + 2y = 12 → 6 + 2y = 12 → y = 3.",
        source: "KUCAT Mathematics Syllabus - System of Linear Equations"
    },

    {
        id: 2203,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The value of cos 0° + sin 90° is:",
        options: ["0",
            "1",
            "2",
            "√2"],
        correct: 2,
        explanation: "cos 0° = 1 and sin 90° = 1, so the sum is 2.",
        source: "KUCAT Mathematics Syllabus - Trigonometry"
    },

    {
        id: 2204,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The median of the numbers 3, 7, 5, 9, 1 is:",
        options: ["3",
            "5",
            "7",
            "9"],
        correct: 1,
        explanation: "Sorted: 1,3,5,7,9; the middle value is 5.",
        source: "KUCAT Mathematics Syllabus - Measures of Location"
    },

    {
        id: 2205,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The general solution of the equation x² - 2x + 5 = 0 involves:",
        options: ["Two real roots",
            "Two complex roots",
            "One real root",
            "No roots"],
        correct: 1,
        explanation: "Discriminant b² - 4ac = 4 - 20 = -16 < 0, so two complex roots.",
        source: "KUCAT Mathematics Syllabus - Complex Numbers"
    },

    {
        id: 2206,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The number of diagonals of a convex polygon with 6 sides is:",
        options: ["6",
            "9",
            "12",
            "15"],
        correct: 1,
        explanation: "Diagonals = n(n-3)/2 = 6×3/2 = 9.",
        source: "KUCAT Mathematics Syllabus - Permutation and Combination"
    },

    {
        id: 2207,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "If f(x) = x³, then f'(2) equals:",
        options: ["6",
            "8",
            "12",
            "24"],
        correct: 2,
        explanation: "f'(x) = 3x²; f'(2) = 3×4 = 12.",
        source: "KUCAT Mathematics Syllabus - Differentiation"
    },

    {
        id: 2208,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The coefficient of x in the expansion of (1 + x)⁵ is:",
        options: ["1",
            "5",
            "10",
            "20"],
        correct: 1,
        explanation: "By binomial theorem, the x term has coefficient C(5,1) = 5.",
        source: "KUCAT Mathematics Syllabus - Binomial Theorem"
    },

    {
        id: 2209,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The area enclosed by y = x and the x-axis between x = 0 and x = 2 is:",
        options: ["1",
            "2",
            "4",
            "8"],
        correct: 1,
        explanation: "Area = ∫₀² x dx = [x²/2]₀² = 2.",
        source: "KUCAT Mathematics Syllabus - Integration"
    },

    {
        id: 2210,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If 2^x = 64, then x equals:",
        options: ["5",
            "6",
            "7",
            "8"],
        correct: 1,
        explanation: "64 = 2⁶, so x = 6.",
        source: "KUCAT Mathematics Syllabus - Indices"
    },

    {
        id: 2211,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The vectors (2,1) and (k,4) are perpendicular when k equals:",
        options: ["-2",
            "2",
            "8",
            "-8"],
        correct: 0,
        explanation: "Perpendicular means dot product = 0: 2k + 4 = 0 → k = -2.",
        source: "KUCAT Mathematics Syllabus - Vectors"
    },

    {
        id: 2212,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "A number is selected from 1 to 20. The probability it is a prime number is:",
        options: ["8/20",
            "9/20",
            "10/20",
            "7/20"],
        correct: 0,
        explanation: "Primes between 1 and 20: 2,3,5,7,11,13,17,19 → 8 of 20.",
        source: "KUCAT Mathematics Syllabus - Probability"
    },

    {
        id: 2213,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The value of lim (1 - cos x)/x² as x → 0 is:",
        options: ["0",
            "1",
            "1/2",
            "∞"],
        correct: 2,
        explanation: "Standard limit: (1 - cos x)/x² → 1/2 as x → 0.",
        source: "KUCAT Mathematics Syllabus - Limits"
    },

    {
        id: 2214,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The nth term of the sequence 2, 6, 10, 14, ... is:",
        options: ["4n - 2",
            "4n + 2",
            "2n + 4",
            "4n"],
        correct: 0,
        explanation: "First term 2, common difference 4: Tn = 2 + (n-1)4 = 4n - 2.",
        source: "KUCAT Mathematics Syllabus - Sequences"
    },

    {
        id: 2215,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "If A is a 2×2 matrix with det(A) = 5, then det(2A) equals:",
        options: ["10",
            "20",
            "25",
            "5"],
        correct: 1,
        explanation: "For a 2×2 matrix, det(kA) = k² det(A) = 4×5 = 20.",
        source: "KUCAT Mathematics Syllabus - Matrices"
    },

    {
        id: 2216,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The sum of the roots of x² - 7x + 12 = 0 is:",
        options: ["-7",
            "7",
            "12",
            "-12"],
        correct: 1,
        explanation: "Sum of roots = -b/a = 7.",
        source: "KUCAT Mathematics Syllabus - Quadratics"
    },

    {
        id: 2217,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The distance between the points (1,2) and (4,6) is:",
        options: ["5",
            "4",
            "3",
            "√5"],
        correct: 0,
        explanation: "Distance = √((4-1)² + (6-2)²) = √(9+16) = 5.",
        source: "KUCAT Mathematics Syllabus - Coordinate Space"
    },

    {
        id: 2218,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "In how many ways can 3 people be selected from 6?",
        options: ["20",
            "30",
            "120",
            "18"],
        correct: 0,
        explanation: "C(6,3) = 6!/(3!3!) = 20.",
        source: "KUCAT Mathematics Syllabus - Combination"
    },

    {
        id: 2219,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Hard",
        question: "The maximum value of f(x) = -x² + 4x + 1 is:",
        options: ["3",
            "4",
            "5",
            "6"],
        correct: 2,
        explanation: "Vertex at x = -b/2a = 2; f(2) = -4 + 8 + 1 = 5.",
        source: "KUCAT Mathematics Syllabus - Application of Differentiation"
    },

    {
        id: 2220,
        univ: "KU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of √8 × √18 is:",
        options: ["12",
            "6",
            "√24",
            "24"],
        correct: 0,
        explanation: "√8 × √18 = √144 = 12.",
        source: "KUCAT Mathematics Syllabus - Surds and Indices"
    },

    {
        id: 2221,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is the brain of a computer?",
        options: ["RAM",
            "CPU",
            "Hard Disk",
            "Motherboard"],
        correct: 1,
        explanation: "The CPU (Central Processing Unit) performs all processing and is called the brain of the computer.",
        source: "KUCAT PMCs - Computer Science Fundamentals"
    },

    {
        id: 2222,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "1 Kilobyte (KB) is equal to:",
        options: ["1000 bytes",
            "1024 bytes",
            "1024 bits",
            "1000 bits"],
        correct: 1,
        explanation: "1 KB = 2¹⁰ = 1024 bytes in binary terms.",
        source: "KUCAT PMCs - Computer Science Fundamentals"
    },

    {
        id: 2223,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which data structure works on the LIFO principle?",
        options: ["Queue",
            "Stack",
            "Array",
            "Linked List"],
        correct: 1,
        explanation: "A stack follows Last-In-First-Out (LIFO); a queue follows FIFO.",
        source: "KUCAT PMCs - Data Structures"
    },

    {
        id: 2224,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a volatile memory?",
        options: ["ROM",
            "Hard Disk",
            "RAM",
            "Flash Drive"],
        correct: 2,
        explanation: "RAM loses its contents when power is switched off, making it volatile.",
        source: "KUCAT PMCs - Computer Science Fundamentals"
    },

    {
        id: 2225,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "In binary, the decimal number 13 is represented as:",
        options: ["1101",
            "1011",
            "1100",
            "1110"],
        correct: 0,
        explanation: "13 = 8 + 4 + 1 = 1101 in binary.",
        source: "KUCAT PMCs - Number Systems"
    },

    {
        id: 2226,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is NOT an operating system?",
        options: ["Linux",
            "Windows 11",
            "Oracle",
            "macOS"],
        correct: 2,
        explanation: "Oracle is a database management system, not an operating system.",
        source: "KUCAT PMCs - Operating Systems"
    },

    {
        id: 2227,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The full form of HTML is:",
        options: ["HyperText Markup Language",
            "HighText Machine Language",
            "HyperText Making Language",
            "Hyperlink Text Markup Language"],
        correct: 0,
        explanation: "HTML stands for HyperText Markup Language.",
        source: "KUCAT PMCs - Web Technologies"
    },

    {
        id: 2228,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which SQL command is used to retrieve data from a database?",
        options: ["INSERT",
            "SELECT",
            "UPDATE",
            "DELETE"],
        correct: 1,
        explanation: "SELECT is the SQL command used to query and retrieve data.",
        source: "KUCAT PMCs - Database"
    },

    {
        id: 2229,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following sorting algorithms has the best average-case time complexity of O(n log n)?",
        options: ["Bubble Sort",
            "Insertion Sort",
            "Merge Sort",
            "Selection Sort"],
        correct: 2,
        explanation: "Merge Sort has O(n log n) average time complexity.",
        source: "KUCAT PMCs - Algorithms"
    },

    {
        id: 2230,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which protocol is used for sending email?",
        options: ["HTTP",
            "SMTP",
            "FTP",
            "TCP"],
        correct: 1,
        explanation: "SMTP (Simple Mail Transfer Protocol) is used to send email.",
        source: "KUCAT PMCs - Networking"
    },

    {
        id: 2231,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an example of a high-level programming language?",
        options: ["Assembly",
            "Machine Code",
            "Python",
            "Binary"],
        correct: 2,
        explanation: "Python is a high-level language; assembly and machine code are low-level.",
        source: "KUCAT PMCs - Programming"
    },

    {
        id: 2232,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The term 'LAN' stands for:",
        options: ["Local Area Network",
            "Large Area Network",
            "Linked Area Network",
            "Local Access Network"],
        correct: 0,
        explanation: "LAN stands for Local Area Network.",
        source: "KUCAT PMCs - Networking"
    },

    {
        id: 2233,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a characteristic of a linked list over an array?",
        options: ["Constant-time random access",
            "Dynamic size",
            "Contiguous memory",
            "Fixed maximum size"],
        correct: 1,
        explanation: "Linked lists grow dynamically; arrays have fixed size and contiguous memory.",
        source: "KUCAT PMCs - Data Structures"
    },

    {
        id: 2234,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "What does 'OS' in computer terms refer to?",
        options: ["Operating System",
            "Open Source",
            "Output System",
            "Optical Storage"],
        correct: 0,
        explanation: "OS stands for Operating System.",
        source: "KUCAT PMCs - Operating Systems"
    },

    {
        id: 2235,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is the primary key characteristic in a relational database?",
        options: ["Can be NULL",
            "Uniquely identifies a record",
            "Always an integer",
            "Must be a foreign key"],
        correct: 1,
        explanation: "A primary key uniquely identifies each row and cannot be NULL.",
        source: "KUCAT PMCs - Database"
    },

    {
        id: 2236,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The worst-case time complexity of binary search on a sorted array is:",
        options: ["O(n)",
            "O(log n)",
            "O(n²)",
            "O(1)"],
        correct: 1,
        explanation: "Binary search halves the search space each step: O(log n).",
        source: "KUCAT PMCs - Algorithms"
    },

    {
        id: 2237,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which device converts analog signals to digital signals?",
        options: ["Router",
            "Modem",
            "Switch",
            "Hub"],
        correct: 1,
        explanation: "A modem modulates and demodulates, converting analog to digital and vice versa.",
        source: "KUCAT PMCs - Networking"
    },

    {
        id: 2238,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "In C, which operator is used to access the value pointed to by a pointer?",
        options: ["&",
            "*",
            "#",
            "->"],
        correct: 1,
        explanation: "The dereference operator '*' accesses the value at the pointer address.",
        source: "KUCAT PMCs - Programming"
    },

    {
        id: 2239,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is NOT a web browser?",
        options: ["Chrome",
            "Firefox",
            "Photoshop",
            "Edge"],
        correct: 2,
        explanation: "Photoshop is an image editor, not a web browser.",
        source: "KUCAT PMCs - Computer Fundamentals"
    },

    {
        id: 2240,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which type of network covers the largest geographical area?",
        options: ["LAN",
            "MAN",
            "WAN",
            "PAN"],
        correct: 2,
        explanation: "WAN (Wide Area Network) spans the largest area, e.g., the internet.",
        source: "KUCAT PMCs - Networking"
    },

    {
        id: 2241,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an example of a system software?",
        options: ["MS Word",
            "Operating System",
            "Google Chrome",
            "Photoshop"],
        correct: 1,
        explanation: "The operating system is system software; the rest are application software.",
        source: "KUCAT PMCs - Computer Fundamentals"
    },

    {
        id: 2242,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The binary equivalent of the decimal number 10 is:",
        options: ["1010",
            "1100",
            "1001",
            "1110"],
        correct: 0,
        explanation: "10 = 8 + 2 = 1010 in binary.",
        source: "KUCAT PMCs - Number Systems"
    },

    {
        id: 2243,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following data structures is best for implementing a priority queue?",
        options: ["Stack",
            "Array",
            "Heap",
            "Queue"],
        correct: 2,
        explanation: "A heap allows efficient extraction of the highest/lowest priority element.",
        source: "KUCAT PMCs - Data Structures"
    },

    {
        id: 2244,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which HTTP status code means 'Not Found'?",
        options: ["200",
            "301",
            "404",
            "500"],
        correct: 2,
        explanation: "404 Not Found indicates the requested resource does not exist.",
        source: "KUCAT PMCs - Web Technologies"
    },

    {
        id: 2245,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which key combination is used to copy text on most operating systems?",
        options: ["Ctrl + C",
            "Ctrl + V",
            "Ctrl + X",
            "Ctrl + P"],
        correct: 0,
        explanation: "Ctrl + C copies; Ctrl + V pastes; Ctrl + X cuts.",
        source: "KUCAT PMCs - Computer Fundamentals"
    },

    {
        id: 2246,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which SQL keyword is used to remove duplicate rows from a query result?",
        options: ["UNIQUE",
            "DISTINCT",
            "REMOVE",
            "DIFFERENT"],
        correct: 1,
        explanation: "SELECT DISTINCT eliminates duplicate rows from the result.",
        source: "KUCAT PMCs - Database"
    },

    {
        id: 2247,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an interpreted programming language?",
        options: ["C",
            "C++",
            "Python",
            "Java (compiled to bytecode)"],
        correct: 2,
        explanation: "Python is executed by an interpreter line by line at runtime.",
        source: "KUCAT PMCs - Programming"
    },

    {
        id: 2248,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The full form of URL is:",
        options: ["Uniform Resource Locator",
            "Universal Resource Link",
            "United Resource Locator",
            "Uniform Reference Locator"],
        correct: 0,
        explanation: "URL stands for Uniform Resource Locator.",
        source: "KUCAT PMCs - Web Technologies"
    },

    {
        id: 2249,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which layer of the OSI model handles routing of packets?",
        options: ["Physical",
            "Data Link",
            "Network",
            "Session"],
        correct: 2,
        explanation: "The Network layer (Layer 3) handles logical addressing and routing.",
        source: "KUCAT PMCs - Networking"
    },

    {
        id: 2250,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a non-volatile storage device?",
        options: ["RAM",
            "Register",
            "Cache",
            "SSD"],
        correct: 3,
        explanation: "SSD (Solid State Drive) retains data without power, unlike RAM/cache/registers.",
        source: "KUCAT PMCs - Computer Fundamentals"
    },

    {
        id: 2251,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The time complexity of accessing an element by index in an array is:",
        options: ["O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"],
        correct: 2,
        explanation: "Array index access is constant time O(1).",
        source: "KUCAT PMCs - Data Structures"
    },

    {
        id: 2252,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a relational database management system?",
        options: ["MySQL",
            "HTML",
            "Linux",
            "Apache"],
        correct: 0,
        explanation: "MySQL is an RDBMS; HTML is markup, Linux an OS, Apache a web server.",
        source: "KUCAT PMCs - Database"
    },

    {
        id: 2253,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an output device?",
        options: ["Keyboard",
            "Mouse",
            "Monitor",
            "Scanner"],
        correct: 2,
        explanation: "A monitor displays output; keyboard, mouse, and scanner are input devices.",
        source: "KUCAT PMCs - Computer Fundamentals"
    },

    {
        id: 2254,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order?",
        options: ["Merge Sort",
            "Bubble Sort",
            "Quick Sort",
            "Heap Sort"],
        correct: 1,
        explanation: "Bubble Sort repeatedly swaps adjacent out-of-order elements.",
        source: "KUCAT PMCs - Algorithms"
    },

    {
        id: 2255,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The hexadecimal equivalent of the decimal number 255 is:",
        options: ["FF",
            "EE",
            "F0",
            "0F"],
        correct: 0,
        explanation: "255 decimal = 0xFF in hexadecimal.",
        source: "KUCAT PMCs - Number Systems"
    },

    {
        id: 2256,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to uniquely identify a computer on a network?",
        options: ["IP Address",
            "MAC Address",
            "Both IP and MAC",
            "URL"],
        correct: 2,
        explanation: "The IP address identifies the host on a network; the MAC address is the hardware address.",
        source: "KUCAT PMCs - Networking"
    },

    {
        id: 2257,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "In object-oriented programming, which feature allows a class to inherit properties of another class?",
        options: ["Encapsulation",
            "Polymorphism",
            "Inheritance",
            "Abstraction"],
        correct: 2,
        explanation: "Inheritance lets a subclass reuse attributes and methods of a parent class.",
        source: "KUCAT PMCs - OOP"
    },

    {
        id: 2258,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an example of free and open-source software?",
        options: ["Windows",
            "Linux",
            "Photoshop",
            "Microsoft Office"],
        correct: 1,
        explanation: "Linux is open source; the others are proprietary software.",
        source: "KUCAT PMCs - Software"
    },

    {
        id: 2259,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which protocol is used to securely browse the web (HTTPS)?",
        options: ["SSL/TLS over HTTP",
            "FTP",
            "Telnet",
            "SMTP"],
        correct: 0,
        explanation: "HTTPS runs HTTP over SSL/TLS encryption for secure communication.",
        source: "KUCAT PMCs - Networking"
    },

    {
        id: 2260,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The term 'deadlock' in operating systems refers to:",
        options: ["Two processes waiting on each other indefinitely",
            "A program that crashes",
            "A full disk",
            "A slow network"],
        correct: 0,
        explanation: "Deadlock occurs when processes hold resources and wait for resources held by each other.",
        source: "KUCAT PMCs - Operating Systems"
    },

    {
        id: 2261,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a spreadsheet application?",
        options: ["MS Word",
            "MS Excel",
            "MS PowerPoint",
            "Notepad"],
        correct: 1,
        explanation: "MS Excel is a spreadsheet application for tabular data and calculations.",
        source: "KUCAT PMCs - Application Software"
    },

    {
        id: 2262,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which traversal of a binary tree visits the root last?",
        options: ["Preorder",
            "Inorder",
            "Postorder",
            "Level order"],
        correct: 2,
        explanation: "Postorder visits left, right, then root (root last).",
        source: "KUCAT PMCs - Data Structures"
    },

    {
        id: 2263,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to connect different networks together?",
        options: ["Router",
            "Hub",
            "Repeater",
            "Modem"],
        correct: 0,
        explanation: "A router forwards packets between different networks.",
        source: "KUCAT PMCs - Networking"
    },

    {
        id: 2264,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The brain of a computer that performs arithmetic and logic operations is the:",
        options: ["ALU",
            "Control Unit",
            "Memory Unit",
            "Cache"],
        correct: 0,
        explanation: "The Arithmetic Logic Unit (ALU) performs arithmetic and logical operations.",
        source: "KUCAT PMCs - Computer Architecture"
    },

    {
        id: 2265,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "In SQL, which command is used to add a new row to a table?",
        options: ["ADD",
            "INSERT",
            "UPDATE",
            "CREATE"],
        correct: 1,
        explanation: "INSERT INTO adds new rows to a table.",
        source: "KUCAT PMCs - Database"
    },

    {
        id: 2266,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is the time complexity of the Fibonacci algorithm using naive recursion?",
        options: ["O(n)",
            "O(n log n)",
            "O(2ⁿ)",
            "O(log n)"],
        correct: 2,
        explanation: "Naive recursive Fibonacci has exponential time complexity O(2ⁿ).",
        source: "KUCAT PMCs - Algorithms"
    },

    {
        id: 2267,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a programming language named after a snake?",
        options: ["Java",
            "Python",
            "Cobra",
            "Ruby"],
        correct: 1,
        explanation: "Python is named after Monty Python, not a snake, but it is commonly associated with the snake.",
        source: "KUCAT PMCs - Programming"
    },

    {
        id: 2268,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which OSI layer is responsible for end-to-end reliable data delivery?",
        options: ["Network",
            "Transport",
            "Session",
            "Application"],
        correct: 1,
        explanation: "The Transport layer (Layer 4) provides reliable end-to-end delivery (e.g., TCP).",
        source: "KUCAT PMCs - Networking"
    },

    {
        id: 2269,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which device is used to input data by pointing and clicking?",
        options: ["Printer",
            "Monitor",
            "Mouse",
            "Speaker"],
        correct: 2,
        explanation: "A mouse is a pointing input device.",
        source: "KUCAT PMCs - Computer Fundamentals"
    },

    {
        id: 2270,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following correctly represents the Boolean expression result of 1 AND 0?",
        options: ["1",
            "0",
            "True always",
            "Undefined"],
        correct: 1,
        explanation: "AND returns 1 only if both inputs are 1; 1 AND 0 = 0.",
        source: "KUCAT PMCs - Digital Logic"
    },

    {
        id: 2271,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "What does the term 'scalability' mean in computing?",
        options: ["Ability to grow and handle increased load",
            "Ability to compress data",
            "Speed of a processor",
            "Amount of memory"],
        correct: 0,
        explanation: "Scalability is the ability of a system to handle a growing amount of work.",
        source: "KUCAT PMCs - Computer Fundamentals"
    },

    {
        id: 2272,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a type of computer virus?",
        options: ["Trojan",
            "Modem",
            "Firewall",
            "Antivirus"],
        correct: 0,
        explanation: "A Trojan is a type of malware disguised as legitimate software.",
        source: "KUCAT PMCs - Computer Security"
    },

    {
        id: 2273,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which data structure is used to implement recursion internally?",
        options: ["Queue",
            "Stack",
            "Heap",
            "Array"],
        correct: 1,
        explanation: "The call stack stores activation records of recursive calls.",
        source: "KUCAT PMCs - Data Structures"
    },

    {
        id: 2274,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The shortcut key to save a file in most applications is:",
        options: ["Ctrl + S",
            "Ctrl + N",
            "Ctrl + O",
            "Ctrl + D"],
        correct: 0,
        explanation: "Ctrl + S saves the current file.",
        source: "KUCAT PMCs - Application Software"
    },

    {
        id: 2275,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is NOT a characteristic of cloud computing?",
        options: ["On-demand self-service",
            "Broad network access",
            "Physical hardware purchase required",
            "Measured service"],
        correct: 2,
        explanation: "Cloud computing avoids buying physical hardware; resources are rented on demand.",
        source: "KUCAT PMCs - Cloud Computing"
    },

    {
        id: 2276,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which command in Linux is used to list files and directories?",
        options: ["ls",
            "dir",
            "list",
            "cat"],
        correct: 0,
        explanation: "'ls' lists files and directories in Linux/Unix.",
        source: "KUCAT PMCs - Operating Systems"
    },

    {
        id: 2277,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an example of a web server?",
        options: ["Apache",
            "Chrome",
            "Firefox",
            "MySQL"],
        correct: 0,
        explanation: "Apache HTTP Server is a web server; the others are clients/databases.",
        source: "KUCAT PMCs - Web Technologies"
    },

    {
        id: 2278,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The concept of 'caching' is mainly used to:",
        options: ["Speed up data access",
            "Encrypt data",
            "Reduce storage size",
            "Compress files"],
        correct: 0,
        explanation: "Caches store frequently used data for faster access.",
        source: "KUCAT PMCs - Computer Architecture"
    },

    {
        id: 2279,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following file extensions indicates an executable program in Windows?",
        options: [".exe",
            ".txt",
            ".jpg",
            ".docx"],
        correct: 0,
        explanation: ".exe files are executable programs on Windows.",
        source: "KUCAT PMCs - Computer Fundamentals"
    },

    {
        id: 2280,
        univ: "KU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following statements about a database primary key is TRUE?",
        options: ["It can have NULL values",
            "It must be unique and NOT NULL",
            "It can duplicate values",
            "It is always a foreign key"],
        correct: 1,
        explanation: "A primary key uniquely identifies each record and cannot be NULL or duplicated.",
        source: "KUCAT PMCs - Database"
    },

    {
        id: 3101,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct option: She ............. to school every day.",
        options: ["go",
            "goes",
            "going",
            "gone"],
        correct: 1,
        explanation: "Simple present for habitual action with singular subject: 'goes'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3102,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'ABUNDANT' is:",
        options: ["Scarce",
            "Plentiful",
            "Rare",
            "Little"],
        correct: 1,
        explanation: "'Abundant' means existing in large quantities; plentiful.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3103,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct preposition: He is fond ............. music.",
        options: ["of",
            "in",
            "at",
            "with"],
        correct: 0,
        explanation: "'Fond of' is the correct collocation.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3104,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'VICTORY' is:",
        options: ["Win",
            "Defeat",
            "Triumph",
            "Success"],
        correct: 1,
        explanation: "'Victory' means success; its opposite is defeat.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3105,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: He asked me where I ............. from.",
        options: ["come",
            "came",
            "am coming",
            "had come"],
        correct: 1,
        explanation: "In reported speech, the past tense is used: 'where I came from'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3106,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct article: I saw ............. elephant in the zoo.",
        options: ["a",
            "an",
            "the",
            "no article"],
        correct: 1,
        explanation: "'Elephant' begins with a vowel sound, so 'an' is used.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3107,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The correct plural of 'child' is:",
        options: ["childs",
            "children",
            "childes",
            "childrens"],
        correct: 1,
        explanation: "'Child' is an irregular noun; its plural is 'children'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3108,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Which word is correctly spelled?",
        options: ["Recieve",
            "Receive",
            "Receeve",
            "Recive"],
        correct: 1,
        explanation: "'Receive' follows the rule 'i before e except after c'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3109,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct passive: \"Ram writes a letter.\"",
        options: ["A letter is written by Ram.",
            "A letter was written by Ram.",
            "A letter is being written by Ram.",
            "A letter has been written by Ram."],
        correct: 0,
        explanation: "Simple present passive: am/is/are + past participle.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3110,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "The meaning of the idiom 'once in a blue moon' is:",
        options: ["Very rarely",
            "Every day",
            "During the night",
            "Never"],
        correct: 0,
        explanation: "'Once in a blue moon' means something that happens very rarely.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3111,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Fill in the blank: We ............. our homework before dinner.",
        options: ["do",
            "did",
            "done",
            "doing"],
        correct: 1,
        explanation: "Past tense 'did' for a completed action in the past.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3112,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct question tag: You are not feeling well, .............?",
        options: ["are you",
            "aren't you",
            "do you",
            "don't you"],
        correct: 0,
        explanation: "Negative statement takes a positive tag: 'are you'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3113,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'BRAVE' is:",
        options: ["Cowardly",
            "Courageous",
            "Timid",
            "Afraid"],
        correct: 1,
        explanation: "'Brave' means showing courage; synonymous with courageous.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3114,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Identify the error: \"She don't like coffee.\"",
        options: ["She",
            "don't",
            "like",
            "coffee"],
        correct: 1,
        explanation: "With third-person singular 'she', the correct form is 'doesn't'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3115,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct form: This is the ............. movie I have ever seen.",
        options: ["good",
            "better",
            "best",
            "well"],
        correct: 2,
        explanation: "Superlative 'best' is used when comparing three or more.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3116,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: She has been living in Pokhara ............. 2015.",
        options: ["for",
            "since",
            "from",
            "at"],
        correct: 1,
        explanation: "'Since' is used with a point of time (2015).",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3117,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'ACCEPT' is:",
        options: ["Receive",
            "Refuse",
            "Admit",
            "Allow"],
        correct: 1,
        explanation: "'Accept' means to agree to; its opposite is refuse.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3118,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct indirect speech: She said, \"I will help you.\"",
        options: ["She said that she will help me.",
            "She said that she would help me.",
            "She says that she would help me.",
            "She said that I will help her."],
        correct: 1,
        explanation: "'Will' changes to 'would' in indirect speech.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3119,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Which is the correct spelling?",
        options: ["Beautiful",
            "Beautifull",
            "Beutiful",
            "Beautifal"],
        correct: 0,
        explanation: "'Beautiful' is the correct spelling.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3120,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: Neither of the answers ............. correct.",
        options: ["are",
            "is",
            "were",
            "have been"],
        correct: 1,
        explanation: "'Neither of' takes a singular verb: 'is'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3121,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'QUICK' is:",
        options: ["Slow",
            "Rapid",
            "Lazy",
            "Late"],
        correct: 1,
        explanation: "'Quick' means fast; synonymous with rapid.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3122,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct preposition: He congratulated me ............. my success.",
        options: ["for",
            "on",
            "at",
            "with"],
        correct: 1,
        explanation: "'Congratulate someone on something' is the correct form.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3123,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'FRIENDLY' is:",
        options: ["Kind",
            "Hostile",
            "Helpful",
            "Warm"],
        correct: 1,
        explanation: "'Friendly' means kind and welcoming; its opposite is hostile.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3124,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Complete the sentence: If it rains, the ground ............. wet.",
        options: ["gets",
            "got",
            "will get",
            "would get"],
        correct: 0,
        explanation: "First conditional uses present simple in the if-clause and present/will in the result.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3125,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct form: She is ............. than her sister.",
        options: ["tall",
            "taller",
            "tallest",
            "more tall"],
        correct: 1,
        explanation: "Comparative degree 'taller' is used for comparing two people.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3126,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: I am looking forward ............. you.",
        options: ["to see",
            "to seeing",
            "for seeing",
            "at seeing"],
        correct: 1,
        explanation: "'Look forward to' is followed by a gerund: 'to seeing'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3127,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The word 'NATION' is a:",
        options: ["Verb",
            "Noun",
            "Adjective",
            "Adverb"],
        correct: 1,
        explanation: "'Nation' is a noun naming a country or people.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3128,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct passive: \"She is cooking food.\"",
        options: ["Food is cooked by her.",
            "Food is being cooked by her.",
            "Food was being cooked by her.",
            "Food has been cooked by her."],
        correct: 1,
        explanation: "Present continuous passive: is/are + being + past participle.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3129,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'ANGRY' is:",
        options: ["Happy",
            "Furious",
            "Calm",
            "Quiet"],
        correct: 1,
        explanation: "'Angry' means feeling strong displeasure; synonymous with furious.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3130,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: The committee ............. decided to postpone the meeting.",
        options: ["have",
            "has",
            "are",
            "were"],
        correct: 1,
        explanation: "The committee acting as a single unit takes a singular verb 'has'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3131,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct conjunction: He is poor ............. honest.",
        options: ["but",
            "and",
            "or",
            "so"],
        correct: 0,
        explanation: "'But' shows contrast between being poor and being honest.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3132,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Which sentence is correct?",
        options: ["He don't have any money.",
            "He doesn't have any money.",
            "He doesn't has any money.",
            "He not have any money."],
        correct: 1,
        explanation: "With 'he', the negative auxiliary is 'doesn't' + base verb 'have'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3133,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'EXPENSIVE' is:",
        options: ["Costly",
            "Cheap",
            "Valuable",
            "Pricey"],
        correct: 1,
        explanation: "'Expensive' means costing a lot; the opposite is cheap.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3134,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct form: He has ............. to the market.",
        options: ["go",
            "went",
            "gone",
            "going"],
        correct: 2,
        explanation: "Present perfect uses the past participle: 'has gone'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3135,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'HAPPY' is:",
        options: ["Sad",
            "Joyful",
            "Angry",
            "Tired"],
        correct: 1,
        explanation: "'Happy' means feeling pleasure; synonymous with joyful.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3136,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: He was accused ............. theft.",
        options: ["of",
            "for",
            "with",
            "at"],
        correct: 0,
        explanation: "'Accuse someone of' is the correct collocation.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3137,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Which word is an adverb?",
        options: ["Quick",
            "Quickly",
            "Quickness",
            "Quicken"],
        correct: 1,
        explanation: "'Quickly' is an adverb modifying a verb; 'quick' is an adjective.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3138,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct reported speech: \"Where are you going?\" he asked.",
        options: ["He asked where I was going.",
            "He asked where am I going.",
            "He asked where I am going.",
            "He asked where was I going."],
        correct: 0,
        explanation: "Reported wh-question keeps statement word order and shifts tense to past.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3139,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'LOUD' is:",
        options: ["Noisy",
            "Quiet",
            "High",
            "Strong"],
        correct: 1,
        explanation: "'Loud' means high volume; its opposite is quiet.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3140,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: Would you mind ............. the window?",
        options: ["to open",
            "opening",
            "open",
            "opened"],
        correct: 1,
        explanation: "'Would you mind' is followed by a gerund: 'opening'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3141,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct possessive: This book is ............. .",
        options: ["my",
            "mine",
            "me",
            "myself"],
        correct: 1,
        explanation: "'Mine' is the possessive pronoun used after the verb 'is'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3142,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "The meaning of the idiom 'to hit the nail on the head' is:",
        options: ["To make a mistake",
            "To be exactly right",
            "To hurt someone",
            "To work hard"],
        correct: 1,
        explanation: "'To hit the nail on the head' means to be exactly correct.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3143,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct plural: The ............. are grazing in the field.",
        options: ["sheeps",
            "sheep",
            "sheepes",
            "sheep's"],
        correct: 1,
        explanation: "'Sheep' has the same singular and plural form.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3144,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Identify the error: \"Each of the students have submitted the form.\"",
        options: ["Each",
            "the students",
            "have submitted",
            "the form"],
        correct: 2,
        explanation: "'Each of' takes a singular verb: 'has submitted'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3145,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'ANCIENT' is:",
        options: ["Modern",
            "Old",
            "New",
            "Fresh"],
        correct: 1,
        explanation: "'Ancient' means belonging to very old times.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3146,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: By the time we arrived, the movie ............. .",
        options: ["starts",
            "started",
            "had started",
            "will start"],
        correct: 2,
        explanation: "Past perfect 'had started' is used for an action completed before another past action.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3147,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct article: He is ............. best student in the class.",
        options: ["a",
            "an",
            "the",
            "no article"],
        correct: 2,
        explanation: "'The' is used with superlatives like 'best'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3148,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct passive: \"They will build a hospital here.\"",
        options: ["A hospital will be built here.",
            "A hospital was built here.",
            "A hospital is built here.",
            "A hospital would be built here."],
        correct: 0,
        explanation: "Future passive: will + be + past participle.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3149,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'DANGEROUS' is:",
        options: ["Risky",
            "Safe",
            "Harmful",
            "Risky"],
        correct: 1,
        explanation: "'Dangerous' means likely to cause harm; the opposite is safe.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3150,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: I have known her ............. my childhood.",
        options: ["for",
            "since",
            "from",
            "during"],
        correct: 1,
        explanation: "'Since' is used with a point of time; here it indicates the beginning of the period.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3151,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Which of the following is a concrete noun?",
        options: ["Happiness",
            "Table",
            "Courage",
            "Honesty"],
        correct: 1,
        explanation: "'Table' is a concrete noun (can be seen and touched); the others are abstract.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3152,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct form: She said that she ............. see the doctor the next day.",
        options: ["will",
            "would",
            "can",
            "shall"],
        correct: 1,
        explanation: "'Will' changes to 'would' in indirect speech.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3153,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'DELICIOUS' is:",
        options: ["Tasteless",
            "Tasty",
            "Bitter",
            "Sour"],
        correct: 1,
        explanation: "'Delicious' means highly pleasant to taste; tasty.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3154,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: She prefers tea ............. coffee.",
        options: ["than",
            "to",
            "from",
            "over"],
        correct: 1,
        explanation: "'Prefer X to Y' is the correct structure.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3155,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct question: .......... do you go to the gym? - Twice a week.",
        options: ["How often",
            "How much",
            "How many",
            "How long"],
        correct: 0,
        explanation: "'How often' asks about frequency.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3156,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Which word is the antonym of 'BORROW'?",
        options: ["Lend",
            "Give",
            "Take",
            "Keep"],
        correct: 0,
        explanation: "'Borrow' means to take with intention to return; its opposite is 'lend'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3157,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The past tense of 'buy' is:",
        options: ["buyed",
            "bought",
            "brought",
            "buys"],
        correct: 1,
        explanation: "'Bought' is the past form of 'buy'; 'brought' is from 'bring'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3158,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct sentence:",
        options: ["He told me that he will come.",
            "He told me that he would come.",
            "He told me that he can come.",
            "He tell me that he would come."],
        correct: 1,
        explanation: "'Told' requires past-tense backshifting: 'he would come'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3159,
        univ: "PU",
        subject: "English",
        difficulty: "Easy",
        question: "The word 'EASILY' is formed by adding which suffix?",
        options: ["-ness",
            "-ly",
            "-ful",
            "-ous"],
        correct: 1,
        explanation: "'Easy' + '-ly' = 'easily'; the suffix '-ly' forms adverbs.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3160,
        univ: "PU",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: The thief was caught ............. the police.",
        options: ["by",
            "with",
            "from",
            "of"],
        correct: 0,
        explanation: "Passive voice agent is introduced with 'by'.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3161,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 2³ × 2⁴ is:",
        options: ["2⁷",
            "2¹²",
            "4⁷",
            "2⁶"],
        correct: 0,
        explanation: "When multiplying powers with the same base, add exponents: 2³⁺⁴ = 2⁷.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3162,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If x + 5 = 12, then x equals:",
        options: ["5",
            "7",
            "17",
            "12"],
        correct: 1,
        explanation: "x = 12 - 5 = 7.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3163,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of 15% of 200 is:",
        options: ["15",
            "20",
            "30",
            "25"],
        correct: 2,
        explanation: "15/100 × 200 = 30.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3164,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The sum of the interior angles of a triangle is:",
        options: ["90°",
            "180°",
            "270°",
            "360°"],
        correct: 1,
        explanation: "The interior angles of a triangle always sum to 180°.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3165,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If A = {1,2,3} and B = {2,3,4}, then A ∩ B is:",
        options: ["{1,4}",
            "{2,3}",
            "{1,2,3,4}",
            "{1,2}"],
        correct: 1,
        explanation: "The intersection contains elements common to both sets: {2,3}.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3166,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The derivative of x² + 3x is:",
        options: ["2x + 3",
            "2x",
            "x² + 3",
            "3x + 2"],
        correct: 0,
        explanation: "d/dx (x²) = 2x and d/dx (3x) = 3, so the result is 2x + 3.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3167,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of √169 is:",
        options: ["12",
            "13",
            "14",
            "11"],
        correct: 1,
        explanation: "13 × 13 = 169, so √169 = 13.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3168,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The probability of getting a head when a coin is tossed is:",
        options: ["0",
            "1/2",
            "1",
            "1/4"],
        correct: 1,
        explanation: "A fair coin has two equally likely outcomes; P(Head) = 1/2.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3169,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is 7 × 8?",
        options: ["54",
            "56",
            "64",
            "48"],
        correct: 1,
        explanation: "7 × 8 = 56.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3170,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of log₁₀ 100 is:",
        options: ["1",
            "2",
            "10",
            "100"],
        correct: 1,
        explanation: "10² = 100, so log₁₀ 100 = 2.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3171,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The HCF of 12 and 18 is:",
        options: ["3",
            "6",
            "9",
            "12"],
        correct: 1,
        explanation: "The highest common factor of 12 and 18 is 6.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3172,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The roots of x² - 3x - 4 = 0 are:",
        options: ["4 and -1",
            "4 and 1",
            "-4 and 1",
            "-4 and -1"],
        correct: 0,
        explanation: "(x - 4)(x + 1) = 0 gives x = 4 or x = -1.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3173,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "If a shopkeeper sells a pen at Rs 60 after buying it for Rs 45, his profit is:",
        options: ["Rs 15",
            "Rs 25",
            "Rs 105",
            "Rs 10"],
        correct: 0,
        explanation: "Profit = Selling price - Cost price = 60 - 45 = Rs 15.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3174,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of sin 90° is:",
        options: ["0",
            "1",
            "1/2",
            "√3/2"],
        correct: 1,
        explanation: "sin 90° = 1.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3175,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The average of 4, 6, 8 and 10 is:",
        options: ["6",
            "7",
            "8",
            "9"],
        correct: 1,
        explanation: "Average = (4+6+8+10)/4 = 28/4 = 7.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3176,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of 2x + 3y when x = 2 and y = 3 is:",
        options: ["10",
            "12",
            "13",
            "15"],
        correct: 2,
        explanation: "2(2) + 3(3) = 4 + 9 = 13.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3177,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The smallest prime number is:",
        options: ["0",
            "1",
            "2",
            "3"],
        correct: 2,
        explanation: "2 is the smallest prime number (1 is not prime).",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3178,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If a:b = 2:3 and b:c = 4:5, then a:c equals:",
        options: ["8:15",
            "2:5",
            "6:15",
            "8:5"],
        correct: 0,
        explanation: "a/b × b/c = a/c = (2/3)×(4/5) = 8/15, so a:c = 8:15.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3179,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The next term of the sequence 2, 5, 8, 11, ... is:",
        options: ["12",
            "13",
            "14",
            "15"],
        correct: 2,
        explanation: "The common difference is 3, so the next term is 11 + 3 = 14.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3180,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of ∫ 3x² dx is:",
        options: ["x³ + c",
            "6x + c",
            "3x³ + c",
            "x² + c"],
        correct: 0,
        explanation: "∫ 3x² dx = 3·(x³/3) + c = x³ + c.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3181,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "How many sides does a hexagon have?",
        options: ["5",
            "6",
            "7",
            "8"],
        correct: 1,
        explanation: "A hexagon has 6 sides.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3182,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of (3 + 4)² is:",
        options: ["25",
            "49",
            "13",
            "24"],
        correct: 1,
        explanation: "(3 + 4)² = 7² = 49.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3183,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which of the following is an irrational number?",
        options: ["1/3",
            "√2",
            "0.5",
            "4"],
        correct: 1,
        explanation: "√2 cannot be expressed as a fraction of integers; it is irrational.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3184,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If a train travels 120 km in 2 hours, its average speed is:",
        options: ["60 km/h",
            "120 km/h",
            "240 km/h",
            "40 km/h"],
        correct: 0,
        explanation: "Speed = Distance/Time = 120/2 = 60 km/h.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3185,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The LCM of 4 and 6 is:",
        options: ["12",
            "24",
            "6",
            "2"],
        correct: 0,
        explanation: "Multiples of 4: 4,8,12,16...; of 6: 6,12...; LCM = 12.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3186,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The area of a circle with radius 7 cm (π = 22/7) is:",
        options: ["154 cm²",
            "44 cm²",
            "49 cm²",
            "22 cm²"],
        correct: 0,
        explanation: "Area = πr² = (22/7) × 49 = 154 cm².",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3187,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 0.25 as a fraction is:",
        options: ["1/4",
            "1/2",
            "2/5",
            "1/5"],
        correct: 0,
        explanation: "0.25 = 25/100 = 1/4.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3188,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If 5 workers can complete a job in 8 days, 4 workers will take:",
        options: ["6 days",
            "10 days",
            "12 days",
            "16 days"],
        correct: 1,
        explanation: "Work × time is constant: 5×8 = 4×d → d = 10 days.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3189,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The number of degrees in a right angle is:",
        options: ["60",
            "90",
            "120",
            "180"],
        correct: 1,
        explanation: "A right angle measures 90°.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3190,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of tan 45° is:",
        options: ["0",
            "1",
            "√3",
            "1/√3"],
        correct: 1,
        explanation: "tan 45° = 1.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3191,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is the place value of 7 in 3,742?",
        options: ["7",
            "70",
            "700",
            "7,000"],
        correct: 2,
        explanation: "7 is in the hundreds place, so its value is 700.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3192,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the ratio of boys to girls is 3:2 and there are 30 boys, the number of girls is:",
        options: ["15",
            "20",
            "25",
            "45"],
        correct: 1,
        explanation: "3 parts = 30 → 1 part = 10 → 2 parts = 20 girls.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3193,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 2⁵ is:",
        options: ["10",
            "16",
            "32",
            "25"],
        correct: 2,
        explanation: "2⁵ = 2×2×2×2×2 = 32.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3194,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The simple interest on Rs 1000 at 5% per annum for 2 years is:",
        options: ["Rs 50",
            "Rs 100",
            "Rs 1100",
            "Rs 200"],
        correct: 1,
        explanation: "SI = PRT/100 = (1000×5×2)/100 = Rs 100.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3195,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which of the following is a prime number?",
        options: ["15",
            "21",
            "23",
            "27"],
        correct: 2,
        explanation: "23 has no divisors other than 1 and itself.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3196,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If f(x) = 3x - 2, then f(4) equals:",
        options: ["10",
            "12",
            "14",
            "9"],
        correct: 0,
        explanation: "f(4) = 3(4) - 2 = 12 - 2 = 10.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3197,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The perimeter of a square with side 5 cm is:",
        options: ["10 cm",
            "15 cm",
            "20 cm",
            "25 cm"],
        correct: 2,
        explanation: "Perimeter of a square = 4 × side = 4 × 5 = 20 cm.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3198,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of (1/2) ÷ (3/4) is:",
        options: ["2/3",
            "3/8",
            "2",
            "4/3"],
        correct: 0,
        explanation: "(1/2) × (4/3) = 4/6 = 2/3.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3199,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The successor of 99 is:",
        options: ["98",
            "99",
            "100",
            "101"],
        correct: 2,
        explanation: "The successor of a number is the next number: 99 + 1 = 100.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3200,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The median of 5, 8, 3, 9, 6 is:",
        options: ["5",
            "6",
            "8",
            "9"],
        correct: 1,
        explanation: "Sorted: 3,5,6,8,9; the middle value is 6.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3201,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which symbol represents 'greater than or equal to'?",
        options: ["≤",
            "≥",
            "<",
            "="],
        correct: 1,
        explanation: "'≥' means greater than or equal to.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3202,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of cos 60° is:",
        options: ["1",
            "1/2",
            "√3/2",
            "0"],
        correct: 1,
        explanation: "cos 60° = 1/2.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3203,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The product of 12 and 11 is:",
        options: ["121",
            "132",
            "123",
            "122"],
        correct: 1,
        explanation: "12 × 11 = 132.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3204,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If x/3 = 4, then x equals:",
        options: ["7",
            "12",
            "1",
            "4/3"],
        correct: 1,
        explanation: "x = 4 × 3 = 12.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3205,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "How many faces does a cube have?",
        options: ["4",
            "6",
            "8",
            "12"],
        correct: 1,
        explanation: "A cube has 6 faces.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3206,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The sum of the first 10 natural numbers is:",
        options: ["45",
            "55",
            "100",
            "50"],
        correct: 1,
        explanation: "Sum = n(n+1)/2 = 10×11/2 = 55.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3207,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 0.5 × 0.5 is:",
        options: ["0.25",
            "2.5",
            "0.05",
            "25"],
        correct: 0,
        explanation: "0.5 × 0.5 = 0.25.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3208,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The slope of the line y = 2x + 3 is:",
        options: ["2",
            "3",
            "1/2",
            "5"],
        correct: 0,
        explanation: "In y = mx + c, the slope m = 2.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3209,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which number is a multiple of 7?",
        options: ["35",
            "34",
            "33",
            "32"],
        correct: 0,
        explanation: "35 = 7 × 5, so it is a multiple of 7.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3210,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of 2/5 + 3/10 is:",
        options: ["5/15",
            "7/10",
            "5/10",
            "1/2"],
        correct: 1,
        explanation: "2/5 = 4/10; 4/10 + 3/10 = 7/10.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3211,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The difference between the largest and smallest of 12, 5, 19, 8 is:",
        options: ["14",
            "7",
            "24",
            "11"],
        correct: 0,
        explanation: "19 - 5 = 14.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3212,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the circumference of a circle is 44 cm, its radius is (π = 22/7):",
        options: ["7 cm",
            "14 cm",
            "22 cm",
            "44 cm"],
        correct: 0,
        explanation: "C = 2πr → 44 = 2×(22/7)×r → r = 7 cm.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3213,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of (-3) + (-4) is:",
        options: ["-7",
            "7",
            "-1",
            "1"],
        correct: 0,
        explanation: "(-3) + (-4) = -7.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3214,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "In how many ways can 4 people be arranged in a row?",
        options: ["4",
            "12",
            "24",
            "16"],
        correct: 2,
        explanation: "4! = 4×3×2×1 = 24 arrangements.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3215,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 9² is:",
        options: ["18",
            "81",
            "72",
            "99"],
        correct: 1,
        explanation: "9 × 9 = 81.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3216,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "A die is rolled. The probability of getting a number greater than 4 is:",
        options: ["1/6",
            "1/3",
            "1/2",
            "2/3"],
        correct: 1,
        explanation: "Numbers greater than 4 are 5 and 6 → 2/6 = 1/3.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3217,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 100 - 25 + 5 is:",
        options: ["80",
            "70",
            "75",
            "85"],
        correct: 0,
        explanation: "100 - 25 = 75; 75 + 5 = 80.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3218,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If 2x + 3 = 11, then x equals:",
        options: ["3",
            "4",
            "5",
            "6"],
        correct: 1,
        explanation: "2x = 8 → x = 4.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3219,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which of the following is the largest fraction?",
        options: ["1/2",
            "2/3",
            "3/4",
            "4/5"],
        correct: 3,
        explanation: "4/5 = 0.8 is the largest among 0.5, 0.667, 0.75, 0.8.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3220,
        univ: "PU",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of √(25 × 4) is:",
        options: ["10",
            "5",
            "20",
            "√29"],
        correct: 0,
        explanation: "√(25×4) = √100 = 10.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3221,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an input device?",
        options: ["Monitor",
            "Keyboard",
            "Printer",
            "Speaker"],
        correct: 1,
        explanation: "A keyboard sends data into the computer, so it is an input device.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3222,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The full form of RAM is:",
        options: ["Read Access Memory",
            "Random Access Memory",
            "Rapid Access Memory",
            "Read Always Memory"],
        correct: 1,
        explanation: "RAM stands for Random Access Memory.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3223,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an example of system software?",
        options: ["MS Excel",
            "Windows 10",
            "Photoshop",
            "VLC Player"],
        correct: 1,
        explanation: "Windows 10 is an operating system (system software); the rest are applications.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3224,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which device is used to display output on paper?",
        options: ["Monitor",
            "Printer",
            "Projector",
            "Scanner"],
        correct: 1,
        explanation: "A printer produces a hard copy (output on paper).",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3225,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "In binary, the decimal number 5 is written as:",
        options: ["101",
            "110",
            "100",
            "011"],
        correct: 0,
        explanation: "5 = 4 + 1 = 101 in binary.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3226,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is NOT a programming language?",
        options: ["Python",
            "Java",
            "HTML",
            "C++"],
        correct: 2,
        explanation: "HTML is a markup language, not a programming language.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3227,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The short form of 'www' is:",
        options: ["World Wide Web",
            "World Web Wide",
            "Wide World Web",
            "Web World Wide"],
        correct: 0,
        explanation: "WWW stands for World Wide Web.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3228,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following stores data permanently?",
        options: ["RAM",
            "Cache",
            "Hard Disk",
            "Register"],
        correct: 2,
        explanation: "A hard disk is non-volatile and stores data permanently.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3229,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which SQL statement is used to create a new database?",
        options: ["CREATE DATABASE",
            "NEW DATABASE",
            "MAKE DATABASE",
            "ADD DATABASE"],
        correct: 0,
        explanation: "CREATE DATABASE is the SQL command to create a database.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3230,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which company developed Windows operating system?",
        options: ["Apple",
            "Google",
            "Microsoft",
            "IBM"],
        correct: 2,
        explanation: "Microsoft developed the Windows operating system.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3231,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "A collection of programs that controls computer hardware is called:",
        options: ["Application software",
            "Operating system",
            "Utility",
            "Driver set"],
        correct: 1,
        explanation: "The operating system manages and controls computer hardware.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3232,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a search engine?",
        options: ["Google",
            "Chrome",
            "Firefox",
            "Notepad"],
        correct: 0,
        explanation: "Google is a search engine; Chrome and Firefox are browsers.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3233,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The extension of a text file is usually:",
        options: [".txt",
            ".exe",
            ".jpg",
            ".mp3"],
        correct: 0,
        explanation: "Plain text files use the .txt extension.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3234,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an example of application software?",
        options: ["Linux",
            "MS Word",
            "BIOS",
            "Windows"],
        correct: 1,
        explanation: "MS Word is application software; Linux, Windows, BIOS are system software.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3235,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which device connects a computer to the internet?",
        options: ["Printer",
            "Modem",
            "Monitor",
            "Keyboard"],
        correct: 1,
        explanation: "A modem enables internet connectivity by converting signals.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3236,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The fastest type of computer memory is:",
        options: ["Cache",
            "RAM",
            "Hard Disk",
            "SSD"],
        correct: 0,
        explanation: "Cache memory is the fastest memory, located closest to the CPU.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3237,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to view web pages?",
        options: ["Browser",
            "Compiler",
            "Editor",
            "Loader"],
        correct: 0,
        explanation: "A web browser renders and displays web pages.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3238,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The shortcut key to copy a file is:",
        options: ["Ctrl + C",
            "Ctrl + A",
            "Ctrl + Z",
            "Ctrl + F"],
        correct: 0,
        explanation: "Ctrl + C copies the selected item.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3239,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is NOT a type of computer network?",
        options: ["LAN",
            "WAN",
            "MAN",
            "UAN"],
        correct: 3,
        explanation: "UAN is not a standard network type; LAN, WAN, and MAN are.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3240,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which component performs all arithmetic and logical operations?",
        options: ["ALU",
            "ROM",
            "CU",
            "Cache"],
        correct: 0,
        explanation: "The Arithmetic Logic Unit (ALU) performs arithmetic and logic operations.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3241,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "In Excel, the formula to add cell A1 and B1 is:",
        options: ["=A1+B1",
            "SUM(A1:B1) alone",
            "A1+B1",
            "=ADD(A1,B1)"],
        correct: 0,
        explanation: "Excel formulas begin with '='; =A1+B1 adds the two cells.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3242,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a social media platform?",
        options: ["Facebook",
            "Windows",
            "Photoshop",
            "MySQL"],
        correct: 0,
        explanation: "Facebook is a social media platform.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3243,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The process of starting a computer is called:",
        options: ["Booting",
            "Loading",
            "Restarting",
            "Initializing"],
        correct: 0,
        explanation: "Booting is the process of starting up a computer.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3244,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an example of open-source software?",
        options: ["Windows",
            "MS Office",
            "Linux",
            "Adobe Photoshop"],
        correct: 2,
        explanation: "Linux is open-source; the others are proprietary.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3245,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a database?",
        options: ["MySQL",
            "Chrome",
            "Ubuntu",
            "Apache"],
        correct: 0,
        explanation: "MySQL is a relational database management system.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3246,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The part of a computer that displays images is the:",
        options: ["CPU",
            "Monitor",
            "Keyboard",
            "Mouse"],
        correct: 1,
        explanation: "The monitor is the display/output device.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3247,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an example of a computer virus type?",
        options: ["Worm",
            "Mouse",
            "Monitor",
            "Driver"],
        correct: 0,
        explanation: "A worm is a self-replicating type of malware.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3248,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "What does CPU stand for?",
        options: ["Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Unit",
            "Control Processing Unit"],
        correct: 0,
        explanation: "CPU stands for Central Processing Unit.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3249,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which key is used to delete a character to the left of the cursor?",
        options: ["Delete",
            "Backspace",
            "Enter",
            "Shift"],
        correct: 1,
        explanation: "Backspace deletes the character to the left of the cursor.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3250,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The brain of the computer is the:",
        options: ["Monitor",
            "CPU",
            "Hard disk",
            "Keyboard"],
        correct: 1,
        explanation: "The CPU is known as the brain of the computer.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3251,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to protect a computer from viruses?",
        options: ["Antivirus software",
            "Browser",
            "Word processor",
            "Compiler"],
        correct: 0,
        explanation: "Antivirus software detects and removes malware.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3252,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The default extension of a PowerPoint presentation is:",
        options: [".ppt/.pptx",
            ".doc",
            ".xls",
            ".txt"],
        correct: 0,
        explanation: "PowerPoint files use .ppt or .pptx extensions.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3253,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a programming language used for web development?",
        options: ["JavaScript",
            "MS Word",
            "Photoshop",
            "Windows"],
        correct: 0,
        explanation: "JavaScript is a programming language used for web development.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3254,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is used to store huge amounts of data for a long time?",
        options: ["RAM",
            "Cache",
            "Hard disk",
            "Register"],
        correct: 2,
        explanation: "Hard disks provide large non-volatile storage for long-term data.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3255,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The process of converting source code into machine code is called:",
        options: ["Compilation",
            "Execution",
            "Interpretation",
            "Assembly"],
        correct: 0,
        explanation: "Compilation translates source code into machine-readable code.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3256,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an example of a portable document file?",
        options: [".pdf",
            ".exe",
            ".mp4",
            ".zip"],
        correct: 0,
        explanation: "PDF (Portable Document Format) files use the .pdf extension.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3257,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is NOT an operating system?",
        options: ["Android",
            "iOS",
            "Windows 10",
            "MS Access"],
        correct: 3,
        explanation: "MS Access is a database application, not an operating system.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3258,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The full form of USB is:",
        options: ["Universal Serial Bus",
            "United Serial Bus",
            "Universal System Bus",
            "Uniform Serial Bus"],
        correct: 0,
        explanation: "USB stands for Universal Serial Bus.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3259,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to connect multiple computers in a single office network?",
        options: ["Switch",
            "Printer",
            "Speaker",
            "Monitor"],
        correct: 0,
        explanation: "A network switch connects devices within a local area network.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3260,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which software is used to create documents like letters and reports?",
        options: ["MS Word",
            "MS Excel",
            "MS PowerPoint",
            "MS Access"],
        correct: 0,
        explanation: "MS Word is a word-processing application for creating documents.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3261,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The 'www' runs on which protocol?",
        options: ["HTTP",
            "FTP",
            "SMTP",
            "POP3"],
        correct: 0,
        explanation: "HTTP (HyperText Transfer Protocol) powers the World Wide Web.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3262,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a unit of memory larger than a gigabyte?",
        options: ["Megabyte",
            "Terabyte",
            "Kilobyte",
            "Byte"],
        correct: 1,
        explanation: "1 TB > 1 GB; a terabyte is larger than a gigabyte.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3263,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to print documents?",
        options: ["Printer",
            "Scanner",
            "Projector",
            "Joystick"],
        correct: 0,
        explanation: "A printer outputs documents onto paper.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3264,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The full form of PDF is:",
        options: ["Portable Document Format",
            "Personal Data File",
            "Public Document Format",
            "Printed Document File"],
        correct: 0,
        explanation: "PDF stands for Portable Document Format.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3265,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an example of a web server software?",
        options: ["Apache",
            "Photoshop",
            "MS Excel",
            "VLC"],
        correct: 0,
        explanation: "Apache is a widely used web server software.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3266,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a pointing device?",
        options: ["Mouse",
            "Keyboard",
            "Microphone",
            "Scanner"],
        correct: 0,
        explanation: "A mouse is a pointing input device.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3267,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to send and receive email?",
        options: ["Outlook",
            "Photoshop",
            "Notepad",
            "Calculator"],
        correct: 0,
        explanation: "Microsoft Outlook is an email client.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3268,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The smallest unit of data in a computer is:",
        options: ["Bit",
            "Byte",
            "Nibble",
            "Word"],
        correct: 0,
        explanation: "A bit (binary digit) is the smallest unit of data.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3269,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a file compression software?",
        options: ["WinRAR",
            "Photoshop",
            "MS Word",
            "Chrome"],
        correct: 0,
        explanation: "WinRAR compresses and archives files.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3270,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which key combination is used to undo an action?",
        options: ["Ctrl + Z",
            "Ctrl + Y",
            "Ctrl + U",
            "Ctrl + X"],
        correct: 0,
        explanation: "Ctrl + Z undoes the last action.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3271,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following devices is used to convert printed documents into digital form?",
        options: ["Scanner",
            "Printer",
            "Plotter",
            "Speaker"],
        correct: 0,
        explanation: "A scanner converts physical documents into digital images.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3272,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an example of cloud storage?",
        options: ["Google Drive",
            "Hard disk",
            "Pen drive",
            "DVD"],
        correct: 0,
        explanation: "Google Drive is cloud storage; the others are local physical storage.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3273,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The language understood directly by a computer is:",
        options: ["Machine language",
            "English",
            "Python",
            "C++"],
        correct: 0,
        explanation: "Computers execute machine language (binary 0s and 1s) directly.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3274,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a type of computer memory that is read-only?",
        options: ["ROM",
            "RAM",
            "Cache",
            "Registers"],
        correct: 0,
        explanation: "ROM (Read-Only Memory) retains data and is generally not writable.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3275,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following commands is used to remove a file in Linux?",
        options: ["rm",
            "del",
            "erase",
            "remove"],
        correct: 0,
        explanation: "'rm' (remove) deletes files in Linux.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3276,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is used to watch videos on a computer?",
        options: ["VLC Player",
            "MS Word",
            "Photoshop",
            "Notepad"],
        correct: 0,
        explanation: "VLC is a media player for playing videos.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3277,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The number system used inside a computer is:",
        options: ["Binary",
            "Decimal",
            "Octal",
            "Hexadecimal"],
        correct: 0,
        explanation: "Computers internally process data in binary (base 2).",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3278,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an example of a browser?",
        options: ["Firefox",
            "Photoshop",
            "Notepad",
            "WinRAR"],
        correct: 0,
        explanation: "Firefox is a web browser.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3279,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to design presentation slides?",
        options: ["PowerPoint",
            "Excel",
            "Access",
            "Outlook"],
        correct: 0,
        explanation: "MS PowerPoint is used to create presentations.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 3280,
        univ: "PU",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an output device?",
        options: ["Speaker",
            "Keyboard",
            "Mouse",
            "Scanner"],
        correct: 0,
        explanation: "A speaker produces sound output; the others are input devices.",
        source: "Pokhara University BCA Entrance Pattern"
    },

    {
        id: 4101,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct option: They ............. football every weekend.",
        options: ["play",
            "plays",
            "playing",
            "played"],
        correct: 0,
        explanation: "Simple present 'play' is used for habitual action with a plural subject.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4102,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'HAPPY' is:",
        options: ["Sad",
            "Glad",
            "Angry",
            "Tired"],
        correct: 1,
        explanation: "'Happy' means feeling pleasure; its synonym is glad.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4103,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: She is interested ............. learning new languages.",
        options: ["on",
            "in",
            "at",
            "for"],
        correct: 1,
        explanation: "'Interested in' is the correct collocation.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4104,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'SUNRISE' is:",
        options: ["Dawn",
            "Sunset",
            "Noon",
            "Morning"],
        correct: 1,
        explanation: "'Sunrise' is the time the sun comes up; the opposite is sunset.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4105,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct indirect speech: He said, \"I am busy now.\"",
        options: ["He said that he was busy then.",
            "He said that he is busy now.",
            "He says that he was busy now.",
            "He told that he is busy then."],
        correct: 0,
        explanation: "'Am' becomes 'was' and 'now' becomes 'then' in indirect speech.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4106,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Which article fits: ............. university is a place of learning.",
        options: ["A",
            "An",
            "The",
            "No article"],
        correct: 0,
        explanation: "'University' begins with a 'y' consonant sound, so 'a' is used.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4107,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The plural of 'tooth' is:",
        options: ["tooths",
            "teeth",
            "teethes",
            "tooth"],
        correct: 1,
        explanation: "'Tooth' is irregular; its plural is 'teeth'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4108,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correctly spelled word:",
        options: ["Neccessary",
            "Necessary",
            "Necesary",
            "Neccesary"],
        correct: 1,
        explanation: "'Necessary' has one 'c' and two 's's.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4109,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct passive: \"She writes a poem.\"",
        options: ["A poem is written by her.",
            "A poem was written by her.",
            "A poem is being written by her.",
            "A poem has written by her."],
        correct: 0,
        explanation: "Simple present passive: am/is/are + past participle.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4110,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "The idiom 'a piece of cake' means:",
        options: ["Something very easy",
            "A delicious meal",
            "A small gift",
            "An expensive item"],
        correct: 0,
        explanation: "'A piece of cake' refers to something that is very easy to do.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4111,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Fill in the blank: Yesterday I ............. to the park.",
        options: ["go",
            "went",
            "gone",
            "going"],
        correct: 1,
        explanation: "Past tense 'went' is used for a completed action yesterday.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4112,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct question tag: He never tells lies, .............?",
        options: ["does he",
            "doesn't he",
            "is he",
            "isn't he"],
        correct: 0,
        explanation: "'Never' is negative, so the tag is positive: 'does he'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4113,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'BEGIN' is:",
        options: ["End",
            "Start",
            "Stop",
            "Finish"],
        correct: 1,
        explanation: "'Begin' means to start.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4114,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Identify the error: \"The news are very good.\"",
        options: ["The",
            "news",
            "are",
            "very good"],
        correct: 2,
        explanation: "'News' is an uncountable noun that takes a singular verb: 'is'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4115,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct form: She is the ............. girl in the class.",
        options: ["smart",
            "smarter",
            "smartest",
            "more smart"],
        correct: 2,
        explanation: "Superlative 'smartest' is used for comparing three or more.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4116,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: I have known him ............. a long time.",
        options: ["since",
            "for",
            "from",
            "at"],
        correct: 1,
        explanation: "'For' is used with a duration of time (a long time).",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4117,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'FRIEND' is:",
        options: ["Ally",
            "Enemy",
            "Partner",
            "Companion"],
        correct: 1,
        explanation: "'Friend' is someone you like; its opposite is enemy.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4118,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct reported speech: She said, \"I am tired.\"",
        options: ["She said that she was tired.",
            "She said that she is tired.",
            "She says that she was tired.",
            "She told that she is tired."],
        correct: 0,
        explanation: "Present tense 'am' becomes past 'was' in indirect speech.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4119,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Which is the correct spelling?",
        options: ["Tomorrow",
            "Tommorow",
            "Tomorow",
            "Tormorrow"],
        correct: 0,
        explanation: "'Tomorrow' is the correct spelling.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4120,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: Each of the players ............. awarded a medal.",
        options: ["were",
            "was",
            "have been",
            "are"],
        correct: 1,
        explanation: "'Each of' takes a singular verb: 'was'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4121,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'TINY' is:",
        options: ["Huge",
            "Small",
            "Large",
            "Big"],
        correct: 1,
        explanation: "'Tiny' means very small.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4122,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct preposition: He is good ............. playing chess.",
        options: ["in",
            "at",
            "on",
            "with"],
        correct: 1,
        explanation: "'Good at' an activity is the correct form.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4123,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'RICH' is:",
        options: ["Wealthy",
            "Poor",
            "Affluent",
            "Prosperous"],
        correct: 1,
        explanation: "'Rich' means having wealth; its opposite is poor.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4124,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Complete the conditional: If I were you, I ............. accept the offer.",
        options: ["will",
            "would",
            "shall",
            "can"],
        correct: 1,
        explanation: "Second conditional uses 'would' in the main clause.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4125,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct comparison: My house is ............. than yours.",
        options: ["big",
            "bigger",
            "biggest",
            "more big"],
        correct: 1,
        explanation: "Comparative 'bigger' is used when comparing two houses.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4126,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: She avoided ............. him.",
        options: ["to meet",
            "meeting",
            "meet",
            "met"],
        correct: 1,
        explanation: "'Avoid' is followed by a gerund: 'meeting'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4127,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The word 'BEAUTIFUL' is a/an:",
        options: ["Noun",
            "Adjective",
            "Verb",
            "Adverb"],
        correct: 1,
        explanation: "'Beautiful' describes a noun, making it an adjective.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4128,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct passive: \"They are painting the walls.\"",
        options: ["The walls are painted by them.",
            "The walls are being painted by them.",
            "The walls were painted by them.",
            "The walls have been painted by them."],
        correct: 1,
        explanation: "Present continuous passive: are + being + past participle.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4129,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'FAMOUS' is:",
        options: ["Unknown",
            "Renowned",
            "Ordinary",
            "Obscure"],
        correct: 1,
        explanation: "'Famous' means known by many people; synonymous with renowned.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4130,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: The scissors ............. on the table.",
        options: ["is",
            "are",
            "was",
            "has been"],
        correct: 1,
        explanation: "'Scissors' is a plural noun and takes a plural verb 'are'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4131,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct conjunction: Study hard ............. you will succeed.",
        options: ["but",
            "and",
            "or",
            "so"],
        correct: 1,
        explanation: "'And' joins two clauses with a positive result.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4132,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Which sentence is grammatically correct?",
        options: ["He don't like tea.",
            "He doesn't likes tea.",
            "He doesn't like tea.",
            "He not like tea."],
        correct: 2,
        explanation: "With 'he', the negative is 'doesn't' + base verb 'like'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4133,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'ALWAYS' is:",
        options: ["Often",
            "Never",
            "Usually",
            "Sometimes"],
        correct: 1,
        explanation: "'Always' means every time; its opposite is never.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4134,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct form: She has ............. her keys.",
        options: ["lost",
            "lose",
            "losing",
            "loses"],
        correct: 0,
        explanation: "Present perfect uses the past participle 'lost'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4135,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'BIG' is:",
        options: ["Small",
            "Large",
            "Tiny",
            "Short"],
        correct: 1,
        explanation: "'Big' means large in size.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4136,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: She was blamed ............. the accident.",
        options: ["for",
            "of",
            "with",
            "at"],
        correct: 0,
        explanation: "'Blame someone for' is the correct collocation.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4137,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Which word is an adjective?",
        options: ["Quickly",
            "Slowly",
            "Soft",
            "Easily"],
        correct: 2,
        explanation: "'Soft' is an adjective; the others are adverbs ending in '-ly'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4138,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Choose the correct reported speech: \"Close the door,\" he said to me.",
        options: ["He asked me to close the door.",
            "He told me close the door.",
            "He said me to close the door.",
            "He asks me to closed the door."],
        correct: 0,
        explanation: "Imperative commands are reported with 'ask/tell + to-infinitive'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4139,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The antonym of 'STRONG' is:",
        options: ["Powerful",
            "Weak",
            "Muscular",
            "Robust"],
        correct: 1,
        explanation: "'Strong' means powerful; its opposite is weak.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4140,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: Do you mind ............. the window?",
        options: ["to close",
            "closing",
            "close",
            "closed"],
        correct: 1,
        explanation: "'Do you mind' is followed by a gerund: 'closing'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4141,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct possessive pronoun: These books are ............. .",
        options: ["their",
            "theirs",
            "them",
            "they"],
        correct: 1,
        explanation: "'Theirs' is the possessive pronoun used after 'are'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4142,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "The idiom 'to cost an arm and a leg' means:",
        options: ["To be very expensive",
            "To be very cheap",
            "To be free",
            "To be painful"],
        correct: 0,
        explanation: "'To cost an arm and a leg' means something is extremely expensive.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4143,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct plural: There are many ............. in the forest.",
        options: ["deers",
            "deer",
            "deeres",
            "deer's"],
        correct: 1,
        explanation: "'Deer' has the same form in singular and plural.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4144,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Identify the error: \"The mob of students were shouting.\"",
        options: ["The mob",
            "of students",
            "were",
            "shouting"],
        correct: 2,
        explanation: "'Mob' is a collective noun acting as one unit, so use 'was'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4145,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "The synonym of 'QUIET' is:",
        options: ["Noisy",
            "Calm",
            "Loud",
            "Busy"],
        correct: 1,
        explanation: "'Quiet' means making little noise; synonymous with calm.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4146,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Medium",
        question: "Fill in the blank: Hardly had I reached the station ............. the train left.",
        options: ["when",
            "than",
            "then",
            "that"],
        correct: 0,
        explanation: "'Hardly...when' is the correct correlative structure.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4147,
        univ: "Purbanchal",
        subject: "English",
        difficulty: "Easy",
        question: "Choose the correct article: He is ............. tallest boy in the class.",
        options: ["a",
            "an",
            "the",
            "no article"],
        correct: 2,
        explanation: "'The' is used before superlatives like 'tallest'.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4148,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 3 + 4 × 2 is:",
        options: ["14",
            "11",
            "12",
            "10"],
        correct: 1,
        explanation: "Using BODMAS: 4 × 2 = 8, then 3 + 8 = 11.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4149,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "What is 20% of 50?",
        options: ["5",
            "10",
            "15",
            "20"],
        correct: 1,
        explanation: "20/100 × 50 = 10.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4150,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If 3x - 7 = 8, then x equals:",
        options: ["3",
            "5",
            "7",
            "15"],
        correct: 1,
        explanation: "3x = 15 → x = 5.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4151,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 2/3 of 9 is:",
        options: ["3",
            "6",
            "12",
            "18"],
        correct: 1,
        explanation: "(2/3) × 9 = 6.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4152,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The next prime number after 11 is:",
        options: ["13",
            "15",
            "17",
            "19"],
        correct: 0,
        explanation: "13 is the next number greater than 11 that is prime.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4153,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The square root of 144 is:",
        options: ["11",
            "12",
            "13",
            "14"],
        correct: 1,
        explanation: "12 × 12 = 144, so √144 = 12.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4154,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the angles of a triangle are 2x, 3x, and 4x, then x equals:",
        options: ["10",
            "20",
            "30",
            "40"],
        correct: 1,
        explanation: "2x + 3x + 4x = 180 → 9x = 180 → x = 20.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4155,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which of the following numbers is even?",
        options: ["7",
            "11",
            "14",
            "19"],
        correct: 2,
        explanation: "14 is divisible by 2, so it is even.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4156,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of 5² + 12² is:",
        options: ["25",
            "144",
            "169",
            "289"],
        correct: 2,
        explanation: "25 + 144 = 169 (a Pythagorean triple: 5-12-13).",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4157,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The HCF of 8 and 12 is:",
        options: ["2",
            "4",
            "6",
            "8"],
        correct: 1,
        explanation: "Common factors of 8 and 12 are 1, 2, 4; the highest is 4.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4158,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the radius of a circle is 5 cm, its diameter is:",
        options: ["2.5 cm",
            "5 cm",
            "10 cm",
            "25 cm"],
        correct: 2,
        explanation: "Diameter = 2 × radius = 10 cm.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4159,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 6 ÷ 2 (1 + 2) is:",
        options: ["1",
            "9",
            "6",
            "3"],
        correct: 1,
        explanation: "Using BODMAS: 1+2=3, 6÷2=3, 3×3=9.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4160,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "A shirt marked Rs 400 is sold at a 25% discount. The selling price is:",
        options: ["Rs 100",
            "Rs 300",
            "Rs 350",
            "Rs 375"],
        correct: 1,
        explanation: "Discount = 25% of 400 = 100; SP = 400 - 100 = Rs 300.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4161,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The sum of the angles around a point is:",
        options: ["180°",
            "270°",
            "360°",
            "90°"],
        correct: 2,
        explanation: "Angles around a point always sum to 360°.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4162,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of 0.75 as a percentage is:",
        options: ["7.5%",
            "75%",
            "0.75%",
            "750%"],
        correct: 1,
        explanation: "0.75 × 100 = 75%.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4163,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which of the following is a multiple of both 3 and 5?",
        options: ["10",
            "12",
            "15",
            "18"],
        correct: 2,
        explanation: "15 = 3 × 5, so it is a multiple of both 3 and 5.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4164,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If x:y = 4:5 and x = 20, then y equals:",
        options: ["16",
            "25",
            "24",
            "5"],
        correct: 1,
        explanation: "4 parts = 20 → 1 part = 5 → y = 5 × 5 = 25.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4165,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 100 ÷ 25 × 2 is:",
        options: ["2",
            "4",
            "8",
            "50"],
        correct: 2,
        explanation: "100 ÷ 25 = 4, then 4 × 2 = 8.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4166,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The probability of selecting a vowel from the word 'NEPAL' is:",
        options: ["1/5",
            "2/5",
            "3/5",
            "1/2"],
        correct: 1,
        explanation: "Vowels in NEPAL are E and A → 2 out of 5 letters.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4167,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 7³ is:",
        options: ["21",
            "343",
            "147",
            "49"],
        correct: 1,
        explanation: "7 × 7 × 7 = 343.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4168,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If a rectangle has length 8 cm and breadth 5 cm, its area is:",
        options: ["13 cm²",
            "26 cm²",
            "40 cm²",
            "80 cm²"],
        correct: 2,
        explanation: "Area = length × breadth = 8 × 5 = 40 cm².",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4169,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The predecessor of 1,000 is:",
        options: ["999",
            "1,001",
            "998",
            "990"],
        correct: 0,
        explanation: "The predecessor is 1,000 - 1 = 999.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4170,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The simple interest on Rs 2,000 at 10% for 3 years is:",
        options: ["Rs 200",
            "Rs 400",
            "Rs 600",
            "Rs 800"],
        correct: 2,
        explanation: "SI = (2000 × 10 × 3)/100 = Rs 600.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4171,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which is the smallest 3-digit number?",
        options: ["99",
            "100",
            "101",
            "110"],
        correct: 1,
        explanation: "100 is the smallest three-digit number.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4172,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If f(x) = 2x + 1, then f(3) equals:",
        options: ["5",
            "6",
            "7",
            "8"],
        correct: 2,
        explanation: "f(3) = 2(3) + 1 = 7.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4173,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 10 - 3 × 2 is:",
        options: ["14",
            "4",
            "7",
            "5"],
        correct: 1,
        explanation: "3 × 2 = 6, then 10 - 6 = 4.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4174,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The mean of 3, 6, 9, 12, 15 is:",
        options: ["7",
            "8",
            "9",
            "10"],
        correct: 2,
        explanation: "Sum = 45; mean = 45/5 = 9.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4175,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "A car covers 90 km in 3 hours. Its speed is:",
        options: ["30 km/h",
            "45 km/h",
            "60 km/h",
            "90 km/h"],
        correct: 0,
        explanation: "Speed = 90/3 = 30 km/h.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4176,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of x² - 9 when x = 5 is:",
        options: ["14",
            "16",
            "25",
            "34"],
        correct: 1,
        explanation: "5² - 9 = 25 - 9 = 16.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4177,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which of the following is a rational number?",
        options: ["√2",
            "√3",
            "1/4",
            "π"],
        correct: 2,
        explanation: "1/4 is a ratio of two integers, so it is rational.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4178,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If 4 workers finish a job in 6 days, how long will 12 workers take?",
        options: ["1 day",
            "2 days",
            "3 days",
            "18 days"],
        correct: 1,
        explanation: "Work constant: 4×6 = 12×d → d = 2 days.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4179,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 2/5 + 1/5 is:",
        options: ["3/10",
            "3/5",
            "2/10",
            "1/5"],
        correct: 1,
        explanation: "Same denominator: (2+1)/5 = 3/5.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4180,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The length of the hypotenuse of a right triangle with legs 3 and 4 is:",
        options: ["5",
            "6",
            "7",
            "12"],
        correct: 0,
        explanation: "√(3² + 4²) = √25 = 5 (3-4-5 Pythagorean triple).",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4181,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 0.1 + 0.2 + 0.3 is:",
        options: ["0.5",
            "0.6",
            "0.7",
            "0.9"],
        correct: 1,
        explanation: "0.1 + 0.2 + 0.3 = 0.6.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4182,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If the sum of two angles is 90°, the angles are called:",
        options: ["Supplementary",
            "Complementary",
            "Vertical",
            "Adjacent"],
        correct: 1,
        explanation: "Complementary angles sum to 90°.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4183,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The number of vertices of a cube is:",
        options: ["6",
            "8",
            "10",
            "12"],
        correct: 1,
        explanation: "A cube has 8 vertices (corners).",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4184,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of 5/8 as a decimal is:",
        options: ["0.5",
            "0.6",
            "0.625",
            "0.75"],
        correct: 2,
        explanation: "5 ÷ 8 = 0.625.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4185,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "Which number is the largest: 0.3, 1/3, 0.33, 30%?",
        options: ["0.3",
            "1/3",
            "0.33",
            "30%"],
        correct: 1,
        explanation: "1/3 ≈ 0.3333 is slightly larger than 0.33 and 0.3; 30% = 0.3.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4186,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The value of (-2)³ is:",
        options: ["-6",
            "-8",
            "8",
            "6"],
        correct: 1,
        explanation: "(-2)³ = (-2)(-2)(-2) = -8.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4187,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The LCM of 5 and 7 is:",
        options: ["12",
            "35",
            "5",
            "7"],
        correct: 1,
        explanation: "5 and 7 are co-prime, so their LCM is 5 × 7 = 35.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4188,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If x + y = 10 and x - y = 2, then x equals:",
        options: ["4",
            "6",
            "8",
            "12"],
        correct: 1,
        explanation: "Adding: 2x = 12 → x = 6.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4189,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 2² + 3² is:",
        options: ["10",
            "13",
            "12",
            "25"],
        correct: 1,
        explanation: "4 + 9 = 13.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4190,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "A number increased by 25% becomes 125. The original number is:",
        options: ["75",
            "100",
            "150",
            "300"],
        correct: 1,
        explanation: "1.25x = 125 → x = 100.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4191,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "How many degrees are in half a right angle?",
        options: ["30",
            "45",
            "60",
            "90"],
        correct: 1,
        explanation: "Half of 90° is 45°.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4192,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "The sum of the first 5 odd numbers is:",
        options: ["15",
            "20",
            "25",
            "30"],
        correct: 2,
        explanation: "1 + 3 + 5 + 7 + 9 = 25.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4193,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Easy",
        question: "The value of 11 × 12 is:",
        options: ["121",
            "132",
            "133",
            "142"],
        correct: 1,
        explanation: "11 × 12 = 132.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4194,
        univ: "Purbanchal",
        subject: "Mathematics",
        difficulty: "Medium",
        question: "If 30% of a number is 60, the number is:",
        options: ["180",
            "200",
            "150",
            "90"],
        correct: 1,
        explanation: "0.30x = 60 → x = 200.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4195,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is hardware?",
        options: ["MS Word",
            "Keyboard",
            "Windows",
            "Photoshop"],
        correct: 1,
        explanation: "A keyboard is a physical hardware component.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4196,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The full form of ROM is:",
        options: ["Read Only Memory",
            "Random Only Memory",
            "Rapid Operating Memory",
            "Read Output Memory"],
        correct: 0,
        explanation: "ROM stands for Read Only Memory.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4197,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a type of computer?",
        options: ["Laptop",
            "Monitor",
            "Keyboard",
            "Printer"],
        correct: 0,
        explanation: "A laptop is a type of computer; the others are peripherals.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4198,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is used to type text?",
        options: ["Keyboard",
            "Mouse",
            "Printer",
            "Speaker"],
        correct: 0,
        explanation: "A keyboard is the primary device for typing text.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4199,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "In binary, the decimal number 7 is written as:",
        options: ["111",
            "110",
            "101",
            "100"],
        correct: 0,
        explanation: "7 = 4 + 2 + 1 = 111 in binary.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4200,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an output device?",
        options: ["Printer",
            "Scanner",
            "Keyboard",
            "Microphone"],
        correct: 0,
        explanation: "A printer produces output on paper.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4201,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which software is used for calculations and data tables?",
        options: ["MS Excel",
            "MS Word",
            "PowerPoint",
            "Notepad"],
        correct: 0,
        explanation: "MS Excel is a spreadsheet program for calculations and tables.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4202,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The full form of SMS is:",
        options: ["Short Message Service",
            "Simple Message System",
            "Short Mail Service",
            "Social Media Service"],
        correct: 0,
        explanation: "SMS stands for Short Message Service.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4203,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is NOT application software?",
        options: ["MS Word",
            "Google Chrome",
            "Windows 10",
            "MS Excel"],
        correct: 2,
        explanation: "Windows 10 is an operating system; the rest are applications.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4204,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which device is used to store a single piece of data as a binary value?",
        options: ["Bit",
            "Byte",
            "Nibble",
            "Word"],
        correct: 0,
        explanation: "A bit is a single binary value (0 or 1).",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4205,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to browse the internet?",
        options: ["Chrome",
            "Word",
            "Excel",
            "Access"],
        correct: 0,
        explanation: "Chrome is a web browser used to access the internet.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4206,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The full form of CPU is:",
        options: ["Central Processing Unit",
            "Central Program Unit",
            "Computer Processing Unit",
            "Central Processor Utility"],
        correct: 0,
        explanation: "CPU stands for Central Processing Unit.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4207,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an example of a presentation tool?",
        options: ["PowerPoint",
            "Photoshop",
            "Notepad",
            "Calculator"],
        correct: 0,
        explanation: "MS PowerPoint is used to create presentations.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4208,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which key is used to move to the next line?",
        options: ["Enter",
            "Spacebar",
            "Shift",
            "Tab"],
        correct: 0,
        explanation: "The Enter key moves to the next line.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4209,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The network that connects computers within a building is called:",
        options: ["LAN",
            "WAN",
            "Internet",
            "VPN"],
        correct: 0,
        explanation: "A LAN (Local Area Network) connects computers within a limited area.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4210,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a storage device?",
        options: ["Pen drive",
            "Monitor",
            "Printer",
            "Speaker"],
        correct: 0,
        explanation: "A pen drive (USB flash drive) is a storage device.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4211,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a system software?",
        options: ["Linux",
            "MS Excel",
            "Photoshop",
            "VLC"],
        correct: 0,
        explanation: "Linux is an operating system (system software).",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4212,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The shortcut key for 'Save As' is:",
        options: ["F12",
            "F5",
            "F2",
            "F7"],
        correct: 0,
        explanation: "F12 opens 'Save As' in most applications.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4213,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a web address protocol?",
        options: ["HTTP",
            "HTML",
            "USB",
            "CPU"],
        correct: 0,
        explanation: "HTTP is a protocol used for web communication.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4214,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following stores instructions for the computer?",
        options: ["Software",
            "Hardware",
            "Virus",
            "Cable"],
        correct: 0,
        explanation: "Software consists of instructions and programs that a computer runs.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4215,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a database program?",
        options: ["MS Access",
            "Notepad",
            "Chrome",
            "WinRAR"],
        correct: 0,
        explanation: "MS Access is a database management application.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4216,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which device converts digital signals to sounds?",
        options: ["Speaker",
            "Mouse",
            "Keyboard",
            "Scanner"],
        correct: 0,
        explanation: "A speaker converts digital signals into audible sound.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4217,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The process of writing data to a storage device is called:",
        options: ["Writing/Saving",
            "Reading",
            "Deleting",
            "Formatting"],
        correct: 0,
        explanation: "Saving writes data onto a storage medium.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4218,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an email service?",
        options: ["Gmail",
            "Facebook",
            "YouTube",
            "Instagram"],
        correct: 0,
        explanation: "Gmail is an email service provided by Google.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4219,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which unit measures processing speed of a CPU?",
        options: ["Hertz (GHz)",
            "Bytes",
            "Pixels",
            "Decibels"],
        correct: 0,
        explanation: "CPU speed is measured in Hertz (GHz).",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4220,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is used to move the pointer on the screen?",
        options: ["Mouse",
            "Keyboard",
            "Printer",
            "Scanner"],
        correct: 0,
        explanation: "A mouse moves the on-screen pointer.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4221,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is NOT a valid file extension for an image?",
        options: [".jpg",
            ".png",
            ".gif",
            ".exe"],
        correct: 3,
        explanation: ".exe is an executable file, not an image format.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4222,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The process of deleting unnecessary files to free space is called:",
        options: ["Cleanup",
            "Compiling",
            "Booting",
            "Upgrading"],
        correct: 0,
        explanation: "Disk cleanup removes unnecessary files to free space.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4223,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an example of instant messaging software?",
        options: ["WhatsApp",
            "Photoshop",
            "MS Word",
            "WinRAR"],
        correct: 0,
        explanation: "WhatsApp is an instant messaging application.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4224,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The full form of VDU is:",
        options: ["Visual Display Unit",
            "Video Data Unit",
            "Virtual Display Unit",
            "Visual Data Unit"],
        correct: 0,
        explanation: "VDU stands for Visual Display Unit (monitor).",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4225,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to protect data during transmission?",
        options: ["Encryption",
            "Formatting",
            "Compression",
            "Booting"],
        correct: 0,
        explanation: "Encryption protects data by encoding it during transmission.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4226,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a word processor?",
        options: ["MS Word",
            "MS Excel",
            "MS Access",
            "PowerPoint"],
        correct: 0,
        explanation: "MS Word is a word-processing application.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4227,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The 8-bit unit of data is called:",
        options: ["Byte",
            "Bit",
            "Nibble",
            "Word"],
        correct: 0,
        explanation: "A byte is composed of 8 bits.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4228,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is used to view a website?",
        options: ["Browser",
            "Compiler",
            "Loader",
            "Editor"],
        correct: 0,
        explanation: "A web browser is used to view websites.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4229,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an example of a translator program?",
        options: ["Compiler",
            "Browser",
            "Virus",
            "Driver"],
        correct: 0,
        explanation: "A compiler translates high-level code into machine code.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4230,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "The key used to type capital letters is:",
        options: ["Shift",
            "Enter",
            "Backspace",
            "Delete"],
        correct: 0,
        explanation: "The Shift key is used to type capital letters.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4231,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is an operating system for mobile phones?",
        options: ["Android",
            "Linux",
            "Windows XP",
            "DOS"],
        correct: 0,
        explanation: "Android is a mobile operating system.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4232,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is used to listen to audio?",
        options: ["Headphones",
            "Monitor",
            "Keyboard",
            "Mouse"],
        correct: 0,
        explanation: "Headphones are output devices for audio.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4233,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The full form of Wi-Fi is:",
        options: ["Wireless Fidelity",
            "Wireless Frequency",
            "Wide Fidelity",
            "Wire Function"],
        correct: 0,
        explanation: "Wi-Fi stands for Wireless Fidelity.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4234,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a file type for music?",
        options: [".mp3",
            ".jpg",
            ".docx",
            ".pdf"],
        correct: 0,
        explanation: ".mp3 is a common audio file format.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4235,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is used to connect a computer to a network wirelessly?",
        options: ["Wi-Fi adapter",
            "Monitor",
            "Printer",
            "Speaker"],
        correct: 0,
        explanation: "A Wi-Fi adapter enables wireless network connection.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4236,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is an example of a video file?",
        options: [".mp4",
            ".txt",
            ".xls",
            ".css"],
        correct: 0,
        explanation: ".mp4 is a video file format.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4237,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "The 'Ctrl + V' shortcut is used to:",
        options: ["Paste",
            "Copy",
            "Cut",
            "Delete"],
        correct: 0,
        explanation: "Ctrl + V pastes the copied/cut content.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4238,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is a type of printer?",
        options: ["Laser",
            "Scanner",
            "Projector",
            "Webcam"],
        correct: 0,
        explanation: "A laser printer is a type of printer.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4239,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Medium",
        question: "Which of the following is a programming language?",
        options: ["Python",
            "Notepad",
            "Chrome",
            "Windows"],
        correct: 0,
        explanation: "Python is a programming language.",
        source: "Purbanchal University BCA Entrance Pattern"
    },

    {
        id: 4240,
        univ: "Purbanchal",
        subject: "Computer & IT",
        difficulty: "Easy",
        question: "Which of the following is used to give voice input to a computer?",
        options: ["Microphone",
            "Speaker",
            "Monitor",
            "Printer"],
        correct: 0,
        explanation: "A microphone captures voice input.",
        source: "Purbanchal University BCA Entrance Pattern"
    }

];

// --- 2. DEFAULT REVISION FLASHCARDS ---
const defaultFlashcards = [
    { id: 1, category: "CS", term: "OSI Model Layers", definition: "7 Layers: Physical, Data Link, Network, Transport, Session, Presentation, Application." },
    { id: 2, category: "CS", term: "CPU Components", definition: "ALU (Arithmetic Logic Unit), CU (Control Unit), and Registers." },
    { id: 3, category: "CS", term: "Stack Data Structure", definition: "LIFO (Last In First Out) system. Primary operations: Push and Pop." },
    { id: 4, category: "Math", term: "Pythagorean Identity", definition: "sin²(θ) + cos²(θ) = 1, 1 + tan²(θ) = sec²(θ)." },
    { id: 5, category: "Math", term: "Derivative of x^n", definition: "d/dx [x^n] = n · x^(n-1)." },
    { id: 6, category: "English", term: "Active vs Passive Voice", definition: "Active: Subject performs action. Passive: Object receives action (be + past participle)." },
    { id: 7, category: "CS", term: "Primary Key vs Foreign Key", definition: "Primary Key: Uniquely identifies row (no nulls). Foreign Key: References primary key in another table." },
    { id: 8, category: "Math", term: "AP Sum Formula", definition: "S_n = (n/2) · [2a + (n-1)d] or S_n = (n/2) · [a + l]." }
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
    isAdmin: false, // Default role: Student
    userStats: {
        answered: 0,
        correct: 0,
        streak: 1,
        xp: 150,
        mockExamsDone: 0,
        subjectStats: {
            "Mathematics": { attempted: 0, correct: 0 },
            "English": { attempted: 0, correct: 0 },
            "Computer & IT": { attempted: 0, correct: 0 },
            "Logical Reasoning & GK": { attempted: 0, correct: 0 }
        }
    },
    practice: {
        filteredQuestions: [],
        currentIndex: 0,
        selectedOption: null,
        mode: 'practice',
        subject: 'All',
        univ: 'All',
        difficulty: 'All'
    },
    mock: {
        active: false,
        questions: [],
        currentIndex: 0,
        currentSection: 0,
        userAnswers: {},
        timeRemaining: 7200,
        timerInterval: null,
        targetUniv: 'TU',
        examFormat: 'TU',
        sections: []
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
            if (Array.isArray(parsed) && parsed.length >= defaultQuestions.length) {
                state.questions = parsed;
            } else if (Array.isArray(parsed)) {
                // Seamlessly merge existing user-added items with updated default questions
                const savedIds = new Set(parsed.map(q => q.id));
                const newDefaults = defaultQuestions.filter(q => !savedIds.has(q.id));
                state.questions = [...parsed, ...newDefaults];
            } else {
                state.questions = [...defaultQuestions];
            }
        } catch (e) {
            state.questions = [...defaultQuestions];
        }
    } else {
        state.questions = [...defaultQuestions];
    }

    // Ensure all questions have fallback metadata
    state.questions.forEach((q, idx) => {
        if (!q.univ) q.univ = "TU";
        if (!q.id) q.id = 1000 + idx;
        if (!q.difficulty) q.difficulty = "Medium";
        if (!q.source) q.source = `${q.univ || 'Nepal'} Entrance Question Bank`;
    });

    state.flashcards = [...defaultFlashcards];
}

function saveStateToStorage() {
    try {
        localStorage.setItem('bca_questions', JSON.stringify(state.questions));
        localStorage.setItem('bca_theme', state.theme);
    } catch (e) {
        console.warn("Storage save warning:", e);
    }
}

// --- 6. THEME TOGGLE ENGINE ---
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }
}

function setTheme(themeName) {
    state.theme = themeName;
    const body = document.body;
    const label = document.getElementById('themeToggleLabel');
    const icon = document.querySelector('#themeToggleBtn i');

    if (themeName === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        if (label) label.textContent = 'Dark Mode';
        if (icon) icon.className = 'fa-solid fa-moon text-indigo';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        if (label) label.textContent = 'Light Mode';
        if (icon) icon.className = 'fa-solid fa-sun text-amber';
    }
    saveStateToStorage();
}

// --- 7. NAVIGATION SYSTEM ---
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-menu .nav-item');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.getAttribute('data-view');
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            switchView(view);
            closeMobileSidebar();
        });
    });

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeMobileSidebar);
    if (overlay) overlay.addEventListener('click', closeMobileSidebar);

    function openMobileSidebar() {
        sidebar?.classList.add('open');
        overlay?.classList.add('active');
    }

    function closeMobileSidebar() {
        sidebar?.classList.remove('open');
        overlay?.classList.remove('active');
    }

    // Dashboard navigation shortcuts
    document.getElementById('dashGoUniversitiesBtn')?.addEventListener('click', () => switchView('universities'));
    document.getElementById('dashImportFileBtn')?.addEventListener('click', () => switchView('import'));
    document.getElementById('dashGoToImportBtn')?.addEventListener('click', () => switchView('import'));
    document.getElementById('quickTestBtn')?.addEventListener('click', () => {
        switchView('practice');
        filterPracticeQuestions();
        showToast("Started Quick 10-Min Randomized Drill!", "info");
    });
}

function switchView(viewName) {
    state.currentView = viewName;
    const views = document.querySelectorAll('.view-panel');
    views.forEach(v => v.classList.remove('active'));

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) targetView.classList.add('active');

    // Update active nav button
    document.querySelectorAll('.nav-menu .nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
    });

    const pageTitle = document.getElementById('pageTitle');
    const pageSub = document.getElementById('pageSubTitle');

    const titles = {
        dashboard: { title: "Dashboard", sub: "Nepal University Entrance Preparation Hub (TU, KU, PU, Purbanchal)" },
        universities: { title: "University Entrance Portals", sub: "Specific entrance criteria, syllabus weightage, and past model papers." },
        practice: { title: "Quick Practice & Randomized Quiz", sub: "Adaptive, randomized questions with instant solution explanations." },
        mocktest: { title: "University Entrance Mock Exams", sub: "Simulated timed entrance examinations with automated scoring." },
        questionbank: { title: "Question Bank & Data Repository", sub: "Search, filter, and review practice questions from credible online sources." },
        flashcards: { title: "Revision Flashcards", sub: "Quick term definitions, computer concepts, and mathematical formulas." },
        import: { title: "Add/Import Question Papers", sub: "Upload custom JSON/TXT files or paste question sets directly." },
        analytics: { title: "Performance & Skill Analytics", sub: "Track accuracy, subject strengths, and overall entrance readiness." }
    };

    if (titles[viewName] && pageTitle && pageSub) {
        pageTitle.textContent = titles[viewName].title;
        pageSub.textContent = titles[viewName].sub;
    }

    if (viewName === 'analytics') renderAnalytics();
    if (viewName === 'questionbank') renderQuestionBank();
}

// --- 8. ADMIN MODE TOGGLE SYSTEM ---
const ADMIN_PASSCODE = "Rijan@123";

function initAdminModule() {
    const adminToggleBtn = document.getElementById('adminToggleBtn');
    if (adminToggleBtn) {
        adminToggleBtn.addEventListener('click', () => {
            if (state.isAdmin) {
                state.isAdmin = false;
                updateAdminUI();
                showToast("Switched to Student View", "info");
            } else {
                openAdminLoginModal();
            }
        });
    }

    const cancelModalBtn = document.getElementById('adminModalCancelBtn');
    const closeModalBtn = document.getElementById('adminModalCloseBtn');
    const saveQBtn = document.getElementById('adminSaveQuestionBtn');

    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeAdminQModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeAdminQModal);
    if (saveQBtn) saveQBtn.addEventListener('click', saveAdminQuestionForm);
    document.getElementById('adminAddQBtn')?.addEventListener('click', () => openAdminQModal());

    document.getElementById('cancelAdminLoginBtn')?.addEventListener('click', closeAdminLoginModal);
    document.getElementById('closeAdminLoginModal')?.addEventListener('click', closeAdminLoginModal);
    document.getElementById('submitAdminLoginBtn')?.addEventListener('click', submitAdminLogin);
    document.getElementById('adminPasscodeInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitAdminLogin();
    });
}

function openAdminLoginModal() {
    const modal = document.getElementById('adminLoginModal');
    const input = document.getElementById('adminPasscodeInput');
    if (modal) modal.classList.remove('hidden');
    if (input) {
        input.value = '';
        input.classList.remove('is-invalid');
        setTimeout(() => input.focus(), 50);
    }
}

function closeAdminLoginModal() {
    const modal = document.getElementById('adminLoginModal');
    if (modal) modal.classList.add('hidden');
    const input = document.getElementById('adminPasscodeInput');
    if (input) input.classList.remove('is-invalid');
}

function submitAdminLogin() {
    const input = document.getElementById('adminPasscodeInput');
    const entered = input ? input.value.trim() : '';

    if (entered === ADMIN_PASSCODE) {
        closeAdminLoginModal();
        state.isAdmin = true;
        updateAdminUI();
        showToast("Admin Mode Unlocked", "success");
    } else {
        showToast("Incorrect admin passcode. Access denied.", "error");
        if (input) {
            input.classList.add('is-invalid');
            input.select();
        }
    }
}

function updateAdminUI() {
    const adminNav = document.getElementById('navItemImport');
    const adminBanner = document.getElementById('dashImportBanner');
    const adminQbar = document.getElementById('adminQbankBar');
    const icon = document.getElementById('adminToggleIcon');
    const text = document.getElementById('adminToggleText');
    const toggleBtn = document.getElementById('adminToggleBtn');

    if (state.isAdmin) {
        adminNav?.classList.remove('hidden');
        adminBanner?.classList.remove('hidden');
        adminQbar?.classList.remove('hidden');
        if (icon) icon.className = 'fa-solid fa-lock-open text-emerald';
        if (text) text.textContent = 'Admin Mode (Active)';
        toggleBtn?.classList.add('active');
    } else {
        adminNav?.classList.add('hidden');
        adminBanner?.classList.add('hidden');
        adminQbar?.classList.add('hidden');
        if (icon) icon.className = 'fa-solid fa-lock';
        if (text) text.textContent = 'Admin Mode';
        toggleBtn?.classList.remove('active');
    }

    renderQuestionBank();
}

function openAdminQModal(questionObj = null) {
    const modal = document.getElementById('adminQuestionModal');
    if (!modal) return;

    const title = document.getElementById('adminModalTitle');
    const idInput = document.getElementById('adminQId');
    const univInput = document.getElementById('adminQUniv');
    const subjInput = document.getElementById('adminQSubject');
    const diffInput = document.getElementById('adminQDifficulty');
    const qTextInput = document.getElementById('adminQText');
    const opt0 = document.getElementById('adminOpt0');
    const opt1 = document.getElementById('adminOpt1');
    const opt2 = document.getElementById('adminOpt2');
    const opt3 = document.getElementById('adminOpt3');
    const correctInput = document.getElementById('adminQCorrect');
    const expInput = document.getElementById('adminQExplanation');

    if (questionObj) {
        if (title) title.textContent = "Edit Practice Question";
        if (idInput) idInput.value = questionObj.id;
        if (univInput) univInput.value = questionObj.univ || "TU";
        if (subjInput) subjInput.value = questionObj.subject || "Mathematics";
        if (diffInput) diffInput.value = questionObj.difficulty || "Medium";
        if (qTextInput) qTextInput.value = questionObj.question;
        if (opt0) opt0.value = questionObj.options[0] || "";
        if (opt1) opt1.value = questionObj.options[1] || "";
        if (opt2) opt2.value = questionObj.options[2] || "";
        if (opt3) opt3.value = questionObj.options[3] || "";
        if (correctInput) correctInput.value = questionObj.correct;
        if (expInput) expInput.value = questionObj.explanation || "";
    } else {
        if (title) title.textContent = "Add New Practice Question";
        if (idInput) idInput.value = "";
        if (qTextInput) qTextInput.value = "";
        if (opt0) opt0.value = "";
        if (opt1) opt1.value = "";
        if (opt2) opt2.value = "";
        if (opt3) opt3.value = "";
        if (expInput) expInput.value = "";
    }

    modal.classList.remove('hidden');
}

function closeAdminQModal() {
    document.getElementById('adminQuestionModal')?.classList.add('hidden');
}

function saveAdminQuestionForm() {
    const idVal = document.getElementById('adminQId').value;
    const univ = document.getElementById('adminQUniv').value;
    const subject = document.getElementById('adminQSubject').value;
    const difficulty = document.getElementById('adminQDifficulty').value;
    const questionText = document.getElementById('adminQText').value.trim();
    const opt0 = document.getElementById('adminOpt0').value.trim();
    const opt1 = document.getElementById('adminOpt1').value.trim();
    const opt2 = document.getElementById('adminOpt2').value.trim();
    const opt3 = document.getElementById('adminOpt3').value.trim();
    const correct = parseInt(document.getElementById('adminQCorrect').value);
    const explanation = document.getElementById('adminQExplanation').value.trim();

    if (!questionText || !opt0 || !opt1 || !opt2 || !opt3) {
        showToast("Please fill in all question fields and options.", "error");
        return;
    }

    const questionObj = {
        id: idVal ? parseInt(idVal) : Date.now(),
        univ,
        subject,
        difficulty,
        question: questionText,
        options: [opt0, opt1, opt2, opt3],
        correct,
        explanation: explanation || "Admin added question.",
        source: "Custom Admin Contribution"
    };

    if (idVal) {
        const index = state.questions.findIndex(q => q.id == idVal);
        if (index !== -1) state.questions[index] = questionObj;
    } else {
        state.questions.unshift(questionObj);
    }

    saveStateToStorage();
    closeAdminQModal();
    filterPracticeQuestions();
    renderQuestionBank();
    updateUI();
    showToast("Question saved successfully!", "success");
}

function deleteQuestion(qId) {
    if (confirm("Are you sure you want to delete this question?")) {
        state.questions = state.questions.filter(q => q.id != qId);
        saveStateToStorage();
        filterPracticeQuestions();
        renderQuestionBank();
        updateUI();
        showToast("Question deleted from question bank.", "info");
    }
}

// --- 9. UNIVERSITY DEDICATED PORTALS ENGINE ---
function initUniversityPortals() {
    const tabBtns = document.querySelectorAll('.univ-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderUniversityPortal(e.currentTarget.getAttribute('data-tab-univ'));
        });
    });

    renderUniversityPortal('TU');

    document.querySelectorAll('.start-univ-exam-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const u = e.currentTarget.getAttribute('data-univ');
            startUnivPracticeSession(u);
        });
    });
}

function renderUniversityPortal(univKey) {
    const container = document.getElementById('univPortalContent');
    if (!container) return;

    const info = universityInfo[univKey] || universityInfo.TU;
    container.innerHTML = `
        <div class="univ-detail-card">
            <div class="detail-header">
                <h3>${escapeHtml(info.name)}</h3>
                <span class="badge badge-univ">${escapeHtml(info.fullTitle)}</span>
            </div>

            <div class="detail-meta">
                <div class="meta-item"><i class="fa-solid fa-clock text-indigo"></i> <strong>Exam Duration:</strong> ${escapeHtml(info.duration)}</div>
                <div class="meta-item"><i class="fa-solid fa-list-check text-emerald"></i> <strong>Total Marks:</strong> ${escapeHtml(info.marks)}</div>
                <div class="meta-item"><i class="fa-solid fa-graduation-cap text-amber"></i> <strong>Eligibility:</strong> ${escapeHtml(info.criteria)}</div>
            </div>

            <div class="syllabus-breakdown">
                <h4><i class="fa-solid fa-chart-pie text-indigo"></i> Marks Breakdown & Weightage:</h4>
                <ul>
                    ${info.breakdown.map(b => `<li><i class="fa-solid fa-check text-emerald"></i> ${escapeHtml(b)}</li>`).join('')}
                </ul>
            </div>

            <div class="preparation-tips">
                <h4><i class="fa-solid fa-lightbulb text-amber"></i> Entrance Preparation Tip:</h4>
                <p>${escapeHtml(info.tips)}</p>
            </div>

            <div class="detail-actions mt-4">
                <button class="btn btn-primary" onclick="startUnivPracticeSession('${univKey}')">
                    <i class="fa-solid fa-play"></i> Start ${univKey} Practice Session
                </button>
            </div>
        </div>
    `;
}

window.startUnivPracticeSession = function(univKey) {
    const select = document.getElementById('practiceUnivSelect');
    if (select) select.value = univKey;
    switchView('practice');
    filterPracticeQuestions();
};

// --- 10. RANDOMIZED PRACTICE QUIZ ENGINE ---
function initPracticeMode() {
    const univSelect = document.getElementById('practiceUnivSelect');
    const subjectSelect = document.getElementById('practiceSubjectSelect');
    const diffSelect = document.getElementById('practiceDifficultySelect');
    const restartBtn = document.getElementById('restartPracticeBtn');
    const randomBtn = document.getElementById('randomQBtn');
    const prevBtn = document.getElementById('prevQBtn');
    const nextBtn = document.getElementById('nextQBtn');

    if (univSelect) univSelect.addEventListener('change', filterPracticeQuestions);
    if (subjectSelect) subjectSelect.addEventListener('change', filterPracticeQuestions);
    if (diffSelect) diffSelect.addEventListener('change', filterPracticeQuestions);

    if (restartBtn) restartBtn.addEventListener('click', filterPracticeQuestions);

    if (randomBtn) {
        randomBtn.addEventListener('click', jumpToRandomQuestion);
    }

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

    // Keyboard Shortcuts for Practice Mode
    document.addEventListener('keydown', (e) => {
        if (state.currentView !== 'practice') return;
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

        if (e.key === 'ArrowRight') {
            nextBtn?.click();
        } else if (e.key === 'ArrowLeft') {
            prevBtn?.click();
        } else if (e.key === 'r' || e.key === 'R') {
            jumpToRandomQuestion();
        } else if (['1', '2', '3', '4'].includes(e.key)) {
            const optIndex = parseInt(e.key) - 1;
            const allOptBtns = document.querySelectorAll('#optionsContainer .option-btn');
            if (allOptBtns[optIndex] && !allOptBtns[optIndex].disabled) {
                allOptBtns[optIndex].click();
            }
        } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
            const letterMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
            const optIndex = letterMap[e.key.toLowerCase()];
            const allOptBtns = document.querySelectorAll('#optionsContainer .option-btn');
            if (allOptBtns[optIndex] && !allOptBtns[optIndex].disabled) {
                allOptBtns[optIndex].click();
            }
        }
    });
}

function jumpToRandomQuestion() {
    const qList = state.practice.filteredQuestions;
    if (!qList || qList.length === 0) return;
    const randomIndex = Math.floor(Math.random() * qList.length);
    state.practice.currentIndex = randomIndex;
    renderPracticeQuestion();
    showToast(`Jumped to random question #${randomIndex + 1}!`, "info");
}

function filterPracticeQuestions() {
    const univSelect = document.getElementById('practiceUnivSelect');
    const subjectSelect = document.getElementById('practiceSubjectSelect');
    const diffSelect = document.getElementById('practiceDifficultySelect');

    const selectedUniv = univSelect ? univSelect.value : 'All';
    const selectedSubj = subjectSelect ? subjectSelect.value : 'All';
    const selectedDiff = diffSelect ? diffSelect.value : 'All';

    let matched = state.questions.filter(q => {
        const qUniv = q.univ || 'TU';
        const qDiff = q.difficulty || 'Medium';
        const matchesUniv = (selectedUniv === 'All') || (qUniv.toUpperCase() === selectedUniv.toUpperCase());
        const matchesSubj = (selectedSubj === 'All') || (q.subject && q.subject.toUpperCase() === selectedSubj.toUpperCase());
        const matchesDiff = (selectedDiff === 'All') || (qDiff.toUpperCase() === selectedDiff.toUpperCase());
        return matchesUniv && matchesSubj && matchesDiff;
    });

    if (matched.length === 0) {
        matched = [...state.questions];
    }

    // Always randomize question order in practice mode
    state.practice.filteredQuestions = shuffleArray(matched);

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

    // Render badges
    document.getElementById('qUnivBadge').textContent = (q.univ ? `${q.univ} Pattern` : "Nepal Pattern");
    document.getElementById('qSubjectBadge').textContent = q.subject || "General";

    const diffBadge = document.getElementById('qDifficultyBadge');
    if (diffBadge) {
        const diff = q.difficulty || "Medium";
        diffBadge.textContent = diff;
        diffBadge.className = `badge badge-difficulty badge-${diff.toLowerCase()}`;
    }

    const sourceBadge = document.getElementById('qSourceBadge');
    if (sourceBadge) {
        sourceBadge.innerHTML = `<i class="fa-solid fa-bookmark text-amber"></i> ${escapeHtml(q.source || "Nepal BCA Question Bank")}`;
    }

    document.getElementById('qIndexText').textContent = '';
    const practiceProgress = document.getElementById('qIndexText').closest('.q-progress-info');
    if (practiceProgress) practiceProgress.style.display = 'none';
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

    const nextBtn = document.getElementById('nextQBtn');
    if (nextBtn) {
        nextBtn.innerHTML = index === qList.length - 1 ? `Finish Practice <i class="fa-solid fa-check"></i>` : `Next Question <i class="fa-solid fa-arrow-right"></i>`;
    }
}

window.resetPracticeFilters = function() {
    document.getElementById('practiceUnivSelect').value = 'All';
    document.getElementById('practiceSubjectSelect').value = 'All';
    if (document.getElementById('practiceDifficultySelect')) {
        document.getElementById('practiceDifficultySelect').value = 'All';
    }
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
const EXAM_FORMATS = {
    TU: {
        name: "Tribhuvan University (TU) BCA Entrance",
        duration: 7200,
        passPercent: 40,
        sections: [
            { key: "Mathematics", label: "Section A - Mathematics", count: 40 },
            { key: "English", label: "Section B - English", count: 40 },
            { key: "Computer & IT", label: "Section C - Computer & IT", count: 20 }
        ]
    },
    KU: {
        name: "Kathmandu University (KU) - KUCAT Pattern",
        duration: 2400,
        passPercent: 50,
        sections: [
            { key: "English", label: "Section A - Verbal Ability", count: 10 },
            { key: "Mathematics", label: "Section B - Numerical Ability", count: 10 },
            { key: "Computer & IT", label: "Section C - Computer Aptitude", count: 10 },
            { key: "Logical Reasoning & GK", label: "Section D - Logical Reasoning", count: 6 }
        ]
    },
    PU: {
        name: "Pokhara University (PU) BCA Entrance",
        duration: 7200,
        passPercent: 40,
        sections: [
            { key: "Mathematics", label: "Section A - Mathematics", count: 40 },
            { key: "English", label: "Section B - English", count: 40 },
            { key: "Computer & IT", label: "Section C - Computer & IT", count: 20 }
        ]
    },
    Purbanchal: {
        name: "Purbanchal University BCA Entrance",
        duration: 7200,
        passPercent: 40,
        sections: [
            { key: "Mathematics", label: "Section A - Mathematics", count: 40 },
            { key: "English", label: "Section B - English", count: 40 },
            { key: "Computer & IT", label: "Section C - Computer & IT", count: 20 }
        ]
    },
    All: {
        name: "General Combined Nepal University Mock Test",
        duration: 7200,
        passPercent: 40,
        sections: [
            { key: "Mathematics", label: "Section A - Mathematics", count: 40 },
            { key: "English", label: "Section B - English", count: 40 },
            { key: "Computer & IT", label: "Section C - Computer & IT", count: 20 }
        ]
    }
};

function formatExamDuration(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.round((seconds % 3600) / 60);
    if (h > 0 && m > 0) return `${h} Hr ${m} Min`;
    if (h > 0) return `${h} Hr`;
    return `${m} Min`;
}

function getSelectedExamFormat() {
    const key = document.getElementById('mockUnivTargetSelect')?.value || 'TU';
    return { key, ...EXAM_FORMATS[key] };
}

function updateMockFormatInfo() {
    const fmt = getSelectedExamFormat();
    const structure = document.getElementById('examStructureInfo');
    const summary = document.getElementById('examSummaryInfo');
    if (!structure && !summary) return;

    const totalQs = fmt.sections.reduce((sum, s) => sum + s.count, 0);

    if (summary) {
        summary.innerHTML = `
            <span class="es-chip"><i class="fa-solid fa-graduation-cap"></i> ${escapeHtml(fmt.name)}</span>
            <span class="es-chip"><i class="fa-solid fa-list-ol"></i> ${totalQs} Questions</span>
            <span class="es-chip"><i class="fa-solid fa-clock"></i> ${formatExamDuration(fmt.duration)}</span>
            <span class="es-chip"><i class="fa-solid fa-check-circle"></i> Pass Mark: ${fmt.passPercent}%</span>
            <span class="es-chip"><i class="fa-solid fa-circle-xmark"></i> Negative Marking: None</span>
        `;
    }

    if (structure) {
        structure.innerHTML = '';
        fmt.sections.forEach(s => {
            const box = document.createElement('div');
            box.className = 'struct-box';
            const shortLabel = s.label.replace('Section ', '').replace(' - ', ' | ');
            box.innerHTML = `<span class="num">${s.count}</span><span class="lbl">${escapeHtml(shortLabel)}</span>`;
            structure.appendChild(box);
        });
    }
}

function buildMockExam(fmt) {
    const sections = [];
    const questions = [];

    fmt.sections.forEach(section => {
        const start = questions.length;
        const pool = shuffleArray(state.questions.filter(q =>
            (q.subject || '').trim().toLowerCase() === section.key.trim().toLowerCase()
        ));
        const picked = pool.slice(0, section.count);
        picked.forEach(q => questions.push(q));
        sections.push({
            key: section.key,
            label: section.label,
            start,
            end: questions.length,
            count: questions.length - start
        });
    });

    return { sections, questions };
}

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
            const review = document.getElementById('mockReviewContainer');
            if (review) review.classList.add('hidden');
        });
    }

    document.getElementById('mockUnivTargetSelect')?.addEventListener('change', updateMockFormatInfo);
    updateMockFormatInfo();

    document.getElementById('reviewAnswersBtn')?.addEventListener('click', () => {
        const container = document.getElementById('mockReviewContainer');
        if (container) container.classList.toggle('hidden');
    });

    document.getElementById('mockPrevBtn')?.addEventListener('click', () => {
        if (state.mock.currentIndex > 0) {
            state.mock.currentIndex--;
            syncMockSectionFromIndex();
            renderMockQuestion();
        }
    });

    document.getElementById('mockNextBtn')?.addEventListener('click', () => {
        if (state.mock.currentIndex < state.mock.questions.length - 1) {
            state.mock.currentIndex++;
            syncMockSectionFromIndex();
            renderMockQuestion();
        }
    });
}

function syncMockSectionFromIndex() {
    const idx = state.mock.currentIndex;
    const secIdx = state.mock.sections.findIndex(s => idx >= s.start && idx < s.end);
    if (secIdx >= 0) state.mock.currentSection = secIdx;
}

function startMockExam() {
    const fmt = getSelectedExamFormat();
    state.mock.examFormat = fmt.key;
    state.mock.targetUniv = fmt.key;
    state.mock.active = true;

    const built = buildMockExam(fmt);
    state.mock.questions = built.questions;
    state.mock.sections = built.sections;
    state.mock.currentSection = 0;
    state.mock.currentIndex = built.sections.length > 0 ? built.sections[0].start : 0;
    state.mock.userAnswers = {};
    state.mock.timeRemaining = fmt.duration;

    document.getElementById('mockWelcomeCard').classList.add('hidden');
    document.getElementById('mockActiveLayout').classList.remove('hidden');

    renderMockSectionTabs();
    renderMockPalette();
    renderMockQuestion();
    startMockTimer();
    showToast(`Started ${fmt.name} exam - ${built.questions.length} questions, ${formatExamDuration(fmt.duration)}`, 'success');
}

function startMockTimer() {
    if (state.mock.timerInterval) clearInterval(state.mock.timerInterval);

    state.mock.timerInterval = setInterval(() => {
        state.mock.timeRemaining--;
        updateMockTimerDisplay();

        if (state.mock.timeRemaining <= 0) {
            clearInterval(state.mock.timerInterval);
            submitMockExam();
            showToast("Time's up! Exam submitted automatically.", "error");
        }
    }, 1000);
}

function updateMockTimerDisplay() {
    const totalSec = state.mock.timeRemaining;
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;

    const display = document.getElementById('mockTimerDisplay');
    if (display) {
        display.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
}

function renderMockSectionTabs() {
    const tabs = document.getElementById('mockSectionTabs');
    if (!tabs) return;

    tabs.innerHTML = '';
    state.mock.sections.forEach((sec, idx) => {
        let answered = 0;
        for (let i = sec.start; i < sec.end; i++) {
            if (state.mock.userAnswers[i] !== undefined) answered++;
        }

        const tab = document.createElement('button');
        tab.className = 'mock-section-tab';
        if (idx === state.mock.currentSection) tab.classList.add('active');
        if (answered === sec.count && sec.count > 0) tab.classList.add('complete');

        const shortLabel = sec.label.replace('Section ', '').replace(' - ', ': ');
        tab.innerHTML = `<span class="tab-label">${escapeHtml(shortLabel)}</span><span class="tab-meta">${answered}/${sec.count}</span>`;

        tab.addEventListener('click', () => {
            state.mock.currentSection = idx;
            state.mock.currentIndex = sec.start;
            renderMockSectionTabs();
            renderMockPalette();
            renderMockQuestion();
        });

        tabs.appendChild(tab);
    });
}

function renderMockPalette() {
    const palette = document.getElementById('paletteGrid');
    if (!palette) return;

    palette.innerHTML = '';

    state.mock.sections.forEach(sec => {
        const header = document.createElement('div');
        header.className = 'palette-section-header';
        header.textContent = sec.label.replace('Section ', '').replace(' - ', ' ');
        palette.appendChild(header);

        for (let idx = sec.start; idx < sec.end; idx++) {
            const btn = document.createElement('button');
            btn.className = 'p-btn';
            if (idx === state.mock.currentIndex) btn.classList.add('active');
            else if (state.mock.userAnswers[idx] !== undefined) btn.classList.add('answered');

            btn.textContent = idx + 1;
            btn.addEventListener('click', () => {
                state.mock.currentIndex = idx;
                syncMockSectionFromIndex();
                renderMockSectionTabs();
                renderMockPalette();
                renderMockQuestion();
            });
            palette.appendChild(btn);
        }
    });
}

function renderMockQuestion() {
    const qList = state.mock.questions;
    const index = state.mock.currentIndex;
    const q = qList[index];

    if (!q) return;

    const sec = state.mock.sections[state.mock.currentSection];

    const indexText = document.getElementById('mockQIndexText');
    if (indexText) indexText.textContent = `Question ${index + 1} of ${qList.length}`;

    const sectionName = document.getElementById('mockSectionName');
    if (sectionName && sec) sectionName.textContent = sec.label;

    const subjectBadge = document.getElementById('mockQSubject');
    if (subjectBadge && q.subject) subjectBadge.textContent = q.subject;

    document.getElementById('mockQText').textContent = q.question;

    const optionsContainer = document.getElementById('mockOptionsContainer');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (state.mock.userAnswers[index] === optIdx) {
            btn.classList.add('selected');
        }

        btn.innerHTML = `
            <span class="opt-prefix">${letters[optIdx]}</span>
            <span class="opt-text">${escapeHtml(optText)}</span>
        `;

        btn.addEventListener('click', () => {
            state.mock.userAnswers[index] = optIdx;
            renderMockSectionTabs();
            renderMockPalette();
            renderMockQuestion();
        });

        optionsContainer.appendChild(btn);
    });

    const prevBtn = document.getElementById('mockPrevBtn');
    if (prevBtn) prevBtn.disabled = (index === 0);

    const nextBtn = document.getElementById('mockNextBtn');
    if (nextBtn) nextBtn.disabled = (index === qList.length - 1);

    renderMockPalette();
}

function submitMockExam() {
    if (state.mock.timerInterval) clearInterval(state.mock.timerInterval);

    state.mock.active = false;
    let correctCount = 0;
    let wrongCount = 0;
    let unattempted = 0;

    const sectionStats = state.mock.sections.map(sec => {
        let correct = 0, wrong = 0, un = 0;
        for (let i = sec.start; i < sec.end; i++) {
            const userAns = state.mock.userAnswers[i];
            if (userAns === undefined) un++;
            else if (userAns === state.mock.questions[i].correct) correct++;
            else wrong++;
        }
        correctCount += correct;
        wrongCount += wrong;
        unattempted += un;
        return { label: sec.label, correct, wrong, unattempted, total: sec.count };
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

    const fmt = EXAM_FORMATS[state.mock.examFormat] || EXAM_FORMATS.TU;
    document.getElementById('mockResultScoreText').textContent = `${fmt.name} | Score: ${correctCount} / ${total} Marks`;

    const percentile = computeExamPercentile(accuracy);
    document.getElementById('mockResultPercentile').textContent = `Estimated Percentile: ${percentile}%`;

    const statusEl = document.getElementById('mockResultStatus');
    const passed = accuracy >= fmt.passPercent;
    statusEl.textContent = passed ? 'PASSED' : 'FAILED';
    statusEl.className = 'result-status-badge ' + (passed ? 'pass' : 'fail');

    renderMockSectionBreakdown(sectionStats);
    renderMockReview();
    updateUI();
}

function computeExamPercentile(scorePercent) {
    const clamped = Math.max(0, Math.min(100, scorePercent));
    const p = 100 * (1 - Math.pow((100 - clamped) / 100, 1.5));
    return Math.max(0, Math.min(99, Math.round(p)));
}

function renderMockSectionBreakdown(stats) {
    const container = document.getElementById('mockSectionBreakdown');
    if (!container) return;
    container.innerHTML = '';

    stats.forEach(s => {
        const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
        const card = document.createElement('div');
        card.className = 'section-stat-card';
        const shortLabel = s.label.replace('Section ', '').replace(' - ', ': ');
        card.innerHTML = `
            <div class="ss-label">${escapeHtml(shortLabel)}</div>
            <div class="ss-nums">
                <span class="ss-correct">${s.correct} <small>Correct</small></span>
                <span class="ss-wrong">${s.wrong} <small>Wrong</small></span>
                <span class="ss-un">${s.unattempted} <small>Skip</small></span>
            </div>
            <div class="ss-bar"><div class="ss-bar-fill" style="width:${pct}%"></div></div>
        `;
        container.appendChild(card);
    });
}

function renderMockReview() {
    const container = document.getElementById('mockReviewContainer');
    if (!container) return;
    container.innerHTML = '';

    let reviewCount = 0;
    state.mock.questions.forEach((q, idx) => {
        const userAns = state.mock.userAnswers[idx];
        if (userAns === undefined || userAns === q.correct) return;
        reviewCount++;

        const sec = state.mock.sections.find(s => idx >= s.start && idx < s.end);
        const secLabel = sec ? sec.label.replace('Section ', '').replace(' - ', ': ') : '';

        const optionsHTML = q.options.map((opt, oi) => {
            let cls = '';
            if (oi === q.correct) cls = 'review-opt-correct';
            else if (oi === userAns) cls = 'review-opt-wrong';
            return `
                <div class="review-opt ${cls}">
                    <span class="opt-prefix">${String.fromCharCode(65 + oi)}</span>
                    <span>${escapeHtml(opt)}</span>
                </div>
            `;
        }).join('');

        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-head">
                <span class="badge badge-subject">${escapeHtml(q.subject || '')}</span>
                <span class="review-sec">${escapeHtml(secLabel)}</span>
            </div>
            <p class="review-q">Q${idx + 1}. ${escapeHtml(q.question)}</p>
            <div class="review-opts">${optionsHTML}</div>
            ${q.explanation ? `<p class="review-exp"><strong>Explanation:</strong> ${escapeHtml(q.explanation)}</p>` : ''}
        `;
        container.appendChild(card);
    });

    if (reviewCount === 0) {
        container.innerHTML = '<p class="review-empty">No incorrect answers. Outstanding!</p>';
    }
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
    const defaultSubj = document.getElementById('defaultSubjectSelect')?.value || "Computer & IT";
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
                difficulty: "Medium",
                question: qText,
                options: options.length === 4 ? options : [...options, "None of the above", "All of the above"].slice(0, 4),
                correct: correctIdx,
                explanation: explanation || "Uploaded custom question.",
                source: "Custom Import"
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
    document.getElementById('qbankDifficultyFilter')?.addEventListener('change', renderQuestionBank);
    document.getElementById('qbankShuffleBtn')?.addEventListener('click', () => {
        state.questions = shuffleArray(state.questions);
        renderQuestionBank();
        showToast("Shuffled Question Bank view!", "info");
    });
}

function renderQuestionBank() {
    const container = document.getElementById('qbankListContainer');
    if (!container) return;

    const query = document.getElementById('qbankSearchInput')?.value.toLowerCase().trim() || '';
    const subjFilter = document.getElementById('qbankSubjectFilter')?.value || 'All';
    const diffFilter = document.getElementById('qbankDifficultyFilter')?.value || 'All';

    let filtered = state.questions.filter(q => {
        const matchesQuery = q.question.toLowerCase().includes(query) || 
                             (q.explanation && q.explanation.toLowerCase().includes(query)) ||
                             (q.univ && q.univ.toLowerCase().includes(query)) ||
                             (q.source && q.source.toLowerCase().includes(query));
        const matchesSubj = (subjFilter === 'All') || (q.subject === subjFilter);
        const matchesDiff = (diffFilter === 'All') || ((q.difficulty || 'Medium').toUpperCase() === diffFilter.toUpperCase());
        return matchesQuery && matchesSubj && matchesDiff;
    });

    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = `<div class="text-center text-muted py-5" style="grid-column: 1/-1; text-align: center;">No questions matched your search query.</div>`;
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
            <div class="qbank-item-head" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <span class="badge badge-univ">${escapeHtml(q.univ || 'TU')}</span>
                    <span class="badge badge-subject">${escapeHtml(q.subject || 'General')}</span>
                    <span class="badge badge-difficulty badge-${(q.difficulty || 'Medium').toLowerCase()}">${escapeHtml(q.difficulty || 'Medium')}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span class="subtext"><i class="fa-solid fa-bookmark text-amber"></i> ${escapeHtml(q.source || 'Nepal BCA Question Bank')}</span>
                    ${adminActionsHTML}
                </div>
            </div>
            <h4 style="margin-top: 8px;">${idx + 1}. ${escapeHtml(q.question)}</h4>
            <div class="qbank-opts" style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">${optsHTML}</div>
            <div class="subtext" style="margin-top: 10px; padding: 8px; background: rgba(0,0,0,0.03); border-radius: 6px;"><i class="fa-solid fa-lightbulb text-amber"></i> <strong>Explanation:</strong> ${escapeHtml(q.explanation || 'No detailed explanation provided.')}</div>
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

    const mathText = document.getElementById('mathAccuracyText');
    const mathBar = document.getElementById('mathAnalyticsBar');
    if (mathText) mathText.textContent = `${mathAcc}% (${mathStats.correct}/${mathStats.attempted})`;
    if (mathBar) mathBar.style.width = `${mathAcc}%`;

    const engText = document.getElementById('englishAccuracyText');
    const engBar = document.getElementById('englishAnalyticsBar');
    if (engText) engText.textContent = `${engAcc}% (${englishStats.correct}/${englishStats.attempted})`;
    if (engBar) engBar.style.width = `${engAcc}%`;

    const csText = document.getElementById('csAccuracyText');
    const csBar = document.getElementById('csAnalyticsBar');
    if (csText) csText.textContent = `${csAcc}% (${csStats.correct}/${csStats.attempted})`;
    if (csBar) csBar.style.width = `${csAcc}%`;

    const overallAcc = state.userStats.answered > 0 ? Math.round((state.userStats.correct / state.userStats.answered) * 100) : 0;
    const scoreVal = document.getElementById('readinessScoreVal');
    if (scoreVal) scoreVal.textContent = `${overallAcc}%`;

    const feedbackEl = document.getElementById('readinessFeedbackText');
    if (feedbackEl) {
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
    const totalEl = document.getElementById('totalQuestionsCount');
    const answeredEl = document.getElementById('answeredCount');
    const accEl = document.getElementById('accuracyRate');
    const mockEl = document.getElementById('mockExamsCompleted');
    const streakEl = document.getElementById('userStreak');
    const scoreEl = document.getElementById('userTotalScore');

    if (totalEl) totalEl.textContent = state.questions.length;
    if (answeredEl) answeredEl.textContent = state.userStats.answered;
    
    const accuracy = state.userStats.answered > 0 ? Math.round((state.userStats.correct / state.userStats.answered) * 100) : 0;
    if (accEl) accEl.textContent = `${accuracy}%`;
    if (mockEl) mockEl.textContent = state.userStats.mockExamsDone;

    if (streakEl) streakEl.textContent = `${state.userStats.streak} Day Streak`;
    if (scoreEl) scoreEl.textContent = `${state.userStats.xp} XP`;
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
