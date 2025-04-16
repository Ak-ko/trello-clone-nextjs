import React, { createContext, useContext, useState } from "react";
import { DroppableCardT, TaskT } from "@/@types/board";
import { defaultDroppableCards, defaultTasks } from "@/data/boards";

export type DroppableCardWithTasks = DroppableCardT & { tasks: TaskT[] };

type BoardStateContextT = {
    droppableCards: DroppableCardWithTasks[];
    setDroppableCards: React.Dispatch<
        React.SetStateAction<DroppableCardWithTasks[]>
    >;
    addDroppableCard: (name: string) => void;
    editDroppableCard: (id: number, name: string) => void;
    addTask: (droppableCardId: number, name: string) => void;
    editTask: (droppableCardId: number, taskId: number, name: string) => void;
    completeTask: (
        droppableCardId: number,
        taskId: number,
        isCompleted: boolean
    ) => void;
    moveTask: (
        fromDroppableId: number,
        toDroppableId: number,
        taskId: number
    ) => void;
};

const BoardStateContext = createContext<BoardStateContextT | undefined>(
    undefined
);

export const BoardStateProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [droppableCards, setDroppableCards] = useState<
        DroppableCardWithTasks[]
    >(defaultDroppableCards.map((dc) => ({ ...dc, tasks: [...defaultTasks] })));

    const addDroppableCard = (name: string) => {
        if (!name) return;
        setDroppableCards((prev) => [
            ...prev,
            {
                id: prev.length ? prev[prev.length - 1].id + 1 : 1,
                name,
                tasks: [],
            },
        ]);
    };

    const editDroppableCard = (id: number, name: string) => {
        setDroppableCards((prev) =>
            prev.map((dc) => (dc.id === id ? { ...dc, name } : dc))
        );
    };

    const addTask = (droppableCardId: number, name: string) => {
        setDroppableCards((prev) =>
            prev.map((dc) =>
                dc.id === droppableCardId
                    ? {
                          ...dc,
                          tasks: [
                              ...dc.tasks,
                              { id: Date.now(), name, isCompleted: false },
                          ],
                      }
                    : dc
            )
        );
    };

    const editTask = (
        droppableCardId: number,
        taskId: number,
        name: string
    ) => {
        setDroppableCards((prev) =>
            prev.map((dc) =>
                dc.id === droppableCardId
                    ? {
                          ...dc,
                          tasks: dc.tasks.map((t) =>
                              t.id === taskId ? { ...t, name } : t
                          ),
                      }
                    : dc
            )
        );
    };

    const completeTask = (
        droppableCardId: number,
        taskId: number,
        isCompleted: boolean
    ) => {
        setDroppableCards((prev) =>
            prev.map((dc) =>
                dc.id === droppableCardId
                    ? {
                          ...dc,
                          tasks: dc.tasks.map((t) =>
                              t.id === taskId ? { ...t, isCompleted } : t
                          ),
                      }
                    : dc
            )
        );
    };

    const moveTask = (
        fromDroppableId: number,
        toDroppableId: number,
        taskId: number
    ) => {
        setDroppableCards((prev) => {
            let taskToMove: TaskT | undefined;
            const updated = prev.map((dc) => {
                if (dc.id === fromDroppableId) {
                    const filtered = dc.tasks.filter((t) => {
                        if (t.id === taskId) {
                            taskToMove = t;
                            return false;
                        }
                        return true;
                    });
                    return { ...dc, tasks: filtered };
                }
                return dc;
            });
            if (taskToMove) {
                return updated.map((dc) =>
                    dc.id === toDroppableId
                        ? { ...dc, tasks: [...dc.tasks, taskToMove!] }
                        : dc
                );
            }
            return updated;
        });
    };

    return (
        <BoardStateContext.Provider
            value={{
                droppableCards,
                setDroppableCards,
                addDroppableCard,
                editDroppableCard,
                addTask,
                editTask,
                completeTask,
                moveTask,
            }}
        >
            {children}
        </BoardStateContext.Provider>
    );
};

export const useBoardState = () => {
    const ctx = useContext(BoardStateContext);
    if (!ctx)
        throw new Error("useBoardState must be used within BoardStateProvider");
    return ctx;
};
