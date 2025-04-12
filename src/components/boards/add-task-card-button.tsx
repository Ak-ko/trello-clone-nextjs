import { PlusIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function AddTaskCardButton({
    onAddNewTaskCard,
}: {
    onAddNewTaskCard?: (name: string) => void;
}) {
    const [adding, setAdding] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleClick = () => {
        setAdding(true);
    };

    const handleCancel = () => {
        setAdding(false);
    };

    const handleAdd = () => {
        if (!textareaRef?.current) return;

        if (!textareaRef.current.value.trim()) {
            textareaRef.current.focus();
            return;
        }

        onAddNewTaskCard && onAddNewTaskCard(textareaRef.current.value.trim());

        setAdding(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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

    return !adding ? (
        <button
            onClick={handleClick}
            className="cursor-pointer  py-2 px-3 hover:shadow rounded-full text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-300 w-full flex items-center gap-1"
        >
            <PlusIcon size={15} />
            <span>Add a Card</span>
        </button>
    ) : (
        <div>
            <textarea
                ref={textareaRef}
                onKeyDown={handleKeyDown}
                autoFocus
                className="border bg-white w-full block my-2 min-h-20 text-start p-2 resize-none rounded-xl"
                placeholder="Enter task"
            />
            <div className="flex items-center gap-2">
                <button
                    onClick={handleAdd}
                    className="px-3 text-sm cursor-pointer hover:bg-blue-300 py-1 bg-blue-500 text-white rounded-full"
                >
                    Add Card
                </button>
                <XIcon
                    onClick={handleCancel}
                    className="border  rounded-full text-slate-500 cursor-pointer hover:shadow px-1"
                    size={30}
                />
            </div>
        </div>
    );
}
