import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus } from "lucide-react";
import React from "react";
import BoardAssignMembers from "./board-assign-members";

export default function BoardMemberAssignButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="px-3 border-l border-gray-300">
                    <Button className="cursor-pointer">
                        <UserPlus />
                        Assign
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Assign Members Here !</DialogTitle>
                    <DialogDescription>
                        Here, you can assign new members or remove existing
                        members.
                    </DialogDescription>
                </DialogHeader>

                <BoardAssignMembers />
            </DialogContent>
        </Dialog>
    );
}
