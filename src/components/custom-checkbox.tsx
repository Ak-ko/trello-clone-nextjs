import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function CustomCheckBox({
    defaultChecked,
    className,
    onChecked,
}: {
    defaultChecked?: boolean;
    className?: string;
    onChecked?: (checked: boolean) => void;
}) {
    const [checked, setChecked] = useState(defaultChecked || false);

    const handleChecked = () => {
        setChecked((prev) => !prev);

        onChecked?.(!checked);
    };

    return (
        <div
            onClick={handleChecked}
            className={cn(
                "w-[12px] h-[12px] rounded-full border border-gray-600",
                checked ? "bg-green-400" : "bg-white",
                className
            )}
        />
    );
}
