"use client";

import React, { useEffect, useRef, useState } from "react";

export default function DroppableCard({
    droppableCard,
    onEdit,
}: {
    onEdit?: (id: number, name: string) => void;
    droppableCard: { id: number; name: string };
}) {
    const [editing, setEditing] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
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
        switch (e.key) {
            case "Enter":
                handleEdit();
                break;
            case "Escape":
                handleCancel();
                break;
            default:
                break;
        }
    };

    return (
        <div className="shrink-0 max-w-[300px] w-full p-3 bg-gray-200 border border-gray-300 rounded-md shadow-sm">
            <div>
                {!editing ? (
                    <h1 onClick={handleClick} className="font-bold text-wrap">
                        {droppableCard.name}
                    </h1>
                ) : (
                    <input
                        className="border w-full"
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        type="text"
                        defaultValue={droppableCard.name}
                        ref={inputRef}
                    />
                )}
            </div>
        </div>
    );
}
