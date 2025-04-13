import { cn } from "@/lib/utils";
import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";

export default function MemberAvater({
    member,
    className,
}: {
    member: { id: number; name: string; image: string };
    className?: string;
}) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {member?.image ? (
                        <div
                            className={cn(
                                "flex items-center space-x-2 w-10 h-10",
                                className
                            )}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full rounded-full"
                            />
                        </div>
                    ) : (
                        <div
                            className={cn(
                                "flex items-center space-x-2 bg-primary text-black w-10 h-10 rounded-full justify-center",
                                className
                            )}
                        >
                            <span>{member.name.charAt(0).toUpperCase()}</span>
                        </div>
                    )}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{member.name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
