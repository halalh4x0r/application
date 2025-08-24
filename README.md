#  Smart Goal Planner

**SA Code Challenge Week 2**  
*Due: Thursday by 11:59pm*  
*Points: 15 | Attempts allowed: 3*

The **Smart Goal Planner** is a financial goal management dashboard built for a fintech use-case.  
It allows users to create, track, and update multiple savings goals while persisting data locally using `json-server`.

---

## Features

### 1. Data Management & Persistence
- All data is stored in **db.json**.
- Served via **json-server** as a REST API (e.g. `http://localhost:3000/goals`).
- Full **CRUD** operations supported:
  - **Create** → Add new financial goals.
  - **Read** → Fetch and display goals on startup.
  - **Update** → Modify name, target amount, category, deadline, and deposits.
  - **Delete** → Remove a goal.

---

### 2. Multiple Savings Goals
- Add new goals such as *Travel Fund*, *Emergency Fund*, etc.
- Each goal contains:
  - Name  
  - Target Amount  
  - Saved Amount  
  - Category  
  - Deadline  
  - Created Date  

---

### 3. Progress Tracking
- Shows:
  - Current saved amount
  - Target vs. Remaining
  - Visual **progress bar**
- Completed goals marked automatically.
- Deadlines:
  - If due within **30 days** → show **warning**   
  - If overdue without completion → mark as **Overdue**   

---

### 4. Deposits
- Users can allocate deposits to specific goals.
- Deposit updates the `savedAmount` field in `db.json`.
- Progress bar dynamically updates after each deposit.

---

### 5. Overview Dashboard
- Displays:
  -  Total number of goals  
  -  Total amount saved across all goals  
  -  Number of completed goals  
  -  Time left for each goal  
  -  Deadlines within 30 days  
  -  Overdue goals  

---

##  Project Structure

```bash
smart-goal-planner/
├── src/
│   ├── components/
│   │   ├── GoalList.js
│   │   ├── GoalCard.js
│   │   ├── GoalForm.js
│   │   ├── DepositForm.js
│   │   └── Overview.js
│   ├── App.js
│   └── index.js
├── db.json
├── package.json
└── README.md
