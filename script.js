const audiences = [
    "freelancers", "students", "doctors", "lawyers", "gamers",
    "small business owners", "remote workers", "artists", "musicians",
    "teachers", "parents", "pet owners", "fitness enthusiasts",
    "travelers", "foodies", "developers", "designers", "marketers"
];

const aiFunctions = [
    "summarize text", "predict outcomes", "analyze tone", "generate visuals",
    "auto-respond to customer queries", "transcribe audio", "translate languages",
    "create personalized learning paths", "optimize schedules", "detect anomalies",
    "generate code snippets", "compose music", "diagnose issues", "recommend products",
    "simulate scenarios", "enhance images", "automate data entry", "identify objects"
];

const platforms = [
    "mobile app", "chrome extension", "WhatsApp bot", "web dashboard",
    "SaaS platform", "API service", "desktop application", "smart home device integration",
    "email plugin", "voice assistant skill", "VR/AR experience", "blockchain dApp",
    "wearable tech integration", "chatbot for websites", "CRM integration", "e-commerce plugin"
];

const bonusFeatures = [
    "10K installs goal tracker", "community forum", "gamified progress tracking",
    "integration with popular tools (e.g., Slack, Notion)", "AI-powered analytics dashboard",
    "personalized onboarding", "expert-led workshops", "template library",
    "one-click deployment", "offline mode", "multi-language support", "customizable workflows"
];

const problemsSolved = [
    "saves time", "improves efficiency", "reduces costs", "enhances creativity",
    "streamlines communication", "boosts productivity", "simplifies complex tasks",
    "provides instant insights", "automates repetitive work", "improves decision-making",
    "personalizes user experience", "expands reach", "reduces errors", "fosters collaboration"
];

const monetizations = [
    "Monthly subscription ₹199", "Freemium model with premium features",
    "One-time purchase", "Per-use pricing", "Ad-supported model",
    "Tiered subscription plans", "Commission-based (e.g., on sales generated)",
    "Enterprise licensing", "Donation-based", "Affiliate partnerships"
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateIdea() {
    const targetAudience = getRandom(audiences);
    const aiCapability = getRandom(aiFunctions);
    const format = getRandom(platforms);
    const problem = getRandom(problemsSolved);
    const monetization = getRandom(monetizations);
    const bonus = getRandom(bonusFeatures);

    const ideaText = `A ${format} that helps ${targetAudience} to ${aiCapability} with AI.`;

    document.getElementById('startup-idea-text').textContent = ideaText;
    document.getElementById('audience-text').textContent = targetAudience;
    document.getElementById('ai-power-text').textContent = aiCapability;
    document.getElementById('format-text').textContent = format;
    document.getElementById('problem-solved-text').textContent = problem;
    document.getElementById('monetization-text').textContent = monetization;

    // For now, we'll just display the core idea. The example output had more fields.
    // You can extend the HTML and this JS to include problem, monetization, and bonus.

    const ideaOutput = document.getElementById('idea-output');
    ideaOutput.style.display = 'block';
    ideaOutput.style.opacity = 0;
    ideaOutput.style.transform = 'translateY(20px)';
    setTimeout(() => {
        ideaOutput.style.opacity = 1;
        ideaOutput.style.transform = 'translateY(0)';
    }, 10);
}

function saveIdea() {
    const idea = {
        ideaText: document.getElementById('startup-idea-text').textContent,
        audience: document.getElementById('audience-text').textContent,
        aiPower: document.getElementById('ai-power-text').textContent,
        format: document.getElementById('format-text').textContent,
        problemSolved: document.getElementById('problem-solved-text').textContent,
        monetization: document.getElementById('monetization-text').textContent
    };

    let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];
    savedIdeas.push(idea);
    localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
    alert('Idea saved!'); // Simple feedback
}

function shareIdea() {
    const ideaText = document.getElementById('startup-idea-text').textContent;
    const shareData = {
        title: 'AI Startup Idea',
        text: `Check out this AI Startup Idea: "${ideaText}"`, 
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Idea shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        // Fallback for browsers that do not support Web Share API
        prompt('Copy this idea to share:', shareData.text);
    }
}

// Event Listeners
document.getElementById('generate-idea-btn').addEventListener('click', generateIdea);
document.querySelector('.card-actions .btn-secondary:last-child').addEventListener('click', generateIdea);
document.querySelector('.card-actions .btn-secondary:first-child').addEventListener('click', saveIdea);
document.querySelector('.card-actions .btn-secondary:nth-child(2)').addEventListener('click', shareIdea);

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initial idea generation on load (optional)
// generateIdea();