# 🎭 Test Automation for Bertrand Store 

---

## 📖 About The Project

This project automates the testing of the **Bertrand Website**, ensuring the quality and stability of critical business flows.

The framework is built using **Playwright** with **JavaScript** and follows the **Page Object Model (POM)** design pattern to ensure code reusability and maintainability. It also implements **Data-Driven Testing** to validate multiple scenarios dynamically.

---

## 🚀 Getting Started
Follow these steps to get a local copy up and running.

**Pre-Conditions**
* Node.js (v14 or higher)
* npm (Node Package Manager)

**Installation**
1. Clone the repository
   ```bash
   https://github.com/DiNeves/bertrand-qa-challenge.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Install Playwright browsers
   ```bash
   npx playwright install
   ```

---

## 🏃‍♂️ Running the Tests
You can run the tests in different modes depending on your needs.

**Run all tests (Headless mode)**

Executes all specs in the background.
```bash
npx playwright test
```

**Run with UI Mode (Recommended for Debugging) 🕵️**

Opens an interactive interface to watch the tests running step-by-step and inspect logs.
```bash
npx playwright test --ui
```

**Run a specific test file**

Example: Run only the test scenarios.
```bash
npx playwright test specs/scenario1.spec.js
```

**View the Report**

After a run, generate an HTML report to see passes, failures, and screenshots.
```bash
npx playwright show-report
```

---

## 👥 Meet the Team

This project was developed by:

| Name | Role | 
| :--- | :--- | 
| **Diana Neves** | QA Automation Engineer | 


---

## 🛠️ Technologies Used
* **Playwright** - The main testing framework.
* **JavaScript** - Programming language.
* **Node.js** - Runtime environment.