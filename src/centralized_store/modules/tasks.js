const state = {
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
};

const getters = {
  // getting tasks from application state
  tasksList: (state) => {
    // holding fetched tasks data in sort variable
    let sortedTasks = state.tasks;

    // first filtering out all the tasks that are deleted
    sortedTasks = sortedTasks.filter((task) => {
      // checking if "isDeleted" state of the task is true or otherwise
      if (task.isDeleted == false) {
        // checking if task has sub-tasks or otherwise
        if (task.subTasks.length > 0) {
          // filtering out all the tasks that are deleted
          task.subTasks = task.subTasks.filter((subTasks) => {
            // checking if "isDeleted" state of the sub-task is true or otherwise
            if (subTasks.isDeleted == false) {
              // returning sub-task that is not deleted
              return subTasks;
            }
          });
        }
        // returning tasks that is not deleted
        return task;
      }
    });

    // performing sort on whole array of objects
    sortedTasks.sort((task_a, task_b) => {
      // performing sort on nest tasks of first task element i.e. "task_a"
      if (task_a.subTasks.length > 0) {
        task_a.subTasks = task_a.subTasks.sort((subTask_a, subTask_b) => {
          if (subTask_a.level < subTask_b.level) return 1;
          if (subTask_a.level > subTask_b.level) return -1;
          else return 0;
        });
      }
      // performing sort on nest tasks of second task element i.e. "task_b"
      if (task_b.subTasks.length > 0) {
        task_b.subTasks = task_b.subTasks.sort((subTask_a, subTask_b) => {
          if (subTask_a.level > subTask_b.level) return 1;
          if (subTask_a.level < subTask_b.level) return -1;
          else return 0;
        });
      }

      // performing sort on main tasks elements
      if (task_a.level > task_b.level) return 1;
      if (task_a.level < task_b.level) return -1;
      else return 0;
    });

    // returning tasksList after sort
    return sortedTasks;
  },
};

const actions = {};

const mutations = {};

export default { state, getters, actions, mutations };
