import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { UserPlus } from "lucide-react";
import React, { useState } from "react";
import TaskCardAssignMembers from "./task-card-assign-members";
import { UserT } from "@/@types/board";

export default function MemberPicker({
    onMemberChange,
}: {
    onMemberChange: (users: UserT[]) => void;
}) {
    const [openPopover, setOpenPopover] = useState(false);

    return (
        <Popover open={openPopover} onOpenChange={setOpenPopover}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className="w-[240px] pl-3 text-left font-normal cursor-pointer"
                >
                    <span>Members</span>
                    <UserPlus className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="min-w-[100px]"
                align="start"
                side="right"
            >
                <div className="flex flex-col  pb-5">
                    <h1 className="font-bold text-sm mb-2 text-center">
                        Members
                    </h1>
                    <TaskCardAssignMembers onSelect={onMemberChange} />
                </div>
            </PopoverContent>
        </Popover>
    );
}
