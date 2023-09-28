import { Task } from "../App";

type TaskElementProps<T> = {
  task: Task<T>;
};

function TaskElement(props: TaskElementProps<string>) {
  return <div className="bg-blue-400 h-full w-full">{props.task.data}</div>;
}

export default TaskElement;
