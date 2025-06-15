const questions = [
    {
        question: "When faced with a complex problem, what's your first instinct?",
        options: [
            { text: "Break it down into smaller, manageable parts.", scores: { logic: 2, leader: 1 } },
            { text: "Brainstorm creative and unconventional solutions.", scores: { creative: 2, social: 1 } },
            { text: "Seek input and collaborate with others.", scores: { social: 2, leader: 1 } },
            { text: "Take charge and define a clear action plan.", scores: { leader: 2, logic: 1 } }
        ]
    },
    {
        question: "What kind of environment do you thrive in?",
        options: [
            { text: "Structured and organized, with clear goals.", scores: { logic: 2 } },
            { text: "Dynamic and open-ended, with room for innovation.", scores: { creative: 2 } },
            { text: "Collaborative and supportive, with strong team bonds.", scores: { social: 2 } },
            { text: "Challenging and competitive, with opportunities to lead.", scores: { leader: 2 } }
        ]
    },
    {
        question: "How do you prefer to learn new skills?",
        options: [
            { text: "Through logical analysis and detailed instructions.", scores: { logic: 2 } },
            { text: "By experimenting and hands-on practice.", scores: { creative: 2 } },
            { text: "From mentors and group discussions.", scores: { social: 2 } },
            { text: "By taking on leadership roles and teaching others.", scores: { leader: 2 } }
        ]
    },
    {
        question: "What motivates you most in a work setting?",
        options: [
            { text: "Solving intricate problems and seeing tangible results.", scores: { logic: 2 } },
            { text: "Expressing your unique ideas and bringing them to life.", scores: { creative: 2 } },
            { text: "Building strong relationships and helping others succeed.", scores: { social: 2 } },
            { text: "Guiding a team to achieve ambitious goals.", scores: { leader: 2 } }
        ]
    },
    {
        question: "Which activity sounds most appealing to you?",
        options: [
            { text: "Designing a complex system or algorithm.", scores: { logic: 2, creative: 1 } },
            { text: "Creating a piece of art or innovative product.", scores: { creative: 2, social: 1 } },
            { text: "Organizing a community event or social gathering.", scores: { social: 2, leader: 1 } },
            { text: "Strategizing and leading a new project initiative.", scores: { leader: 2, logic: 1 } }
        ]
    }
];

const careerPaths = [
    {
        name: "Software Engineer 💻",
        explanation: "You enjoy logical problem-solving and building efficient systems. A career in software engineering allows you to design, develop, and maintain software applications, using your analytical skills to create innovative solutions.",
        traits: { logic: 2, creative: 1 },
        tools: ["Python", "JavaScript", "Git", "VS Code"]
    },
    {
        name: "Graphic Designer 🎨",
        explanation: "Your creativity and artistic flair are your strongest assets. As a graphic designer, you'll use visual communication to convey messages, create stunning visuals for brands, and bring imaginative concepts to life.",
        traits: { creative: 2, social: 1 },
        tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"]
    },
    {
        name: "Marketing Specialist 📈",
        explanation: "You excel at understanding people and connecting with audiences. A marketing specialist crafts campaigns, analyzes market trends, and builds brand awareness, leveraging strong communication and social skills.",
        traits: { social: 2, creative: 1 },
        tools: ["Google Analytics", "Mailchimp", "Hootsuite"]
    },
    {
        name: "Project Manager 📊",
        explanation: "You have a natural ability to lead, organize, and drive projects to completion. As a project manager, you'll coordinate teams, manage resources, and ensure that objectives are met on time and within budget.",
        traits: { leader: 2, logic: 1 },
        tools: ["Jira", "Asana", "Microsoft Project"]
    },
    {
        name: "Data Scientist 🧠",
        explanation: "Your analytical mind thrives on extracting insights from complex data. A data scientist collects, processes, and analyzes large datasets to help organizations make informed decisions and predict future trends.",
        traits: { logic: 2, leader: 1 },
        tools: ["R", "Python (Pandas, NumPy)", "SQL", "Tableau"]
    },
    {
        name: "UX/UI Designer ✨",
        explanation: "You combine creativity with a user-centric approach to design intuitive and engaging digital experiences. You focus on how users interact with products and make them visually appealing and easy to use.",
        traits: { creative: 2, logic: 1 },
        tools: ["Figma", "Sketch", "Adobe XD"]
    },
    {
        name: "Human Resources Manager 🤝",
        explanation: "You are skilled at fostering positive work environments and managing interpersonal dynamics. An HR manager handles recruitment, employee relations, and ensures a supportive and productive workplace culture.",
        traits: { social: 2, leader: 1 },
        tools: ["Workday", "BambooHR", "LinkedIn Recruiter"]
    }
];

let currentQuestionIndex = 0;
let scores = { logic: 0, creative: 0, social: 0, leader: 0 };
let selectedOption = null;

const landingPage = document.getElementById('landing-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');

const startQuizBtn = document.getElementById('start-quiz-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question-btn');
const progressBar = document.querySelector('.progress-bar');

