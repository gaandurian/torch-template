
export const getTaskAssignee = (members, member_id) => {
    const assignee = members.find((member) => member._id === member_id);
    return `${assignee?.firstname} ${assignee?.lastname}`;
  };