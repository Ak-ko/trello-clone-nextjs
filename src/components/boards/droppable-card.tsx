"use client";

import React, { useEffect, useRef, useState } from "react";
import TaskCardSection from "./task-card-section";
import { keydownActions } from "@/lib/keydown";
import { useDroppable } from "@dnd-kit/core";

export default function DroppableCard({
    droppableCard,
    onEdit,
}: {
    onEdit?: (id: number, name: string) => void;
    droppableCard: { id: number; name: string };
}) {
    const [editing, setEditing] = useState(false);

    const { isOver, setNodeRef } = useDroppable({
        id: `droppable-${droppableCard.id}`,
    });
    const style = {
        color: isOver ? "green" : undefined,
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.select();
        }
    }, [editing]);

    const handleClick = () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setEditing(false);
    };

    const handleEdit = () => {
        const input = inputRef?.current;
        if (!input || !input.value.trim()) {
            return;
        }

        onEdit && onEdit(droppableCard.id, input.value.trim());

        setEditing(false);
    };

    const handleBlur = () => {
        handleEdit();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        keydownActions.enter(e, handleEdit);
        keydownActions.escape(e, handleCancel);
    };

    return (
        <div className="shrink-0 max-w-[300px] w-full p-3 bg-gray-200 border border-gray-300 rounded-xl shadow-sm">
            <div>
                {!editing ? (
                    <h1
                        onClick={handleClick}
                        className="font-bold text-wrap mb-3"
                    >
                        {droppableCard.name}
                    </h1>
                ) : (
                    <input
                        autoFocus
                        className="border w-full"
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        type="text"
                        defaultValue={droppableCard.name}
                        ref={inputRef}
                    />
                )}
            </div>

            <TaskCardSection />
        </div>
    );
}
