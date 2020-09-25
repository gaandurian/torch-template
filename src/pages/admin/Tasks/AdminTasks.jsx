import React, { useState, useEffect, useRef } from "react";
import StyledSegment from "../../../components/shared/StyledSegment/StyledSegment";
import {
  getAllTasks,
  updateTaskStatus,
  createNewTask,
  deleteTask,
  editTask,
} from "./admin-tasks-api";
import { Button, Icon } from "semantic-ui-react";
import { MainPageTitle } from "../../../components/shared/Typography";
import TaskList from "./TaskList/TaskList";
import TaskFormPopup from "./TaskFormPopup/TaskFormPopup";

export default function AdminTasks() {
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(false);
  const [openAddTask, setOpenAddTask] = useState(false);
  const addTaskButtonRef = useRef();

  const handleGetAllTasks = () => {
    setLoadingTasks(true);
    getAllTasks().then((data) => {
      setTasks(data);
      setLoadingTasks(false);
    });
  };

  const handleToggleAddTask = () => setOpenAddTask(!openAddTask);
  const handleDeleteTask = (_id) =>
    deleteTask(_id).then(() => handleGetAllTasks());

  const handleCreateNewTask = (values) =>
    createNewTask(values).then(() => handleGetAllTasks());

  const handleUpdateTaskStatus = async (_id) =>
    updateTaskStatus(_id).then(() => handleGetAllTasks());

  const handleEditTask = async (values) =>
    editTask(values).then(() => handleGetAllTasks());

  useEffect(() => handleGetAllTasks(), []);

  return (
    <div>
      <MainPageTitle title="Manage Tasks" />
      <div ref={addTaskButtonRef} style={{ float: 'right'}}>
        <Button primary onClick={handleToggleAddTask}>
          <Icon name="plus" />
          New task
        </Button>
      </div>

      <StyledSegment style={{ all: "unset" }} loading={loadingTasks}>
        <TaskList
          tasks={tasks}
          handleUpdateTaskStatus={handleUpdateTaskStatus}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </StyledSegment>

      <TaskFormPopup
        open={openAddTask}
        contextRef={addTaskButtonRef}
        handleCreateNewTask={handleCreateNewTask}
      />
    </div>
  );
}
