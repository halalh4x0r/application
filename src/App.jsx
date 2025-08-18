import { useEffect, useState } from "react";
import AddGoalForm from "./AddGoalForm";
import GoalList from "./GoalList";

const API = "http://localhost:3001/goals"; // json-server endpoint

export default function App() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // Fetch all goals on mount
  useEffect(() => {
    async function loadGoals() {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("Failed to fetch goals");
        const data = await res.json();
        setGoals(data);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadGoals();
  }, []);

  // Add a new goal
  async function handleAdd(goal) {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(goal),
      });
      if (!res.ok) throw new Error("Failed to add goal");
      const saved = await res.json();
      setGoals((prev) => [...prev, saved]);
    } catch (e) {
      alert(e.message);
    }
  }

  // Update a goal (deposit)
  async function handleDeposit(updated) {
    try {
      const res = await fetch(`${API}/${updated.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) throw new Error("Failed to update goal");
      const saved = await res.json();
      setGoals((prev) =>
        prev.map((g) => (g.id === saved.id ? saved : g))
      );
    } catch (e) {
      alert(e.message);
    }
  }

  // Delete a goal
  async function handleDelete(id) {
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete goal");
      setGoals((prev) => prev.filter((g) => g.id !== id));
    } catch (e) {
      alert(e.message);
    }
  }

  if (loading) return <p>Loading goals...</p>;
  if (err) return <p className="text-red-500">Error: {err}</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🎯 Smart Goal Planner</h1>
      <AddGoalForm onAdd={handleAdd} />
      <GoalList goals={goals} onDeposit={handleDeposit} onDelete={handleDelete} />
    </div>
  );
}
