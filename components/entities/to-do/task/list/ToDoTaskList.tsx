/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {observer} from "mobx-react-lite";
import {Clipboard, ClipboardCheck, ClipboardList, Trash} from "lucide-react";

/** 2 App - Components, Hooks */
import {Button} from "@/components/shared/button/Button";
import {Icon} from "@/components/shared/icon/Icon";
import {TaskCard} from "@/components/widgets/task/card/TaskCard";
import {Loader} from "@/components/shared/loader/Loader";

/** 3 Entities, Stores, Packages, Enums ... */
import {ToDoStore} from "@/components/entities/to-do/ToDoStore";
import {Task, TaskStatus} from "@/types/task.d";


/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const ToDoTaskList: React.FC = observer((): React.ReactElement => {
    // console.log('ToDoStore.visibleTasks', ToDoStore.visibleTaskList, ToDoStore.visibleTasksStatus)

    return (
        <div className="flex flex-col gap-3">
            {ToDoStore.visibleTaskList.map((task: Task): React.ReactElement => (
                <TaskCard
                    key={task.uuid}
                >
                    <TaskCard.ActionsStatus
                        defaultChecked={task.status === TaskStatus.COMPLETED}
                        onChange={(checked) => {
                            ToDoStore.updateTask(task.uuid, { status: checked ? TaskStatus.COMPLETED : TaskStatus.ACTIVE })
                                .sendTasksToLocalStorage();
                        }}
                    />
                    <TaskCard.Title
                        completed={true}
                    >
                        {task.title}
                    </TaskCard.Title>
                    <TaskCard.ActionsTrash
                        onClick={() => {
                            ToDoStore.trashTask(task.uuid).sendTasksToLocalStorage();
                        }}
                        className="ml-auto"
                    />
                </TaskCard>
            ))}
        </div>
    );
});