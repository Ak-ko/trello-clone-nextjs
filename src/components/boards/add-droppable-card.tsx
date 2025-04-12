import { XIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";

export default function AddDroppableCard({
    onCancel,
    onAdd,
}: {
    onCancel?: () => void;
    onAdd?: (name: string) => void;
}) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAdd = () => {
        if (inputRef?.current) {
            if (inputRef.current.value.trim()) {
                onAdd && onAdd(inputRef.current.value.trim());
            } else {
                inputRef?.current?.focus();
            }
        }
    };

    const handleCancel = () => {
        onCancel && onCancel();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case "Enter":
                handleAdd();
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
            <div className="mb-4 border w-full">
                <input
                    autoFocus
                    type="text"
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    className="w-full block px-2 py-1"
                    placeholder="Enter name"
                />
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={handleAdd}
                    className="px-3 text-sm cursor-pointer hover:bg-blue-300 py-1 bg-blue-500 text-white rounded-full"
                >
                    Add List
                </button>
                <XIcon
                    className="border  rounded-full text-slate-500 cursor-pointer hover:shadow px-1"
                    size={30}
                    onClick={handleCancel}
                />
            </div>
        </div>
    );
}
