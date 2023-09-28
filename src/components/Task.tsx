import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "../App";

function TaskContainer<T>(props: { task: Task<T>; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props.task.id,
      data: { type: "Task" },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-1 m-1 h-20 min-h-20 bg-purple-400"
    >
      {props.children}
    </div>
  );
}

export default TaskContainer;
