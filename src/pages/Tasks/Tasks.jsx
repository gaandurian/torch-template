import React, { useState, useEffect } from "react";
import Board from "react-trello";
import { Grid, Card } from "semantic-ui-react";
import { getAllTasksAssignedToThisMember } from "./tasks-api";
import boardSkeleton from "./board-skeleton.js";
import {
  insertTasksInLanes,
  handleUpdateTaskStaus,
  formatDueDate,
} from "./task-utilities";
import { MainPageTitle } from "../../components/shared/Typography";
import StyledSegment from "../../components/shared/StyledSegment";
import { getCurrentUser } from "../Auth/auth-utilities";
const { Column, Row } = Grid;

export default function Tasks() {
  const [loading, setLoading] = useState(false);
  const [eventBus, setEventBus] = useState(undefined);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);
    const activeUser = getCurrentUser();
    if (activeUser)
      getAllTasksAssignedToThisMember(activeUser._id).then((data) => {
        setTasks(
          data.map((task) => ({
            ...task,
            label: formatDueDate(task.label),
            id: task._id,
          }))
        );
      });
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
            <StyledSegment
              loading={loading}
              style={{ padding: 0, backgroundColor: "tomato" }}
            >
              <Board
                hideCardDeleteIcon
                data={{ lanes: boardSkeleton }}
                style={{ backgroundColor: "transparent" }}
                onCardMoveAcrossLanes={(fromLaneId, toLaneId, cardId, index) =>
                  handleUpdateTaskStaus(toLaneId, cardId)
                }
                eventBusHandle={setEventBus}
              />
            </StyledSegment>
          </Column>
          <Column width={5}>
            <StyledSegment title="Your numbers">
              <Card.Group>
                <Card
                  fluid
                  header="Jake Smith"
                  meta="Musicians"
                  description="Jake is a drummer living in New York."
                />
                <Card
                  fluid
                  header="Jake Smith"
                  meta="Musicians"
                  description="Jake is a drummer living in New York."
                />

                <Card fluid>
                  <Card.Content
                    header="Elliot Baker"
                    meta="Friend"
                    description="Elliot is a music producer living in Chicago."
                  />
                </Card>

                <Card
                  fluid
                  header="Jenny Hess"
                  meta="Friend"
                  description="Jenny is a student studying Media Management at the New School"
                />
              </Card.Group>
            </StyledSegment>
          </Column>
        </Row>
      </Grid>
    </div>
  );
}
