import { Column, Task } from "./App";

export const defaultCols: Column<string>[] = [
  {
    id: "todo",
    title: "Todo",
    data: "somedata-todo",
  },
  {
    id: "doing",
    title: "Work in progress",
    data: "somedata-doing",
  },
  {
    id: "done",
    title: "Done",
    data: "somedata-done",
  },
];

export const defaultTasks: Task<string>[] = [
  {
    id: "1",
    columnId: "todo",
    data: "List admin APIs for dashboard",
  },
  {
    id: "2",
    columnId: "todo",
    data: "Develop user registration functionality",
  },
  {
    id: "3",
    columnId: "doing",
    data: "Conduct security testing",
  },
  {
    id: "4",
    columnId: "doing",
    data: "Analyze competitors",
  },
  // {
  //   id: "5",
  //   columnId: "done",
  //   data: "Create UI kit documentation",
  // },
  // {
  //   id: "6",
  //   columnId: "done",
  //   data: "Dev meeting",
  // },
  // {
  //   id: "7",
  //   columnId: "done",
  //   data: "Deliver dashboard prototype",
  // },
  {
    id: "8",
    columnId: "todo",
    data: "Optimize application performance",
  },
  {
    id: "9",
    columnId: "todo",
    data: "Implement data validation",
  },
  {
    id: "10",
    columnId: "todo",
    data: "Design database schema",
  },
  {
    id: "11",
    columnId: "todo",
    data: "Integrate SSL web certificates into workflow",
  },
  {
    id: "12",
    columnId: "doing",
    data: "Implement error logging and monitoring",
  },
  {
    id: "13",
    columnId: "doing",
    data: "Design and implement responsive UI",
  },
];
