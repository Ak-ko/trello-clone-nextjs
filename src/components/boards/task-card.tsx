import { TaskT, UserT } from "@/@types/board";
import { Card, CardContent } from "../ui/card";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useDroppable, useDraggable } from "@dnd-kit/core";

import CustomCheckBox from "../custom-checkbox";
import TaskCardDetails from "./task-card-details";
import { useId } from "react";
import { useBoardState } from "../context/board-state-context";

export default function TaskCard({
    task,
    onCompleteTask,
    onEditTask,
    droppableCardId,
    index,
    totalTasks,
}: {
    task: TaskT;
    onCompleteTask?: (taskId: number, isCompleted: boolean) => void;
    onEditTask?: (taskId: number, name: string) => void;
    onSelectMembers?: (members: UserT[]) => void;
    droppableCardId: number;
    index?: number;
    totalTasks?: number;
}) {
    const id = useId();
    const { attributes, listeners, setNodeRef, transform, isDragging, active } =
        useDraggable({
            id: `draggable-${task.id}-${id}`,
            data: { droppableId: droppableCardId, taskId: task.id },
        });

    // Drop zone above
    const { setNodeRef: setDropAboveRef, isOver: isOverAbove } = useDroppable({
        id: `drop-above-${task.id}`,
    });
    // Drop zone below
    const { setNodeRef: setDropBelowRef, isOver: isOverBelow } = useDroppable({
        id: `drop-below-${task.id}`,
    });

    const style = transform
        ? {
              cursor: "grab",
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0) rotate(10deg)`,
          }
        : undefined;

    const handleChecked = (checked: boolean) => {
        onCompleteTask?.(task.id, checked);
    };

    const handleEdit = (id: number, name: string) => {
        onEditTask?.(id, name);
    };

    return (
        <>
            {/* Drop zone above */}
            <div
                ref={setDropAboveRef}
                className={`h-1 w-full transition-colors duration-200 ${
                    isOverAbove ? "bg-blue-300" : ""
                }`}
                data-drop-position="above"
                style={{ minHeight: 4, margin: 0, padding: 0 }}
            />
            <Dialog>
                <DialogTrigger asChild>
                    <Card
                        ref={setNodeRef}
                        style={style}
                        className="!p-3 rounded-xl cursor-pointer hover:shadow-lg group/task-card"
                        onClick={(e) => {
                            // Only open dialog if not clicking drag handle or checkbox
                            if (
                                e.target instanceof HTMLElement &&
                                !e.target.closest(".drag-handle") &&
                                !e.target.closest(".custom-checkbox")
                            ) {
                                e.stopPropagation();
                                // DialogTrigger will handle opening
                            } else {
                                e.stopPropagation();
                            }
                        }}
                    >
                        <CardContent className="!px-4">
                            <div className="flex items-center">
                                {/* Drag handle */}
                                <div
                                    {...listeners}
                                    {...attributes}
                                    className="drag-handle w-4 h-4 mr-2 flex items-center justify-center cursor-grab hover:text-blue-500 select-none"
                                    style={{ userSelect: "none" }}
                                    onClick={(e) => e.stopPropagation()}
                                    ref={setNodeRef}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <circle cx="4" cy="4" r="1.5" />
                                        <circle cx="4" cy="8" r="1.5" />
                                        <circle cx="4" cy="12" r="1.5" />
                                        <circle cx="8" cy="4" r="1.5" />
                                        <circle cx="8" cy="8" r="1.5" />
                                        <circle cx="8" cy="12" r="1.5" />
                                        <circle cx="12" cy="4" r="1.5" />
                                        <circle cx="12" cy="8" r="1.5" />
                                        <circle cx="12" cy="12" r="1.5" />
                                    </svg>
                                </div>
                                <CustomCheckBox
                                    defaultChecked={task.isCompleted}
                                    onChecked={handleChecked}
                                    className={`custom-checkbox $$${
                                        !task.isCompleted
                                            ? "invisible opacity-0 group-hover/task-card:visible group-hover/task-card:opacity-100 group-hover/task-card:mr-1.5"
                                            : "mr-1.5"
                                    }   transition-all duration-500 mt-0.5`}
                                />
                                <div
                                    className={`$$$${
                                        !task.isCompleted &&
                                        "-translate-x-[20px] group-hover/task-card:translate-x-0"
                                    } transition-all duration-500`}
                                >
                                    <h3
                                        className={`${
                                            task.isCompleted &&
                                            "line-through ml-1"
                                        }  text-sm font-semibold text-gray-800 select-none transition-all duration-500`}
                                    >
                                        {task.name}
                                    </h3>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px] border-primary/80 shadow-primary/20 shadow border-4">
                    <TaskCardDetails
                        droppableCardId={droppableCardId}
                        onEdit={handleEdit}
                        task={task}
                    />
                </DialogContent>
            </Dialog>
            {/* Drop zone below */}
            <div
                ref={setDropBelowRef}
                className={`h-1 w-full transition-colors duration-200 ${
                    isOverBelow ? "bg-blue-300" : ""
                }`}
                data-drop-position="below"
                style={{ minHeight: 4, margin: 0, padding: 0 }}
            />
        </>
    );
}
