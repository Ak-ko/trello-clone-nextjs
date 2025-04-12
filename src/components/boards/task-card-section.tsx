import { defaultTasks } from "@/data/boards";
import React, { useState } from "react";

import TaskCard from "./task-card";
import AddTaskCardButton from "./add-task-card-button";

export default function TaskCardSection() {
    const [tasks, setTasks] = useState(defaultTasks);

    const handleAddNewTaskCard = (name: string) => {
        const newTask = {
            id: tasks[tasks.length - 1].id + 1,
            name,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    return (
        <>
            <div className="space-y-2">
                {tasks?.map((task) => (
                    <TaskCard task={task} key={task.id} />
                ))}
            </div>

            <div className="mt-4">
                <AddTaskCardButton onAddNewTaskCard={handleAddNewTaskCard} />
            </div>
        </>
    );
}
