# React Redux Tailwind Project

This project is a React application using Redux for state management and Tailwind CSS for styling.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
2. [Folder Structure](#folder-structure)
3. [Redux Flow](#redux-flow)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)

## Getting Started

### Prerequisites

Before running the project, ensure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

Follow these steps to install project dependencies:

```bash
# Install dependencies
npm install
# Generate css types
npm run generate-css-types
# Run project
npm run dev
```

## Folder Structure

The project follows the following folder structure:

    .
    ├── dist                                    # Compiled files
    ├── public                                  # Public assets and entry HTML file
    ├── src                                     # Source files
    │   ├── assets                              # Project assets
    │   ├── api                                 # API-related endpoints
    │   ├── handlers                            # Controller layers
    │   │   ├── *
    │   │   │   ├── *.controller.ts             # API-related services
    │   │   │   └── *.reducer.ts                # Redux reducers
    │   ├── repositories                        # Repositories layers
    │   ├── components                          # Reusable React components
    │   ├── modules                             # Reusable React modules
    │   ├── templates                           # Reusable React templates (use for pages rendering)
    │   ├── pages                               # Top-level components representing different pages or views
    │   ├── react-routes                        # React routes configuration
    │   ├── redux                               # Redux store configuration
    │   ├── helpers                             # Helpers functions
    │   └── utils                               # Utilities functions
    ├── .env.example                            # Secret environment
    └── README.md

## Redux Flow

## Technologies Used

The main technologies used in this project are:

- ReactJS: JavaScript library for building user interfaces.
- Redux: State management library for JavaScript apps.
- Tailwind CSS: Utility-first CSS framework.

## Contributing
