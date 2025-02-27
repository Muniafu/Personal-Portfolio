# Personal-Portfolio
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


This repository contains the source code for a portfolio website built with React. The project is organized into modular sections, making it scalable and maintainable. It includes reusable components, feature-specific modules, client-side services (including Firebase integrations), and organized assets for images, fonts, and styles.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Portfolio Website is designed to showcase your work, resume, blog posts, projects, and more. The codebase is structured to promote reusability and clarity:
- **Components:** Contains shared and UI-specific components.
- **Features:** Holds feature-specific modules like Resume, Goal Manager, Blog, Projects, and Newsletter.
- **Pages:** Includes high-level, routed views such as Home, About, Services, Portfolio, and Contact.
- **Services:** Integrates Firebase for authentication, Firestore, and other client-side functionalities.
- **Styles:** Organizes both global CSS and module-specific CSS.

## Project Structure

Below is the directory structure of the project:

```plaintext
portfolio/
├── public/
│   ├── index.html                   # Main HTML entry point
│   ├── firebase-config.json         # (Optional) Firebase config files for initialization
│   └── assets/                      
│       ├── images/                  # Global images (logos, backgrounds, etc.)
│       └── fonts/                   # Global/custom fonts
├── src/
│   ├── assets/                      
│   │   ├── fonts/                   # Fonts used across the app
│   │   └── images/                  # Images used within components/features
│   ├── components/                  # Reusable, shared UI components
│   │   ├── shared/                  
│   │   │   ├── Navbar.jsx           # Navigation bar with Home, About, Projects, Contact
│   │   │   ├── Footer.jsx           # Footer component
│   │   │   └── NewsletterForm.jsx   # Newsletter subscription form
│   │   └── ui/                      
│   │       ├── Button.jsx           # Reusable button component
│   │       └── Card.jsx             # Reusable card component for content display
│   ├── features/                    # Feature-specific components and sub-features
│   │   ├── resume/                  
│   │   │   ├── ResumePage.jsx       # Main resume/CV view
│   │   │   └── ResumeItem.jsx       # Individual resume entries
│   │   ├── goalManager/             # Goal Manager / Tracker feature
│   │   │   ├── GoalTracker.jsx      # Component to track goals
│   │   │   └── GoalChart.jsx        # Visualization/chart for goals progress
│   │   ├── blog/                    
│   │   │   ├── BlogList.jsx         # List or overview of blog posts
│   │   │   └── BlogPost.jsx         # Detailed individual blog post
│   │   ├── projects/                # Projects-related features
│   │   │   ├── ProjectCaseStudy.jsx # Detailed case study for a project
│   │   │   └── ProjectTracker.jsx   # Component for tracking project progress
│   │   └── newsletter/              # Newsletter-related features
│   │       ├── NewsletterPage.jsx   # Newsletter landing or info page
│   │       └── SubscribeForm.jsx    # Form to subscribe to the newsletter
│   ├── pages/                       # High-level pages (routed views)
│   │   ├── Home.jsx                 # Home page (can preview multiple features)
│   │   ├── About.jsx                # About page
│   │   ├── Services.jsx             # Aggregated projects view (showcases case studies & project trackers)
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx              # Contact page
│   ├── services/                    # Client-side services and Firebase integrations
│   │   ├── firebase.js              # Firebase initialization and configuration
│   │   ├── auth.js                  # Client-side authentication logic
│   │   └── firestore.js             # Firestore (or other cloud database) interaction functions
│   ├── styles/                      # CSS styling and organization
│   │   ├── base.css                 # Global base styles and resets
│   │   ├── animations.css           # Animation-specific CSS styles
│   │   └── modules/                 # CSS Modules for component/feature-scoped styles
│   │       ├── Blog.module.css      # Scoped styles for Blog feature
│   │       ├── Goals.module.css     # Scoped styles for Goal Manager feature
│   │       ├── Navbar.module.css    # Scoped styles for Navbar component
│   │       └── Home.module.css      # Scoped styles for the Home page
│   ├── App.jsx                      # Main application component (layout & routing)
│   └── index.js                     # JavaScript entry point (bootstraps the app)
├── .gitignore                       # Git ignore rules
├── package.json                     # Project configuration & dependency management
└── README.md                        # Project documentation and instructions
