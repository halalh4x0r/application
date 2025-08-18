const API_URL = 'http://localhost:3000/goals'

const handle = async (res) => {
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `HTTP ${res.status}`)
  }
  return res.status === 204 ? null : res.json()
}

export const getGoals = () => fetch(API_URL).then(handle)

export const addGoal = (goal) =>
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(goal),
  }).then(handle)

export const updateGoal = (id, updates) =>
  fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  }).then(handle)

export const deleteGoal = (id) =>
  fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then((res) => {
    if (!res.ok) throw new Error(`Failed to delete goal ${id}`)
    return true
  })