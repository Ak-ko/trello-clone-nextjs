import React, { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";

import DateTimeInput from "./date-inputs/date-time-input";

type DateT = Date | undefined;

export interface DateRangeT {
    from: DateT;
    to: DateT;
}

export default function DueDatePicker({
    onDateChange,
}: {
    onDateChange?: (date: DateRangeT) => void;
}) {
    const [rangeDate, setRangeDate] = useState<DateRangeT>({
        from: undefined,
        to: undefined,
    });

    const [openPopover, setOpenPopover] = useState(false);

    const handleStartDateChange = (date: Date | undefined) => {
        setRangeDate({
            ...rangeDate,
            from: date || undefined,
        });
    };
    const handleEndDateChange = (date: Date | undefined) => {
        setRangeDate({
            ...rangeDate,
            to: date || undefined,
        });
    };

    const handleStartTimeChange = (time: string | undefined) => {
        console.log(time);
    };
    const handleEndTimeChange = (time: string | undefined) => {
        console.log(time);
    };

    const handleClosePopover = () => {
        setOpenPopover(false);
    };

    const handleSave = () => {
        onDateChange?.(rangeDate);

        setOpenPopover(false);
    };

    return (
        <Popover open={openPopover} onOpenChange={setOpenPopover}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] pl-3 text-left font-normal cursor-pointer"
                    )}
                >
                    <span>Date</span>
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto" align="start" side="right">
                <div className="flex flex-col items-center pb-5">
                    <h1 className="font-bold text-sm mb-2">Dates</h1>
                    <Calendar
                        today={new Date()}
                        modifiersClassNames={{
                            today: "bg-primary text-white",
                            range_start: "bg-primary text-white",
                            range_middle:
                                "bg-primary/20 rounded-none !text-black",
                            range_end: "bg-primary text-white",
                        }}
                        mode="range"
                        selected={rangeDate}
                        initialFocus
                    />
                </div>
                <div className="space-y-2">
                    <DateTimeInput
                        label="Start Date"
                        includeTime={false}
                        onDateChange={handleStartDateChange}
                        onTimeChange={handleStartTimeChange}
                    />
                    <DateTimeInput
                        label="Due Date"
                        includeTime={false}
                        onDateChange={handleEndDateChange}
                        onTimeChange={handleEndTimeChange}
                    />
                </div>
                <div className="my-3 flex items-center gap-2">
                    <Button
                        onClick={handleClosePopover}
                        className="cursor-pointer grow"
                        variant={"ghost"}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        className="cursor-pointer grow"
                    >
                        Save
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
