import { SortableContext } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import TaskContainer from "./Task";
import { Task } from "../App";

function Column(props: { id: string; title: string; tasks: Task[] }) {
  const { setNodeRef } = useDroppable({
    id: props.id,
    data: {
      type: "Column",
    },
  });

  return (
    <div key={props.id} className="bg-gray-200 h-full w-60 p-2">
      <p>{props.title}</p>

      <div ref={setNodeRef}>
        <SortableContext items={props.tasks}>
          {props.tasks.map((task) => (
            <TaskContainer key={task.id} id={task.id} content={task.content} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default Column;
