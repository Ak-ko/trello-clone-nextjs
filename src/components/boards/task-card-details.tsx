import { TaskT, UserT } from "@/@types/board";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { useEffect, useRef, useState } from "react";
import { keydownActions } from "@/lib/keydown";

import DueDatePicker, { DateRangeT } from "./due-date-picker";
import Dates from "./date-inputs/dates";
import MemberPicker from "./members/member-picker";
import TaskMembers from "./members/task-members";
import DescriptionTextEditor from "./description-text-editor";

export default function TaskCardDetails({
    task,
    onEdit,
}: {
    task: TaskT;
    onEdit?: (id: number, name: string) => void;
}) {
    const [editing, setEditing] = useState(false);
    const [dateRange, setDateRange] = useState<DateRangeT>({
        from: undefined,
        to: undefined,
    });
    const [selectedMembers, setSelectedMembers] = useState<UserT[]>(
        [] as UserT[]
    );

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

        onEdit && onEdit(task.id, input.value.trim());

        setEditing(false);
    };

    const handleBlur = () => {
        handleEdit();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        keydownActions.enter(e, handleEdit);
        keydownActions.escape(e, handleCancel);
    };

    const handleDateChange = (date: DateRangeT) => {
        setDateRange(date);
    };

    const handleMemberChange = (members: UserT[]) => {
        setSelectedMembers(members);
    };

    const handleDescriptionSave = (description: string) => {
        console.log({ description });
    };

    return (
        <DialogHeader>
            <DialogTitle>
                <div>
                    {!editing ? (
                        <h1
                            onClick={handleClick}
                            className="font-bold text-wrap mb-3"
                        >
                            {task.name}
                        </h1>
                    ) : (
                        <input
                            autoFocus
                            className="border w-full py-1"
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            type="text"
                            defaultValue={task.name}
                            ref={inputRef}
                        />
                    )}
                </div>
            </DialogTitle>
            {/* 
                Description with Rich Text Editor
                
                Comment Section
            */}
            <DialogDescription asChild>
                <div className="flex justify-between">
                    <div className="basis-[70%]">
                        <div className="flex items-center gap-8">
                            <TaskMembers members={selectedMembers} />
                            <Dates dateRange={dateRange} />
                        </div>
                        <div>
                            <DescriptionTextEditor
                                onSave={handleDescriptionSave}
                            />
                        </div>
                    </div>
                    <div className="bg-primary/80 shadow-inner shadow-gray-500 basis-[30%] p-2 rounded-lg space-y-3">
                        <DueDatePicker onDateChange={handleDateChange} />
                        <MemberPicker onMemberChange={handleMemberChange} />
                    </div>
                </div>
            </DialogDescription>
        </DialogHeader>
    );
}
