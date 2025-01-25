/** 1 Node - Modules, Components, Hooks, Icons */
import { describe, it, expect, beforeEach } from "vitest";
import { obj } from "data-support";
import { faker } from "@faker-js/faker";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { Tasks } from "@/components/entities/tasks/TasksStore";
import { Task, TaskStatus } from "types/task.d";

describe("TaskStore", () => {
  let tasksStore: Tasks;

  /**
   * Инициализация нового экземпляра перед каждым тестом
   */
  beforeEach(() => {
    tasksStore = new Tasks();
  });

  it("Должно вернуть созданное задание", () => {
    const firstTaskTitle = faker.animal.dog();
    const createdTask: Task = tasksStore.createTask({ title: firstTaskTitle });

    expect(createdTask.title).toBe(firstTaskTitle);
  });

  it("Должно быть создано новое активное задание", () => {
    const firstTaskTitle: string = faker.animal.dog();
    tasksStore.createTask({ title: firstTaskTitle });

    expect(tasksStore.tasks.length).toBe(1);
    expect(tasksStore.tasks[0].title).toBe(firstTaskTitle);
    expect(tasksStore.tasks[0].status).toBe(TaskStatus.ACTIVE);
  });

  it("Должен измениться видимый активный статус", () => {
    const defaultVisibleActiveStatus: TaskStatus = tasksStore.visibleActiveStatus;
    tasksStore.changeVisibleActiveStatus(TaskStatus.ACTIVE);

    expect(defaultVisibleActiveStatus).toBeUndefined();
    expect(tasksStore.visibleActiveStatus).toBe(TaskStatus.ACTIVE);
  });

  it("Должен возвращать все задачи, если visibleActiveStatus не установлен", () => {
    tasksStore.createTask({ title: faker.animal.fish() });
    tasksStore.createTask({ title: faker.animal.cat() });

    expect(tasksStore.visibleByStatus.length).toBe(2);
  });

  it("Должен фильтровать задачи по visibleActiveStatus", () => {
    const createdTask: Task = tasksStore.createTask(faker.animal.fish());
    tasksStore.updateByUuid(obj.get(createdTask, "uuid"), { status: TaskStatus.COMPLETED });

    tasksStore.changeVisibleActiveStatus(TaskStatus.ACTIVE);

    // Не должно быть активных задач
    expect(tasksStore.visibleByStatus.length).toBe(0);
  });

  it("Должен обновить задачу по uuid", () => {
    tasksStore.createTask({ title: faker.animal.fish() });

    const taskUuid = tasksStore.tasks[0].uuid;
    const updatedTitle = faker.animal.dog();

    tasksStore.updateByUuid(taskUuid, { title: updatedTitle });

    expect(tasksStore.tasks[0].title).toBe(updatedTitle);
  });

  it("Должен удалить задачу по uuid", () => {
    tasksStore.createTask({ title: faker.animal.dog() });
    const taskUuid = tasksStore.tasks[0].uuid;

    tasksStore.deleteByUuid(taskUuid);

    // Должно быть 0 задач после удаления
    expect(tasksStore.tasks.length).toBe(0);
  });
});
