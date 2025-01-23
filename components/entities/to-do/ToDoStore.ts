/** 1 Node - Modules, Components, Hooks, Icons */
import { computed, action, makeObservable, observable } from "mobx";
import { nanoid } from "nanoid";
import { toJS } from "mobx";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import {Task, TaskUuid, TaskStatus} from "@/types/task.d";

/**
 * @class ToDo
 */
class ToDo {
  tasks: Task[] = [];
  visibleTasksStatus?: TaskStatus;

  /**
   * @return {void}
   */
  constructor() {
    makeObservable(this, {
      tasks: observable,
      visibleTasksStatus: observable,
      createActiveTask: action,
      changeVisibleTasksStatus: action,
      updateTask: action,
      visibleTaskList: computed
    });
  }

  /**
   *
   * @param visibleTasksStatus
   *
   * @return {void}
   */
  changeVisibleTasksStatus(visibleTasksStatus?: TaskStatus): void {
    this.visibleTasksStatus = visibleTasksStatus;
  }


  setTasks(tasks) {
    this.tasks = tasks;
  }

  /**
   * @return {Task[]}
   */
  get visibleTaskList(): Task[] {
    if (this.visibleTasksStatus === undefined) {
      return toJS(this.tasks);
    }

    const visibleTaskUuids: Task[] = this.tasks.filter((task: Task): boolean => {
      return task.status === this.visibleTasksStatus;
    }, []);

    return toJS(visibleTaskUuids);
  }

  /**
   *
   * @param {string} title
   *
   * @return {this}
   */
  createActiveTask(title: string): this {
    this.tasks.push({
      uuid: nanoid(16),
      title: title,
      status: TaskStatus.ACTIVE
    });

    return this;
  }

  /**
   *
   * @param {TaskUuid} uuid
   * @param {Partial<Task>} taskProps
   *
   * @return {this}
   */
  updateTask(uuid: TaskUuid, taskProps: Partial<Task>): this {
    for (let taskInx of this.tasks.keys()) {
      const task = this.tasks[taskInx];

      if (task.uuid === uuid) {
        this.tasks[taskInx] = {...task, ...taskProps};
      }
    }

    return this;
  }

  /**
   *
   * @param {TaskUuid} uuid
   *
   * @return {this}
   */
  trashTask(uuid: TaskUuid): this {
    for (let taskInx of this.tasks.keys()) {
      const task: Task = this.tasks[taskInx];

      if (task.uuid === uuid) {
        this.tasks.splice(taskInx, 1);
      }
    }

    return this;
  }


  sendTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(toJS(this.tasks)));
  }

  fetchTasksFromLocalStorage(): void {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || "[]") as Task[];
  }
}

/**
 * @var ToDoStore
 */
export const ToDoStore: ToDo = new ToDo();
