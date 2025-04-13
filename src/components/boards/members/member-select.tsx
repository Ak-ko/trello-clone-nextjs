import { UserT } from "@/@types/board";
import React from "react";
import MemberAvater from "../member-avater";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MemberSelect({
    member,
    onSelect,
    icon,
    variant = "default",
    avaterClass,
    textClass,
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
    avaterClass?: string;
    textClass?: string;
}) {
    return (
        <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-3">
                <MemberAvater className={avaterClass} member={member} />
                <h1 className={cn("font-bold", textClass)}>{member.name}</h1>
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
