import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import React from "react";
import { defaultCols, defaultTasks } from "./data";
import Column from "./components/Column";

export type Column = {
  id: string;
  title: string;
};

export type Task = {
  id: string;
  columnId: string;
  content: string;
};

function App() {
  const [tasks, setTasks] = React.useState<Task[]>(defaultTasks);
  const [columns, setColumns] = React.useState<Column[]>(defaultCols);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function onDragEnd(event: DragEndEvent) {
    console.log("onDragEnd", event);
  }

  function onDragOver(event: DragOverEvent) {
    console.log("onDragOver", event);
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
          {columns.map((col) => (
            <Column
              key={col.id}
              id={col.id}
              title={col.title}
              tasks={tasks.filter((t) => t.columnId === col.id)}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default App;
