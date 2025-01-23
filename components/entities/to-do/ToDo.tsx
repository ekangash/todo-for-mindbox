/** 1 Node - Modules, Components, Hooks, Icons */
import React, {useCallback} from "react";
import {nanoid} from "nanoid";

/** 2 App - Components, Hooks */
import {ToDoTaskCreate} from "@/components/entities/to-do/task/create/ToDoTaskCreate";
import {ToDoTaskList} from "@/components/entities/to-do/task/list/ToDoTaskList";
import {Loader} from "@/components/shared/loader/Loader";
import {ToDoStore} from "@/components/entities/to-do/ToDoStore.ts";

/** 3 Entities, Stores, Packages, Enums ... */
import {ToDoTaskActions} from "@/components/entities/to-do/task/actions/ToDoTaskActions";

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const ToDo: React.FC = (): React.ReactElement => {

    /**
     * Инициализация загрузки задач
     *
     * @return {Promise<void>}
     */
    const initLoadTasks = useCallback(() => {
        ToDoStore.fetchTasksFromLocalStorage();

        return new Promise((resolve): void => {
            setTimeout(resolve, 2500)
        });
    }, []);

    return (
        <div className="flex w-full flex-col justify-center space-y-4 p-6 bg-window rounded-3xl border border-solid border-border">
            <ToDoTaskCreate />
            <div className="flex w-full flex-col justify-center space-y-4">
                <ToDoTaskActions />
                <Loader
                    expect={initLoadTasks}
                    filled
                >
                    {() => (
                        <ToDoTaskList />
                    )}
                </Loader>
            </div>
        </div>
    )
};