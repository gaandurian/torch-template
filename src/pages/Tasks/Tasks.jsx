import React, { useState, useEffect } from "react";
import Board from "react-trello";
import { Segment, Grid } from "semantic-ui-react";
import { getAllTasks } from "./tasks-api";
import boardSkeleton from "./board-skeleton.js";
import { insertTasksInLanes, handleUpdateTaskStaus } from "./task-utilities";
import { MainPageTitle } from "../../components/shared/Typography";
const { Column, Row } = Grid

export default function Tasks() {
  const [loading, setLoading] = useState(false);
  const [eventBus, setEventBus] = useState(undefined);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllTasks().then((data) => setTasks(data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    tasks && eventBus && insertTasksInLanes(tasks, eventBus);
    setLoading(false);
  }, [eventBus, tasks]);

  return (
    <div>
      <MainPageTitle title="Tasks" />
      <Grid columns={2}>
        <Row>
          <Column width={11}>
            <Segment loading={loading}>
              <Board
                data={{ lanes: boardSkeleton }}
                style={{ backgroundColor: "transparent" }}
                onCardMoveAcrossLanes={handleUpdateTaskStaus}
                eventBusHandle={setEventBus}
              />
            </Segment>
          </Column>
          <Column width={5}>
            <Segment></Segment>
          </Column>
        </Row>
      </Grid>
    </div>
  );
}
