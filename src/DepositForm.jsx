import { useState } from "react";

export default function DepositForm({ goal, onDeposit }) {
  const [amount, setAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const deposit = parseFloat(amount);
    if (isNaN(deposit) || deposit <= 0) return;

    const updated = {
      ...goal,
      currentAmount: (goal.currentAmount || 0) + deposit,
    };

    await onDeposit(updated);
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mt-2">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Deposit"
        className="border p-1 flex-1"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-3 rounded"
      >
        Add
      </button>
    </form>
  );
}
