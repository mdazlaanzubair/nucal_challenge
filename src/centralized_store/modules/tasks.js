const state = {
  tasksList: [
    {
      id: 1,
      title: "What is Lorem Ipsum?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      priority: 1, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
      isCompleted: false, // true ? completed : incomplete
      timestamp: 1666510094670,
      isDeleted: false, // true ? deleted
    },
    {
      id: 2,
      title: "Why do we use it?",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      priority: 2, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
      isCompleted: false, // true ? completed : incomplete
      timestamp: 1666510105905,
      isDeleted: false, // true ? deleted
    },
    {
      id: 3,
      title: "Where does it come from?",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      priority: 3, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
      isCompleted: false, // true ? completed : incomplete
      timestamp: 1666510137064,
      isDeleted: false, // true ? deleted
    },
    {
      id: 4,
      title: "Where can I get some?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      priority: 4, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
      isCompleted: false, // true ? completed : incomplete
      timestamp: 1666510176309,
      isDeleted: false, // true ? deleted
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      priority: 4, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
      isCompleted: false, // true ? completed : incomplete
      timestamp: 1666510185147,
      isDeleted: false, // true ? deleted
    },
  ],
  filter: "all",
  order: "latest",
};

const getters = {
  // filtering out tasks that are deleted
  filteredTasks(state) {
    if (state.filter === "all")
      return state.tasksList.filter((task) => !task.isDeleted);
    if (state.filter === "active")
      return state.tasksList.filter(
        (task) => !task.isDeleted && !task.isCompleted
      );
    if (state.filter === "completed")
      return state.tasksList.filter(
        (task) => !task.isDeleted && task.isCompleted
      );
  },
};

const actions = {
  // action to mutate the "taskList" state by orderType it on priority basis
  prioritize({ commit }, orderType) {
    // committing changes to the state via mutation i.e. "sortTasks"
    commit("sortTasks", orderType);
  },

  // action to mutate the "taskList" state by filtering it on priority basis
  filterTasks({ commit }, filterType) {
    // committing changes to the state via mutation i.e. "isFiltered"
    commit("isFiltered", filterType);
  },

  // action to mutate the "taskList" state by adding a new task in it
  addTask({ commit }, newTask) {
    // mutating the state by "taskCreated"
    commit("taskCreated", newTask);
  },

  // action to mutate the "taskList" state by adding a new task in it
  editTask({ commit }, updateTask) {
    // mutating the state by "taskUpdated"
    commit("taskUpdated", updateTask);
  },

  // action to mutate the "status" of "taskList" state
  isCompleted({ commit }, taskID) {
    // mutating the state by "isChecked"
    commit("isChecked", taskID);
  },

  // action to mutate the "taskList" state by deleting a task from it
  // keeping in view the modern development approach,
  // I prefer flag as "isDeleted" instead actually deleting
  isDeleted({ commit }, taskID) {
    // mutating the isRemoved
    commit("isRemoved", taskID);
  },
};

const mutations = {
  // mutation that adds new task item in tasks array
  taskCreated: (state, new_task) => state.tasksList.unshift(new_task),

  // mutation that edits task item in tasks array
  taskUpdated: (state, updateTask) =>
    (state.tasksList = state.tasksList.map((task) => {
      if (task.id === updateTask.id) {
        task.title = updateTask.title;
        task.desc = updateTask.desc;
        task.priority = updateTask.priority;
        task.isCompleted = updateTask.isCompleted;
        task.isDeleted = updateTask.isDeleted;
        task.timestamp = updateTask.timestamp;
      }
      return task;
    })),

  // mutation that filters task item in tasks array
  isFiltered: (state, filterType) => (state.filter = filterType),

  // mutation that sorts task item in tasks array
  sortTasks: (state, orderType) =>
    (state.tasksList = state.tasksList.sort((task_a, task_b) => {
      // prioritizing based on orderType i.e. "high to low" , "low to high" , "latest first" & "oldest first"
      if (orderType === "high-low") {
        // "task_a" is grater than "task_b" return 1
        if (task_a.priority > task_b.priority) return 1;

        // "task_a" is grater than "task_b" return -1
        if (task_a.priority < task_b.priority) return -1;
        else return 0;
      }

      if (orderType === "low-high") {
        // "task_a" is less than "task_b" return 1
        if (task_a.priority < task_b.priority) return 1;
        // "task_a" is less than "task_b" return -1
        if (task_a.priority > task_b.priority) return -1;
        else return 0;
      }

      if (orderType === "oldest") {
        // "task_a" is less than "task_b" return 1
        if (new Date(task_a.timestamp) > new Date(task_b.timestamp)) return 1;
        // "task_a" is less than "task_b" return -1
        if (new Date(task_a.timestamp) < new Date(task_b.timestamp)) return -1;
        else return 0;
      }

      if (orderType === "latest") {
        // "task_a" is less than "task_b" return 1
        if (new Date(task_a.timestamp) < new Date(task_b.timestamp)) return 1;
        // "task_a" is less than "task_b" return -1
        if (new Date(task_a.timestamp) > new Date(task_b.timestamp)) return -1;
        else return 0;
      }
    })),

  // mutation that changes completed status of task item
  isChecked: (state, taskID) =>
    // filtering out task by id and update its "isCompleted" status
    state.tasksList.filter((task) => {
      if (task.id === taskID) {
        task.isCompleted = task.isCompleted ? false : true;
      }
      return task;
    }),

  // mutation that changes deleted status of task item
  // deleting out task, finding by update its "isDeleted" status
  isRemoved: (state, taskID) =>
    (state.tasksList = state.tasksList.filter((task) => {
      if (task.id === taskID) {
        task.isDeleted = true;
      }
      return task;
    })),
};

export default { state, getters, actions, mutations };
