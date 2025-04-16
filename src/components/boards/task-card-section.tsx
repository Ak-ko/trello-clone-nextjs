import React from "react";
import TaskCard from "./task-card";
import AddTaskCardButton from "./add-task-card-button";
import { useBoardState } from "../context/board-state-context";

export default function TaskCardSection({
    droppableCardId,
}: {
    droppableCardId: number;
}) {
    const { droppableCards, addTask, editTask, completeTask } = useBoardState();
    const droppableCard = droppableCards.find(
        (dc) => dc.id === droppableCardId
    );
    const tasks = droppableCard ? droppableCard.tasks : [];

    const handleAddNewTaskCard = (name: string) => {
        if (!name) return;
        addTask(droppableCardId, name);
    };

    const handleEditTask = (taskId: number, name: string) => {
        editTask(droppableCardId, taskId, name);
    };

    const handleTaskCompletion = (taskId: number, isCompleted: boolean) => {
        completeTask(droppableCardId, taskId, isCompleted);
    };

    return (
        <>
            <div className="space-y-2">
                {tasks?.map((task, idx) => (
                    <React.Fragment key={task.id}>
                        {/* Drop zone above */}
                        <div
                            className="h-1 w-full transition-colors duration-200"
                            data-drop-position="above"
                            style={{ minHeight: 4, margin: 0, padding: 0 }}
                        />
                        <TaskCard
                            task={task}
                            onCompleteTask={handleTaskCompletion}
                            onEditTask={handleEditTask}
                            droppableCardId={droppableCardId}
                            index={idx}
                            totalTasks={tasks.length}
                        />
                        {/* Drop zone below (after last card) */}
                        {idx === tasks.length - 1 && (
                            <div
                                className="h-1 w-full transition-colors duration-200"
                                data-drop-position="below"
                                style={{ minHeight: 4, margin: 0, padding: 0 }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="mt-4">
                <AddTaskCardButton onAddNewTaskCard={handleAddNewTaskCard} />
            </div>
        </>
    );
}
