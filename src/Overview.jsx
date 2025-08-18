import { currency, statusForGoal } from '../utils'

export default function Overview({ goals, totals }) {
  const totalGoals = goals.length
  const { totalSaved, completed, overdue, dueSoon } = totals

  return (
    <section className="grid overview">
      <div className="stat">
        <div className="stat-title">Total Goals</div>
        <div className="stat-value">{totalGoals}</div>
      </div>
      <div className="stat">
        <div className="stat-title">Total Saved</div>
        <div className="stat-value">{currency(totalSaved)}</div>
      </div>
      <div className="stat">
        <div className="stat-title">Completed</div>
        <div className="stat-value ok">{completed}</div>
      </div>
      <div className="stat">
        <div className="stat-title">Due ≤ 30 days</div>
        <div className="stat-value warn">{dueSoon}</div>
      </div>
      <div className="stat">
        <div className="stat-title">Overdue</div>
        <div className="stat-value bad">{overdue}</div>
      </div>
    </section>
  )
}