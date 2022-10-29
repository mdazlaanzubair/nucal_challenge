const state = {
  main_tasks: [
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
      priority: 5, // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
      isCompleted: false, // true ? completed : incomplete
      timestamp: 1666510185147,
      isDeleted: false, // true ? deleted
    },
  ],
  filteredTasks: [],
  filter: "all",
};

const getters = {
  setFilteredTasks(state) {
    // filtering out tasks that are deleted
    return (state.filteredTasks = state.main_tasks.filter(
      (task) => task.isDeleted === false
    ));
  },
};

const actions = {
  // action to mutate the "taskList" state order on priority basis
  prioritize({ commit }, order) {
    // storing "main_tasks" in new variable to perform sorting
    let sortedTasks = this.getters.main_tasks;

    // performing sort new variable i.e. "sortedTasks"
    sortedTasks.sort((task_a, task_b) => {
      // prioritizing based on order i.e. "high to low" and "low to high"
      if (order === "high-low") {
        // "task_a" is grater than "task_b" return 1
        if (task_a.priority > task_b.priority) return 1;
        // "task_a" is grater than "task_b" return -1
        if (task_a.priority < task_b.priority) return -1;
        else return 0;
      } else {
        // "task_a" is less than "task_b" return 1
        if (task_a.priority < task_b.priority) return 1;
        // "task_a" is less than "task_b" return -1
        if (task_a.priority > task_b.priority) return -1;
        else return 0;
      }
    });

    // committing changes to the state via mutation i.e. "sortTasks"
    commit("sortTasks", sortedTasks);
  },

  // action to mutate the "taskList" state order with dates
  prioritizeByDate({ commit }, order) {
    // setting filtered task in new variable
    let sortedTasks = this.getters.tasksList;

    // checking the sorting order on date is "latest first" or "oldest first"
    if (order === "oldest") {
      // performing sort on whole array of objects
      sortedTasks.sort((task_a, task_b) => {
        // performing sort on sub-tasks of task element i.e. "task_a"
        if (task_a.subTasks.length > 0) {
          task_a.subTasks = task_a.subTasks.sort((subTask_a, subTask_b) => {
            if (subTask_a.timestamp < subTask_b.timestamp) return 1;
            if (subTask_a.timestamp > subTask_b.timestamp) return -1;
            else return 0;
          });
        }

        // performing sort on sub-tasks of task element i.e. "task_b"
        if (task_b.subTasks.length > 0) {
          task_b.subTasks = task_b.subTasks.sort((subTask_a, subTask_b) => {
            if (subTask_a.timestamp > subTask_b.timestamp) return 1;
            if (subTask_a.timestamp < subTask_b.timestamp) return -1;
            else return 0;
          });
        }

        // performing sort on main tasks elements i.e. "task_a" & "task_b"
        if (task_a.timestamp > task_b.timestamp) return 1;
        if (task_a.timestamp < task_b.timestamp) return -1;
        else return 0;
      });
    } else {
      // performing sort on whole array of objects
      sortedTasks.sort((task_a, task_b) => {
        // performing sort on sub-tasks of task element i.e. "task_a"
        if (task_a.subTasks.length > 0) {
          task_a.subTasks = task_a.subTasks.sort((subTask_a, subTask_b) => {
            if (subTask_a.timestamp > subTask_b.timestamp) return 1;
            if (subTask_a.timestamp < subTask_b.timestamp) return -1;
            else return 0;
          });
        }

        // performing sort on sub-tasks of task element i.e. "task_b"
        if (task_b.subTasks.length > 0) {
          task_b.subTasks = task_b.subTasks.sort((subTask_a, subTask_b) => {
            if (subTask_a.timestamp < subTask_b.timestamp) return 1;
            if (subTask_a.timestamp > subTask_b.timestamp) return -1;
            else return 0;
          });
        }

        // performing sort on main tasks elements i.e. "task_a" & "task_b"
        if (task_a.timestamp < task_b.timestamp) return 1;
        if (task_a.timestamp > task_b.timestamp) return -1;
        else return 0;
      });
    }

    // committing changes to the state via mutation i.e. "sortTasks"
    commit("sortTasks", sortedTasks);
  },

  // action to mutate the "taskList" state by adding a new task in it
  addTask({ commit }, newTask) {
    // pushing newly created task in the "main_tasks" state
    state.main_tasks.push(newTask);
    commit("taskCreated", state.main_tasks);
  },

  // action to mutate the "status" of "taskList" state
  isCompleted({ commit }, taskID) {
    // filtering out task by id and update its "isCompleted" status
    state.main_tasks = state.main_tasks.filter((task) => {
      if (task.id === taskID) {
        task.isCompleted = task.isCompleted ? false : true;
      }
      return task;
    });

    // mutating the isChecked
    commit("isChecked", state.main_tasks);
  },

  // action to mutate the "taskList" state by deleting a task from it
  // keeping in view the modern development approach,
  // I prefer flag as "isDeleted" instead actually deleting
  isDeleted({ commit }, taskID) {
    // filtering out task by id and update its "isCompleted" status
    state.main_tasks = state.main_tasks.filter((task) => {
      if (task.id === taskID) {
        task.isDeleted = true;
      }
      return task;
    });

    // mutating the isRemoved
    commit("isRemoved", state.main_tasks);
  },
};

const mutations = {
  taskCreated: (state, main_tasks) => (state.filteredTasks = main_tasks),
  sortTasks: (state, sortedTasks) => (state.filteredTasks = sortedTasks),
  isChecked: (state, updatedTaskList) =>
    (state.filteredTasks = updatedTaskList),
  // removing deleted flag tasks and re-storing it in "filteredTasks"
  isRemoved: (state, updatedTaskList) =>
    (state.filteredTasks = updatedTaskList.filter(
      (task) => task.isDeleted === false
    )),
};

export default { state, getters, actions, mutations };
