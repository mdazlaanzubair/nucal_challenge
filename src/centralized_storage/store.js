import { createStore } from "vuex";

export const store = createStore({
  state: {
    tasks: [
      {
        id: 1,
        name: "Task One",
        level: 3, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
        state: false, // true ? completed : incomplete
        subTasks: [],
        timestamp: 1666510094670,
        isDeleted: false, // true ? deleted
      },
      {
        id: 2,
        name: "Task Two",
        level: 1, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
        state: false, // true ? completed : incomplete
        subTasks: [
          {
            id: 21,
            name: "Task Two - Subtask One",
            level: 2, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
            state: false, // true ? completed : incomplete
            timestamp: 1666510119961,
            isDeleted: false, // true ? deleted
          },
          {
            id: 22,
            name: "Task Two - Subtask Two",
            level: 4, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
            state: false, // true ? completed : incomplete
            timestamp: 1666510128830,
            isDeleted: false, // true ? deleted
          },
        ],
        timestamp: 1666510105905,
        isDeleted: false, // true ? deleted
      },
      {
        id: 3,
        name: "Task Three",
        level: 2, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
        state: false, // true ? completed : incomplete
        subTasks: [
          {
            id: 31,
            name: "Task Three - Subtask One",
            level: 1, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
            state: false, // true ? completed : incomplete
            timestamp: 1666510147561,
            isDeleted: false, // true ? deleted
          },
          {
            id: 32,
            name: "Task Three - Subtask Two",
            level: 1, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
            state: false, // true ? completed : incomplete
            timestamp: 1666510155082,
            isDeleted: false, // true ? deleted
          },
          {
            id: 33,
            name: "Task Three - Subtask Three",
            level: 4, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
            state: false, // true ? completed : incomplete
            timestamp: 1666510166978,
            isDeleted: false, // true ? deleted
          },
        ],
        timestamp: 1666510137064,
        isDeleted: false, // true ? deleted
      },
      {
        id: 4,
        name: "Task Four",
        level: 4, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
        state: false, // true ? completed : incomplete
        subTasks: [],
        timestamp: 1666510176309,
        isDeleted: false, // true ? deleted
      },
      {
        id: 5,
        name: "Task Five",
        level: 3, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
        state: false, // true ? completed : incomplete
        subTasks: [
          {
            id: 51,
            name: "Task Five - Subtask One",
            level: 1, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
            state: false, // true ? completed : incomplete
            timestamp: 1666510194734,
            isDeleted: false, // true ? deleted
          },
          {
            id: 52,
            name: "Task Five - Subtask Two",
            level: 2, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
            state: false, // true ? completed : incomplete
            timestamp: 1666510204056,
            isDeleted: false, // true ? deleted
          },
          {
            id: 53,
            name: "Task Five - Subtask Three",
            level: 4, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
            state: false, // true ? completed : incomplete
            timestamp: 1666510210724,
            isDeleted: false, // true ? deleted
          },
          {
            id: 54,
            name: "Task Five - Subtask Four",
            level: 3, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
            state: false, // true ? completed : incomplete
            timestamp: 1666510218958,
            isDeleted: false, // true ? deleted
          },
        ],
        timestamp: 1666510185147,
        isDeleted: false, // true ? deleted
      },
    ],
  },
});
