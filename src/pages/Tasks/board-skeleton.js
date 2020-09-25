const laneWidth = 346
const cardWidth = laneWidth-20

export default [
  {
    id: "planned-tasks",
    title: "Planned tasks",
    style: {
      backgroundColor: '#0003',
      minWidth: laneWidth,
    },
    cardStyle: {
      minWidth: cardWidth,
    },
    titleStyle: {
      color: '#fff',
    },
    cards: [],
  },
  {
    id: "work-in-progress",
    title: "Work in progress",
    style: {
      backgroundColor: '#0003',
      minWidth: laneWidth,
    },
    cardStyle: {
      minWidth: cardWidth,
    },
    titleStyle: {
      color: '#fff',
    },
    cards: [],
  },
  {
    id: "finished-tasks",
    title: "Finished tasks",
    style: {
      color: '#fff',
      backgroundColor: '#0003',
      minWidth: laneWidth
    },
    cardStyle: {
      minWidth: cardWidth,
    },
    titleStyle: {
      color: '#fff',
    },
    cards: [],
  },
];
