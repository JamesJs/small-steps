import goalsThunks from 'ss/models/goals/thunks'
import tasksActionTypes from 'ss/models/tasks/action-types'

const updateStatus = (store) => (next) => (action) => {
  next(action)

  if (action.type !== tasksActionTypes.SET_TASKS_STATUS_SUCCESS) {
    return
  }

  const { payload: { statuses } } = action
  store.dispatch(goalsThunks.updateStatus(statuses))
}

export default {
  updateStatus
}
