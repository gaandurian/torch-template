import React from "react";
import { Popup } from "semantic-ui-react";
import AddTaskForm from "../../../../components/AddTaskForm/AddTaskForm";

export default function TaskFormPopup({
  task,
  open,
  contextRef,
  handleEditTask,
  handleCreateNewTask,
  isEdit,
}) {
  return (
    <Popup
      style={{ minWidth: 450 }}
      flowing
      context={contextRef}
      content={
        <AddTaskForm
          handleEditTask={handleEditTask}
          handleCreateNewTask={handleCreateNewTask}
          initialValues={task}
          isEdit={isEdit}
        />
      }
      position="bottom right"
      open={open}
    />
  );
}
