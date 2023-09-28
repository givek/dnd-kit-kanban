import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TaskContainer from "./Task";
import { Task } from "../App";

function ColumnTaskContainer<T>(props: {
  id: string;
  title: string;
  tasks: Task<T>[];
  children: (task: Task<T>) => React.ReactNode;
}) {
  const { setNodeRef } = useSortable({
    id: props.id,
    data: {
      type: "Column",
    },
  });

  return (
    <div key={props.id}>
      <div ref={setNodeRef}>
        <SortableContext items={props.tasks}>
          {props.tasks.map((task) => (
            <TaskContainer key={task.id} task={task}>
              {props.children(task)}
            </TaskContainer>
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default ColumnTaskContainer;
