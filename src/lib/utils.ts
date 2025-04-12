import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const tagColors = {
    todo: "bg-chart-1 text-white",
    inProgress: "bg-chart-2 text-white",
    done: "bg-chart-3 text-white",
    bug: "bg-destructive text-white",
};
