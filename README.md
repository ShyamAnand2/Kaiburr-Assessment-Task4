# Kaiburr-Assessment-Task4

# Task 4: CI/CD Pipeline with GitHub Actions

## Project Overview
This repository demonstrates CI/CD implementation for a full-stack Task Manager application using GitHub Actions. It includes automated build, test, and Docker image creation pipelines for both backend (Java/Spring Boot) and frontend (React/TypeScript).

## Repository Structure
```
Kaiburr-Assessment-Task4/
├── .github/
│ └── workflows/
│ ├── backend-ci.yml
│ └── frontend-ci.yml
├── backend/
│ ├── src/
│ ├── pom.xml
│ └── Dockerfile
├── frontend/
│ ├── src/
│ ├── package.json
│ └── public/
└── README.md
```

## Pipelines

### Backend Pipeline (`backend-ci.yml`)
**Triggers:** Push or PR to `main` branch affecting `backend/**` files

**Steps:**
1. Checkout code
2. Set up JDK 17 with Maven cache
3. Build with Maven (`mvn clean package`)
4. Run unit tests (`mvn test`)
5. Build Docker image
6. Upload JAR as artifact

**Technologies:**
- Java 17
- Spring Boot 3.5.6
- Maven
- Docker

### Frontend Pipeline (`frontend-ci.yml`)
**Triggers:** Push or PR to `main` branch affecting `frontend/**` files

**Steps:**
1. Checkout code
2. Set up Node.js 20 with npm cache
3. Install dependencies (`npm ci`)
4. Build production bundle (`npm run build`)
5. Create Nginx-based Dockerfile
6. Build Docker image
7. Upload build artifacts

**Technologies:**
- React 19
- TypeScript
- Node.js 20
- Docker (Nginx Alpine)

## Features

✅ **Automated builds** on every push
✅ **Path-based triggers** (only runs affected pipeline)
✅ **Dependency caching** for faster builds
✅ **Test execution** with results reporting
✅ **Docker image creation** for deployment
✅ **Build artifacts** stored for 5 days
✅ **Parallel execution** (independent pipelines)

## How to Use

### Trigger Backend Pipeline
Make changes to backend code
git add backend/
git commit -m "Update backend"
git push origin main

### Trigger Frontend Pipeline
Make changes to frontend code
git add frontend/
git commit -m "Update frontend"
git push origin main

### View Pipeline Status
1. Go to GitHub repository
2. Click "Actions" tab
3. View running/completed workflows
4. Click on workflow for detailed logs

## Screenshots: CI/CD Pipeline Proof
To validate my CI/CD pipeline implementation for Task Manager, the following screenshots are included, each demonstrating a key part of the process.  
_All screenshots show the system datetime and my username as required._

---

### 1. Workflow File Presence
Screenshot showing my pipeline YAML file (`.github/workflows/main.yml` or similar) present in my repository on GitHub.
<img width="1918" height="1078" alt="Task-4-WORKFLOW" src="https://github.com/user-attachments/assets/cad63d4f-abed-4ab5-99ae-9c5834ce2f82" />

---

### 2. Actions Tab — Workflow Run List
A view of the GitHub Actions “Actions” tab,
displaying recent workflow runs, status icons (success/fail), and my repo context.
<img width="1918" height="1078" alt="Task-4-ACTIONS" src="https://github.com/user-attachments/assets/d19c915d-352b-4698-a0d6-a40158d31382" />

---

### 3. Workflow Run Details — Build Steps
Expanded screenshot of a workflow run showing the build job steps, including code compilation and test phases, with all successful jobs marked.

#### For Backend CI/CD:
1) In progress:
<img width="1918" height="1078" alt="Task-4-INPROGRESSS" src="https://github.com/user-attachments/assets/54c95963-aab7-4dfa-8ace-fc3c114b2daf" />
2) Completed:
<img width="1918" height="1078" alt="Task-4-INPROGRESS-COMPLETE" src="https://github.com/user-attachments/assets/dc3edb99-dd58-4492-ab57-37652cbfae7f" />

#### For Frontend CI/CD:
1) In progress:
<img width="1918" height="1078" alt="Task-4-INPROGRESS2" src="https://github.com/user-attachments/assets/be4cb511-2b68-4be0-9a77-31baa68764e9" />
2) Completed:
<img width="1918" height="1078" alt="Task-4-INPROGRESS2COMPLETE" src="https://github.com/user-attachments/assets/7d2787eb-7f35-4a9d-acda-90553c0fa20a" />

---

### 4. Docker Build Step Completion
Screenshot of the Docker image build step in the workflow run, demonstrating successful container creation and completion.
<img width="1918" height="1078" alt="Task-4-BUILDDOCKER" src="https://github.com/user-attachments/assets/38721839-6477-48b2-ae96-58012cfceb0f" />

---

### 5. Final Workflow Success

The full job status for a completed workflow run displaying all green checkmarks and overall pipeline success. I've run both Backend and Frontend CI/CD to show that the pushed codes indeed work from start to end.
<img width="1918" height="1078" alt="Task-4-RECENT" src="https://github.com/user-attachments/assets/d2fa4c2d-acb5-4e97-bcf8-e87c2258093c" />

---

## Technologies Used

- **CI/CD:** GitHub Actions
- **Build Tools:** Maven, npm
- **Containerization:** Docker
- **Testing:** JUnit (backend), Jest (frontend)
- **Artifact Storage:** GitHub Actions Artifacts

## Author
Shyam Anand  
Date: October 20, 2025
