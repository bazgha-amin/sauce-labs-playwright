# sauce-labs-playwright
## **📌 Overview**
This project contains automated UI test scripts using **Playwright** to validate the functionalities of **SauceDemo**. The tests cover:
- ✅ Login functionality
- ✅ Adding an item to the cart and verifying it
- ✅ Proceeding to checkout and completing the order
- ✅ Handling error messages when checkout fields are left blank

# **🛠️ Tech Stack**
- **Framework**: Playwright  
- **Language**: TypeScript  
- **Design Pattern**: Page Object Model (POM)  
- **Reporting**: HTML Report

## **📂 Project Structure**
sauceDemo/
├── fixtures/
│   └── baseFixture.ts
├── pages/
│   ├── cartPage.ts
│   ├── checkoutPage.ts
│   └── loginPage.ts
├── tests/
│   ├── checkout.test.ts
│   └── login.test.ts
├── utils/
│   └── helpers.ts
├── playwright.config.ts
└── package.json

- ## **⚙️ Setup Instructions**
Follow these steps to set up and run the tests on your local machine:

### **1️⃣ Clone the Repository**
git clone https://github.com/bazgha-amin/sauce-labs-playwright

### **2️⃣ Install Dependencies**
npm install

### **3️⃣ Run Tests**
**To execute all tests:**

npx playwright test

**To run specific test file:**

npx playwright test tests/login.test.ts

**To run tests in headed mode(with browser UI):**

npx playwright test --headed

### **4️⃣ View HTML Test Report**
**After running tests, generate and view the report:**

npx playwright show-report

