# React + Vite
# GitHub User Search

A simple React + Vite application that allows users to search for GitHub profiles using the GitHub API.  
Users can enter a username, view basic profile information, and navigate directly to the user’s GitHub page.

## 🚀 Features
- Search for GitHub users by username  
- Display profile details such as avatar, username, and link to profile  
- Built with React, Vite, and Axios for fast development and API calls  

## 🛠️ Tech Stack
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [Axios](https://axios-http.com/) for HTTP requests  
- [GitHub API](https://docs.github.com/en/rest)  

## 📦 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/alx-fe-reactjs.git
   cd alx-fe-reactjs/github-user-search

github-user-search/
 ├─ src/
 │  ├─ components/    # React components
 │  ├─ services/      # API service (e.g., github.js)
 │  └─ App.jsx        # Main app entry
 ├─ .env              # Environment variables (ignored by Git)
 └─ README.md

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
