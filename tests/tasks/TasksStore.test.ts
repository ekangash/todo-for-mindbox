/** 1 Node - Modules, Components, Hooks, Icons */
import { describe, it, expect } from "vitest";
import { inst } from "data-support";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { Tasks } from "components/entities/tasks/TasksStore";

describe("TaskStore", () => {
  it("Первоначальный тест", () => {
    const store = new Tasks();

    const objIsInstanceOfClass = inst.assert(store);

    expect(objIsInstanceOfClass).toEqual(true);
  });
});
