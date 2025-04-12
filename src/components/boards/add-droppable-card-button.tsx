"use client";

import { PlusIcon } from "lucide-react";
import React, { useState } from "react";

import AddDroppableCard from "./add-droppable-card";

export default function AddDroppableCardButton({
    onAddNewDroppableCard,
}: {
    onAddNewDroppableCard?: (name: string) => void;
}) {
    const [isAdding, setIsAdding] = useState(false);

    const handleClickAddButton = () => {
        setIsAdding(true);
    };

    const handleAdd = (name: string) => {
        onAddNewDroppableCard && onAddNewDroppableCard(name);
        setIsAdding(false);
    };

    const handleCancel = () => {
        setIsAdding(false);
        onAddNewDroppableCard && onAddNewDroppableCard("");
    };

    return !isAdding ? (
        <div className="shrink-0 max-w-[300px] w-full">
            <button
                onClick={handleClickAddButton}
                className="flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-300 text-slate-500 w-full min-h-[40px] rounded-lg"
            >
                <PlusIcon />
                <span className="ml-2">Add New</span>
            </button>
        </div>
    ) : (
        <AddDroppableCard onAdd={handleAdd} onCancel={handleCancel} />
    );
}
