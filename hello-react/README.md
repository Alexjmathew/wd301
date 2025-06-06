# Smarter Tasks - Task Management App

A modern, responsive task management application built with React, Vite, and Tailwind CSS. This app helps you organize and track tasks with an intuitive Kanban-style interface.

## Features

- **Kanban Board Layout**: Organize tasks in "Pending" and "Done" columns
- **Task Management**: Add, complete, and delete tasks with ease
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Real-time Updates**: Instant feedback when tasks are moved or modified
- **Task Details**: Track assignees, due dates, and completion dates

## Tech Stack

- **React 18.3**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **ESLint**: Code linting for consistent code quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hello-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
├── assets/             # Static assets (images, icons)
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
├── index.css           # Global styles and Tailwind imports
└── App.css             # Component-specific styles
```

## Usage

1. **Adding Tasks**: Use the "Add Task" button to create new tasks
2. **Managing Tasks**: Click on tasks to edit details or mark as complete
3. **Moving Tasks**: Tasks automatically move between "Pending" and "Done" columns
4. **Deleting Tasks**: Use the delete button to remove unwanted tasks

## Customization

The app uses Tailwind CSS for styling, making it easy to customize:

- Modify colors in `tailwind.config.js`
- Update component styles in individual JSX files
- Add new task statuses by extending the column system

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

