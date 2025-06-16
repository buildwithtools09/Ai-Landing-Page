# AI Startup Idea Generator

"Generate the next million-dollar AI startup idea in one click."

This is a simple web application that generates random, clever AI startup ideas based on combinations of target audience, AI capability, and format. It features a clean, modern UI with light/dark mode and responsive design.

## Features

*   **Random Idea Generation**: Generates unique AI startup ideas with a single click.
*   **Detailed Idea Output**: Each idea includes target audience, AI capability, format, problem solved, and monetization strategy.
*   **Dark/Light Mode**: Toggle between dark and light themes for a modern UI experience.
*   **Save Favorites**: Save your favorite ideas to local storage for later review.
*   **Share Idea**: Easily share generated ideas via native sharing options or by copying the text.
*   **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.

## Tech Stack

*   **Frontend**: HTML5, CSS3 (with custom properties for themes), JavaScript
*   **Styling**: Custom CSS for neumorphism/glassmorphism effects and responsive design.
*   **Logic**: Pure JavaScript (no external APIs required).
*   **Hosting**: Designed for easy deployment on static site hosting services like GitHub Pages.

## Setup and Running Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Python installed on your system. Python's built-in `http.server` module will be used to serve the files locally.

### Installation

1.  **Clone the repository (or download the files)**:
    If you are using Git, you can clone the repository to your local machine:
    ```bash
    git clone <repository_url>
    cd ai-landing-page
    ```
    If you downloaded the files, navigate to the project directory:
    ```bash
    cd path/to/ai-landing-page
    ```

2.  **Start a local server**:
    Open your terminal or command prompt in the project's root directory (`ai-landing-page`) and run the following command:
    ```bash
    python -m http.server 8000
    ```
    This will start a local web server on port 8000.

### Usage

1.  Open your web browser and navigate to `http://localhost:8000/`.
2.  Click the "Generate Idea" button to get a new AI startup idea.
3.  Use the "Save Idea" button to store your favorite ideas locally.
4.  Click the "Share" button to share the current idea.
5.  Toggle between light and dark modes using the "Toggle Theme" button.

## Project Structure

```
. 
├── index.html      # Main HTML file for the landing page
├── style.css       # CSS file for styling and themes
└── script.js       # JavaScript file for logic and interactivity
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information. (Note: A `LICENSE` file is not included in this project, but you can add one if you wish.)

## Contact

Kamal and Utkarsh

Project Link: [Your Project Repository Link Here](https://github.com/your_username/ai-startup-idea-generator)