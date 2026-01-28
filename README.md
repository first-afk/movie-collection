# 🛒 Movie Gallery Project

A dynamic, data-driven movie gallery that allows users to explore a curated list of 40 films, complete with descriptions, posters, and a genre-based filtering system.

## 🚀 Project Setup Instructions

This tool provides an interactive menu with the following modules:

1.  **Clone the Repo**:
    ```bash
    git clone https://github.com/yourusername/movie-gallery.git
    cd movie-gallery
    ```
2.  **Launch the Application**:
    * VS Code: Install the "Live Server" extension, then click "Go Live" at the bottom of the window.
3.  **Access in Browser**:
    * Open http://localhost:5500 (or the port provided by your server).

## 📋 CLI Commands

* **Bash Terminal**:
```bash
    # Create project directories
    mkdir css js data

    # Create essential files
    touch index.html css/style.css js/app.js data/movies.json

    # Check directory structure
    ls -R
```

## ✨ Feature List & Implementation
*    Dynamic Rendering: JavaScript fetches 40 movie entries from a JSON file and dynamically generates HTML cards using template literals.

*    Genre Filtering: A smart filter that extracts unique genres from the dataset and updates the UI in real-time without a page refresh.

*    Responsive Design: Implemented using CSS Grid with auto-fill, ensuring the gallery looks great on mobile, tablet, and desktop.

*    Asynchronous Data Loading: Uses async/await and the Fetch API to handle data retrieval from the data/ folder.


## 🔄 Git Workflow

*    Branching: Created specific branches for each feature (e.g., feature/movie-data-structure, feature/ui-enhancements).

*    Development Branch: All small features were pushed to the dev branch first.

*    Pull Requests (PRs): Team members submitted PRs for review. We conducted peer code reviews before merging.

*    Production Merge: Once the dev branch was stable and tested, it was merged into the main branch for the final release.

## 👥 Team Member Contributions

*    [Student 1]: Git Bash setup, HTML structure and implementation of the Fetch logic and filtering algorithm.

*    [Student 2]: CSS styling (Grid Cards), implemented movie card rendering.



## 📁 File Structure
```bash
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── data/
    └── movies.json
```
