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
            isCompleted: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleEditTask = (taskId: number, name: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, name } : task
            )
        );
    };

    const handleTaskCompletion = (taskId: number, isCompleted: boolean) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted } : task
            )
        );
    };

    return (
        <>
            <div className="space-y-2">
                {tasks?.map((task) => (
                    <TaskCard
                        task={task}
                        key={task.id}
                        onCompleteTask={handleTaskCompletion}
                        onEditTask={handleEditTask}
                    />
                ))}
            </div>

            <div className="mt-4">
                <AddTaskCardButton onAddNewTaskCard={handleAddNewTaskCard} />
            </div>
        </>
    );
}
