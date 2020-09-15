import { updateTaskStatus } from "./tasks-api";

export const getPossibleTaskStates = (sekeleton) =>
sekeleton?.reduce((acc, curr) => {
  (acc || []).push(curr.id);
  return acc;
}, []);

export const groupBy = (items, key) =>
items?.reduce(
  (result, item) => ({
    ...result,
    [item[key]]: [...(result[item[key]] || []), item],
  }),
  {}
);

export const groupTasksByStatus = (tasks) => groupBy(tasks, "state");

export const insertTasksInLanes = (tasks, eventBus) => {
tasks.map(task => 
  eventBus?.publish({ type: 'ADD_CARD', laneId: task.state, card: task})
)
}

export const handleUpdateTaskStaus = (fromLaneId, toLaneId, cardId, index) =>
updateTaskStatus(cardId, toLaneId);
