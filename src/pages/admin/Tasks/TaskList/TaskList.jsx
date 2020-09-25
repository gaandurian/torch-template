import React, { useState, useRef, useEffect } from "react";
import { Table, Button, Image, Label } from "semantic-ui-react";
import Identicon from "react-identicons";
import TaskFormPopup from "../TaskFormPopup/TaskFormPopup";
import { getAllMembers } from "../../../Members/members-api";
import { getTaskAssignee } from "../admin-tasks-utilities";

const { Cell } = Table;
const headCells = [
  "Member",
  "Title",
  "Description",
  "Status",
  "Due on",
  "Action",
];

export default function TasksList({
  tasks,
  handleUpdateTaskStatus,
  handleDeleteTask,
  handleEditTask,
}) {
  const contextRef = useRef([]);
  const [taskToEdit, setTaskToEdit] = useState(undefined);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    contextRef.current = new Array(tasks.length);
    setTaskToEdit(undefined);
    // eslint-disable-next-line
  }, [tasks, contextRef]);

  useEffect(() => {
    getAllMembers().then((data) => setMembers(data));
  }, [tasks]);

  const getTaskStatusColor = (status) => {
    switch (status) {
      case "planned-tasks":
        return "yellow";
      case "work-in-progress":
        return "blue";
      case "finished-tasks":
        return "teal";
      default:
        return "grey";
    }
  };

  const handleToggleEditTask = (task) => {
    if (
      taskToEdit !== undefined &&
      contextRef.current[taskToEdit?._id] !== contextRef.current[task._id]
    ) {
      setTaskToEdit(task);
    } else if (taskToEdit === undefined) {
      setTaskToEdit(task);
    } else {
      setTaskToEdit(undefined);
    }
  };

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            {headCells.map((cell) => (
              <Table.HeaderCell key={cell}>{cell}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tasks?.map((task) => {
            return (
              <Table.Row key={task._id}>
                <Cell>
                  <Image
                    children={
                      <Identicon
                        palette={["#0099a2", "tomato"]}
                        size={27}
                        bg="#614a67"
                        string={task.title}
                      />
                    }
                    rounded
                    size="mini"
                    avatar
                  ></Image>
                  {getTaskAssignee(members, task.member_id)}
                </Cell>
                <Cell>{task.title}</Cell>
                <Cell>{task.description}</Cell>
                <Cell>
                  {
                    <Label color={getTaskStatusColor(task.state)}>
                      {task.state.split("-").join(" ")}
                    </Label>
                  }
                </Cell>
                <Cell>{task.label}</Cell>
                <Cell collapsing>
                  <span
                    key={task._id}
                    ref={(el) => (contextRef.current[task._id] = el)}
                  >
                    <Button
                      icon="pencil alternate"
                      onClick={() => handleToggleEditTask(task)}
                    />
                  </span>
                  <Button
                    icon="trash"
                    negative
                    onClick={() => handleDeleteTask(task._id)}
                  />
                  <TaskFormPopup
                    handleEditTask={handleEditTask}
                    isEdit
                    task={task}
                    open={taskToEdit?._id === task._id}
                    contextRef={contextRef.current[taskToEdit?._id]}
                  />
                </Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
