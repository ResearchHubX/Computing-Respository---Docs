## CI/CD for CRPR Code Repository  

This repository contains documentation for CRPR. The actual code repository, where the GitHub Actions workflow should be implemented, is located at:  

🔗 [CRPR Code Repository](https://github.com/ResearchHubX/CRPR-Internal-attachment)  

Follow the CI/CD setup in `.github/workflows/django-ci.yml` within the CRPR code repository.  

name: Django CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      
      - name: Install Dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
      
      - name: Run Migrations
        run: |
          python manage.py migrate
      
      - name: Run Tests
        run: |
          python manage.py test
      
      - name: Check for Security Vulnerabilities
        run: |
          pip install bandit
          bandit -r .
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Production
        run: |
          echo "Deploying application..."
          # Add deployment commands here, e.g., using AWS, DigitalOcean, or Docker

# Documentation:
# This GitHub Actions workflow is meant to be implemented in the CRPR **code repository**
# under `.github/workflows/django-ci.yml`. It automates the following:
# 1. **Build & Test:** Runs on every push or pull request to `main`.
# 2. **Migrations:** Applies database migrations.
# 3. **Security Checks:** Uses Bandit for security scanning.
# 4. **Deployment:** Deploys the application after successful tests.
# 
# Ensure the necessary cloud deployment commands are added under the `deploy` job.
