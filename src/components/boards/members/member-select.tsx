import { UserT } from "@/@types/board";
import React from "react";
import MemberAvater from "../member-avater";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function MemberSelect({
    member,
    onSelect,
    icon,
    variant = "default",
}: {
    member: UserT;
    onSelect: (id: number) => void;
    icon?: React.ReactNode;
    variant?:
        | "link"
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost";
}) {
    return (
        <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-3">
                <MemberAvater member={member} />
                <h1 className="font-bold">{member.name}</h1>
            </div>
            <Button
                size={"icon"}
                variant={variant}
                onClick={() => onSelect(member.id)}
                className="border border-gray-300 px-3 py-1 rounded-full cursor-pointer"
            >
                {icon || <Plus />}
            </Button>
        </div>
    );
}