const careerName = document.getElementById('career-name');
const careerExplanation = document.getElementById('career-explanation');
const emojiDisplay = document.querySelector('.result-card .emoji');
const toolsList = document.getElementById('tools-list');
const downloadPdfBtn = document.getElementById('download-pdf-btn');
const shareWhatsappBtn = document.getElementById('share-whatsapp-btn');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const darkmodeToggle = document.getElementById('darkmode-toggle');

startQuizBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', loadNextQuestion);
downloadPdfBtn.addEventListener('click', downloadResultAsPdf);
shareWhatsappBtn.addEventListener('click', shareOnWhatsApp);
restartQuizBtn.addEventListener('click', restartQuiz);
darkmodeToggle.addEventListener('change', toggleDarkMode);

function startQuiz() {
    landingPage.classList.remove('active');
    quizPage.classList.add('active');
    currentQuestionIndex = 0;
    scores = { logic: 0, creative: 0, social: 0, leader: 0 };
    loadQuestion();
}

function restartQuiz() {
    resultPage.classList.remove('active');
    landingPage.classList.add('active');
    currentQuestionIndex = 0;
    scores = { logic: 0, creative: 0, social: 0, leader: 0 };
    selectedOption = null;
    // Optionally, clear previous results or reset UI elements if needed
}

function loadQuestion() {
    updateProgressBar();
    selectedOption = null;
    nextQuestionBtn.disabled = true;
    optionsContainer.innerHTML = '';

    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        questionText.textContent = q.question;

        q.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = option.text;
            button.dataset.index = index;
            button.addEventListener('click', () => selectOption(button, option.scores));
            optionsContainer.appendChild(button);
        });
    } else {
        showResult();
    }
}

function selectOption(button, optionScores) {
    // Remove 'selected' class from previously selected button
    const currentSelected = optionsContainer.querySelector('.option-button.selected');
    if (currentSelected) {
        currentSelected.classList.remove('selected');
    }

    // Add 'selected' class to the clicked button
    button.classList.add('selected');
    selectedOption = optionScores;
    nextQuestionBtn.disabled = false;
}

function loadNextQuestion() {
    if (selectedOption) {
        for (const trait in selectedOption) {
            scores[trait] += selectedOption[trait];
        }
    }
    currentQuestionIndex++;
    loadQuestion();
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResult() {
    quizPage.classList.remove('active');
    resultPage.classList.add('active');

    const sortedScores = Object.entries(scores).sort(([, scoreA], [, scoreB]) => scoreB - scoreA);
    const topTrait = sortedScores[0][0];

    // Find the best matching career path based on top trait and secondary traits
    let bestMatch = null;
    let maxMatchScore = -1;

    careerPaths.forEach(career => {
        let matchScore = 0;
        for (const trait in career.traits) {
            matchScore += scores[trait] * career.traits[trait];
        }
        if (matchScore > maxMatchScore) {
            maxMatchScore = matchScore;
            bestMatch = career;
        }
    });

    if (bestMatch) {
        careerName.textContent = bestMatch.name;
        careerExplanation.textContent = bestMatch.explanation;
        emojiDisplay.textContent = bestMatch.name.split(' ').pop(); // Extract emoji from name

        toolsList.innerHTML = '';
        if (bestMatch.tools && bestMatch.tools.length > 0) {
            bestMatch.tools.forEach(tool => {
                const li = document.createElement('li');
                li.textContent = tool;
                toolsList.appendChild(li);
            });
        } else {
            document.getElementById('tools-to-explore').style.display = 'none';
        }
    } else {
        careerName.textContent = "No clear path found";
        careerExplanation.textContent = "It seems your unique blend of skills doesn't perfectly align with our predefined paths. Explore various fields to find your true calling!";
        emojiDisplay.textContent = "🤔";
        document.getElementById('tools-to-explore').style.display = 'none';
    }
}

function downloadResultAsPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("AI Career Path Predictor Result", 10, 10);
    doc.text(`Career: ${careerName.textContent}`, 10, 30);
    doc.text(`Explanation: ${careerExplanation.textContent}`, 10, 40);

    let yOffset = 50;
    const toolsSection = document.getElementById('tools-to-explore');
    if (toolsSection.style.display !== 'none') {
        doc.text("Tools to Explore:", 10, yOffset + 10);
        yOffset += 20;
        Array.from(toolsList.children).forEach(li => {
            doc.text(`- ${li.textContent}`, 15, yOffset);
            yOffset += 10;
        });
    }

    doc.save("AI_Career_Path_Result.pdf");
}

function shareOnWhatsApp() {
    const career = careerName.textContent;
    const explanation = careerExplanation.textContent;
    const tools = Array.from(toolsList.children).map(li => li.textContent).join(', ');

    let message = `My AI Career Path Prediction: %0A%0A*Career:* ${career}%0A%0A*Explanation:* ${explanation}`;
    if (tools) {
        message += `%0A%0A*Tools to Explore:* ${tools}`;
    }
    message += `%0A%0AFind your path too: ${window.location.href}`;

    window.open(`https://wa.me/?text=${message}`, '_blank');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    landingPage.classList.add('active');

    // Load dark mode preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkmodeToggle.checked = true;
    }

    // Load jsPDF library dynamically
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = () => console.log("jsPDF loaded");
    document.head.appendChild(script);
});