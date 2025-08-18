export const currency = (n) =>
  new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n)

export const todayISO = () => new Date().toISOString().slice(0, 10)

export const daysUntil = (isoDate) => {
  const ms = new Date(isoDate) - new Date()
  return Math.ceil(ms / (1000 * 60 * 60 * 24))
}

export const statusForGoal = (g) => {
  const pct = Math.min(100, Math.round((g.savedAmount / g.targetAmount) * 100))
  const remaining = Math.max(0, g.targetAmount - g.savedAmount)
  const days = daysUntil(g.deadline)
  const isComplete = g.savedAmount >= g.targetAmount
  const overdue = days < 0 && !isComplete
  const dueSoon = days <= 30 && days >= 0 && !isComplete
  return { pct, remaining, days, isComplete, overdue, dueSoon }
}