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
    showTooltip = false,
    tooltipText,
    className,
}: {
    showTooltip?: boolean;
    tooltipText?: string;
    member: { id: number; name: string; image: string };
    className?: string;
}) {
    return showTooltip ? (
        <AvaterWithTooltip
            className={className}
            image={member.image}
            name={member.name}
            tooltipText={tooltipText || member.name}
        />
    ) : (
        <Avater className={className} image={member.image} name={member.name} />
    );
}

const AvaterWithTooltip = ({
    className,
    image,
    name,
    tooltipText,
}: {
    className?: string;
    image?: string;
    tooltipText: string;
    name: string;
}) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Avater className={className} image={image} name={name} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltipText}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

const Avater = ({
    className,
    image,
    name,
}: {
    className?: string;
    image?: string;
    name: string;
}) => {
    return (
        <>
            {image ? (
                <div
                    className={cn(
                        "flex items-center space-x-2 w-10 h-10",
                        className
                    )}
                >
                    <img
                        src={image}
                        alt={name}
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
                    <span>{name.charAt(0).toUpperCase()}</span>
                </div>
            )}
        </>
    );
};
