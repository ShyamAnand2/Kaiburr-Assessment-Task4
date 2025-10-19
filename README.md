# Kaiburr-Assessment-Task4

# Task 4: CI/CD Pipeline with GitHub Actions

## Project Overview
This repository demonstrates CI/CD implementation for a full-stack Task Manager application using GitHub Actions. It includes automated build, test, and Docker image creation pipelines for both backend (Java/Spring Boot) and frontend (React/TypeScript).

## Repository Structure
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

text

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

text

### Trigger Frontend Pipeline
Make changes to frontend code
git add frontend/
git commit -m "Update frontend"
git push origin main

text

### View Pipeline Status
1. Go to GitHub repository
2. Click "Actions" tab
3. View running/completed workflows
4. Click on workflow for detailed logs

## Pipeline Outputs

- **JAR files** (backend)
- **Build artifacts** (frontend)
- **Docker images** tagged with commit SHA
- **Test results** in workflow logs

## Technologies Used

- **CI/CD:** GitHub Actions
- **Build Tools:** Maven, npm
- **Containerization:** Docker
- **Testing:** JUnit (backend), Jest (frontend)
- **Artifact Storage:** GitHub Actions Artifacts

## Author
Shyam Anand  
Date: October 20, 2025