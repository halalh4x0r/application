import { useState } from "react";

const initial = { name: "", targetAmount: "", category: "", deadline: "" };

export default function AddGoalForm({ onAdd }) {
  const [form, setForm] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      await onAdd({ ...form, currentAmount: 0 }); // 👈 ensure currentAmount starts at 0
      setForm(initial);
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2 mb-6">
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Goal name"
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="targetAmount"
        value={form.targetAmount}
        onChange={onChange}
        placeholder="Target amount"
        className="border p-2 w-full"
        required
      />
      <input
        name="category"
        value={form.category}
        onChange={onChange}
        placeholder="Category"
        className="border p-2 w-full"
      />
      <input
        type="date"
        name="deadline"
        value={form.deadline}
        onChange={onChange}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        disabled={busy}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {busy ? "Adding..." : "Add Goal"}
      </button>
      {err && <p className="text-red-500">{err}</p>}
    </form>
  );
}
