# AI 4 U

### Your AI-Powered Project Companion

AI 4 U is a student-focused platform designed to help final-year students choose a suitable project and plan how to build it.

Choosing a final-year project can be difficult. Students often know their branch, skills and interests, but still struggle to decide what project would be a good fit.

AI 4 U addresses this problem by understanding a student's profile and recommending projects based on their skills, interests, goals, available time and team size.

## Live Demo

https://prompt-x-ten.vercel.app/

## GitHub Repository

https://github.com/Himanshu-pradhan/prompt-x

## What AI 4 U Does

A student starts by creating an account and providing information about their academic background, skills, interests and project preferences.

AI 4 U then recommends suitable project ideas and explains why those projects match the student's profile.

The platform is designed to support the student beyond project selection.

The overall journey is:

DISCOVER → CHOOSE → PLAN → BUILD

## Key Features

### Student Authentication
- Student signup and login
- Session-based authentication
- Protected application routes
- Student profile identity

### Personalized Project Recommendations
- Recommendations based on student profile
- Branch compatibility
- Skills and technology matching
- Domain and interest matching
- Goal and duration compatibility
- Team-size consideration
- Project difficulty consideration
- Match score for recommended projects

### Project Decision Support
- Best project recommendation
- Explanation of why a project is recommended
- Explanation of why other projects ranked lower
- Project comparison
- AI-based project decision guidance
- Project feasibility checking

### My Projects
- Save projects for later
- Select a project
- Track project status
- Interested
- Shortlisted
- Selected
- In Progress
- Completed

### AI Mentor
The AI Mentor helps students with the next steps after selecting a project.

It can assist with:
- Project roadmap
- Team work planning
- Feasibility guidance
- Project improvement ideas
- Making a project more unique

### Project Roadmap
Students can turn a selected project idea into a structured development roadmap.

### Team Planning
The platform helps divide project responsibilities among team members.

### Project Innovation
AI 4 U suggests ways to improve or differentiate a project so students can go beyond a basic implementation.

## Example Student Journey

A student enters:

- Branch: Computer Science
- Skills: Python, Machine Learning
- Interest: Healthcare
- Goal: Academic Project
- Team Size: 3
- Available Time: 2 Months

AI 4 U analyzes the profile and recommends suitable projects.

The student can then:

1. Review recommended projects
2. Understand why each project matches
3. Compare projects
4. Check feasibility
5. Save interesting projects
6. Select a project
7. Generate a roadmap
8. Plan team responsibilities
9. Talk to the AI Mentor
10. Improve the project idea

## Technology Stack

- React
- Vite
- JavaScript
- React Router
- CSS
- Local Storage
- Vercel

## Project Structure

```text
prompt-x/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── AppLayout.jsx
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── pages/
│   │   ├── Auth.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Landing.jsx
│   │   ├── MyProjects.jsx
│   │   ├── ProfileForm.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── Recommendations.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
