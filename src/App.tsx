import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import React from "react";
import { defaultCols, defaultTasks } from "./data";
import Column from "./components/Column";
import TaskElement from "./components/TaskElement";

export type Column<T> = {
  id: string;
  title: string;
  data: T;
};

export type Task<T> = {
  id: string;
  columnId: string;
  data: T;
};

type BoardProps<T, C> = {
  tasks: Task<T>[];
  columns: Column<C>[];
  taskElement: (task: Task<T>) => React.ReactNode;
};

function Board<T, C>(props: BoardProps<T, C>) {
  const [tasks, setTasks] = React.useState<Task<T>[]>(props.tasks);
  const [columns, setColumns] = React.useState<Column<C>[]>(props.columns);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function onDragEnd(event: DragEndEvent) {
    console.log("onDragEnd", event);

    const { active, over } = event;

    if (!over) {
      return;
    }

    const isActiveATask = active.data.current?.type === "Task";

    if (!isActiveATask) {
      return;
    }

    const isOverAColumn = over.data.current?.type === "Column";

    if (isActiveATask && isOverAColumn) {
      setTasks((prevTasks) => {
        const activeTask = prevTasks.find((t) => t.id === active.id);

        if (activeTask) {
          const newTasks = prevTasks.filter((t) => t.id !== active.id);

          return [
            ...newTasks,
            {
              id: activeTask.id,
              columnId: over.id.toString(),
              data: activeTask.data,
            },
          ];
        } else {
          return prevTasks;
        }
      });
    }

    const isOverATask = over.data.current?.type === "Task";

    if (isActiveATask && isOverATask) {
      setTasks((prevTasks) => {
        const activeTaskIndex = prevTasks.findIndex((t) => t.id === active.id);

        const overTaskIndex = prevTasks.findIndex((t) => t.id === over.id);

        return arrayMove(prevTasks, activeTaskIndex, overTaskIndex);
      });
    }
  }

  function onDragOver(event: DragOverEvent) {
    console.log("onDragOver", event);

    const { active, over } = event;

    if (!over) {
      return;
    }

    const isActiveATask = active.data.current?.type === "Task";

    if (!isActiveATask) {
      return;
    }

    const isOverAColumn = over.data.current?.type === "Column";

    if (isActiveATask && isOverAColumn) {
      setTasks((prevTasks) => {
        const activeTask = prevTasks.find((t) => t.id === active.id);

        if (activeTask) {
          const newTasks = prevTasks.filter((t) => t.id !== active.id);

          return [
            ...newTasks,
            {
              id: activeTask.id,
              columnId: over.id.toString(),
              data: activeTask.data,
            },
          ];
        } else {
          return prevTasks;
        }
      });
    }

    const isOverATask = over.data.current?.type === "Task";

    if (isActiveATask && isOverATask) {
      setTasks((prevTasks) => {
        const activeTaskIndex = prevTasks.findIndex((t) => t.id === active.id);

        const overTaskIndex = prevTasks.findIndex((t) => t.id === over.id);

        return arrayMove(prevTasks, activeTaskIndex, overTaskIndex);
      });
    }
  }

  return (
    <div className="bg-pink-50 w-screen h-screen">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="flex h-full gap-4 p-5">
          <SortableContext items={columns}>
            {columns.map((col) => (
              <Column
                key={col.id}
                id={col.id}
                title={col.title}
                tasks={tasks.filter((t) => t.columnId === col.id)}
              >
                {(task) => props.taskElement(task)}
              </Column>
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
}

function App() {
  return (
    <Board
      columns={defaultCols}
      tasks={defaultTasks}
      taskElement={(task) => <TaskElement task={task} />}
    />
  );
}

export default App;
