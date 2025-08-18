import DepositForm from "./DepositForm";

export default function GoalList({ goals, onDeposit, onDelete }) {
  if (!goals.length) return <p>No goals yet. Add one above </p>;

  return (
    <ul className="space-y-4">
      {goals.map((g) => {
        const progress =
          g.targetAmount > 0
            ? Math.min((g.currentAmount / g.targetAmount) * 100, 100)
            : 0;

        return (
          <li
            key={g.id}
            className="border p-4 rounded shadow flex flex-col space-y-2"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{g.name}</h2>
              <button
                onClick={() => onDelete(g.id)}
                className="text-red-500"
              >
                ✖
              </button>
            </div>
            <p>
              {g.currentAmount} / {g.targetAmount} ({progress.toFixed(1)}%)
            </p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
            <DepositForm goal={g} onDeposit={onDeposit} />
          </li>
        );
      })}
    </ul>
  );
}
